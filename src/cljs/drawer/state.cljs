(ns drawer.state)

(def info
  "Storing general information about the canvas"
  (atom {:selected "none"}))

(defn change-info [info-keys value]
  "Change the canvas info"
  (swap! info assoc-in info-keys value))


(def objects
  "All canvas objects sorted per dimension
  1D (axis) 2D (polygon) 3D (polyeder) 4D (polychora)"
  (atom {}))

(defn- add-canvas-object [obj-name obj]
  "Add a canvas-object to the list with given name"
  (swap! objects assoc obj-name obj))

(defn- create-canvas-object
  "Creates a new canvas object"
  ([points] {:points points}))

(defn add-object
  "Combining add & create for simplicity"
  [obj-name points]
  (add-canvas-object obj-name
                     (create-canvas-object points)))

(defn remove-object
  "Removes an entry with given key
  from the objects map."
  [obj-name]
  (swap! objects dissoc obj-name))

(defn get-object
  "Gets an object with given name
  from the objects map."
  [obj-name]
  (objects obj-name))

(defn entries-with
  "Gets all name/object pairs,
  with given key as (object key)
  being equal to given value
  from the objects map."
  [key pred]
  (filter #(= ((second %) key) pred) @objects))
