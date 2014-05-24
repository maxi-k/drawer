(ns core.io
  (:require [core.util :as util]))

;; A bit cheaty, but it works for now
(defn set-dom!
  "Sets the innerHTML of given element."
  [element value]
  (if (= (type element) js/String)
    (set! (.-innerHTML (util/element-by-id element)) value)
    (set! (.-innerHTML element) value)))

(defn display-prompt
  "Displays a prompt for user input."
  [content]
  (let [overlay (util/element-by-id "prompt-overlay")
        prompt (util/element-by-id "prompt")]
    (set! (-> overlay (.-style) (.-display)) "block")
    (set! (.-innerHTML prompt) (apply str content))))

(defn close-prompt
  "Closes the user prompt."
  []
  (let [overlay (util/element-by-id "prompt-overlay")
        prompt (util/element-by-id "prompt")]
    (set! (-> overlay (.-style) (.-display)) "none")
    (set! (.-innerHTML prompt) "")))
