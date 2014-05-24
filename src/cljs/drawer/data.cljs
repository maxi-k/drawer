(ns drawer.data
  (:require [core.util :as util]))

(defn- htag [n c & a] (apply util/construct-htag n c a))
(def br (htag "br" :closed))
(defn- input
  ([t n] (htag "input" :closed, "type" t, "name" n))
  ([t n v] (htag "input" :closed, "type" t, "name" n, "value" v)))

(def input-form-point
  "One line for adding a point in the
  add-obj prompt"
  (str "x1" (input "text" "x1")
       "x2" (input "text" "x2")
       "x3" (input "text" "x3" 0)
       "x4" (input "text" "x4" 0)))

(def prompt-add-obj
  "The default content in each
  add-object prompt"
  [(htag "h2" "Element hinzufügen")
   (htag "div" (str "Objekt-Name" (input "text" "obj-name")
                    br br input-form-point),
         "id" "prompt-object-decl")
   (htag "a" "Hinzufügen", "href" "#", "class" "button",
         "onclick" "drawer.api.gui.submitPrompt();")])

