(ns drawer.canvas)

(def ^:private camera
  "The camera used to project 3D points
  onto the screen. Fixed values for now."
  {:focal-length 1})

(defn- P4->P3
  "Projects a 4D point into a 3D space."
  [point4d width height]
  (pop point4d))

(defn- P3->P2
  "Projects a 3D point onto a 2D plane."
  [point3d width height]
  (pop point3d))

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
  (let [center (obj-center obj)]
    (.beginPath ctx)
    (.arc ctx (center 0) (center 1) 2 0 (* 2 (.-PI js/Math)))
    (.stroke ctx)
    (.closePath ctx)))

(defn update-object
  "Returns a new object with the
  rotation applied and the 2d points
  computed"
  [obj ctx])

(defn draw-object
  "Draws given object on given
  canvas context"
  [obj ctx]
  (let [points (mapv #(P4->P3 (P3->P2 %)) (obj :points))
        start (points 0)]
    (.beginPath ctx)
    (.moveTo ctx (start 0) (start 1))
    (doseq [point points]
      (.lineTo ctx (point 0) (point 1)))
    (.lineTo ctx (start 0) (start 1))
    (.stroke ctx)
    (.closePath ctx)
    (draw-center obj ctx)

    ))
