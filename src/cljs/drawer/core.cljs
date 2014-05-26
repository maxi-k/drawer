(ns drawer.core
  (:require [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [cljs.core.async :as async :refer [put! chan >! <! close! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def fps
  "Run the game at 60 fps"
  (/ 1000 60))

(def canvas
  "The canvas dom element."
  (.getElementById js/document "canvas"))

(def context
  "The canvas 2d context."
  (.getContext canvas "2d"))

(def controls
  "The controls dom element."
  (.getElementById js/document "controls"))

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

(defn user-action
  "Adds an action into the user channel.
  This applies the action to the current state
  and updates the gui asynchronously."
  ([] (put! user-channel identity))
  ([action] (put! user-channel action)))

;; Initializing the screen
(user-action)

(def ^:private canvas-channel (chan))

(defn canvas-action
  "Adds an action into the canvas channel.
  This applies the action to the current state
  and updates the gui asynchronously."
  ([] (put! canvas-channel identity))
  ([action] (put! canvas-channel action)))

;; This could be called the "game loop".
;; Based on core.async channels, this updates
;; the necessary parts of the gui whenever
;; something updates a channel.
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
                 )))))
