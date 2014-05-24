(ns drawer.util)

(defn create-object [points]
  {:points points
   :points2d points
   :rotation {:x 0
              :y 0
              :z 0
              :center :self}})
