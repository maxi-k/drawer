;; Exporting some required functions
;; for usage in javascript
(ns drawer.api.state
  (:require [drawer.state :as state]))

(defn ^:export getInfo
  "Gets information from the info."
  [info-keys]
  (get-in @state/info (js->clj info-keys)))

(defn ^:export changeInfo
  "Changes the info of given keys (nested)
  with given value"
  [info-keys value]
  (state/change-info (map #(keyword %) info-keys) value))


(defn ^:export getSelected
  "Gets the name of the currently selected object."
  []
  (@state/info :selected))

(defn ^:export setSelected
  "Sets the currently selected object to given name."
  [obj-name]
  (state/change-info [:selected] obj-name))

(defn ^:export addObject
  "Add an object to the objects map
  with given name as key."
  [obj-name points]
  (state/add-object obj-name (js->clj points)))

(defn ^:export removeObject
  "Remove the entry with given key
  from the objects map"
  [obj-name]
  (state/remove-object obj-name))
