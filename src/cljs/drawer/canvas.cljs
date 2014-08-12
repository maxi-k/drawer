(ns drawer.canvas
  (:require [drawer.util :as util]
            [drawer.math :as math]))


(defn- obj-center
  "Find the center of the object
  from the average of its points."
  [{:keys [points]}]
  (->> (apply map vector points)
       (mapv #(reduce + %) )
       (mapv #(/ % (count points)))))

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
  (let [rot-cent (get-in obj [:rotation :center])
        center (if (contains? objs rot-cent)
                 (obj-center (objs rot-cent))
                 (obj-center obj))
        npoints (mapv #(rotate-point % center ((get-in obj [:rotation :speed]) 0))
                      (obj :points))]
    (assoc-in obj [:points] npoints)))

;; TODO: Stub
(defn- mirror
  "Mirrors an object."
  [obj objs]
  obj)

;; TODO: This is a stub
(defn- P4->P3
  "Projects a 4D point onto
  a 2D plain."
  [point]
  (pop point))

;; TODO: This is a stub
(defn- P3->P2
  "Projects a 3D point onto
  a 2D plain."
  [point]
  (pop point))

(defn- project-point
  "Projects a 4D point onto the 2d plain."
  [point]
  (-> point P4->P3 P3->P2))

(defn- project-obj
  "Projects an object (4D) onto
  the screen plain (2D).
  Doesn't actually draw the object,
  just updates its 2D points"
  [obj]
  (assoc-in obj
            [:points2d]
            (mapv project-point (obj :points))))

(defn- draw-center
  "Draws a circle in the center of
  given object."
  [obj ctx]
  (let [center (project-point (obj-center obj))]
    (.beginPath ctx)
    (.arc ctx (center 0) (center 1) 2 0 (* 2 (.-PI js/Math)))
    (.stroke ctx)
    (.closePath ctx)))

(defn- draw-object
  "Draws given object on the canvas context"
  [obj ctx]
  (let [points (obj :points2d)
        start (points 0)]
    (.beginPath ctx)
    (condp = (count points)
      ;; Object is single point
      1 (do (.arc ctx (start 0) (start 1) 2 0 (* 2 (.-PI js/Math)))
            (.stroke ctx)
            (.closePath ctx))
      ;; Object is a line
      2 (do (.moveTo ctx (start 0) (start 1))
            (.lineTo ctx ((points 1) 0) ((points 1) 1))
            (.stroke ctx)
            (.closePath ctx)
            (draw-center obj ctx))
      ;; Object has more than 2 points
      (do (.moveTo ctx (start 0) (start 1))
          (doseq [point points]
            (.lineTo ctx (point 0) (point 1)))
          (.lineTo ctx (start 0) (start 1))
          (.stroke ctx)
          (.closePath ctx)
          (draw-center obj ctx)))))

(defn- clear
  "Clear the canvas but keep its settings."
  [canvas ctx]
  (.save ctx)
  (.setTransform ctx 1 0 0 1 0 0)
  (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
  (.restore ctx))

(defn create-object
  "Creates a canvas object."
  ([points] (create-object points "Eigenes Zentrum" 0))
  ([points center speed]
     {:points points
      :points2d (mapv project-point points)
      :rotation {:active true
                 :speed [speed 0 0 0]
                 :center center}}))

(defn redraw-canvas
  "Redraws the screen once."
  [state canvas context]
  (clear canvas context)
  (doseq [[obj-name obj] (state :objects)]
    (if (= (get-in state [:info :selected]) obj-name)
      (set! (.-strokeStyle context) "#f00")
      (set! (.-strokeStyle context) "#000"))
    (draw-object obj context))
  state)

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
  [obj objs]
  (-> obj
      (rotate objs)
      project-obj))

(defn- get-canvas-update
  "'Applies' any updates the canvas needs
  to the state."
  [state]
  (let [objs (state :objects)
        update-fns (for [[obj-name _]
                         (filter #(requires-update? (second %)) objs)]
                     (fn [s] (if (contains? (s :objects) obj-name)
                              (assoc-in s
                                        [:objects obj-name]
                                        (update-object
                                         (get-in s [:objects obj-name])
                                         (s :objects)))
                              s)))]
    (if (empty? update-fns)
      state
      ((apply comp update-fns) state))))
