(ns drawer.math)

(def PI (.-PI js/Math))

(def positive-numbers
  "A lazy seq of positive numbers"
  (iterate inc 0))

(defn sin [angle] (.sin js/Math angle))
(defn cos [angle] (.cos js/Math angle))
(defn tan [angle] (.tan js/Math angle))

(defn abs
  "Returns the absolute value of given number"
  [n]
  (if (>= n 0) n (- n)))

(defn sqrt
  "Returns the square root of given number."
  [n]
  (.sqrt js/Math n))

(defn deg-to-rad
  "Turns a degree value into
  a radian."
  [deg]
  (/ (* PI deg) 180))

(defn vector-from-to
  "Returns the vector that starts
  at p1 and ends at p2"
  [p1 p2]
  (mapv - p2 p1))

(defn dot-product
  "Builds the dot product from
  two points/vertices."
  [p1 p2]
  (->> (map vector p1 p2)
       (map #(reduce * %) )
       (reduce +)))
