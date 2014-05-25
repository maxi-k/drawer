(ns drawer.core
  (:require [drawer.canvas :as canvas]
            [drawer.gui :as gui]))

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

(def ^:private user-changes
  "A list of functions to be
  applied to the state on the
  next frame - cleared afterwards."
  (atom '()) )

(defn add-change
  "Adds a function to the list of
  changes to be applied to the state."
  [a]
  (swap! user-changes conj a))

(defn- apply-user-changes
  "Applies the user changes to given
  state and clears out the changes to
  be run through."
  [state]
  (if (peek @user-changes)
    (let [res-state ((apply comp @user-changes) state)]
      (reset! user-changes '())
      (gui/redraw-object-list res-state)
      res-state)
    state))


(defn- redraw-screen
  "Redraws the screen once."
  [state]
  (canvas/clear canvas context)
  (doseq [[obj-name obj] (state :objects)]
    (if (= (get-in state [:info :selected]) obj-name)
      (set! (.-strokeStyle context) "#f00")
      (set! (.-strokeStyle context) "#000"))
    (canvas/draw-object obj context)))

(defn- run-loop
  "Runs the redrawing loop."
  [state]
  (.setTimeout js/window (fn [] (run-loop (-> state
                                             apply-user-changes
                                             canvas/update))) fps)
  (redraw-screen state))

(defn ^:export startLoop
  "Initially starts the redraw-loop."
  []
  (run-loop {:objects {}
             :info {:selected :none}}))
