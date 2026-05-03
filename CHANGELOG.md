# Changelog — N5 Japanisch Lern-App

## [Unreleased]

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
