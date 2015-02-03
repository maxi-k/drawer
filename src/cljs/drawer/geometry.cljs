(ns drawer.geometry
  (:require [drawer.math :as math]
            [drawer.util :as util]))

(def unit-vectors
  "The four unit vectors making up 4d space"
  [[1 0 0 0] [0 1 0 0] [0 0 1 0] [0 0 0 1]])

(defn default-obj-connections
  "Returns the default connections
  of an object with given count of points.
  e.g {0 [1], 1 [2], 2 [3], ... (dec n) [0]}"
  [n]
  (condp = n
    0 {}
    (let [nums (take (dec n) math/positive-numbers)]
      (reduce (fn [m k] (assoc m k [(inc k)])) {(dec n) [0]} nums))))

(defn- obj-center
  "Find the center of the object
  from the average of its points."
  [{:keys [points]}]
  (->> (apply map vector points)
       (mapv #(reduce + %))
       (mapv #(/ % (count points)))))

(def ^:private far-plane 500)

(defn- project-point-to-hyperplane
  "Projects a nD point onto the (n-1D) hyperplane
  of that dimension, giving back a point with
  one coordinate less"
  [point camera]
  (let [dim (count point)
        lp-coord (last point)
        lc-coord (camera (dec dim))
        dist (math/abs (- lc-coord lp-coord))
        k (- (/ far-plane (if (zero? dist) 1 dist)))]
    (mapv (fn [p c] (+ c (* k (- p c))))
          (pop point) camera)))

(defn- project-point
  "Projects a nD point onto the 2d plain."
  [point camera]
  (loop [new-point point]
    ;; Switch cameras depending on 4d/4d projection
    (let [cam (get-in camera [:cams (- (count new-point) 3)])]
      (if (= 2 (count new-point))
        new-point
        (recur (project-point-to-hyperplane new-point cam))))))

(defn project-obj
  "Projects an object (nD) onto the screen (2D).
  Doesn't draw the object, just updates its 2D points
  [obj :points2d]"
  [obj camera]
  (assoc obj :points2d
         (mapv #(project-point %1 camera)
               (obj :points))))

(defn- get-object-part
  "Parses a structure like
  {:name [obj-name] :part point-indices}
  into an object of the structure
  {:points points-of-obj}.
  Used for converting relationships between
  objects (:rot-center -> other-object) into
  absolute data (:rot-center -> point-coords)."
  [{:keys [name part]} objs]
  (let [ctr-obj (objs name)]
    {:points (cond
              (nil? ctr-obj) [[0 0 0 0]]
              (= :center part) [(obj-center ctr-obj)]
              (vector? part) (mapv (ctr-obj :points) part))}))

(defn- get-rot-center
  "Returns an object with fields [:points, :connections]
  that serves as rotation center for other objects.
  If the canvas-info [state :canvas] is passed as an
  argument, also projects the result [:points2d], so it
  can be drawn on the canvas.
  Depends on the value of [obj :rotation :center].
  See create-rot-center for information about its
  structure."
  ([obj objs]
     (let [center-info (get-in obj [:rotation :center])
           center-value (center-info :value)
           center (condp = (center-info :type)
                    :points center-value
                    :object (get-in objs [center-value :points])
                    :center [(obj-center obj)]
                    :part (mapv (obj :points) center-value)
                    [(obj-center obj)])
           center (if (nil? center) [(obj-center obj)] center)] ;; default
       {:points center
        :connections (default-obj-connections (count center))}))
  ([obj objs camera]
     (project-obj (get-rot-center obj objs) camera)))

(def ^:private dim-down-transfs
  "Returns the Matrix that transforms
  'center' by rotating around the arctan(2)
  of the coordinates of the coordinates at coord-idx
  of the points at point-idx. Gives back center with the
  j-th coords. eliminated to 0, and its reverse matrix"
  (fn [center point-idx coord-idx]
    (fn [point]
      (let [p (center point-idx)
            deg (math/atan2 (p (dec coord-idx))
                            (p (- coord-idx 2)))
            matrix (math/build-rot-matrix 4 coord-idx (dec coord-idx))]
        [#(math/apply-raw-rot-matrix matrix deg %)
         #(math/apply-raw-rot-matrix matrix (- deg) %)]))))

(defn compose-transforms
  "Takes one transform for rotating the object
  a variable amount of [dim-down-transfs] arguments
  and returns the overall transform required to rotate
  the object."
  [rot-trans center dim-args]
  (let [dim-transfs (mapv #(dim-down-transfs center (% 0) (% 1)) dim-args)]
    (fn [point deg]
      (let [transforms (mapv #(% point) dim-transfs)
            [to-fns from-fns] (vec (util/order-by-index transforms))
            p1 ((apply comp (reverse to-fns)) point)
            p2 (rot-trans deg p1)]
        ((apply comp from-fns) p2)))))

(def get-0d-transform
  "Returns the transformation that can rotate
  a point around given point."
  (memoize
   (fn [center plane]
     (fn [point deg]
       (math/use-rot-matrix 4 (plane 0) (plane 1) deg point)))))

(def ^:private get-1d-transform
  "Returns the transformation that can rotate
  a point around given axis"
  (memoize
   (fn [center plane]
     (compose-transforms #(math/use-rot-matrix 4 (plane 0) (plane 1) %1 %2)
                         center
                         [[1 3] [1 2]]))))

(def ^:private get-2d-transform
  "Returns the transformation that can rotate
  a point around given plane"
  (memoize
   (fn [center]
     (compose-transforms #(math/use-rot-matrix 4 3 4 %1 %2)
                         center
                         [[1 4] [1 3] [1 2] [2 4] [2 3]]))))

(defn- rotate-point
  "Rotates a 4d point around given center."
  [point center deg plane]
  (let [a (center 0)
        tf #(mapv - % a)
        tl #(mapv + % a)
        tm     (condp = (count center)
                 ;; Around point
                 1 (get-0d-transform center plane)
                 ;; Around axis
                 2 (get-1d-transform center plane)
                 ;; around a plane
                 (get-2d-transform center))]
    (-> point (tf) (tm (math/deg-to-rad deg)) (tl))))

(defn- rotate
  "Rotates an object around
  another one."
  [obj objs]
  (let [center ((get-rot-center obj objs) :points)
        max-deg (get-in obj [:rotation :max-deg])
        done-deg (get-in obj [:rotation :done-deg])
        deg (get-in obj [:rotation :deg])
        still-active? (or (nil? max-deg) (< done-deg max-deg))
        npoints (mapv #(rotate-point % center
                                     deg
                                     (get-in obj [:rotation :plane]))
                      (obj :points))]
    (-> obj
        (assoc-in [:rotation :done-deg] (+ done-deg deg))
        (assoc-in [:rotation :active] still-active?)
        (assoc :points npoints))))

;; TODO: Stub
(defn- mirror
  "Mirrors an object."
  [obj objs]
  obj)

(defn create-rot-center
  "Creates an object center with a type
  of either :object, :canvas-object, :object-part or :center.
  The value:
  :points => [[100 40 20 0] [30 50 90 10] ..] ; points
  :object => 'Object-Name-On-Canvas'
  :center => Object center
  :part => [1 2 3] point-indices of object
  or :part :center ; rot. around center of object w/ :name
  :center => [doesn't matter] ; rotate around center of object"
  [type value]
  {:type type
   :value value})

(defn create-object
  "Creates a canvas object, which
  can be drawn on the canvas with draw-object.
  Contains additional information about the
  transformations applied to it every frame."
  ([camera points connections]
     (create-object camera points (create-rot-center :center nil) [0 0 0 0]))
  ([camera points connections center speed]
     {:points points
      :connections connections
      :points2d (mapv #(project-point %1 camera) points)
      :rotation {:active (not= 0 speed)
                 :plane [1 2]
                 :deg speed
                 :center center}}))
