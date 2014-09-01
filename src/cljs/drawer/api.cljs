(ns drawer.api
  (:require [drawer.util :as util]
            [drawer.lang :as lang]
            [drawer.canvas :as canvas]))

(defn ^:export addObject
  "Returns a function that adds an object to the object list."
  ([obj-name points conns]
     (addObject obj-name points conns [:center nil] [0 0 0 0]))
  ([obj-name points conns rot-speed]
     (addObject obj-name points conns [:center nil] rot-speed))
  ([obj-name points conns rot-center rot-speed]
     (fn [state]
       (assoc-in state [:objects obj-name]
                 (canvas/create-object (state :canvas)
                                       (js->clj points)
                                       (js->clj conns)
                                       (apply canvas/create-rot-center rot-center)
                                       rot-speed)))))

(defn ^:export removeObject
  "Returns a function that removes an object from the object list
  after confirming."
  [obj-name]
  (fn [state] (if (js/confirm (str ((lang/translate :remove-object) obj-name) "?"))
               (-> state
                   (assoc-in [:info :selected] :none)
                   (update-in [:objects] dissoc obj-name))
               state)))

(defn ^:export removeAllObjects
  "Returns a function that removes all objects from the object list
  after confirming."
  []
  (fn [state]
    (if (js/confirm (str (lang/translate :remove-all-objects) "?"))
      (assoc state :objects {})
      state)))

(defn ^:export printState
  "Returns a function that alerts the current state map."
  []
  (fn [state] (js/alert state) state))

(defn ^:export setSelected
  "Returns a function that sets the currently selected object."
  [obj-name]
  (fn [state]
    (assoc-in state [:info :selected] obj-name)))

(defn ^:export setSelectedPoint
  "Returns a function that sets the currently selected point
  of an object on the canvas."
  [obj-name point-index]
  (fn [state]
    (assoc-in state [:info :selected-point] {:name obj-name
                                             :part [point-index]})))

(defn ^:export selectNothing
  "Returns a function that selects 'nothing',
  setting the currently selected object to :none"
  []
  (setSelected :none))

(defn ^:export setRotationOnAll
  "Returns a function that activates/deactivates the rotation on all objects."
  [do-rotate]
  (fn [state]
    (let [new-objs (apply merge (for [[obj-name obj] (state :objects)]
                                  {obj-name (assoc-in obj
                                                      [:rotation :active]
                                                      do-rotate)}))]
      (assoc state :objects new-objs))))

(defn ^:export setActiveTab
  "Returns a function that sets the currently active tab."
  [active]
  (fn [state] (assoc-in state [:info :active-tab] active)))

(defn ^:export toggleDropdown
  "Returns a function that toggles the dropdown menu of the options button."
  [elem-id]
  (fn [state]
    (let [dropdown-div (util/element-by-id elem-id)
          style (.-display (.-style dropdown-div))
          new-active (if (= "none" style) elem-id :none)]
      (-> state (assoc-in [:info :active-dropdown] new-active)))))

(defn ^:export setPointCoord
  "Returns a function that sets
   one coordinate of an object's point to given value."
  [obj-name point-index coord-index new-value]
  (fn [state]
    (let [path [:objects obj-name]
          new-obj (-> (get-in state path)
                      (assoc-in [:points point-index coord-index] new-value)
                      (canvas/project-obj (state :canvas)))]
      (assoc-in state path new-obj))))

;; TEMPORARY
(defn ^:export addInitScenario
  "Returns a function that adds a default scenario to the canvas."
  [state]
  (let [fn-2d (apply comp
                     (for [obj
                           #{[ "Punkt"
                               [[200 300 0 0]]
                               (canvas/default-obj-connections 1)
                               [:object-part {:name "Linie" :part :center}]
                               [-0.8]]

                             [ "Linie"
                               [[200 200 0 0] [180 400 0 0]]
                               (canvas/default-obj-connections 2)
                               [:object-part {:name "Dreieck" :part :center}]
                               [0.75]]

                             [ "Dreieck"
                               [[500 300 0 0] [600 500 0 0] [400 500 0 0]]
                               (canvas/default-obj-connections 3)]}]
                       (apply addObject obj)))
        fn-3d (let [a 300 b 100 c 25 d -25]
                (addObject "Würfel"
                           [[a a d 0] [b a d 0] [b b d 0] [a b d 0]
                            [a a c 0] [b a c 0] [b b c 0] [a b c 0]]
                           {0 [1 3 4], 1 [2 5], 2 [3 6], 3 [7], 4 [5 7], 5 [6], 6 [7]}
                           [0.2 0 0 0]))]
    ((comp fn-2d fn-3d) state)))
