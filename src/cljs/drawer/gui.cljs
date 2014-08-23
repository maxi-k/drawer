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
   :parent (util/element-by-id "object-list")
   :html (fn [state]
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
   :parent (util/element-by-id "object-controls-title")
   :html (fn [state] (let [selected (get-in state [:info :selected])]
                      (if (= selected :none)
                        "Nichts Ausgewählt"
                        selected)))})

(def ^:private control-tabs
  "Component representing the tabs in the object-controls."
  {:update? #(not= (get-in %1 [:info :active-tab]) (get-in %2 [:info :active-tab]))
   :parent (util/element-by-id "control-tabs")
   :html (fn [state]
           (h/html
            (for [[id name] {"info-tab" "Info"
                             "rotation-tab" "Drehung"
                             "mirroring-tab" "Spiegelung"}
                  :let [selected? (= id (get-in state [:info :active-tab]))]]
              [:li.tab {:id (if selected? "selected-tab" nil)}
               [:a {:href "#"
                    :onclick (str "api.setActiveTab('" id "')")} name]])))})

;; Todo: Stub
(def ^:private object-info
  "Component representing the content of the info tab."
  {:update? #(and (= (get-in %1 [:info :active-tab]) "info-tab")
                  (or (not= (get-in %1 [:info :active-tab])
                            (get-in %2 [:info :active-tab]))
                      (not= (get-in %1 [:info :selected])
                            (get-in %2 [:info :selected]))
                      (not= (get-in %1 [:objects (get-in %1 [:info :selected])])
                            (get-in %1 [:objects (get-in %2 [:info :selected])]))))
   :parent (util/element-by-id "object-info")
   :html (fn [state]
           (let [selected (get-in state [:info :selected])]
             (h/html
              [:a.button.dangerous
               {:href "#"
                :onclick (str "api.removeObject('" selected "')")}
               (str selected " entfernen")])))})

;; Todo: Stub
(def ^:private object-rotation
  "Component representing the content of the rotation tab."
  {:update? #(constantly false)
   :parent (util/element-by-id "object-rotation")
   :html ""})

;; Todo: Stub
(def ^:private object-mirroring
  "Component representing the content of the mirroring tab."
  {:update? #(constantly false)
   :parent (util/element-by-id "object-mirroring")
   :html ""})

(def components
  "All components that should be rendered."
  [object-list control-tabs object-controls-title
   object-info])

(def updaters
  "All updaters that should be called."
  [{:update? #(not= (get-in %1 [:info :selected]) (get-in %2 [:info :selected]))
    :do-update (fn [state] (set! (-> (util/element-by-id "object-panels-wrapper")
                                    .-style
                                    .-display)
                                (if (= :none (get-in state [:info :selected]))
                                  "none" "block")))}

   {:update? #(not= (get-in %1 [:info :active-tab]) (get-in %2 [:info :active-tab]))
    :do-update (fn [state] (doseq [[tab panel] {"info-tab" "object-info",
                                               "rotation-tab" "object-rotation",
                                               "mirroring-tab" "object-mirroring"}
                                  :let [selected? (= tab (get-in state [:info :active-tab]))]]
                            (set! (-> (util/element-by-id panel) .-style .-display)
                                  (if selected? "block" "none"))))}])

(defn update-view
  "Re-renders respective gui elements if necessary."
  [new-state old-state]
  (doseq [component components]
    (if ((component :update?) new-state old-state)
      (util/set-dom! (component :parent)
                     ((component :html) new-state))))
  (doseq [updater updaters]
    (if ((updater :update?) new-state old-state)
      ((updater :do-update) new-state))))
