'use strict';

// N5 grammar concepts — read-only reference ("Konzepte" screen). Not part of SRS.
// Shape per concept:
//   id        unique string
//   category  group header on the list screen
//   title     concept name (shown on the row)
//   reading   optional kana/romaji subtitle for the title
//   summary   2–5 sentence plain-German wrap-up (required)
//   usage     optional plain-German "Wann benutzt man das?" — everyday context, no jargon
//   pitfall   optional plain-German "Häufiger Fehler" — one common N5 mistake
//   formation optional [{ from, to, note }] rule lines
//   table     optional { head: [..], rows: [[..], ..] } mini conjugation table
//   examples  [{ jp, reading, de }] — required, 1–3 entries (reading optional per line)
const CONCEPTS = [

  // ============ GRUNDLAGEN ============
  {
    id: "c-kopula",
    category: "Grundlagen",
    title: "Kopula: です / じゃない / でした",
    reading: "ist / ist nicht / war",
    summary: "です ist das Bindewort (Kopula), das „X ist Y“ ausdrückt und der Aussage Höflichkeit gibt. Verneint heißt es じゃないです (lockerer) oder ではありません (förmlicher), in der Vergangenheit でした (war) bzw. じゃなかったです (war nicht). です selbst hat keine eigene Bedeutung außer „sein“ und Höflichkeit.",
    usage: "In fast jedem höflichen Satz über ein Nomen oder ein な-Adjektiv („Das ist ein Stift“, „Ich bin Student“). Eines der allerersten Muster, das du brauchst.",
    table: {
      head: ["", "Form (学生)"],
      rows: [
        ["Gegenwart", "学生です"],
        ["Verneinung", "学生じゃないです"],
        ["Vergangenheit", "学生でした"],
        ["Verg. verneint", "学生じゃなかったです"],
      ],
    },
    pitfall: "です verneinst du als じゃないです / ではありません, nicht als „ですない“. Ein い-Adjektiv dagegen beugt sich selbst und braucht dafür kein です (高かった, nicht 高いでした).",
    examples: [
      { jp: "これはペンです。", reading: "これはペンです。", de: "Das ist ein Stift." },
      { jp: "昨日は月曜日でした。", reading: "きのうはげつようびでした。", de: "Gestern war Montag." },
      { jp: "私は学生じゃないです。", reading: "わたしはがくせいじゃないです。", de: "Ich bin kein Student." },
    ],
  },
  {
    id: "c-ka-frage",
    category: "Grundlagen",
    title: "〜か (Ja/Nein-Frage)",
    reading: "Fragepartikel",
    summary: "か am Satzende macht aus einer Aussage eine Frage — wie ein gesprochenes Fragezeichen. Die Wortstellung bleibt gleich, du hängst nur か an. Im Japanischen steht dahinter oft ein normaler Punkt (。) statt eines Fragezeichens.",
    usage: "Für jede höfliche Ja/Nein-Frage („Ist das ein Stift?“, „Sind Sie Student?“) und auch zusammen mit Fragewörtern (何ですか).",
    pitfall: "Die Satzstellung ändert sich nicht wie im Deutschen — du stellst nichts um, sondern hängst nur か an: 学生です → 学生ですか.",
    examples: [
      { jp: "これはペンですか。", reading: "これはペンですか。", de: "Ist das ein Stift?" },
      { jp: "田中さんは日本人ですか。", reading: "たなかさんはにほんじんですか。", de: "Ist Herr Tanaka Japaner?" },
    ],
  },

  // ============ VERBFORMEN ============
  {
    id: "c-verbgruppen",
    category: "Verbformen",
    title: "Verbgruppen",
    reading: "godan · ichidan · unregelmäßig",
    summary: "Jedes Verb gehört zu einer von drei Gruppen. Die Gruppe entscheidet, wie alle anderen Formen (て, た, ない …) gebildet werden. Ichidan-Verben enden auf -iru/-eru + る, godan auf alle übrigen -u-Laute, dazu die zwei Ausnahmen する und 来る.",
    usage: "Bevor du irgendein Verb beugst, musst du wissen, zu welcher Gruppe es gehört — sie entscheidet über jede weitere Form. So findest du die Gruppe in 3 Schritten: 1) Ist es する oder 来る? → unregelmäßig (Gruppe III). 2) Endet die Wörterbuchform auf -eru oder -iru + る (z. B. たべる, みる)? → meistens Ichidan (Gruppe II). 3) Alles andere — also jede andere Endung auf -u wie く, む, す, う, つ, ぐ, ぶ, ぬ und die meisten る nach a/u/o → Godan (Gruppe I). Lern die Gruppe gleich zu jedem neuen Verb mit.",
    formation: [
      { from: "する / 来る", to: "Gruppe III", note: "immer unregelmäßig" },
      { from: "-eru / -iru + る", to: "Gruppe II (Ichidan)", note: "たべる・みる・ねる" },
      { from: "andere -u-Endung", to: "Gruppe I (Godan)", note: "かく・のむ・はなす" },
    ],
    table: {
      head: ["Gruppe", "Beispiel", "Endung"],
      rows: [
        ["Godan (I)", "書く・飲む・話す", "-u"],
        ["Ichidan (II)", "食べる・見る", "-iru / -eru + る"],
        ["Unregelm. (III)", "する・来る", "—"],
      ],
    },
    pitfall: "Nicht jedes Verb auf る ist ichidan: 帰る, 入る, 走る enden zwar auf る, sind aber godan. Im Zweifel das Verb einzeln mitlernen.",
    examples: [
      { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Ich lerne jeden Tag Japanisch. (する-Verb, Gruppe III)" },
      { jp: "友だちが来ます。", reading: "ともだちがきます。", de: "Ein Freund kommt. (来る, Gruppe III)" },
      { jp: "毎朝パンを食べます。", reading: "まいあさパンをたべます。", de: "Jeden Morgen esse ich Brot. (食べる, Ichidan, Gruppe II)" },
      { jp: "手紙を書きます。", reading: "てがみをかきます。", de: "Ich schreibe einen Brief. (書く, Godan, Gruppe I)" },
    ],
  },
  {
    id: "c-masu-form",
    category: "Verbformen",
    title: "ます-Form",
    reading: "höfliche Form",
    summary: "Die höfliche Standardform für Gespräche mit Fremden, im Beruf und in der Schule. Alles dreht sich um den ます-Stamm: das ist der Wortteil vor ます (飲みます → Stamm 飲み). An diesen Stamm hängst du die Endungen: ます (Gegenwart), ません (Verneinung), ました (Vergangenheit), ませんでした (Vergangenheit verneint).",
    usage: "Die Standard-Höflichkeitsform: im Beruf, in der Schule, mit Fremden. Wer unsicher ist, liegt mit der ます-Form fast immer richtig. Schritt für Schritt: 1) Gruppe bestimmen. 2) Godan: letztes -u zu -i machen (飲む→飲み), Ichidan: る weglassen (食べる→食べ), する→し, 来る→き. 3) Endung anhängen (ます / ません / ました / ませんでした).",
    formation: [
      { from: "Godan", to: "-i + ます", note: "飲む→飲みます" },
      { from: "Ichidan", to: "る weg + ます", note: "食べる→食べます" },
      { from: "する / 来る", to: "します / 来ます", note: "Ausnahmen" },
    ],
    table: {
      head: ["", "Form"],
      rows: [
        ["Gegenwart", "飲みます"],
        ["Verneinung", "飲みません"],
        ["Vergangenheit", "飲みました"],
        ["Verg. verneint", "飲みませんでした"],
      ],
    },
    pitfall: "Die Verneinung ist ません (飲みません), NICHT ますない. ない gehört zur lockeren Form, nicht zur ます-Form.",
    examples: [
      { jp: "コーヒーを飲みます。", reading: "コーヒーをのみます。", de: "Ich trinke Kaffee. (Gegenwart)" },
      { jp: "肉を食べません。", reading: "にくをたべません。", de: "Ich esse kein Fleisch. (Verneinung)" },
      { jp: "昨日、映画を見ました。", reading: "きのう、えいがをみました。", de: "Gestern habe ich einen Film gesehen. (Vergangenheit)" },
      { jp: "朝ごはんを食べませんでした。", reading: "あさごはんをたべませんでした。", de: "Ich habe nicht gefrühstückt. (Vergangenheit verneint)" },
    ],
  },
  {
    id: "c-dictionary-form",
    category: "Verbformen",
    title: "Wörterbuchform",
    reading: "Grundform / plain",
    summary: "Die Grundform, die im Wörterbuch steht (endet immer auf -u: 飲む, 食べる, する). Sie ist die lockere Sprechform unter Freunden und die Basis für viele Konstruktionen wie 〜たい, 〜前に oder Relativsätze. Von ihr aus bestimmst du auch die Verbgruppe.",
    usage: "Unter Freunden und Familie sprichst du in der Wörterbuchform; außerdem brauchst du sie als Baustein für viele Muster. Du gewinnst sie aus der ます-Form zurück: bei Ichidan ます weg + る (食べます→食べる), bei Godan das -i des Stamms zum -u machen (飲み→飲む, 書き→書く). Vor Nomen und in Mustern wie 〜前に / 〜たい steht immer diese Form.",
    table: {
      head: ["höflich", "Wörterbuchform"],
      rows: [
        ["飲みます", "飲む"],
        ["食べます", "食べる"],
        ["します", "する"],
        ["来ます", "来る"],
      ],
    },
    pitfall: "Im höflichen Gespräch mit Fremden wirkt die reine Wörterbuchform schnell zu salopp — dort gehört die ます-Form hin.",
    examples: [
      { jp: "本を読む。", reading: "ほんをよむ。", de: "(Ich) lese ein Buch. (locker)" },
      { jp: "映画を見る前に食べます。", reading: "えいがをみるまえにたべます。", de: "Vor dem Film essen wir. (Baustein vor 前に)" },
      { jp: "日本に行きたい。", reading: "にほんにいきたい。", de: "Ich will nach Japan. (Baustein vor たい)" },
      { jp: "毎日走る。", reading: "まいにちはしる。", de: "Ich laufe jeden Tag. (locker)" },
    ],
  },
  {
    id: "c-te-form",
    category: "Verbformen",
    title: "て-Form",
    summary: "Eine der wichtigsten Formen überhaupt. Sie verbindet Sätze („und dann …“), bildet höfliche Bitten (てください), die Verlaufsform (ている) und Erlaubnis/Verbot. Selbst keine Zeitform — die Zeit steht am Satzende.",
    usage: "Immer wenn zwei Handlungen aneinanderhängen („aufstehen und Kaffee trinken“) oder ein Grammatikmuster die て-Form verlangt. Eine der häufigsten Formen im Alltag. Bildung Schritt für Schritt: Ichidan ist leicht — る weg + て (食べる→食べて). Bei Godan entscheidet der letzte Laut der Wörterbuchform über die Lautänderung (Onbin), siehe Bildung unten. する→して, 来る→来て (きて).",
    formation: [
      { from: "う・つ・る (Godan)", to: "って", note: "買う→買って" },
      { from: "む・ぶ・ぬ (Godan)", to: "んで", note: "飲む→飲んで" },
      { from: "く / ぐ (Godan)", to: "いて / いで", note: "書く→書いて, 泳ぐ→泳いで" },
      { from: "す (Godan)", to: "して", note: "話す→話して" },
      { from: "Ichidan", to: "る→て", note: "食べる→食べて" },
      { from: "する / 来る", to: "して / 来て", note: "Ausnahmen" },
    ],
    table: {
      head: ["Verb", "て-Form"],
      rows: [
        ["行く", "行って"],
        ["飲む", "飲んで"],
        ["食べる", "食べて"],
        ["する", "して"],
        ["来る", "来て"],
      ],
    },
    pitfall: "行く ist unregelmäßig: 行って, nicht 行いて — eine der wenigen Ausnahmen.",
    examples: [
      { jp: "待ってください。", reading: "まってください。", de: "Bitte warten Sie. (Bitte mit てください)" },
      { jp: "朝起きて、ご飯を食べます。", reading: "あさおきて、ごはんをたべます。", de: "Morgens stehe ich auf und esse. (zwei Handlungen)" },
      { jp: "今、本を読んでいます。", reading: "いま、ほんをよんでいます。", de: "Ich lese gerade ein Buch. (Verlaufsform ている)" },
      { jp: "手を洗って、食べます。", reading: "てをあらって、たべます。", de: "Ich wasche die Hände und esse dann." },
    ],
  },
  {
    id: "c-ta-form",
    category: "Verbformen",
    title: "た-Form",
    reading: "einfache Vergangenheit",
    summary: "Die lockere Vergangenheit (= ました ohne Höflichkeit). Die Bildung ist identisch zur て-Form, nur mit た/だ statt て/で. Auch Basis für 〜たり und 〜たことがある.",
    usage: "Die lockere Vergangenheit unter Freunden — und der Baustein, wenn du Erfahrungen (〜たことがある) oder Beispielreihen (〜たり) ausdrücken willst. Trick: Bilde zuerst die て-Form, dann tausche て→た und で→だ. Wer 飲んで sagen kann, sagt 飲んだ; wer 書いて kann, sagt 書いた.",
    formation: [
      { from: "う・つ・る", to: "った", note: "買う→買った" },
      { from: "む・ぶ・ぬ", to: "んだ", note: "飲む→飲んだ" },
      { from: "く / ぐ", to: "いた / いだ", note: "書く→書いた" },
      { from: "Ichidan", to: "る→た", note: "食べる→食べた" },
    ],
    table: {
      head: ["Verb", "た-Form"],
      rows: [
        ["行く", "行った"],
        ["飲む", "飲んだ"],
        ["食べる", "食べた"],
        ["する", "した"],
      ],
    },
    pitfall: "Die Bildung folgt exakt der て-Form: wer 飲んで kann, sagt 飲んだ — nicht 飲みた.",
    examples: [
      { jp: "昨日映画を見た。", reading: "きのうえいがをみた。", de: "Gestern habe ich einen Film gesehen. (Ichidan)" },
      { jp: "もう食べた。", reading: "もうたべた。", de: "Ich habe schon gegessen." },
      { jp: "コーヒーを飲んだ。", reading: "コーヒーをのんだ。", de: "Ich habe Kaffee getrunken. (Godan, んだ)" },
      { jp: "京都に行ったことがある。", reading: "きょうとにいったことがある。", de: "Ich war schon mal in Kyoto. (Baustein 〜たことがある)" },
    ],
  },
  {
    id: "c-nai-form",
    category: "Verbformen",
    title: "ない-Form",
    reading: "einfache Verneinung",
    summary: "Die lockere Verneinung (= ません ohne Höflichkeit). Bei godan-Verben wird das -u zu -a + ない; Ausnahme: う wird zu わ. Basis für 〜ないでください und 〜なければなりません.",
    usage: "Die lockere Verneinung unter Freunden, und der Baustein für Bitten wie 〜ないでください. Schritt für Schritt: Ichidan る weg + ない (食べる→食べない). Godan: letztes -u zu -a + ない (飲む→飲まない, 書く→書かない). Wichtig: endet das Verb auf う, wird es nicht あ, sondern わ (買う→買わない). する→しない, 来る→来ない (こない).",
    formation: [
      { from: "Godan", to: "-a + ない", note: "飲む→飲まない" },
      { from: "う-Endung", to: "わ + ない", note: "買う→買わない" },
      { from: "Ichidan", to: "る→ない", note: "食べる→食べない" },
      { from: "する / 来る", to: "しない / 来ない", note: "Ausnahmen" },
    ],
    pitfall: "Bei godan-Verben auf う wird う zu わ: 買う→買わない, nicht 買あない.",
    examples: [
      { jp: "お酒を飲まない。", reading: "おさけをのまない。", de: "Ich trinke keinen Alkohol. (Godan)" },
      { jp: "今日は行かない。", reading: "きょうはいかない。", de: "Heute gehe ich nicht. (Godan)" },
      { jp: "肉を食べない。", reading: "にくをたべない。", de: "Ich esse kein Fleisch. (Ichidan)" },
      { jp: "ここで写真を撮らないでください。", reading: "ここでしゃしんをとらないでください。", de: "Bitte machen Sie hier keine Fotos. (Baustein 〜ないでください)" },
    ],
  },
  {
    id: "c-nakatta-form",
    category: "Verbformen",
    title: "なかった-Form",
    reading: "verneinte Vergangenheit",
    summary: "Die lockere verneinte Vergangenheit (= ませんでした). Du nimmst die ない-Form und ersetzt das ない durch なかった.",
    usage: "Wenn du locker sagen willst, dass etwas NICHT passiert ist („bin gestern nicht gekommen“). Zwei Schritte: 1) ない-Form bilden (飲む→飲まない). 2) ない durch なかった ersetzen (飲まない→飲まなかった). Es funktioniert wie ein い-Adjektiv: ない verhält sich wie 高い, deshalb 高い→高かった und ない→なかった.",
    formation: [
      { from: "Godan", to: "ない-Form, dann ない→なかった", note: "飲む→飲まない→飲まなかった" },
      { from: "Ichidan", to: "ない-Form, dann ない→なかった", note: "食べる→食べない→食べなかった" },
      { from: "する / 来る", to: "しなかった / 来なかった", note: "こなかった" },
    ],
    pitfall: "Es heißt 来なかった, nicht 来ないだった — なかった ersetzt das ない direkt, ohne zusätzliches だ.",
    examples: [
      { jp: "昨日は来なかった。", reading: "きのうはこなかった。", de: "Gestern ist er nicht gekommen. (来る)" },
      { jp: "宿題をしなかった。", reading: "しゅくだいをしなかった。", de: "Ich habe die Hausaufgaben nicht gemacht. (する)" },
      { jp: "朝、何も食べなかった。", reading: "あさ、なにもたべなかった。", de: "Morgens habe ich nichts gegessen. (Ichidan)" },
      { jp: "お酒を飲まなかった。", reading: "おさけをのまなかった。", de: "Ich habe keinen Alkohol getrunken. (Godan)" },
    ],
  },

  // ============ ADJEKTIVE ============
  {
    id: "c-i-adjektive",
    category: "Adjektive",
    title: "い-Adjektive",
    summary: "Adjektive, die auf い enden (高い, おいしい). Sie werden selbst gebeugt: in der Vergangenheit い→かった, in der Verneinung い→くない. Vor einem Nomen stehen sie direkt davor. Ausnahme: いい→よかった.",
    usage: "Wann immer du etwas beschreibst (teuer, heiß, gut) — denk dran, dass das Adjektiv selbst Zeit und Verneinung trägt.",
    table: {
      head: ["", "Form (高い)"],
      rows: [
        ["Gegenwart", "高い"],
        ["Verneinung", "高くない"],
        ["Vergangenheit", "高かった"],
        ["Verg. verneint", "高くなかった"],
      ],
    },
    pitfall: "In der Vergangenheit beugst du das Adjektiv, nicht です: 高かったです, nicht 高いでした.",
    examples: [
      { jp: "この本は高いです。", reading: "このほんはたかいです。", de: "Dieses Buch ist teuer." },
      { jp: "天気がよくなかった。", reading: "てんきがよくなかった。", de: "Das Wetter war nicht gut." },
    ],
  },
  {
    id: "c-na-adjektive",
    category: "Adjektive",
    title: "な-Adjektive",
    summary: "Adjektive, die wie Nomen funktionieren (元気, 静か, 好き). Vor einem Nomen brauchen sie ein な (静かな町). Sie werden nicht selbst gebeugt — die Zeit/Verneinung übernimmt です: じゃない, でした.",
    usage: "Für Eigenschaften wie 元気, 静か oder 好き — überall, wo sich das Wort nicht selbst beugt, sondern です die Arbeit übernimmt.",
    table: {
      head: ["", "Form (静か)"],
      rows: [
        ["Gegenwart", "静かです"],
        ["Verneinung", "静かじゃないです"],
        ["Vergangenheit", "静かでした"],
        ["vor Nomen", "静かな町"],
      ],
    },
    pitfall: "Vor einem Nomen brauchst du das な: 静かな町, nicht 静か町.",
    examples: [
      { jp: "この町は静かです。", reading: "このまちはしずかです。", de: "Diese Stadt ist ruhig." },
      { jp: "元気な子どもですね。", reading: "げんきなこどもですね。", de: "Ein munteres Kind, nicht wahr?" },
    ],
  },

  // ============ PARTIKEL ============
  {
    id: "c-wa-ga",
    category: "Partikel",
    title: "は vs. が",
    reading: "wa / ga",
    summary: "は markiert das Thema („was das Gesprächsthema betrifft …“) und stellt etwas Bekanntes in den Hintergrund. が markiert das grammatische Subjekt und betont neue oder genaue Information — auch in Antworten auf „wer/was?“.",
    usage: "Sobald du ein Thema setzt („ich …“), nimmst du は; wenn du neue Information betonst oder auf „wer/was?“ antwortest, が.",
    pitfall: "Nach einem Fragewort wie だれ oder なに steht が, nicht は: だれが来ますか.",
    examples: [
      { jp: "私は学生です。", reading: "わたしはがくせいです。", de: "Ich bin Student. (Thema: ich)" },
      { jp: "だれが来ますか。", reading: "だれがきますか。", de: "Wer kommt? (が fragt nach dem Subjekt)" },
      { jp: "猫が好きです。", reading: "ねこがすきです。", de: "Ich mag Katzen. (好き verlangt が)" },
    ],
  },
  {
    id: "c-wo",
    category: "Partikel",
    title: "を",
    reading: "wo (= o)",
    summary: "Markiert das direkte Objekt — das, worauf die Handlung wirkt. Wird „o“ gesprochen, nie „wo“. Bei Bewegungsverben markiert を auch den Ort, den man durchquert oder verlässt.",
    usage: "Immer wenn eine Handlung ein direktes Objekt hat („Brot essen“, „ein Buch lesen“).",
    pitfall: "を wird „o“ gesprochen, nie „wo“ — auch wenn die Schreibung anders aussieht.",
    examples: [
      { jp: "パンを食べます。", reading: "パンをたべます。", de: "Ich esse Brot." },
      { jp: "公園を散歩します。", reading: "こうえんをさんぽします。", de: "Ich spaziere durch den Park." },
    ],
  },
  {
    id: "c-ni-de",
    category: "Partikel",
    title: "に vs. で",
    reading: "ni / de",
    summary: "に markiert den Zeitpunkt, das Ziel/Ankunftsort und das Vorhandensein (います/あります). で markiert den Ort, an dem eine Handlung passiert, sowie das Mittel/Werkzeug. Beim Ziel ist に oft mit へ austauschbar (学校に行きます = 学校へ行きます); へ betont mehr die Richtung.",
    usage: "Frag dich: Geht es um einen Ort, AN dem etwas passiert (で), oder um Zeitpunkt, Ziel oder Existenz (に)?",
    pitfall: "Beim Existenzverb steht der Ort mit に, nicht で: 部屋に猫がいます, nicht 部屋で猫がいます.",
    examples: [
      { jp: "七時に起きます。", reading: "しちじにおきます。", de: "Ich stehe um sieben auf. (Zeitpunkt)" },
      { jp: "図書館で勉強します。", reading: "としょかんでべんきょうします。", de: "Ich lerne in der Bibliothek. (Handlungsort)" },
      { jp: "バスで行きます。", reading: "バスでいきます。", de: "Ich fahre mit dem Bus. (Mittel)" },
    ],
  },
  {
    id: "c-e",
    category: "Partikel",
    title: "へ",
    reading: "e (Richtung)",
    summary: "Markiert die Richtung einer Bewegung („nach …“). Wird in dieser Rolle „e“ gesprochen, nicht „he“. Oft mit に austauschbar; へ betont eher die Richtung, に eher das genaue Ziel.",
    usage: "Wenn du sagst, wohin du gehst oder fährst („nach Japan“, „nach Hause“).",
    pitfall: "In der Richtungsrolle wird へ „e“ gesprochen, nicht „he“.",
    examples: [
      { jp: "日本へ行きます。", reading: "にほんへいきます。", de: "Ich fahre nach Japan." },
      { jp: "うちへ帰ります。", reading: "うちへかえります。", de: "Ich gehe nach Hause." },
    ],
  },
  {
    id: "c-to",
    category: "Partikel",
    title: "と",
    reading: "to",
    summary: "Verbindet Nomen vollständig zu einer Liste („A und B“) und markiert die Person, mit der man etwas zusammen tut („mit …“). Für unvollständige Aufzählungen nimmt man stattdessen や.",
    usage: "Wenn du zwei Dinge vollständig aufzählst („Brot und Eier“) oder sagst, mit wem du etwas tust.",
    pitfall: "と zählt vollständig auf; für „und so weiter“ (unvollständig) brauchst du や, nicht と.",
    examples: [
      { jp: "パンとたまごを買います。", reading: "パンとたまごをかいます。", de: "Ich kaufe Brot und Eier." },
      { jp: "友だちと話します。", reading: "ともだちとはなします。", de: "Ich rede mit einem Freund." },
    ],
  },
  {
    id: "c-mo",
    category: "Partikel",
    title: "も",
    reading: "mo (auch)",
    summary: "Bedeutet „auch / ebenfalls“ und ersetzt は, が oder を (nicht zusätzlich dazu). Doppelt verwendet heißt es „sowohl … als auch“, mit Verneinung „weder … noch“.",
    usage: "Wenn du „auch“ sagen willst („Ich bin auch Student“).",
    pitfall: "も ersetzt は/が/を, es kommt nicht zusätzlich dazu: 私も, nicht 私はも.",
    examples: [
      { jp: "私も学生です。", reading: "わたしもがくせいです。", de: "Ich bin auch Student." },
      { jp: "コーヒーもお茶も好きです。", reading: "コーヒーもおちゃもすきです。", de: "Ich mag sowohl Kaffee als auch Tee." },
    ],
  },
  {
    id: "c-no",
    category: "Partikel",
    title: "の",
    reading: "no",
    summary: "Verbindet zwei Nomen: Besitz und Zugehörigkeit („von / -s“) sowie nähere Bestimmung (私の本 = mein Buch). Am Satzende macht の eine Aussage oder Frage weicher und erklärender.",
    usage: "Wenn du Besitz oder Zugehörigkeit ausdrückst („mein Buch“, „der Lehrer für Japanisch“).",
    pitfall: "Die Reihenfolge ist Besitzer + の + Besitz: 私の本 (mein Buch), nicht 本の私.",
    examples: [
      { jp: "私の本です。", reading: "わたしのほんです。", de: "Das ist mein Buch." },
      { jp: "日本語の先生。", reading: "にほんごのせんせい。", de: "Japanischlehrer(in)." },
    ],
  },
  {
    id: "c-kara-made",
    category: "Partikel",
    title: "から / まで",
    reading: "kara / made",
    summary: "から markiert den Startpunkt („von / ab / seit“), まで den Endpunkt („bis“). Funktioniert für Zeit wie für Ort und oft als Paar.",
    usage: "Wenn du eine Spanne angibst — von wann bis wann, von wo bis wo.",
    pitfall: "から ist der Start, まで das Ende — nicht verwechseln: 九時から五時まで, nicht umgekehrt.",
    examples: [
      { jp: "九時から五時まで働きます。", reading: "くじからごじまではたらきます。", de: "Ich arbeite von neun bis fünf." },
      { jp: "東京から大阪まで。", reading: "とうきょうからおおさかまで。", de: "Von Tokyo bis Osaka." },
    ],
  },
  {
    id: "c-ya-nado",
    category: "Partikel",
    title: "や / など",
    reading: "Aufzählung (Beispiele)",
    summary: "や verbindet Nomen zu einer unvollständigen Liste: „A und B (unter anderem)“. Am Ende des letzten Beispiels steht oft など („und so weiter“). Damit nennst du einige Beispiele aus einer größeren Gruppe, ohne dass die Liste vollständig sein muss — anders als と, das vollständig aufzählt.",
    usage: "Wenn du ein paar Beispiele aus einer größeren Gruppe nennst („Äpfel, Bananen und so weiter“).",
    pitfall: "や ist die unvollständige Liste; für eine vollständige Aufzählung („genau A und B“) nimmst du と, nicht や.",
    examples: [
      { jp: "りんごやバナナなどを買いました。", reading: "りんごやバナナなどをかいました。", de: "Ich habe Äpfel, Bananen usw. gekauft." },
      { jp: "牛乳やたまごがあります。", reading: "ぎゅうにゅうやたまごがあります。", de: "Es gibt Milch, Eier und Ähnliches." },
    ],
  },
  {
    id: "c-ga-kedo",
    category: "Partikel",
    title: "が / けど",
    reading: "aber / jedoch",
    summary: "Beide verbinden zwei Sätze mit einem Gegensatz: „…, aber …“. が klingt neutral und etwas förmlicher, けど umgangssprachlicher. Sie stehen am Ende des ersten Satzteils, nicht am Anfang des zweiten wie das deutsche „aber“.",
    usage: "Wenn du einen Gegensatz oder eine Einschränkung ausdrückst („Japanisch mag ich, aber es ist schwer“).",
    pitfall: "Dieses が hat nichts mit der Subjekt-Partikel が zu tun — gleiche Schrift, andere Aufgabe. Hier steht es nach dem ganzen ersten Satz.",
    examples: [
      { jp: "日本語は好きですが、難しいです。", reading: "にほんごはすきですが、むずかしいです。", de: "Ich mag Japanisch, aber es ist schwierig." },
      { jp: "面白かったけど、長かったです。", reading: "おもしろかったけど、ながかったです。", de: "Es war interessant, aber lang." },
    ],
  },
  {
    id: "c-dake",
    category: "Partikel",
    title: "〜だけ",
    reading: "nur / lediglich",
    summary: "だけ bedeutet „nur / lediglich“ und steht direkt hinter dem Wort, das es einschränkt (Nomen, Menge oder Verb). Es betont, dass es nichts darüber hinaus gibt.",
    usage: "Wenn du eine Menge oder Auswahl begrenzt („nur ein bisschen“, „nur Wasser“).",
    pitfall: "だけ steht NACH dem eingeschränkten Wort, nicht davor wie das deutsche „nur“: 少しだけ, nicht だけ少し.",
    examples: [
      { jp: "少しだけ食べます。", reading: "すこしだけたべます。", de: "Ich esse nur ein bisschen." },
      { jp: "水だけください。", reading: "みずだけください。", de: "Nur Wasser, bitte." },
    ],
  },

  // ============ SCHLÜSSELMUSTER ============
  {
    id: "c-tai",
    category: "Schlüsselmuster",
    title: "〜たい",
    reading: "etwas tun wollen",
    summary: "Drückt den eigenen Wunsch aus, etwas zu tun. An den ます-Stamm wird たい gehängt; danach beugt es sich wie ein い-Adjektiv (たくない, たかった). Nur für die eigene Person verwendbar.",
    usage: "Wenn du sagen willst, was DU selbst tun möchtest („ich will essen“, „ich möchte fahren“).",
    formation: [
      { from: "ます-Stamm", to: "+ たい", note: "行きます→行きたい" },
    ],
    pitfall: "Nur für die eigene Person — für den Wunsch anderer („er will …“) nimmt man 〜たがっている, nicht einfach たい.",
    examples: [
      { jp: "日本へ行きたいです。", reading: "にほんへいきたいです。", de: "Ich möchte nach Japan fahren." },
      { jp: "何も食べたくない。", reading: "なにもたべたくない。", de: "Ich will nichts essen." },
    ],
  },
  {
    id: "c-te-kudasai",
    category: "Schlüsselmuster",
    title: "〜てください",
    reading: "Bitte tun Sie …",
    summary: "Höfliche Bitte oder Aufforderung. An die て-Form wird ください gehängt. Für eine Bitte, etwas NICHT zu tun, nimmt man die ない-Form + でください.",
    usage: "Für höfliche Bitten und Aufforderungen („Bitte warten Sie“, „Bitte schreiben Sie hier“).",
    formation: [
      { from: "て-Form", to: "+ ください", note: "待って→待ってください" },
      { from: "ない-Form", to: "+ でください", note: "行かない→行かないでください" },
    ],
    pitfall: "Für „Bitte tun Sie NICHT …“ nimmst du die ない-Form + でください, nicht die て-Form: 行かないでください.",
    examples: [
      { jp: "ここに名前を書いてください。", reading: "ここになまえをかいてください。", de: "Schreiben Sie bitte hier Ihren Namen." },
      { jp: "心配しないでください。", reading: "しんぱいしないでください。", de: "Machen Sie sich bitte keine Sorgen." },
    ],
  },
  {
    id: "c-te-iru",
    category: "Schlüsselmuster",
    title: "〜ている",
    reading: "Verlaufsform / Zustand",
    summary: "て-Form + いる. Drückt eine gerade laufende Handlung aus („ist am …“) oder einen andauernden Zustand/Gewohnheit. Höflich: ています. Locker fällt das い oft weg (てる).",
    usage: "Für etwas, das gerade läuft („ich esse gerade“) oder einen Dauerzustand („ich wohne in Tokyo“).",
    formation: [
      { from: "て-Form", to: "+ いる / います", note: "食べて→食べている" },
    ],
    pitfall: "Verben wie 住む oder 知る stehen fast immer als 住んでいる / 知っています — die schlichte 住みます klingt hier falsch.",
    examples: [
      { jp: "今ご飯を食べています。", reading: "いまごはんをたべています。", de: "Ich esse gerade." },
      { jp: "東京に住んでいます。", reading: "とうきょうにすんでいます。", de: "Ich wohne in Tokyo. (Zustand)" },
    ],
  },
  {
    id: "c-arimasu-imasu",
    category: "Schlüsselmuster",
    title: "あります / います",
    reading: "es gibt / vorhanden sein",
    summary: "Beide heißen „es gibt / sich befinden“. います für Belebtes (Menschen, Tiere), あります für Unbelebtes (Dinge, Pflanzen). Der Ort steht mit に, das Vorhandene meist mit が.",
    usage: "Wenn du sagst, dass es etwas gibt oder wo sich etwas oder jemand befindet.",
    table: {
      head: ["", "Verb"],
      rows: [
        ["Belebt", "います"],
        ["Unbelebt", "あります"],
      ],
    },
    pitfall: "います nur für Belebtes, あります für Dinge — eine Katze nimmt います, ein Buch あります.",
    examples: [
      { jp: "部屋に猫がいます。", reading: "へやにねこがいます。", de: "Im Zimmer ist eine Katze." },
      { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
    ],
  },
  {
    id: "c-temo-ii",
    category: "Schlüsselmuster",
    title: "〜てもいいです",
    reading: "Erlaubnis",
    summary: "て-Form + もいいです gibt Erlaubnis („du darfst …“). Als Frage erbittet man damit höflich die Erlaubnis. Lockerer geht auch nur てもいい.",
    usage: "Wenn du um Erlaubnis bittest oder sie gibst („Darf ich ein Foto machen?“).",
    formation: [
      { from: "て-Form", to: "+ もいいです", note: "入って→入ってもいいです" },
    ],
    pitfall: "Es baut auf der て-Form auf: 撮ってもいい, nicht 撮るてもいい.",
    examples: [
      { jp: "写真を撮ってもいいですか。", reading: "しゃしんをとってもいいですか。", de: "Darf ich ein Foto machen?" },
      { jp: "ここに座ってもいいです。", reading: "ここにすわってもいいです。", de: "Du darfst dich hierhin setzen." },
    ],
  },
  {
    id: "c-te-wa-ikemasen",
    category: "Schlüsselmuster",
    title: "〜てはいけません",
    reading: "Verbot",
    summary: "て-Form + はいけません drückt ein Verbot aus („du darfst nicht …“). In lockerer Sprache wird ては oft zu ちゃ (食べちゃだめ).",
    usage: "Wenn etwas verboten ist („Hier darf man nicht rauchen“, „Fotografieren ist verboten“).",
    formation: [
      { from: "て-Form", to: "+ はいけません", note: "食べて→食べてはいけません" },
    ],
    pitfall: "Auch das braucht die て-Form, nicht die Grundform: 吸ってはいけません, nicht 吸うてはいけません.",
    examples: [
      { jp: "ここでたばこを吸ってはいけません。", reading: "ここでたばこをすってはいけません。", de: "Hier darf man nicht rauchen." },
      { jp: "写真を撮ってはいけません。", reading: "しゃしんをとってはいけません。", de: "Fotografieren ist verboten." },
    ],
  },
  {
    id: "c-mashou-masenka",
    category: "Schlüsselmuster",
    title: "〜ましょう / 〜ませんか",
    reading: "Vorschlag / Einladung",
    summary: "ましょう heißt „lass uns …“ (Vorschlag). ませんか („wollen wir nicht …?“) lädt höflicher ein und überlässt dem anderen die Entscheidung. Beide an den ます-Stamm.",
    usage: "Wenn du etwas gemeinsam vorschlägst („Lass uns gehen“) oder jemanden einlädst („Wollen wir Tee trinken?“).",
    formation: [
      { from: "ます-Stamm", to: "+ ましょう / ませんか", note: "行き→行きましょう" },
    ],
    pitfall: "ましょう entscheidet eher für beide; als höfliche Einladung, die dem anderen die Wahl lässt, nimmt man ませんか.",
    examples: [
      { jp: "一緒に行きましょう。", reading: "いっしょにいきましょう。", de: "Lass uns zusammen gehen." },
      { jp: "お茶を飲みませんか。", reading: "おちゃをのみませんか。", de: "Wollen wir nicht Tee trinken?" },
    ],
  },
  {
    id: "c-hoshii",
    category: "Schlüsselmuster",
    title: "〜がほしい",
    reading: "etwas haben wollen",
    summary: "Drückt den Wunsch nach einer Sache (Nomen) aus: „ich will/hätte gern …“. Das Gewünschte wird mit が markiert. ほしい beugt sich wie ein い-Adjektiv. Nur für die eigene Person.",
    usage: "Wenn du eine SACHE haben willst („ich hätte gern ein Auto“) — anders als たい, das sich auf Handlungen bezieht.",
    formation: [
      { from: "Nomen", to: "+ がほしい", note: "車がほしい" },
    ],
    pitfall: "Das Gewünschte steht mit が, nicht を: 車がほしい, nicht 車をほしい.",
    examples: [
      { jp: "新しい車がほしいです。", reading: "あたらしいくるまがほしいです。", de: "Ich hätte gern ein neues Auto." },
      { jp: "今は何もほしくない。", reading: "いまはなにもほしくない。", de: "Gerade will ich nichts." },
    ],
  },
  {
    id: "c-ni-purpose",
    category: "Schlüsselmuster",
    title: "〜に行きます (Zweck)",
    reading: "gehen, um zu …",
    summary: "Drückt den Zweck einer Bewegung aus: „gehen/kommen/zurückkehren, um etwas zu tun“. An den ます-Stamm des Verbs (den Teil vor ます) hängst du に, danach folgt 行く・来る・帰る. Bei する-Verben kann auch das Nomen + に stehen (買い物に行く).",
    usage: "Wenn du sagst, wozu du irgendwohin gehst („essen gehen“, „ein Buch kaufen gehen“).",
    formation: [
      { from: "ます-Stamm", to: "+ に + 行く / 来る / 帰る", note: "食べます→食べに行く" },
    ],
    pitfall: "Vor に steht der ます-Stamm, nicht die Wörterbuchform: 食べに行く, nicht 食べるに行く.",
    examples: [
      { jp: "ご飯を食べに行きます。", reading: "ごはんをたべにいきます。", de: "Ich gehe essen (um zu essen)." },
      { jp: "本を買いに行きます。", reading: "ほんをかいにいきます。", de: "Ich gehe ein Buch kaufen." },
    ],
  },
  {
    id: "c-reihenfolge",
    category: "Schlüsselmuster",
    title: "前に / てから / 後で",
    reading: "vorher / danach / nachdem",
    summary: "Drei Muster für zeitliche Abfolge. 〜前に (Wörterbuchform + 前に) = „bevor …“. 〜てから (て-Form + から) = „nachdem … (und erst dann)“. 〜後で (た-Form + 後で) = „nachdem / danach“. Die Form des ersten Verbs entscheidet, welches Muster passt.",
    usage: "Wenn du zwei Handlungen in eine Reihenfolge bringst („vor dem Schlafen Zähne putzen“, „nach dem Essen spazieren“).",
    table: {
      head: ["Muster", "Form", "Bedeutung"],
      rows: [
        ["前に", "寝る前に", "bevor (vor dem Schlafen)"],
        ["てから", "食べてから", "nachdem (erst essen, dann …)"],
        ["後で", "食べた後で", "nachdem / danach"],
      ],
    },
    pitfall: "前に braucht die Wörterbuchform (寝る前に), 後で die た-Form (寝た後で) — nicht verwechseln.",
    examples: [
      { jp: "寝る前に、歯を磨きます。", reading: "ねるまえに、はをみがきます。", de: "Bevor ich schlafe, putze ich die Zähne." },
      { jp: "ご飯を食べた後で、散歩します。", reading: "ごはんをたべたあとで、さんぽします。", de: "Nachdem ich gegessen habe, spaziere ich." },
      { jp: "会議が終わってから、電話します。", reading: "かいぎがおわってから、でんわします。", de: "Nachdem das Meeting vorbei ist, rufe ich an." },
    ],
  },
  {
    id: "c-wo-kudasai",
    category: "Schlüsselmuster",
    title: "〜をください",
    reading: "bitte geben Sie mir …",
    summary: "Nomen + をください heißt „Bitte geben Sie mir …“ und ist die Standardformel zum Bestellen oder Erbitten einer Sache. を markiert dabei das Gewünschte. Für die Bitte um eine Handlung (statt einer Sache) nimmt man die て-Form + ください.",
    usage: "Im Geschäft oder Restaurant, wenn du etwas bestellst oder erbittest („Einen Kaffee, bitte“).",
    pitfall: "をください gilt für eine SACHE; für eine HANDLUNG („bitte warten“) brauchst du die て-Form + ください: 待ってください.",
    examples: [
      { jp: "コーヒーをください。", reading: "コーヒーをください。", de: "Einen Kaffee bitte." },
      { jp: "りんごを三つください。", reading: "りんごをみっつください。", de: "Drei Äpfel, bitte." },
    ],
  },
  {
    id: "c-dou-desuka",
    category: "Schlüsselmuster",
    title: "〜はどうですか",
    reading: "Wie wäre …? / Vorschlag",
    summary: "Nomen + はどうですか fragt nach einer Meinung („Wie ist …?“) oder macht einen sanften Vorschlag („Wie wäre es mit …?“). Höflicher und weicher klingt die Variante はいかがですか.",
    usage: "Wenn du etwas vorschlägst oder nach jemandes Eindruck fragst („Wie wäre es mit Tee?“, „Wie ist das Wetter?“).",
    pitfall: "Für einen Vorschlag, etwas GEMEINSAM zu tun, passt eher 〜ませんか; どうですか schlägt eher eine Sache vor oder fragt nach einer Meinung.",
    examples: [
      { jp: "お茶はどうですか。", reading: "おちゃはどうですか。", de: "Wie wäre es mit Tee?" },
      { jp: "週末、映画はどうですか。", reading: "しゅうまつ、えいがはどうですか。", de: "Wie wäre am Wochenende ein Film?" },
    ],
  },
  {
    id: "c-yori",
    category: "Schlüsselmuster",
    title: "〜より / のほうが / 一番 (Vergleich)",
    reading: "Vergleich · Präferenz · Superlativ",
    summary: "Drei verwandte Muster zum Vergleichen. Vergleich: A は B より … = „A ist … als B“ (より = „als“). Präferenz: B のほうが … = „B ist eher / lieber …“, oft als Antwort auf „welches von beiden?“. Superlativ: 〜の中で〜が一番 … = „von allen … am …sten“ (一番 = „Nummer eins, am meisten“).",
    usage: "Wenn du zwei Dinge vergleichst, eine Vorliebe ausdrückst oder das Beste aus einer Gruppe nennst.",
    table: {
      head: ["Muster", "Beispiel", "Bedeutung"],
      rows: [
        ["より", "バスより速い", "schneller als der Bus"],
        ["のほうが", "電車のほうが速い", "der Zug ist (eher) schneller"],
        ["の中で一番", "この中で一番速い", "von allen am schnellsten"],
      ],
    },
    pitfall: "より steht beim Vergleichsmaßstab („als B“), のほうが beim Favoriten — nicht vertauschen: 電車はバスより速い / バスより電車のほうが速い.",
    examples: [
      { jp: "電車はバスより速いです。", reading: "でんしゃはバスよりはやいです。", de: "Der Zug ist schneller als der Bus." },
      { jp: "コーヒーよりお茶のほうが好きです。", reading: "コーヒーよりおちゃのほうがすきです。", de: "Ich mag Tee lieber als Kaffee." },
      { jp: "果物の中でりんごが一番好きです。", reading: "くだもののなかでりんごがいちばんすきです。", de: "Von allen Früchten mag ich Äpfel am liebsten." },
    ],
  },
  {
    id: "c-kara-node",
    category: "Schlüsselmuster",
    title: "〜から / ので (Grund)",
    reading: "weil",
    summary: "Beide bedeuten „weil / da“ und stehen nach dem Grund. から ist direkter und subjektiver (auch für eigene Meinung/Entschluss), ので klingt weicher und höflicher. Wichtig: erst der Grund, dann die Folge.",
    usage: "Wenn du einen Grund angibst („Weil es kalt ist, schließe ich das Fenster“).",
    pitfall: "Vor ので wird ein な-Adjektiv oder Nomen mit な angeschlossen, nicht mit だ: 病気なので, nicht 病気だので.",
    examples: [
      { jp: "寒いから、窓を閉めます。", reading: "さむいから、まどをしめます。", de: "Weil es kalt ist, schließe ich das Fenster." },
      { jp: "病気なので、休みます。", reading: "びょうきなので、やすみます。", de: "Da ich krank bin, bleibe ich zu Hause." },
    ],
  },

  // ============ SONSTIGES ============
  {
    id: "c-fragewoerter",
    category: "Sonstiges",
    title: "Fragewörter",
    reading: "なに・だれ・どこ …",
    summary: "Das Fragewort steht an der Stelle, an der die gesuchte Information im Antwortsatz stünde — die Wortstellung ändert sich nicht. Am Ende kommt か. Mit か/も werden Fragewörter zu „irgend-/kein-“ (だれか = jemand, だれも〜ない = niemand).",
    usage: "Wenn du nach etwas fragst — das Fragewort steht da, wo die Antwort stünde, und am Satzende kommt か.",
    table: {
      head: ["Wort", "Bedeutung"],
      rows: [
        ["何 (なに)", "was"],
        ["だれ", "wer"],
        ["どこ", "wo"],
        ["いつ", "wann"],
        ["いくら", "wie viel"],
      ],
    },
    pitfall: "Die Wortstellung bleibt wie im Aussagesatz; man stellt das Fragewort NICHT an den Anfang wie im Deutschen.",
    examples: [
      { jp: "これは何ですか。", reading: "これはなんですか。", de: "Was ist das?" },
      { jp: "トイレはどこですか。", reading: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    ],
  },
  {
    id: "c-zaehler",
    category: "Sonstiges",
    title: "Zähler",
    reading: "Zählwörter",
    summary: "Zum Zählen hängt man an die Zahl ein Zählwort, das zur Art des Objekts passt: 〜つ (allgemeine Dinge), 〜人 (Personen), 〜枚 (flache Dinge), 〜本 (lange Dinge). Das Zählwort steht meist direkt vor dem Verb.",
    usage: "Sobald du Dinge zählst — die Wahl des Zählworts hängt von der Art des Objekts ab.",
    table: {
      head: ["Zähler", "für"],
      rows: [
        ["〜つ", "Dinge allgemein"],
        ["〜人 (にん)", "Personen"],
        ["〜枚 (まい)", "Flaches (Papier)"],
        ["〜本 (ほん)", "Langes (Flaschen)"],
      ],
    },
    pitfall: "Viele Zähler ändern den Laut: 一本 ippon, 三本 sanbon, 六本 roppon — nicht überall einfach „hon“.",
    examples: [
      { jp: "りんごを三つください。", reading: "りんごをみっつください。", de: "Drei Äpfel, bitte." },
      { jp: "学生が二人います。", reading: "がくせいがふたりいます。", de: "Es sind zwei Studenten da." },
    ],
  },
  {
    id: "c-suki-jouzu",
    category: "Sonstiges",
    title: "〜が好き / 上手",
    reading: "mögen / gut können",
    summary: "好き (mögen), 嫌い (nicht mögen), 上手 (gut können), 下手 (schlecht können) sind な-Adjektive. Das Objekt des Gefühls/Könnens wird mit が markiert, nicht mit を.",
    usage: "Wenn du sagst, was du magst, nicht magst oder gut bzw. schlecht kannst.",
    pitfall: "Das Objekt steht mit が, nicht を: 音楽が好きです, nicht 音楽を好きです.",
    examples: [
      { jp: "音楽が好きです。", reading: "おんがくがすきです。", de: "Ich mag Musik." },
      { jp: "彼は料理が上手です。", reading: "かれはりょうりがじょうずです。", de: "Er kann gut kochen." },
    ],
  },
  {
    id: "c-kono-sono-ano",
    category: "Sonstiges",
    title: "この / その / あの",
    reading: "kosoado",
    summary: "Hinweiswörter nach Entfernung: この/これ (beim Sprecher), その/それ (beim Hörer), あの/あれ (von beiden entfernt), どの/どれ (welch-). Für Orte gibt es die gleiche Reihe: ここ (hier) / そこ (dort bei dir) / あそこ (dort drüben) / どこ (wo?). この+Nomen steht vor dem Nomen, これ steht allein.",
    usage: "Wenn du auf etwas oder einen Ort zeigst — je nachdem, ob es bei dir, beim Gegenüber oder weit weg ist.",
    table: {
      head: ["+ Nomen", "allein", "Ort"],
      rows: [
        ["この", "これ", "ここ"],
        ["その", "それ", "そこ"],
        ["あの", "あれ", "あそこ"],
        ["どの", "どれ", "どこ"],
      ],
    },
    pitfall: "この braucht ein Nomen dahinter (この本), これ steht allein — nicht これ本.",
    examples: [
      { jp: "この本は私のです。", reading: "このほんはわたしのです。", de: "Dieses Buch (hier) ist meins." },
      { jp: "あれは何ですか。", reading: "あれはなんですか。", de: "Was ist das dort drüben?" },
      { jp: "トイレはどこですか。", reading: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    ],
  },
  {
    id: "c-deshou",
    category: "Sonstiges",
    title: "〜でしょう",
    reading: "wahrscheinlich",
    summary: "Drückt eine Vermutung aus („wird wohl … sein“). Steht nach Nomen, い-/な-Adjektiv oder Verb in Grundform. Mit steigender Betonung (でしょう？) sucht man Zustimmung: „… oder?“.",
    usage: "Wenn du eine Vermutung äußerst („wird wohl regnen“) oder dir Zustimmung holst („…, oder?“).",
    pitfall: "Vor でしょう steht das Nomen oder な-Adjektiv ohne です: 雨でしょう, nicht 雨ですでしょう.",
    examples: [
      { jp: "明日は雨でしょう。", reading: "あしたはあめでしょう。", de: "Morgen wird es wohl regnen." },
      { jp: "これでいいでしょう？", reading: "これでいいでしょう？", de: "So ist es gut, oder?" },
    ],
  },
  {
    id: "c-tsumori",
    category: "Sonstiges",
    title: "〜つもり",
    reading: "vorhaben",
    summary: "Wörterbuchform + つもりです = „ich habe vor / beabsichtige zu …“. Drückt einen festen Plan aus. Für „nicht vorhaben“ nimmt man die ない-Form + つもりです.",
    usage: "Wenn du einen festen Plan ausdrückst („ich habe vor, nach Japan zu fahren“).",
    formation: [
      { from: "Wörterbuchform", to: "+ つもりです", note: "行く→行くつもりです" },
    ],
    pitfall: "Davor steht die Wörterbuchform, nicht der ます-Stamm: 行くつもり, nicht 行きつもり.",
    examples: [
      { jp: "来年日本へ行くつもりです。", reading: "らいねんにほんへいくつもりです。", de: "Nächstes Jahr habe ich vor, nach Japan zu fahren." },
      { jp: "今日は何もしないつもりです。", reading: "きょうはなにもしないつもりです。", de: "Heute habe ich vor, nichts zu tun." },
    ],
  },
  {
    id: "c-goro-gurai",
    category: "Sonstiges",
    title: "ごろ / ぐらい",
    reading: "ungefähr",
    summary: "Beide heißen „ungefähr“, gelten aber für Verschiedenes: ごろ steht nur bei einem Zeitpunkt („gegen 7 Uhr“). ぐらい (auch くらい) steht bei einer Menge oder Dauer („ungefähr 3 Stunden“, „etwa 10 Stück“).",
    usage: "Wenn du eine ungefähre Zeit (ごろ) oder eine ungefähre Menge bzw. Dauer (ぐらい) angibst.",
    pitfall: "ごろ nur beim ZeitPUNKT, ぐらい bei Menge/Dauer: 七時ごろ (gegen 7 Uhr), aber 三時間ぐらい (ungefähr 3 Stunden) — nicht vertauschen.",
    examples: [
      { jp: "七時ごろ起きます。", reading: "しちじごろおきます。", de: "Ich stehe gegen 7 Uhr auf." },
      { jp: "三時間ぐらい勉強しました。", reading: "さんじかんぐらいべんきょうしました。", de: "Ich habe ungefähr drei Stunden gelernt." },
    ],
  },

];
