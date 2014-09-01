(ns drawer.gui
  (:require [drawer.api :as api]
            [drawer.util :as util]
            [drawer.math :as math]
            [drawer.lang :refer [translate]]
            [reagent.core :as r]))

(defn prompt
  "The (hidden) prompt div."
  [action]
  [:div#prompt-overlay {:style {:display "none"}}
   [:div#prompt-wrapper
    [:a#prompt-close-button
     {:href "#", :on-click #(action api/closePrompt)} "X"]
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
      (set! (.-onmouseup js/window) #(action (api/toggleDropdown name)))
      (set! (.-onmouseup js/window) nil))
    [:div.dropdown
     {:id name
      :style {:display (if active? "block" "none")
              :top "20px" :left "20px"}}
     [:ul
      [:li {:on-click #(action (api/selectNothing))}
       (translate :select-nothing)]
      [:li {:on-click #(action (api/removeAllObjects))}
       (translate :remove-all-objects)]
      [:hr]
      [:li {:on-click #(action (api/setRotationOnAll true))}
       (translate :rotation-control :start)]
      [:li {:on-click #(action (api/setRotationOnAll false))}
       (translate :rotation-control :stop)]]]))

(defn object-list
  "Component representing the object-list."
  [object-keys selected action]
  [:ul#object-list.selectable-list
   (for [obj-name object-keys
         :let [selected? (= obj-name selected)]]
     ^{:key obj-name}
     [:li {:style {:border-bottom "1px solid #AAA"}
           :class (if selected? "light-background" "white-background")
           :on-click #(action (api/setSelected obj-name))}
      obj-name
      [:div.clearfloat]])])

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
    [:li.tab {:class (if selected? "light-background" "white-background")
              :on-click #(action (api/setActiveTab id))}
     name]))

;; Todo: Stub
(defn object-info
  "Component representing the content of the info tab."
  [obj {:keys [selected selected-point]} action]
  [:div#object-info {:style {:display "none"}}
   [:div.button.dangerous
    {:href "#"
     :on-click #(action (api/removeObject selected))}
    ((translate :remove-object) selected)]
   [:div
    [:h3 {:style {:margin-bottom "3px"}}
     (translate :points)]
    (if (nil? obj)
      "--"
      (let [ps (mapv #(mapv int %) (obj :points))
            style {:display "block"
                   :width "40px"
                   :float "left"}]
        [:ul.selectable-list
         (for [idx1 (take (count ps) math/positive-numbers)
               :let [point (ps idx1)
                     selected? (and (= (selected-point :name) selected)
                                    (= (get-in selected-point [:part 0]) idx1))]]
           ^{:key idx1}
           [:li {:class (if selected? "dark-background" "light-background")
                 :on-click #(action (api/setSelectedPoint selected idx1))}
            (for [idx2 [0 1 2 3]
                  :let [coord (point idx2)]]
              ^{:key idx2}
              [:input (if (get-in obj [:rotation :active])
                        {:style style
                         :type "text" :value (str coord)
                         :read-only true}
                        {:style style
                         :type "text" :value (str coord)
                         :on-change #(action (api/setPointCoord
                                              selected idx1 idx2
                                              (int (-> % .-target .-value))))
                         :read-only false})])
            [:div.clearfloat]])]))]])

;; Todo: Stub
(defn object-rotation
  "Component representing the content of the rotation tab."
  []
  [:div#object-rotation
   {:style {:display "none"}}
   "--"])

;; Todo: Stub
(defn object-mirroring
  "Component representing the content of the mirroring tab."
  []
  [:div#object-mirroring
   {:style {:display "none"}}
   "--"])

(defn control-panels
  "Component representing the control-panels
  object-info, object-rotation and object-mirroring."
  [obj info action]
  (let [active-tab (info :active-tab)
        style #(if (= % active-tab) "block" "none")
        put-style #(assoc-in %1 [1 :style :display] (style %2))]
    [:div#control-panels
     (put-style (object-info obj info action) "info-tab")
     (put-style (object-rotation) "rotation-tab")
     (put-style (object-mirroring) "mirroring-tab")]))

(defn controls
  "The controls div on the left."
  [state action]
  (let [selected (get-in @state [:info :selected])
        selected-obj (get-in @state [:objects selected])
        active-dropdown (get-in @state [:info :active-dropdown])
        active-tab (get-in @state [:info :active-tab])
        object-keys (keys (@state :objects))]
    [:div#controls
     ;; The title
     [:h2 (translate :title)]
     ;; The general controls (object-list, buttons)
     [:div#general-controls
      [:div {:style {:overflow "visible" :position "relative"}}
       [:div.button {:on-click #(action
                                 (api/toggleDropdown "general-options-dropdown"))
                     :title (translate :options)
                     :style {:padding "4px 4px 0px 4px"}}
        [:img {:src "img/gear.png" :alt "gear"
               :width "20px" :height "20px"}]]
       ;; Generals objects dropdown menu
       (general-options-dropdown active-dropdown action)]
      (object-list object-keys selected action)]
     ;; The selected-object controls
     [:div#object-controls
      [:h3#object-controls-title (object-controls-title selected)]
      [:div#object-panels-wrapper {:style {:display (if (= selected :none)
                                                      "none" "block")}}
       [:ul#control-tabs (control-tabs active-tab action)]
       [:div.clearfloat]
       (control-panels selected-obj (@state :info) action)]]
     [:hr]
     [:h4 (translate :test-functions)]
     [:div.button {:href "#"
                   :on-click #(action (api/printState))}
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
  (r/render-component [(fn [] (body state user-action))]
                      (.-body js/document)))
