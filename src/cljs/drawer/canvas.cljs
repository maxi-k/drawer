(ns drawer.canvas
  (:require [drawer.util :as util]
            [drawer.math :as math]
            [drawer.geometry :as g]))

(defn set-canvas-info
  "Set the canvas size to the maximum
  possible without overflow and update
  the respective fields in the state."
  [state]
  (let [width (max (.-innerWidth js/window) 750)
        height (max (.-innerHeight js/window) 500)]
    (-> state
        (assoc-in [:canvas :width] width)
        (assoc-in [:canvas :height] height)
        (assoc-in [:canvas :center] [(/ width 2) (/ height 2) 0 0]))))

(defn- draw-object
  "Draws given object on the canvas.
  Doesn't set the canvas strokeStyle
  or change any other settings."
  [obj ctx]
  (let [points (obj :points2d)]
    (.beginPath ctx)
    (condp identical? (count points)
      ;; Object is a single point
      1 (let [p (points 0)]
          (.arc ctx (p 0) (- (p 1)) 2 0 (* 2 (.-PI js/Math))))
      ;; Object is a line
      2 (let [p0 (points 0), p1 (points 1)]
          (.moveTo ctx (p0 0) (- (p0 1)))
          (.lineTo ctx (p1 0) (- (p1 1))))
      ;; Object has more than 2 points
      (let [connections (obj :connections)]
        (doseq [[from to] connections
                :let [from-p (points from)]
                to-p (mapv #(points %) to)]
          (.moveTo ctx (from-p 0) (- (from-p 1)))
          (.lineTo ctx (to-p 0) (- (to-p 1))))))
    (.stroke ctx)
    (.closePath ctx)))

(def ^:private center-axes
  (let [ds 100]
    (vec (for [u-vec g/unit-vectors]
           {:points
            [(mapv (partial * ds) u-vec)
             (mapv (partial * (- ds)) u-vec)]}))))

(defn- draw-canvas-center
  "Draws the center of the canvas."
  [ctx camera]
  (doseq [i (range 4)
          :let [line (center-axes i)]]
    (when (= i 3) (set! (.-strokeStyle ctx) "#0f0"))
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
       (not= 0 (get-in obj [:rotation :deg]))))

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
