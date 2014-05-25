(ns drawer.canvas
  (:require [drawer.util :as util]))

(defn create-object
  "Creates a canvas object."
  [points]
  {:points points
   :points2d nil
   :rotation {:x1 0
              :x2 0
              :x3 0
              :x4 0
              :center :self}})

;; Stub
(defn- rotate
  "Rotates an object around
  another one."
  [obj objs]
  (obj))

;; Stub
(defn mirror
  "Mirrors an object."
  [obj objs]
  (obj))

(defn- rotate-objects
  "Updates the rotation of the objects
  contained in the object list."
  [objs]
  ;; (util/update-values objs #(rotate % objs))
 objs )

(defn- P4->P3
  "Projects a 4D point onto
  a 2D plain."
  [point]
  (pop point))

(defn- P3->P2
  "Projects a 3D point onto
  a 2D plain."
  [point]
  (pop point))

(defn project-point
  "Projects a 4D point onto the 2d plain."
  [point]
  (-> point P4->P3 P3->P2))

(defn project-obj
  "Projects an object (4D) onto
  the screen plain (2D).
  Doesn't actually draw the object,
  just updates its 2D points"
  [obj]
  (assoc-in obj [:points2d]
            (mapv project-point (obj :points))))

(defn- project-objects
  "Updates the 2D points of the
  objects in the object list."
  [objs]
  (util/update-values objs project-obj))

(defn update
  "Updates given state with
  the stuff happening on the
  canvas."
  [state]
  (assoc-in state [:objects] (-> (state :objects)
                                 rotate-objects
                                 project-objects)))

(defn- dot-product
  "Builds the dot product from
  two points/vertices."
  [p1 p2]
  (->> (map vector p1 p2)
       (map #(reduce * %) )
       (reduce +)))

(defn- obj-center
  "Find the center of the object
  from the average of its points."
  [{:keys [points]}]
  (->> (apply map vector points)
       (mapv #(reduce + %) )
       (mapv #(/ % (count points)))))

(defn- draw-center
  "Draws a circle in the center of
  given object."
  [obj ctx]
  (let [center (project-point (obj-center obj))]
    (.beginPath ctx)
    (.arc ctx (center 0) (center 1) 2 0 (* 2 (.-PI js/Math)))
    (.stroke ctx)
    (.closePath ctx)))

(defn draw-object
  "Draws given object on the canvas context"
  [obj ctx]
  (let [points (obj :points2d)
        start (points 0)]
    (.beginPath ctx)
    (.moveTo ctx (start 0) (start 1))
    (doseq [point points]
      (.lineTo ctx (point 0) (point 1)))
    (.lineTo ctx (start 0) (start 1))
    (.stroke ctx)
    (.closePath ctx)
    (draw-center obj ctx)))


(defn clear
  "Clear the canvas but keep its settings."
  [canvas ctx]
  (.save ctx)
  (.setTransform ctx 1 0 0 1 0 0)
  (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
  (.restore ctx))
