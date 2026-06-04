const GRAMMAR = [
  // Copula & Grundsätze
  {
    id: "g001",
    pattern: "〜は〜です",
    situation: "Du möchtest jemandem höflich erklären, was etwas ist oder wer jemand ist.",
    explanation: "Höfliche Aussage: 'X ist Y'. は (wa) markiert das Thema, です (desu) = ist/bin/sind.",
    example_jp: "これはペンです。",
    example_de: "Das ist ein Stift.",
    dialogue: [
      { jp: "A: あなたは学生ですか。", reading: "A: あなたはがくせいですか。", de: "A: Sind Sie Student?" },
      { jp: "B: はい、大学生です。", reading: "B: はい、だいがくせいです。", de: "B: Ja, ich bin Uni-Student." }
    ],
    examples: [
      { jp: "私は田中です。", reading: "わたしはたなかです。", de: "Ich bin Tanaka." },
      { jp: "あの人は先生です。", reading: "あのひとはせんせいです。", de: "Diese Person ist Lehrer." },
      { jp: "ここは図書館です。", reading: "ここはとしょかんです。", de: "Das hier ist die Bibliothek." },
      { jp: "今日は月曜日です。", reading: "きょうはげつようびです。", de: "Heute ist Montag." },
      { jp: "私の母は医者です。", reading: "わたしのははいしゃです。", de: "Meine Mutter ist Ärztin." },
      { jp: "それは私のかばんです。", reading: "それはわたしのかばんです。", de: "Das ist meine Tasche." },
      { jp: "山田さんは日本人です。", reading: "やまださんはにほんじんです。", de: "Frau Yamada ist Japanerin." },
      { jp: "あれは新しい車です。", reading: "あれはあたらしいくるまです。", de: "Das dort drüben ist ein neues Auto." }
    ],
    cloze: {
      distractors: ["でした", "ですか", "じゃないです"],
      items: [
        { text: "これはペン＿。", answer: "です", de: "Das ist ein Stift." },
        { text: "私は田中＿。", answer: "です", de: "Ich bin Tanaka." },
        { text: "あの人は先生＿。", answer: "です", de: "Diese Person ist Lehrer." },
        { text: "今日は月曜日＿。", answer: "です", de: "Heute ist Montag." }
      ]
    }
  },
  {
    id: "g002",
    pattern: "〜は〜じゃないです / ではありません",
    situation: "Du möchtest eine falsche Annahme über etwas oder jemanden höflich korrigieren.",
    explanation: "Verneinung von です: 'X ist nicht Y'. じゃない (casual) / ではありません (formal).",
    example_jp: "これはペンじゃないです。",
    example_de: "Das ist kein Stift.",
    dialogue: [
      { jp: "A: これはあなたのかばんですか。", de: "A: Ist das Ihre Tasche?" },
      { jp: "B: いいえ、私のじゃないです。", reading: "B: いいえ、わたしのじゃないです。", de: "B: Nein, das ist nicht meine." }
    ],
    examples: [
      { jp: "私は学生じゃないです。", reading: "わたしはがくせいじゃないです。", de: "Ich bin kein Student." },
      { jp: "あの人は先生ではありません。", reading: "あのひとはせんせいではありません。", de: "Diese Person ist nicht Lehrer." },
      { jp: "これは私の本じゃないです。", reading: "これはわたしのほんじゃないです。", de: "Das ist nicht mein Buch." },
      { jp: "今日は休みじゃないです。", reading: "きょうはやすみじゃないです。", de: "Heute ist nicht frei." },
      { jp: "田中さんは日本人ではありません。", reading: "たなかさんはにほんじんではありません。", de: "Herr Tanaka ist kein Japaner." },
      { jp: "それはお茶じゃないです。", reading: "それはおちゃじゃないです。", de: "Das ist kein Tee." },
      { jp: "ここは駅ではありません。", reading: "ここはえきではありません。", de: "Das hier ist nicht der Bahnhof." },
      { jp: "あれは私の車じゃないです。", reading: "あれはわたしのくるまじゃないです。", de: "Das dort drüben ist nicht mein Auto." }
    ],
    cloze: {
      distractors: ["です", "でした", "ですか"],
      items: [
        { text: "私は学生＿。", answer: "じゃないです", de: "Ich bin kein Student." },
        { text: "これは私の本＿。", answer: "じゃないです", de: "Das ist nicht mein Buch." },
        { text: "今日は休み＿。", answer: "じゃないです", de: "Heute ist nicht frei." },
        { text: "それはお茶＿。", answer: "じゃないです", de: "Das ist kein Tee." }
      ]
    }
  },
  {
    id: "g003",
    pattern: "〜ですか",
    situation: "Du möchtest jemanden höflich nach etwas fragen.",
    explanation: "Fragesatz: Einfach か (ka) an das Ende hängen, keine Wortstellung ändern.",
    example_jp: "これはペンですか。",
    example_de: "Ist das ein Stift?",
    dialogue: [
      { jp: "A: 田中さんは日本人ですか。", reading: "A: たなかさんはにほんじんですか。", de: "A: Ist Herr Tanaka Japaner?" },
      { jp: "B: はい、そうです。", de: "B: Ja, das stimmt." }
    ],
    examples: [
      { jp: "あなたは学生ですか。", reading: "あなたはがくせいですか。", de: "Sind Sie Student?" },
      { jp: "これはあなたの本ですか。", reading: "これはあなたのほんですか。", de: "Ist das Ihr Buch?" },
      { jp: "トイレはあそこですか。", reading: "トイレはあそこですか。", de: "Ist die Toilette dort drüben?" },
      { jp: "今日は水曜日ですか。", reading: "きょうはすいようびですか。", de: "Ist heute Mittwoch?" },
      { jp: "あの人は先生ですか。", reading: "あのひとはせんせいですか。", de: "Ist diese Person Lehrer?" },
      { jp: "これはお茶ですか。", reading: "これはおちゃですか。", de: "Ist das Tee?" },
      { jp: "山田さんは元気ですか。", reading: "やまださんはげんきですか。", de: "Geht es Frau Yamada gut?" },
      { jp: "あれは富士山ですか。", reading: "あれはふじさんですか。", de: "Ist das dort drüben der Fuji?" }
    ],
    cloze: {
      distractors: ["です", "でした", "じゃないです"],
      items: [
        { text: "あなたは学生＿。", answer: "ですか", de: "Sind Sie Student?" },
        { text: "これはあなたの本＿。", answer: "ですか", de: "Ist das Ihr Buch?" },
        { text: "今日は水曜日＿。", answer: "ですか", de: "Ist heute Mittwoch?" },
        { text: "あれは富士山＿。", answer: "ですか", de: "Ist das der Fuji?" }
      ]
    }
  },
  {
    id: "g004",
    pattern: "〜でした / 〜じゃなかったです",
    situation: "Du möchtest über etwas sprechen, das früher so war, aber jetzt anders sein könnte.",
    explanation: "Vergangenheit von です: でした = war/waren, じゃなかったです = war nicht.",
    example_jp: "昨日は月曜日でした。",
    example_reading: "きのうはげつようびでした。",
    example_de: "Gestern war Montag.",
    dialogue: [
      { jp: "A: 昨日のパーティーはどうでしたか。", reading: "A: きのうのパーティーはどうでしたか。", de: "A: Wie war die Party gestern?" },
      { jp: "B: 楽しかったです。天気はよくなかったけど。", reading: "B: たのしかったです。てんきはよくなかったけど。", de: "B: Es war schön. Das Wetter war zwar nicht gut, aber." }
    ],
    examples: [
      { jp: "昨日は雨でした。", reading: "きのうはあめでした。", de: "Gestern war es regnerisch." },
      { jp: "先週は休みでした。", reading: "せんしゅうはやすみでした。", de: "Letzte Woche war frei." },
      { jp: "あの店は休みじゃなかったです。", reading: "あのみせはやすみじゃなかったです。", de: "Der Laden war nicht geschlossen." },
      { jp: "彼は学生でした。", reading: "かれはがくせいでした。", de: "Er war Student." },
      { jp: "今朝は寒かったです。父は元気でした。", reading: "けさはさむかったです。ちちはげんきでした。", de: "Heute Morgen war es kalt. Mein Vater war munter." },
      { jp: "テストは簡単じゃなかったです。", reading: "テストはかんたんじゃなかったです。", de: "Der Test war nicht einfach." },
      { jp: "おとといは日曜日でした。", reading: "おとといはにちようびでした。", de: "Vorgestern war Sonntag." },
      { jp: "あの映画は面白くなかったです。", reading: "あのえいがはおもしろくなかったです。", de: "Der Film war nicht interessant." }
    ],
    cloze: {
      distractors: ["です", "じゃないです", "ですか"],
      items: [
        { text: "昨日は雨＿。", answer: "でした", de: "Gestern war es regnerisch." },
        { text: "先週は休み＿。", answer: "でした", de: "Letzte Woche war frei." },
        { text: "おとといは日曜日＿。", answer: "でした", de: "Vorgestern war Sonntag." },
        { text: "テストは簡単＿。", answer: "じゃなかったです", distractors: ["でした", "です", "じゃないです"], de: "Der Test war nicht einfach." },
        { text: "あの店は休み＿。", answer: "じゃなかったです", distractors: ["でした", "です", "じゃないです"], de: "Der Laden war nicht geschlossen." }
      ]
    }
  },

  // Partikel
  {
    id: "g005",
    pattern: "は (Thema-Partikel)",
    situation: "Du möchtest klarstellen, worüber du sprichst, bevor du eine Aussage darüber machst.",
    explanation: "Markiert das Thema eines Satzes. Was über das Thema ausgesagt wird, folgt danach.",
    example_jp: "私は学生です。",
    example_reading: "わたしはがくせいです。",
    example_de: "Ich bin Student.",
    dialogue: [
      { jp: "A: 山田さんはどこにいますか。", reading: "A: やまださんはどこにいますか。", de: "A: Wo ist Herr Yamada?" },
      { jp: "B: 山田さんは今、会議室にいます。", reading: "B: やまださんはいま、かいぎしつにいます。", de: "B: Herr Yamada ist jetzt im Besprechungsraum." }
    ],
    examples: [
      { jp: "私は日本語を勉強します。", reading: "わたしはにほんごをべんきょうします。", de: "Ich lerne Japanisch." },
      { jp: "今日は天気がいいです。", reading: "きょうはてんきがいいです。", de: "Heute ist das Wetter gut." },
      { jp: "この本は面白いです。", reading: "このほんはおもしろいです。", de: "Dieses Buch ist interessant." },
      { jp: "私の父は会社員です。", reading: "わたしのちちはかいしゃいんです。", de: "Mein Vater ist Angestellter." },
      { jp: "あの人は田中さんです。", reading: "あのひとはたなかさんです。", de: "Diese Person ist Herr Tanaka." },
      { jp: "象は鼻が長いです。", reading: "ぞうははながながいです。", de: "Elefanten haben eine lange Nase." },
      { jp: "私は毎朝コーヒーを飲みます。", reading: "わたしはまいあさコーヒーをのみます。", de: "Ich trinke jeden Morgen Kaffee." },
      { jp: "東京は人が多いです。", reading: "とうきょうはひとがおおいです。", de: "In Tokio gibt es viele Menschen." }
    ],
    cloze: {
      distractors: ["が", "を", "に"],
      items: [
        { text: "私＿日本語を勉強します。", answer: "は", de: "Ich lerne Japanisch." },
        { text: "今日＿天気がいいです。", answer: "は", de: "Heute ist das Wetter gut." },
        { text: "この本＿面白いです。", answer: "は", de: "Dieses Buch ist interessant." },
        { text: "私の父＿会社員です。", answer: "は", de: "Mein Vater ist Angestellter." }
      ]
    }
  },
  {
    id: "g006",
    pattern: "が (Subjekt-Partikel)",
    situation: "Du möchtest betonen, wer genau gehandelt hat oder wo genau etwas existiert.",
    explanation: "Markiert das Subjekt. Betont die Handlung/den Zustand, nicht das Thema. Oft bei Verben wie ある/いる, わかる, すき.",
    example_jp: "猫がいます。",
    example_reading: "ねこがいます。",
    example_de: "Es gibt eine Katze. (Die Katze ist da.)",
    dialogue: [
      { jp: "A: 誰が電話しましたか。", reading: "A: だれがでんわしましたか。", de: "A: Wer hat angerufen?" },
      { jp: "B: 鈴木さんが電話しました。", reading: "B: すずきさんがでんわしました。", de: "B: Frau Suzuki hat angerufen." }
    ],
    examples: [
      { jp: "庭に犬がいます。", reading: "にわにいぬがいます。", de: "Im Garten ist ein Hund." },
      { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
      { jp: "私は日本語が分かります。", reading: "わたしはにほんごがわかります。", de: "Ich verstehe Japanisch." },
      { jp: "山田さんがケーキを作りました。", reading: "やまださんがケーキをつくりました。", de: "Frau Yamada hat einen Kuchen gemacht." },
      { jp: "私はすしが好きです。", reading: "わたしはすしがすきです。", de: "Ich mag Sushi." },
      { jp: "空に星がたくさんあります。", reading: "そらにほしがたくさんあります。", de: "Am Himmel sind viele Sterne." },
      { jp: "誰が来ましたか。", reading: "だれがきましたか。", de: "Wer ist gekommen?" },
      { jp: "私は時間がありません。", reading: "わたしはじかんがありません。", de: "Ich habe keine Zeit." }
    ],
    cloze: {
      distractors: ["は", "を", "に"],
      items: [
        { text: "庭に犬＿います。", answer: "が", de: "Im Garten ist ein Hund." },
        { text: "机の上に本＿あります。", answer: "が", de: "Auf dem Tisch liegt ein Buch." },
        { text: "私は日本語＿分かります。", answer: "が", de: "Ich verstehe Japanisch." },
        { text: "誰＿来ましたか。", answer: "が", de: "Wer ist gekommen?" }
      ]
    }
  },
  {
    id: "g007",
    pattern: "を (Objekt-Partikel)",
    situation: "Du möchtest ausdrücken, was direkt von einer Handlung betroffen ist.",
    explanation: "Markiert das direkte Objekt einer transitiven Handlung.",
    example_jp: "本を読みます。",
    example_reading: "ほんをよみます。",
    example_de: "Ich lese ein Buch.",
    dialogue: [
      { jp: "A: 何を飲みますか。", reading: "A: なにをのみますか。", de: "A: Was möchten Sie trinken?" },
      { jp: "B: コーヒーをください。", de: "B: Einen Kaffee bitte." }
    ],
    examples: [
      { jp: "毎朝、新聞を読みます。", reading: "まいあさ、しんぶんをよみます。", de: "Jeden Morgen lese ich die Zeitung." },
      { jp: "りんごを食べます。", reading: "りんごをたべます。", de: "Ich esse einen Apfel." },
      { jp: "テレビを見ます。", reading: "テレビをみます。", de: "Ich sehe fern." },
      { jp: "手紙を書きました。", reading: "てがみをかきました。", de: "Ich habe einen Brief geschrieben." },
      { jp: "音楽を聞きます。", reading: "おんがくをききます。", de: "Ich höre Musik." },
      { jp: "日本語を勉強します。", reading: "にほんごをべんきょうします。", de: "Ich lerne Japanisch." },
      { jp: "水を飲みます。", reading: "みずをのみます。", de: "Ich trinke Wasser." },
      { jp: "ドアを開けました。", reading: "ドアをあけました。", de: "Ich habe die Tür geöffnet." }
    ],
    cloze: {
      distractors: ["は", "が", "に"],
      items: [
        { text: "りんご＿食べます。", answer: "を", de: "Ich esse einen Apfel." },
        { text: "テレビ＿見ます。", answer: "を", de: "Ich sehe fern." },
        { text: "水＿飲みます。", answer: "を", de: "Ich trinke Wasser." },
        { text: "音楽＿聞きます。", answer: "を", de: "Ich höre Musik." }
      ]
    }
  },
  {
    id: "g008",
    pattern: "に (Richtung / Zeit / Empfänger)",
    situation: "Du möchtest sagen, wohin du gehst, zu welchem Zeitpunkt etwas passiert, oder wem du etwas gibst.",
    explanation: "1) Richtung/Ziel bei gehen/kommen. 2) Zeitpunkt. 3) Empfänger bei geben/schicken. 4) Existenz-Ort bei ある/いる. Für Richtung/Ziel (Fall 1) ist に oft mit へ austauschbar — へ wird in dieser Rolle „e“ gesprochen: 学校に行きます = 学校へ行きます.",
    example_jp: "学校に行きます。/ 三時に起きます。",
    example_reading: "がっこうにいきます。／さんじにおきます。",
    example_de: "Ich gehe zur Schule. / Ich stehe um 3 Uhr auf.",
    dialogue: [
      { jp: "A: 毎朝、何時に起きますか。", reading: "A: まいあさ、なんじにおきますか。", de: "A: Um wie viel Uhr stehen Sie jeden Morgen auf?" },
      { jp: "B: 六時半に起きます。", reading: "B: ろくじはんにおきます。", de: "B: Ich stehe um halb sieben auf." }
    ],
    examples: [
      { jp: "学校に行きます。", reading: "がっこうにいきます。", de: "Ich gehe zur Schule." },
      { jp: "学校へ行きます。", reading: "がっこうへいきます。", de: "Ich gehe zur Schule. (Richtung mit へ statt に)" },
      { jp: "七時に起きます。", reading: "しちじにおきます。", de: "Ich stehe um 7 Uhr auf." },
      { jp: "友達に手紙を書きます。", reading: "ともだちにてがみをかきます。", de: "Ich schreibe einem Freund einen Brief." },
      { jp: "日曜日に映画を見ます。", reading: "にちようびにえいがをみます。", de: "Am Sonntag sehe ich einen Film." },
      { jp: "母にプレゼントをあげます。", reading: "ははにプレゼントをあげます。", de: "Ich gebe meiner Mutter ein Geschenk." },
      { jp: "部屋に猫がいます。", reading: "へやにねこがいます。", de: "Im Zimmer ist eine Katze." },
      { jp: "九時に家に帰ります。", reading: "くじにいえにかえります。", de: "Ich komme um 9 Uhr nach Hause." },
      { jp: "先生に質問します。", reading: "せんせいにしつもんします。", de: "Ich stelle dem Lehrer eine Frage." }
    ],
    cloze: {
      distractors: ["で", "を", "は"],
      items: [
        { text: "七時＿起きます。", answer: "に", de: "Ich stehe um 7 Uhr auf." },
        { text: "友達＿手紙を書きます。", answer: "に", de: "Ich schreibe einem Freund einen Brief." },
        { text: "部屋＿猫がいます。", answer: "に", de: "Im Zimmer ist eine Katze." },
        { text: "先生＿質問します。", answer: "に", de: "Ich stelle dem Lehrer eine Frage." }
      ]
    }
  },
  {
    id: "g009",
    pattern: "で (Ort der Handlung / Mittel)",
    situation: "Du möchtest sagen, wo eine Handlung stattfindet oder mit welchem Mittel du etwas tust.",
    explanation: "1) Ort, wo eine Handlung stattfindet. 2) Mittel/Werkzeug/Verkehrsmittel/Sprache.",
    example_jp: "図書館で勉強します。/ 電車で行きます。",
    example_reading: "としょかんでべんきょうします。／でんしゃでいきます。",
    example_de: "Ich lerne in der Bibliothek. / Ich fahre mit dem Zug.",
    dialogue: [
      { jp: "A: どこで昼ごはんを食べますか。", reading: "A: どこでひるごはんをたべますか。", de: "A: Wo essen Sie zu Mittag?" },
      { jp: "B: 会社の近くのカフェで食べます。", reading: "B: かいしゃのちかくのカフェでたべます。", de: "B: Ich esse in einem Café nahe der Firma." }
    ],
    examples: [
      { jp: "図書館で勉強します。", reading: "としょかんでべんきょうします。", de: "Ich lerne in der Bibliothek." },
      { jp: "電車で学校に行きます。", reading: "でんしゃでがっこうにいきます。", de: "Ich fahre mit dem Zug zur Schule." },
      { jp: "公園で写真を撮りました。", reading: "こうえんでしゃしんをとりました。", de: "Ich habe im Park Fotos gemacht." },
      { jp: "はしでご飯を食べます。", reading: "はしでごはんをたべます。", de: "Ich esse Reis mit Stäbchen." },
      { jp: "日本語でメールを書きます。", reading: "にほんごでメールをかきます。", de: "Ich schreibe die Mail auf Japanisch." },
      { jp: "家で映画を見ます。", reading: "いえでえいがをみます。", de: "Ich sehe zu Hause einen Film." },
      { jp: "スーパーで野菜を買いました。", reading: "スーパーでやさいをかいました。", de: "Ich habe im Supermarkt Gemüse gekauft." },
      { jp: "バスで会社に行きます。", reading: "バスでかいしゃにいきます。", de: "Ich fahre mit dem Bus zur Firma." }
    ],
    cloze: {
      distractors: ["に", "を", "は"],
      items: [
        { text: "図書館＿勉強します。", answer: "で", de: "Ich lerne in der Bibliothek." },
        { text: "はし＿ご飯を食べます。", answer: "で", de: "Ich esse Reis mit Stäbchen." },
        { text: "日本語＿メールを書きます。", answer: "で", de: "Ich schreibe die Mail auf Japanisch." },
        { text: "スーパー＿野菜を買いました。", answer: "で", de: "Ich habe im Supermarkt Gemüse gekauft." }
      ]
    }
  },
  {
    id: "g010",
    pattern: "の (Possessiv / Nomen-Modifikator)",
    situation: "Du möchtest zeigen, dass etwas jemandem gehört, oder zwei Nomen miteinander verknüpfen.",
    explanation: "Verbindet zwei Nomen. Das erste modifiziert das zweite, oft wie 's im Deutschen.",
    example_jp: "田中さんの本です。",
    example_reading: "たなかさんのほんです。",
    example_de: "Das ist Tanakas Buch.",
    dialogue: [
      { jp: "A: これは誰のかさですか。", reading: "A: これはだれのかさですか。", de: "A: Wessen Regenschirm ist das?" },
      { jp: "B: 先生のかさです。", reading: "B: せんせいのかさです。", de: "B: Das ist der Regenschirm des Lehrers." }
    ],
    examples: [
      { jp: "これは私の本です。", reading: "これはわたしのほんです。", de: "Das ist mein Buch." },
      { jp: "田中さんの車は新しいです。", reading: "たなかさんのくるまはあたらしいです。", de: "Herrn Tanakas Auto ist neu." },
      { jp: "日本語の先生は親切です。", reading: "にほんごのせんせいはしんせつです。", de: "Der Japanischlehrer ist freundlich." },
      { jp: "母の料理はおいしいです。", reading: "ははのりょうりはおいしいです。", de: "Das Essen meiner Mutter ist lecker." },
      { jp: "あれは友達のかばんです。", reading: "あれはともだちのかばんです。", de: "Das dort drüben ist die Tasche eines Freundes." },
      { jp: "会社の電話番号を知っていますか。", reading: "かいしゃのでんわばんごうをしっていますか。", de: "Kennen Sie die Telefonnummer der Firma?" },
      { jp: "学校の前にコンビニがあります。", reading: "がっこうのまえにコンビニがあります。", de: "Vor der Schule gibt es einen Convenience Store." },
      { jp: "これは日本の地図です。", reading: "これはにほんのちずです。", de: "Das ist eine Karte von Japan." }
    ],
    cloze: {
      distractors: ["は", "を", "に"],
      items: [
        { text: "これは私＿本です。", answer: "の", de: "Das ist mein Buch." },
        { text: "母＿料理はおいしいです。", answer: "の", de: "Das Essen meiner Mutter ist lecker." },
        { text: "これは日本＿地図です。", answer: "の", de: "Das ist eine Karte von Japan." },
        { text: "日本語＿先生は親切です。", answer: "の", de: "Der Japanischlehrer ist freundlich." }
      ]
    }
  },
  {
    id: "g011",
    pattern: "へ (Richtungs-Partikel)",
    situation: "Du möchtest die Richtung angeben, in die du dich auf den Weg machst.",
    explanation: "Zeigt Richtung an (wohin). Oft austauschbar mit に bei Bewegungsverben.",
    example_jp: "東京へ行きます。",
    example_reading: "とうきょうへいきます。",
    example_de: "Ich gehe nach Tokio.",
    dialogue: [
      { jp: "A: 週末、どこへ行きますか。", reading: "A: しゅうまつ、どこへいきますか。", de: "A: Wohin gehen Sie am Wochenende?" },
      { jp: "B: 友達と海へ行きます。", reading: "B: ともだちとうみへいきます。", de: "B: Ich fahre mit einem Freund ans Meer." }
    ],
    examples: [
      { jp: "学校へ行きます。", reading: "がっこうへいきます。", de: "Ich gehe zur Schule." },
      { jp: "明日、京都へ行きます。", reading: "あした、きょうとへいきます。", de: "Morgen fahre ich nach Kyoto." },
      { jp: "家へ帰ります。", reading: "いえへかえります。", de: "Ich gehe nach Hause." },
      { jp: "母は日本へ来ました。", reading: "はははにほんへきました。", de: "Meine Mutter ist nach Japan gekommen." },
      { jp: "友達と山へ行きました。", reading: "ともだちとやまへいきました。", de: "Ich bin mit einem Freund in die Berge gefahren." },
      { jp: "右へ曲がってください。", reading: "みぎへまがってください。", de: "Bitte biegen Sie nach rechts ab." },
      { jp: "来週、海外へ行きます。", reading: "らいしゅう、かいがいへいきます。", de: "Nächste Woche reise ich ins Ausland." },
      { jp: "駅へ行きたいです。", reading: "えきへいきたいです。", de: "Ich möchte zum Bahnhof gehen." }
    ],
    cloze: {
      distractors: ["で", "を", "は"],
      items: [
        { text: "東京＿行きます。", answer: "へ", de: "Ich gehe nach Tokio." },
        { text: "家＿帰ります。", answer: "へ", de: "Ich gehe nach Hause." },
        { text: "右＿曲がってください。", answer: "へ", de: "Bitte biegen Sie nach rechts ab." },
        { text: "来週、海外＿行きます。", answer: "へ", de: "Nächste Woche reise ich ins Ausland." }
      ]
    }
  },
  {
    id: "g012",
    pattern: "と (und / mit)",
    situation: "Du möchtest mehrere Dinge vollständig aufzählen oder sagen, mit wem du etwas machst.",
    explanation: "1) Verbindet Nomen vollständig: 'A und B'. 2) 'zusammen mit' einer Person.",
    example_jp: "コーヒーとケーキを食べます。/ 友達と行きます。",
    example_reading: "コーヒーとケーキをたべます。／ともだちといきます。",
    example_de: "Ich esse Kaffee und Kuchen. / Ich gehe mit einem Freund.",
    dialogue: [
      { jp: "A: 誰と映画を見ましたか。", reading: "A: だれとえいがをみましたか。", de: "A: Mit wem haben Sie den Film gesehen?" },
      { jp: "B: 姉と見ました。", reading: "B: あねとみました。", de: "B: Ich habe ihn mit meiner Schwester gesehen." }
    ],
    examples: [
      { jp: "パンとたまごを買いました。", reading: "パンとたまごをかいました。", de: "Ich habe Brot und Eier gekauft." },
      { jp: "友達と映画を見ます。", reading: "ともだちとえいがをみます。", de: "Ich sehe mit einem Freund einen Film." },
      { jp: "犬と猫がいます。", reading: "いぬとねこがいます。", de: "Es gibt einen Hund und eine Katze." },
      { jp: "母と買い物に行きました。", reading: "ははとかいものにいきました。", de: "Ich war mit meiner Mutter einkaufen." },
      { jp: "コーヒーとケーキをください。", reading: "コーヒーとケーキをください。", de: "Einen Kaffee und einen Kuchen bitte." },
      { jp: "山田さんと田中さんは先生です。", reading: "やまださんとたなかさんはせんせいです。", de: "Frau Yamada und Herr Tanaka sind Lehrer." },
      { jp: "週末、家族と公園へ行きます。", reading: "しゅうまつ、かぞくとこうえんへいきます。", de: "Am Wochenende gehe ich mit der Familie in den Park." },
      { jp: "ペンとノートが要ります。", reading: "ペンとノートがいります。", de: "Ich brauche einen Stift und ein Heft." }
    ],
    cloze: {
      distractors: ["で", "に", "も"],
      items: [
        { text: "友達＿映画を見ます。", answer: "と", de: "Ich sehe mit einem Freund einen Film." },
        { text: "母＿買い物に行きました。", answer: "と", de: "Ich war mit meiner Mutter einkaufen." },
        { text: "犬＿猫がいます。", answer: "と", de: "Es gibt einen Hund und eine Katze." },
        { text: "パン＿たまごを買いました。", answer: "と", de: "Ich habe Brot und Eier gekauft." }
      ]
    }
  },
  {
    id: "g013",
    pattern: "も (auch / ebenfalls)",
    situation: "Du möchtest ausdrücken, dass dasselbe auch für dich oder eine andere Person gilt.",
    explanation: "Ersetzt は oder が: 'auch X'. Zeigt, dass dasselbe auch für X gilt.",
    example_jp: "私も学生です。",
    example_reading: "わたしもがくせいです。",
    example_de: "Ich bin auch Student.",
    dialogue: [
      { jp: "A: 私はラーメンが好きです。", reading: "A: わたしはラーメンがすきです。", de: "A: Ich mag Ramen." },
      { jp: "B: 私も大好きです！", reading: "B: わたしもだいすきです！", de: "B: Ich auch — sehr sogar!" }
    ],
    examples: [
      { jp: "私も学生です。", reading: "わたしもがくせいです。", de: "Ich bin auch Student." },
      { jp: "田中さんも日本人です。", reading: "たなかさんもにほんじんです。", de: "Herr Tanaka ist auch Japaner." },
      { jp: "私もすしが好きです。", reading: "わたしもすしがすきです。", de: "Ich mag auch Sushi." },
      { jp: "弟も大学に行きます。", reading: "おとうともだいがくにいきます。", de: "Mein kleiner Bruder geht auch zur Uni." },
      { jp: "今日も暑いです。", reading: "きょうもあついです。", de: "Heute ist es auch heiß." },
      { jp: "あの店もコーヒーがおいしいです。", reading: "あのみせもコーヒーがおいしいです。", de: "In dem Laden ist der Kaffee auch lecker." },
      { jp: "私もそう思います。", reading: "わたしもそうおもいます。", de: "Ich denke auch so." },
      { jp: "妹も来ます。", reading: "いもうともきます。", de: "Meine kleine Schwester kommt auch." }
    ],
    cloze: {
      distractors: ["は", "が", "を"],
      items: [
        { text: "私＿学生です。", answer: "も", de: "Ich bin auch Student." },
        { text: "田中さん＿日本人です。", answer: "も", de: "Herr Tanaka ist auch Japaner." },
        { text: "今日＿暑いです。", answer: "も", de: "Heute ist es auch heiß." },
        { text: "妹＿来ます。", answer: "も", de: "Meine kleine Schwester kommt auch." }
      ]
    }
  },
  {
    id: "g014",
    pattern: "から〜まで (von ... bis ...)",
    situation: "Du möchtest einen Zeitraum oder eine Strecke von einem Startpunkt zu einem Endpunkt angeben.",
    explanation: "から = von (Startpunkt), まで = bis (Endpunkt). Gilt für Zeit und Ort.",
    example_jp: "月曜日から金曜日まで働きます。",
    example_reading: "げつようびからきんようびまではたらきます。",
    example_de: "Ich arbeite von Montag bis Freitag.",
    dialogue: [
      { jp: "A: 仕事は何時から何時までですか。", reading: "A: しごとはなんじからなんじまでですか。", de: "A: Von wie viel Uhr bis wie viel Uhr arbeiten Sie?" },
      { jp: "B: 九時から六時までです。", reading: "B: くじからろくじまでです。", de: "B: Von 9 bis 18 Uhr." }
    ],
    examples: [
      { jp: "月曜日から金曜日まで働きます。", reading: "げつようびからきんようびまではたらきます。", de: "Ich arbeite von Montag bis Freitag." },
      { jp: "九時から五時まで勉強します。", reading: "くじからごじまでべんきょうします。", de: "Ich lerne von 9 bis 17 Uhr." },
      { jp: "東京から大阪まで電車で行きます。", reading: "とうきょうからおおさかまででんしゃでいきます。", de: "Von Tokio bis Osaka fahre ich mit dem Zug." },
      { jp: "夏休みは七月から八月までです。", reading: "なつやすみはしちがつからはちがつまでです。", de: "Die Sommerferien gehen von Juli bis August." },
      { jp: "家から駅まで歩きます。", reading: "いえからえきまであるきます。", de: "Vom Haus bis zum Bahnhof gehe ich zu Fuß." },
      { jp: "朝から晩まで雨でした。", reading: "あさからばんまであめでした。", de: "Von morgens bis abends hat es geregnet." },
      { jp: "一時から三時まで会議があります。", reading: "いちじからさんじまでかいぎがあります。", de: "Von 13 bis 15 Uhr ist eine Besprechung." },
      { jp: "ここから学校まで近いです。", reading: "ここからがっこうまでちかいです。", de: "Von hier bis zur Schule ist es nah." }
    ],
    cloze: {
      distractors: ["から", "に", "で"],
      items: [
        { text: "月曜日から金曜日＿働きます。", answer: "まで", de: "Ich arbeite von Montag bis Freitag." },
        { text: "九時から五時＿勉強します。", answer: "まで", de: "Ich lerne von 9 bis 17 Uhr." },
        { text: "家から駅＿歩きます。", answer: "まで", de: "Vom Haus bis zum Bahnhof gehe ich zu Fuß." },
        { text: "朝から晩＿雨でした。", answer: "まで", de: "Von morgens bis abends hat es geregnet." }
      ]
    }
  },
  {
    id: "g015",
    pattern: "や〜など (A, B usw.)",
    situation: "Du möchtest einige Beispiele aus einer Gruppe nennen, ohne alle Elemente aufzuzählen.",
    explanation: "Zählt Beispiele aus einer nicht erschöpfenden Liste auf. Wie 'A, B und so weiter'.",
    example_jp: "りんごやバナナなどを買いました。",
    example_reading: "りんごやバナナなどをかいました。",
    example_de: "Ich habe Äpfel, Bananen usw. gekauft.",
    dialogue: [
      { jp: "A: 冷蔵庫に何がありますか。", reading: "A: れいぞうこになにがありますか。", de: "A: Was ist im Kühlschrank?" },
      { jp: "B: 牛乳やたまごやチーズなどがあります。", reading: "B: ぎゅうにゅうやたまごやチーズなどがあります。", de: "B: Milch, Eier, Käse und so weiter." }
    ],
    examples: [
      { jp: "りんごやバナナなどを買いました。", reading: "りんごやバナナなどをかいました。", de: "Ich habe Äpfel, Bananen usw. gekauft." },
      { jp: "週末は本を読んだり、映画を見たりします。テレビやラジオなども聞きます。", reading: "しゅうまつはほんをよんだり、えいがをみたりします。テレビやラジオなどもききます。", de: "Am Wochenende lese ich, sehe Filme und höre Fernsehen, Radio usw." },
      { jp: "机の上にペンやノートなどがあります。", reading: "つくえのうえにペンやノートなどがあります。", de: "Auf dem Tisch liegen Stifte, Hefte usw." },
      { jp: "京都や奈良などへ行きたいです。", reading: "きょうとやならなどへいきたいです。", de: "Ich möchte nach Kyoto, Nara usw. fahren." },
      { jp: "パーティーに田中さんや山田さんなどが来ます。", reading: "パーティーにたなかさんややまださんなどがきます。", de: "Zur Party kommen Herr Tanaka, Frau Yamada usw." },
      { jp: "朝はパンやたまごなどを食べます。", reading: "あさはパンやたまごなどをたべます。", de: "Morgens esse ich Brot, Eier usw." },
      { jp: "かばんに財布やかぎなどがあります。", reading: "かばんにさいふやかぎなどがあります。", de: "In der Tasche sind Geldbeutel, Schlüssel usw." },
      { jp: "店で野菜や果物などを売っています。", reading: "みせでやさいやくだものなどをうっています。", de: "Im Laden verkauft man Gemüse, Obst usw." }
    ],
    cloze: {
      distractors: ["と", "も", "か"],
      items: [
        { text: "りんご＿バナナなどを買いました。", answer: "や", de: "Ich habe Äpfel, Bananen usw. gekauft." },
        { text: "机の上にペン＿ノートなどがあります。", answer: "や", de: "Auf dem Tisch liegen Stifte, Hefte usw." },
        { text: "朝はパン＿たまごなどを食べます。", answer: "や", de: "Morgens esse ich Brot, Eier usw." },
        { text: "かばんに財布＿かぎなどがあります。", answer: "や", de: "In der Tasche sind Geldbeutel, Schlüssel usw." }
      ]
    }
  },

  // Demonstrativpronomen
  {
    id: "g016",
    pattern: "こ/そ/あ/ど — これ・それ・あれ・どれ",
    situation: "Du möchtest auf Dinge zeigen und sie je nach Entfernung voneinander unterscheiden.",
    explanation: "Zeigepronomen für Dinge: これ (dieses hier) / それ (das dort bei dir) / あれ (jenes dort drüben) / どれ (welches?).",
    example_jp: "これは何ですか。",
    example_reading: "これはなんですか。",
    example_de: "Was ist das (hier)?",
    dialogue: [
      { jp: "A: あれは何ですか。", reading: "A: あれはなんですか。", de: "A: Was ist das dort drüben?" },
      { jp: "B: あれは富士山です。", reading: "B: あれはふじさんです。", de: "B: Das ist der Fuji." }
    ],
    examples: [
      { jp: "これは何ですか。", reading: "これはなんですか。", de: "Was ist das hier?" },
      { jp: "それは私のかさです。", reading: "それはわたしのかさです。", de: "Das (bei dir) ist mein Regenschirm." },
      { jp: "あれは新しいビルです。", reading: "あれはあたらしいビルです。", de: "Das dort drüben ist ein neues Gebäude." },
      { jp: "どれがあなたの本ですか。", reading: "どれがあなたのほんですか。", de: "Welches ist Ihr Buch?" },
      { jp: "これをください。", reading: "これをください。", de: "Geben Sie mir das hier bitte." },
      { jp: "それは少し高いです。", reading: "それはすこしたかいです。", de: "Das (bei dir) ist etwas teuer." },
      { jp: "あれはおいしそうです。", reading: "あれはおいしそうです。", de: "Das dort drüben sieht lecker aus." },
      { jp: "これは日本語の本です。", reading: "これはにほんごのほんです。", de: "Das hier ist ein Japanischbuch." }
    ],
    cloze: {
      distractors: ["これ", "それ", "あれ"],
      items: [
        { text: "＿は何ですか。", answer: "これ", distractors: ["それ", "あれ", "どれ"], de: "Was ist das hier?" },
        { text: "＿は私のかさです。", answer: "それ", distractors: ["これ", "あれ", "どれ"], de: "Das (bei dir) ist mein Regenschirm." },
        { text: "＿は新しいビルです。", answer: "あれ", distractors: ["これ", "それ", "どれ"], de: "Das dort drüben ist ein neues Gebäude." },
        { text: "＿があなたの本ですか。", answer: "どれ", distractors: ["これ", "それ", "あれ"], de: "Welches ist Ihr Buch?" }
      ]
    }
  },
  {
    id: "g017",
    pattern: "この・その・あの・どの + Nomen",
    situation: "Du möchtest ein bestimmtes Ding beschreiben, indem du es direkt vor einem Nomen einordnest.",
    explanation: "Demonstrativadjektive: stehen vor einem Nomen. この本 = dieses Buch.",
    example_jp: "この本は面白いです。",
    example_reading: "このほんはおもしろいです。",
    example_de: "Dieses Buch ist interessant.",
    dialogue: [
      { jp: "A: どのかばんが好きですか。", reading: "A: どのかばんがすきですか。", de: "A: Welche Tasche mögen Sie?" },
      { jp: "B: そのかばんが好きです。", reading: "B: そのかばんがすきです。", de: "B: Ich mag diese Tasche (dort bei Ihnen)." }
    ],
    examples: [
      { jp: "この本は面白いです。", reading: "このほんはおもしろいです。", de: "Dieses Buch ist interessant." },
      { jp: "その車は新しいです。", reading: "そのくるまはあたらしいです。", de: "Das Auto (dort bei dir) ist neu." },
      { jp: "あの人は田中さんです。", reading: "あのひとはたなかさんです。", de: "Diese Person dort drüben ist Herr Tanaka." },
      { jp: "どの店がいいですか。", reading: "どのみせがいいですか。", de: "Welcher Laden ist gut?" },
      { jp: "この料理はおいしいです。", reading: "このりょうりはおいしいです。", de: "Dieses Gericht ist lecker." },
      { jp: "そのかばんはいくらですか。", reading: "そのかばんはいくらですか。", de: "Was kostet diese Tasche (dort bei dir)?" },
      { jp: "あの山はとても高いです。", reading: "あのやまはとてもたかいです。", de: "Jener Berg dort drüben ist sehr hoch." },
      { jp: "この駅で電車を降ります。", reading: "このえきででんしゃをおります。", de: "An diesem Bahnhof steige ich aus dem Zug." }
    ],
    cloze: {
      distractors: ["この", "その", "あの"],
      items: [
        { text: "＿本は面白いです。", answer: "この", distractors: ["その", "あの", "どの"], de: "Dieses Buch ist interessant." },
        { text: "＿車は新しいです。", answer: "その", distractors: ["この", "あの", "どの"], de: "Das Auto (dort bei dir) ist neu." },
        { text: "＿人は田中さんです。", answer: "あの", distractors: ["この", "その", "どの"], de: "Diese Person dort drüben ist Herr Tanaka." },
        { text: "＿店がいいですか。", answer: "どの", distractors: ["この", "その", "あの"], de: "Welcher Laden ist gut?" }
      ]
    }
  },
  {
    id: "g018",
    pattern: "ここ・そこ・あそこ・どこ",
    situation: "Du möchtest nach einem Ort fragen oder einen Ort je nach Entfernung benennen.",
    explanation: "Demonstrativpronomen für Orte: ここ (hier) / そこ (dort/bei dir) / あそこ (dort drüben) / どこ (wo?).",
    example_jp: "トイレはどこですか。",
    example_de: "Wo ist das WC?",
    dialogue: [
      { jp: "A: すみません、駅はどこですか。", reading: "A: すみません、えきはどこですか。", de: "A: Entschuldigung, wo ist der Bahnhof?" },
      { jp: "B: あそこです。信号を右に曲がってください。", reading: "B: あそこです。しんごうをみぎにまがってください。", de: "B: Dort drüben. Biegen Sie an der Ampel rechts ab." }
    ],
    examples: [
      { jp: "トイレはどこですか。", reading: "トイレはどこですか。", de: "Wo ist die Toilette?" },
      { jp: "ここで待ってください。", reading: "ここでまってください。", de: "Bitte warten Sie hier." },
      { jp: "そこに私のかばんがあります。", reading: "そこにわたしのかばんがあります。", de: "Dort (bei dir) ist meine Tasche." },
      { jp: "あそこに駅があります。", reading: "あそこにえきがあります。", de: "Dort drüben ist der Bahnhof." },
      { jp: "ここは図書館です。", reading: "ここはとしょかんです。", de: "Das hier ist die Bibliothek." },
      { jp: "あなたの会社はどこですか。", reading: "あなたのかいしゃはどこですか。", de: "Wo ist Ihre Firma?" },
      { jp: "あそこでコーヒーを飲みましょう。", reading: "あそこでコーヒーをのみましょう。", de: "Lass uns dort drüben Kaffee trinken." },
      { jp: "ここから学校まで近いです。", reading: "ここからがっこうまでちかいです。", de: "Von hier bis zur Schule ist es nah." }
    ],
    cloze: {
      distractors: ["ここ", "そこ", "あそこ"],
      items: [
        { text: "トイレは＿ですか。", answer: "どこ", distractors: ["ここ", "そこ", "あそこ"], de: "Wo ist die Toilette?" },
        { text: "＿で待ってください。", answer: "ここ", distractors: ["そこ", "あそこ", "どこ"], de: "Bitte warten Sie hier." },
        { text: "＿に駅があります。", answer: "あそこ", distractors: ["ここ", "そこ", "どこ"], de: "Dort drüben ist der Bahnhof." },
        { text: "＿に私のかばんがあります。", answer: "そこ", distractors: ["ここ", "あそこ", "どこ"], de: "Dort (bei dir) ist meine Tasche." }
      ]
    }
  },

  // Existenz
  {
    id: "g019",
    pattern: "〜に〜があります / います",
    situation: "Du möchtest sagen, dass an einem bestimmten Ort etwas oder jemand vorhanden ist.",
    explanation: "Existenz ausdrücken: があります für Dinge/Pflanzen, がいます für Personen/Tiere.",
    example_jp: "机の上に本があります。/ 部屋に猫がいます。",
    example_reading: "つくえのうえにほんがあります。／へやにねこがいます。",
    example_de: "Auf dem Tisch liegt ein Buch. / Im Zimmer ist eine Katze.",
    dialogue: [
      { jp: "A: この近くにコンビニがありますか。", reading: "A: このちかくにコンビニがありますか。", de: "A: Gibt es hier in der Nähe einen Convenience Store?" },
      { jp: "B: はい、駅の前にあります。", reading: "B: はい、えきのまえにあります。", de: "B: Ja, vor dem Bahnhof gibt es einen." }
    ],
    examples: [
      { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
      { jp: "部屋に猫がいます。", reading: "へやにねこがいます。", de: "Im Zimmer ist eine Katze." },
      { jp: "公園に子供がいます。", reading: "こうえんにこどもがいます。", de: "Im Park sind Kinder." },
      { jp: "冷蔵庫にたまごがあります。", reading: "れいぞうこにたまごがあります。", de: "Im Kühlschrank sind Eier." },
      { jp: "庭に犬がいます。", reading: "にわにいぬがいます。", de: "Im Garten ist ein Hund." },
      { jp: "かばんの中にお金があります。", reading: "かばんのなかにおかねがあります。", de: "In der Tasche ist Geld." },
      { jp: "教室に学生がいます。", reading: "きょうしつにがくせいがいます。", de: "Im Klassenzimmer sind Studenten." },
      { jp: "駅の前に銀行があります。", reading: "えきのまえにぎんこうがあります。", de: "Vor dem Bahnhof ist eine Bank." }
    ],
    cloze: {
      distractors: ["います", "ありません", "いません"],
      items: [
        { text: "机の上に本が＿。", answer: "あります", de: "Auf dem Tisch liegt ein Buch." },
        { text: "冷蔵庫にたまごが＿。", answer: "あります", de: "Im Kühlschrank sind Eier." },
        { text: "部屋に猫が＿。", answer: "います", distractors: ["あります", "ありません", "いません"], de: "Im Zimmer ist eine Katze." },
        { text: "公園に子供が＿。", answer: "います", distractors: ["あります", "ありません", "いません"], de: "Im Park sind Kinder." }
      ]
    }
  },
  {
    id: "g020",
    pattern: "〜は〜にあります / います",
    situation: "Du möchtest sagen, wo sich ein bestimmter Gegenstand oder eine bestimmte Person befindet.",
    explanation: "Ort von Dingen/Personen angeben: 'X ist an/bei Y'.",
    example_jp: "本は机の上にあります。",
    example_reading: "ほんはつくえのうえにあります。",
    example_de: "Das Buch ist auf dem Tisch.",
    dialogue: [
      { jp: "A: リモコンはどこにありますか。", de: "A: Wo ist die Fernbedienung?" },
      { jp: "B: ソファの下にあります。", reading: "B: ソファのしたにあります。", de: "B: Sie ist unter dem Sofa." }
    ],
    examples: [
      { jp: "本は机の上にあります。", reading: "ほんはつくえのうえにあります。", de: "Das Buch ist auf dem Tisch." },
      { jp: "猫は部屋にいます。", reading: "ねこはへやにいます。", de: "Die Katze ist im Zimmer." },
      { jp: "山田さんは会議室にいます。", reading: "やまださんはかいぎしつにいます。", de: "Frau Yamada ist im Besprechungsraum." },
      { jp: "私の家は駅の近くにあります。", reading: "わたしのいえはえきのちかくにあります。", de: "Mein Haus ist in der Nähe des Bahnhofs." },
      { jp: "かぎはかばんの中にあります。", reading: "かぎはかばんのなかにあります。", de: "Der Schlüssel ist in der Tasche." },
      { jp: "先生は教室にいます。", reading: "せんせいはきょうしつにいます。", de: "Der Lehrer ist im Klassenzimmer." },
      { jp: "トイレは二階にあります。", reading: "トイレはにかいにあります。", de: "Die Toilette ist im ersten Stock." },
      { jp: "子供は公園にいます。", reading: "こどもはこうえんにいます。", de: "Das Kind ist im Park." }
    ],
    cloze: {
      distractors: ["います", "ありません", "いません"],
      items: [
        { text: "本は机の上に＿。", answer: "あります", de: "Das Buch ist auf dem Tisch." },
        { text: "かぎはかばんの中に＿。", answer: "あります", de: "Der Schlüssel ist in der Tasche." },
        { text: "猫は部屋に＿。", answer: "います", distractors: ["あります", "ありません", "いません"], de: "Die Katze ist im Zimmer." },
        { text: "山田さんは会議室に＿。", answer: "います", distractors: ["あります", "ありません", "いません"], de: "Frau Yamada ist im Besprechungsraum." }
      ]
    }
  },

  // Höfliche Verben (ます-Form)
  {
    id: "g021",
    pattern: "〜ます / 〜ません (höfliche Gegenwart/Zukunft)",
    situation: "Du möchtest höflich sagen, was du regelmäßig tust oder in Zukunft tun wirst — oder eben nicht.",
    explanation: "Höfliche Verbform für Gegenwart und Zukunft. ます = positiv, ません = negativ.",
    example_jp: "毎日日本語を勉強します。/ お酒を飲みません。",
    example_reading: "まいにちにほんごをべんきょうします。／おさけをのみません。",
    example_de: "Ich lerne jeden Tag Japanisch. / Ich trinke keinen Alkohol.",
    dialogue: [
      { jp: "A: お酒を飲みますか。", reading: "A: おさけをのみますか。", de: "A: Trinken Sie Alkohol?" },
      { jp: "B: いいえ、飲みません。お茶が好きです。", reading: "B: いいえ、のみません。おちゃがすきです。", de: "B: Nein, ich trinke keinen. Ich mag Tee lieber." }
    ],
    examples: [
      { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Ich lerne jeden Tag Japanisch." },
      { jp: "明日学校に行きます。", reading: "あしたがっこうにいきます。", de: "Morgen gehe ich zur Schule." },
      { jp: "私はお酒を飲みません。", reading: "わたしはおさけをのみません。", de: "Ich trinke keinen Alkohol." },
      { jp: "毎朝コーヒーを飲みます。", reading: "まいあさコーヒーをのみます。", de: "Jeden Morgen trinke ich Kaffee." },
      { jp: "日曜日は働きません。", reading: "にちようびははたらきません。", de: "Sonntags arbeite ich nicht." },
      { jp: "来年、日本へ行きます。", reading: "らいねん、にほんへいきます。", de: "Nächstes Jahr fahre ich nach Japan." },
      { jp: "肉を食べません。", reading: "にくをたべません。", de: "Ich esse kein Fleisch." },
      { jp: "夜十一時に寝ます。", reading: "よるじゅういちじにねます。", de: "Ich gehe um 23 Uhr schlafen." }
    ],
    cloze: {
      distractors: ["ません", "ました", "ませんでした"],
      items: [
        { text: "毎日日本語を勉強し＿。", answer: "ます", de: "Ich lerne jeden Tag Japanisch." },
        { text: "毎朝コーヒーを飲み＿。", answer: "ます", de: "Jeden Morgen trinke ich Kaffee." },
        { text: "私はお酒を飲み＿。", answer: "ません", distractors: ["ます", "ました", "ませんでした"], de: "Ich trinke keinen Alkohol." },
        { text: "日曜日は働き＿。", answer: "ません", distractors: ["ます", "ました", "ませんでした"], de: "Sonntags arbeite ich nicht." }
      ]
    }
  },
  {
    id: "g022",
    pattern: "〜ました / 〜ませんでした (höfliche Vergangenheit)",
    situation: "Du möchtest höflich berichten, was du getan hast oder nicht getan hast.",
    explanation: "Höfliche Vergangenheitsform. ました = tat, ませんでした = tat nicht.",
    example_jp: "昨日映画を見ました。",
    example_reading: "きのうえいがをみました。",
    example_de: "Gestern habe ich einen Film gesehen.",
    dialogue: [
      { jp: "A: 昨日、宿題をしましたか。", reading: "A: きのう、しゅくだいをしましたか。", de: "A: Haben Sie gestern die Hausaufgaben gemacht?" },
      { jp: "B: すみません、しませんでした。", de: "B: Entschuldigung, ich habe sie nicht gemacht." }
    ],
    examples: [
      { jp: "昨日映画を見ました。", reading: "きのうえいがをみました。", de: "Gestern habe ich einen Film gesehen." },
      { jp: "先週、京都に行きました。", reading: "せんしゅう、きょうとにいきました。", de: "Letzte Woche bin ich nach Kyoto gefahren." },
      { jp: "朝ごはんを食べませんでした。", reading: "あさごはんをたべませんでした。", de: "Ich habe nicht gefrühstückt." },
      { jp: "日本語を三年勉強しました。", reading: "にほんごをさんねんべんきょうしました。", de: "Ich habe drei Jahre Japanisch gelernt." },
      { jp: "昨日は雨が降りました。", reading: "きのうはあめがふりました。", de: "Gestern hat es geregnet." },
      { jp: "友達に手紙を書きました。", reading: "ともだちにてがみをかきました。", de: "Ich habe einem Freund einen Brief geschrieben." },
      { jp: "週末は何もしませんでした。", reading: "しゅうまつはなにもしませんでした。", de: "Am Wochenende habe ich nichts gemacht." },
      { jp: "母にプレゼントを買いました。", reading: "ははにプレゼントをかいました。", de: "Ich habe meiner Mutter ein Geschenk gekauft." }
    ],
    cloze: {
      distractors: ["ませんでした", "ます", "ません"],
      items: [
        { text: "昨日映画を見＿。", answer: "ました", de: "Gestern habe ich einen Film gesehen." },
        { text: "先週、京都に行き＿。", answer: "ました", de: "Letzte Woche bin ich nach Kyoto gefahren." },
        { text: "朝ごはんを食べ＿。", answer: "ませんでした", distractors: ["ました", "ます", "ません"], de: "Ich habe nicht gefrühstückt." },
        { text: "週末は何もし＿。", answer: "ませんでした", distractors: ["ました", "ます", "ません"], de: "Am Wochenende habe ich nichts gemacht." }
      ]
    }
  },

  // Einladung & Vorschlag
  {
    id: "g023",
    pattern: "〜ませんか (Einladung: Wollen wir nicht ...?)",
    situation: "Du möchtest jemanden höflich einladen, etwas gemeinsam mit dir zu tun.",
    explanation: "Höfliche Einladung oder Vorschlag. Wie 'Wollen Sie nicht...?' / 'Wie wäre es mit...?'",
    example_jp: "一緒に映画を見ませんか。",
    example_reading: "いっしょにえいがをみませんか。",
    example_de: "Wollen wir nicht zusammen einen Film sehen?",
    dialogue: [
      { jp: "A: 一緒にランチを食べませんか。", reading: "A: いっしょにランチをたべませんか。", de: "A: Wollen wir nicht zusammen Mittagessen?" },
      { jp: "B: いいですね！どこに行きますか。", reading: "B: いいですね！どこにいきますか。", de: "B: Gerne! Wohin gehen wir?" }
    ],
    examples: [
      { jp: "一緒に映画を見ませんか。", reading: "いっしょにえいがをみませんか。", de: "Wollen wir nicht zusammen einen Film sehen?" },
      { jp: "週末、海に行きませんか。", reading: "しゅうまつ、うみにいきませんか。", de: "Wollen wir am Wochenende nicht ans Meer fahren?" },
      { jp: "お茶を飲みませんか。", reading: "おちゃをのみませんか。", de: "Wollen wir nicht einen Tee trinken?" },
      { jp: "一緒に昼ごはんを食べませんか。", reading: "いっしょにひるごはんをたべませんか。", de: "Wollen wir nicht zusammen Mittagessen?" },
      { jp: "公園を散歩しませんか。", reading: "こうえんをさんぽしませんか。", de: "Wollen wir nicht im Park spazieren gehen?" },
      { jp: "明日、買い物に行きませんか。", reading: "あした、かいものにいきませんか。", de: "Wollen wir morgen nicht einkaufen gehen?" },
      { jp: "一緒に日本語を勉強しませんか。", reading: "いっしょににほんごをべんきょうしませんか。", de: "Wollen wir nicht zusammen Japanisch lernen?" },
      { jp: "今晩、うちに来ませんか。", reading: "こんばん、うちにきませんか。", de: "Wollen Sie heute Abend nicht zu mir kommen?" }
    ],
    cloze: {
      distractors: ["ましょう", "ますか", "ください"],
      items: [
        { text: "一緒に映画を見＿。", answer: "ませんか", de: "Wollen wir nicht zusammen einen Film sehen?" },
        { text: "お茶を飲み＿。", answer: "ませんか", de: "Wollen wir nicht einen Tee trinken?" },
        { text: "公園を散歩し＿。", answer: "ませんか", de: "Wollen wir nicht im Park spazieren gehen?" },
        { text: "今晩、うちに来＿。", answer: "ませんか", de: "Wollen Sie heute Abend nicht zu mir kommen?" }
      ]
    }
  },
  {
    id: "g024",
    pattern: "〜ましょう / 〜ましょうか (Vorschlag: Lass uns ...)",
    situation: "Du möchtest vorschlagen, jetzt gemeinsam loszulegen, oder anbieten, jemandem zu helfen.",
    explanation: "Vorschlag, etwas gemeinsam zu tun. ましょう = Lass uns!, ましょうか = Soll ich / Wollen wir?",
    example_jp: "始めましょう！/ 手伝いましょうか。",
    example_reading: "はじめましょう！／てつだいましょうか。",
    example_de: "Fangen wir an! / Soll ich helfen?",
    dialogue: [
      { jp: "A: 荷物、持ちましょうか。", reading: "A: にもつ、もちましょうか。", de: "A: Soll ich das Gepäck tragen?" },
      { jp: "B: ありがとうございます。お願いします。", reading: "B: ありがとうございます。おねがいします。", de: "B: Danke schön. Ja, bitte." }
    ],
    examples: [
      { jp: "そろそろ始めましょう。", reading: "そろそろはじめましょう。", de: "Lass uns langsam anfangen." },
      { jp: "一緒に昼ごはんを食べましょう。", reading: "いっしょにひるごはんをたべましょう。", de: "Lass uns zusammen Mittagessen." },
      { jp: "窓を開けましょうか。", reading: "まどをあけましょうか。", de: "Soll ich das Fenster öffnen?" },
      { jp: "公園で写真を撮りましょう。", reading: "こうえんでしゃしんをとりましょう。", de: "Lass uns im Park Fotos machen." },
      { jp: "荷物を持ちましょうか。", reading: "にもつをもちましょうか。", de: "Soll ich das Gepäck tragen?" },
      { jp: "もう遅いですから、帰りましょう。", reading: "もうおそいですから、かえりましょう。", de: "Es ist schon spät, lass uns nach Hause gehen." },
      { jp: "明日、海に行きましょう。", reading: "あした、うみにいきましょう。", de: "Lass uns morgen ans Meer fahren." },
      { jp: "手伝いましょうか。", reading: "てつだいましょうか。", de: "Soll ich helfen?" }
    ],
    cloze: {
      distractors: ["ませんか", "ます", "ください"],
      items: [
        { text: "そろそろ始め＿。", answer: "ましょう", de: "Lass uns langsam anfangen." },
        { text: "一緒に昼ごはんを食べ＿。", answer: "ましょう", de: "Lass uns zusammen Mittagessen." },
        { text: "窓を開け＿。", answer: "ましょうか", de: "Soll ich das Fenster öffnen?" },
        { text: "手伝い＿。", answer: "ましょうか", de: "Soll ich helfen?" }
      ]
    }
  },

  // て-Form Verwendungen
  {
    id: "g025",
    pattern: "〜てください (Bitte tun Sie ...)",
    situation: "Du möchtest jemanden höflich darum bitten, etwas Bestimmtes zu tun.",
    explanation: "Höfliche Bitte oder Aufforderung: て-Form des Verbs + ください.",
    example_jp: "ゆっくり話してください。",
    example_reading: "ゆっくりはなしてください。",
    example_de: "Bitte sprechen Sie langsam.",
    dialogue: [
      { jp: "A: すみません、もう一度言ってください。", reading: "A: すみません、もういちどいってください。", de: "A: Entschuldigung, sagen Sie das bitte noch einmal." },
      { jp: "B: もちろんです。", de: "B: Natürlich." }
    ],
    examples: [
      { jp: "ゆっくり話してください。", reading: "ゆっくりはなしてください。", de: "Bitte sprechen Sie langsam." },
      { jp: "もう一度言ってください。", reading: "もういちどいってください。", de: "Bitte sagen Sie das noch einmal." },
      { jp: "ここに名前を書いてください。", reading: "ここになまえをかいてください。", de: "Bitte schreiben Sie hier Ihren Namen." },
      { jp: "ちょっと待ってください。", reading: "ちょっとまってください。", de: "Bitte warten Sie kurz." },
      { jp: "窓を開けてください。", reading: "まどをあけてください。", de: "Bitte öffnen Sie das Fenster." },
      { jp: "この本を読んでください。", reading: "このほんをよんでください。", de: "Bitte lesen Sie dieses Buch." },
      { jp: "写真を撮ってください。", reading: "しゃしんをとってください。", de: "Bitte machen Sie ein Foto." },
      { jp: "明日、早く来てください。", reading: "あした、はやくきてください。", de: "Bitte kommen Sie morgen früh." }
    ],
    cloze: {
      distractors: ["はいけません", "もいいですか", "から"],
      items: [
        { text: "ゆっくり話して＿。", answer: "ください", de: "Bitte sprechen Sie langsam." },
        { text: "もう一度言って＿。", answer: "ください", de: "Bitte sagen Sie das noch einmal." },
        { text: "ちょっと待って＿。", answer: "ください", de: "Bitte warten Sie kurz." },
        { text: "窓を開けて＿。", answer: "ください", de: "Bitte öffnen Sie das Fenster." }
      ]
    }
  },
  {
    id: "g026",
    pattern: "〜てもいいですか (Darf ich ...?)",
    situation: "Du möchtest höflich nachfragen, ob es in Ordnung ist, wenn du etwas tust.",
    explanation: "Um Erlaubnis bitten: 'Ist es in Ordnung, wenn ich...?'",
    example_jp: "ここに座ってもいいですか。",
    example_reading: "ここにすわってもいいですか。",
    example_de: "Darf ich hier sitzen?",
    dialogue: [
      { jp: "A: 窓を開けてもいいですか。", reading: "A: まどをあけてもいいですか。", de: "A: Darf ich das Fenster öffnen?" },
      { jp: "B: はい、どうぞ。", de: "B: Ja, bitte sehr." }
    ],
    examples: [
      { jp: "ここに座ってもいいですか。", reading: "ここにすわってもいいですか。", de: "Darf ich mich hier hinsetzen?" },
      { jp: "写真を撮ってもいいですか。", reading: "しゃしんをとってもいいですか。", de: "Darf ich ein Foto machen?" },
      { jp: "窓を開けてもいいですか。", reading: "まどをあけてもいいですか。", de: "Darf ich das Fenster öffnen?" },
      { jp: "トイレを使ってもいいですか。", reading: "トイレをつかってもいいですか。", de: "Darf ich die Toilette benutzen?" },
      { jp: "ここでたばこを吸ってもいいですか。", reading: "ここでたばこをすってもいいですか。", de: "Darf ich hier rauchen?" },
      { jp: "この本を借りてもいいですか。", reading: "このほんをかりてもいいですか。", de: "Darf ich dieses Buch ausleihen?" },
      { jp: "今日、早く帰ってもいいですか。", reading: "きょう、はやくかえってもいいですか。", de: "Darf ich heute früher nach Hause gehen?" },
      { jp: "ここで食べてもいいですか。", reading: "ここでたべてもいいですか。", de: "Darf ich hier essen?" }
    ],
    cloze: {
      distractors: ["ください", "はいけません", "から"],
      items: [
        { text: "ここに座って＿。", answer: "もいいですか", de: "Darf ich mich hier hinsetzen?" },
        { text: "写真を撮って＿。", answer: "もいいですか", de: "Darf ich ein Foto machen?" },
        { text: "トイレを使って＿。", answer: "もいいですか", de: "Darf ich die Toilette benutzen?" },
        { text: "ここで食べて＿。", answer: "もいいですか", de: "Darf ich hier essen?" }
      ]
    }
  },
  {
    id: "g027",
    pattern: "〜てはいけません (Man darf nicht ...)",
    situation: "Du möchtest jemandem erklären, dass etwas nicht erlaubt ist.",
    explanation: "Verbot ausdrücken: 'Es ist verboten zu...' / 'Man darf nicht...'",
    example_jp: "ここで写真を撮ってはいけません。",
    example_reading: "ここでしゃしんをとってはいけません。",
    example_de: "Hier darf man keine Fotos machen.",
    dialogue: [
      { jp: "A: ここでたばこを吸ってもいいですか。", reading: "A: ここでたばこをすってもいいですか。", de: "A: Darf ich hier rauchen?" },
      { jp: "B: すみません、ここでは吸ってはいけません。", reading: "B: すみません、ここではすってはいけません。", de: "B: Tut mir leid, hier darf man nicht rauchen." }
    ],
    examples: [
      { jp: "ここで写真を撮ってはいけません。", reading: "ここでしゃしんをとってはいけません。", de: "Hier darf man keine Fotos machen." },
      { jp: "図書館で話してはいけません。", reading: "としょかんではなしてはいけません。", de: "In der Bibliothek darf man nicht reden." },
      { jp: "ここでたばこを吸ってはいけません。", reading: "ここでたばこをすってはいけません。", de: "Hier darf man nicht rauchen." },
      { jp: "授業中、寝てはいけません。", reading: "じゅぎょうちゅう、ねてはいけません。", de: "Während des Unterrichts darf man nicht schlafen." },
      { jp: "ここに車を止めてはいけません。", reading: "ここにくるまをとめてはいけません。", de: "Hier darf man nicht parken." },
      { jp: "この水を飲んではいけません。", reading: "このみずをのんではいけません。", de: "Dieses Wasser darf man nicht trinken." },
      { jp: "ここで遊んではいけません。", reading: "ここであそんではいけません。", de: "Hier darf man nicht spielen." },
      { jp: "教室で食べてはいけません。", reading: "きょうしつでたべてはいけません。", de: "Im Klassenzimmer darf man nicht essen." }
    ],
    cloze: {
      distractors: ["ください", "もいいですか", "から"],
      items: [
        { text: "ここで写真を撮って＿。", answer: "はいけません", de: "Hier darf man keine Fotos machen." },
        { text: "図書館で話して＿。", answer: "はいけません", de: "In der Bibliothek darf man nicht reden." },
        { text: "ここでたばこを吸って＿。", answer: "はいけません", de: "Hier darf man nicht rauchen." },
        { text: "ここで遊んで＿。", answer: "はいけません", de: "Hier darf man nicht spielen." }
      ]
    }
  },
  {
    id: "g028",
    pattern: "〜ないでください (Bitte nicht ...)",
    situation: "Du möchtest jemanden höflich darum bitten, etwas zu unterlassen.",
    explanation: "Negative Bitte: Nai-Form + でください. Bitten, etwas zu unterlassen.",
    example_jp: "ここで食べないでください。",
    example_reading: "ここでたべないでください。",
    example_de: "Bitte essen Sie hier nicht.",
    dialogue: [
      { jp: "A: 授業中、スマホを使わないでください。", reading: "A: じゅぎょうちゅう、スマホをつかわないでください。", de: "A: Bitte benutzen Sie das Handy nicht während des Unterrichts." },
      { jp: "B: わかりました。すみません。", de: "B: Verstanden. Entschuldigung." }
    ],
    examples: [
      { jp: "ここで食べないでください。", reading: "ここでたべないでください。", de: "Bitte essen Sie hier nicht." },
      { jp: "写真を撮らないでください。", reading: "しゃしんをとらないでください。", de: "Bitte machen Sie keine Fotos." },
      { jp: "大きい声で話さないでください。", reading: "おおきいこえではなさないでください。", de: "Bitte sprechen Sie nicht laut." },
      { jp: "心配しないでください。", reading: "しんぱいしないでください。", de: "Bitte machen Sie sich keine Sorgen." },
      { jp: "ここに座らないでください。", reading: "ここにすわらないでください。", de: "Bitte setzen Sie sich hier nicht hin." },
      { jp: "ドアを閉めないでください。", reading: "ドアをしめないでください。", de: "Bitte schließen Sie die Tür nicht." },
      { jp: "授業中、スマホを使わないでください。", reading: "じゅぎょうちゅう、スマホをつかわないでください。", de: "Bitte benutzen Sie im Unterricht kein Handy." },
      { jp: "ここでたばこを吸わないでください。", reading: "ここでたばこをすわないでください。", de: "Bitte rauchen Sie hier nicht." }
    ],
    cloze: {
      distractors: ["てください", "ましょう", "たいです"],
      items: [
        { text: "ここで食べ＿。", answer: "ないでください", de: "Bitte essen Sie hier nicht." },
        { text: "心配し＿。", answer: "ないでください", de: "Bitte machen Sie sich keine Sorgen." },
        { text: "ドアを閉め＿。", answer: "ないでください", de: "Bitte schließen Sie die Tür nicht." }
      ]
    }
  },
  {
    id: "g029",
    pattern: "〜ている (gerade tun / Zustand)",
    situation: "Du möchtest beschreiben, was du gerade in diesem Moment tust, oder einen andauernden Zustand ausdrücken.",
    explanation: "1) Andauernde Handlung (gerade): 食べている = isst gerade. 2) Resultierender Zustand: 結婚している = ist verheiratet.",
    example_jp: "今、テレビを見ています。",
    example_reading: "いま、テレビをみています。",
    example_de: "Ich sehe gerade fern.",
    dialogue: [
      { jp: "A: 今、何をしていますか。", reading: "A: いま、なにをしていますか。", de: "A: Was machen Sie gerade?" },
      { jp: "B: 日本語を勉強しています。", reading: "B: にほんごをべんきょうしています。", de: "B: Ich lerne gerade Japanisch." }
    ],
    examples: [
      { jp: "今、テレビを見ています。", reading: "いま、テレビをみています。", de: "Ich sehe gerade fern." },
      { jp: "母は台所で料理をしています。", reading: "はははだいどころでりょうりをしています。", de: "Meine Mutter kocht gerade in der Küche." },
      { jp: "田中さんは結婚しています。", reading: "たなかさんはけっこんしています。", de: "Herr Tanaka ist verheiratet." },
      { jp: "弟は今、寝ています。", reading: "おとうとはいま、ねています。", de: "Mein kleiner Bruder schläft gerade." },
      { jp: "私は東京に住んでいます。", reading: "わたしはとうきょうにすんでいます。", de: "Ich wohne in Tokio." },
      { jp: "雨が降っています。", reading: "あめがふっています。", de: "Es regnet gerade." },
      { jp: "友達を待っています。", reading: "ともだちをまっています。", de: "Ich warte gerade auf einen Freund." },
      { jp: "父は新聞を読んでいます。", reading: "ちちはしんぶんをよんでいます。", de: "Mein Vater liest gerade die Zeitung." }
    ],
    cloze: {
      distractors: ["ください", "から", "もいいですか"],
      items: [
        { text: "今、テレビを見て＿。", answer: "います", de: "Ich sehe gerade fern." },
        { text: "弟は今、寝て＿。", answer: "います", de: "Mein kleiner Bruder schläft gerade." },
        { text: "雨が降って＿。", answer: "います", de: "Es regnet gerade." },
        { text: "父は新聞を読んで＿。", answer: "います", de: "Mein Vater liest gerade die Zeitung." }
      ]
    }
  },
  {
    id: "g030",
    pattern: "〜て + Verb (Handlungsfolge)",
    situation: "Du möchtest beschreiben, dass du mehrere Dinge nacheinander erledigst.",
    explanation: "Mehrere Handlungen verbinden: 'X tun und dann Y tun'. Reihenfolge ist wichtig.",
    example_jp: "朝ごはんを食べて、学校に行きます。",
    example_reading: "あさごはんをたべて、がっこうにいきます。",
    example_de: "Ich esse Frühstück und gehe dann zur Schule.",
    dialogue: [
      { jp: "A: 毎朝、何をしますか。", reading: "A: まいあさ、なにをしますか。", de: "A: Was machen Sie jeden Morgen?" },
      { jp: "B: シャワーを浴びて、朝ごはんを食べて、出かけます。", reading: "B: シャワーをあびて、あさごはんをたべて、でかけます。", de: "B: Ich dusche, esse dann Frühstück und gehe aus dem Haus." }
    ],
    examples: [
      { jp: "朝ごはんを食べて、学校に行きます。", reading: "あさごはんをたべて、がっこうにいきます。", de: "Ich frühstücke und gehe dann zur Schule." },
      { jp: "宿題をして、寝ます。", reading: "しゅくだいをして、ねます。", de: "Ich mache die Hausaufgaben und gehe dann schlafen." },
      { jp: "手を洗って、ご飯を食べます。", reading: "てをあらって、ごはんをたべます。", de: "Ich wasche mir die Hände und esse dann." },
      { jp: "本を買って、家に帰りました。", reading: "ほんをかって、いえにかえりました。", de: "Ich habe ein Buch gekauft und bin dann nach Hause gegangen." },
      { jp: "シャワーを浴びて、出かけます。", reading: "シャワーをあびて、でかけます。", de: "Ich dusche und gehe dann aus dem Haus." },
      { jp: "友達に会って、映画を見ました。", reading: "ともだちにあって、えいがをみました。", de: "Ich habe einen Freund getroffen und dann einen Film gesehen." },
      { jp: "起きて、顔を洗って、コーヒーを飲みます。", reading: "おきて、かおをあらって、コーヒーをのみます。", de: "Ich stehe auf, wasche mein Gesicht und trinke dann Kaffee." },
      { jp: "駅に行って、電車に乗ります。", reading: "えきにいって、でんしゃにのります。", de: "Ich gehe zum Bahnhof und steige dann in den Zug." }
    ],
    cloze: {
      distractors: ["てから", "たり", "ながら"],
      items: [
        { text: "朝ごはんを食べ＿、学校に行きます。", answer: "て", de: "Ich frühstücke und gehe dann zur Schule." },
        { text: "シャワーを浴び＿、出かけます。", answer: "て", de: "Ich dusche und gehe dann aus dem Haus." },
        { text: "宿題をし＿、寝ます。", answer: "て", de: "Ich mache die Hausaufgaben und gehe dann schlafen." }
      ]
    }
  },

  // Wunsch & Absicht
  {
    id: "g031",
    pattern: "〜たい (möchte ... tun)",
    situation: "Du möchtest ausdrücken, was du dir selbst wünschst oder gerne tun würdest.",
    explanation: "Eigenen Wunsch ausdrücken: ます-Stamm + たい. Konjugiert wie ein i-Adjektiv.",
    example_jp: "日本に行きたいです。",
    example_reading: "にほんにいきたいです。",
    example_de: "Ich möchte nach Japan gehen.",
    dialogue: [
      { jp: "A: 将来、何をしたいですか。", reading: "A: しょうらい、なにをしたいですか。", de: "A: Was möchten Sie in Zukunft machen?" },
      { jp: "B: 日本に住みたいです。", reading: "B: にほんにすみたいです。", de: "B: Ich möchte in Japan leben." }
    ],
    examples: [
      { jp: "日本に行きたいです。", reading: "にほんにいきたいです。", de: "Ich möchte nach Japan fahren." },
      { jp: "すしを食べたいです。", reading: "すしをたべたいです。", de: "Ich möchte Sushi essen." },
      { jp: "冷たい水を飲みたいです。", reading: "つめたいみずをのみたいです。", de: "Ich möchte kaltes Wasser trinken." },
      { jp: "今日は早く帰りたいです。", reading: "きょうははやくかえりたいです。", de: "Heute möchte ich früh nach Hause gehen." },
      { jp: "新しい車を買いたいです。", reading: "あたらしいくるまをかいたいです。", de: "Ich möchte ein neues Auto kaufen." },
      { jp: "週末は休みたいです。", reading: "しゅうまつはやすみたいです。", de: "Am Wochenende möchte ich mich ausruhen." },
      { jp: "映画を見たいです。", reading: "えいがをみたいです。", de: "Ich möchte einen Film sehen." },
      { jp: "日本語が上手になりたいです。", reading: "にほんごがじょうずになりたいです。", de: "Ich möchte gut in Japanisch werden." }
    ],
    cloze: {
      distractors: ["ます", "ました", "ませんか"],
      items: [
        { text: "日本に行き＿。", answer: "たいです", de: "Ich möchte nach Japan fahren." },
        { text: "すしを食べ＿。", answer: "たいです", de: "Ich möchte Sushi essen." },
        { text: "映画を見＿。", answer: "たいです", de: "Ich möchte einen Film sehen." },
        { text: "新しい車を買い＿。", answer: "たいです", de: "Ich möchte ein neues Auto kaufen." }
      ]
    }
  },
  {
    id: "g032",
    pattern: "〜に行きます / 来ます / 帰ります",
    reading: "〜にいきます / きます / かえります",
    situation: "Du möchtest sagen, zu welchem Zweck du irgendwohin gehst, kommst oder zurückkehrst.",
    explanation: "Zweck einer Bewegung ausdrücken: Verbstamm + に + 行く/来る/帰る.",
    example_jp: "ご飯を食べに行きます。",
    example_reading: "ごはんをたべにいきます。",
    example_de: "Ich gehe Essen (um zu essen).",
    dialogue: [
      { jp: "A: どこに行くんですか。", reading: "A: どこにいくんですか。", de: "A: Wohin gehen Sie?" },
      { jp: "B: 本を買いに書店に行きます。", reading: "B: ほんをかいにしょてんにいきます。", de: "B: Ich gehe in die Buchhandlung, um ein Buch zu kaufen." }
    ],
    examples: [
      { jp: "ご飯を食べに行きます。", reading: "ごはんをたべにいきます。", de: "Ich gehe essen." },
      { jp: "映画を見に行きます。", reading: "えいがをみにいきます。", de: "Ich gehe einen Film sehen." },
      { jp: "友達は日本へ日本語を勉強しに来ました。", reading: "ともだちはにほんへにほんごをべんきょうしにきました。", de: "Mein Freund ist nach Japan gekommen, um Japanisch zu lernen." },
      { jp: "本を買いに行きます。", reading: "ほんをかいにいきます。", de: "Ich gehe ein Buch kaufen." },
      { jp: "母は買い物に行きました。", reading: "はははかいものにいきました。", de: "Meine Mutter ist einkaufen gegangen." },
      { jp: "海へ泳ぎに行きたいです。", reading: "うみへおよぎにいきたいです。", de: "Ich möchte ans Meer schwimmen gehen." },
      { jp: "昼ご飯を食べに家へ帰ります。", reading: "ひるごはんをたべにいえへかえります。", de: "Ich gehe nach Hause, um Mittag zu essen." },
      { jp: "公園へ散歩に行きます。", reading: "こうえんへさんぽにいきます。", de: "Ich gehe in den Park spazieren." }
    ],
    cloze: {
      distractors: ["へ", "で", "を"],
      items: [
        { text: "ご飯を食べ＿行きます。", answer: "に", de: "Ich gehe essen." },
        { text: "映画を見＿行きます。", answer: "に", de: "Ich gehe einen Film sehen." },
        { text: "本を買い＿行きます。", answer: "に", de: "Ich gehe ein Buch kaufen." },
        { text: "公園へ散歩＿行きます。", answer: "に", de: "Ich gehe in den Park spazieren." }
      ]
    }
  },

  // Begründung & Kontrast
  {
    id: "g033",
    pattern: "〜から (weil / da — Begründung)",
    situation: "Du möchtest erklären, warum du etwas tust oder nicht tust.",
    explanation: "Begründung angeben: [Grund]から、[Ergebnis]. Steht nach dem Grund-Satz.",
    example_jp: "眠いから、寝ます。",
    example_reading: "ねむいから、ねます。",
    example_de: "Da ich müde bin, gehe ich schlafen.",
    dialogue: [
      { jp: "A: どうして早く帰るんですか。", reading: "A: どうしてはやくかえるんですか。", de: "A: Warum gehen Sie früh nach Hause?" },
      { jp: "B: 子供が熱があるから、早く帰ります。", reading: "B: こどもがねつがあるから、はやくかえります。", de: "B: Weil mein Kind Fieber hat, gehe ich früh." }
    ],
    examples: [
      { jp: "眠いから、寝ます。", reading: "ねむいから、ねます。", de: "Weil ich müde bin, gehe ich schlafen." },
      { jp: "今日は寒いから、コートを着ます。", reading: "きょうはさむいから、コートをきます。", de: "Weil es heute kalt ist, ziehe ich einen Mantel an." },
      { jp: "時間がないから、急ぎます。", reading: "じかんがないから、いそぎます。", de: "Weil ich keine Zeit habe, beeile ich mich." },
      { jp: "おいしいから、よく食べます。", reading: "おいしいから、よくたべます。", de: "Weil es lecker ist, esse ich es oft." },
      { jp: "明日は休みだから、遅くまで起きます。", reading: "あしたはやすみだから、おそくまでおきます。", de: "Weil morgen frei ist, bleibe ich lange wach." },
      { jp: "雨が降っているから、行きません。", reading: "あめがふっているから、いきません。", de: "Weil es regnet, gehe ich nicht." },
      { jp: "お金がないから、買いません。", reading: "おかねがないから、かいません。", de: "Weil ich kein Geld habe, kaufe ich es nicht." },
      { jp: "日本語が好きだから、毎日勉強します。", reading: "にほんごがすきだから、まいにちべんきょうします。", de: "Weil ich Japanisch mag, lerne ich jeden Tag." }
    ],
    cloze: {
      distractors: ["けど", "まで", "より"],
      items: [
        { text: "眠い＿、寝ます。", answer: "から", de: "Weil ich müde bin, gehe ich schlafen." },
        { text: "今日は寒い＿、コートを着ます。", answer: "から", de: "Weil es heute kalt ist, ziehe ich einen Mantel an." },
        { text: "時間がない＿、急ぎます。", answer: "から", de: "Weil ich keine Zeit habe, beeile ich mich." },
        { text: "お金がない＿、買いません。", answer: "から", de: "Weil ich kein Geld habe, kaufe ich es nicht." }
      ]
    }
  },
  {
    id: "g034",
    pattern: "〜が / 〜けど (aber / jedoch)",
    situation: "Du möchtest einen Gegensatz einräumen — etwas stimmt, aber es gibt eine Einschränkung.",
    explanation: "Kontrast oder Einschränkung ausdrücken. が (neutral/förmlich), けど (umgangssprachlich).",
    example_jp: "日本語は好きですが、難しいです。",
    example_reading: "にほんごはすきですが、むずかしいです。",
    example_de: "Ich mag Japanisch, aber es ist schwierig.",
    dialogue: [
      { jp: "A: その映画はどうでしたか。", reading: "A: そのえいがはどうでしたか。", de: "A: Wie war der Film?" },
      { jp: "B: 面白かったけど、ちょっと長かったです。", reading: "B: おもしろかったけど、ちょっとながかったです。", de: "B: Interessant, aber etwas zu lang." }
    ],
    examples: [
      { jp: "日本語は好きですが、難しいです。", reading: "にほんごはすきですが、むずかしいです。", de: "Ich mag Japanisch, aber es ist schwierig." },
      { jp: "この店は安いですが、おいしくないです。", reading: "このみせはやすいですが、おいしくないです。", de: "Dieser Laden ist billig, aber nicht lecker." },
      { jp: "行きたいけど、時間がないです。", reading: "いきたいけど、じかんがないです。", de: "Ich möchte gehen, aber ich habe keine Zeit." },
      { jp: "天気はいいですが、寒いです。", reading: "てんきはいいですが、さむいです。", de: "Das Wetter ist gut, aber es ist kalt." },
      { jp: "この本は面白いけど、長いです。", reading: "このほんはおもしろいけど、ながいです。", de: "Dieses Buch ist interessant, aber lang." },
      { jp: "彼は若いですが、まじめです。", reading: "かれはわかいですが、まじめです。", de: "Er ist jung, aber gewissenhaft." },
      { jp: "すしは好きだけど、高いです。", reading: "すしはすきだけど、たかいです。", de: "Ich mag Sushi, aber es ist teuer." },
      { jp: "勉強しましたが、テストは難しかったです。", reading: "べんきょうしましたが、テストはむずかしかったです。", de: "Ich habe gelernt, aber der Test war schwierig." }
    ],
    cloze: {
      distractors: ["から", "まで", "ので"],
      items: [
        { text: "日本語は好きです＿、難しいです。", answer: "が", de: "Ich mag Japanisch, aber es ist schwierig." },
        { text: "天気はいいです＿、寒いです。", answer: "が", de: "Das Wetter ist gut, aber es ist kalt." },
        { text: "この店は安いです＿、おいしくないです。", answer: "が", de: "Dieser Laden ist billig, aber nicht lecker." },
        { text: "彼は若いです＿、まじめです。", answer: "が", de: "Er ist jung, aber gewissenhaft." }
      ]
    }
  },

  // Zeit-Ausdrücke
  {
    id: "g035",
    pattern: "〜前に (bevor / vor)",
    reading: "〜まえに",
    situation: "Du möchtest beschreiben, was du tust, bevor eine andere Sache passiert.",
    explanation: "Zeitliche Abfolge: 'vor X'. Verb im Wörterbuch-Form + 前に.",
    example_jp: "寝る前に、歯を磨きます。",
    example_reading: "ねるまえに、はをみがきます。",
    example_de: "Bevor ich schlafe, putze ich die Zähne.",
    dialogue: [
      { jp: "A: 寝る前に何かしますか。", reading: "A: ねるまえになにかしますか。", de: "A: Machen Sie etwas, bevor Sie schlafen?" },
      { jp: "B: はい、お茶を飲みます。", reading: "B: はい、おちゃをのみます。", de: "B: Ja, ich trinke Tee." }
    ],
    examples: [
      { jp: "寝る前に、歯を磨きます。", reading: "ねるまえに、はをみがきます。", de: "Bevor ich schlafe, putze ich die Zähne." },
      { jp: "ご飯を食べる前に、手を洗います。", reading: "ごはんをたべるまえに、てをあらいます。", de: "Bevor ich esse, wasche ich mir die Hände." },
      { jp: "出かける前に、電気を消します。", reading: "でかけるまえに、でんきをけします。", de: "Bevor ich ausgehe, mache ich das Licht aus." },
      { jp: "テストの前に、よく勉強します。", reading: "テストのまえに、よくべんきょうします。", de: "Vor dem Test lerne ich viel." },
      { jp: "日本に来る前に、日本語を勉強しました。", reading: "にほんにくるまえに、にほんごをべんきょうしました。", de: "Bevor ich nach Japan kam, habe ich Japanisch gelernt." },
      { jp: "会議の前に、コーヒーを飲みます。", reading: "かいぎのまえに、コーヒーをのみます。", de: "Vor der Besprechung trinke ich Kaffee." },
      { jp: "買い物に行く前に、お金を取ります。", reading: "かいものにいくまえに、おかねをとります。", de: "Bevor ich einkaufen gehe, nehme ich Geld mit." },
      { jp: "寝る前に、本を読みます。", reading: "ねるまえに、ほんをよみます。", de: "Bevor ich schlafe, lese ich ein Buch." }
    ],
    cloze: {
      distractors: ["後で", "時", "まで"],
      items: [
        { text: "寝る＿、歯を磨きます。", answer: "前に", de: "Bevor ich schlafe, putze ich die Zähne." },
        { text: "ご飯を食べる＿、手を洗います。", answer: "前に", de: "Bevor ich esse, wasche ich mir die Hände." },
        { text: "出かける＿、電気を消します。", answer: "前に", de: "Bevor ich ausgehe, mache ich das Licht aus." },
        { text: "寝る＿、本を読みます。", answer: "前に", de: "Bevor ich schlafe, lese ich ein Buch." }
      ]
    }
  },
  {
    id: "g036",
    pattern: "〜後で / 〜てから (nachdem / danach)",
    reading: "〜あとで / 〜てから",
    situation: "Du möchtest beschreiben, was du tust, nachdem etwas anderes abgeschlossen ist.",
    explanation: "後で: nach einem Ereignis. てから: direkt danach, Reihenfolge betont.",
    example_jp: "ご飯を食べた後で、散歩します。",
    example_reading: "ごはんをたべたあとで、さんぽします。",
    example_de: "Nachdem ich gegessen habe, mache ich einen Spaziergang.",
    dialogue: [
      { jp: "A: いつ電話しますか。", reading: "A: いつでんわしますか。", de: "A: Wann rufen Sie an?" },
      { jp: "B: 会議が終わってから、電話します。", reading: "B: かいぎがおわってから、でんわします。", de: "B: Ich rufe an, nachdem das Meeting vorbei ist." }
    ],
    examples: [
      { jp: "ご飯を食べた後で、散歩します。", reading: "ごはんをたべたあとで、さんぽします。", de: "Nachdem ich gegessen habe, mache ich einen Spaziergang." },
      { jp: "宿題をしてから、テレビを見ます。", reading: "しゅくだいをしてから、テレビをみます。", de: "Nachdem ich die Hausaufgaben gemacht habe, sehe ich fern." },
      { jp: "仕事が終わった後で、買い物に行きます。", reading: "しごとがおわったあとで、かいものにいきます。", de: "Nach der Arbeit gehe ich einkaufen." },
      { jp: "手を洗ってから、ご飯を食べます。", reading: "てをあらってから、ごはんをたべます。", de: "Nachdem ich mir die Hände gewaschen habe, esse ich." },
      { jp: "映画を見た後で、お茶を飲みました。", reading: "えいがをみたあとで、おちゃをのみました。", de: "Nach dem Film haben wir Tee getrunken." },
      { jp: "学校が終わってから、友達と遊びます。", reading: "がっこうがおわってから、ともだちとあそびます。", de: "Nach der Schule spiele ich mit Freunden." },
      { jp: "シャワーを浴びた後で、寝ます。", reading: "シャワーをあびたあとで、ねます。", de: "Nachdem ich geduscht habe, gehe ich schlafen." },
      { jp: "勉強してから、ゲームをします。", reading: "べんきょうしてから、ゲームをします。", de: "Nachdem ich gelernt habe, spiele ich ein Spiel." }
    ],
    cloze: {
      distractors: ["前に", "時", "まで"],
      items: [
        { text: "ご飯を食べた＿、散歩します。", answer: "後で", de: "Nachdem ich gegessen habe, mache ich einen Spaziergang." },
        { text: "仕事が終わった＿、買い物に行きます。", answer: "後で", de: "Nach der Arbeit gehe ich einkaufen." },
        { text: "映画を見た＿、お茶を飲みました。", answer: "後で", de: "Nach dem Film haben wir Tee getrunken." },
        { text: "シャワーを浴びた＿、寝ます。", answer: "後で", de: "Nachdem ich geduscht habe, gehe ich schlafen." }
      ]
    }
  },
  {
    id: "g037",
    pattern: "〜ごろ (ungefähr / gegen)",
    situation: "Du möchtest eine ungefähre Zeit angeben, ohne den genauen Zeitpunkt zu kennen.",
    explanation: "Ungefähre Zeit oder Menge angeben: 'gegen X Uhr' / 'ungefähr'.",
    example_jp: "七時ごろ、起きます。",
    example_reading: "しちじごろ、おきます。",
    example_de: "Ich stehe ungefähr um 7 Uhr auf.",
    dialogue: [
      { jp: "A: 何時ごろ家に帰りますか。", reading: "A: なんじごろいえにかえりますか。", de: "A: Gegen wie viel Uhr kommen Sie nach Hause?" },
      { jp: "B: 夜七時ごろだと思います。", reading: "B: よるしちじごろだとおもいます。", de: "B: So gegen 19 Uhr, glaube ich." }
    ],
    examples: [
      { jp: "七時ごろ、起きます。", reading: "しちじごろ、おきます。", de: "Ich stehe ungefähr um 7 Uhr auf." },
      { jp: "十二時ごろ、昼ご飯を食べます。", reading: "じゅうにじごろ、ひるごはんをたべます。", de: "Gegen 12 Uhr esse ich Mittag." },
      { jp: "八時ごろ、家を出ます。", reading: "はちじごろ、いえをでます。", de: "Gegen 8 Uhr verlasse ich das Haus." },
      { jp: "三時ごろ、お茶を飲みます。", reading: "さんじごろ、おちゃをのみます。", de: "Gegen 15 Uhr trinke ich Tee." },
      { jp: "十一時ごろ、寝ます。", reading: "じゅういちじごろ、ねます。", de: "Gegen 23 Uhr gehe ich schlafen." },
      { jp: "六時ごろ、家に帰ります。", reading: "ろくじごろ、いえにかえります。", de: "Gegen 18 Uhr komme ich nach Hause." },
      { jp: "九時ごろ、会社に着きます。", reading: "くじごろ、かいしゃにつきます。", de: "Gegen 9 Uhr komme ich in der Firma an." },
      { jp: "五時ごろ、友達に会います。", reading: "ごじごろ、ともだちにあいます。", de: "Gegen 17 Uhr treffe ich einen Freund." }
    ],
    cloze: {
      distractors: ["ぐらい", "まで", "から"],
      items: [
        { text: "七時＿、起きます。", answer: "ごろ", de: "Ich stehe gegen 7 Uhr auf." },
        { text: "八時＿、家を出ます。", answer: "ごろ", de: "Gegen 8 Uhr verlasse ich das Haus." },
        { text: "十一時＿、寝ます。", answer: "ごろ", de: "Gegen 23 Uhr gehe ich schlafen." },
        { text: "六時＿、家に帰ります。", answer: "ごろ", de: "Gegen 18 Uhr komme ich nach Hause." }
      ]
    }
  },

  // Adjektiv-Grammatik
  {
    id: "g038",
    pattern: "い-Adjektiv Konjugation",
    situation: "Du möchtest ein い-Adjektiv verneinen oder in die Vergangenheit setzen.",
    explanation: "い-Adj: Positiv: 高い. Negativ: 高くない. Vergangenheit: 高かった. Neg-Verg: 高くなかった. て-Form: 高くて.",
    example_jp: "このりんごは高くないです。",
    example_reading: "このりんごはたかくないです。",
    example_de: "Dieser Apfel ist nicht teuer.",
    dialogue: [
      { jp: "A: その映画は面白いですか。", reading: "A: そのえいがはおもしろいですか。", de: "A: Ist der Film interessant?" },
      { jp: "B: 面白いですよ。でも、ちょっと怖いです。", reading: "B: おもしろいですよ。でも、ちょっとこわいです。", de: "B: Ja, schon. Aber etwas gruselig." }
    ],
    examples: [
      { jp: "このりんごは高くないです。", reading: "このりんごはたかくないです。", de: "Dieser Apfel ist nicht teuer." },
      { jp: "今日は暑いです。", reading: "きょうはあついです。", de: "Heute ist es heiß." },
      { jp: "昨日は寒かったです。", reading: "きのうはさむかったです。", de: "Gestern war es kalt." },
      { jp: "この映画は面白くなかったです。", reading: "このえいがはおもしろくなかったです。", de: "Dieser Film war nicht interessant." },
      { jp: "この部屋は広くて、明るいです。", reading: "このへやはひろくて、あかるいです。", de: "Dieses Zimmer ist groß und hell." },
      { jp: "天気がよくないです。", reading: "てんきがよくないです。", de: "Das Wetter ist nicht gut." },
      { jp: "そのかばんは新しいです。", reading: "そのかばんはあたらしいです。", de: "Diese Tasche ist neu." },
      { jp: "ラーメンは安くておいしいです。", reading: "ラーメンはやすくておいしいです。", de: "Ramen ist billig und lecker." }
    ],
    cloze: {
      distractors: ["いです", "かったです", "くないです"],
      items: [
        { text: "このりんごは高＿。", answer: "くないです", distractors: ["いです", "かったです", "くなかったです"], de: "Dieser Apfel ist nicht teuer." },
        { text: "昨日は寒＿。", answer: "かったです", distractors: ["いです", "くないです", "くなかったです"], de: "Gestern war es kalt." },
        { text: "この映画は面白＿。", answer: "くなかったです", distractors: ["いです", "かったです", "くないです"], de: "Dieser Film war nicht interessant." },
        { text: "今日は暑＿。", answer: "いです", distractors: ["かったです", "くないです", "くなかったです"], de: "Heute ist es heiß." }
      ]
    }
  },
  {
    id: "g039",
    pattern: "な-Adjektiv + です / な + Nomen",
    situation: "Du möchtest ein な-Adjektiv als Aussage verwenden oder direkt vor einem Nomen einsetzen.",
    explanation: "な-Adj: als Prädikat + です. Vor Nomen: Adj + な + Nomen. Negation: じゃない.",
    example_jp: "あの人はきれいです。/ きれいな人です。",
    example_reading: "あのひとはきれいです。／きれいなひとです。",
    example_de: "Diese Person ist schön. / Eine schöne Person.",
    dialogue: [
      { jp: "A: 田中さんはどんな人ですか。", reading: "A: たなかさんはどんなひとですか。", de: "A: Was für ein Mensch ist Frau Tanaka?" },
      { jp: "B: とても親切で、まじめな人です。", reading: "B: とてもしんせつで、まじめなひとです。", de: "B: Sie ist sehr freundlich und gewissenhaft." }
    ],
    examples: [
      { jp: "あの人はきれいです。", reading: "あのひとはきれいです。", de: "Diese Person ist schön." },
      { jp: "田中さんは親切な人です。", reading: "たなかさんはしんせつなひとです。", de: "Herr Tanaka ist ein freundlicher Mensch." },
      { jp: "この町は静かです。", reading: "このまちはしずかです。", de: "Diese Stadt ist ruhig." },
      { jp: "彼女は有名な歌手です。", reading: "かのじょはゆうめいなかしゅです。", de: "Sie ist eine berühmte Sängerin." },
      { jp: "この問題は簡単です。", reading: "このもんだいはかんたんです。", de: "Diese Aufgabe ist einfach." },
      { jp: "日本語の勉強は大変ですが、楽しいです。", reading: "にほんごのべんきょうはたいへんですが、たのしいです。", de: "Japanisch lernen ist anstrengend, aber macht Spaß." },
      { jp: "ここは便利な所です。", reading: "ここはべんりなところです。", de: "Das hier ist ein praktischer Ort." },
      { jp: "私の部屋はきれいじゃないです。", reading: "わたしのへやはきれいじゃないです。", de: "Mein Zimmer ist nicht sauber." }
    ],
    cloze: {
      distractors: ["の", "い", "だ"],
      items: [
        { text: "田中さんは親切＿人です。", answer: "な", de: "Herr Tanaka ist ein freundlicher Mensch." },
        { text: "彼女は有名＿歌手です。", answer: "な", de: "Sie ist eine berühmte Sängerin." },
        { text: "ここは便利＿所です。", answer: "な", de: "Das hier ist ein praktischer Ort." }
      ]
    }
  },
  {
    id: "g040",
    pattern: "〜は〜より〜です (Vergleich: X ist ... als Y)",
    situation: "Du möchtest zwei Dinge direkt miteinander vergleichen.",
    explanation: "Vergleich zweier Dinge: 'X ist [Adj]-er als Y'. より markiert den Vergleichspunkt.",
    example_jp: "東京は大阪より大きいです。",
    example_reading: "とうきょうはおおさかよりおおきいです。",
    example_de: "Tokio ist größer als Osaka.",
    dialogue: [
      { jp: "A: バスと電車、どちらが速いですか。", reading: "A: バスとでんしゃ、どちらがはやいですか。", de: "A: Was ist schneller, der Bus oder die Bahn?" },
      { jp: "B: 電車はバスより速いです。", reading: "B: でんしゃはバスよりはやいです。", de: "B: Die Bahn ist schneller als der Bus." }
    ],
    examples: [
      { jp: "東京は大阪より大きいです。", reading: "とうきょうはおおさかよりおおきいです。", de: "Tokio ist größer als Osaka." },
      { jp: "今日は昨日より寒いです。", reading: "きょうはきのうよりさむいです。", de: "Heute ist es kälter als gestern." },
      { jp: "飛行機は電車より速いです。", reading: "ひこうきはでんしゃよりはやいです。", de: "Das Flugzeug ist schneller als der Zug." },
      { jp: "この店はあの店より安いです。", reading: "このみせはあのみせよりやすいです。", de: "Dieser Laden ist billiger als jener." },
      { jp: "兄は私より背が高いです。", reading: "あにはわたしよりせがたかいです。", de: "Mein großer Bruder ist größer als ich." },
      { jp: "日本語は英語より難しいです。", reading: "にほんごはえいごよりむずかしいです。", de: "Japanisch ist schwieriger als Englisch." },
      { jp: "夏は冬より暑いです。", reading: "なつはふゆよりあついです。", de: "Der Sommer ist heißer als der Winter." },
      { jp: "この本はあの本より面白いです。", reading: "このほんはあのほんよりおもしろいです。", de: "Dieses Buch ist interessanter als jenes." }
    ],
    cloze: {
      distractors: ["から", "まで", "と"],
      items: [
        { text: "東京は大阪＿大きいです。", answer: "より", de: "Tokio ist größer als Osaka." },
        { text: "今日は昨日＿寒いです。", answer: "より", de: "Heute ist es kälter als gestern." },
        { text: "飛行機は電車＿速いです。", answer: "より", de: "Das Flugzeug ist schneller als der Zug." },
        { text: "日本語は英語＿難しいです。", answer: "より", de: "Japanisch ist schwieriger als Englisch." }
      ]
    }
  },
  {
    id: "g040b",
    pattern: "〜より〜のほうが〜 (Präferenz: X ist besser/lieber als Y)",
    reading: "〜より〜のほうが〜",
    situation: "Du möchtest ausdrücken, welche von zwei Optionen du bevorzugst.",
    explanation: "Drückt Präferenz oder Überlegenheit aus: 'X ist [Adj]-er als Y' / 'X mag ich lieber als Y'. のほうが hebt hervor, was bevorzugt wird — のほうが steht beim Favoriten, より beim Vergleichsobjekt. Struktur: [Vergleich] より [Favorit] のほうが [Adjektiv] です. Die Reihenfolge ist flexibel — auch [Favorit] のほうが [Vergleich] より geht.",
    example_jp: "コーヒーよりお茶のほうが好きです。",
    example_reading: "コーヒーよりおちゃのほうがすきです。",
    example_de: "Ich mag Tee lieber als Kaffee.",
    dialogue: [
      { jp: "A: コーヒーとお茶、どちらが好きですか。", reading: "A: コーヒーとおちゃ、どちらがすきですか。", de: "A: Was mögen Sie lieber, Kaffee oder Tee?" },
      { jp: "B: コーヒーよりお茶のほうが好きです。", reading: "B: コーヒーよりおちゃのほうがすきです。", de: "B: Ich mag Tee lieber als Kaffee." }
    ],
    examples: [
      { jp: "コーヒーよりお茶のほうが好きです。", reading: "コーヒーよりおちゃのほうがすきです。", de: "Ich mag Tee lieber als Kaffee." },
      { jp: "電車のほうがバスより速いです。", reading: "でんしゃのほうがバスよりはやいです。", de: "Die Bahn ist schneller als der Bus." },
      { jp: "夏より冬のほうが好きです。", reading: "なつよりふゆのほうがすきです。", de: "Ich mag den Winter lieber als den Sommer." },
      { jp: "この店のほうがあの店より安いです。", reading: "このみせのほうがあのみせよりやすいです。", de: "Dieser Laden ist billiger als jener." },
      { jp: "肉より魚のほうが好きです。", reading: "にくよりさかなのほうがすきです。", de: "Ich mag Fisch lieber als Fleisch." },
      { jp: "犬のほうが猫より好きです。", reading: "いぬのほうがねこよりすきです。", de: "Ich mag Hunde lieber als Katzen." },
      { jp: "東京のほうが大阪より大きいです。", reading: "とうきょうのほうがおおさかよりおおきいです。", de: "Tokio ist größer als Osaka." },
      { jp: "今日のほうが昨日より暖かいです。", reading: "きょうのほうがきのうよりあたたかいです。", de: "Heute ist es wärmer als gestern." }
    ],
    cloze: {
      distractors: ["より", "から", "まで"],
      items: [
        { text: "コーヒーよりお茶＿好きです。", answer: "のほうが", de: "Ich mag Tee lieber als Kaffee." },
        { text: "夏より冬＿好きです。", answer: "のほうが", de: "Ich mag den Winter lieber als den Sommer." },
        { text: "肉より魚＿好きです。", answer: "のほうが", de: "Ich mag Fisch lieber als Fleisch." }
      ]
    }
  },
  {
    id: "g041",
    pattern: "〜の中で〜が一番〜 (Superlativ: am ...sten von allen)",
    reading: "〜のなかで〜がいちばん〜",
    situation: "Du möchtest sagen, was von einer ganzen Gruppe am besten oder liebsten ist.",
    explanation: "Superlativ: 'Von allen X ist Y am [Adj]-sten'. 一番 = Nummer eins / am meisten.",
    example_jp: "果物の中でりんごが一番好きです。",
    example_reading: "くだもののなかでりんごがいちばんすきです。",
    example_de: "Von allen Früchten mag ich Äpfel am liebsten.",
    dialogue: [
      { jp: "A: 四季の中で何が一番好きですか。", reading: "A: しきのなかでなにがいちばんすきですか。", de: "A: Welche Jahreszeit mögen Sie am liebsten?" },
      { jp: "B: 秋が一番好きです。涼しくてきれいですから。", reading: "B: あきがいちばんすきです。すずしくてきれいですから。", de: "B: Ich mag Herbst am liebsten. Weil er kühl und schön ist." }
    ],
    examples: [
      { jp: "果物の中でりんごが一番好きです。", reading: "くだもののなかでりんごがいちばんすきです。", de: "Von allen Früchten mag ich Äpfel am liebsten." },
      { jp: "クラスの中で田中さんが一番背が高いです。", reading: "クラスのなかでたなかさんがいちばんせがたかいです。", de: "In der Klasse ist Herr Tanaka am größten." },
      { jp: "一年の中で八月が一番暑いです。", reading: "いちねんのなかではちがつがいちばんあついです。", de: "Im Jahr ist der August am heißesten." },
      { jp: "スポーツの中でサッカーが一番好きです。", reading: "スポーツのなかでサッカーがいちばんすきです。", de: "Von allen Sportarten mag ich Fußball am liebsten." },
      { jp: "日本の中で東京が一番大きいです。", reading: "にほんのなかでとうきょうがいちばんおおきいです。", de: "In Japan ist Tokio am größten." },
      { jp: "家族の中で父が一番早く起きます。", reading: "かぞくのなかでちちがいちばんはやくおきます。", de: "In der Familie steht mein Vater am frühesten auf." },
      { jp: "飲み物の中でお茶が一番好きです。", reading: "のみもののなかでおちゃがいちばんすきです。", de: "Von allen Getränken mag ich Tee am liebsten." },
      { jp: "四季の中で春が一番好きです。", reading: "しきのなかではるがいちばんすきです。", de: "Von allen Jahreszeiten mag ich den Frühling am liebsten." }
    ],
    cloze: {
      distractors: ["とても", "もっと", "よく"],
      items: [
        { text: "果物の中でりんごが＿好きです。", answer: "一番", de: "Von allen Früchten mag ich Äpfel am liebsten." },
        { text: "スポーツの中でサッカーが＿好きです。", answer: "一番", de: "Von allen Sportarten mag ich Fußball am liebsten." },
        { text: "一年の中で八月が＿暑いです。", answer: "一番", de: "Im Jahr ist der August am heißesten." },
        { text: "飲み物の中でお茶が＿好きです。", answer: "一番", de: "Von allen Getränken mag ich Tee am liebsten." }
      ]
    }
  },
  {
    id: "g042",
    pattern: "〜をください (Bitte geben Sie mir ...)",
    situation: "Du möchtest in einem Geschäft oder Restaurant etwas bestellen.",
    explanation: "Etwas bestellen oder bitten: Objekt + をください. In Geschäften und Restaurants gebräuchlich.",
    example_jp: "コーヒーをください。",
    example_de: "Einen Kaffee bitte.",
    dialogue: [
      { jp: "A: いらっしゃいませ。何になさいますか。", reading: "A: いらっしゃいませ。なにになさいますか。", de: "A: Willkommen! Was darf es sein?" },
      { jp: "B: コーヒーとサンドイッチをください。", de: "B: Einen Kaffee und ein Sandwich bitte." }
    ],
    examples: [
      { jp: "コーヒーをください。", reading: "コーヒーをください。", de: "Einen Kaffee bitte." },
      { jp: "水を一杯ください。", reading: "みずをいっぱいください。", de: "Ein Glas Wasser bitte." },
      { jp: "これを三つください。", reading: "これをみっつください。", de: "Geben Sie mir bitte drei davon." },
      { jp: "その本をください。", reading: "そのほんをください。", de: "Geben Sie mir bitte das Buch." },
      { jp: "りんごを五つください。", reading: "りんごをいつつください。", de: "Fünf Äpfel bitte." },
      { jp: "切符を二枚ください。", reading: "きっぷをにまいください。", de: "Zwei Fahrkarten bitte." },
      { jp: "お茶をください。", reading: "おちゃをください。", de: "Einen Tee bitte." },
      { jp: "メニューをください。", reading: "メニューをください。", de: "Die Speisekarte bitte." }
    ],
    cloze: {
      distractors: ["はどうですか", "がいいです", "でした"],
      items: [
        { text: "コーヒー＿。", answer: "をください", de: "Einen Kaffee bitte." },
        { text: "お茶＿。", answer: "をください", de: "Einen Tee bitte." },
        { text: "メニュー＿。", answer: "をください", de: "Die Speisekarte bitte." },
        { text: "その本＿。", answer: "をください", de: "Geben Sie mir das Buch bitte." }
      ]
    }
  },
  {
    id: "g043",
    pattern: "〜はどうですか (Wie ist/wäre ... ?)",
    situation: "Du möchtest nach jemandes Meinung zu etwas fragen oder etwas sanft vorschlagen.",
    explanation: "Nach einer Meinung fragen oder etwas vorschlagen: 'Wie wäre es mit...?'",
    example_jp: "お茶はどうですか。",
    example_reading: "おちゃはどうですか。",
    example_de: "Wie wäre es mit Tee?",
    dialogue: [
      { jp: "A: 少し疲れましたね。休憩はどうですか。", reading: "A: すこしつかれましたね。きゅうけいはどうですか。", de: "A: Sie sehen etwas müde aus. Wie wäre es mit einer Pause?" },
      { jp: "B: いいですね。ありがとうございます。", de: "B: Gute Idee. Danke schön." }
    ],
    examples: [
      { jp: "お茶はどうですか。", reading: "おちゃはどうですか。", de: "Wie wäre es mit Tee?" },
      { jp: "この映画はどうですか。", reading: "このえいがはどうですか。", de: "Wie ist dieser Film?" },
      { jp: "明日はどうですか。", reading: "あしたはどうですか。", de: "Wie wäre es mit morgen?" },
      { jp: "日本の生活はどうですか。", reading: "にほんのせいかつはどうですか。", de: "Wie ist das Leben in Japan?" },
      { jp: "新しい仕事はどうですか。", reading: "あたらしいしごとはどうですか。", de: "Wie ist die neue Arbeit?" },
      { jp: "この店はどうですか。", reading: "このみせはどうですか。", de: "Wie wäre es mit diesem Laden?" },
      { jp: "コーヒーをもう一杯はどうですか。", reading: "コーヒーをもういっぱいはどうですか。", de: "Wie wäre es mit noch einer Tasse Kaffee?" },
      { jp: "週末の旅行はどうですか。", reading: "しゅうまつのりょこうはどうですか。", de: "Wie wäre es mit einer Reise am Wochenende?" }
    ],
    cloze: {
      distractors: ["をください", "がいいです", "でした"],
      items: [
        { text: "お茶＿。", answer: "はどうですか", de: "Wie wäre es mit Tee?" },
        { text: "この映画＿。", answer: "はどうですか", de: "Wie ist dieser Film?" },
        { text: "新しい仕事＿。", answer: "はどうですか", de: "Wie ist die neue Arbeit?" },
        { text: "明日＿。", answer: "はどうですか", de: "Wie wäre es mit morgen?" }
      ]
    }
  },
  {
    id: "g044",
    pattern: "〜だけ (nur / lediglich)",
    situation: "Du möchtest betonen, dass du wirklich nur eine begrenzte Menge oder Sache möchtest.",
    explanation: "Einschränkung ausdrücken: 'nur X und nichts anderes'.",
    example_jp: "少しだけ食べます。",
    example_reading: "すこしだけたべます。",
    example_de: "Ich esse nur ein bisschen.",
    dialogue: [
      { jp: "A: もっと食べませんか。", reading: "A: もっとたべませんか。", de: "A: Möchten Sie nicht mehr essen?" },
      { jp: "B: ありがとう。もう少しだけいただきます。", reading: "B: ありがとう。もうすこしだけいただきます。", de: "B: Danke. Ich nehme nur noch ein kleines bisschen." }
    ],
    examples: [
      { jp: "少しだけ食べます。", reading: "すこしだけたべます。", de: "Ich esse nur ein bisschen." },
      { jp: "水だけください。", reading: "みずだけください。", de: "Nur Wasser bitte." },
      { jp: "一人だけ来ました。", reading: "ひとりだけきました。", de: "Nur eine Person ist gekommen." },
      { jp: "今日は少しだけ勉強しました。", reading: "きょうはすこしだけべんきょうしました。", de: "Heute habe ich nur ein bisschen gelernt." },
      { jp: "私だけ日本語が分かります。", reading: "わたしだけにほんごがわかります。", de: "Nur ich verstehe Japanisch." },
      { jp: "コーヒーを一杯だけ飲みます。", reading: "コーヒーをいっぱいだけのみます。", de: "Ich trinke nur eine Tasse Kaffee." },
      { jp: "これだけ買います。", reading: "これだけかいます。", de: "Ich kaufe nur das." },
      { jp: "週末だけ休みます。", reading: "しゅうまつだけやすみます。", de: "Nur am Wochenende mache ich frei." }
    ],
    cloze: {
      distractors: ["も", "は", "まで"],
      items: [
        { text: "少し＿食べます。", answer: "だけ", de: "Ich esse nur ein bisschen." },
        { text: "水＿ください。", answer: "だけ", de: "Nur Wasser bitte." },
        { text: "一人＿来ました。", answer: "だけ", de: "Nur eine Person ist gekommen." },
        { text: "これ＿買います。", answer: "だけ", de: "Ich kaufe nur das." }
      ]
    }
  },
  {
    id: "g045",
    pattern: "数字 + 助数詞 (Zahlen mit Zählwörtern)",
    reading: "すうじ + じょすうし",
    situation: "Du möchtest eine genaue Anzahl von Gegenständen angeben und musst das richtige Zählwort wählen.",
    explanation: "Im Japanischen braucht man Zählwörter: 〜本 (zylindrische Dinge), 〜枚 (flache Dinge), 〜個 (kleine Objekte), 〜匹 (kleine Tiere), 〜人 (Personen), 〜台 (Maschinen).",
    example_jp: "えんぴつを三本ください。",
    example_reading: "えんぴつをさんぼんください。",
    example_de: "Bitte drei Bleistifte.",
    dialogue: [
      { jp: "A: 何かお入り用ですか。", reading: "A: なにかおいりようですか。", de: "A: Brauchen Sie etwas?" },
      { jp: "B: えんぴつを二本と、ノートを一冊ください。", reading: "B: えんぴつをにほんと、ノートをいっさつください。", de: "B: Bitte zwei Bleistifte und ein Heft." }
    ],
    examples: [
      { jp: "えんぴつを三本ください。", reading: "えんぴつをさんぼんください。", de: "Bitte drei Bleistifte." },
      { jp: "切手を五枚買いました。", reading: "きってをごまいかいました。", de: "Ich habe fünf Briefmarken gekauft." },
      { jp: "りんごを二個ください。", reading: "りんごをにこください。", de: "Bitte zwei Äpfel." },
      { jp: "犬が三匹います。", reading: "いぬがさんびきいます。", de: "Es sind drei Hunde da." },
      { jp: "学生が五人います。", reading: "がくせいがごにんいます。", de: "Es sind fünf Studenten da." },
      { jp: "車が二台あります。", reading: "くるまがにだいあります。", de: "Es sind zwei Autos da." },
      { jp: "ビールを一本ください。", reading: "ビールをいっぽんください。", de: "Ein Bier bitte." },
      { jp: "紙を三枚ください。", reading: "かみをさんまいください。", de: "Bitte drei Blatt Papier." }
    ],
    cloze: {
      distractors: ["枚", "個", "匹"],
      items: [
        { text: "えんぴつを三＿ください。", answer: "本", de: "Bitte drei Bleistifte." },
        { text: "切手を五＿買いました。", answer: "枚", distractors: ["本", "個", "台"], de: "Ich habe fünf Briefmarken gekauft." },
        { text: "りんごを二＿ください。", answer: "個", distractors: ["本", "枚", "匹"], de: "Bitte zwei Äpfel." },
        { text: "犬が三＿います。", answer: "匹", distractors: ["本", "人", "台"], de: "Es sind drei Hunde da." },
        { text: "学生が五＿います。", answer: "人", distractors: ["匹", "枚", "台"], de: "Es sind fünf Studenten da." },
        { text: "車が二＿あります。", answer: "台", distractors: ["本", "匹", "人"], de: "Es sind zwei Autos da." }
      ]
    }
  },
];
