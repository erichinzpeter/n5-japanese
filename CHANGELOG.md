# Changelog — N5 Japanisch Lern-App

## [Unreleased]

---

## [2.4.0] — 2026-05-14

### Neu

- **Fuji-Banner im Home-Header** — Statt `日本語`-Logo zeigt der Home-Screen ein 8-bit Pixel-Art-Banner (Fujisan bei Dämmerung, Pagode, See, Sakura-Wälder). Zwei flatternde ASCII-Vögel (`v`/`^` im 0,45-s-Takt) ziehen langsam (22 s / 28 s, leichter Höhen-Bob) über den Himmel. `prefers-reduced-motion` parkt die Vögel statisch. Banner liegt unter `assets/fuji-banner.png`. Titel `日本語` als Overlay unten-links im Banner.

### Geändert

- Service-Worker-Cache `n5-v13` → `n5-v14`, neues Asset im Preload.

---

## [2.3.0] — 2026-05-14

### Neu

- **Deck-first Start-Modal** — Modus- und Richtungs-Auswahl wandert vom Home-Screen in ein Modal, das beim Klick auf ein Deck öffnet. Pro Deck werden nur sinnvolle Modi angezeigt (Situation/Verwendung nur bei Grammatik). Bei diesen beiden Modi ist die Richtungs-Auswahl ausgeblendet. Letzte Auswahl pro Deck wird in `localStorage` (`n5_modal_prefs`) gemerkt. Esc/Backdrop schließt, Enter startet.
- **70 neue Kanji (k101–k170)** — Kanji-Deck wächst von 100 auf 170: restliche N5 + häufige frühe N4. Gruppen: Pronomen/Wochentage, Familie, Tageszeiten, Jahreszeiten, Körper & Geist, Lernen & Schule, Orte, Medien, Essen & Trinken, Bewegungsverben. Schema unverändert.

### Behoben

- **„Nochmal"-Karte erscheint nicht mehr direkt wieder** — Re-Queue-Position war fest auf `sessionIdx + 3..5`. Bei kleinen Sessions oder Sessionende landete die Karte fast sofort wieder oben. Jetzt: zufällige Position zwischen `sessionIdx + 5` und Deck-Ende. Bei ≤5 verbleibenden Karten wird sie ans Ende geschoben.

---

## [2.2.0] — 2026-05-14

### Neu

- **Verwendungs-Modus** — vierter Lernmodus für Grammatik. Front zeigt die deutsche Verwendungs-Situation („Du möchtest jemanden höflich um etwas bitten…"), die vier Antworten sind reine japanische Muster (`〜てください`, `〜ましょう` …) ohne deutsche Hinweise. Reine Erkennung von Verwendung → Muster, kein Deutsch in den Antworten.

### Behoben

- **„1)"-Präfix in JP→DE MC-Antworten entfernt** — Erklärungen wie „1) Richtung/Ziel bei gehen/kommen. 2) Zeitpunkt." (z.B. に, で) zeigten in den Antworten ein verirrtes „1) ". Neue Helfer-Funktion `cleanExplanation()` entfernt die Listen-Nummerierung vor dem Splitten.
- **Situation-Modus MC ohne deutschen Hinweis** — auch im Situation-Modus (MC-Variante) werden Muster jetzt mit `stripPatternHint()` gesäubert; keine `(Bitte tun Sie …)`-Leaks mehr in den Antworten.

---

## [2.1.1] — 2026-05-14

### Behoben

- **Grammatik JP→DE-Leak** — auch in JP→DE-Richtung wird der deutsche Hinweis in Klammern jetzt aus dem Muster auf der Fragenseite entfernt (z.B. „〜ましょう / 〜ましょうか" statt „〜ましょう / 〜ましょうか (Vorschlag: Lass uns …)"), damit MC-Antworten wie „Vorschlag, etwas gemeinsam zu tun" nicht verraten werden.

---

## [2.1.0] — 2026-05-14

### Geändert

- **Sticky Listen-Header** — Zurück-Button, Suche und Tabs bleiben beim Scrollen langer Listen (Vokabeln, Kanji) sichtbar; die Liste scrollt jetzt innerhalb ihres Containers statt der ganzen Seite. Touch-Area des Zurück-Buttons auf 44×44px vergrößert.
- **Kanji-Anzeige zeigt natürliche Lesung** — in der Kanji-Liste erscheint jetzt die bevorzugte Lesung groß (z.B. 人 → ひと statt ジン). Logik gleich wie TTS: `speak`-Feld zuerst, sonst Kun, sonst On. Die Detail-Ansicht zeigt weiterhin beide Lesungen vollständig.
- **Grammatik-MC ohne Antwort-Leak** — DE→JP fragt jetzt mit einem deutschen Beispielsatz („Bitte sprechen Sie langsam.") statt der Erklärung. Antwort-Choices zeigen nur die japanische Form (`〜てください`) ohne den deutschen Hinweis in Klammern. Kein Stichwort-Überlapp zwischen Frage und Antwort mehr.

---

## [2.0.0] — 2026-05-10

### Neu

- **Situation-Modus** — dritter Lernmodus speziell für Grammatik-Patterns
  - Auf der Startseite als neuer Tab „Situation" wählbar
  - Jede Karte zeigt eine deutsche Alltagssituation auf der Vorderseite; der Nutzer erkennt und wählt/baut das passende Grammatikmuster
  - 60% der Fälle: Multiple Choice (4 Patterns zur Auswahl)
  - 40% der Fälle: **Kacheln-Modus** (Duolingo-Stil) — Tokens des Musters erscheinen gemischt als anklickbare Kacheln, müssen in die richtige Reihenfolge gebracht werden
  - Automatischer Fallback auf MC, wenn das Muster nur einen Token hat (z.B. `〜ましょう`)
  - Bei falscher Kacheln-Reihenfolge: visueller Rot-Feedback + Tokens automatisch zurücksetzen zum erneuten Versuch
  - Bei richtiger Reihenfolge: Grün-Feedback → Karte dreht sich → SRS-Rating

- **Situation-Felder in allen 46 Grammatik-Einträgen** — jeder Grammar-Eintrag hat jetzt ein `situation`-Feld mit einer deutschen Alltagssituation, die das Muster einbettet (z.B. „Du möchtest eine höfliche Bitte äußern.")

- **Kacheln-Interaktion** — neue tokenbasierte UI-Komponente
  - `tokenizePattern()` zerlegt z.B. `〜は〜です` → `["〜は", "〜", "です"]`
  - Kacheln sind touch-optimiert (min. 44px, `touch-action: manipulation`)
  - Klick auf platzierte Kachel schickt sie zurück in den Pool

### Geändert

- **Font Inter → Outfit** — Interface-Schrift auf Outfit umgestellt (bessere Lesbarkeit, modernere Anmutung)

---

## [1.3.0] — 2026-05-05

### Neu

- **Sprachausgabe (TTS)** — 🔊-Button in der Session-Topbar liest das japanische Wort/Zeichen/Muster vor
  - Nutzt Web Speech API (kein Account, kein API-Key, keine Kosten)
  - Sprachrate 0.9× für bessere Lernbarkeit
  - Funktioniert in allen modernen Browsern; iOS Safari + Android Chrome haben gute JP-Stimmen eingebaut
  - Liest immer die japanische Seite vor — egal ob JP→DE oder DE→JP-Modus aktiv ist
- **PWA (Progressive Web App)** — App ist jetzt auf iPhone und Android installierbar
  - `manifest.json` mit App-Name, Icons, Dark-Theme-Farbe
  - Service Worker (`sw.js`) cacht alle Assets → App funktioniert vollständig offline
  - Apple-Touch-Icon und Meta-Tags für iOS Home-Screen-Installation
  - GitHub Pages Hosting: `https://erichinzpeter.github.io/n5-japanese/`
  - Installation iOS: Safari → Teilen → „Zum Home-Bildschirm"
  - Installation Android: Chrome → Menü → „App installieren"

---

## [1.2.0] — 2026-05-05

### Neu

- **Neues Deck „Alltag"** — 56 Karten mit den häufigsten japanischen Funktionswörtern und Adjektiven
  - 25 Konnektoren & Adverbien: と, そして, でも, または, も, だけ, まだ, もう, いつも, ときどき, ぜんぜん, たぶん, もちろん, とても, だから, それから, おなじ, ちがう, ほんとうに, いっしょに, ひとりで, まず, じゃあ, か, しかし
  - 16 i-Adjektive: 大きい, 小さい, いい, 悪い, 新しい, 古い, 暑い, 寒い, 冷たい, 速い, 遅い, 高い, 安い, 面白い, つまらない, 美味しい, 難しい, 優しい, 若い, かわいい, 嬉しい
  - 10 na-Adjektive: きれい, 静か, 元気, 便利, 簡単, 好き, 嫌い, 有名, 大切, 大丈夫
  - Jeder Eintrag mit 2 Beispielsätzen (JP + DE)
  - Vollständig in Flashcard- und Multiple-Choice-Modus integriert (inkl. Distractoren-Pool)

### Behoben

- MC-Modus: `generateChoices()` rief `shuffleArray()` statt `shuffle()` auf → `ReferenceError`, MC-Modus lief gar nicht

---

## [1.1.0] — 2026-05-03

### Neu

- **Multiple-Choice-Modus** — zweiter Lernmodus neben Karteikarten; auf der Startseite umschaltbar
  - 4 Antwort-Buttons (1 richtig + 3 Distractoren aus demselben Deck-Pool)
  - Visuelles Feedback: richtige Antwort grün, falsche rot, korrekte dann ebenfalls grün
  - Automatische SRS-Bewertung: richtig = „Gut" (3), falsch = „Nochmal" (1)
  - Tastatur-Shortcuts 1–4 wählen die entsprechende Option
  - Funktioniert für alle drei Decks (Kanji, Vokabeln, Grammatik) und beide Richtungen (JP→DE, DE→JP)

- **Beispielsätze auf Vokabel-Karten** — jeder der 270 Einträge hat 2 alltagstaugliche Beispielsätze (JP + DE) auf der Rückseite

- **Beispielsätze auf Kanji-Karten** — jeder der 100 Einträge hat 2 Verwendungssätze (JP + DE); bestehende Komposita-Beispiele (`examples[]`) bleiben erhalten

- **Alltagsdialoge auf Grammatik-Karten** — jeder der 45 Grammatik-Patterns hat einen kurzen Dialog (2 Turns, JP + DE) auf der Rückseite

### Behoben

- `generateChoices()` rief `shuffleArray()` statt `shuffle()` auf → `ReferenceError`, MC-Modus lief gar nicht

---

## [1.0.0] — 2026-04-30

### Neu (Erstveröffentlichung)

- **Drei Decks**: Kanji (100), Vokabeln (270), Grammatik (45)
- **Karteikarten-Modus** mit CSS-3D-Flip-Animation
- **SRS-Algorithmus** (vereinfachtes SM-2) mit 4 Bewertungsstufen: Nochmal / Schwer / Gut / Einfach
- **Beide Lernrichtungen**: JP→DE, DE→JP, oder gemischt
- **Fortschritt** wird in `localStorage` gespeichert (Key: `n5_srs`)
- Fortschrittsbalken und Kartenanzahl in der Session
- Session-Abschluss-Screen mit Bewertungsverteilung
- Tastatur-Shortcuts: Leertaste = umdrehen, 1–4 = bewerten, Esc = zurück
- Reset-Funktion zum Löschen des gesamten Fortschritts
- Responsive Design, mobilfreundlich
- Dark-Mode-Farbschema (Warm-Dunkel mit Gold-Akzent)
- Google Fonts: Shippori Mincho B1 (Japanisch) + Crimson Pro (UI)
