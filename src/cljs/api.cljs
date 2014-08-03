(ns api
  (:require [drawer.core :as core]
            [drawer.util :as util]
            [drawer.canvas :as canvas]))

(defn ^:export addObject
  "Adds an object to the object list."
  ([obj-name points] (addObject obj-name points "Eigenes Zentrum" 0))
  ([obj-name points rot-speed] (addObject obj-name points "Eigenes Zentrum" rot-speed))
  ([obj-name points rot-center rot-speed]
     (core/user-action
      (fn [state]
        (assoc-in
         state
         [:objects obj-name]
         (canvas/create-object (js->clj points) rot-center rot-speed))))))

(defn ^:export addObjects
  "Adds multiple objects to the object list."
  [objs]
  (core/user-action (fn [state]
                      (reduce (fn [new-state [obj-name obj]]
                                assoc-in new-state [:objects obj-name] obj)
                              state objs))))

(defn ^:export removeObject
  "Removes an object from the object list
  after confirming."
  [obj-name]
  (if (js/confirm "Objekt entfernen?")
    (core/user-action (fn [state] (update-in state [:objects] dissoc obj-name)))))

(defn ^:export removeAllObjects
  "Removes all objects from the object list
  after confirming."
  []
  (if (js/confirm "Alle Objekte entfernen?")
    (core/user-action (fn [state] (assoc state :objects {})))))

(defn ^:export printState
  "Alerts the current state map."
  []
  (core/user-action (fn [state] (js/alert state) state)))

;; TEMPORARY
(addObject "Punkt" [[450 300 0 0]] "Linie" 0.4)
(addObject "Linie" [[500 300 0 0] [450 500 0 0]] "Dreieck" 0.75)
(addObject "Dreieck" [[500 300 0 0] [600 500 0 0] [400 500 0 0]] -0.2)

(defn ^:export setSelected
  "Sets the currently selected object."
  [obj-name]
  (core/user-action (fn [state]
                      (assoc-in state [:info :selected] obj-name))))

(defn ^:export setActiveTab
  "Sets the currently active tab."
  [active]
  (core/user-action (fn [state]
                      (assoc-in state [:info :active-tab] (keyword active)))))

(defn ^:export toggleDropdown
  "Toggles the dropdown menu of the options button."
  [elem-id]
  (let [dropdown-div (util/element-by-id elem-id)
        style (.-display (.-style dropdown-div))]
    (if (= "none" style)
      (do
        (set! (.-display (.-style dropdown-div)) "block")
        (set! (.-onmouseup js/window) #(toggleDropdown elem-id)))
      (do
        (set! (.-display (.-style dropdown-div)) "none")
        (set! (.-onmouseup js/window) nil)))))
