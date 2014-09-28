(ns drawer.api
  (:require [drawer.util :as util]
            [drawer.lang :as lang]
            [drawer.geometry :as geometry]
            [cljs.core.async :as async :refer [put! chan >! <! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn ^:export addObject
  "Returns a function that adds an object to the object list."
  ([obj-name points conns]
     (addObject obj-name points conns [:center nil] [0 0 0 0]))
  ([obj-name points conns rot-speed]
     (addObject obj-name points conns [:center nil] rot-speed))
  ([obj-name points conns rot-center rot-speed]
     (fn [state]
       (assoc-in state [:objects obj-name]
                 (geometry/create-object (state :camera)
                                         (js->clj points)
                                         (js->clj conns)
                                         (apply geometry/create-rot-center rot-center)
                                         rot-speed)))))

(defn ^:export duplicateObject
  "Returns a function that duplicates the object
  with 'obj-name'."
  [obj-name]
  (fn [state]
    (let [objs (state :objects)
          sep "-"
          id (loop [i 1] (if (contains? objs (str obj-name sep i))
                           (recur (inc i)) i))]
      (assoc-in state [:objects (str obj-name sep id)] (objs obj-name)))))

(defn ^:export removeObject
  "Returns a function that removes an object from the object list."
  [obj-name]
  (fn [state] (-> state
                 (assoc-in [:selected :obj] :none)
                 (update-in [:objects] dissoc obj-name))))

(defn ^:export removeAllObjects
  "Returns a function that removes all objects from the object list
  after confirming."
  []
  (fn [state]
    (if (js/confirm (str (lang/translate :remove-all-objects) "?"))
      (assoc state :objects {})
      state)))

(defn ^:export setSelected
  "Returns a function that sets the currently selected object."
  [obj-name]
  (fn [state]
    (assoc-in state [:selected :obj] obj-name)))

(defn ^:export setSelectedPoint
  "Returns a function that sets the currently selected point
  of an object on the geometry."
  [obj-name point-index]
  (fn [state]
    (assoc-in state [:selected :point] {:name obj-name
                                        :part [point-index]})))

(defn ^:export selectNothing
  "Returns a function that selects 'nothing',
  setting the currently selected object to :none"
  []
  (setSelected :none))

(defn ^:export setRotation
  [obj-name do-rotate]
  (fn [state]
    (if (contains? (state :objects) obj-name)
      (assoc-in state [:objects obj-name :rotation :active] do-rotate))))

(defn ^:export setRotationOnAll
  "Returns a function that activates/deactivates the rotation on all objects."
  [do-rotate]
  (fn [state]
    (let [new-objs (apply merge (for [[obj-name obj] (state :objects)]
                                  {obj-name (assoc-in obj
                                                      [:rotation :active]
                                                      do-rotate)}))]
      (assoc state :objects new-objs))))

(defn ^:export setPointCoord
  "Returns a function that sets
  one coordinate of an object's point to given value."
  [obj-name point-index coord-index new-value]
  (fn [state]
    (let [path [:objects obj-name]
          new-obj (-> (get-in state path)
                      (assoc-in [:points point-index coord-index] new-value)
                      (geometry/project-obj (state :camera)))]
      (assoc-in state path new-obj))))

(defn ^:export setActiveTab
  "Returns a function that sets the currently active tab."
  [active]
  (fn [state] (assoc state :active-tab active)))

(defn ^:export toggleDropdown
  "Returns a function that activates the dropdown-menu with 'name'.
  Pass :none to disable any dropdowns."
  [new-active]
  (fn [state] (assoc state :active-dropdown new-active)))

(defn ^:export showMessage
  "Shows the message div with given message for
  'time' milliseconds and then hides it again.
  Accesses the state through given action."
  ([action msg] (showMessage action msg 2500))
  ([action msg time]
     (let [step 0.05
           times (/ 1.0 step)
           fps 1]
       (go (action #(assoc-in % [:message :value] msg))
           (doseq [i (range times)]
             (<! (timeout fps))
             (action #(update-in % [:message :opacity] + step)))
           (action #(assoc-in % [:message :opacity] 1.0))
           (<! (timeout time))
           (doseq [i (range (inc times))]
             (<! (timeout fps))
             (action #(update-in % [:message :opacity] - step)))
           (action #(assoc-in % [:message :opacity] 0))
           (action #(assoc-in % [:message :value] ""))))))

;; TEMPORARY
(defn ^:export addInitScenario
  "Returns a function that adds a default scenario to the geometry."
  [state]
  (let [objs (state :objects)
        fn-2d (apply comp
                     (for [obj
                           #{[ "Punkt"
                               [[-100 0 0 0]]
                               (geometry/default-obj-connections 1)
                               [:object-part {:name "Linie" :part :center}]
                               [-0.8]]

                             [ "Linie"
                               [[-100 -100 0 0] [-120 100 0 0]]
                               (geometry/default-obj-connections 2)
                               [:object-part {:name "Dreieck" :part :center}]
                               [0.75]]

                             [ "Dreieck"
                               [[-100 -100 0 0] [0 100 0 0] [100 -100 0 0]]
                               (geometry/default-obj-connections 3)]}]
                       (if (contains? objs (obj 0))
                         identity
                         (apply addObject obj))))
        fn-3d (let [a 100 b -200 c 0 d 350]
                (addObject "Würfel"
                           [[a a d 0] [b a d 0] [b b d 0] [a b d 0]
                            [a a c 0] [b a c 0] [b b c 0] [a b c 0]]
                           {0 [1 3 4], 1 [2 5], 2 [3 6], 3 [7], 4 [5 7], 5 [6], 6 [7]}
                           [0.1 0 0 0]))]
    ;;((comp fn-2d fn-3d) state)
    (fn-3d state)))
