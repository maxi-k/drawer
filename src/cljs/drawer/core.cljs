(ns drawer.core)

(def ^:private fps
  "Run the game at 60 fps"
  (/ 1000 80))

(def ^:private user-changes
  "A list of functions to be
  applied to the state on the
  next frame - cleared afterwards."
  (atom '()) )

(defn add-change
  "Adds a function to the list of
  changes to be applied to the state."
  [a]
  (swap! user-changes conj a))

(defn- apply-user-changes
  "Applies the user changes to given
  state and clears out the changes to
  be run through."
  [state]
  (let [res-state ((apply comp @user-changes) state)]
    (reset! user-changes '())
    res-state))

(defn- update-state
  "Updates the state completely"
  [state]
  (apply-user-changes state))

(defn- redraw-screen
  "Redraws the screen once."
  [state]
  state)

(defn- run-loop
  "Runs the redrawing loop."
  [state]
  (.setTimeout js/window (fn [] (run-loop (update-state state))) fps)
  (redraw-screen state))

(defn ^:export startLoop
  "Initially starts the redraw-loop."
  []
  (run-loop {:objects {}
             :info {:selected :none}}))
