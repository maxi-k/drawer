(ns drawer.api
  (:require [drawer.core :as core]
            [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [drawer.data :as data]))

(defn ^:export addObject
  "Adds an object to the object list."
  [obj-name points]
  (core/add-change (fn [state]
                     (assoc-in state
                       [:objects obj-name]
                       (canvas/create-object (js->clj points))))))

;; TEMPORARY
(addObject "Linie" [[100 100 0 0] [150 300 0 0]])
(addObject "Dreieck" [[300 200 0 0] [400 400 0 0] [200 400 0 0]])

(defn ^:export setSelected
  "Sets the currently selected object."
  [obj-name]
  (core/add-change (fn [state]
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
