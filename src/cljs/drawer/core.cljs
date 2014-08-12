(ns drawer.core
  (:require [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [cljs.core.async :as async :refer [put! chan >! <! close! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def ^:private fps
  "The fps the canvas should update
  the objects with."
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

(def ^:private user-channel (chan))

(defn user-action
  "Adds an action into the user channel.
  This applies the action to the current state
  and updates the gui asynchronously."
  ([] (put! user-channel identity))
  ([action] (put! user-channel action)))

(def ^:private canvas-channel (chan))

(defn canvas-action
  "Adds an action into the canvas channel.
  This applies the action to the current state
  and updates the gui asynchronously."
  ([] (put! canvas-channel identity))
  ([action] (put! canvas-channel action)))

(def initial-state
  "The state of the program when it first starts."
  {:info {:selected "Nichts Ausgewählt"
          :active-tab "info-tab"}
   :objects {}
   :pending-object {:name "" :object {}}})

;; Holds the state of the program
;; and updates the view everytime
;; it recieves a change from one
;; of the channels
(go (loop [state initial-state]
      (let [[action _] (alts! [user-channel
                               canvas-channel]
                              :priority true)
            new-state (-> (action state)
                           canvas/get-canvas-update
                          (canvas/redraw-canvas canvas context))]
        (gui/update-view new-state state)
        (recur new-state))))

;; Puts a canvas update onto
;; the channel every [fps] seconds
(go (while true
      (<! (timeout fps))
      (canvas-action canvas/get-canvas-update)))
