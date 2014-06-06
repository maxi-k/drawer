(ns drawer.api
  (:require [drawer.core :as core]
            [drawer.util :as util]
            [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [drawer.data :as data]))

(defn ^:export addObject
  "Adds an object to the object list."
  ([obj-name points] (addObject obj-name points "Eigenes Zentrum" 0))
  ([obj-name points rot-speed] (addObject obj-name points "Eigenes Zentrum" rot-speed))
  ([obj-name points rot-center rot-speed]
     (core/user-action (fn [state]
                         (assoc-in
                          state
                          [:objects obj-name]
                          (canvas/create-object (js->clj points) rot-center rot-speed))))))

;; This is just for testing purposes
(defn set-rotation
  "Sets the rotation for current."
  [center speed]
  (core/user-action (fn [state] (let [selected (get-in state [:info :selected])]
                                 (if (not= :none selected)
                                   (-> state
                                       (assoc-in [:objects selected :rotation :speed 0]
                                                 (/ speed 100))
                                       (assoc-in [:objects selected :rotation :center]
                                                 center))
                                   (do (js/alert "Bitte zuerst ein Objekt auswählen!")
                                       state))))))

(defn ^:export setRotation
  "Sets the rotation for current element."
  []
  (let [center (.-value (util/element-by-id "test-rot-center"))
        speed (js/parseFloat (.-value (util/element-by-id "test-rot-speed")))]
    (set-rotation center speed)))

(defn ^:export printState
  "Alerts the current state map."
  []
  (core/user-action (fn [state] (js/alert state) state)))

;; This is just for testing purposes
(defn ^:export addChange [f] (core/user-action f))

;; TEMPORARY
(addObject "Linie" [[500 300 0 0] [450 500 0 0]] "Dreieck" 0.75)
(addObject "Dreieck" [[500 300 0 0] [600 500 0 0] [400 500 0 0]] 0.2)

(defn ^:export setSelected
  "Sets the currently selected object."
  [obj-name]
  (core/user-action (fn [state]
                      (assoc-in state [:info :selected] obj-name))))

(defn ^:export displayPrompt
  "Displays the user prompt for
  adding canvas objects."
  []
  (gui/display-prompt data/prompt-add-obj))

(defn ^:export closePrompt
  "Displays the user prompt for
  adding canvas objects."
  []
  (gui/close-prompt))

(defn ^:export submitPrompt
  "Submits the filled add-obj prompt."
  []
  (closePrompt))
