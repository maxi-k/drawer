(ns drawer.scenes
  (:require [drawer.api :as api]
            [drawer.geometry :as g]
            [drawer.math :as math]
            [drawer.lang :as lang]))

(def seminar-scenes
  "The scenes used for the seminary work."
  {"Punkt" {"Punkt"
            {:points [[20 20 0 0]]
             :rotation {:active true
                        :max-deg nil
                        :done-deg 0
                        :plane [1 4]
                        :deg 0.5
                        :center {:type :points
                                 :value [[0 0 0 0]]}}}}
   "Würfel" {"Würfel"
             {:points (let [a 20 b -20 c 20 d -20 e 20 f -20]
                        [[a a d e] [b a d e] [b b d e] [a b d e]
                         [a a c f] [b a c f] [b b c f] [a b c f]])
              :connections {0 [1 3 4], 1 [2 5], 2 [3 6], 3 [7], 4 [5 7], 5 [6], 6 [7]}
              :rotation {:active true
                         :max-deg nil
                         :done-deg 0
                         :plane [3 4]
                         :deg 0.5
                         :center {:type :points
                                  :value [[0 0 0 0]]}}}}
   "Pentachoron" {"Pentachoron"
                  {:points (mapv (fn [v] (mapv (partial * 30) v))
                                 [[1 1 1 -1] [1 -1 -1 -1] [-1 1 -1 -1]
                                  [-1 -1 1 -1] [0 0 0 (- (math/sqrt 5) 1)]])
                   :connections {0 [1 2 3 4], 1 [2 3 4], 2 [3 4], 3 [4]}
                   :rotation {:active true
                              :max-deg nil
                              :done-deg 0
                              :plane [1 2]
                              :deg 0.4
                              :center {:type :points
                                       :value [[0 0 0 0] [0 0 0 20]
                                               [0 0 20 0]]}}}}})
