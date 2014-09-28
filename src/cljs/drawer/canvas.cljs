(ns drawer.canvas
  (:require [drawer.util :as util]
            [drawer.math :as math]
            [drawer.geometry :as g]))

(def horizontal-fov (math/deg-to-rad 100))
(def vertical-fov   (math/deg-to-rad  80))

(defn set-canvas-info
  "Set the canvas size to the maximum
  possible without overflow and update
  the respective fields in the state."
  [state]
  (let [cwidth (js/parseInt (.-offsetWidth (util/element-by-id "controls")))
        width (dec (max (- (.-innerWidth js/window) cwidth) 750))
        height (max (.-innerHeight js/window) 600)
        center-x (/ width 2)
        center-y (/ height 2)]
    (-> state
        (assoc-in [:canvas :width] width)
        (assoc-in [:canvas :height] height)
        (assoc-in [:canvas :center] [center-x center-y 0 0])
        (assoc-in [:camera :h-dist] (/ center-x (math/tan (/ horizontal-fov 2))))
        (assoc-in [:camera :v-dist] (/ center-y (math/tan (/ vertical-fov 2)))))))

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
      1 (doto ctx
          (.arc (start 0) (- (start 1)) 2 0 (* 2 (.-PI js/Math)))
          (.stroke)
          (.closePath))
      ;; Object is a line
      2 (doto ctx
          (.moveTo (start 0) (- (start 1)))
          (.lineTo ((points 1) 0) (- ((points 1) 1)))
          (.stroke)
          (.closePath))
      ;; Object has more than 2 points
      (let [connections (obj :connections)]
        (doseq [[from to] connections
                :let [from-p (points from)]
                to-p (mapv #(points %) to)]
          (.moveTo ctx (from-p 0) (- (from-p 1)))
          (.lineTo ctx (to-p 0) (- (to-p 1))))
        (.stroke ctx)
        (.closePath ctx)))))

(def ^:private center-axes
  (let [ds 100
        -ds (- ds)]
    [{:points [[-ds 0 0 0] [ds 0 0 0]]}
     {:points [[0 -ds 0 0] [0 ds 0 0]]}
     {:points [[0 0 -ds 0] [0 0 ds 0]]}
     {:points [[0 0 0 -ds] [0 0 0 ds]]}]))

(defn- draw-canvas-center
  "Draws the center of the canvas."
  [ctx camera]
  (doseq [line center-axes]
    (draw-object (g/project-obj line camera) ctx)))

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
  (let [camera (state :camera)
        selected (get-in state [:selected :obj])
        selected-p (get-in state [:selected :point])
        objs (state :objects)
        set-stroke-style #(set! (.-strokeStyle context) %)]
    (set-stroke-style "#999")
    (draw-canvas-center context camera)
    (set-stroke-style "#000")
    (doseq [[obj-name obj] objs
            :let [rot-center (g/get-rot-center obj objs camera)
                  selected? (= selected obj-name)]]
      (if selected?
        (do (set-stroke-style "#00f")
            (draw-object rot-center context)
            (when (not= :none (selected-p :object))
              (set-stroke-style "#0a7e07")
              (-> (g/get-object-part selected-p objs)
                  (g/project-obj camera)
                  (draw-object context)))
            (set-stroke-style "#f00"))
        (set-stroke-style "#000"))
      (draw-object obj context))))

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
      (g/rotate (state :objects))
      (g/project-obj (state :camera))))

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

(defn translate-canvas!
  "Translates the canvas 2d context, such that
  the coordinate center is in the middle of the
  canvas."
  [canvas-info]
  (let [center (canvas-info :center)
        canvas (.getElementById js/document "canvas")
        ctx (.getContext canvas "2d")]
    (.setTransform ctx 1 0 0 1 0 0)
    (.translate ctx (center 0) (center 1))))
