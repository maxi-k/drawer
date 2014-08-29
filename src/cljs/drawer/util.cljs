(ns drawer.util)

(defn update-values
  "Updates the values of given map using
  given function with given arguments."
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

(defn nodelist-to-seq
  "Converts a nodelist to a (not lazy) seq."
  [nodes]
  (let [result-seq (map #(.item nodes %) (range (.-length nodes)))]
    (doall result-seq)))

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
