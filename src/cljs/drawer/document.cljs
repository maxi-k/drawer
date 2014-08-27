(ns drawer.document
  (:require [drawer.lang :as lang :refer [translate]]
            [hiccups.runtime :as hr])
  (:require-macros [hiccups.core :as h]))

(defn- api
  "Prefixes given string with 'drawer.api.'
  and postfixes it with either '()' or "
  ([func] (str "drawer.api." func "();"))
  ([func & args]
     (str "drawer.api." func "("
          (apply str (if (< 2 (count args))
                       args
                       (interpose ", " args)))
          ");")))

(def prompt
  "The (hidden) prompt div."
  (h/html
   [:div#prompt-wrapper
    [:a#prompt-close-button
     {:href "#", :onclick (api "closePrompt")} "X"]
    [:div.clearfloat]
    [:div#prompt]]))

(def controls
  "The controls div on the left."
  (h/html
   ;; The title
   [:h2 (translate :title)]
    ;; The general controls (object-list, buttons)
   [:div#general-controls
    [:div {:style "overflow:visible; position:relative;"}
     [:a.button {:href "#"
                 :onclick (api "toggleDropdown"
                               "'general-options-dropdown'")
                 :title (translate :options)
                 :style "padding: 4px 4px 0px 4px;"}
      [:img {:src "img/gear.png" :alt "gear"
             :width "20px" :height "20px"}]]
     ;; Generals objects dropdown menu
     [:div#general-options-dropdown.dropdown
      {:style "display:none;top:20px;left:20px;"}
      [:ul
       [:li [:a {:href "#" :onclick (api "selectNothing")}
             (translate :select-nothing)]]
       [:li [:a {:href "#" :onclick (api "removeAllObjects")}
             (translate :remove-all-objects)]]
       [:hr]
       [:li [:a {:href "#" :onclick (api "setRotationOnAll" true)}
             (translate :rotation-control :start)]]
       [:li [:a {:href "#" :onclick (api "setRotationOnAll" false)}
             (translate :rotation-control :stop)]]]]]
    [:div#object-list]]
    ;; The selected-object controls
   [:div#object-controls
    [:h3#object-controls-title]
    [:div#object-panels-wrapper {:style "display:none"}
     [:ul#control-tabs]
     [:div.clearfloat]
     [:div#control-panels
      [:div#object-info.object-control-panel
       {:style "display:block;"}]
      [:div#object-rotation.object-control-panel
       {:style "display:none;"}]
      [:div#object-mirroring.object-control-panel
       {:style "display:none;"}]]]]
   [:hr]
   [:h4 (translate :test-functions)]
   [:a.button {:href "#"
               :onclick (api "printState")}
    (translate :program-state)]))
