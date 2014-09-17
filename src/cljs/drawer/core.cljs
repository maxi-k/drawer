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
  "The initial state of the program."
  {:selected {:obj :none
              :point {:name :none :part [0]}}
   :canvas {:width 0 :height 0
            :center [0 0]
            :v-dist 0
            :h-dist 0}
   :objects {}
   :pending-object {:name "" :object {}}})

(defn- fetch-state
  "Loads the state from local storage
  and keywordifies the right parts."
  []
  (util/fetch-local "state" initial-state))

(defn- save-state
  "Stores the state locally."
  [state]
  (util/store-locally "state" state))

(defn- init-watches
  "Initializers any state-atom watchers."
  [state]
  (add-watch state :redraw-canvas
             (let [canvas (.getElementById js/document "canvas")
                   context (.getContext canvas "2d")]
               (fn [_ _ _ new]
                 (util/request-anim-frame
                  #(canvas/redraw-canvas new canvas context))))))

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

(defn ^:export init
  "Initializes the program."
  []
  (let [state (r/atom (fetch-state))
        usr-ac (construct-actor state)
        cnv-ac (construct-actor state canvas/get-canvas-update)]
    (gui/init-gui state usr-ac)
    (init-watches state)
    (go (while true
          (<! (timeout fps))
          (cnv-ac)))
    (set! (.-onunload js/window) #(save-state @state))
    (set! (.-onresize js/window) #((cnv-ac canvas/set-canvas-info)
                                   (go (<! (timeout 100))
                                       (canvas/translate-canvas! (@state :canvas)))))
    ((.-onresize js/window))
    (usr-ac api/addInitScenario)))
