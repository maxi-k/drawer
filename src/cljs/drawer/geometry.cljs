(ns drawer.geometry
  (:require [drawer.math :as math]))

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

;; TODO: This is a stub
(defn- P4->P3
  "Projects a 4D point onto
  a 2D plain."
  [point canvas-info]
  (pop point))

;; TODO: This is a stub
(defn- P3->P2
  "Projects a 3D point onto
  the 2D plain."
  [[px py pz] {:keys [h-dist v-dist]}]
  (if (zero? pz)
    [px py]
    [(/ (* px h-dist) pz)
     (/ (* py v-dist) pz)]))

(defn project-point
  "Projects a 4D point onto the 2d plain."
  [point canvas-info]
  (-> point
      (P4->P3 canvas-info)
      (P3->P2 canvas-info)))

(defn project-obj
  "Projects an object (4D) onto the screen (2D).
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
                    :object-part ((get-object-part center-value objs) :points)
                    [(obj-center obj)])
           center (if (nil? center) [(obj-center obj)] center)] ;; default
       {:points center
        :connections (default-obj-connections (count center))}))
  ([obj objs camera]
     (project-obj (get-rot-center obj objs) camera)))

;; TODO: Only rotates 2D points!
(defn- rotate-point
  [point center deg]
  (let [dxs (math/vector-from-to center point)
        angle (math/deg-to-rad deg)
        nx (- (* (dxs 0) (math/cos angle)) (* (dxs 1) (math/sin angle)))
        ny (+ (* (dxs 0) (math/sin angle)) (* (dxs 1) (math/cos angle)))]
    [(+ nx (center 0)) (+ ny (center 1)) (point 2) (point 3)]))

;; TODO: This is just a test-implementation
(defn- rotate
  "Rotates an object around
  another one."
  [obj objs]
  (let [center (((get-rot-center obj objs) :points) 0)
        npoints (mapv #(rotate-point % center ((get-in obj [:rotation :speed]) 0))
                      (obj :points))]
    (assoc-in obj [:points] npoints)))

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
  :object-part => {:name 'Object-Name-On-Canvas'
  :part [0 2 5 3 ..] ; point-indices from object with :name
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
      :rotation {:active (not (every? zero? speed))
                 :speed speed
                 :center center}}))
