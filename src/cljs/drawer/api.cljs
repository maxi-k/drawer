(ns drawer.api
  (:require [drawer.core :as core]
            [drawer.util :as util]
            [drawer.lang :as lang]
            [drawer.canvas :as canvas]))

(defn ^:export addObject
  "Adds an object to the object list."
  ([obj-name points conns]
     (addObject obj-name points conns [:center nil] [0 0 0 0]))
  ([obj-name points conns rot-speed]
     (addObject obj-name points conns [:center nil] rot-speed))
  ([obj-name points conns rot-center rot-speed]
     (core/user-action
      (fn [state]
        (assoc-in state [:objects obj-name]
                  (canvas/create-object (state :canvas)
                                        (js->clj points)
                                        (js->clj conns)
                                        (apply canvas/create-rot-center rot-center)
                                        rot-speed))))))

(defn ^:export removeObject
  "Removes an object from the object list
  after confirming."
  [obj-name]
  (if (js/confirm (str ((lang/translate :remove-object) obj-name) "?"))
    (core/user-action (fn [state] (update-in state [:objects] dissoc obj-name)))))

(defn ^:export removeAllObjects
  "Removes all objects from the object list
  after confirming."
  []
  (if (js/confirm (str (lang/translate :remove-all-objects) "?"))
    (core/user-action (fn [state] (assoc state :objects {})))))

(defn ^:export printState
  "Alerts the current state map."
  []
  (core/user-action (fn [state] (js/alert state) state)))

(defn ^:export setSelected
  "Sets the currently selected object."
  [obj-name]
  (core/user-action (fn [state]
                      (assoc-in state [:info :selected] obj-name))))

(defn ^:export selectNothing
  "Selects 'nothing', setting the currently selected
   object to :none"
  []
  (setSelected :none))

(defn ^:export setRotationOnAll
  "Activates/Deactivates the rotation on all objects."
  [do-rotate]
  (core/user-action
   (fn [state]
     (let [new-objs (apply merge (for [[obj-name obj] (state :objects)]
                                   {obj-name (assoc-in obj
                                                       [:rotation :active]
                                                       do-rotate)}))]
       (assoc state :objects new-objs)))))

(defn ^:export setActiveTab
  "Sets the currently active tab."
  [active]
  (core/user-action (fn [state]
                      (assoc-in state [:info :active-tab] active))))

(defn ^:export toggleDropdown
  "Toggles the dropdown menu of the options button."
  [elem-id]
  (let [dropdown-div (util/element-by-id elem-id)
        style (.-display (.-style dropdown-div))]
    (if (= "none" style)
      (do (set! (.-display (.-style dropdown-div)) "block")
          (set! (.-onmouseup js/window) #(toggleDropdown elem-id)))
      (do (set! (.-display (.-style dropdown-div)) "none")
          (set! (.-onmouseup js/window) nil)))))

(defn ^:export addInitScenario
  "Adds a default scenario to the canvas."
  []
  ;; TEMPORARY
  (doseq [obj
          #{[ "Punkt"
              [[450 300 0 0]]
              (util/default-obj-connections 1)
              [:object-part {:name "Linie" :part :center}]
              [-0.8]]

            [ "Linie"
              [[500 300 0 0] [450 500 0 0]]
              (util/default-obj-connections 2)
              [:object-part {:name "Dreieck" :part :center}]
              [0.75]]

            [ "Dreieck"
              [[500 300 0 0] [600 500 0 0] [400 500 0 0]]
              (util/default-obj-connections 3)]}]
    (apply addObject obj))

  (let [a 300 b 100 c 25 d -25]
    (addObject "Würfel"
               [[a a d 0] [b a d 0] [b b d 0] [a b d 0]
                [a a c 0] [b a c 0] [b b c 0] [a b c 0]]
               {0 [1 3 4], 1 [2 5], 2 [3 6], 3 [7], 4 [5 7], 5 [6], 6 [7]}
               [0.2 0 0 0])))
