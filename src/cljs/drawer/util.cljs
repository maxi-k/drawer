(ns drawer.util)

(defn update-values
  "Updates the values of given map using
  given function with given arguments."
  [m f & args]
  (reduce (fn [r [k v]] (assoc r k (apply f v args))) {} m))

(defn log
  "Logs given text to the console."
  [x]
  (.log js/console x))

(def alert-map (atom {}))
(defn alert-once [id val]
  (when (not (contains? @alert-map id))
    (js/alert val)
    (swap! alert-map assoc id)))

(defn construct-htag
  "Constructs an html tag with given params"
  [tag-name content & args]
  (let [param-strs (for [[key val] (partition 2 args)
                         :when (not= val nil)]
                     (str " " key "='" val "'"))]
    (if (= content :closed)
      (str "<" tag-name (apply str param-strs) "/>")
      (str "<" tag-name (apply str param-strs) ">" content "</" tag-name ">"))))

(defn element-by-id
  "Returns the dom element with given id."
  [id]
  (.getElementById js/document id))

(defn elements-of-class
  "Returns a vector of all dom elements with given class."
  [class-name]
  (js->clj (.getElementsByClassName js/document class-name)))

(defn set-dom!
  "Sets the innerHTML of given element."
  [element value]
  (if (= (type element) js/String)
    (set! (.-innerHTML (element-by-id element)) value)
    (set! (.-innerHTML element) value)))

(def positive-numbers
  "A lazy seq of positive numbers"
  (iterate inc 0))

(defn default-obj-connections
  "Returns the default connections
  of an object with given count of points.
  e.g {0 [1], 1 [2], 2 [3], ... (dec n) [0]}"
  [n]
  (condp = n
    0 {}
    (let [nums (take (dec n) positive-numbers)]
      (reduce #(assoc %1 %2 [(inc %2)]) {(dec n) [0]} nums))))
