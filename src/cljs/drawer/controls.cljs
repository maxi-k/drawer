(ns drawer.controls
  (:require [drawer.state :as state]
            [core.util :as util]
            [core.io :as io]))


(defn redraw-object-list
  "Redraws the list of objects and buttons"
  []
  (let [object-list (for [[obj-name obj] @state/objects
                          :let [selected? (= obj-name (@state/info :selected))]]
                      (str "<li>"
                           (util/construct-htag
                              "a", obj-name,
                              "href" "#",
                              "id" (if selected? "selected-obj" nil),
                              "onclick" (str "drawer.api.state.setSelected(&#39;" obj-name "&#39;)"))
                           "</li>"))]
    (io/set-dom! "object-list" (str "<ul>" (apply str object-list) "</ul>"))))
