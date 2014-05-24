(ns drawer.init
	(:require [drawer.state :as state]
            [drawer.canvas :as screen]
            [drawer.controls :as panel]))

(defn ^:export initView []
	(let [canvas   (.getElementById js/document "canvas")
		  	ctx 	   (.getContext canvas "2d")
		  	controls (.getElementById js/document "controls")]

    (defn set-canvas-size []
      "Set the canvas size to the maximum
      possible without overflow"
    	(let [cwidth (.-offsetWidth controls)
    		  	width  (- (.-innerWidth js/window) (js/parseInt cwidth))
    		  	height (.-innerHeight js/window)]
        (.setAttribute canvas "width" (dec width))
        (.setAttribute canvas "height" height)))

    ;; Calling set-canvas-size when the site loads
    (set-canvas-size)

    ;; Setting the canvas size on window resize (window.onresize)
    (set! (.-onresize js/window) set-canvas-size)

    (defn clear-canvas []
      "Clear the canvas but keep its settings"
    	(.save ctx)
    	(.setTransform ctx 1 0 0 1 0 0)
    	(.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    	(.restore ctx))

    (defn redraw []
    	(clear-canvas)
    	(doseq [[obj-name obj] @state/objects]
    		(if (= (@state/info :selected) obj-name)
    			(set! (.-strokeStyle ctx) "#f00")
    			(set! (.-strokeStyle ctx) "#000"))
    		(screen/draw-object obj ctx)))

    ;; Redrawing the canvas at 60fps
    (.setInterval js/window redraw (/ 1000 60))
    ))

(defn ^:export initState []
    ;; Redraw the object list whenever the canvas-info changes
    (add-watch state/info :redraw panel/redraw-object-list)

    ;; Redraw the object list whenever the canvas-objects change
    (add-watch state/objects :redraw panel/redraw-object-list)

    ;; This is just temporary
    (state/add-object "Linie" [[100 100 0 0] [150 300 0 0]])
    (state/add-object "Dreieck" [[300 200 0 0] [400 400 0 0] [200 400 0 0]])
  )
