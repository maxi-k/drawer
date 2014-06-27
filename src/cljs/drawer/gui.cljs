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

(defn- set-test-objects
  "Temporary - sets the test objects values."
  [state]
  (let [selected (get-in state [:info :selected])]
    (set! (.-value (util/element-by-id "test-rot-speed"))
          (* 100 (get-in state [:objects selected :rotation :speed 0])))
    (set! (.-value (util/element-by-id "test-rot-center"))
          (get-in state [:objects selected :rotation :center]))))

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
                "class" "obj-button"
                "id" (if selected? "selected-obj" nil),
                "onclick" (str "drawer.api.setSelected(&#39;" obj-name "&#39;)"))
               (util/construct-htag
                "a", "&mdash;"
                "href" "#"
                "class" "left-bordered"
                "onclick" (str "drawer.api.removeObject(&#39" obj-name "&#39;)"))
               (util/construct-htag
                "div", ""
                "class" "clearfloat")
               "</li>"))]
    (util/set-dom! "object-list" (str "<ul>" (apply str object-list) "</ul>")))
  (set-test-objects state)
  state)
