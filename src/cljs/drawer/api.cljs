(ns drawer.api
  (:require [drawer.core :as core]
            [drawer.util :as util]))

(defn ^:export addObject
  "Adds an object to the object list."
  [obj-name points]
  (core/add-change (fn [state]
                     (js/alert state)
                     (assoc-in state
                       [:objects obj-name]
                       (util/create-object (js->clj points))))))
