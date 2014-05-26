(ns drawer.init
  (:require [drawer.core :as core]))

(defn- set-canvas-size
  "Set the canvas size to the maximum
  possible without overflow."
  []
  (let [cwidth (.-offsetWidth core/controls)
        width  (- (.-innerWidth js/window) (js/parseInt cwidth))
        height (.-innerHeight js/window)]
    (.setAttribute core/canvas "width" (dec width))
    (.setAttribute core/canvas "height" height))
  (core/canvas-action))

;; Calling set-canvas-size when the site loads
(set-canvas-size)

;; Setting the canvas size on window resize (window.onresize)
(set! (.-onresize js/window) set-canvas-size)
