(ns drawer.lang
  (:require [goog.Uri :as uri]))

(def cur-lang
  "The current language as provided by the
  uri query parameter 'lang'. Defaults to :de"
  (let [url (uri/parse (.-URL js/document))]
    (if-let [lang (.getParameterValue url "lang")]
      (keyword lang)
      :de)))

(def language-map
  "Associates keys of gui-items with their
  translations."
  {:title {:en "Drawer"
           :de "Zeichner"}
   :options {:en "Options"
             :de "Optionen"}
   :active {:en "Active"
            :de "Aktiv"}
   :type {:en "Type"
          :de "Typ"}
   :add {:object {:en "Add Object"
                  :de "Objekt hinzufügen"}
         :scenario {:en "Add scenario"
                    :de "Szenario hinzufügen"}}
   :replace-objects {:en "Replace current objects"
                     :de "Jetzige Objekte ersetzen"}
   :load-scene {:en "Load Scene"
                :de "Szene Laden"}
   :points {:en "Points"
            :de "Punkte"}
   :center {:en "Center"
            :de "Zentrum"}
   :active-camera {:en "Active Camera"
                   :de "Aktive Kamera"}
   :select-nothing {:en "Select Nothing"
                    :de "Nichts auswählen"}
   :nothing-selected {:en "Nothing selected"
                      :de "Nichts ausgewählt"}
   :remove-all-objects {:en "Remove all objects"
                        :de "Alle Objekte entfernen"}
   :remove-object {:en #(str "Remove " %)
                   :de #(str % " entfernen")}
   :duplicate-object {:en #(str "Duplicate " %)
                      :de #(str % " duplizieren")}
   :rotation-control {:start {:en "Start rotating all objects"
                              :de "Rotation aller Objekte starten"}
                      :stop {:en "Stop rotating all objects"
                             :de "Rotation aller Objekte stoppen"}}
   :test-functions {:en "Test functionality"
                    :de "Falls etwas nicht funktioniert"}
   :program-state {:en "Program-state"
                   :de "Programmstatus"}
   :clear-storage {:en "Clear local storage"
                   :de "Lokalen Speicher zurücksetzen"}
   :info-tab {:en "Info"
              :de "Info"}
   :rotation-tab {:en "Rotation"
                  :de "Drehung"}
   :mirroring-tab {:en "Mirroring"
                   :de "Spiegelung"}
   :rotation-type {:points {:en "Points"
                            :de "Punkte"}
                   :object {:en "Object"
                            :de "Objekt"}
                   :object-part {:en "Object Part"
                                 :de "Objekt-Teil"}
                   :part {:en "Own part"
                          :de "Eigener Teil"}
                   :center {:en "Own Center"
                            :de "Eigenes Zentrum"}}
   :rotation-active-msg {:en "Deactivate the rotation of this object to edit it"
                         :de "Deaktivieren Sie die Drehung des Objektes um es zu bearbeiten"}
   :plane {:en "Rotationplane"
           :de "Rotationsebene"}
   :max-deg {:en "Max. Degree"
             :de "Max. Winkel"}
   :done-deg {:en "Rot. Degree"
              :de "Gedr. Winkel"}
   :deg {:en "Degree"
         :de "Winkel"}})

(defn translate
  "Translates given key(s) using the
  language-map."
  [& keys]
  ((get-in language-map keys) cur-lang))
