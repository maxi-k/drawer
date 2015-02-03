(ns drawer.math
  (:require [drawer.util :as util]))

(def PI (.-PI js/Math))

(def positive-numbers
  "A lazy seq of positive numbers"
  (iterate inc 0))

(defn sin [angle] (.sin js/Math angle))
(defn cos [angle] (.cos js/Math angle))
(defn tan [angle] (.tan js/Math angle))
(defn atan [x]    (.atan js/Math x))
(defn atan2 [x y] (.atan2 js/Math x y))

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
  (if (zero? deg)
    0
    (/ (* PI deg) 180)))

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

(def build-rot-matrix
  "Builds a 'n'-dimensional rotation matrix
  that rotates in the a-b plane"
  (memoize
   (fn [n a b]
     (vec (for [j (range 1 (inc n))]
            (vec (for [i (range 1 (inc n))]
                   (cond
                    (and (= i a) (= j a)) cos
                    (and (= i b) (= j b)) cos
                    (and (= i a) (= j b)) #(- 0 (sin %))
                    (and (= i b) (= j a)) sin
                    (= i j)               1
                    :default              0))))))))

(def eval-rot-matrix
  "Evaluates a rotation matrix, applying the
  cos/sin functions inside it to given angle (radian)."
  (memoize
   (fn [matrix phi]
     (mapv (fn [col]
             (mapv (fn [elem] (if (fn? elem)
                                (elem phi) elem)) col))
           matrix))))

(def apply-rot-matrix
  "Applies the (evaluated!) rotation matrix to given vector,
  yielding a new, rotated vector."
  (fn [matrix point]
    (vec
     (for [i (range (count point))
           :let [row (matrix i)]]
       (apply + (mapv * row point))))))

(defn apply-raw-rot-matrix
  "Applies the (unevaluated) rotation matrix to given vector,
  yielding a new, rotated vector."
  [matrix phi point]
  (apply-rot-matrix (eval-rot-matrix matrix phi) point))

(defn use-rot-matrix
  "Builds, evals, and applies a rotation matrix"
  [n a b phi point]
  (-> (build-rot-matrix n a b)
      (eval-rot-matrix phi)
      (apply-rot-matrix point)))
