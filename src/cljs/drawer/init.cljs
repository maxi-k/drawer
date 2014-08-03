(ns drawer.init
  (:require [drawer.core :as core]
            [drawer.util :as util]
            [drawer.gui :as gui]))

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

;; Initially draw all gui-components
(doseq [component gui/components]
  (util/set-dom! (component :super-elem) ((component :get-html) core/initial-state)))
