(ns drawer.gui
  (:require [drawer.api :as api]
            [drawer.util :as util]
            [drawer.lang :refer [translate]]
            [reagent.core :as r]))

(defn prompt
  "The (hidden) prompt div."
  [action]
  [:div#prompt-overlay {:style {:display "none"}}
   [:div#prompt-wrapper
    [:a#prompt-close-button
     {:href "#", :on-click (action api/closePrompt)} "X"]
    [:div.clearfloat]
    [:div#prompt]]])

(defn canvas
  "The canvas element."
  [canvas-info]
  [:canvas {:id "canvas"
            :width (canvas-info :width)
            :height (canvas-info :height)}])

(defn general-options-dropdown
  "Component representing the general-options-dropdown."
  [active-dropdown action]
  (let [name "general-options-dropdown"
        active? (= name active-dropdown)]
    (if active?
      (set! (.-onmouseup js/window) (action (api/toggleDropdown name)))
      (set! (.-onmouseup js/window) nil))
    [:div.dropdown
     {:id name
      :style {:display (if active? "block" "none")
              :top "20px" :left "20px"}}
     [:ul
      [:li [:a {:href "#" :on-click (action (api/selectNothing))}
            (translate :select-nothing)]]
      [:li [:a {:href "#" :on-click (action (api/removeAllObjects))}
            (translate :remove-all-objects)]]
      [:hr]
      [:li [:a {:href "#" :on-click (action (api/setRotationOnAll true))}
            (translate :rotation-control :start)]]
      [:li [:a {:href "#" :on-click (action (api/setRotationOnAll false))}
            (translate :rotation-control :stop)]]]]))

(defn object-list
  "Component representing the object-list."
  [object-keys selected action]
  (for [obj-name object-keys
        :let [selected? (= obj-name selected)]]
    ^{:key obj-name}
    [:li
     [:a.obj-button {
       :href "#"
       :id (if selected? "selected-obj" nil)
       :on-click (action (api/setSelected obj-name))}
      obj-name]
     [:div.clearfloat]]))

(defn object-controls-title
  "Component representing the title of the object-controls."
  [selected]
  (if (= selected :none) (translate :nothing-selected) selected))

(defn control-tabs
  "Component representing the tabs in the object-controls."
  [active-tab action]
  (for [[id name] (util/map-to-fn-of
                   #(translate (keyword %))
                   "info-tab" "rotation-tab" "mirroring-tab")
        :let [selected? (= id active-tab)]]
    ^{:key id}
    [:li.tab {:id (if selected? "selected-tab" nil)}
     [:a {:href "#"
          :on-click (action (api/setActiveTab id))} name]]))

;; Todo: Stub
(defn object-info
  "Component representing the content of the info tab."
  [selected action]
  [:a.button.dangerous
   {:href "#"
    :on-click (action (api/removeObject selected))}
   ((translate :remove-object) selected)])

;; Todo: Stub
(defn object-rotation
  "Component representing the content of the rotation tab."
  []
  [:span "--"])

;; Todo: Stub
(defn object-mirroring
  "Component representing the content of the mirroring tab."
  []
  [:span "--"])

(defn control-panels
  "Component representing the control-panels
   object-info, object-rotation and object-mirroring."
  [selected active-tab action]
  (let [style #(if (= % active-tab) "block" "none")]
    [:div#control-panels
     [:div#object-info
      {:style {:display (style "info-tab")}} (object-info selected action)]
     [:div#object-rotation
      {:style {:display (style "rotation-tab")}} (object-rotation)]
     [:div#object-mirroring
      {:style {:display (style "mirroring-tab")}} (object-mirroring)]]))

(defn controls
  "The controls div on the left."
  [state action]
  (let [selected (get-in @state [:info :selected])
        active-dropdown (get-in @state [:info :active-dropdown])
        active-tab (get-in @state [:info :active-tab])
        object-keys (keys (@state :objects))]
    [:div#controls
     ;; The title
     [:h2 (translate :title)]
     ;; The general controls (object-list, buttons)
     [:div#general-controls
      [:div {:style {:overflow "visible" :position "relative"}}
       [:a.button {:href "#"
                   :on-click (action
                              (api/toggleDropdown "general-options-dropdown"))
                   :title (translate :options)
                   :style {:padding "4px 4px 0px 4px"}}
        [:img {:src "img/gear.png" :alt "gear"
               :width "20px" :height "20px"}]]
       ;; Generals objects dropdown menu
       (general-options-dropdown active-dropdown action)]
      [:div#object-list (object-list object-keys selected action)]]
     ;; The selected-object controls
     [:div#object-controls
      [:h3#object-controls-title (object-controls-title selected)]
      [:div#object-panels-wrapper {:style {:display (if (= :none selected)
                                                      "none" "block")}}
       [:ul#control-tabs (control-tabs active-tab action)]
       [:div.clearfloat]
       (control-panels selected active-tab action)]]
     [:hr]
     [:h4 (translate :test-functions)]
     [:a.button {:href "#"
                 :on-click (action (api/printState))}
      (translate :program-state)]]))

(defn body
  "Combining all components into the body component."
  [state action]
  [:div#body-wrapper
   (prompt action)
   (controls state action)
   (canvas (@state :canvas))
   [:div.clearfloat]])

(defn init-gui
  "Initialize the gui rendering."
  [state user-action]
  (r/render-component [(fn [] (body state (fn [a] #(user-action a))))]
                      (.-body js/document)))
