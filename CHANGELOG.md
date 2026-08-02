# Changelog — N5 Japanisch Lern-App

## [Unreleased]

---

## [3.27.0] — 2026-08-02

### Neu

- **Eine falsch beantwortete Karte kommt jetzt als Lückensatz zurück statt als dieselbe Karte.** Bisher war die Wiedervorlage innerhalb der Runde identisch zur ersten Begegnung — die Lösung lag noch im Kurzzeitgedächtnis, der Abruf kostete nichts, und am nächsten Tag war das Wort wieder weg. Jetzt fehlt das Wort in seinem eigenen Beispielsatz und die deutsche Übersetzung steht als Hinweis darunter: 「毎日新聞を＿。」 „Ich lese jeden Tag Zeitung." Man muss das Wort produzieren statt es wiederzuerkennen, und lernt es im Satzmuster statt isoliert. Gilt für Vokabel- und Kanji-Karten im Karteikarten-Modus; wo sich kein sauberer Lückensatz bauen lässt, erscheint wie bisher die normale Karte. Die Rückseite zeigt zusätzlich die Beispielsätze aufgeklappt.

---

## [3.26.0] — 2026-07-30

### Neu

- **Verben lassen sich jetzt auch in der ます-Form lernen.** Im Start-Dialog des Verben-Decks steht neben Modus und Richtung ein neuer Toggle „Form: Wörterbuch | ます-Form". In der ます-Form erscheinen Karteikarten und Multiple Choice mit 食べます statt 食べる — inklusive Audio und, in DE→JP, mit ます-Formen als Antwortoptionen. Die Rückseite nennt weiterhin die Wörterbuchform und die vollständige Formentabelle. ます-Karten haben einen eigenen Wiederholungs-Fortschritt: 食べます wird unabhängig von 食べる abgefragt.

### Behoben

- **Zurück-Pfeil saß auf Android sichtbar zu tief im runden Button.** Der Pfeil war das Textzeichen `←`; Outfit hat den Glyph nicht, also sprang Android auf einen Fallback-Font mit anderen vertikalen Metriken — Flex-Zentrierung zentriert die Zeilenbox, nicht den Glyph. Alle vier Back-Buttons nutzen jetzt ein Inline-SVG, das pixelgenau zentriert und fontunabhängig ist.

---

## [3.25.6] — 2026-07-21

### Behoben

- **Auf iOS kam bei Wörtern kein Ton mehr, während Beispielsätze normal sprachen.** Seit 3.25.4 laufen Clips über Web Audio statt über ein `<audio>`-Element. iOS legt eine Seite, die nur Web Audio nutzt, in die Audio-Session-Kategorie *ambient* — und die schaltet der Klingel-/Stumm-Schalter am Gerät stumm. `speechSynthesis` läuft über eine eigene Session und blieb deshalb hörbar. Beim ersten Tap läuft jetzt eine stumme `assets/silence.wav` in Schleife, was die Seite in die Kategorie *playback* hebt (genau das tat die alte `<audio>`-Wiedergabe implizit); nach Rückkehr aus dem Hintergrund wird die Schleife wieder gestartet. Nur auf iOS aktiv.

---

## [3.25.5] — 2026-07-19

### Behoben

- **Zurück-Pfeil ging unter — Android-Nutzer trafen aus Reflex den Hardware-Back-Button und schlossen die ganze App.** Der bloße graue `←`-Glyph (`--text-muted`, kein Hintergrund) las sich nicht als Button. `.back-btn` und `.list-back-btn` sind jetzt runde 40px-Chips (surface-Hintergrund, Rand, voll-Kontrast-Pfeil) — klar als tippbares Element erkennbar.
- **Grammatik-Liste sprang beim Zurückgehen aus einem Konzept-Detail nach ganz oben.** Der Back-Button baute die Liste neu auf und verlor die Scroll-Position. Position wird jetzt beim Öffnen gemerkt und beim Zurückgehen wiederhergestellt (Bottom-Nav-Tap öffnet die Liste weiterhin frisch oben). Scroller ist das window, nicht `.list-content`.

---

## [3.25.4] — 2026-07-15

### Behoben

- **Clips starteten trotz Cache und Trim spürbar später als die frühere Live-TTS.** Ursache: `new Audio()` pro Play — der HTMLAudioElement-Pipeline-Start (Service-Worker-Roundtrip + MP3-Decode + Element-Startup) kostet auf Android 100–300ms. Wiedergabe läuft jetzt über Web Audio: Clips werden beim Session-Start fertig dekodiert in AudioBuffers gehalten, Play ist ein BufferSource-Start in <10ms; zusätzlich werden 60ms des Stille-Polsters übersprungen (das nur HTMLAudio-Startschlucken abfedern sollte).

---

## [3.25.3] — 2026-07-15

### Behoben

- **医→い klang wie „ik"**: edge-tts hängt an das nackte い deterministisch ein Klick-Artefakt an (steckte seit v3.25.0 im Clip, Regenerieren ändert nichts). Fix: Aussprache-Override い→「い。」 in `tools/generate-audio.py` (Map-Key und Dateiname bleiben い), Clip regeneriert — sauberer Einzelvokal. Scan aller 2166 Clips: kein weiterer Einzelvokal mit diesem Artefakt (übrige Doppel-Burst-Treffer sind natürliche Verschlusslaute wie った/えき).

---

## [3.25.2] — 2026-07-15

### Behoben

- **Kurze Clips klangen nach dem Trim abgehackt** (z. B. 医→い): 50ms Randpolster war zu knapp — leise Vokal-Anläute liegen nahe der -40dB-Schwelle, und Androids Audio-Pfad schluckt die ersten/letzten Millisekunden. Alle Clips von den Originalen neu getrimmt mit 100ms Polster vorn / 250ms hinten (kein doppeltes Re-Encode).

---

## [3.25.1] — 2026-07-15

### Behoben

- **Audio-Clips starteten hörbar verzögert.** Zwei Ursachen: edge-tts padded jede MP3 mit ~230ms Stille am Anfang (und ~1s am Ende), und der erste Abruf eines Clips wartete auf die Netzwerk-Runde. Alle 2166 Clips sind jetzt auf 50ms Randstille getrimmt (27MB → 15MB) und die Clips einer Runde werden beim Session-Start vorgeladen, sodass der Service Worker sie schon gecached hat, wenn die Karte erscheint.

### Dev

- `tools/generate-audio.py` trimmt neue Clips nach der Synthese automatisch (braucht ffmpeg auf dem PATH).

---

## [3.25.0] — 2026-07-14

### Neu

- **Vorab generierte Aussprache-Clips** (2166 MP3s, edge-tts ja-JP-NanamiNeural) für alle Kanji-Lesungen, Vokabeln, Basics und Konjugationsformen. `speakJapanese` spielt bei Treffer die Datei statt Live-TTS; Beispielsätze/Dialoge bleiben Live-TTS. Clips werden nicht precached, sondern beim ersten Abspielen einzeln geladen (~10 KB) und dann offline gecached.

### Behoben

- Android sprach für manche kurzen Lesungen ein falsches Wort (八→„のむ", 駅→„うる"): Die Android-TTS-Schicht (Chrome-Bridge, engine-unabhängig — Samsung wie Google TTS) spielt für kollidierende kurze Kana-Strings das gecachte Audio eines anderen Worts. Kein App-seitiger Utterance-Trick behebt das (Rate-Jitter, Suffix, Flush, Double-Speak — alles getestet und widerlegt, siehe ANDROID-TTS-FINDINGS.md); daher umgehen Wort-Level-Texte die Live-TTS jetzt komplett.

### Dev

- `?ttsfile=0` erzwingt Live-TTS (A/B am Gerät). Dev-Panel: `spk`-Buttons für den Datei-Pfad, `SEQ`/`SEQ2`-Kollisionstests, Cache-Buster-Proben, rawSpeak mit rate/pitch.
- `tools/export-speak-texts.cjs` + `tools/generate-audio.py` regenerieren Clips inkrementell (braucht `pip install edge-tts`).

---

## [3.24.5] — 2026-07-14

### Behoben

- レアな (v973): Bedeutung „selten / medium (Fleisch)" war falsch — レア = englisch „rare" = **blutig/englisch**, nicht medium. Bedeutung und Beispielsatz-Übersetzung korrigiert.
- Audio auf Android: Beim Kartenwechsel konnte die Aussprache der vorigen Karte in die neue durchsickern (八 gezeigt, 飲→のむ gehört) — auch bei manuellem 🔊-Tap. Ursache: `cancelSpeech()` rief `cancel()` vor `resume()`; eine pausiert hängengebliebene Utterance wird von `cancel()` nicht verworfen, `resume()` spielt sie danach ab. Reihenfolge getauscht: erst `resume()`, dann `cancel()`.

### Dev

- Dev-Harness: `?dev=k050,k008` (oder `?dev=飲,八`) startet direkt eine geordnete Kanji-MC-Session mit genau diesen Karten. Reihenfolge bleibt erhalten — zum gezielten Reproduzieren der Android-TTS-Durchsickerung auf dem Gerät.

---

## [3.24.4] — 2026-07-14

### Behoben

- Nach dem Scrollen einer Lösungskarte (Flashcard-Rückseite oder MC) startete die nächste Karte an derselben Scroll-Position statt oben. Ursache: `.card-front`/`.card-back` scrollen selbst (`overflow-y: auto`); beim Kartenwechsel wurde nur der Inhalt neu gesetzt, der `scrollTop` aber nie zurückgesetzt. Neu: `scrollTop = 0` in `renderCard()` und `renderMCCard()`.

---

## [3.24.3] — 2026-07-13

### Behoben

- Android sprach weiterhin teils das vorige Wort statt der aktuellen Karte (駅 gezeigt, »uru« von 売る gehört) — der Fix aus 3.24.2 reichte nicht. Zwei Lücken: (1) Beim Weiterblättern (»Weiter«/Bewertung) wurde die Sprachausgabe nie abgebrochen; auf Android startet die TTS-Engine oft erst nach 0,5–2 s, sodass das alte Wort erst auf der nächsten Karte hörbar wurde. (2) Die seit 3.24.2 um 60 ms verzögerte Ausgabe hing in einem Timer, den `speechSynthesis.cancel()` nicht erreicht — sie spielte trotz Abbruch. Neu: zentrales `cancelSpeech()` räumt Timer und Warteschlange gemeinsam ab und läuft bei jedem Kartenwechsel. Zusätzlich `resume()` nach jedem `cancel()`: Androids TTS-Engine kann in einem Pausen-Zustand festhängen, in dem `cancel()` alte Einträge nicht entfernt — die spielten dann später sogar beim manuellen 🔊-Tap der nächsten Karte.

---

## [3.24.2] — 2026-07-12

### Behoben

- Audio sprach beim Aufdecken teils das vorige Wort statt der aktuellen Karte (z.B. Karte 駅 zeigte »eki«, gesprochen wurde »uru« von der Karte 売る davor). Ursache: Chrome verwirft eine Sprachausgabe, die im selben Tick wie `cancel()` gestartet wird — die alte Ausgabe lief weiter. Neu: `speak()` startet erst nach dem Tick, und es wird gezielt eine japanische Stimme gewählt, damit keine nicht-japanische Standardstimme die Kana verfälscht.
- Zwei Beispielsätze hatten die Partikel は (Thema) in der Lesung fälschlich als の transkribiert (母は… → ははの… statt ははは…) bei いけばな und 出かける. Korrigiert. Betraf nur die angezeigte Lesung, nicht die Sprachausgabe.

---

## [3.24.1] — 2026-07-11

### Behoben

- Runden wiederholten von etwa der Hälfte an die gleichen Karten wie die vorige Runde. Ursache: die Auffüll-Logik zog noch-nicht-fällige Reviews nach vorn und nahm dabei auch Karten, die in derselben Sitzung schon drankamen. Karten mit `seen == heute` werden jetzt beim Vorziehen übersprungen.
- Gewählte Rundengröße wurde nicht erreicht (z.B. 30 gewählt, nur 20 gezeigt). Bei frischen Decks blieb die Runde am Limit für neue Karten (`NEW_PER_ROUND`) hängen. Neu: reichen fällige Karten und Reviews nicht, füllt die Runde als letzten Schritt mit weiteren neuen Karten auf die gewählte Größe auf. Das Kartenlimit greift weiter, solange Reviews die Lücke füllen (kein Überladen mit neuem Stoff bei bestehendem Rückstand). Leere Runde bleibt leer (»für heute durch«).
- »Trotzdem üben« (Cram-Runde nach »für heute durch«) schreibt jetzt nichts mehr ins Spaced-Repetition-Schema. Vorher verschob jede Wiederholung noch-nicht-fälliger Karten deren Fälligkeitsdatum und untergrub so das Timing. Cram-Runden sind jetzt reines Üben ohne Schema-Änderung — endloses Lernen pro Tag ohne SRS-Schaden.

---

## [3.24.0] — 2026-07-11

### Behoben

- Großer Duplikat-Abbau nach vollständigem Bestands-Review (Skript-Scan + Opus-Verifikation): 59 redundante Karten entfernt — 37 exakte vocab↔basics-Dubletten (大きい, とても, まだ, でも …), 14 な-Form-Dubletten von na-Adjektiven (きれいな neben きれい usw.), 8 Kana-/に-Schreibvarianten (ときどき, ほんとうに, すぐに …). VOCAB 1040 → 1024, BASICS 56 → 13. Decks enthalten jedes Wort jetzt nur noch einmal; im Multiple Choice kann dasselbe Wort nicht mehr doppelt als Option erscheinen.
- 11 Bedeutungs-Kollisionen differenziert (verschiedene Wörter mit identischem deutschen meaning-Text in derselben Wortart, z.B. 牛乳/ミルク, 台所/キッチン, しかし/でも) — vermeidet ambige MC-Antworten in Richtung JP→DE.
- Datenkorrekturen: 優しい bedeutet nicht mehr fälschlich „einfach" (Verwechslung mit 易しい); もう führt „nicht mehr (mit Verneinung)" statt irreführendem „bald"; Wortart präzisiert bei しかし/でも (Konjunktion) und だけ (Partikel).

---

## [3.23.0] — 2026-07-11

### Hinzugefügt

- 32 neue N5-Adverbien (v1010–v1044, z.B. はっきり, ちゃんと, できるだけ, 必ず, 一生懸命, どんどん) mit je zwei Beispielsätzen — Adverbien-Deck wächst von 65 auf 97 Karten.

### Geändert

- UI-Umbenennung: „Decks" heißt jetzt überall „Lernkarten" (Home-Überschrift, Zurück-Buttons, aria-label).

### Behoben

- Multiple-Choice-Antwortoptionen stammen jetzt aus derselben Wortart wie das abgefragte Wort — im Adverbien-Quiz erscheinen keine Nomen mehr als Distraktoren (gilt für alle Vokabel-Decks).

---

## [3.22.0] — 2026-07-11

### Hinzugefügt

- Neues Deck **Adverbien** auf dem Home-Screen (Icon 副). Wörter mit reiner Wortart „Adverb" bilden jetzt ein eigenes Deck; „na-Adjektiv/Adverb" bleibt bei Adjektive, „Nomen/Adverb" bei Nomen.

### Geändert

- Home-Deck-Raster neu geordnet und vereinheitlicht: 4 Reihen zu je zwei gleich großen Karten (Kanji · Nomen / Verben · Adjektive / Adverbien · Grammatik / Sonstiges · Zufall). „Zufall" ist jetzt eine normale halbbreite Karte statt einer Karte über die volle Breite.

### Behoben

- ちがう (basics): Bedeutung und Wortart korrigiert („sich unterscheiden / anders sein / falsch sein", Verb (Godan, う)).
- Doppelten Vokabeleintrag zusammengeführt: いろいろな entfernt, 色々 (いろいろ) bleibt und erhält ein zusätzliches Beispiel.

---

## [3.21.0] — 2026-07-07

### Geändert

- Runden füllen sich jetzt bis zur gewählten Anzahl: Wenn fällige Karten + neue Karten (weiterhin max. 10 neue pro Runde) die Rundengröße nicht erreichen, werden die als Nächstes fälligen Karten vorgezogen. Vorher lieferte „30" z.B. nur 25 Karten. Ohne fällige und ohne neue Karten bleibt die Runde leer („für heute fertig").
- Konjugations-Karten fragen jetzt eindeutig: „Bilde: Verneinung" statt „Verneinung?" (galt für alle Formen: Vergangenheit, て-Form, Adverb, …).
- Kanji-Audio spricht nie mehr ein Wort aus zwei Kanji: 場 → ば (statt ばしょ), 病 → びょう (statt びょうき), 写 → うつす (statt しゃしん), 映 → うつる (statt えいが), 菜 → さい (statt やさい). Zitierformen mit Okurigana (考える, 多い) bleiben.

### Behoben

- iOS: Nach Querformat + Scrollen + Drehen zurück ins Hochformat zeigte die Tab-Leiste nur noch „Lernen" — die per backdrop-filter gerenderte Leiste blieb als abgeschnittener Landscape-Schnappschuss stehen. Nach der Rotation wird die Leiste jetzt neu aufgebaut.

---

## [3.20.0] — 2026-07-07

### Hinzugefügt

- **Kanji des Tages** auf dem Home-Screen: deterministische Tagesauswahl (voller Durchlauf aller Kanji, neues Kanji um Mitternacht). Antippen öffnet das Listen-Detail mit Lesungen, Wörtern und Sätzen; 🔊-Button liest die Lesung vor.
- Audio-Schalter in der Session-Topbar (🔊/🔇): schaltet das automatische Vorlesen beim Umdrehen ab, Einstellung bleibt gespeichert. Manuelle 🔊-Buttons sprechen weiterhin.

### Geändert

- Splash-Screen blockiert nicht mehr fix 1 Sekunde: bei schnellem Start (warmer PWA-Reload) entfällt er komplett, bei echtem Kaltstart deckt er nur die tatsächliche Ladezeit ab.
- App-Update per Service Worker lädt nur noch auf dem Home-Screen neu — eine laufende Session wird nie mehr durch ein Update unterbrochen (Reload folgt beim nächsten Home-Besuch).
- Tastatur-Hinweis in der Session zeigt jetzt modusabhängige Kürzel (Multiple Choice: 1–4 = Antwort wählen).
- Suchfeld-Placeholder weist auf die Romaji-Suche hin.
- Romaji-Suche matcht nur noch am Wortanfang: „yon" trifft 四, nicht mehr 去年 (k-**yon**-en). Kana-, Kanji- und Deutsch-Suche bleiben Substring-Suche.
- Home auf Mobile kompakter (Banner 16/7 statt 16/9, engere Abstände), damit der Screen mit Kanji des Tages scrollfrei bleibt.
- Grammatik-Konzept Kopula: förmliche Verneinungen ではありません / ではありませんでした ergänzt (Kursstandard), „Kopula:"-Präfix aus dem Titel entfernt.

### Behoben

- Liste: Nach dem Öffnen über Kanji des Tages starteten Suchergebnisse und Tab-Wechsel nicht mehr oben, sondern auf der alten Scroll-Position — erste Treffer lagen unsichtbar über dem Fold.
- Liste: Öffnen über Kanji des Tages verschob den Such-Header leicht nach unten (Scroll traf Window statt nur die Liste).

### Barrierefreiheit

- Multiple-Choice-Ergebnis (Richtig/Falsch) wird per `aria-live` an Screenreader gemeldet (keine sichtbare Änderung).

---

## [3.19.0] — 2026-07-05

### Hinzugefügt

- Verben und Adjektive in der Liste jetzt auch über ihre konjugierten Formen suchbar (ます/て/た/ない …), in Kanji, Kana und Romaji — „ikimasu", „行きます" und „いきます" finden alle 行く.
- Neue Vokabeln: 陶芸 (Töpferei), 陶芸家 (Töpfer/Keramiker), バツ (Kreuz ✕), 丸 (Kreis ○).
- Vokabel-Detail in der Liste zeigt jetzt alle Beispielsätze (vorher nur den ersten).

### Geändert

- App-Name (Homescreen/Installation) von „ビジさん" zu „ビジーさん" (langer Vokal ー).
- 焼き物 um zweite Bedeutung „Gegrilltes" ergänzt (zusätzlich zu „Keramik").

### Behoben

- Liste: Beim Tippen mit offener Tastatur und anschließendem Scrollen verschwand die Kopfzeile „Liste" hinter dem Geräte-Notch. Scrollen ist jetzt auf die Liste selbst begrenzt, die Kopfzeile bleibt stehen.

---

## [3.18.0] — 2026-07-04

### Hinzugefügt

- **594 neue Vokabeln** aus zwei gedruckten JP→DE-Glossaren eingelesen (OCR) und eingeordnet — App wächst von 411 auf 1005 Einträge. Jeder Eintrag mit Reading, Wortart und zwei Beispielsätzen (JP / Kana / DE), passend zu den bestehenden Kategorien.
- Bürojargon (会議, 社長, 出張, 貿易, 大臣 …) und Kultur-Vokabeln (焼き物 Töpferwaren, 歌舞伎, いけばな, お花見) bewusst mit aufgenommen.

### Gefiltert (nicht aufgenommen)

- Eigennamen, Orts- und Personennamen (あおやま, たなか, いとう …), die meisten Ländernamen sowie sehr seltene/veraltete Begriffe (テープレコーダー, ごぶさた, こうかんしゅ …) und reine Zahlwörter/Zähler/Datumswörter.

## [3.17.0] — 2026-07-04

### Geändert

- **Konzepte-Screen** ("Grammatik verstehen") überarbeitet: japanisches Konzept in Zeile 1, kurze deutsche Bedeutung als eigene kleine Zeile darunter (vorher inline). Einheitliches zweizeiliges Layout für alle Karten.
- Konzepte nun **funktional gruppiert** in 10 Abschnitte nach Sprechabsicht (Grundlagen, Partikel, Adjektive & Adverbien, Verbformen & Zeiten, Bitten/Vorschläge/Ratschläge, Wünsche/Absichten/Entscheidungen, Vergleiche & Grad, Gründe & Verbindungen, Geben/Erfahrung/Veränderung, Zeit/Menge/Bewegung) statt der bisherigen grammatiktyp-Töpfe.

### Behoben

- Die 17 neuen Konzepte (v3.16.0) zeigten Deutsch in großer Schrift im Titel und eine redundante Hiragana-Zeile. Titel jetzt nur Japanisch, Untertitel = kurze deutsche Bedeutung.

## [3.16.0] — 2026-07-04

### Neu

- **17 neue Grammatikmuster** (Lektion 4–6) mit vollem Umfang (Dialog, 8 Beispiele, Lückentext): 〜たほうがいいです (Ratschlag), 〜てきます, 〜たばかりです, まだ〜ていません, 〜たことがあります (Erfahrung), なかなか〜ません, だいぶ, Adjektiv→Adverb (〜く/〜に), あげます・もらいます・くれます, 〜くなります/〜になります, 〜にします, 〜し、〜し, 〜たり〜たりします, 〜くて/〜で, 〜方 (かた), 〜は〜が〜 (Merkmal), Verkehrsmittel (乗る/降りる, どうやって, どのくらい). GRAMMAR jetzt 63 Einträge.
- Dieselben 17 Muster zusätzlich als Referenz-Karten im **Konzepte**-Screen (CONCEPTS jetzt 60 Einträge).

---

## [3.15.0] — 2026-07-03

### Neu

- Eigener **Adverbien**-Tab im Listen-Modus. Adverbien (bisher im Adjektive-Tab) sind jetzt getrennt; dafür 22 gängige N5-Adverbien ergänzt (z. B. あまり, ちょっと, だいたい, すぐに, もっと, ずっと, 特に, さっき) — insgesamt ~37.
- Tab-Leiste zeigt jetzt einen weichen Farbverlauf am Rand, wenn weitere Kategorien seitlich weiterscrollen — Hinweis, dass die Leiste scrollbar ist. Aktiver Tab scrollt beim Antippen in den sichtbaren Bereich.

---

## [3.14.0] — 2026-07-03

### Geändert

- Listen-Tabs spiegeln jetzt die Übungs-Decks: statt „Wörter“ (Nomen + Verben gemischt) gibt es getrennte Tabs **Nomen** und **Verben**. Kategorisierung nutzt dieselbe `posCategory`-Logik wie die Decks.

### Behoben

- Adverbien (z. B. „manchmal“, „gar nicht“) lagen fälschlich als eigene Einträge im Adjektive-Tab ohne Kennzeichnung. Tab heißt jetzt ehrlich **Adjektive & Adverbien**; Adverbien werden bewusst dort einsortiert (zu wenige für eine eigene Kategorie).

---

## [3.13.2] — 2026-07-03

### Behoben

- Splash flackerte auf dem Gerät weiterhin nur kurz: die ab Seitenladen gemessene Mindestzeit fiel bei schnellen/PWA-Reload-Starts auf ~0 (verstrichene Zeit schon größer). Jetzt feste Haltezeit von 1000ms ab `init()`, damit das Icon zuverlässig sichtbar ist.

---

## [3.13.1] — 2026-07-03

### Geändert

- Splash beim Laden wirkte wie ein kurzes Flackern. Icon wird jetzt mindestens ~600ms gehalten (gemessen ab Seitenladen, verzögert also langsame Kaltstarts nicht zusätzlich) und blendet mit sanftem Scale/Fade ein und aus — liest sich als bewusster Moment, nicht als Bug.

---

## [3.13.0] — 2026-07-03

### Neu

- Splash beim Laden: App-Icon erscheint zentriert und blendet sanft aus, sobald die App bereit ist. Füllt nur die ohnehin leere Ladelücke — keine künstliche Verzögerung, Icon liegt bereits im Service-Worker-Cache.

### Geändert

- Abstand über der ersten Zeile („On'yomi" u. a.) in den ausklappbaren Listen-Details vergrößert (padding-top 0 → 10px), damit der Inhalt nicht mehr am Tap-Bereich klebt.
- Tab-Buttons (Listen-Tabs, Richtungs-Umschalter) auf 44px Mindesthöhe angehoben (Touch-Target-Standard).

### Behoben

- Suchfeld hatte kein Label für Screenreader (`aria-label="Suchen"` ergänzt).

---

## [3.12.5] — 2026-07-02

### Behoben

- Service Worker aktiviert neue Versionen jetzt sofort (`skipWaiting`), statt auf einen Tap zu warten. Uralt-Clients (z. B. eine alte Android-PWA) blieben sonst dauerhaft auf einer sehr alten Version hängen, weil ihr altes `app.js` den wartenden Worker nie aktivieren konnte. Updates kommen jetzt zuverlässig per Auto-Reload an.

### Entfernt

- „Neue Version verfügbar – Tippen zum Aktualisieren"-Toast (durch `skipWaiting` obsolet).

---

## [3.12.4] — 2026-07-01

### Geändert

- „↻ Wiederholung"-Badge tiefer gesetzt (top 4px → 20px), damit es nicht mehr an der Progress Bar klebt.

## [3.12.3] — 2026-07-01

### Geändert

- Deck „ビジさん Zufalls-Quiz" umbenannt in schlicht „Zufall".

## [3.12.2] — 2026-07-01

### Behoben

- Updates kamen auf iOS-PWAs oft nicht an. Der Service Worker holt die App-Shell (HTML/JS/CSS) jetzt mit `cache: 'no-store'`, sodass ein Kaltstart immer die frischeste Version aus dem Netz zieht statt der bis zu 600 s alten HTTP-Cache-Kopie. Zusätzlich wird der Worker mit `updateViaCache: 'none'` registriert, damit neue Versionen bei jedem Start erkannt werden. Lernfortschritt (SRS) liegt in localStorage und ist davon unberührt.

## [3.12.1] — 2026-07-01

### Behoben

- Im „Alles"-Deck war der Modus „Konjugation" wählbar, obwohl Kanji sich nicht konjugieren lassen — die Runde zeigte dann trotzdem Kanji-Karten. Konjugation ist für dieses Deck entfernt (nur noch Karteikarten & Multiple Choice).

### Geändert

- „Alles"-Deck heißt jetzt „ビジさん Zufalls-Quiz" (in der Session-Kopfzeile kurz „Zufalls-Quiz").

## [3.12.0] — 2026-07-01

### Neu

- Falsch beantwortete Karten fallen nicht mehr weg, sondern kommen innerhalb derselben Runde wieder (Flashcard & MC). Eine verpasste Karte wird 3–5 Karten später neu eingeschoben und muss einmal richtig beantwortet werden, um die Runde zu verlassen (spaced retrieval statt Wegfallen).
- Wiederkehrende Karten tragen einen dezenten „↻ Wiederholung"-Chip, damit klar ist, warum sie erneut erscheinen.
- Der Fortschrittsbalken zählt jetzt nur richtig beantwortete Karten. Ein Fehler bewegt den Balken nicht, bis die Karte zurückkommt und sitzt.

### Geändert

- SRS-Einordnung und Runden-Statistik richten sich weiterhin nach dem **ersten** Versuch pro Karte. Ein Requeue-Wiederholversuch zählt weder doppelt noch überschreibt er die Leitner-Box.

## [3.11.0] — 2026-07-01

### Behoben

- Grammatik-Karten (Flashcard & MC) zeigen jetzt die Lesung (Hiragana) unter dem Satz. Vorher standen Sätze mit Kanji ohne Furigana da und waren für Anfänger nicht lesbar. 179 Lückensätze mit Kanji haben eine Kana-Lesung erhalten.

## [3.10.0] — 2026-07-01

### Entfernt

- „Niveau"-Umschalter (Einfach/Fortgeschritten) aus dem Start-Modal entfernt. Vokabel-Runden nutzen jetzt immer den kompletten Wortschatz. „Fortgeschritten" war nur ein Superset von „Einfach" — die Trennung stiftete mehr Verwirrung als Nutzen.

## [3.9.1] — 2026-07-01

### Geändert

- Konjugations-Lösung zeigt jetzt auch die Bedeutung des Worts.
- Listen-Rubrik „Nomen & Verben" → „Wörter": kürzer (kein seitliches Scrollen) und ehrlicher — der Reiter enthält auch Wörter wie „heute", die weder Nomen noch Verb sind.

## [3.9.0] — 2026-07-01

### Geändert

- Neue Farbwelt: kühle Sumi-Tinte statt Erdbraun, ein Vermilion-Akzent (Torii-Rot). „Nochmal" jetzt Krapprot, damit es sich vom Akzent abhebt.
- Konjugations- und Grammatik-Rückseiten auf den gleichen Karten-Standard wie Kanji/Vokabel gebracht: Antwort in getöntem Kopfband, Konjugationsformen als Kachelraster statt gedrängter Tabelle.

### Behoben

- Verb-Multiple-Choice: leere Lücke nach dem Aufdecken entfernt — die Auflösung sitzt jetzt direkt unter der Karte.

## [3.8.3] — 2026-06-30

### Geändert

- Homescreen-Name jetzt „Go ビジさん!". Installationsname: „Go ビジさん! — N5 Japanisch".

## [3.8.2] — 2026-06-30

### Behoben

- Update-Toast erschien nie: Der neue Service Worker rief beim `install` sofort `skipWaiting()` auf und erreichte so nie den „waiting"-Zustand, auf den der Toast wartet. Entfernt — neue Versionen zeigen jetzt zuverlässig „Neue Version verfügbar – Tippen zum Aktualisieren".

### Geändert

- Homescreen-Name jetzt „ビジさん" (Biji in Katakana + さん als Hiragana). Installationsname: „ビジさん — N5 Japanisch".

## [3.8.1] — 2026-06-30

### Geändert

- Name unter dem Homescreen-Icon ist jetzt einheitlich „Bijisan" (vorher iOS „N5 日本語", Android „日本語 N5"). Installationsname: „Bijisan — N5 Japanisch".

## [3.8.0] — 2026-06-30

### Geändert

- Karteikarten-Modus zählt jetzt jede Karte genau einmal — wie der Multiple-Choice-Modus. „Wusste ich nicht" wird als Fehler gewertet und die Karte wird nicht mehr ans Rundenende gehängt. Der Fortschrittsbalken (X / Gesamt) bewegt sich dadurch bei jeder Antwort, auch bei Fehlern.
- Mehr Tiefe statt flacher Flächen: Deck-Karten haben jetzt sichtbare Farb-Identität (jedes Deck eine Farbe), eine Lichtkante oben und einen getönten Schatten — sie wirken wie greifbare Objekte. Die Lernkarte hebt sich mit Schatten und Lichtkante klar vom Hintergrund ab.
- Kartenrückseite (Kanji & Vokabeln) neu gestaltet: Zeichen und Bedeutung sitzen jetzt zusammen in einem hervorgehobenen Kopfbereich, On'yomi und Kun'yomi stehen als zwei Kacheln nebeneinander statt als gestapelte Formularzeilen.
- Bewertungs-Hinweis angepasst (Karte wird nicht mehr in derselben Runde wiederholt).
- Schriften (Noto Sans JP, Outfit, Shippori Mincho B1) werden jetzt lokal ausgeliefert, auf den Zeichensatz der App reduziert (~480 KB). Keine Anfrage mehr an Google Fonts — schnellerer Start und voll offline-fähig.

### Behoben

- `conjugate.js` fehlte im Service-Worker-Cache und wurde offline nicht geladen — jetzt mit aufgenommen.
- Kanji 二 (zwei): falsche On-Lesung `じ` entfernt — N5-konform nur noch `に`.
- Kanji 何 (was): On-/Kun-Lesungen waren identisch (`なに`/`なん` in beiden Feldern). On-Lesung jetzt korrekt `か`, Kun bleibt `なに`/`なん`.

## [3.7.1] — 2026-06-10

### Behoben

- iOS-PWA: schwarzer Streifen am unteren Rand (zweiter Anlauf). Mit black-translucent-Statusleiste berechnet iOS die Seitenhöhe um die Statusleistenhöhe zu kurz; `html` wird jetzt um `safe-area-inset-top` verlängert.
- Vokabel-Karten (Nomen, Verben, Adjektive, Sonstiges) in Richtung DE → JP zeigen die deutsche Bedeutung jetzt auch auf der Rückseite — wie zuvor schon die Kanji-Karten.

## [3.7.0] — 2026-06-10

Flüssigere Übergänge und Animationen in der ganzen App.

### Geändert

- Bildschirmwechsel blenden sanft ein statt hart umzuschalten.
- Multiple Choice: nach der Antwort färben sich erst die Buttons (richtige Antwort grün, falsche Wahl rot), die Karte dreht sich einen Moment später — bei Fehlern mit längerer Pause, damit die richtige Antwort hängen bleibt.
- Kartenflip langsamer und natürlicher (0,5 s mit Ease-out-Kurve), Bewertungsleiste gleitet nach dem Umdrehen ein.
- Listen-Details und Übungs-Dialog öffnen mit kurzer Einblendung, ✓/✗-Ergebnis ploppt dezent auf.
- Alle primären Buttons reagieren auf Antippen mit leichtem Eindrücken.
- `prefers-reduced-motion` wird weiterhin respektiert (Animationen aus).

## [3.6.0] — 2026-06-10

Klarere Schrift, größere Bedienelemente und zwei Fehlerbehebungen.

### Geändert

- Japanischer Text nutzt jetzt Noto Sans JP (klare Gothic-Schrift) statt der verschnörkelten Shippori Mincho — nur der 日本語-Banner behält die Serifenschrift.
- Größere, fettere Bedienelemente: MC-Antworten 17 px mit 56 px Touch-Zielen, Umdrehen-/Bewertungs-Buttons größer mit sichtbarem Rand, Listen-Japanisch 24 px, Labels auf Karten besser lesbar.
- Vokabelkarten zeigen die Wortart-Zeile nicht mehr — weniger Ballast auf der Rückseite.
- Kanji-Karten in Richtung DE → JP zeigen die deutsche Bedeutung jetzt auch auf der Rückseite (vorher verschwand sie mit dem Umdrehen).

### Behoben

- Session-Statistik zählte eine falsch beantwortete Karte doppelt: einmal als „Wusste ich nicht" und nach der Wiederholung nochmal als „Wusste ich" (z. B. 10 richtig / 1 falsch bei 10 Karten). Jetzt zählt nur die erste Bewertung pro Karte.
- iOS-PWA: schwarzer Streifen am unteren Bildschirmrand nach dem App-Start — Hintergrund deckt jetzt die gesamte Fläche.

## [3.5.1] — 2026-06-04

### Behoben

- Grammatik „〜より〜のほうが〜" (Präferenz): Muster, Erklärung und Beispiel widersprachen sich bei der Reihenfolge von のほうが und より. Muster und Struktur jetzt an das Beispiel (より zuerst, z. B. 肉より魚のほうが好きです) angeglichen, mit Hinweis dass die Reihenfolge flexibel ist.

## [3.5.0] — 2026-06-04

Multiple-Choice-Runden bewerten sich jetzt selbst — keine doppelte Eingabe mehr, falsche Karten blockieren die Runde nicht länger.

### Geändert

- Nach einer MC-Antwort entfällt die zusätzliche „Wusste ich / Wusste ich nicht"-Abfrage. Die Antwort selbst legt die SRS-Box fest (richtig = hoch, falsch = runter) und ein „Weiter"-Button geht zur nächsten Karte.
- Falsch beantwortete MC-Karten kommen in derselben Runde **nicht** mehr zurück. Jede Karte wird genau einmal gezeigt; die Wiederholungsfrequenz steuert nur das SRS für folgende Sessions.
- Fortschrittsbalken zählt in MC jede beantwortete Karte (richtig wie falsch), damit die Runde zuverlässig 100 % erreicht.
- Karteikarten-Modus (Selbstbewertung) bleibt unverändert.

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
