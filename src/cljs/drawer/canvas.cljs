(ns drawer.canvas
  (:require [drawer.util :as util]
            [drawer.math :as math]))

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
  [[px py pz] {:keys [width height view]}]
  (let [fov (view :fov)
        scale (/ fov (+ fov pz))]
    [(* px scale) (* py scale)]))

(defn- project-point
  "Projects a 4D point onto the 2d plain."
  [point canvas-info]
  (-> point
      (P4->P3 canvas-info)
      (P3->P2 canvas-info)))

(defn- project-obj
  "Projects an object (4D) onto the screen (2D).
  Doesn't draw the object, just updates its 2D points
  [obj :points2d]"
  [obj canvas-info]
  (assoc obj :points2d
         (mapv #(project-point %1 canvas-info)
               (obj :points))))

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
                    :object-part
                    (let [{:keys [name part]} center-value
                          ctr-obj (objs name)]
                      (cond
                       (nil? ctr-obj) nil
                       (= :center part) [(obj-center ctr-obj)]
                       (vector? part) (mapv (ctr-obj :points) part)))
                    [(obj-center obj)])
           center (if (nil? center) [(obj-center obj)] center)] ;; default
       {:points center
        :connections (util/default-obj-connections (count center))}))
  ([obj objs canvas-info]
     (project-obj (get-rot-center obj objs) canvas-info)))

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
  ([canvas-info points connections]
     (create-object canvas-info points (create-rot-center :center nil) [0 0 0 0]))
  ([canvas-info points connections center speed]
     {:points points
      :connections connections
      :points2d (mapv #(project-point %1 canvas-info) points)
      :rotation {:active true
                 :speed speed
                 :center center}}))

(defn- draw-object
  "Draws given object on the canvas.
  Doesn't set the canvas strokeStyle
  or change any other settings."
  [obj ctx]
  (let [points (obj :points2d)
        start (points 0)]
    (.beginPath ctx)
    (condp = (count points)
      ;; Object is a single point
      1 (do (.arc ctx (start 0) (start 1) 2 0 (* 2 (.-PI js/Math)))
            (.stroke ctx)
            (.closePath ctx))
      ;; Object is a line
      2 (do (.moveTo ctx (start 0) (start 1))
            (.lineTo ctx ((points 1) 0) ((points 1) 1))
            (.stroke ctx)
            (.closePath ctx))
      ;; Object has more than 2 points
      (let [connections (obj :connections)]
        (doseq [[from to] connections
                :let [from-p (points from)]
                to-p (mapv #(points %) to)]
          (.moveTo ctx (from-p 0) (from-p 1))
          (.lineTo ctx (to-p 0) (to-p 1)))
        (.stroke ctx)
        (.closePath ctx)))))

(defn- clear
  "Clear the canvas but keep its settings."
  [canvas ctx]
  (.save ctx)
  (.setTransform ctx 1 0 0 1 0 0)
  (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
  (.restore ctx))

(defn redraw-canvas
  "Redraws the screen once.
  Sets up the strokeStyles for the
  draw-object function as well."
  [state canvas context]
  (clear canvas context)
  (let [canvas-info (state :canvas)
        selected (get-in state [:info :selected])
        objs (state :objects)]
    (doseq [[obj-name obj] objs
            :let [rot-center (get-rot-center obj objs canvas-info)
                  selected? (= selected obj-name)]]
      (if selected?
        (set! (.-strokeStyle context) "#f00")
        (set! (.-strokeStyle context) "#000"))
      (draw-object obj context)
      (when selected?
        (set! (.-strokeStyle context) "#0f0")
        (draw-object rot-center context)))))

(defn requires-update?
  "Returns whether given object
  requires an update on the next
  redraw or not."
  [obj]
  (and (get-in obj [:rotation :active])
       (not-every? zero? (get-in obj [:rotation :speed]))))

(defn update-object
  "Updates given object by applying
  any necessary functions to it, like
  rotating, and then updates its 2d points."
  [obj state]
  (-> obj
      (rotate (state :objects))
      (project-obj (state :canvas))))

(defn get-canvas-update
  "Calculates any updates the canvas
  requires, and applies them to the
  given state."
  [state]
  (let [objs (state :objects)
        update-fns (for [[obj-name _]
                         (filter #(requires-update? (second %)) objs)]
                     (fn [s] (if (contains? (s :objects) obj-name)
                              (assoc-in s
                                        [:objects obj-name]
                                        (update-object
                                         (get-in s [:objects obj-name])
                                         s))
                              s)))]
    (if (empty? update-fns)
      state
      ((apply comp update-fns) state))))
