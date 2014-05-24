(ns drawer.api.gui
  (:require [core.io :as io]
            [drawer.data :as data]))

(defn ^:export displayPrompt
  "Displays the user prompt for
  adding canvas objects."
  []
  (io/display-prompt data/prompt-add-obj))

(defn ^:export closePrompt
  "Displays the user prompt for
  adding canvas objects."
  []
  (io/close-prompt))

(defn ^:export submitPrompt
  "Submits the filled add-obj prompt."
  []
  (closePrompt))
