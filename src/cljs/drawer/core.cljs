(ns drawer.core
  (:require [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [cljs.core.async :as async :refer [put! chan >! <! close! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def ^:private fps
  "The fps the canvas should update
  the objects with."
  (/ 1000 100))

(def ^:private canvas
  "The canvas dom element."
  (.getElementById js/document "canvas"))

(def ^:private context
  "The canvas 2d context."
  (.getContext canvas "2d"))

(def ^:private controls
  "The controls dom element."
  (.getElementById js/document "controls"))

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

(defn- post-canvas-update
  "Checks whether the canvas requires
  an update, and posts a new event on
  the canvas channel after core/fps
  if it does, updating the canvas."
  [state]
  (let [objs (state :objects)
        update-fns (for [[obj-name _]
                         (filter #(canvas/requires-update? (second %)) objs)]
                     (fn [s] (assoc-in s
                                      [:objects obj-name]
                                      (canvas/update-object (get-in s [:objects obj-name])
                                                            (s :objects)))))]
    (if (not-empty update-fns)
      (go (<! (timeout fps))
          (canvas-action (apply comp update-fns))))
    state))

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
                 (canvas/redraw-canvas canvas context)
                 post-canvas-update
                 ((condp = chan
                    user-channel (fn [s] (gui/redraw-object-list s))
                    canvas-channel (fn [s] s)))
                 )))))
