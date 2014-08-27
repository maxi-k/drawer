(ns drawer.init
  (:require [drawer.core :as core]
            [drawer.util :as util]
            [drawer.document :as doc]
            [drawer.gui :as gui]
            [drawer.api :as api]))

(defn- set-canvas-size
  "Set the canvas size to the maximum
  possible without overflow and update
  the respective fields in the state."
  []
  (let [cwidth (.-offsetWidth core/controls)
        width (max (- (.-innerWidth js/window) (js/parseInt cwidth)) 750)
        height (max (.-innerHeight js/window) 600)]
    (.setAttribute core/canvas "width" (dec width))
    (.setAttribute core/canvas "height" height)
    (core/canvas-action (fn [state]
                          (-> state
                              (assoc-in [:canvas :width] width)
                              (assoc-in [:canvas :height] height)
                              (assoc-in [:canvas :view :pos]
                                        [(/ width 2)
                                         (/ height 2)
                                         10 0]))))))

;; Initialize the screen
(def ^:export doInit
  (do
    (util/set-html! core/controls doc/controls)
    (util/set-html! "prompt-overlay" doc/prompt)

    ;; Initially draw all gui-components
    (doseq [component gui/components]
      (util/set-html! (component :parent)
                      ((component :html) core/initial-state)))

    (api/addInitScenario)

    ;; Calling set-canvas-size when the site loads
    (set-canvas-size)

    ;; Setting the canvas size on window resize (window.onresize)
    (set! (.-onresize js/window) set-canvas-size)))
