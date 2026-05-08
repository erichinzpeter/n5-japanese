const GRAMMAR = [
  // Copula & Grundsätze
  {
    id: "g001",
    pattern: "〜は〜です",
    explanation: "Höfliche Aussage: 'X ist Y'. は (wa) markiert das Thema, です (desu) = ist/bin/sind.",
    example_jp: "これはペンです。",
    example_de: "Das ist ein Stift.",
    dialogue: [
      { jp: "A: あなたは学生ですか。", reading: "A: あなたはがくせいですか。", de: "A: Sind Sie Student?" },
      { jp: "B: はい、大学生です。", reading: "B: はい、だいがくせいです。", de: "B: Ja, ich bin Uni-Student." }
    ]
  },
  {
    id: "g002",
    pattern: "〜は〜じゃないです / ではありません",
    explanation: "Verneinung von です: 'X ist nicht Y'. じゃない (casual) / ではありません (formal).",
    example_jp: "これはペンじゃないです。",
    example_de: "Das ist kein Stift.",
    dialogue: [
      { jp: "A: これはあなたのかばんですか。", de: "A: Ist das Ihre Tasche?" },
      { jp: "B: いいえ、私のじゃないです。", reading: "B: いいえ、わたしのじゃないです。", de: "B: Nein, das ist nicht meine." }
    ]
  },
  {
    id: "g003",
    pattern: "〜ですか",
    explanation: "Fragesatz: Einfach か (ka) an das Ende hängen, keine Wortstellung ändern.",
    example_jp: "これはペンですか。",
    example_de: "Ist das ein Stift?",
    dialogue: [
      { jp: "A: 田中さんは日本人ですか。", reading: "A: たなかさんはにほんじんですか。", de: "A: Ist Herr Tanaka Japaner?" },
      { jp: "B: はい、そうです。", de: "B: Ja, das stimmt." }
    ]
  },
  {
    id: "g004",
    pattern: "〜でした / 〜じゃなかったです",
    explanation: "Vergangenheit von です: でした = war/waren, じゃなかったです = war nicht.",
    example_jp: "昨日は月曜日でした。",
    example_reading: "きのうはげつようびでした。",
    example_de: "Gestern war Montag.",
    dialogue: [
      { jp: "A: 昨日のパーティーはどうでしたか。", reading: "A: きのうのパーティーはどうでしたか。", de: "A: Wie war die Party gestern?" },
      { jp: "B: 楽しかったです。天気はよくなかったけど。", reading: "B: たのしかったです。てんきはよくなかったけど。", de: "B: Es war schön. Das Wetter war zwar nicht gut, aber." }
    ]
  },

  // Partikel
  {
    id: "g005",
    pattern: "は (Thema-Partikel)",
    explanation: "Markiert das Thema eines Satzes. Was über das Thema ausgesagt wird, folgt danach.",
    example_jp: "私は学生です。",
    example_reading: "わたしはがくせいです。",
    example_de: "Ich bin Student.",
    dialogue: [
      { jp: "A: 山田さんはどこにいますか。", reading: "A: やまださんはどこにいますか。", de: "A: Wo ist Herr Yamada?" },
      { jp: "B: 山田さんは今、会議室にいます。", reading: "B: やまださんはいま、かいぎしつにいます。", de: "B: Herr Yamada ist jetzt im Besprechungsraum." }
    ]
  },
  {
    id: "g006",
    pattern: "が (Subjekt-Partikel)",
    explanation: "Markiert das Subjekt. Betont die Handlung/den Zustand, nicht das Thema. Oft bei Verben wie ある/いる, わかる, すき.",
    example_jp: "猫がいます。",
    example_reading: "ねこがいます。",
    example_de: "Es gibt eine Katze. (Die Katze ist da.)",
    dialogue: [
      { jp: "A: 誰が電話しましたか。", reading: "A: だれがでんわしましたか。", de: "A: Wer hat angerufen?" },
      { jp: "B: 鈴木さんが電話しました。", reading: "B: すずきさんがでんわしました。", de: "B: Frau Suzuki hat angerufen." }
    ]
  },
  {
    id: "g007",
    pattern: "を (Objekt-Partikel)",
    explanation: "Markiert das direkte Objekt einer transitiven Handlung.",
    example_jp: "本を読みます。",
    example_reading: "ほんをよみます。",
    example_de: "Ich lese ein Buch.",
    dialogue: [
      { jp: "A: 何を飲みますか。", reading: "A: なにをのみますか。", de: "A: Was möchten Sie trinken?" },
      { jp: "B: コーヒーをください。", de: "B: Einen Kaffee bitte." }
    ]
  },
  {
    id: "g008",
    pattern: "に (Richtung / Zeit / Empfänger)",
    explanation: "1) Richtung/Ziel bei gehen/kommen. 2) Zeitpunkt. 3) Empfänger bei geben/schicken. 4) Existenz-Ort bei ある/いる.",
    example_jp: "学校に行きます。/ 三時に起きます。",
    example_reading: "がっこうにいきます。／さんじにおきます。",
    example_de: "Ich gehe zur Schule. / Ich stehe um 3 Uhr auf.",
    dialogue: [
      { jp: "A: 毎朝、何時に起きますか。", reading: "A: まいあさ、なんじにおきますか。", de: "A: Um wie viel Uhr stehen Sie jeden Morgen auf?" },
      { jp: "B: 六時半に起きます。", reading: "B: ろくじはんにおきます。", de: "B: Ich stehe um halb sieben auf." }
    ]
  },
  {
    id: "g009",
    pattern: "で (Ort der Handlung / Mittel)",
    explanation: "1) Ort, wo eine Handlung stattfindet. 2) Mittel/Werkzeug/Verkehrsmittel/Sprache.",
    example_jp: "図書館で勉強します。/ 電車で行きます。",
    example_reading: "としょかんでべんきょうします。／でんしゃでいきます。",
    example_de: "Ich lerne in der Bibliothek. / Ich fahre mit dem Zug.",
    dialogue: [
      { jp: "A: どこで昼ごはんを食べますか。", reading: "A: どこでひるごはんをたべますか。", de: "A: Wo essen Sie zu Mittag?" },
      { jp: "B: 会社の近くのカフェで食べます。", reading: "B: かいしゃのちかくのカフェでたべます。", de: "B: Ich esse in einem Café nahe der Firma." }
    ]
  },
  {
    id: "g010",
    pattern: "の (Possessiv / Nomen-Modifikator)",
    explanation: "Verbindet zwei Nomen. Das erste modifiziert das zweite, oft wie 's im Deutschen.",
    example_jp: "田中さんの本です。",
    example_reading: "たなかさんのほんです。",
    example_de: "Das ist Tanakas Buch.",
    dialogue: [
      { jp: "A: これは誰のかさですか。", reading: "A: これはだれのかさですか。", de: "A: Wessen Regenschirm ist das?" },
      { jp: "B: 先生のかさです。", reading: "B: せんせいのかさです。", de: "B: Das ist der Regenschirm des Lehrers." }
    ]
  },
  {
    id: "g011",
    pattern: "へ (Richtungs-Partikel)",
    explanation: "Zeigt Richtung an (wohin). Oft austauschbar mit に bei Bewegungsverben.",
    example_jp: "東京へ行きます。",
    example_reading: "とうきょうへいきます。",
    example_de: "Ich gehe nach Tokio.",
    dialogue: [
      { jp: "A: 週末、どこへ行きますか。", reading: "A: しゅうまつ、どこへいきますか。", de: "A: Wohin gehen Sie am Wochenende?" },
      { jp: "B: 友達と海へ行きます。", reading: "B: ともだちとうみへいきます。", de: "B: Ich fahre mit einem Freund ans Meer." }
    ]
  },
  {
    id: "g012",
    pattern: "と (und / mit)",
    explanation: "1) Verbindet Nomen vollständig: 'A und B'. 2) 'zusammen mit' einer Person.",
    example_jp: "コーヒーとケーキを食べます。/ 友達と行きます。",
    example_reading: "コーヒーとケーキをたべます。／ともだちといきます。",
    example_de: "Ich esse Kaffee und Kuchen. / Ich gehe mit einem Freund.",
    dialogue: [
      { jp: "A: 誰と映画を見ましたか。", reading: "A: だれとえいがをみましたか。", de: "A: Mit wem haben Sie den Film gesehen?" },
      { jp: "B: 姉と見ました。", reading: "B: あねとみました。", de: "B: Ich habe ihn mit meiner Schwester gesehen." }
    ]
  },
  {
    id: "g013",
    pattern: "も (auch / ebenfalls)",
    explanation: "Ersetzt は oder が: 'auch X'. Zeigt, dass dasselbe auch für X gilt.",
    example_jp: "私も学生です。",
    example_reading: "わたしもがくせいです。",
    example_de: "Ich bin auch Student.",
    dialogue: [
      { jp: "A: 私はラーメンが好きです。", reading: "A: わたしはラーメンがすきです。", de: "A: Ich mag Ramen." },
      { jp: "B: 私も大好きです！", reading: "B: わたしもだいすきです！", de: "B: Ich auch — sehr sogar!" }
    ]
  },
  {
    id: "g014",
    pattern: "から〜まで (von ... bis ...)",
    explanation: "から = von (Startpunkt), まで = bis (Endpunkt). Gilt für Zeit und Ort.",
    example_jp: "月曜日から金曜日まで働きます。",
    example_reading: "げつようびからきんようびまではたらきます。",
    example_de: "Ich arbeite von Montag bis Freitag.",
    dialogue: [
      { jp: "A: 仕事は何時から何時までですか。", reading: "A: しごとはなんじからなんじまでですか。", de: "A: Von wie viel Uhr bis wie viel Uhr arbeiten Sie?" },
      { jp: "B: 九時から六時までです。", reading: "B: くじからろくじまでです。", de: "B: Von 9 bis 18 Uhr." }
    ]
  },
  {
    id: "g015",
    pattern: "や〜など (A, B usw.)",
    explanation: "Zählt Beispiele aus einer nicht erschöpfenden Liste auf. Wie 'A, B und so weiter'.",
    example_jp: "りんごやバナナなどを買いました。",
    example_reading: "りんごやバナナなどをかいました。",
    example_de: "Ich habe Äpfel, Bananen usw. gekauft.",
    dialogue: [
      { jp: "A: 冷蔵庫に何がありますか。", reading: "A: れいぞうこになにがありますか。", de: "A: Was ist im Kühlschrank?" },
      { jp: "B: 牛乳やたまごやチーズなどがあります。", reading: "B: ぎゅうにゅうやたまごやチーズなどがあります。", de: "B: Milch, Eier, Käse und so weiter." }
    ]
  },

  // Demonstrativpronomen
  {
    id: "g016",
    pattern: "こ/そ/あ/ど — これ・それ・あれ・どれ",
    explanation: "Zeigepronomen für Dinge: これ (dieses hier) / それ (das dort bei dir) / あれ (jenes dort drüben) / どれ (welches?).",
    example_jp: "これは何ですか。",
    example_reading: "これはなんですか。",
    example_de: "Was ist das (hier)?",
    dialogue: [
      { jp: "A: あれは何ですか。", reading: "A: あれはなんですか。", de: "A: Was ist das dort drüben?" },
      { jp: "B: あれは富士山です。", reading: "B: あれはふじさんです。", de: "B: Das ist der Fuji." }
    ]
  },
  {
    id: "g017",
    pattern: "この・その・あの・どの + Nomen",
    explanation: "Demonstrativadjektive: stehen vor einem Nomen. この本 = dieses Buch.",
    example_jp: "この本は面白いです。",
    example_reading: "このほんはおもしろいです。",
    example_de: "Dieses Buch ist interessant.",
    dialogue: [
      { jp: "A: どのかばんが好きですか。", reading: "A: どのかばんがすきですか。", de: "A: Welche Tasche mögen Sie?" },
      { jp: "B: そのかばんが好きです。", reading: "B: そのかばんがすきです。", de: "B: Ich mag diese Tasche (dort bei Ihnen)." }
    ]
  },
  {
    id: "g018",
    pattern: "ここ・そこ・あそこ・どこ",
    explanation: "Demonstrativpronomen für Orte: ここ (hier) / そこ (dort/bei dir) / あそこ (dort drüben) / どこ (wo?).",
    example_jp: "トイレはどこですか。",
    example_de: "Wo ist das WC?",
    dialogue: [
      { jp: "A: すみません、駅はどこですか。", reading: "A: すみません、えきはどこですか。", de: "A: Entschuldigung, wo ist der Bahnhof?" },
      { jp: "B: あそこです。信号を右に曲がってください。", reading: "B: あそこです。しんごうをみぎにまがってください。", de: "B: Dort drüben. Biegen Sie an der Ampel rechts ab." }
    ]
  },

  // Existenz
  {
    id: "g019",
    pattern: "〜に〜があります / います",
    explanation: "Existenz ausdrücken: があります für Dinge/Pflanzen, がいます für Personen/Tiere.",
    example_jp: "机の上に本があります。/ 部屋に猫がいます。",
    example_reading: "つくえのうえにほんがあります。／へやにねこがいます。",
    example_de: "Auf dem Tisch liegt ein Buch. / Im Zimmer ist eine Katze.",
    dialogue: [
      { jp: "A: この近くにコンビニがありますか。", reading: "A: このちかくにコンビニがありますか。", de: "A: Gibt es hier in der Nähe einen Convenience Store?" },
      { jp: "B: はい、駅の前にあります。", reading: "B: はい、えきのまえにあります。", de: "B: Ja, vor dem Bahnhof gibt es einen." }
    ]
  },
  {
    id: "g020",
    pattern: "〜は〜にあります / います",
    explanation: "Ort von Dingen/Personen angeben: 'X ist an/bei Y'.",
    example_jp: "本は机の上にあります。",
    example_reading: "ほんはつくえのうえにあります。",
    example_de: "Das Buch ist auf dem Tisch.",
    dialogue: [
      { jp: "A: リモコンはどこにありますか。", de: "A: Wo ist die Fernbedienung?" },
      { jp: "B: ソファの下にあります。", reading: "B: ソファのしたにあります。", de: "B: Sie ist unter dem Sofa." }
    ]
  },

  // Höfliche Verben (ます-Form)
  {
    id: "g021",
    pattern: "〜ます / 〜ません (höfliche Gegenwart/Zukunft)",
    explanation: "Höfliche Verbform für Gegenwart und Zukunft. ます = positiv, ません = negativ.",
    example_jp: "毎日日本語を勉強します。/ お酒を飲みません。",
    example_reading: "まいにちにほんごをべんきょうします。／おさけをのみません。",
    example_de: "Ich lerne jeden Tag Japanisch. / Ich trinke keinen Alkohol.",
    dialogue: [
      { jp: "A: お酒を飲みますか。", reading: "A: おさけをのみますか。", de: "A: Trinken Sie Alkohol?" },
      { jp: "B: いいえ、飲みません。お茶が好きです。", reading: "B: いいえ、のみません。おちゃがすきです。", de: "B: Nein, ich trinke keinen. Ich mag Tee lieber." }
    ]
  },
  {
    id: "g022",
    pattern: "〜ました / 〜ませんでした (höfliche Vergangenheit)",
    explanation: "Höfliche Vergangenheitsform. ました = tat, ませんでした = tat nicht.",
    example_jp: "昨日映画を見ました。",
    example_reading: "きのうえいがをみました。",
    example_de: "Gestern habe ich einen Film gesehen.",
    dialogue: [
      { jp: "A: 昨日、宿題をしましたか。", reading: "A: きのう、しゅくだいをしましたか。", de: "A: Haben Sie gestern die Hausaufgaben gemacht?" },
      { jp: "B: すみません、しませんでした。", de: "B: Entschuldigung, ich habe sie nicht gemacht." }
    ]
  },

  // Einladung & Vorschlag
  {
    id: "g023",
    pattern: "〜ませんか (Einladung: Wollen wir nicht ...?)",
    explanation: "Höfliche Einladung oder Vorschlag. Wie 'Wollen Sie nicht...?' / 'Wie wäre es mit...?'",
    example_jp: "一緒に映画を見ませんか。",
    example_reading: "いっしょにえいがをみませんか。",
    example_de: "Wollen wir nicht zusammen einen Film sehen?",
    dialogue: [
      { jp: "A: 一緒にランチを食べませんか。", reading: "A: いっしょにランチをたべませんか。", de: "A: Wollen wir nicht zusammen Mittagessen?" },
      { jp: "B: いいですね！どこに行きますか。", reading: "B: いいですね！どこにいきますか。", de: "B: Gerne! Wohin gehen wir?" }
    ]
  },
  {
    id: "g024",
    pattern: "〜ましょう / 〜ましょうか (Vorschlag: Lass uns ...)",
    explanation: "Vorschlag, etwas gemeinsam zu tun. ましょう = Lass uns!, ましょうか = Soll ich / Wollen wir?",
    example_jp: "始めましょう！/ 手伝いましょうか。",
    example_reading: "はじめましょう！／てつだいましょうか。",
    example_de: "Fangen wir an! / Soll ich helfen?",
    dialogue: [
      { jp: "A: 荷物、持ちましょうか。", reading: "A: にもつ、もちましょうか。", de: "A: Soll ich das Gepäck tragen?" },
      { jp: "B: ありがとうございます。お願いします。", reading: "B: ありがとうございます。おねがいします。", de: "B: Danke schön. Ja, bitte." }
    ]
  },

  // て-Form Verwendungen
  {
    id: "g025",
    pattern: "〜てください (Bitte tun Sie ...)",
    explanation: "Höfliche Bitte oder Aufforderung: て-Form des Verbs + ください.",
    example_jp: "ゆっくり話してください。",
    example_reading: "ゆっくりはなしてください。",
    example_de: "Bitte sprechen Sie langsam.",
    dialogue: [
      { jp: "A: すみません、もう一度言ってください。", reading: "A: すみません、もういちどいってください。", de: "A: Entschuldigung, sagen Sie das bitte noch einmal." },
      { jp: "B: もちろんです。", de: "B: Natürlich." }
    ]
  },
  {
    id: "g026",
    pattern: "〜てもいいですか (Darf ich ...?)",
    explanation: "Um Erlaubnis bitten: 'Ist es in Ordnung, wenn ich...?'",
    example_jp: "ここに座ってもいいですか。",
    example_reading: "ここにすわってもいいですか。",
    example_de: "Darf ich hier sitzen?",
    dialogue: [
      { jp: "A: 窓を開けてもいいですか。", reading: "A: まどをあけてもいいですか。", de: "A: Darf ich das Fenster öffnen?" },
      { jp: "B: はい、どうぞ。", de: "B: Ja, bitte sehr." }
    ]
  },
  {
    id: "g027",
    pattern: "〜てはいけません (Man darf nicht ...)",
    explanation: "Verbot ausdrücken: 'Es ist verboten zu...' / 'Man darf nicht...'",
    example_jp: "ここで写真を撮ってはいけません。",
    example_reading: "ここでしゃしんをとってはいけません。",
    example_de: "Hier darf man keine Fotos machen.",
    dialogue: [
      { jp: "A: ここでたばこを吸ってもいいですか。", reading: "A: ここでたばこをすってもいいですか。", de: "A: Darf ich hier rauchen?" },
      { jp: "B: すみません、ここでは吸ってはいけません。", reading: "B: すみません、ここではすってはいけません。", de: "B: Tut mir leid, hier darf man nicht rauchen." }
    ]
  },
  {
    id: "g028",
    pattern: "〜ないでください (Bitte nicht ...)",
    explanation: "Negative Bitte: Nai-Form + でください. Bitten, etwas zu unterlassen.",
    example_jp: "ここで食べないでください。",
    example_reading: "ここでたべないでください。",
    example_de: "Bitte essen Sie hier nicht.",
    dialogue: [
      { jp: "A: 授業中、スマホを使わないでください。", reading: "A: じゅぎょうちゅう、スマホをつかわないでください。", de: "A: Bitte benutzen Sie das Handy nicht während des Unterrichts." },
      { jp: "B: わかりました。すみません。", de: "B: Verstanden. Entschuldigung." }
    ]
  },
  {
    id: "g029",
    pattern: "〜ている (gerade tun / Zustand)",
    explanation: "1) Andauernde Handlung (gerade): 食べている = isst gerade. 2) Resultierender Zustand: 結婚している = ist verheiratet.",
    example_jp: "今、テレビを見ています。",
    example_reading: "いま、テレビをみています。",
    example_de: "Ich sehe gerade fern.",
    dialogue: [
      { jp: "A: 今、何をしていますか。", reading: "A: いま、なにをしていますか。", de: "A: Was machen Sie gerade?" },
      { jp: "B: 日本語を勉強しています。", reading: "B: にほんごをべんきょうしています。", de: "B: Ich lerne gerade Japanisch." }
    ]
  },
  {
    id: "g030",
    pattern: "〜て + Verb (Handlungsfolge)",
    explanation: "Mehrere Handlungen verbinden: 'X tun und dann Y tun'. Reihenfolge ist wichtig.",
    example_jp: "朝ごはんを食べて、学校に行きます。",
    example_reading: "あさごはんをたべて、がっこうにいきます。",
    example_de: "Ich esse Frühstück und gehe dann zur Schule.",
    dialogue: [
      { jp: "A: 毎朝、何をしますか。", reading: "A: まいあさ、なにをしますか。", de: "A: Was machen Sie jeden Morgen?" },
      { jp: "B: シャワーを浴びて、朝ごはんを食べて、出かけます。", reading: "B: シャワーをあびて、あさごはんをたべて、でかけます。", de: "B: Ich dusche, esse dann Frühstück und gehe aus dem Haus." }
    ]
  },

  // Wunsch & Absicht
  {
    id: "g031",
    pattern: "〜たい (möchte ... tun)",
    explanation: "Eigenen Wunsch ausdrücken: ます-Stamm + たい. Konjugiert wie ein i-Adjektiv.",
    example_jp: "日本に行きたいです。",
    example_reading: "にほんにいきたいです。",
    example_de: "Ich möchte nach Japan gehen.",
    dialogue: [
      { jp: "A: 将来、何をしたいですか。", reading: "A: しょうらい、なにをしたいですか。", de: "A: Was möchten Sie in Zukunft machen?" },
      { jp: "B: 日本に住みたいです。", reading: "B: にほんにすみたいです。", de: "B: Ich möchte in Japan leben." }
    ]
  },
  {
    id: "g032",
    pattern: "〜に行きます / 来ます / 帰ります",
    reading: "〜にいきます / きます / かえります",
    explanation: "Zweck einer Bewegung ausdrücken: Verbstamm + に + 行く/来る/帰る.",
    example_jp: "ご飯を食べに行きます。",
    example_reading: "ごはんをたべにいきます。",
    example_de: "Ich gehe Essen (um zu essen).",
    dialogue: [
      { jp: "A: どこに行くんですか。", reading: "A: どこにいくんですか。", de: "A: Wohin gehen Sie?" },
      { jp: "B: 本を買いに書店に行きます。", reading: "B: ほんをかいにしょてんにいきます。", de: "B: Ich gehe in die Buchhandlung, um ein Buch zu kaufen." }
    ]
  },

  // Begründung & Kontrast
  {
    id: "g033",
    pattern: "〜から (weil / da — Begründung)",
    explanation: "Begründung angeben: [Grund]から、[Ergebnis]. Steht nach dem Grund-Satz.",
    example_jp: "眠いから、寝ます。",
    example_reading: "ねむいから、ねます。",
    example_de: "Da ich müde bin, gehe ich schlafen.",
    dialogue: [
      { jp: "A: どうして早く帰るんですか。", reading: "A: どうしてはやくかえるんですか。", de: "A: Warum gehen Sie früh nach Hause?" },
      { jp: "B: 子供が熱があるから、早く帰ります。", reading: "B: こどもがねつがあるから、はやくかえります。", de: "B: Weil mein Kind Fieber hat, gehe ich früh." }
    ]
  },
  {
    id: "g034",
    pattern: "〜が / 〜けど (aber / jedoch)",
    explanation: "Kontrast oder Einschränkung ausdrücken. が (neutral/förmlich), けど (umgangssprachlich).",
    example_jp: "日本語は好きですが、難しいです。",
    example_reading: "にほんごはすきですが、むずかしいです。",
    example_de: "Ich mag Japanisch, aber es ist schwierig.",
    dialogue: [
      { jp: "A: その映画はどうでしたか。", reading: "A: そのえいがはどうでしたか。", de: "A: Wie war der Film?" },
      { jp: "B: 面白かったけど、ちょっと長かったです。", reading: "B: おもしろかったけど、ちょっとながかったです。", de: "B: Interessant, aber etwas zu lang." }
    ]
  },

  // Zeit-Ausdrücke
  {
    id: "g035",
    pattern: "〜前に (bevor / vor)",
    reading: "〜まえに",
    explanation: "Zeitliche Abfolge: 'vor X'. Verb im Wörterbuch-Form + 前に.",
    example_jp: "寝る前に、歯を磨きます。",
    example_reading: "ねるまえに、はをみがきます。",
    example_de: "Bevor ich schlafe, putze ich die Zähne.",
    dialogue: [
      { jp: "A: 寝る前に何かしますか。", reading: "A: ねるまえになにかしますか。", de: "A: Machen Sie etwas, bevor Sie schlafen?" },
      { jp: "B: はい、お茶を飲みます。", reading: "B: はい、おちゃをのみます。", de: "B: Ja, ich trinke Tee." }
    ]
  },
  {
    id: "g036",
    pattern: "〜後で / 〜てから (nachdem / danach)",
    reading: "〜あとで / 〜てから",
    explanation: "後で: nach einem Ereignis. てから: direkt danach, Reihenfolge betont.",
    example_jp: "ご飯を食べた後で、散歩します。",
    example_reading: "ごはんをたべたあとで、さんぽします。",
    example_de: "Nachdem ich gegessen habe, mache ich einen Spaziergang.",
    dialogue: [
      { jp: "A: いつ電話しますか。", reading: "A: いつでんわしますか。", de: "A: Wann rufen Sie an?" },
      { jp: "B: 会議が終わってから、電話します。", reading: "B: かいぎがおわってから、でんわします。", de: "B: Ich rufe an, nachdem das Meeting vorbei ist." }
    ]
  },
  {
    id: "g037",
    pattern: "〜ごろ (ungefähr / gegen)",
    explanation: "Ungefähre Zeit oder Menge angeben: 'gegen X Uhr' / 'ungefähr'.",
    example_jp: "七時ごろ、起きます。",
    example_reading: "しちじごろ、おきます。",
    example_de: "Ich stehe ungefähr um 7 Uhr auf.",
    dialogue: [
      { jp: "A: 何時ごろ家に帰りますか。", reading: "A: なんじごろいえにかえりますか。", de: "A: Gegen wie viel Uhr kommen Sie nach Hause?" },
      { jp: "B: 夜七時ごろだと思います。", reading: "B: よるしちじごろだとおもいます。", de: "B: So gegen 19 Uhr, glaube ich." }
    ]
  },

  // Adjektiv-Grammatik
  {
    id: "g038",
    pattern: "い-Adjektiv Konjugation",
    explanation: "い-Adj: Positiv: 高い. Negativ: 高くない. Vergangenheit: 高かった. Neg-Verg: 高くなかった. て-Form: 高くて.",
    example_jp: "このりんごは高くないです。",
    example_reading: "このりんごはたかくないです。",
    example_de: "Dieser Apfel ist nicht teuer.",
    dialogue: [
      { jp: "A: その映画は面白いですか。", reading: "A: そのえいがはおもしろいですか。", de: "A: Ist der Film interessant?" },
      { jp: "B: 面白いですよ。でも、ちょっと怖いです。", reading: "B: おもしろいですよ。でも、ちょっとこわいです。", de: "B: Ja, schon. Aber etwas gruselig." }
    ]
  },
  {
    id: "g039",
    pattern: "な-Adjektiv + です / な + Nomen",
    explanation: "な-Adj: als Prädikat + です. Vor Nomen: Adj + な + Nomen. Negation: じゃない.",
    example_jp: "あの人はきれいです。/ きれいな人です。",
    example_reading: "あのひとはきれいです。／きれいなひとです。",
    example_de: "Diese Person ist schön. / Eine schöne Person.",
    dialogue: [
      { jp: "A: 田中さんはどんな人ですか。", reading: "A: たなかさんはどんなひとですか。", de: "A: Was für ein Mensch ist Frau Tanaka?" },
      { jp: "B: とても親切で、まじめな人です。", reading: "B: とてもしんせつで、まじめなひとです。", de: "B: Sie ist sehr freundlich und gewissenhaft." }
    ]
  },
  {
    id: "g040",
    pattern: "〜は〜より〜です (Vergleich: X ist ... als Y)",
    explanation: "Vergleich zweier Dinge: 'X ist [Adj]-er als Y'. より markiert den Vergleichspunkt.",
    example_jp: "東京は大阪より大きいです。",
    example_reading: "とうきょうはおおさかよりおおきいです。",
    example_de: "Tokio ist größer als Osaka.",
    dialogue: [
      { jp: "A: バスと電車、どちらが速いですか。", reading: "A: バスとでんしゃ、どちらがはやいですか。", de: "A: Was ist schneller, der Bus oder die Bahn?" },
      { jp: "B: 電車はバスより速いです。", reading: "B: でんしゃはバスよりはやいです。", de: "B: Die Bahn ist schneller als der Bus." }
    ]
  },
  {
    id: "g040b",
    pattern: "〜の方が〜より〜 (Präferenz: X ist besser/lieber als Y)",
    reading: "〜のほうが〜より〜",
    explanation: "Drückt Präferenz oder Überlegenheit aus: 'X ist [Adj]-er als Y' / 'X mag ich lieber als Y'. の方が hebt hervor, was bevorzugt wird — の方が steht beim Favoriten, より beim Vergleichsobjekt. Struktur: [Favorit] の方が [Vergleich] より [Adjektiv] です.",
    example_jp: "コーヒーよりお茶の方が好きです。",
    example_reading: "コーヒーよりおちゃのほうがすきです。",
    example_de: "Ich mag Tee lieber als Kaffee.",
    dialogue: [
      { jp: "A: コーヒーとお茶、どちらが好きですか。", reading: "A: コーヒーとおちゃ、どちらがすきですか。", de: "A: Was mögen Sie lieber, Kaffee oder Tee?" },
      { jp: "B: コーヒーよりお茶の方が好きです。", reading: "B: コーヒーよりおちゃのほうがすきです。", de: "B: Ich mag Tee lieber als Kaffee." }
    ]
  },
  {
    id: "g041",
    pattern: "〜の中で〜が一番〜 (Superlativ: am ...sten von allen)",
    reading: "〜のなかで〜がいちばん〜",
    explanation: "Superlativ: 'Von allen X ist Y am [Adj]-sten'. 一番 = Nummer eins / am meisten.",
    example_jp: "果物の中でりんごが一番好きです。",
    example_reading: "くだもののなかでりんごがいちばんすきです。",
    example_de: "Von allen Früchten mag ich Äpfel am liebsten.",
    dialogue: [
      { jp: "A: 四季の中で何が一番好きですか。", reading: "A: しきのなかでなにがいちばんすきですか。", de: "A: Welche Jahreszeit mögen Sie am liebsten?" },
      { jp: "B: 秋が一番好きです。涼しくてきれいですから。", reading: "B: あきがいちばんすきです。すずしくてきれいですから。", de: "B: Ich mag Herbst am liebsten. Weil er kühl und schön ist." }
    ]
  },
  {
    id: "g042",
    pattern: "〜をください (Bitte geben Sie mir ...)",
    explanation: "Etwas bestellen oder bitten: Objekt + をください. In Geschäften und Restaurants gebräuchlich.",
    example_jp: "コーヒーをください。",
    example_de: "Einen Kaffee bitte.",
    dialogue: [
      { jp: "A: いらっしゃいませ。何になさいますか。", reading: "A: いらっしゃいませ。なにになさいますか。", de: "A: Willkommen! Was darf es sein?" },
      { jp: "B: コーヒーとサンドイッチをください。", de: "B: Einen Kaffee und ein Sandwich bitte." }
    ]
  },
  {
    id: "g043",
    pattern: "〜はどうですか (Wie ist/wäre ... ?)",
    explanation: "Nach einer Meinung fragen oder etwas vorschlagen: 'Wie wäre es mit...?'",
    example_jp: "お茶はどうですか。",
    example_reading: "おちゃはどうですか。",
    example_de: "Wie wäre es mit Tee?",
    dialogue: [
      { jp: "A: 少し疲れましたね。休憩はどうですか。", reading: "A: すこしつかれましたね。きゅうけいはどうですか。", de: "A: Sie sehen etwas müde aus. Wie wäre es mit einer Pause?" },
      { jp: "B: いいですね。ありがとうございます。", de: "B: Gute Idee. Danke schön." }
    ]
  },
  {
    id: "g044",
    pattern: "〜だけ (nur / lediglich)",
    explanation: "Einschränkung ausdrücken: 'nur X und nichts anderes'.",
    example_jp: "少しだけ食べます。",
    example_reading: "すこしだけたべます。",
    example_de: "Ich esse nur ein bisschen.",
    dialogue: [
      { jp: "A: もっと食べませんか。", reading: "A: もっとたべませんか。", de: "A: Möchten Sie nicht mehr essen?" },
      { jp: "B: ありがとう。もう少しだけいただきます。", reading: "B: ありがとう。もうすこしだけいただきます。", de: "B: Danke. Ich nehme nur noch ein kleines bisschen." }
    ]
  },
  {
    id: "g045",
    pattern: "数字 + 助数詞 (Zahlen mit Zählwörtern)",
    reading: "すうじ + じょすうし",
    explanation: "Im Japanischen braucht man Zählwörter: 〜本 (zylindrische Dinge), 〜枚 (flache Dinge), 〜個 (kleine Objekte), 〜匹 (kleine Tiere), 〜人 (Personen), 〜台 (Maschinen).",
    example_jp: "えんぴつを三本ください。",
    example_reading: "えんぴつをさんぼんください。",
    example_de: "Bitte drei Bleistifte.",
    dialogue: [
      { jp: "A: 何かお入り用ですか。", reading: "A: なにかおいりようですか。", de: "A: Brauchen Sie etwas?" },
      { jp: "B: えんぴつを二本と、ノートを一冊ください。", reading: "B: えんぴつをにほんと、ノートをいっさつください。", de: "B: Bitte zwei Bleistifte und ein Heft." }
    ]
  },
];
