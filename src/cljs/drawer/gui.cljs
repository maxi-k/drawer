(ns drawer.gui
  (:require [drawer.util :as util]))

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

(defn redraw-object-list
  "Redraws the list of objects and buttons"
  [state]
  (let [object-list
        (for [[obj-name obj] (state :objects)
              :let [selected? (= obj-name (get-in state [:info :selected]))]]
          (str "<li>"
               (util/construct-htag
                 "a", obj-name,
                 "href" "#",
                 "id" (if selected? "selected-obj" nil),
                 "onclick" (str "drawer.api.setSelected(&#39;" obj-name "&#39;)"))
               "</li>"))]
    (util/set-dom! "object-list" (str "<ul>" (apply str object-list) "</ul>")))
  state)
