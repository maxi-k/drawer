(ns drawer.math)

(def PI (.-PI js/Math))

(defn deg-to-rad
  "Turns a degree value into
  a radian."
  [deg]
  (/ (* PI deg) 180))

(defn sin [angle] (.sin js/Math angle))
(defn cos [angle] (.cos js/Math angle))
