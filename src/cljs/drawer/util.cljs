(ns drawer.util
  (:require [goog.string :as gstring]
            [tailrecursion.cljson :refer [clj->cljson cljson->clj]]))

(defn update-values
  "Updates the map 'm' by applying
  the function 'f' with the
  arguments 'args' to every value."
  [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn same-in?
  "Returns whether the items in two maps
  returned by (get-in m [path]) are the same."
  [m1 m2 & path]
  (= (get-in m1 path) (get-in m2 path)))

(def differ-in?
  "Returns whether the items in two maps
  returned by (get-in m [path]) differ."
  (complement same-in?))

(defn map-to-fn-of
  "Returns a map from [ks] to (f k)."
  [f & ks]
  (reduce (fn [o k] (assoc o k (f k))) {} ks))

(defn log
  "Logs given text to the console."
  [x]
  (.log js/console x))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))

(def alert-map (atom {}))
(defn alert-once [id val]
  (when (not (contains? @alert-map id))
    (js/alert val)
    (swap! alert-map assoc id)))

(defn alert-return
  "Alerts given value and returns it unchanged."
  [x]
  (js/alert x)
  x)

(defn construct-htag
  "Constructs an html tag with given params"
  [tag-name content & args]
  (let [param-strs (for [[key val] (partition 2 args)
                         :when (not= val nil)]
                     (str " " key "='" val "'"))]
    (if (= content :closed)
      (str "<" tag-name (apply str param-strs) "/>")
      (str "<" tag-name (apply str param-strs) ">" content "</" tag-name ">"))))

(defn nodelist-to-seq
  "Converts a nodelist to a (not lazy) seq."
  [nodes]
  (let [result-seq (map #(.item nodes %) (range (.-length nodes)))]
    (doall result-seq)))

(defn try-parse-int
  "If js/parseInt succeeds, returns the parsed Int,
  otherwise returns nil"
  [v]
  (let [i (js/parseInt v)]
    (if (js/isNaN i) nil i)))

(defn element-by-id
  "Returns the dom element with given id."
  [id]
  (.getElementById js/document id))

(defn elements-of-class
  "Returns a vector of all dom elements with given class."
  [class-name]
  (js->clj (.getElementsByClassName js/document class-name)))

(defn elements-by-tag
  "Returns a vector of all dom elements with given tag name."
  [tag-name]
  (nodelist-to-seq (.getElementsByTagName js/document tag-name)))

(defn set-html!
  "Sets the innerHTML of given element."
  [element value]
  (if (= (type element) js/String)
    (set! (.-innerHTML (element-by-id element)) value)
    (set! (.-innerHTML element) value)))

(defn change-items
  "Changes all keys/values of the
  datastructure 'm' by applying 'f'
  to each one."
  [f m]
  (cond
   (map? m) (into {} (for [[k v] m] [(change-items f m) (change-items f m)]))
   (coll? m) (vec (map #(change-items f %) m))
   :else (f m)))

(defn store-locally
  "Stores given object in the
  html5 localStorage.
  Use fetch to get it again."
  [k obj]
  (.setItem js/localStorage k (clj->cljson obj)))

(defn fetch-local
  "Fetches a locally stored object
  with given key and converts it
  into a clojure data-structure."
  [k default]
  (if-let [item (.getItem js/localStorage k)]
    (cljson->clj item)
    default))

(def request-anim-frame
  (or (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [callback] (js/setTimeout callback 17))))
