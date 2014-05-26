(ns drawer.core
  (:require [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [cljs.core.async :as async :refer [put! chan >! <! close! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def ^:private fps
  "Run the game at 60 fps"
  (/ 1000 60))

(def ^:private canvas
  "The canvas dom element."
  (.getElementById js/document "canvas"))

(def ^:private context
  "The canvas 2d context."
  (.getContext canvas "2d"))

(def ^:private controls
  "The controls dom element."
  (.getElementById js/document "controls"))

(defn set-canvas-size
  "Set the canvas size to the maximum
  possible without overflow."
  []
  (let [cwidth (.-offsetWidth controls)
        width  (- (.-innerWidth js/window) (js/parseInt cwidth))
        height (.-innerHeight js/window)]
    (.setAttribute canvas "width" (dec width))
    (.setAttribute canvas "height" height)))

;; Calling set-canvas-size when the site loads
(set-canvas-size)

;; Setting the canvas size on window resize (window.onresize)
(set! (.-onresize js/window) set-canvas-size)

(defn redraw-canvas
  "Redraws the screen once."
  [state]
  (canvas/clear canvas context)
  (doseq [[obj-name obj] (state :objects)]
    (if (= (get-in state [:info :selected]) obj-name)
      (set! (.-strokeStyle context) "#f00")
      (set! (.-strokeStyle context) "#000"))
    (canvas/draw-object obj context))
  state)

(def ^:private user-channel (chan))

(defn add-change
  "Adds a function to the list of
  changes to be applied to the state."
  [action]
  (put! user-channel action))

(add-change (fn [state] state))

(def ^:private canvas-channel (chan))

(def ^:private inputs
  (async/merge [user-channel
                canvas-channel]))

;; The game loop
(defn- game-loop []
  (go
    (loop [state {:objects {}
                  :info {:selected :none}}]
      (let [[action chan] (alts! [user-channel
                                  canvas-channel]
                                 :priority true)]
        (recur (-> (action state)
                   canvas/update
                   redraw-canvas
                   ((condp = chan
                      user-channel (fn [s] (gui/redraw-object-list s))
                      canvas-channel (fn [s] s)))
                   ))))))


(game-loop)
