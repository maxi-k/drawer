(ns drawer.input
  (:require [drawer.geometry :as g]
            [drawer.api :as api]
            [cljs.core.async :as async :refer [put! chan >! <! timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- cursor-in-textfield? []
  (let [hitlist #{"INPUT" "TEXTFIELD"}]
    (contains? hitlist (.. js/document -activeElement -nodeName))))

(defn key-up
  [event] nil)

(defn key-down
  [event user-ac]
  (let [step 3
        action (fn [pos f]
                 (user-ac (comp (api/updateEveryObjectProjection)
                                #(update-in % [:camera :cams (get-in % [:camera :active]) pos]
                                            f step))))]
    (when-not (cursor-in-textfield?)
      (condp = (.-keyCode event)
        37 (action 0 +) ;; left-arrow  -> camera x +
        39 (action 0 -) ;; right-arrow -> camera x -
        38 (action 1 -) ;; up-arrow    -> camera y -
        40 (action 1 +) ;; down-arrow  -> camera y +
        33 (action 2 -) ;; page-up     -> camera z -
        34 (action 2 +) ;; page-down   -> camera z +
        35 (action 3 +) ;; end         -> camera w +
        36 (action 3 -) ;; home        -> camera w -
        18 (user-ac #(update-in % [:camera :active] (fn [v] (if (= 0 v) 1 0))))
        nil))))

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
