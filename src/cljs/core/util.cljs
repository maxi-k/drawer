(ns core.util)

(defn log [x]
  "Logs given text to the console."
  (.log js/console x))

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
  "Returns the dom element with
  given id."
  [id]
  (.getElementById js/document id))

(defn elements-of-class
  "Returns all dom elements with
  given class as a clojure vector."
  [class-name]
  (js->clj (.getElementsByClassName js/document class-name)))
