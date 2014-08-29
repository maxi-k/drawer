(ns drawer.core
  (:require [drawer.api :as api]
            [drawer.canvas :as canvas]
            [drawer.gui :as gui]
            [drawer.util :as util]
            [reagent.core :as r]
            [cljs.core.async :as async :refer [put! chan >! <! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def ^:private fps
  "The fps the canvas should update
  the objects with in milliseconds."
  (/ 1000 60))

(def ^:private initial-state
  "The state of the program."
  {:info {:selected :none
          :active-tab "info-tab"
          :active-dropdown :none}
   :canvas {:width 0 :height 0
            :view {:pos [0 0 0 0]
                   :fov 250}}
   :objects {}
   :pending-object {:name "" :object {}}})

(defn- init-watches
  "Initializers any state-atom watchers."
  [state]
  (add-watch state :redraw-canvas
             (let [canvas (.getElementById js/document "canvas")
                   context (.getContext canvas "2d")]
               (fn [key ref old new]
                 (canvas/redraw-canvas new canvas context)))))

(defn- app
  "Update the state of the program
  everytime it recieves a change
  from one of the channels."
  [state channels]
  (go (while true
        (swap! state
               ((alts! channels :priority true) 0)))))

(defn- construct-actor
  "Contstructs an 'action-function'
  for 'state', that applies
  (apply comp action add-fns)
  th the state immediately."
  [state & add-fns]
  (let [add-action (apply comp add-fns)]
    (fn
      ([] (swap! state add-action))
      ([action] (swap! state (comp action add-action))))))

(defn- construct-actor-async
  "Constructs an 'action-function' for
  given channel, that puts
  (apply comp action add-fns)
  on the channel, which then get's
  applied to the state by 'app' asynchronously."
  [channel & add-fns]
  (let [add-action (apply comp add-fns)]
    (fn
      ([] (put! channel add-action))
      ([action] (put! channel (comp action add-action))))))

(defn ^:export init
  "Initializes the program."
  []
  (let [state (r/atom initial-state)
        cnvch (chan)
        usr-ac (construct-actor state)
        cnv-ac (construct-actor-async cnvch canvas/get-canvas-update)]
    (app state [cnvch])
    (gui/init-gui state usr-ac)
    (init-watches state)
    (go (while true
          (<! (timeout fps))
          (cnv-ac)))
    (set! (.-onresize js/window) #(cnv-ac (canvas/get-canvas-info)))
    (usr-ac api/addInitScenario))
  ((.-onresize js/window)))
