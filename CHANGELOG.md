# Changelog — N5 Japanisch Lern-App

## [Unreleased]

---

## [3.4.0] — 2026-06-04

Spaced-Repetition-System (Leitner) für Kanji und Vokabeln — Lernfortschritt wird in localStorage gespeichert.

### Neu

- Spaced repetition (Leitner) für Kanji und Nomen/Vokabeln: Lernfortschritt wird pro Karte und Richtung in localStorage gespeichert und übersteht das Neuladen.
- 5 Boxen mit Intervallen 1/2/4/7/14 Tage. „Wusste ich" stuft hoch, „Wusste ich nicht" eine Box runter (kein kompletter Reset).
- Runden zeigen zuerst fällige Karten (schwächste zuerst), füllen mit max. 10 neuen Karten auf.
- Neuer „Für heute durch"-Zustand, wenn nichts fällig ist — mit „Trotzdem üben" für eine freie Runde.
- Grammatik- und Konjugations-Drills bleiben wie bisher zufällig (ohne SRS).

## [3.3.0] — 2026-06-04

Grammatik-Üben umgebaut auf Lückentext (Cloze).

### Geändert

- Grammatik-Üben ist jetzt Lückentext: richtiges Token in die Lücke wählen statt Muster benennen (Multiple Choice und Karteikarten).
- Grammatik ist richtungs-unabhängig (immer japanischer Satz mit Lücke); Richtungs-Umschalter bei Grammatik ausgeblendet.

### Entfernt

- Muster-Picker — ein einzelnes Muster vorzuwählen machte den Test trivial. Grammatik nachschlagen läuft über die Konzepte.

## [3.2.0] — 2026-06-04

Karten aufgeräumt, Grammatik-Erklärungen für Anfänger ausgebaut.

### Geändert

- **Kein Richtungs-Badge mehr auf den Karteikarten** — das „JP → DE" / „DE → JP"-Etikett auf der Karte entfällt. Der Richtungs-Modus im Start-Dialog bleibt unverändert.
- **の方が ausgeschrieben** — der Vergleich „X ist lieber/besser als Y" wird jetzt durchgängig als のほうが in Hiragana gezeigt (Muster, Erklärung und Beispielsätze), nicht mehr mit dem Kanji 方.
- **Richtung auch mit へ** — die に-Lektion (Richtung) weist jetzt auf die austauschbare Partikel へ hin (学校に行きます = 学校へ行きます), inklusive Beispiel.
- **Verbformen ausführlicher erklärt** — die Konzept-Screens (Verbgruppen, ます-, て-, た-, ない-, なかった-Form, Wörterbuchform) haben jetzt Schritt-für-Schritt-Bildung und mehr Beispiele auf Anfängerniveau.
- **Konjugations-Frage auf Deutsch** — die abgefragte Form heißt jetzt „ます-Form", „て-Form", „た-Form", „ない-Form" bzw. „Wörterbuchform" statt der Kanji-Bezeichnung (て形 usw.).

---

## [3.1.0] — 2026-06-03

Decks nach Wortart aufgeteilt, Grammatik-Multiple-Choice repariert.

### Geändert

- **Vokabeln & Alltag ersetzt** — statt der zwei Decks gibt es jetzt vier nach Wortart: **Nomen**, **Verben**, **Adjektive**, **Sonstiges**. Die bisherigen Alltag-Einträge wandern nach Wortart in die neuen Decks; keine Daten verloren.
- **„Alles" ohne Grammatik** — übt jetzt Kanji + alle vier Vokabel-Decks. Grammatik bleibt ein eigenes Deck (der Lernmodus ist zu anders).
- **Größere Deck-Karten** auf dem Startbildschirm; der Untertitel „JLPT N5 — Karteikarten" entfällt zugunsten von mehr Platz. Jedes Deck hat eine eigene Farbe.

### Behoben

- **Multiple Choice im Grammatik-Deck** funktioniert wieder. Es übt jetzt den gesamten Muster-Pool (Muster ↔ Erklärung); der Drill eines einzelnen Musters bleibt den Karteikarten vorbehalten.

### Intern

- Neue reine Funktion `posCategory` (`pos.js`) ordnet jedes Wort einer der vier Wortart-Kategorien zu, mit Unit-Test `pos.test.mjs`.

---

## [3.0.0] — 2026-06-03

Großer Umbau: von Fortschritts-Tracker zu reinem Daily-Practice-Tool.

### Entfernt

- **Spaced Repetition komplett raus** — kein Scheduling, keine Fällig-Berechnung, kein gespeicherter Lernzustand. Der „Heute fällig"-Hero und der „Fortschritt zurücksetzen"-Button sind weg. `localStorage` hält nur noch UI-Einstellungen.

### Geändert

- **Runden statt Plan** — Deck antippen → 10/20/30 Karten wählen → die App würfelt zufällig zusammen. Nach dem Umdrehen: **Wusste ich / Wusste ich nicht**; „nicht" zeigt die Karte in derselben Runde nochmal. Nichts wird gespeichert, jede Runde startet frisch.
- **Homescreen** — ohne Hero/Reset rückt das Deck-Grid nach oben und wird der Einstieg.

### Neu

- **Verb- & Adjektivformen** — berechnet aus Wörterbuchform + Wortart (辞書形/ます形/て形/た形/ない形 für Verben; Verneinung/Vergangenheit/… für Adjektive). Sichtbar auf der Kartenrückseite, in der Liste und als eigener **Konjugations-Drill** im Vokabeln-Deck. Verben mit Gruppe 1/2/3 beschriftet.
- **Grammatik-Drill** — eigener Muster-Auswahl-Screen (durchsuchbar); ein Muster wählen und dessen Beispielsätze drillen. 8 N5-Beispielsätze pro Muster (368 gesamt).

---

## [2.19.0] — 2026-06-03

### Geändert

- **Sanfter Tagesplan statt Rückstand-Zahl** — der Hero zeigte „Heute fällig: 495 Karten" (jede noch nie gesehene Karte zählte als fällig). Jetzt baut die App einen gemischten Tagesplan: alle echten Wiederholungen plus höchstens 20 neue Karten pro Tag (`DAILY_NEW`), alle Decks durchmischt. Der Hero zeigt nur diesen Plan, nie den Gesamt-Rückstand. Ein Tipp startet direkt (ohne Konfig-Dialog).
- **Deck-Karten entrümpelt** — die fünf Deck-Karten zeigen nur noch Schriftzeichen + Name, keine Fällig-/Gesamt-Zahlen mehr. Kürzer, ruhiger, und der Home-Screen passt jetzt ohne Scrollen auf einen Bildschirm. Deck-Karten bleiben freies, ungedeckeltes Üben; der Hero ist der gedeckelte Tagespfad.

### Behoben

- Neue Karten werden pro Tag gezählt (`localStorage`), damit der Rückstand nicht mehr auf einen Schlag hereinbricht, sondern mit ~20/Tag hereinrieselt. Zähler ist Undo-fest.

## [2.18.0] — 2026-06-03

### Behoben

- **Zoom wieder gesperrt** — `maximum-scale=1.0, user-scalable=no` zurück im Viewport (native-App-Gefühl). Kehrt die WCAG-1.4.4-Entscheidung aus v2.17.0 bewusst um; `touch-action: manipulation` sperrt zusätzlich Doppeltipp-Zoom.
- **Such-Feld zoomt nicht mehr beim Antippen** — `.list-search` von 14px auf 16px; iOS Safari zoomt den Viewport nur bei Eingabefeldern unter 16px ein.
- **Doppelte Treffer in der Suche behoben** — ~29 Wörter (z. B. 遅い/osoi) stehen in `BASICS` und `VOCAB`; die Tabs Adjektive/Ausdrücke führten beide Listen ungefiltert zusammen. Zusammengeführte Liste wird jetzt nach Wort+Lesung dedupliziert.
- **Kanji-Schrift erscheint sofort** — Schriften (`fonts.googleapis.com`/`gstatic.com`) werden im Service Worker cache-first gespeichert; `display=swap` → `display=optional` entfernt das sichtbare Umschalten 0,5s nach dem Rendern.

### Geändert

- **Home-Screen passt auf einen Bildschirm** — Fuji-Banner, Tagesaktion und Deck-Karten auf Mobilgeräten enger gesetzt, damit der Stack ohne Scrollen auf hohe Telefone passt.

---

## [2.17.0] — 2026-06-01

### Hinzugefügt

- **Feste untere Navigation** — eine persistente Tab-Leiste (Lernen · Liste · Grammatik) ersetzt die beiden Emoji-Buttons auf dem Home-Screen. Liste und „Grammatik verstehen" sind jetzt von überall in einem Tippen erreichbar, statt erst zum Home-Screen zurückzukehren. Leiste blendet sich während einer Lern-Session und auf dem Abschluss-Screen aus.
- **Tagesaktion auf dem Home-Screen** — eine hervorgehobene „Heute fällig: N Karten → Lernen starten"-Kachel über dem Deck-Raster macht die primäre Aktion unübersehbar; bei 0 fälligen Karten zeigt sie einen ruhigen „Für heute geschafft"-Zustand.

### Geändert

- **Modernes Farbsystem** — von Beinahe-Schwarz + Antik-Gold auf ein wärmeres Dunkel mit hellerem Bernstein-/Safran-Akzent umgestellt. Alle Neutraltöne in OKLCH, leicht zum Akzent-Farbton getönt. `--text-muted`/`--text-dim` aufgehellt, damit kleine Labels 4.5:1 Kontrast erreichen.
- **Deck-Farben harmonisiert** — jedes Deck trägt einen Farbton (`--deck-h`); Tönung, Zeichen und Badge leiten sich bei fester Helligkeit/Sättigung daraus ab, statt aus handgewählten Hex-Werten, die mit der warmen Basis kollidierten.
- **Schrift sortiert** — Mincho-Serife jetzt nur noch für Japanisch; deutscher/lateinischer Text (Kartenvorderseite, Labels, Buttons) nutzt durchgängig die UI-Sans (Outfit). Liest moderner und besser.
- **Home-Screen entrümpelt** — Versionsnummer aus der Kopfzeile in die Fußzeile verschoben.
- Kartendreh-Animation 0.55s → 0.32s.
- Bewertungs- und Multiple-Choice-Farben auf `--btn-*`-Tokens umgestellt (`color-mix`), folgen jetzt der Palette.

### Behoben

- **Pinch-Zoom wieder aktiviert** — `maximum-scale`/`user-scalable=no` (v2.16.0) entfernt. Sehbehinderte Nutzer können wieder zoomen (WCAG 1.4.4); `touch-action: manipulation` verhindert weiterhin Doppeltipp-Zoom.
- **Fünf farbige Seitenstreifen entfernt** — Deck-Kacheln, Dialog-Zeilen, Konzept-Beispiele sowie Verwendungs-/Stolperfallen-Boxen nutzen jetzt volle Hintergrund-Tönung statt eines `border-left`-Akzents.

### Geändert (intern)

- Service-Worker-Cache `n5-v38` → `n5-v39`.

---

## [2.16.1] — 2026-05-31

### Behoben

- **Statusleiste lag auf dem Fuji-Banner** — durch `viewport-fit=cover` (v2.16.0) reichte der Inhalt unter die Notch, aber es fehlte der obere Sicherheitsabstand. `env(safe-area-inset-top)` zu allen oberen Paddings ergänzt (Home, Session-Topbar, Listen-/Konzept-Header). Uhr/Akku stehen jetzt auf dunklem Grund über dem Banner.
- Service-Worker-Cache `n5-v37` → `n5-v38`.

---

## [2.16.0] — 2026-05-31

### Geändert

- **App-Zoom gesperrt für natives App-Gefühl** — Pinch- und Doppeltipp-Zoom sind in der installierten PWA deaktiviert (`user-scalable=no`, `touch-action: manipulation`); kein Rubber-Band-/Pull-to-Refresh-Scrollen mehr (`overscroll-behavior: none`); iOS bläht Text nicht mehr auf (`-webkit-text-size-adjust`). OS-Zoom (iOS/Android Bedienungshilfen) bleibt nutzbar.
- `viewport-fit=cover` ergänzt — die bereits genutzten `env(safe-area-inset-*)`-Abstände (Notch/Home-Indikator) wirken jetzt tatsächlich.
- Service-Worker-Cache `n5-v36` → `n5-v37`.

---

## [2.15.0] — 2026-05-31

### Hinzugefügt

- **Romaji-Suche** — Lesungen lassen sich jetzt lateinisch suchen: „mizu" findet 水, „neko" findet 猫, „gakkou" findet 学校. Romaji wird zur Suchzeit aus den Kana erzeugt (kein Datenstruktur-Change), Hepburn ↔ Kunrei-Varianten matchen beide (z.B. „shashin" und „syasin").
- **Kanji über ihre Lesungen suchbar** — die Suche durchsucht jetzt auch die On-/Kun-Lesungen der Kanji (Kana und Romaji). Vorher waren Kanji nur über das Zeichen selbst oder die deutsche Bedeutung findbar.

### Geändert

- Service-Worker-Cache `n5-v35` → `n5-v36`.

---

## [2.14.0] — 2026-05-31

### Geändert

- **Liste-Tab „Grammatik" entfernt** — die Liste ist jetzt reines Wörterbuch (Kanji + Wörter). Klareres mentales Modell: „Grammatik verstehen" ist die einzige Grammatik-Heimat.
- **Grammatik-Suche zeigt jetzt Konzepte** — die Liste-Suche durchsucht zusätzlich die Konzepte (Titel, Lesung, Zusammenfassung, Verwendung); ein Treffer trägt das Badge **Konzept** und öffnet den Vollbild-Konzept-Detail statt einer aufklappbaren Zeile. Grammatik bleibt so auffindbar — mit voller Erklärung statt Roh-Muster.
- `data/grammar.js` unverändert — weiterhin Quelle für das Grammatik-SRS-Deck.
- Service-Worker-Cache `n5-v34` → `n5-v35`.

---

## [2.13.0] — 2026-05-31

### Hinzugefügt

- **Vollständige Grammatik-Abdeckung** — die Sektion „Grammatik verstehen" erklärt jetzt alle 46 Grammatik-Themen des SRS-Decks. Konzepte von 33 → 43 erweitert.
- **10 neue Konzepte:** `c-kopula`, `c-ka-frage` (neue Kategorie **Grundlagen**, am Listenanfang); `c-ya-nado`, `c-ga-kedo`, `c-dake` (Partikel); `c-ni-purpose`, `c-reihenfolge`, `c-wo-kudasai`, `c-dou-desuka` (Schlüsselmuster); `c-goro-gurai` (Sonstiges).
- **Neue Kategorie „Grundlagen"** — Kopula です und Ja/Nein-Frage か zuerst (Anfänger-Lernpfad). Kategorie-Reihenfolge: Grundlagen → Verbformen → Adjektive → Partikel → Schlüsselmuster → Sonstiges.

### Geändert

- `c-kono-sono-ano` um Orts-Demonstrativa ここ/そこ/あそこ/どこ erweitert (Zusammenfassung, Tabelle, Beispiel).
- `c-yori` von reinem Vergleich zu Vergleich + Präferenz (の方が) + Superlativ (の中で一番), umbenannt, mit Übersichtstabelle.
- Service-Worker-Cache `n5-v33` → `n5-v34`.

---

## [2.12.0] — 2026-05-31

### Hinzugefügt

- **Zweistufige Konzepte-Navigation** — die Konzepte-Sektion zeigt jetzt eine flache Titelliste (gruppiert nach Kategorie); ein Antippen öffnet das Konzept als eigenen Vollbild-Screen statt einer aufklappbaren Zeile.
- Neuer Block **„Wann benutzt man das?"** (🟢) pro Konzept — Alltagskontext ohne Fachjargon.
- Neuer Block **„Häufiger Fehler"** (🔴) pro Konzept — je ein typischer N5-Fehler. Beide Blöcke sind für alle 33 Konzepte gefüllt.

### Geändert

- Größere Erklärungstexte auf dem Handy (≤480px) über alle Listen-Screens hinweg (gemeinsame `.list-detail-*`).
- Listen-Header bleiben beim Scrollen oben fixiert (sticky).
- Service-Worker-Cache `n5-v32` → `n5-v33`.

---

## [2.11.0] — 2026-05-31

### Hinzugefügt

- **Neue Sektion „Grammatik verstehen" (Konzepte)** — eine reine Nachschlage-Sektion für 33 N5-Grammatikkonzepte in 5 Kategorien (Verbformen, Adjektive, Partikel, Schlüsselmuster, Sonstiges). Kein SRS, kein Quiz.
- Jedes Konzept ist eine aufklappbare Zeile mit kurzer deutscher Zusammenfassung, Bildungsregeln, einer Mini-Konjugationstabelle (wo sinnvoll) und 2–3 Beispielsätzen mit Aussprache (🔊).
- Erreichbar über den neuen Home-Button **„📖 Grammatik verstehen"**.
- Neue Datendatei `data/concepts.js` (`const CONCEPTS`).

### Geändert

- Service-Worker-Cache `n5-v31` → `n5-v32`.

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
