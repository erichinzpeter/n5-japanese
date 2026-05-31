# Changelog — N5 Japanisch Lern-App

## [Unreleased]

---

## [2.10.0] — 2026-05-31

### Geändert

- Grammatik hat nur noch zwei Übungsmodi: **Karteikarten** und **Multiple Choice**. Die Modi „Situation" und „Verwendung" (inkl. Kachel-Zusammenbau) wurden entfernt — sie waren nahezu Duplikate, deren Frage und Antwort sich überschnitten.
- Grammatik-MC (JP→DE) fragt jetzt mit einem **Beispielsatz** statt dem nackten Muster — die Partikel im Muster verrieten sonst die Antwort.
- Start-Dialog vereinfacht: die Richtungs-Auswahl ist immer sichtbar; die Option **„Beide"** wurde entfernt (verdoppelte die Kartenmenge, für Anfänger verwirrend).
- Home-Fälligkeitszähler für Vokabeln/Alles respektieren jetzt das gespeicherte Niveau — vorher konnte der Zähler nach einer Fortgeschritten-Session still umspringen.
- Service-Worker-Cache `n5-v30` → `n5-v31`.

### Behoben

- Aussprache-Buttons (🔊) nutzen einen delegierten Listener (`data-speak`) statt Inline-`onclick` — robust gegen Anführungszeichen und Sonderzeichen im Text.

### Entfernt

- Toter Code: `hasKanji`, `audioButtonHtml` und ungenutzte lokale Variablen.

---

## [2.9.0] — 2026-05-30

### Hinzugefügt

- **Niveau-Umschalter (Einfach / Fortgeschritten)** für Vokabel-Übungen. Einfach zeigt nur Vokabeln aus den frühen N5-Lektionen; Fortgeschritten nimmt den gesamten N5-Wortschatz dazu. Gilt für die Decks Vokabeln und Alles; in Alles wird nur der Vokabel-Anteil gefiltert. Auswahl wird pro Deck gespeichert, Standard ist Einfach.
- **~100 neue N5-Vokabeln** im Wortschatz und in der Liste.

### Geändert

- Service-Worker-Cache `n5-v29` → `n5-v30`.

---

## [2.8.2] — 2026-05-30

### Hinzugefügt

- **„Beispielwort"-Label** — Kanji, deren Audio ein repräsentatives N5-Wort spricht statt einer blanken On/Kun-Lesung (z.B. 菜 → „やさい", 写 → „しゃしん", 多 → „おおい"), zeigen dieses Wort jetzt als eigene Zeile „Beispielwort" auf der Kartenrückseite und im Listen-Detail. Damit hat die gesprochene Lesung eine sichtbare Quelle und passt zur Anzeige. Betrifft 23 Kanji. Löst den in 2.8.1 vermerkten offenen Punkt.

### Geändert

- Service-Worker-Cache `n5-v28` → `n5-v29`.

---

## [2.8.1] — 2026-05-30

Kanji-Aussprache: Stimme passte nicht zur angezeigten Lesung.

### Behoben

- **🔊-Buttons sprachen das rohe Kanji-Zeichen** (`k.char`) statt einer Lesung. Eine einzelne Kanji-Glyphe an die Sprachausgabe zu geben liefert eine nichtdeterministische Lesung, die oft nicht zur angezeigten Hiragana/Katakana passte. Buttons (Karte + Liste) sprechen jetzt dieselbe kuratierte Lesung wie das Auto-Vorlesen beim Umdrehen (`kanjiReading()` = `speak || kun[0] || on[0]`). Stimme = angezeigte Lesung, deterministisch.
- **Falsche Standard-Lesung bei on-dominanten Kanji** — 学 sprach „まなぶ" (N4-Verb) statt „がく", 語 „かたる" (N3) statt „ご", 生 „いきる" (N4) statt „せい". `speak`-Feld mit der N5-üblichen Lesung ergänzt.

### Hinzugefügt

- `data/kanji-reading.test.mjs` — prüft, dass jede gesprochene Lesung sauberes Kana ist (nie ein Kanji-Zeichen) und die korrigierten Lesungen stimmen.

### Bekannt / offen

- Bei einigen Kanji mit Wort-`speak` (z.B. 菜 → „やさい", 写 → „しゃしん") wird ein N5-Wort gesprochen, das nicht in den angezeigten On/Kun-Listen steht. Bewusste Kuratierung, kein Fehler; ggf. später als „Beispielwort" kennzeichnen.

### Geändert

- Service-Worker-Cache `n5-v27` → `n5-v28`.

---

## [2.8.0] — 2026-05-30

Onboarding (impeccable onboard).

### Neu

- **Willkommens-Panel beim ersten Start** — erklärt auf dem Home-Screen kurz, wie Spaced Repetition hier funktioniert (umdrehen → bewerten, Nochmal/Richtig, 20 Karten pro Runde). Nicht blockierend, schließbar (× / „Los geht's"), erscheint nur einmal (`localStorage: n5_onboarded`).
- **Hinweis bei der ersten Bewertung** — einmaliger Inline-Hinweis über den Rating-Buttons, der erklärt, dass die Bewertung den nächsten Wiederholungstermin plant. Verschwindet nach der ersten Bewertung (`localStorage: n5_rating_hint_seen`).

### Politur (impeccable polish)

- **Reduced-Motion** projektweit respektiert — globaler `@media (prefers-reduced-motion: reduce)`-Guard statt nur Einzelfälle (Modal, Vögel).
- **Fokusring-Bug behoben** — `:focus-visible` setzte `border-radius` und überschrieb damit die Eck-Radien fokussierter Elemente (z.B. Karte 16px → 8px). Radius entfernt, Outline folgt jetzt dem Element.
- **Touch-Targets** — Schließen-Buttons (Onboarding + Modal) auf 44×44px.
- **Button-Konsistenz** — Onboarding-„Los geht's" nutzt jetzt dieselbe Hover/Active-Konvention wie der Modal-Start-Button (`brightness(1.08)` + `scale(0.98)`).
- **Copy** — Gedankenstrich aus „nichts fällig"-Toast entfernt.

### Geändert

- Service-Worker-Cache `n5-v25` → `n5-v27`.

---

## [2.7.0] — 2026-05-30

Usability-Pass (impeccable critique).

### Neu

- **Session-Limit (20 Karten)** — frische Decks (alles fällig) bleiben endlich und erreichbar. Done-Screen zeigt „Noch X heute fällig", „Nochmal" startet die nächste Portion.
- **Rückgängig nach Bewertung** — Toast mit „Rückgängig" stellt SRS-Planung, Session und Stats wieder her. Fehlklick ist kein Datenverlust mehr.
- **Leere Decks sichtbar** — Decks ohne fällige Karten werden auf dem Home-Screen gedimmt, statt erst nach dem Modal-Funnel.

### Geändert

- **Keine nativen Dialoge mehr** — `alert`/`confirm` ersetzt: „nichts fällig" als Toast, Reset als zweistufiger Inline-Confirm.
- **Kontrast** — `--text-dim` `#5a5450` → `#857d76` (jetzt ≥4.5:1, WCAG AA). Betrifft Deck-Totals, App-Version, Tastatur-Hinweis u.a.
- **Tastatur-Hinweis** verschoben von Home in den Session-Screen, nur bei echter Tastatur sichtbar.

### Barrierefreiheit

- Karte als `role="button"` fokussierbar (Tab/Enter), Fokusring projektweit.
- Modal: Fokus-Trap (Tab zyklisch) und Fokus-Wiederherstellung beim Schließen.
- `aria-label` auf allen 🔊-Buttons, `aria-live` auf Toast.

### Aufgeräumt

- Toter SRS-Code (Ratings 2/4 nie aus der UI erreichbar) aus `calcNextReview` entfernt.
- MC-Modus: Karten-Klick deckt nicht mehr vorab die Antwort auf.
- Service-Worker-Cache `n5-v24` → `n5-v25`.

---

## [2.5.4] — 2026-05-15

### Geändert

- **PWA-Update wieder automatisch** — `self.skipWaiting()` zurück im Install-Handler. Neuer Service Worker aktiviert sofort, `controllerchange` triggert automatisches `location.reload()`. Toast-Element bleibt im Markup für eventuelles späteres Re-Enable, wird aber im Normalfall nicht mehr angezeigt.
- Service-Worker-Cache `n5-v21` → `n5-v22`.

---

## [2.5.3] — 2026-05-15

### Behoben

- **Mehr Luft unter Rating- und MC-Buttons** — Padding-Bottom auf Mobile von `max(16px, safe-area)` auf `safe-area + 32px`. Buttons sitzen jetzt deutlich höher vom Bildschirmrand weg.
- Service-Worker-Cache `n5-v20` → `n5-v21`.

---

## [2.5.2] — 2026-05-15

### Behoben

- **Karte abgeschnitten oben** — `align-items: flex-end` aus v2.5.1 hat lange Karteninhalte nach oben überlaufen lassen. Zurück auf zentriert. Rating-Buttons behalten Safe-Area-Padding.

### Geändert

- **Einheitlicher Header für Practice + Liste** — beide haben jetzt gleiche Struktur: Pfeil-Icon links, heller Titel daneben. Practice zeigt Deck-Name (`Kanji`, `Vokabeln`, `Grammatik`, `Alltag`, `Alles`) als Titel statt UPPERCASE-Label rechts. Progress (`1/270`) rutscht rechts. Padding-Top 30–36px statt 12px/52px.
- Service-Worker-Cache `n5-v19` → `n5-v20`.

---

## [2.5.1] — 2026-05-15

### Behoben

- **Mobile-Safe-Area unten** — Rating-Buttons (`Nochmal`/`Richtig`) und MC-Choices liefen in iOS-Home-Indicator. `padding-bottom: max(20px, env(safe-area-inset-bottom))`.
- **Listen-Ende klebte an Display-Kante** — `.list-content` hat jetzt `padding-bottom` mit Safe-Area.
- **Karte und Rating-Buttons näher zusammen im Practice-Modus** — `.card-wrap` auf Mobile `align-items: flex-end`, Karte sitzt am unteren Ende des Card-Bereichs statt zentriert, Lücke zur Rating-Zeile geschlossen.
- Service-Worker-Cache `n5-v18` → `n5-v19`.

---

## [2.5.0] — 2026-05-15

### Hinzugefügt

- **PWA-Update-Mechanismus** — Service Worker prüft beim App-Start und bei Sichtbarkeitswechsel auf neue Version. Wenn verfügbar, erscheint Toast „Neue Version verfügbar – Tippen zum Aktualisieren" unten. Tap → neuer SW übernimmt, Seite lädt automatisch neu.

### Geändert

- **Fetch-Strategie umgestellt** — Network-first für HTML/JS/CSS/JSON (immer frisch online, Cache-Fallback offline). Cache-first nur noch für Bilder.
- Kein automatisches `skipWaiting()` mehr — User entscheidet via Toast, wann aktualisiert wird.
- Service-Worker-Cache `n5-v17` → `n5-v18`.

---

## [2.4.3] — 2026-05-14

### Behoben

- **Screen-Wechsel auf Mobile kaputt** — `#screen-home`-Media-Query setzte `display: flex` ohne `.active`-Scope. ID-Specifity überschrieb `.screen { display: none }`, Home blieb sichtbar, andere Screens stapelten darunter. `display`/`flex-direction` aus Media-Query entfernt — `.screen.active` regelt Flex-Layout bereits.
- Service-Worker-Cache `n5-v16` → `n5-v17`.

---

## [2.4.2] — 2026-05-14

### Geändert

- **Fuji-Vögel größer und flüssiger** — Bird1 44px, Bird2 34px (Mobile 36/28). Flap-Vertikal-Drift via per-Glyph `translateY` kompensiert (⌣ -0.18em, andere 0). Beide Vögel jetzt gleiche Geschwindigkeit (50s), gleichzeitiger Start, gestaffelte Startpositionen (Bird1 left:8%, Bird2 left:35%) — durchqueren komplett das Banner.
- Service-Worker-Cache `n5-v15` → `n5-v16`.

---

## [2.4.1] — 2026-05-14

### Geändert

- **Home-Screen passt auf Mobile-Viewport** — `100dvh` statt `100vh` berücksichtigt Mobile-URL-Bar. Engere Paddings/Margins auf `≤480px`, `env(safe-area-inset-bottom)` für iOS-Home-Indicator. Footer wird per `margin-top: auto` ans Viewport-Ende geschoben. `keyboard-hint` auf Mobile ausgeblendet.
- Service-Worker-Cache `n5-v14` → `n5-v15`.

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
