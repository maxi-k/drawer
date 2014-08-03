(ns drawer.gui
  (:require [drawer.util :as util]
            [hiccups.runtime :as hr])
  (:require-macros [hiccups.core :as h]))

(def ^:private object-list
  "Component representing the object-list."
  {:update? #(or
              (not= (keys (%1 :objects)) (keys (%2 :objects)))
              (not= (get-in %1 [:info :selected])
                    (get-in %2 [:info :selected])))
   :super-elem (util/element-by-id "object-list")
   :get-html (fn [state]
               (h/html
                (for [obj-name (keys (state :objects))
                      :let [selected?
                            (= obj-name (get-in state [:info :selected]))]]
                  [:li
                   [:a.obj-button
                    {:href "#"
                     :id (if selected? "selected-obj" nil)
                     :onclick (str "api.setSelected('" obj-name "')")}
                    obj-name]
                   [:div.clearfloat]])))})

(def ^:private object-controls-title
  "Component representing the title of the object-controls."
  {:update? #(not= (get-in %1 [:info :selected]) (get-in %2 [:info :selected]))
   :super-elem (util/element-by-id "object-controls-title")
   :get-html (fn [state] (get-in state [:info :selected]))})

(def ^:private object-dropdown
  "Component representing the dropdown menu of the object-controls."
  {:update? #(not= (get-in %1 [:info :selected]) (get-in %2 [:info :selected]))
   :super-elem (util/element-by-id "object-dropdown")
   :get-html (fn [state]
               (let [selected (get-in state [:info :selected])
                     slct-str (str "'" selected "'")]
                 (if (= selected "Nichts Ausgewählt")
                   (h/html [:ul [:li [:a "Bitte zuerst ein Objekt auswählen!"]]])
                   (h/html
                    [:ul
                     [:li [:a {:href "#"
                               :onclick (str "api.removeObject(" slct-str ")")}
                           (str slct-str " entfernen")]]]))))})

(def ^:private control-tabs
  "Component representing the tabs in the object-controls."
  {:update? #(not= (get-in %1 [:info :active-tab]) (get-in %2 [:info :active-tab]))
   :super-elem (util/element-by-id "control-tabs")
   :get-html (fn [state]
               (h/html
                (for [[key name] {:info "Info" :rot "Drehung" :mir "Spiegelung"}
                      :let [selected? (= key (get-in state [:info :active-tab]))]]
                  [:li.tab {:id (if selected? "selected-tab" nil)}
                   [:a {:href "#"
                        :onclick (str "api.setActiveTab('" (clj->js key) "')")} name]])))})

;; Todo: Stub
(def ^:private object-info
  "Component representing the content of the info tab."
  {:update? #(constantly false)
   :super-elem (util/element-by-id "object-info")
   :get-html ""})

;; Todo: Stub
(def ^:private object-rotation
  "Component representing the content of the rotation tab."
  {:update? #(constantly false)
   :super-elem (util/element-by-id "object-rotation")
   :get-html ""})

;; Todo: Stub
(def ^:private object-mirroring
  "Component representing the content of the mirroring tab."
  {:update? #(constantly false)
   :super-elem (util/element-by-id "object-mirroring")
   :get-html ""})

(def components
  "All components that should be rendered."
  [object-list control-tabs object-controls-title
   object-dropdown])

(defn update-view
  "Re-renders respective gui elements if necessary."
  [new-state old-state]
  (doseq [component components]
    (if ((component :update?) new-state old-state)
      (util/set-dom! (component :super-elem) ((component :get-html) new-state)))))
