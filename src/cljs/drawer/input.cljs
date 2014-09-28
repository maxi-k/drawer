(ns drawer.input
  (:require [drawer.geometry :as g]
            [drawer.api :as api]
            [cljs.core.async :as async :refer [put! chan >! <! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn key-up
  [event] nil)

(defn key-down
  [event user-ac]
  (let [step 3
        action (fn [pos f]
                 (user-ac (comp (api/updateEveryObjectProjection)
                                #(update-in % [:camera :pos pos] f step))))]
    (condp = (.-keyCode event)
      37 (action 0 +) ;; left-arrow  -> camera x +
      39 (action 0 -) ;; right-arrow -> camera x -
      38 (action 1 -) ;; up-arrow    -> camera y -
      40 (action 1 +) ;; down-arrow  -> camera y +
      33 (action 2 -) ;; page-up     -> camera z -
      34 (action 2 +) ;; page-down   -> camera z +
      17 (action 3 +) ;; ctrl/strg   -> camera w +
      18 (action 3 -) ;; alt         -> camera w -
      nil)))

(defn- listen-keys
  [down-chan up-chan user-ac]
  (go (while true
        (let [v (<! down-chan)]
          (key-down v user-ac)))))

(defn- init-key-listeners
  [user-ac]
  (let [down-chan (chan)
        up-chan (chan)]
    (set! (.-onkeydown js/window) (fn [e] (put! down-chan e)))
    (set! (.-onkeyup js/window) (fn [e] (put! up-chan e)))
    (listen-keys down-chan up-chan user-ac)))
