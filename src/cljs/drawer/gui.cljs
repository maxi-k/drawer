(ns drawer.gui
  (:require [drawer.api :as api]
            [drawer.util :as util]
            [drawer.math :as math]
            [drawer.lang :refer [translate]]
            [reagent.core :as r]))

(def ^:private gui-state
  "The initial state of the gui-only stuff."
  (r/atom  {:message {:value ""
                      :opacity 0.0}
            :active-tab "info-tab"
            :active-dropdown :none}))

(defn- gui-action
  "Swaps the gui-state atom with given function"
  [f]
  (swap! gui-state f))

(defn prompt
  "The (hidden) prompt div."
  [action]
  [:div#prompt-overlay {:style {:display "none"}}
   [:div#prompt-wrapper
    [:a#prompt-close-button
     {:href "#", :on-click #(action identity)} "X"]
    [:div.clearfloat]
    [:div#prompt]]])

(defn canvas
  "The canvas element."
  [canvas-info]
  [:canvas {:id "canvas"
            :width (canvas-info :width)
            :height (canvas-info :height)}])

(defn dropdown-button
  "Generalization for a dropdown button that
  toggles the dropdown with 'name', and has
  'img' as background."
  ([name active img]
     (dropdown-button name active img identity))
  ([name active img fn-wrapper]
     [:div.button
      {:on-click
       (fn-wrapper
        (fn [] (let [func #(gui-action (api/toggleDropdown %))]
                 (if (= active name)
                   (func :none)
                   (let [set-cursor! #(set! (-> js/document .-body .-style .-cursor) %)
                         f #(do (func :none)
                                (set! (.-onmouseup js/window) nil)
                                ;; Reset the cursor to default after the
                                ;; pointer hack has done its job
                                (set-cursor! nil))]
                     (do (func name)
                         (set! (.-onmouseup js/window) f)
                         ;; Hack for iOS only accepting MouseEvent input
                         ;; from cursor:pointer/'clickable' elements
                         (set-cursor! "pointer")))))))
       :title (translate :options)
       :style {:padding "4px 4px 0px 4px"
               :margin-right "5px"}}
      [:img {:src (str "img/" img ".png") :alt img
             :width "20px" :height "20px"}]]))

(defn add-dropdown
  "Component representing the add-dropdown
  (acitvated by the plus-button)."
  [active-dropdown]
  (let [name "add-dropdown"
        active? (= name active-dropdown)]
    [:div.dropdown
     {:id name
      :style {:display (if active? "block" "none")
              :top "20px" :left "27px"}}
     [:ul
      [:li {:on-click #(api/showMessage gui-action "Not implemented yet")}
       (translate :add :object)]]]))

(defn general-dropdown
  "Component representing the general-dropdown
  (activated by the gear-button)."
  [active-dropdown action]
  (let [name "general-dropdown"
        active? (= name active-dropdown)]
    [:div.dropdown
     {:id name
      :style {:display (if active? "block" "none")
              :top "20px" :left "62px"}}
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

(defn object-dropdown
  "Component representing the object-dropdown
  (activated by the cube-button."
  [active-dropdown selected-obj action]
  (let [name "object-dropdown"
        active? (= name active-dropdown)]
    [:div.dropdown
     {:id name
      :style {:display (if active? "block" "none")
              :top "20px" :left "96px"}}
     [:ul
      [:li {:on-click #(action (api/removeObject selected-obj))}
       ((translate :remove-object) selected-obj)]
      [:li {:on-click #(action (api/duplicateObject selected-obj))}
       ((translate :duplicate-object) selected-obj)]]]))


(defn dropdown-menus
  "Component representing the part of the controls
  where the dropdown buttons- and menus are."
  [active-dropdown selected-obj pending-object action]
  [:ul#dropdown-wrapper
   [:li
    (dropdown-button "add-dropdown" active-dropdown "plus")
    (add-dropdown active-dropdown)]
   [:li
    (dropdown-button "general-dropdown" active-dropdown "gear")
    (general-dropdown active-dropdown action)]
   [:li
    (dropdown-button "object-dropdown" active-dropdown "cube"
                     (fn [func] (if (= :none selected-obj)
                                  #(api/showMessage
                                    gui-action (translate :nothing-selected))
                                  func)))
    (object-dropdown active-dropdown selected-obj action)]
   [:div.clearfloat]])

(defn object-list
  "Component representing the object-list."
  [object-keys selected-obj action]
  [:ul#object-list.selectable-list
   (for [obj-name object-keys
         :let [selected? (= obj-name selected-obj)]]
     ^{:key obj-name}
     [:li {:style {:border-bottom "1px solid #AAA"}
           :class (if selected? "light-background" "white-background")
           :on-click #(action (api/setSelected obj-name))}
      obj-name
      [:div.clearfloat]])])

(defn object-controls-title
  "Component representing the title of the object-controls."
  [selected-obj]
  (if (= selected-obj :none) (translate :nothing-selected) selected-obj))

(defn control-tabs
  "Component representing the tabs in the object-controls."
  [active-tab]
  (for [[id name] (util/map-to-fn-of
                   #(translate (keyword %))
                   "info-tab" "rotation-tab" "mirroring-tab")
        :let [selected? (= id active-tab)]]
    ^{:key id}
    [:li.tab {:class (if selected? "light-background" "white-background")
              :on-click #(gui-action (api/setActiveTab id))}
     name]))

;; Todo: Stub
(defn object-info
  "Component representing the content of the info tab."
  [obj selected action]
  (let [selected-obj (selected :obj)
        selected-point (selected :point)]
    [:div#object-info {:style {:display "none"}}
     [:h3 {:style {:margin "3px 0"}}
      (translate :points)]
     (if (nil? obj)
       "--"
       (let [ps (mapv #(mapv int %) (obj :points))
             ]
         [:ul.selectable-list
          (for [idx1 (take (count ps) math/positive-numbers)
                :let [point (ps idx1)
                      selected? (and (= (selected-point :name) selected-obj)
                                     (= (get-in selected-point [:part 0]) idx1))]]
            ^{:key idx1}
            [:li {:class (if selected? "dark-background" "light-background")
                  :on-click #(action (api/setSelectedPoint selected-obj idx1))}
             (for [idx2 [0 1 2 3]
                   :let [coord (point idx2)]]
               ^{:key idx2}
               [:input {:type "text" :value (str coord)
                        :on-change #(action (api/setPointCoord
                                             selected-obj idx1 idx2
                                             (float (-> % .-target .-value))))
                       :disabled (get-in obj [:rotation :active])}])
             [:div.clearfloat]])]))]))

(defn object-rotation
  "Component representing the content of the rotation tab."
  [object {:keys [obj]} action]

  (let [active? (get-in object [:rotation :active])]
    [:div#object-rotation
     {:style {:display "none"}}
     [:table.view-table
      [:tr
       [:td [:span (str (translate :active) ":")]]
       [:td [:input {:type "checkbox"
                     :checked (boolean active?)
                     :name "rotation-active"
                     :on-change #(action (api/setRotation
                                          obj
                                          (-> % .-target .-checked)))}]]]
      [:tr
       [:td [:span (str (translate :type) ":")]]
       [:td [:form
             (for [name ["points" "object" "object-part" "part" "center"]]
               ^{:key name}
               [:div {:style {:display "block" :margin "0 0 2px 0"}}
                [:input {:type "radio"
                         :name "rotation-type"
                         :checked (= (get-in object [:rotation :center :type])
                                     (keyword name))
                         :on-change #(action (api/setRotationCenterType
                                              obj
                                              (keyword name)))
                         :value name
                         :disabled active?}]
                (str "  " (translate :rotation-type
                                     (keyword name)))])]]]
      [:tr
       [:td [:span (str (translate :center) ":")]]
       [:td [:input {:type "text"
                     :disabled active?}]]]]]))

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
  [obj selected active-tab action]
  (let [style #(if (= % active-tab) "block" "none")
        put-style #(assoc-in %1 [1 :style :display] (style %2))]
    [:div#control-panels
     (put-style (object-info obj selected action) "info-tab")
     (put-style (object-rotation obj selected action) "rotation-tab")
     (put-style (object-mirroring) "mirroring-tab")]))

(defn controls
  "The controls div on the left."
  [state action]
  (let [selected (@state :selected)
        selected-obj-name (selected :obj)
        selected-obj (get-in @state [:objects selected-obj-name])
        active-dropdown (@gui-state :active-dropdown)
        active-tab (@gui-state :active-tab)
        object-keys (keys (@state :objects))
        pending-object (@state :pending-object)]
    [:div#controls
     ;; The title
     [:h2 (translate :title)]
     ;; The general controls (object-list, buttons)
     [:div#general-controls
      (dropdown-menus active-dropdown selected-obj-name pending-object action)
      (object-list object-keys selected-obj-name action)]
     ;; The selected-object controls
     [:div#object-controls
      [:h3#object-controls-title (object-controls-title selected-obj-name)]
      [:div#object-panels-wrapper
       {:style {:display (if (and (not= selected-obj-name :none)
                                  (contains? object-keys selected-obj-name))
                           "none" "block")}}
       [:ul#control-tabs (control-tabs active-tab)]
       [:div.clearfloat]
       (control-panels selected-obj selected active-tab action)]]
     [:p {:style {:display (if (get-in selected-obj [:rotation :active])
                             "block" "none")
                  :font-weight "bold"}}
      (str (translate :rotation-active-msg) ".")]
     [:hr]
     [:h4 (translate :test-functions)]
     [:div.button {:on-click #(action (fn [s] (js/alert s) s))}
      (translate :program-state)]
     [:p]
     [:div.button {:on-click #(.clear (.-localStorage js/window))}
      (translate :clear-storage)]]))

(defn message
  "The message that can appear on the top right of the screen."
  [{:keys [value opacity]}]
  [:div#message {:style {:opacity opacity}}
   value])

(defn body
  "Combining all components into the body component."
  [state action]
  [:div#body-wrapper
   (prompt action)
   (controls state action)
   (canvas (@state :canvas))
   [:div.clearfloat]
   (message (@gui-state :message))])

(defn init-gui
  "Initialize the gui rendering."
  [state user-action]
  (r/render-component [(fn [] (body state user-action))]
                      (.-body js/document)))
