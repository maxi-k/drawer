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
   :points {:en "Points"
            :de "Punkte"}
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
                    :de "Testfunktionen"}
   :program-state {:en "Program-state"
                   :de "Programmstatus"}
   :info-tab {:en "Info"
              :de "Info"}
   :rotation-tab {:en "Rotation"
                  :de "Drehung"}
   :mirroring-tab {:en "Mirroring"
                   :de "Spiegelung"}})

(defn translate
  "Translates given key(s) using the
  language-map."
  [& keys]
  ((get-in language-map keys) cur-lang))
