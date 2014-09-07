(defproject drawer "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [whoops/reagent "0.4.3"]
                 [tailrecursion/cljson "1.0.7"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :source-paths ["src/cljs"]
  :cljsbuild {:builds
              [{:id "development"
                :source-paths ["src/cljs/"]
                :compiler
                {:output-to "out/js/drawer.js"
                 :output-dir "out/js/compiler/development"
                 :optimizations :none
                 :source-map true}}
               {:id "production"
                :source-paths ["src/cljs/"]
                :compiler
                {:output-to "out/js/drawer.min.js"
                 :output-dir "out/js/compiler/production"
                 :optimizations :advanced
                 :pretty-print false
                 :preamble ["reagent/react.min.js"]
                 :source-map "out/js/drawer.min.js.map"}}
               ]})
