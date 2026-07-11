# N5 Japanese App

Vanilla JS PWA — JLPT N5 Karteikarten mit Spaced Repetition. Kein Build-Step, kein Framework.
Hosting: GitHub Pages (push → deploy automatisch)

## Commands

open index.html          # lokal im Browser öffnen (kein Server nötig)
git push origin main     # deployed automatisch via GitHub Pages

## Dateirollen

- `app.js`       — gesamte App-Logik (~1700 Zeilen, keine Abhängigkeiten)
- `style.css`    — alle Styles; CSS-Variablen stehen ganz oben (~2600 Zeilen)
- `index.html`   — 4 Screens (home, session, done, list); kein Templating
- `sw.js`        — Service Worker für PWA-Offline; Cache-Name bei Änderungen bumpen
- `manifest.json`— PWA-Metadaten (Name, Icons, Theme-Color)
- `pos.js`       — posCategory: pos-String → Deck-Kategorie (pure module, `node --test`)
- `conjugate.js` — Konjugationsformen für Verben/Adjektive (pure module, `node --test`)
- `srs.js`       — Spaced-Repetition-Logik (pure module, `node --test`)
- `data/kanji.js`    — const KANJI (170 Einträge)
- `data/vocab.js`    — const VOCAB (1008 Einträge: 437 easy / 571 adv)
- `data/grammar.js`  — const GRAMMAR (63 Einträge)
- `data/basics.js`   — const BASICS (56 Einträge)
- `data/concepts.js` — const CONCEPTS (60 Einträge)

## Architektur & Datenstrukturen

→ [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

## Konventionen

- Kein npm, kein Build. Änderungen direkt in den Dateien, im Browser testen.
- `sw.js`: Cache-Name (`n5-vX`) bei jeder inhaltlichen Dateiänderung inkrementieren.
- `index.html`: `<div class="app-version">` bei jedem Feature-Release auf die neue Versionsnummer setzen (SemVer).
- `CHANGELOG.md` bei Features und Fixes aktuell halten.
- `data/*.js` Lesbarkeit > Kompaktheit — lesbare Feldnamen, ein Objekt pro Zeile.
