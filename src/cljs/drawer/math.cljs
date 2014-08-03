(ns drawer.math)

(def PI (.-PI js/Math))

(defn sin [angle] (.sin js/Math angle))
(defn cos [angle] (.cos js/Math angle))

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
