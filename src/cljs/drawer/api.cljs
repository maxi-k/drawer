(ns drawer.api
  (:require [drawer.util :as util]
            [drawer.lang :as lang]
            [drawer.geometry :as geometry]
            [drawer.math :as math :refer [sqrt]]
            [cljs.core.async :as async :refer [put! chan >! <! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

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

(defn ^:export updateObjectProjection
  "Returns a function that re-computes the 2d-points
  of the object with given name."
  [obj-name]
  (fn [state]
    (update-in state [:objects obj-name] geometry/project-obj (state :camera))))

(defn ^:export updateEveryObjectProjection
  "Returns a function that re-computes the 2d-points
  of all objects."
  []
  (fn [state]
    (let [camera (state :camera)]
      (update-in state [:objects]
                 util/update-values #(geometry/project-obj % camera)))))

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
      (-> state
          (assoc-in [:objects obj-name :rotation :active] do-rotate)
          (assoc-in [:objects obj-name :rotation :done-deg] 0)))))

(defn ^:export setRotationCenterType
  [obj-name center-type]
  (fn [state]
    (if (contains? (state :objects) obj-name)
      (assoc-in state [:objects obj-name :rotation :center :type] center-type)
      state)))

(defn ^:export setRotationCenterValue
  [obj-name center-val]
  (fn [state]
    (if (and (contains? (state :objects) obj-name)
             (some? center-val))
      (assoc-in state [:objects obj-name :rotation :center :value] center-val)
      state)))

(defn ^:export setRotationOnAll
  "Returns a function that activates/deactivates the rotation on all objects."
  [do-rotate]
  (fn [state]
    (update-in state [:objects] util/update-values #(assoc-in %
                                                              [:rotation :active]
                                                              do-rotate))))

(defn ^:export setPointCoord
  "Returns a function that sets
  one coordinate of an object's point to given value."
  [obj-name point-index coord-index new-value]
  (fn [state]
    (let [path [:objects obj-name]
          new-obj (-> (get-in state path)
                      (assoc-in [:points point-index coord-index]
                                (js/parseInt new-value))
                      (geometry/project-obj (state :camera)))]
      (assoc-in state path new-obj))))

(defn ^:export loadScene
  "Loads a scene into the state by replacing the other objects."
  [prompt-data selected-item replace?]
  (if replace?
    (fn [s] (-> s (assoc :objects (prompt-data selected-item))))
    (fn [s] (assoc s :objects (merge (s :objects) (prompt-data selected-item))))))

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
