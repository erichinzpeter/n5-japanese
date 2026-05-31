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

  // ============ VERBFORMEN ============
  {
    id: "c-verbgruppen",
    category: "Verbformen",
    title: "Verbgruppen",
    reading: "godan · ichidan · unregelmäßig",
    summary: "Jedes Verb gehört zu einer von drei Gruppen. Die Gruppe entscheidet, wie alle anderen Formen (て, た, ない …) gebildet werden. Ichidan-Verben enden auf -iru/-eru + る, godan auf alle übrigen -u-Laute, dazu die zwei Ausnahmen する und 来る.",
    usage: "Bevor du irgendein Verb beugst, musst du wissen, zu welcher Gruppe es gehört — sie entscheidet über jede weitere Form. Das ist der erste Schritt bei jedem neuen Verb.",
    table: {
      head: ["Gruppe", "Beispiel", "Endung"],
      rows: [
        ["Godan (I)", "書く・飲む・話す", "-u"],
        ["Ichidan (II)", "食べる・見る", "-iru / -eru + る"],
        ["Unregelm. (III)", "する・来る", "—"],
      ],
    },
    pitfall: "Nicht jedes Verb auf る ist ichidan: 帰る, 入る, 走る enden zwar auf る, sind aber godan.",
    examples: [
      { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Ich lerne jeden Tag Japanisch. (する-Verb)" },
      { jp: "友だちが来ます。", reading: "ともだちがきます。", de: "Ein Freund kommt. (来る, unregelmäßig)" },
    ],
  },
  {
    id: "c-masu-form",
    category: "Verbformen",
    title: "ます-Form",
    reading: "höfliche Form",
    summary: "Die höfliche Standardform für Gespräche mit Fremden, im Beruf und in der Schule. Verneinung mit ません, Vergangenheit mit ました, höfliche Vergangenheits-Verneinung mit ませんでした.",
    usage: "Die Standard-Höflichkeitsform: im Beruf, in der Schule, mit Fremden. Wer unsicher ist, liegt mit der ます-Form fast immer richtig.",
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
      { jp: "コーヒーを飲みます。", reading: "コーヒーをのみます。", de: "Ich trinke Kaffee." },
      { jp: "肉を食べません。", reading: "にくをたべません。", de: "Ich esse kein Fleisch." },
    ],
  },
  {
    id: "c-dictionary-form",
    category: "Verbformen",
    title: "Wörterbuchform",
    reading: "Grundform / plain",
    summary: "Die Grundform, die im Wörterbuch steht (endet immer auf -u). Sie ist die lockere Sprechform unter Freunden und die Basis für viele Konstruktionen wie 〜たい, 〜前に oder Relativsätze.",
    usage: "Unter Freunden und Familie sprichst du in der Wörterbuchform; außerdem brauchst du sie als Baustein für viele Muster wie 〜たい oder 〜前に.",
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
      { jp: "映画を見る前に食べます。", reading: "えいがをみるまえにたべます。", de: "Vor dem Film essen wir." },
    ],
  },
  {
    id: "c-te-form",
    category: "Verbformen",
    title: "て-Form",
    summary: "Eine der wichtigsten Formen überhaupt. Sie verbindet Sätze („und dann …“), bildet höfliche Bitten (てください), die Verlaufsform (ている) und Erlaubnis/Verbot. Selbst keine Zeitform — die Zeit steht am Satzende.",
    usage: "Immer wenn zwei Handlungen aneinanderhängen („aufstehen und Kaffee trinken“) oder ein Grammatikmuster die て-Form verlangt. Eine der häufigsten Formen im Alltag.",
    formation: [
      { from: "う・つ・る", to: "って", note: "買う→買って" },
      { from: "む・ぶ・ぬ", to: "んで", note: "飲む→飲んで" },
      { from: "く / ぐ", to: "いて / いで", note: "書く→書いて" },
      { from: "す", to: "して", note: "話す→話して" },
      { from: "Ichidan", to: "る→て", note: "食べる→食べて" },
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
      { jp: "待ってください。", reading: "まってください。", de: "Bitte warten Sie." },
      { jp: "朝起きて、ご飯を食べます。", reading: "あさおきて、ごはんをたべます。", de: "Morgens stehe ich auf und esse." },
    ],
  },
  {
    id: "c-ta-form",
    category: "Verbformen",
    title: "た-Form",
    reading: "einfache Vergangenheit",
    summary: "Die lockere Vergangenheit (= ました ohne Höflichkeit). Die Bildung ist identisch zur て-Form, nur mit た/だ statt て/で. Auch Basis für 〜たり und 〜たことがある.",
    usage: "Die lockere Vergangenheit unter Freunden — und der Baustein, wenn du Erfahrungen (〜たことがある) oder Beispielreihen (〜たり) ausdrücken willst.",
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
      { jp: "昨日映画を見た。", reading: "きのうえいがをみた。", de: "Gestern habe ich einen Film gesehen." },
      { jp: "もう食べた。", reading: "もうたべた。", de: "Ich habe schon gegessen." },
    ],
  },
  {
    id: "c-nai-form",
    category: "Verbformen",
    title: "ない-Form",
    reading: "einfache Verneinung",
    summary: "Die lockere Verneinung (= ません ohne Höflichkeit). Bei godan-Verben wird das -u zu -a + ない; Ausnahme: う wird zu わ. Basis für 〜ないでください und 〜なければなりません.",
    usage: "Die lockere Verneinung unter Freunden, und der Baustein für Bitten wie 〜ないでください.",
    formation: [
      { from: "Godan", to: "-a + ない", note: "飲む→飲まない" },
      { from: "う-Endung", to: "わ + ない", note: "買う→買わない" },
      { from: "Ichidan", to: "る→ない", note: "食べる→食べない" },
      { from: "する / 来る", to: "しない / 来ない", note: "Ausnahmen" },
    ],
    pitfall: "Bei godan-Verben auf う wird う zu わ: 買う→買わない, nicht 買あない.",
    examples: [
      { jp: "お酒を飲まない。", reading: "おさけをのまない。", de: "Ich trinke keinen Alkohol." },
      { jp: "今日は行かない。", reading: "きょうはいかない。", de: "Heute gehe ich nicht." },
    ],
  },
  {
    id: "c-nakatta-form",
    category: "Verbformen",
    title: "なかった-Form",
    reading: "verneinte Vergangenheit",
    summary: "Die lockere verneinte Vergangenheit (= ませんでした). Du nimmst die ない-Form und ersetzt das ない durch なかった.",
    usage: "Wenn du locker sagen willst, dass etwas NICHT passiert ist („bin gestern nicht gekommen“).",
    formation: [
      { from: "ない-Form", to: "ない→なかった", note: "飲まない→飲まなかった" },
    ],
    pitfall: "Es heißt 来なかった, nicht 来ないだった — なかった ersetzt das ない direkt, ohne zusätzliches だ.",
    examples: [
      { jp: "昨日は来なかった。", reading: "きのうはこなかった。", de: "Gestern ist er nicht gekommen." },
      { jp: "宿題をしなかった。", reading: "しゅくだいをしなかった。", de: "Ich habe die Hausaufgaben nicht gemacht." },
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
    summary: "に markiert den Zeitpunkt, das Ziel/Ankunftsort und das Vorhandensein (います/あります). で markiert den Ort, an dem eine Handlung passiert, sowie das Mittel/Werkzeug.",
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
    id: "c-yori",
    category: "Schlüsselmuster",
    title: "〜より (Vergleich)",
    reading: "vergleichen",
    summary: "A は B より … = „A ist … als B“. より markiert den Vergleichsmaßstab („als“). In der Frage „Welches ist …er?“ nutzt man のほうが für die Antwort: B のほうが … .",
    usage: "Wenn du zwei Dinge vergleichst („Der Zug ist schneller als der Bus“).",
    pitfall: "より steht beim Maßstab („als B“), nicht beim Subjekt: AはBより, nicht AよりBは.",
    examples: [
      { jp: "電車はバスより速いです。", reading: "でんしゃはバスよりはやいです。", de: "Der Zug ist schneller als der Bus." },
      { jp: "コーヒーのほうが好きです。", reading: "コーヒーのほうがすきです。", de: "Ich mag eher Kaffee (von beiden)." },
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
    summary: "Hinweiswörter nach Entfernung: この/これ (beim Sprecher), その/それ (beim Hörer), あの/あれ (von beiden entfernt), どの/どれ (welch-). この+Nomen steht vor dem Nomen, これ steht allein.",
    usage: "Wenn du auf etwas zeigst — je nachdem, ob es bei dir, beim Gegenüber oder weit weg ist.",
    table: {
      head: ["+ Nomen", "allein", "Ort"],
      rows: [
        ["この", "これ", "ここ"],
        ["その", "それ", "そこ"],
        ["あの", "あれ", "あそこ"],
      ],
    },
    pitfall: "この braucht ein Nomen dahinter (この本), これ steht allein — nicht これ本.",
    examples: [
      { jp: "この本は私のです。", reading: "このほんはわたしのです。", de: "Dieses Buch (hier) ist meins." },
      { jp: "あれは何ですか。", reading: "あれはなんですか。", de: "Was ist das dort drüben?" },
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

];
