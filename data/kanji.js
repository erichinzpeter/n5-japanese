const KANJI = [
  // Zahlen
  { id: "k001", char: "一", meaning: ["eins", "1"], speak: "いち", on: ["いち", "いつ"], kun: ["ひと", "ひとつ"], examples: ["一月 (いちがつ) — Januar", "一つ (ひとつ) — ein Ding"], sentences: [
    { jp: "りんごを一つください。", reading: "りんごをひとつください。", de: "Geben Sie mir bitte einen Apfel." },
    { jp: "一月はとても寒いです。", reading: "いちがつはとてもさむいです。", de: "Der Januar ist sehr kalt." }
  ]},
  { id: "k002", char: "二", meaning: ["zwei", "2"], speak: "に", on: ["に", "じ"], kun: ["ふた", "ふたつ"], examples: ["二月 (にがつ) — Februar", "二つ (ふたつ) — zwei Dinge"], sentences: [
    { jp: "コーヒーを二つお願いします。", reading: "コーヒーをふたつおねがいします。", de: "Zwei Kaffee bitte." },
    { jp: "二月に誕生日があります。", reading: "にがつにたんじょうびがあります。", de: "Mein Geburtstag ist im Februar." }
  ]},
  { id: "k003", char: "三", meaning: ["drei", "3"], speak: "さん", on: ["さん"], kun: ["み", "みっつ"], examples: ["三月 (さんがつ) — März", "三つ (みっつ) — drei Dinge"], sentences: [
    { jp: "三時に友達と会います。", reading: "さんじにともだちとあいます。", de: "Ich treffe mich um drei Uhr mit meinem Freund." },
    { jp: "三つのケーキを食べました。", reading: "みっつのケーキをたべました。", de: "Ich habe drei Kuchen gegessen." }
  ]},
  { id: "k004", char: "四", meaning: ["vier", "4"], speak: "よん", on: ["し"], kun: ["よ", "よん", "よっつ"], examples: ["四月 (しがつ) — April", "四つ (よっつ) — vier Dinge"], sentences: [
    { jp: "四月に学校が始まります。", reading: "しがつにがっこうがはじまります。", de: "Die Schule beginnt im April." },
    { jp: "家族は四人います。", reading: "かぞくはよにんいます。", de: "Meine Familie hat vier Personen." }
  ]},
  { id: "k005", char: "五", meaning: ["fünf", "5"], speak: "ご", on: ["ご"], kun: ["いつ", "いつつ"], examples: ["五月 (ごがつ) — Mai", "五つ (いつつ) — fünf Dinge"], sentences: [
    { jp: "五月は天気がいいです。", reading: "ごがつはてんきがいいです。", de: "Im Mai ist das Wetter schön." },
    { jp: "五時に家に帰ります。", reading: "ごじにいえにかえります。", de: "Ich gehe um fünf Uhr nach Hause." }
  ]},
  { id: "k006", char: "六", meaning: ["sechs", "6"], speak: "ろく", on: ["ろく"], kun: ["む", "むっつ"], examples: ["六月 (ろくがつ) — Juni", "六つ (むっつ) — sechs Dinge"], sentences: [
    { jp: "六月はよく雨が降ります。", reading: "ろくがつはよくあめがふります。", de: "Im Juni regnet es oft." },
    { jp: "六時に起きます。", reading: "ろくじにおきます。", de: "Ich stehe um sechs Uhr auf." }
  ]},
  { id: "k007", char: "七", meaning: ["sieben", "7"], on: ["しち"], kun: ["なな", "ななつ"], examples: ["七月 (しちがつ) — Juli", "七つ (ななつ) — sieben Dinge"], sentences: [
    { jp: "七月に海へ行きます。", reading: "しちがつにうみへいきます。", de: "Im Juli fahre ich ans Meer." },
    { jp: "七時に朝ごはんを食べます。", reading: "しちじにあさごはんをたべます。", de: "Ich esse um sieben Uhr Frühstück." }
  ]},
  { id: "k008", char: "八", meaning: ["acht", "8"], speak: "はち", on: ["はち"], kun: ["や", "やっつ"], examples: ["八月 (はちがつ) — August", "八つ (やっつ) — acht Dinge"], sentences: [
    { jp: "八月はとても暑いです。", reading: "はちがつはとてもあついです。", de: "Im August ist es sehr heiß." },
    { jp: "八時に学校が始まります。", reading: "はちじにがっこうがはじまります。", de: "Die Schule beginnt um acht Uhr." }
  ]},
  { id: "k009", char: "九", meaning: ["neun", "9"], speak: "きゅう", on: ["く", "きゅう"], kun: ["ここの", "ここのつ"], examples: ["九月 (くがつ) — September", "九つ (ここのつ) — neun Dinge"], sentences: [
    { jp: "九月に日本へ来ました。", reading: "くがつににほんへきました。", de: "Ich bin im September nach Japan gekommen." },
    { jp: "九時まで起きています。", reading: "くじまでおきています。", de: "Ich bleibe bis neun Uhr auf." }
  ]},
  { id: "k010", char: "十", meaning: ["zehn", "10"], speak: "じゅう", on: ["じゅう", "じっ"], kun: ["とお", "と"], examples: ["十月 (じゅうがつ) — Oktober", "十 (とお) — zehn Dinge"], sentences: [
    { jp: "十月は紅葉がきれいです。", reading: "じゅうがつはこうようがきれいです。", de: "Im Oktober sind die Herbstblätter wunderschön." },
    { jp: "十分待ってください。", reading: "じゅっぷんまってください。", de: "Bitte warten Sie zehn Minuten." }
  ]},

  // Große Zahlen & Geld
  { id: "k011", char: "百", meaning: ["hundert", "100"], on: ["ひゃく", "びゃく", "ぴゃく"], kun: [], examples: ["百円 (ひゃくえん) — 100 Yen", "三百 (さんびゃく) — 300"], sentences: [
    { jp: "このジュースは百円です。", reading: "このジュースはひゃくえんです。", de: "Dieser Saft kostet 100 Yen." },
    { jp: "百メートル歩きました。", reading: "ひゃくメートルあるきました。", de: "Ich bin hundert Meter gelaufen." }
  ]},
  { id: "k012", char: "千", meaning: ["tausend", "1.000"], speak: "せん", on: ["せん", "ぜん"], kun: ["ち"], examples: ["千円 (せんえん) — 1.000 Yen", "三千 (さんぜん) — 3.000"], sentences: [
    { jp: "このかばんは千円です。", reading: "このかばんはせんえんです。", de: "Diese Tasche kostet 1.000 Yen." },
    { jp: "千円でランチを食べました。", reading: "せんえんでランチをたべました。", de: "Ich habe für 1.000 Yen zu Mittag gegessen." }
  ]},
  { id: "k013", char: "万", meaning: ["zehntausend", "10.000"], on: ["まん", "ばん"], kun: [], examples: ["一万円 (いちまんえん) — 10.000 Yen", "万国 (ばんこく) — alle Länder"], sentences: [
    { jp: "このパソコンは五万円です。", reading: "このパソコンはごまんえんです。", de: "Dieser Computer kostet 50.000 Yen." },
    { jp: "一万円をATMでおろしました。", reading: "いちまんえんをATMでおろしました。", de: "Ich habe 10.000 Yen am Geldautomaten abgehoben." }
  ]},
  { id: "k014", char: "円", meaning: ["Yen", "Kreis", "rund"], speak: "えん", on: ["えん"], kun: ["まるい"], examples: ["百円 (ひゃくえん) — 100 Yen", "円い (まるい) — rund"], sentences: [
    { jp: "すみません、百円がありますか。", reading: "すみません、ひゃくえんがありますか。", de: "Entschuldigung, haben Sie 100 Yen?" },
    { jp: "このケーキは円い形です。", reading: "このケーキはまるいかたちです。", de: "Dieser Kuchen hat eine runde Form." }
  ]},

  // Zeit
  { id: "k015", char: "年", meaning: ["Jahr"], on: ["ねん"], kun: ["とし"], examples: ["今年 (ことし) — dieses Jahr", "来年 (らいねん) — nächstes Jahr"], sentences: [
    { jp: "今年は日本語を勉強します。", reading: "ことしはにほんごをべんきょうします。", de: "Dieses Jahr lerne ich Japanisch." },
    { jp: "来年、日本へ行きたいです。", reading: "らいねん、にほんへいきたいです。", de: "Nächstes Jahr möchte ich nach Japan fahren." }
  ]},
  { id: "k016", char: "月", meaning: ["Monat", "Mond"], on: ["げつ", "がつ"], kun: ["つき"], examples: ["一月 (いちがつ) — Januar", "月 (つき) — Mond"], sentences: [
    { jp: "今月は忙しいです。", reading: "こんげつはいそがしいです。", de: "Diesen Monat bin ich sehr beschäftigt." },
    { jp: "夜、月がとてもきれいです。", reading: "よる、つきがとてもきれいです。", de: "Nachts ist der Mond sehr schön." }
  ]},
  { id: "k017", char: "日", meaning: ["Tag", "Sonne", "Japan"], on: ["にち", "じつ"], kun: ["ひ", "か"], examples: ["日本語 (にほんご) — Japanisch", "毎日 (まいにち) — jeden Tag"], sentences: [
    { jp: "今日はいい天気ですね。", reading: "きょうはいいてんきですね。", de: "Das Wetter ist heute schön." },
    { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Ich lerne jeden Tag Japanisch." }
  ]},
  { id: "k018", char: "時", meaning: ["Zeit", "Uhr", "Stunde"], on: ["じ"], kun: ["とき"], examples: ["三時 (さんじ) — 3 Uhr", "時々 (ときどき) — manchmal"], sentences: [
    { jp: "今、何時ですか。", reading: "いま、なんじですか。", de: "Wie viel Uhr ist es jetzt?" },
    { jp: "時々コーヒーを飲みます。", reading: "ときどきコーヒーをのみます。", de: "Manchmal trinke ich Kaffee." }
  ]},
  { id: "k019", char: "分", meaning: ["Minute", "Teil", "verstehen"], speak: "ふん", on: ["ふん", "ぶん", "ぷん"], kun: ["わかる", "わける"], examples: ["五分 (ごふん) — 5 Minuten", "分かる (わかる) — verstehen"], sentences: [
    { jp: "五分後に来てください。", reading: "ごふんごにきてください。", de: "Bitte kommen Sie in fünf Minuten." },
    { jp: "日本語が少し分かります。", reading: "にほんごがすこしわかります。", de: "Ich verstehe ein bisschen Japanisch." }
  ]},
  { id: "k020", char: "半", meaning: ["halb", "Mitte"], speak: "はん", on: ["はん"], kun: ["なかば"], examples: ["三時半 (さんじはん) — halb vier", "半分 (はんぶん) — die Hälfte"], sentences: [
    { jp: "七時半に朝ごはんを食べます。", reading: "しちじはんにあさごはんをたべます。", de: "Ich esse um halb acht Frühstück." },
    { jp: "ケーキを半分食べました。", reading: "ケーキをはんぶんたべました。", de: "Ich habe die Hälfte des Kuchens gegessen." }
  ]},

  // Frageworte & Zeit
  { id: "k021", char: "今", meaning: ["jetzt", "gegenwärtig"], on: ["こん", "きん"], kun: ["いま"], examples: ["今 (いま) — jetzt", "今日 (きょう) — heute"], sentences: [
    { jp: "今、何をしていますか。", reading: "いま、なにをしていますか。", de: "Was machen Sie gerade?" },
    { jp: "今日は学校があります。", reading: "きょうはがっこうがあります。", de: "Heute habe ich Schule." }
  ]},
  { id: "k022", char: "何", meaning: ["was", "welche", "wie viele"], on: ["なに", "なん"], kun: ["なに", "なん"], examples: ["何時 (なんじ) — wie viel Uhr?", "何 (なに) — was?"], sentences: [
    { jp: "今日は何を食べますか。", reading: "きょうはなにをたべますか。", de: "Was essen Sie heute?" },
    { jp: "何時に起きますか。", reading: "なんじにおきますか。", de: "Um wie viel Uhr stehen Sie auf?" }
  ]},

  // Personen
  { id: "k023", char: "人", meaning: ["Mensch", "Person"], on: ["じん", "にん"], kun: ["ひと"], examples: ["日本人 (にほんじん) — Japaner", "一人 (ひとり) — eine Person"], sentences: [
    { jp: "あの人は誰ですか。", reading: "あのひとはだれですか。", de: "Wer ist diese Person dort?" },
    { jp: "日本人の友達がいます。", reading: "にほんじんのともだちがいます。", de: "Ich habe einen japanischen Freund." }
  ]},
  { id: "k024", char: "男", meaning: ["Mann", "männlich"], on: ["だん", "なん"], kun: ["おとこ"], examples: ["男の人 (おとこのひと) — Mann", "男子 (だんし) — männlich"], sentences: [
    { jp: "あの男の人は先生ですか。", reading: "あのおとこのひとはせんせいですか。", de: "Ist dieser Mann ein Lehrer?" },
    { jp: "男の子が公園で遊んでいます。", reading: "おとこのこがこうえんであそんでいます。", de: "Ein Junge spielt im Park." }
  ]},
  { id: "k025", char: "女", meaning: ["Frau", "weiblich"], on: ["じょ", "にょ"], kun: ["おんな", "め"], examples: ["女の人 (おんなのひと) — Frau", "女子 (じょし) — weiblich"], sentences: [
    { jp: "女の人がバスに乗っています。", reading: "おんなのひとがバスにのっています。", de: "Eine Frau sitzt im Bus." },
    { jp: "女の子は赤いかばんを持っています。", reading: "おんなのこはあかいかばんをもっています。", de: "Das Mädchen hat eine rote Tasche." }
  ]},
  { id: "k026", char: "子", meaning: ["Kind", "Sohn", "Tochter"], on: ["し", "す"], kun: ["こ"], examples: ["子供 (こども) — Kind", "女の子 (おんなのこ) — Mädchen"], sentences: [
    { jp: "子供が公園で遊んでいます。", reading: "こどもがこうえんであそんでいます。", de: "Die Kinder spielen im Park." },
    { jp: "あの子はとても元気です。", reading: "あのこはとてもげんきです。", de: "Dieses Kind ist sehr lebhaft." }
  ]},
  { id: "k027", char: "父", meaning: ["Vater"], on: ["ふ"], kun: ["ちち"], examples: ["父 (ちち) — mein Vater", "お父さん (おとうさん) — Vater (höflich)"], sentences: [
    { jp: "父は毎朝コーヒーを飲みます。", reading: "ちちはまいあさコーヒーをのみます。", de: "Mein Vater trinkt jeden Morgen Kaffee." },
    { jp: "お父さんの仕事は何ですか。", reading: "おとうさんのしごとはなんですか。", de: "Was ist der Beruf Ihres Vaters?" }
  ]},
  { id: "k028", char: "母", meaning: ["Mutter"], on: ["ぼ"], kun: ["はは"], examples: ["母 (はは) — meine Mutter", "お母さん (おかあさん) — Mutter (höflich)"], sentences: [
    { jp: "母は料理が上手です。", reading: "はははりょうりがじょうずです。", de: "Meine Mutter kocht sehr gut." },
    { jp: "お母さんと買い物に行きました。", reading: "おかあさんとかいものにいきました。", de: "Ich bin mit meiner Mutter einkaufen gegangen." }
  ]},
  { id: "k029", char: "友", meaning: ["Freund", "Freundschaft"], on: ["ゆう"], kun: ["とも"], examples: ["友達 (ともだち) — Freund", "親友 (しんゆう) — enger Freund"], sentences: [
    { jp: "友達と映画を見ます。", reading: "ともだちとえいがをみます。", de: "Ich schaue mit meinem Freund einen Film." },
    { jp: "友達の家でご飯を食べました。", reading: "ともだちのいえでごはんをたべました。", de: "Ich habe bei meinem Freund gegessen." }
  ]},

  // Schule & Bildung
  { id: "k030", char: "先", meaning: ["vorher", "Spitze", "zuerst"], on: ["せん"], kun: ["さき", "まず"], examples: ["先生 (せんせい) — Lehrer", "先週 (せんしゅう) — letzte Woche"], sentences: [
    { jp: "先生に質問があります。", reading: "せんせいにしつもんがあります。", de: "Ich habe eine Frage an den Lehrer." },
    { jp: "先週、図書館へ行きました。", reading: "せんしゅう、としょかんへいきました。", de: "Letzte Woche bin ich in die Bibliothek gegangen." }
  ]},
  { id: "k031", char: "生", meaning: ["Leben", "gebären", "roh"], speak: "せい", on: ["せい", "しょう"], kun: ["いきる", "うまれる", "なま"], examples: ["先生 (せんせい) — Lehrer", "学生 (がくせい) — Student"], sentences: [
    { jp: "私は学生です。", reading: "わたしはがくせいです。", de: "Ich bin Student." },
    { jp: "先生はやさしいです。", reading: "せんせいはやさしいです。", de: "Der Lehrer ist freundlich." }
  ]},
  { id: "k032", char: "学", meaning: ["lernen", "Wissenschaft"], speak: "がく", on: ["がく"], kun: ["まなぶ"], examples: ["学校 (がっこう) — Schule", "大学 (だいがく) — Universität"], sentences: [
    { jp: "毎日学校へ行きます。", reading: "まいにちがっこうへいきます。", de: "Ich gehe jeden Tag zur Schule." },
    { jp: "大学で日本語を学んでいます。", reading: "だいがくでにほんごをまなんでいます。", de: "Ich lerne an der Universität Japanisch." }
  ]},
  { id: "k033", char: "校", meaning: ["Schule"], on: ["こう"], kun: [], examples: ["学校 (がっこう) — Schule", "高校 (こうこう) — Oberschule"], sentences: [
    { jp: "学校は九時に始まります。", reading: "がっこうはくじにはじまります。", de: "Die Schule beginnt um neun Uhr." },
    { jp: "高校に入りたいです。", reading: "こうこうにはいりたいです。", de: "Ich möchte in die Oberschule eintreten." }
  ]},

  // Gesellschaft
  { id: "k034", char: "会", meaning: ["Treffen", "Gesellschaft", "verstehen"], on: ["かい", "え"], kun: ["あう"], examples: ["会社 (かいしゃ) — Firma", "会う (あう) — treffen"], sentences: [
    { jp: "友達に会いました。", reading: "ともだちにあいました。", de: "Ich habe meinen Freund getroffen." },
    { jp: "父は会社で働いています。", reading: "ちちはかいしゃではたらいています。", de: "Mein Vater arbeitet in einer Firma." }
  ]},
  { id: "k035", char: "社", meaning: ["Gesellschaft", "Firma", "Schrein"], speak: "しゃ", on: ["しゃ", "じゃ"], kun: ["やしろ"], examples: ["会社 (かいしゃ) — Firma", "神社 (じんじゃ) — Shinto-Schrein"], sentences: [
    { jp: "母は会社に行きました。", reading: "はははかいしゃにいきました。", de: "Meine Mutter ist zur Firma gegangen." },
    { jp: "神社でお参りをしました。", reading: "じんじゃでおまいりをしました。", de: "Ich habe am Shinto-Schrein gebetet." }
  ]},
  { id: "k036", char: "店", meaning: ["Geschäft", "Laden"], on: ["てん"], kun: ["みせ"], examples: ["お店 (おみせ) — Laden", "本店 (ほんてん) — Hauptgeschäft"], sentences: [
    { jp: "あのお店でパンを買います。", reading: "あのおみせでパンをかいます。", de: "Ich kaufe Brot in diesem Laden." },
    { jp: "その店は何時に開きますか。", reading: "そのみせはなんじにあきますか。", de: "Um wie viel Uhr öffnet dieses Geschäft?" }
  ]},
  { id: "k037", char: "家", meaning: ["Haus", "Zuhause", "Familie"], on: ["か", "け"], kun: ["いえ", "うち"], examples: ["家 (うち) — Zuhause", "家族 (かぞく) — Familie"], sentences: [
    { jp: "家に帰ります。", reading: "いえにかえります。", de: "Ich gehe nach Hause." },
    { jp: "家族と夕ごはんを食べます。", reading: "かぞくとゆうごはんをたべます。", de: "Ich esse mit meiner Familie Abendessen." }
  ]},
  { id: "k038", char: "国", meaning: ["Land", "Nation"], on: ["こく", "ごく"], kun: ["くに"], examples: ["日本国 (にほんこく) — Japan", "外国語 (がいこくご) — Fremdsprache"], sentences: [
    { jp: "あなたの国はどこですか。", reading: "あなたのくにはどこですか。", de: "Aus welchem Land kommen Sie?" },
    { jp: "外国語を勉強するのは楽しいです。", reading: "がいこくごをべんきょうするのはたのしいです。", de: "Es macht Spaß, eine Fremdsprache zu lernen." }
  ]},

  // Sprache
  { id: "k039", char: "語", meaning: ["Sprache", "Wort"], speak: "ご", on: ["ご"], kun: ["かたる", "かたらう"], examples: ["日本語 (にほんご) — Japanisch", "英語 (えいご) — Englisch"], sentences: [
    { jp: "日本語を毎日練習します。", reading: "にほんごをまいにちれんしゅうします。", de: "Ich übe jeden Tag Japanisch." },
    { jp: "英語と日本語を話せます。", reading: "えいごとにほんごをはなせます。", de: "Ich kann Englisch und Japanisch sprechen." }
  ]},
  { id: "k040", char: "字", meaning: ["Schriftzeichen", "Buchstabe"], speak: "じ", on: ["じ"], kun: ["あざ"], examples: ["漢字 (かんじ) — Kanji", "文字 (もじ) — Schriftzeichen"], sentences: [
    { jp: "漢字を毎日練習しています。", reading: "かんじをまいにちれんしゅうしています。", de: "Ich übe jeden Tag Kanji." },
    { jp: "この字はどう読みますか。", reading: "このじはどうよみますか。", de: "Wie liest man dieses Schriftzeichen?" }
  ]},
  { id: "k041", char: "文", meaning: ["Text", "Schrift", "Satz"], speak: "ぶん", on: ["ぶん", "もん"], kun: ["ふみ"], examples: ["文字 (もじ) — Schriftzeichen", "作文 (さくぶん) — Aufsatz"], sentences: [
    { jp: "日本語で文を書きました。", reading: "にほんごでぶんをかきました。", de: "Ich habe einen Satz auf Japanisch geschrieben." },
    { jp: "作文の宿題があります。", reading: "さくぶんのしゅくだいがあります。", de: "Ich habe Hausaufgaben für den Aufsatz." }
  ]},
  { id: "k042", char: "本", meaning: ["Buch", "Ursprung", "Japan"], speak: "ほん", on: ["ほん", "ぽん", "ぼん"], kun: ["もと"], examples: ["本 (ほん) — Buch", "日本 (にほん) — Japan"], sentences: [
    { jp: "図書館で本を読みました。", reading: "としょかんでほんをよみました。", de: "Ich habe in der Bibliothek ein Buch gelesen." },
    { jp: "日本へ旅行したいです。", reading: "にほんへりょこうしたいです。", de: "Ich möchte nach Japan reisen." }
  ]},

  // Handlungen (Verben als Kanji)
  { id: "k043", char: "書", meaning: ["schreiben"], on: ["しょ"], kun: ["かく"], examples: ["書く (かく) — schreiben", "教科書 (きょうかしょ) — Schulbuch"], sentences: [
    { jp: "手紙を書いています。", reading: "てがみをかいています。", de: "Ich schreibe gerade einen Brief." },
    { jp: "教科書に名前を書いてください。", reading: "きょうかしょになまえをかいてください。", de: "Bitte schreiben Sie Ihren Namen ins Schulbuch." }
  ]},
  { id: "k044", char: "読", meaning: ["lesen"], on: ["どく", "とく"], kun: ["よむ"], examples: ["読む (よむ) — lesen", "読書 (どくしょ) — Lektüre"], sentences: [
    { jp: "寝る前に本を読みます。", reading: "ねるまえにほんをよみます。", de: "Ich lese vor dem Schlafen ein Buch." },
    { jp: "この文字が読めません。", reading: "このもじがよめません。", de: "Ich kann dieses Schriftzeichen nicht lesen." }
  ]},
  { id: "k045", char: "聞", meaning: ["hören", "fragen"], on: ["ぶん", "もん"], kun: ["きく", "きこえる"], examples: ["聞く (きく) — hören/fragen", "新聞 (しんぶん) — Zeitung"], sentences: [
    { jp: "音楽を聞くのが好きです。", reading: "おんがくをきくのがすきです。", de: "Ich höre gerne Musik." },
    { jp: "先生に道を聞きました。", reading: "せんせいにみちをききました。", de: "Ich habe den Lehrer nach dem Weg gefragt." }
  ]},
  { id: "k046", char: "話", meaning: ["sprechen", "Gespräch", "Geschichte"], on: ["わ"], kun: ["はなす", "はなし"], examples: ["話す (はなす) — sprechen", "電話 (でんわ) — Telefon"], sentences: [
    { jp: "友達と電話で話しました。", reading: "ともだちとでんわではなしました。", de: "Ich habe mit meinem Freund telefoniert." },
    { jp: "日本語で話してみてください。", reading: "にほんごではなしてみてください。", de: "Versuchen Sie bitte, auf Japanisch zu sprechen." }
  ]},
  { id: "k047", char: "言", meaning: ["sagen", "Wort"], on: ["げん", "ごん"], kun: ["いう", "こと"], examples: ["言う (いう) — sagen", "言葉 (ことば) — Wort/Sprache"], sentences: [
    { jp: "先生は何と言いましたか。", reading: "せんせいはなんといいましたか。", de: "Was hat der Lehrer gesagt?" },
    { jp: "日本語の言葉を覚えています。", reading: "にほんごのことばをおぼえています。", de: "Ich lerne japanische Wörter auswendig." }
  ]},
  { id: "k048", char: "見", meaning: ["sehen", "zeigen"], on: ["けん"], kun: ["みる", "みえる", "みせる"], examples: ["見る (みる) — sehen", "見せる (みせる) — zeigen"], sentences: [
    { jp: "テレビを見るのが好きです。", reading: "テレビをみるのがすきです。", de: "Ich schaue gerne Fernsehen." },
    { jp: "写真を見せてください。", reading: "しゃしんをみせてください。", de: "Bitte zeigen Sie mir das Foto." }
  ]},
  { id: "k049", char: "食", meaning: ["essen", "Essen"], on: ["しょく", "じき"], kun: ["たべる", "くう"], examples: ["食べる (たべる) — essen", "食事 (しょくじ) — Mahlzeit"], sentences: [
    { jp: "朝ごはんにパンを食べます。", reading: "あさごはんにパンをたべます。", de: "Zum Frühstück esse ich Brot." },
    { jp: "家族と一緒に食事をします。", reading: "かぞくといっしょにしょくじをします。", de: "Ich esse gemeinsam mit meiner Familie." }
  ]},
  { id: "k050", char: "飲", meaning: ["trinken"], on: ["いん"], kun: ["のむ"], examples: ["飲む (のむ) — trinken", "飲み物 (のみもの) — Getränk"], sentences: [
    { jp: "毎朝お茶を飲みます。", reading: "まいあさおちゃをのみます。", de: "Ich trinke jeden Morgen Tee." },
    { jp: "どんな飲み物が好きですか。", reading: "どんなのみものがすきですか。", de: "Welches Getränk mögen Sie?" }
  ]},
  { id: "k051", char: "行", meaning: ["gehen", "Reihe"], on: ["こう", "ぎょう", "あん"], kun: ["いく", "ゆく", "おこなう"], examples: ["行く (いく) — gehen", "旅行 (りょこう) — Reise"], sentences: [
    { jp: "明日、学校に行きます。", reading: "あした、がっこうにいきます。", de: "Morgen gehe ich zur Schule." },
    { jp: "夏休みに旅行したいです。", reading: "なつやすみにりょこうしたいです。", de: "Ich möchte in den Sommerferien verreisen." }
  ]},
  { id: "k052", char: "来", meaning: ["kommen"], on: ["らい"], kun: ["くる", "きたる", "こ"], examples: ["来る (くる) — kommen", "来週 (らいしゅう) — nächste Woche"], sentences: [
    { jp: "友達が家に来ます。", reading: "ともだちがいえにきます。", de: "Mein Freund kommt zu mir nach Hause." },
    { jp: "来週、テストがあります。", reading: "らいしゅう、テストがあります。", de: "Nächste Woche haben wir einen Test." }
  ]},
  { id: "k053", char: "帰", meaning: ["heimkehren", "zurückkehren"], on: ["き"], kun: ["かえる", "かえす"], examples: ["帰る (かえる) — nach Hause gehen", "帰国 (きこく) — Heimkehr"], sentences: [
    { jp: "六時に家に帰ります。", reading: "ろくじにいえにかえります。", de: "Ich gehe um sechs Uhr nach Hause." },
    { jp: "雨が降る前に帰りましょう。", reading: "あめがふるまえにかえりましょう。", de: "Lass uns nach Hause gehen, bevor es regnet." }
  ]},
  { id: "k054", char: "出", meaning: ["herausgehen", "herausnehmen"], on: ["しゅつ", "すい"], kun: ["でる", "だす"], examples: ["出る (でる) — herausgehen", "出口 (でぐち) — Ausgang"], sentences: [
    { jp: "八時に家を出ます。", reading: "はちじにいえをでます。", de: "Ich verlasse das Haus um acht Uhr." },
    { jp: "出口はどこですか。", reading: "でぐちはどこですか。", de: "Wo ist der Ausgang?" }
  ]},
  { id: "k055", char: "入", meaning: ["eintreten", "hineingehen"], speak: "はいる", on: ["にゅう"], kun: ["いる", "いれる", "はいる"], examples: ["入る (はいる) — eintreten", "入口 (いりぐち) — Eingang"], sentences: [
    { jp: "部屋に入ってください。", reading: "へやにはいってください。", de: "Bitte treten Sie ins Zimmer ein." },
    { jp: "入口はあちらです。", reading: "いりぐちはあちらです。", de: "Der Eingang ist dort drüben." }
  ]},
  { id: "k056", char: "買", meaning: ["kaufen"], on: ["ばい"], kun: ["かう"], examples: ["買う (かう) — kaufen", "買い物 (かいもの) — Einkaufen"], sentences: [
    { jp: "スーパーで野菜を買いました。", reading: "スーパーでやさいをかいました。", de: "Ich habe im Supermarkt Gemüse gekauft." },
    { jp: "お母さんと買い物に行きます。", reading: "おかあさんとかいものにいきます。", de: "Ich gehe mit meiner Mutter einkaufen." }
  ]},
  { id: "k057", char: "売", meaning: ["verkaufen"], on: ["ばい"], kun: ["うる", "うれる"], examples: ["売る (うる) — verkaufen", "売り場 (うりば) — Verkaufsstand"], sentences: [
    { jp: "あの店でりんごを売っています。", reading: "あのみせでりんごをうっています。", de: "In diesem Laden werden Äpfel verkauft." },
    { jp: "売り場はどこですか。", reading: "うりばはどこですか。", de: "Wo ist der Verkaufsstand?" }
  ]},
  { id: "k058", char: "作", meaning: ["machen", "herstellen"], on: ["さく", "さ"], kun: ["つくる"], examples: ["作る (つくる) — machen/herstellen", "作文 (さくぶん) — Aufsatz"], sentences: [
    { jp: "母と一緒にケーキを作りました。", reading: "ははといっしょにケーキをつくりました。", de: "Ich habe zusammen mit meiner Mutter einen Kuchen gebacken." },
    { jp: "日本語で作文を書きます。", reading: "にほんごでさくぶんをかきます。", de: "Ich schreibe einen Aufsatz auf Japanisch." }
  ]},
  { id: "k059", char: "立", meaning: ["stehen", "aufstehen"], on: ["りつ", "りゅう"], kun: ["たつ", "たてる"], examples: ["立つ (たつ) — stehen", "立派 (りっぱ) — prächtig"], sentences: [
    { jp: "バスの中で立っています。", reading: "バスのなかでたっています。", de: "Ich stehe im Bus." },
    { jp: "あの建物は立派ですね。", reading: "あのたてものはりっぱですね。", de: "Dieses Gebäude ist wirklich prächtig." }
  ]},
  { id: "k060", char: "知", meaning: ["wissen", "kennen"], on: ["ち"], kun: ["しる", "しらせる"], examples: ["知る (しる) — wissen/kennen", "知識 (ちしき) — Wissen"], sentences: [
    { jp: "その店を知っていますか。", reading: "そのみせをしっていますか。", de: "Kennen Sie dieses Geschäft?" },
    { jp: "日本の文化をもっと知りたいです。", reading: "にほんのぶんかをもっとしりたいです。", de: "Ich möchte mehr über die japanische Kultur wissen." }
  ]},
  { id: "k061", char: "休", meaning: ["Ruhe", "Pause", "ruhen"], on: ["きゅう"], kun: ["やすむ", "やすまる", "やすみ"], examples: ["休む (やすむ) — ruhen/pausieren", "休日 (きゅうじつ) — Ruhetag"], sentences: [
    { jp: "今日は学校を休みました。", reading: "きょうはがっこうをやすみました。", de: "Ich habe heute die Schule gefehlt." },
    { jp: "休日に家族と公園へ行きます。", reading: "きゅうじつにかぞくとこうえんへいきます。", de: "Am freien Tag gehe ich mit meiner Familie in den Park." }
  ]},

  // Richtungen & Position
  { id: "k062", char: "上", meaning: ["oben", "über", "hinauf"], on: ["じょう", "しょう"], kun: ["うえ", "うわ", "かみ", "あげる", "のぼる"], examples: ["上 (うえ) — oben", "上手 (じょうず) — geschickt"], sentences: [
    { jp: "テーブルの上に本があります。", reading: "テーブルのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
    { jp: "兄はピアノが上手です。", reading: "あにはピアノがじょうずです。", de: "Mein älterer Bruder spielt gut Klavier." }
  ]},
  { id: "k063", char: "下", meaning: ["unten", "unter", "hinunter"], on: ["か", "げ"], kun: ["した", "しも", "くだる", "おりる"], examples: ["下 (した) — unten", "地下鉄 (ちかてつ) — U-Bahn"], sentences: [
    { jp: "かばんは椅子の下にあります。", reading: "かばんはいすのしたにあります。", de: "Die Tasche ist unter dem Stuhl." },
    { jp: "地下鉄で学校へ行きます。", reading: "ちかてつでがっこうへいきます。", de: "Ich fahre mit der U-Bahn zur Schule." }
  ]},
  { id: "k064", char: "中", meaning: ["Mitte", "innen", "China"], on: ["ちゅう", "じゅう"], kun: ["なか"], examples: ["中 (なか) — innen/Mitte", "中国 (ちゅうごく) — China"], sentences: [
    { jp: "かばんの中に教科書があります。", reading: "かばんのなかにきょうかしょがあります。", de: "Im Rucksack ist ein Schulbuch." },
    { jp: "中国語も少し話せます。", reading: "ちゅうごくごもすこしはなせます。", de: "Ich kann auch ein bisschen Chinesisch sprechen." }
  ]},
  { id: "k065", char: "外", meaning: ["außen", "draußen", "Ausland"], on: ["がい", "げ"], kun: ["そと", "はずれる"], examples: ["外 (そと) — draußen", "外国語 (がいこくご) — Fremdsprache"], sentences: [
    { jp: "外はとても寒いです。", reading: "そとはとてもさむいです。", de: "Draußen ist es sehr kalt." },
    { jp: "外国語を話せる人が増えています。", reading: "がいこくごをはなせるひとがふえています。", de: "Immer mehr Menschen können eine Fremdsprache sprechen." }
  ]},
  { id: "k066", char: "右", meaning: ["rechts"], on: ["う", "ゆう"], kun: ["みぎ"], examples: ["右 (みぎ) — rechts", "右側 (みぎがわ) — rechte Seite"], sentences: [
    { jp: "右に曲がってください。", reading: "みぎにまがってください。", de: "Bitte biegen Sie rechts ab." },
    { jp: "右側に座ってください。", reading: "みぎがわにすわってください。", de: "Bitte setzen Sie sich auf die rechte Seite." }
  ]},
  { id: "k067", char: "左", meaning: ["links"], on: ["さ"], kun: ["ひだり"], examples: ["左 (ひだり) — links", "左側 (ひだりがわ) — linke Seite"], sentences: [
    { jp: "左に曲がると駅があります。", reading: "ひだりにまがるとえきがあります。", de: "Wenn Sie links abbiegen, gibt es einen Bahnhof." },
    { jp: "左手にかばんを持っています。", reading: "ひだりてにかばんをもっています。", de: "Ich halte die Tasche in der linken Hand." }
  ]},
  { id: "k068", char: "前", meaning: ["vorne", "vorher", "davor"], on: ["ぜん"], kun: ["まえ"], examples: ["前 (まえ) — vorne/vorher", "名前 (なまえ) — Name"], sentences: [
    { jp: "学校の前でバスを待ちます。", reading: "がっこうのまえでバスをまちます。", de: "Ich warte vor der Schule auf den Bus." },
    { jp: "名前を教えてください。", reading: "なまえをおしえてください。", de: "Bitte sagen Sie mir Ihren Namen." }
  ]},
  { id: "k069", char: "後", meaning: ["hinten", "nachher", "danach"], on: ["ご", "こう"], kun: ["あと", "うしろ", "おくれる"], examples: ["後 (あと) — nachher", "午後 (ごご) — Nachmittag"], sentences: [
    { jp: "授業の後で図書館へ行きます。", reading: "じゅぎょうのあとでとしょかんへいきます。", de: "Nach dem Unterricht gehe ich in die Bibliothek." },
    { jp: "午後三時に会いましょう。", reading: "ごごさんじにあいましょう。", de: "Treffen wir uns um drei Uhr nachmittags." }
  ]},

  // Himmelsrichtungen
  { id: "k070", char: "東", meaning: ["Osten"], on: ["とう"], kun: ["ひがし"], examples: ["東京 (とうきょう) — Tokio", "東 (ひがし) — Osten"], sentences: [
    { jp: "東京に住んでいます。", reading: "とうきょうにすんでいます。", de: "Ich wohne in Tokio." },
    { jp: "太陽は東から出ます。", reading: "たいようはひがしからでます。", de: "Die Sonne geht im Osten auf." }
  ]},
  { id: "k071", char: "西", meaning: ["Westen"], on: ["せい", "さい"], kun: ["にし"], examples: ["西 (にし) — Westen", "関西 (かんさい) — Kansai-Region"], sentences: [
    { jp: "太陽は西に沈みます。", reading: "たいようはにしにしずみます。", de: "Die Sonne geht im Westen unter." },
    { jp: "関西の食べ物が好きです。", reading: "かんさいのたべものがすきです。", de: "Ich mag das Essen aus der Kansai-Region." }
  ]},
  { id: "k072", char: "南", meaning: ["Süden"], on: ["なん", "な"], kun: ["みなみ"], examples: ["南 (みなみ) — Süden", "南口 (みなみぐち) — Südausgang"], sentences: [
    { jp: "南口で待ち合わせをします。", reading: "みなみぐちでまちあわせをします。", de: "Wir treffen uns am Südausgang." },
    { jp: "南の国は暖かいです。", reading: "みなみのくにはあたたかいです。", de: "Die Länder im Süden sind warm." }
  ]},
  { id: "k073", char: "北", meaning: ["Norden"], on: ["ほく", "ほっ"], kun: ["きた"], examples: ["北海道 (ほっかいどう) — Hokkaido", "北 (きた) — Norden"], sentences: [
    { jp: "北海道はとても寒いです。", reading: "ほっかいどうはとてもさむいです。", de: "Hokkaido ist sehr kalt." },
    { jp: "北の駅で乗り換えます。", reading: "きたのえきでのりかえます。", de: "Ich steige am nördlichen Bahnhof um." }
  ]},

  // Größe & Eigenschaften
  { id: "k074", char: "大", meaning: ["groß", "riesig"], on: ["だい", "たい"], kun: ["おおきい", "おお"], examples: ["大きい (おおきい) — groß", "大学 (だいがく) — Universität"], sentences: [
    { jp: "大きいケーキを買いました。", reading: "おおきいケーキをかいました。", de: "Ich habe einen großen Kuchen gekauft." },
    { jp: "大学で友達ができました。", reading: "だいがくでともだちができました。", de: "An der Universität habe ich Freunde gefunden." }
  ]},
  { id: "k075", char: "小", meaning: ["klein"], on: ["しょう"], kun: ["ちいさい", "こ", "お"], examples: ["小さい (ちいさい) — klein", "小学校 (しょうがっこう) — Grundschule"], sentences: [
    { jp: "小さい猫がいます。", reading: "ちいさいねこがいます。", de: "Es gibt eine kleine Katze." },
    { jp: "妹は小学校に通っています。", reading: "いもうとはしょうがっこうにかよっています。", de: "Meine jüngere Schwester geht in die Grundschule." }
  ]},
  { id: "k076", char: "高", meaning: ["hoch", "teuer"], on: ["こう"], kun: ["たかい", "たか", "たかまる"], examples: ["高い (たかい) — hoch/teuer", "高校 (こうこう) — Oberschule"], sentences: [
    { jp: "このかばんは高いですね。", reading: "このかばんはたかいですね。", de: "Diese Tasche ist teuer, nicht wahr?" },
    { jp: "兄は高校生です。", reading: "あにはこうこうせいです。", de: "Mein älterer Bruder ist Oberschüler." }
  ]},
  { id: "k077", char: "安", meaning: ["billig", "sicher", "ruhig"], on: ["あん"], kun: ["やすい", "やすまる"], examples: ["安い (やすい) — billig", "安心 (あんしん) — Beruhigung"], sentences: [
    { jp: "このスーパーは安いです。", reading: "このスーパーはやすいです。", de: "Dieser Supermarkt ist günstig." },
    { jp: "家族が元気で安心しました。", reading: "かぞくがげんきであんしんしました。", de: "Ich bin erleichtert, dass meine Familie gesund ist." }
  ]},
  { id: "k078", char: "新", meaning: ["neu"], on: ["しん"], kun: ["あたらしい", "あら", "にい"], examples: ["新しい (あたらしい) — neu", "新聞 (しんぶん) — Zeitung"], sentences: [
    { jp: "新しい教科書を買いました。", reading: "あたらしいきょうかしょをかいました。", de: "Ich habe ein neues Schulbuch gekauft." },
    { jp: "毎朝新聞を読みます。", reading: "まいあさしんぶんをよみます。", de: "Ich lese jeden Morgen die Zeitung." }
  ]},
  { id: "k079", char: "古", meaning: ["alt"], on: ["こ"], kun: ["ふるい", "ふるす"], examples: ["古い (ふるい) — alt", "古典 (こてん) — Klassiker"], sentences: [
    { jp: "この寺はとても古いです。", reading: "このてらはとてもふるいです。", de: "Dieser Tempel ist sehr alt." },
    { jp: "古い本が好きです。", reading: "ふるいほんがすきです。", de: "Ich mag alte Bücher." }
  ]},
  { id: "k080", char: "長", meaning: ["lang", "Chef", "Anführer"], on: ["ちょう"], kun: ["ながい", "おさ"], examples: ["長い (ながい) — lang", "長所 (ちょうしょ) — Stärke"], sentences: [
    { jp: "この映画は長いです。", reading: "このえいがはながいです。", de: "Dieser Film ist lang." },
    { jp: "自分の長所を教えてください。", reading: "じぶんのちょうしょをおしえてください。", de: "Bitte nennen Sie mir Ihre Stärken." }
  ]},

  // Farben
  { id: "k081", char: "白", meaning: ["weiß"], on: ["はく", "びゃく"], kun: ["しろ", "しろい"], examples: ["白い (しろい) — weiß", "白 (しろ) — Weiß"], sentences: [
    { jp: "白いシャツを着ています。", reading: "しろいシャツをきています。", de: "Ich trage ein weißes Hemd." },
    { jp: "雪のように白いです。", reading: "ゆきのようにしろいです。", de: "Es ist so weiß wie Schnee." }
  ]},
  { id: "k082", char: "赤", meaning: ["rot"], on: ["せき", "しゃく"], kun: ["あか", "あかい"], examples: ["赤い (あかい) — rot", "赤 (あか) — Rot"], sentences: [
    { jp: "赤いリンゴが好きです。", reading: "あかいリンゴがすきです。", de: "Ich mag rote Äpfel." },
    { jp: "信号が赤です。止まってください。", reading: "しんごうがあかです。とまってください。", de: "Die Ampel ist rot. Bitte anhalten." }
  ]},
  { id: "k083", char: "青", meaning: ["blau", "grün (Pflanzen)"], on: ["せい", "しょう"], kun: ["あお", "あおい"], examples: ["青い (あおい) — blau/grün", "青空 (あおぞら) — blauer Himmel"], sentences: [
    { jp: "今日は青い空がきれいです。", reading: "きょうはあおいそらがきれいです。", de: "Heute ist der blaue Himmel wunderschön." },
    { jp: "青いシャツを買いました。", reading: "あおいシャツをかいました。", de: "Ich habe ein blaues Hemd gekauft." }
  ]},
  { id: "k084", char: "黒", meaning: ["schwarz"], on: ["こく"], kun: ["くろ", "くろい"], examples: ["黒い (くろい) — schwarz", "黒板 (こくばん) — Schultafel"], sentences: [
    { jp: "黒い犬がいます。", reading: "くろいいぬがいます。", de: "Es gibt einen schwarzen Hund." },
    { jp: "先生が黒板に字を書きます。", reading: "せんせいがこくばんにじをかきます。", de: "Der Lehrer schreibt Buchstaben an die Tafel." }
  ]},

  // Natur
  { id: "k085", char: "水", meaning: ["Wasser"], on: ["すい"], kun: ["みず"], examples: ["水 (みず) — Wasser", "水曜日 (すいようび) — Mittwoch"], sentences: [
    { jp: "水をください。", reading: "みずをください。", de: "Bitte geben Sie mir Wasser." },
    { jp: "水曜日に体育があります。", reading: "すいようびにたいいくがあります。", de: "Mittwochs haben wir Sport." }
  ]},
  { id: "k086", char: "山", meaning: ["Berg"], on: ["さん", "ざん"], kun: ["やま"], examples: ["山 (やま) — Berg", "富士山 (ふじさん) — Fuji"], sentences: [
    { jp: "山に登るのが好きです。", reading: "やまにのぼるのがすきです。", de: "Ich klettere gerne auf Berge." },
    { jp: "富士山はとても高いです。", reading: "ふじさんはとてもたかいです。", de: "Der Fuji ist sehr hoch." }
  ]},
  { id: "k087", char: "川", meaning: ["Fluss"], on: ["せん"], kun: ["かわ", "がわ"], examples: ["川 (かわ) — Fluss", "神奈川 (かながわ) — Kanagawa"], sentences: [
    { jp: "川のそばで弁当を食べました。", reading: "かわのそばでべんとうをたべました。", de: "Ich habe mein Lunchpaket am Flussufer gegessen." },
    { jp: "川で魚を見ました。", reading: "かわでさかなをみました。", de: "Ich habe Fische im Fluss gesehen." }
  ]},
  { id: "k088", char: "雨", meaning: ["Regen"], on: ["う"], kun: ["あめ", "あま"], examples: ["雨 (あめ) — Regen", "雨天 (うてん) — Regenwetter"], sentences: [
    { jp: "今日は雨が降っています。", reading: "きょうはあめがふっています。", de: "Heute regnet es." },
    { jp: "雨の日は家にいます。", reading: "あめのひはいえにいます。", de: "An Regentagen bleibe ich zu Hause." }
  ]},
  { id: "k089", char: "天", meaning: ["Himmel", "Natur", "himmlisch"], speak: "てん", on: ["てん"], kun: ["あま", "あめ"], examples: ["天気 (てんき) — Wetter", "天ぷら (てんぷら) — Tempura"], sentences: [
    { jp: "今日の天気はどうですか。", reading: "きょうのてんきはどうですか。", de: "Wie ist das Wetter heute?" },
    { jp: "天ぷらが大好きです。", reading: "てんぷらがだいすきです。", de: "Ich liebe Tempura sehr." }
  ]},
  { id: "k090", char: "火", meaning: ["Feuer"], on: ["か"], kun: ["ひ", "ほ"], examples: ["火曜日 (かようび) — Dienstag", "花火 (はなび) — Feuerwerk"], sentences: [
    { jp: "火曜日は日本語の授業があります。", reading: "かようびはにほんごのじゅぎょうがあります。", de: "Dienstags habe ich Japanischunterricht." },
    { jp: "夏祭りで花火を見ました。", reading: "なつまつりではなびをみました。", de: "Beim Sommerfest habe ich das Feuerwerk gesehen." }
  ]},
  { id: "k091", char: "木", meaning: ["Baum", "Holz"], on: ["もく", "ぼく"], kun: ["き", "こ"], examples: ["木曜日 (もくようび) — Donnerstag", "木 (き) — Baum"], sentences: [
    { jp: "公園に大きい木があります。", reading: "こうえんにおおきいきがあります。", de: "Im Park gibt es einen großen Baum." },
    { jp: "木曜日に友達と映画を見ます。", reading: "もくようびにともだちとえいがをみます。", de: "Donnerstags schaue ich mit meinem Freund einen Film." }
  ]},

  // Technik & Transport
  { id: "k092", char: "電", meaning: ["Elektrizität", "elektrisch"], on: ["でん"], kun: [], examples: ["電車 (でんしゃ) — Zug/Bahn", "電話 (でんわ) — Telefon"], sentences: [
    { jp: "電車で学校へ行きます。", reading: "でんしゃでがっこうへいきます。", de: "Ich fahre mit dem Zug zur Schule." },
    { jp: "お母さんに電話しました。", reading: "おかあさんにでんわしました。", de: "Ich habe meine Mutter angerufen." }
  ]},
  { id: "k093", char: "車", meaning: ["Auto", "Fahrzeug"], on: ["しゃ"], kun: ["くるま"], examples: ["電車 (でんしゃ) — Zug", "車 (くるま) — Auto"], sentences: [
    { jp: "父は車で会社へ行きます。", reading: "ちちはくるまでかいしゃへいきます。", de: "Mein Vater fährt mit dem Auto zur Arbeit." },
    { jp: "この車は新しいですか。", reading: "このくるまはあたらしいですか。", de: "Ist dieses Auto neu?" }
  ]},

  // Körper & Geist
  { id: "k094", char: "気", meaning: ["Geist", "Energie", "Gefühl"], on: ["き", "け"], kun: [], examples: ["天気 (てんき) — Wetter", "元気 (げんき) — gesund/munter"], sentences: [
    { jp: "今日は元気ですか。", reading: "きょうはげんきですか。", de: "Wie geht es Ihnen heute?" },
    { jp: "明日の天気が気になります。", reading: "あしたのてんきがきになります。", de: "Ich mache mir Gedanken über das Wetter morgen." }
  ]},
  { id: "k095", char: "名", meaning: ["Name", "Ruf"], on: ["めい", "みょう"], kun: ["な"], examples: ["名前 (なまえ) — Name", "有名 (ゆうめい) — berühmt"], sentences: [
    { jp: "お名前を教えていただけますか。", reading: "おなまえをおしえていただけますか。", de: "Darf ich Ihren Namen erfahren?" },
    { jp: "富士山は有名な山です。", reading: "ふじさんはゆうめいなやまです。", de: "Der Fuji ist ein berühmter Berg." }
  ]},
  { id: "k096", char: "手", meaning: ["Hand"], on: ["しゅ", "ず"], kun: ["て", "た"], examples: ["手 (て) — Hand", "上手 (じょうず) — geschickt"], sentences: [
    { jp: "手を洗ってから食べます。", reading: "てをあらってからたべます。", de: "Ich wasche die Hände, bevor ich esse." },
    { jp: "妹は絵が上手です。", reading: "いもうとはえがじょうずです。", de: "Meine jüngere Schwester ist gut im Zeichnen." }
  ]},
  { id: "k097", char: "足", meaning: ["Fuß", "Bein", "genug"], on: ["そく"], kun: ["あし", "たりる", "たす"], examples: ["足 (あし) — Fuß/Bein", "足りる (たりる) — genug sein"], sentences: [
    { jp: "足が痛いです。", reading: "あしがいたいです。", de: "Mein Fuß tut weh." },
    { jp: "お金が足りません。", reading: "おかねがたりません。", de: "Ich habe nicht genug Geld." }
  ]},
  { id: "k098", char: "耳", meaning: ["Ohr"], on: ["じ"], kun: ["みみ"], examples: ["耳 (みみ) — Ohr", "耳鼻科 (じびか) — HNO-Arzt"], sentences: [
    { jp: "耳が痛いので病院へ行きます。", reading: "みみがいたいのでびょういんへいきます。", de: "Mein Ohr tut weh, also gehe ich ins Krankenhaus." },
    { jp: "音楽を耳で楽しみます。", reading: "おんがくをみみでたのしみます。", de: "Ich genieße Musik mit den Ohren." }
  ]},
  { id: "k099", char: "目", meaning: ["Auge"], on: ["もく", "ぼく"], kun: ["め", "ま"], examples: ["目 (め) — Auge", "目的 (もくてき) — Ziel/Zweck"], sentences: [
    { jp: "目が疲れました。", reading: "めがつかれました。", de: "Meine Augen sind müde." },
    { jp: "日本語の勉強が目的です。", reading: "にほんごのべんきょうがもくてきです。", de: "Das Ziel ist es, Japanisch zu lernen." }
  ]},
  { id: "k100", char: "口", meaning: ["Mund", "Eingang", "Öffnung"], on: ["こう", "く"], kun: ["くち"], examples: ["口 (くち) — Mund", "出口 (でぐち) — Ausgang"], sentences: [
    { jp: "口を大きく開けてください。", reading: "くちをおおきくあけてください。", de: "Bitte öffnen Sie den Mund weit." },
    { jp: "出口は右側にあります。", reading: "でぐちはみぎがわにあります。", de: "Der Ausgang befindet sich auf der rechten Seite." }
  ]},

  // Pronomen & Wochentage
  { id: "k101", char: "私", meaning: ["ich", "privat"], speak: "わたし", on: ["し"], kun: ["わたし", "わたくし"], examples: ["私 (わたし) — ich", "私立 (しりつ) — privat"], sentences: [
    { jp: "私はドイツ人です。", reading: "わたしはどいつじんです。", de: "Ich bin Deutscher." },
    { jp: "私の名前は田中です。", reading: "わたしのなまえはたなかです。", de: "Mein Name ist Tanaka." }
  ]},
  { id: "k102", char: "金", meaning: ["Geld", "Gold", "Freitag"], on: ["きん", "こん"], kun: ["かね"], examples: ["お金 (おかね) — Geld", "金曜日 (きんようび) — Freitag"], sentences: [
    { jp: "お金がありません。", reading: "おかねがありません。", de: "Ich habe kein Geld." },
    { jp: "金曜日に会いましょう。", reading: "きんようびにあいましょう。", de: "Lass uns am Freitag treffen." }
  ]},
  { id: "k103", char: "土", meaning: ["Erde", "Boden", "Samstag"], on: ["ど", "と"], kun: ["つち"], examples: ["土曜日 (どようび) — Samstag", "土 (つち) — Erde"], sentences: [
    { jp: "土曜日は休みです。", reading: "どようびはやすみです。", de: "Samstag ist frei." },
    { jp: "庭の土が乾いています。", reading: "にわのつちがかわいています。", de: "Die Erde im Garten ist trocken." }
  ]},
  { id: "k104", char: "駅", meaning: ["Bahnhof", "Station"], on: ["えき"], kun: [], examples: ["駅 (えき) — Bahnhof", "東京駅 (とうきょうえき) — Tokio-Bahnhof"], sentences: [
    { jp: "駅まで歩いて行きます。", reading: "えきまであるいていきます。", de: "Ich gehe zu Fuß zum Bahnhof." },
    { jp: "次の駅で降ります。", reading: "つぎのえきでおります。", de: "Ich steige am nächsten Bahnhof aus." }
  ]},
  { id: "k105", char: "道", meaning: ["Weg", "Straße"], on: ["どう"], kun: ["みち"], examples: ["道 (みち) — Weg", "北海道 (ほっかいどう) — Hokkaido"], sentences: [
    { jp: "この道は狭いです。", reading: "このみちはせまいです。", de: "Diese Straße ist schmal." },
    { jp: "駅までの道を教えてください。", reading: "えきまでのみちをおしえてください。", de: "Bitte zeigen Sie mir den Weg zum Bahnhof." }
  ]},

  // Familie
  { id: "k106", char: "兄", meaning: ["älterer Bruder"], speak: "あに", on: ["けい", "きょう"], kun: ["あに"], examples: ["兄 (あに) — mein älterer Bruder", "お兄さん (おにいさん) — älterer Bruder (höflich)"], sentences: [
    { jp: "兄は会社員です。", reading: "あにはかいしゃいんです。", de: "Mein älterer Bruder ist Angestellter." },
    { jp: "お兄さんはお元気ですか。", reading: "おにいさんはおげんきですか。", de: "Wie geht es Ihrem älteren Bruder?" }
  ]},
  { id: "k107", char: "姉", meaning: ["ältere Schwester"], speak: "あね", on: ["し"], kun: ["あね"], examples: ["姉 (あね) — meine ältere Schwester", "お姉さん (おねえさん) — ältere Schwester (höflich)"], sentences: [
    { jp: "姉は東京に住んでいます。", reading: "あねはとうきょうにすんでいます。", de: "Meine ältere Schwester wohnt in Tokio." },
    { jp: "お姉さんは何歳ですか。", reading: "おねえさんはなんさいですか。", de: "Wie alt ist Ihre ältere Schwester?" }
  ]},
  { id: "k108", char: "弟", meaning: ["jüngerer Bruder"], speak: "おとうと", on: ["てい", "だい"], kun: ["おとうと"], examples: ["弟 (おとうと) — jüngerer Bruder", "兄弟 (きょうだい) — Geschwister"], sentences: [
    { jp: "弟は学生です。", reading: "おとうとはがくせいです。", de: "Mein jüngerer Bruder ist Student." },
    { jp: "兄弟は二人います。", reading: "きょうだいはふたりいます。", de: "Ich habe zwei Geschwister." }
  ]},
  { id: "k109", char: "妹", meaning: ["jüngere Schwester"], speak: "いもうと", on: ["まい"], kun: ["いもうと"], examples: ["妹 (いもうと) — jüngere Schwester", "姉妹 (しまい) — Schwestern"], sentences: [
    { jp: "妹はまだ小さいです。", reading: "いもうとはまだちいさいです。", de: "Meine jüngere Schwester ist noch klein." },
    { jp: "妹と一緒に映画を見ました。", reading: "いもうとといっしょにえいがをみました。", de: "Ich habe mit meiner jüngeren Schwester einen Film gesehen." }
  ]},

  // Tageszeit
  { id: "k110", char: "朝", meaning: ["Morgen"], speak: "あさ", on: ["ちょう"], kun: ["あさ"], examples: ["朝 (あさ) — Morgen", "今朝 (けさ) — heute Morgen"], sentences: [
    { jp: "朝ご飯を食べました。", reading: "あさごはんをたべました。", de: "Ich habe gefrühstückt." },
    { jp: "今朝は早く起きました。", reading: "けさははやくおきました。", de: "Heute Morgen bin ich früh aufgestanden." }
  ]},
  { id: "k111", char: "昼", meaning: ["Mittag", "Tag"], speak: "ひる", on: ["ちゅう"], kun: ["ひる"], examples: ["昼 (ひる) — Mittag", "昼ご飯 (ひるごはん) — Mittagessen"], sentences: [
    { jp: "昼ご飯は何にしますか。", reading: "ひるごはんはなににしますか。", de: "Was nehmen wir zum Mittagessen?" },
    { jp: "昼の十二時に会いましょう。", reading: "ひるのじゅうにじにあいましょう。", de: "Treffen wir uns um zwölf Uhr mittags." }
  ]},
  { id: "k112", char: "夜", meaning: ["Nacht"], speak: "よる", on: ["や"], kun: ["よる", "よ"], examples: ["夜 (よる) — Nacht", "今夜 (こんや) — heute Nacht"], sentences: [
    { jp: "夜はあまり寝られませんでした。", reading: "よるはあまりねられませんでした。", de: "In der Nacht konnte ich nicht gut schlafen." },
    { jp: "今夜は雨が降ります。", reading: "こんやはあめがふります。", de: "Heute Nacht wird es regnen." }
  ]},
  { id: "k113", char: "晩", meaning: ["Abend"], speak: "ばん", on: ["ばん"], kun: [], examples: ["晩ご飯 (ばんごはん) — Abendessen", "今晩 (こんばん) — heute Abend"], sentences: [
    { jp: "今晩は何を食べますか。", reading: "こんばんはなにをたべますか。", de: "Was isst du heute Abend?" },
    { jp: "晩ご飯の時間ですよ。", reading: "ばんごはんのじかんですよ。", de: "Es ist Zeit fürs Abendessen." }
  ]},
  { id: "k114", char: "毎", meaning: ["jede(r/s)"], speak: "まい", on: ["まい"], kun: [], examples: ["毎日 (まいにち) — jeden Tag", "毎週 (まいしゅう) — jede Woche"], sentences: [
    { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Ich lerne jeden Tag Japanisch." },
    { jp: "毎週土曜日にテニスをします。", reading: "まいしゅうどようびにテニスをします。", de: "Jeden Samstag spiele ich Tennis." }
  ]},
  { id: "k115", char: "週", meaning: ["Woche"], speak: "しゅう", on: ["しゅう"], kun: [], examples: ["今週 (こんしゅう) — diese Woche", "来週 (らいしゅう) — nächste Woche"], sentences: [
    { jp: "今週はとても忙しいです。", reading: "こんしゅうはとてもいそがしいです。", de: "Diese Woche bin ich sehr beschäftigt." },
    { jp: "来週京都へ行きます。", reading: "らいしゅうきょうとへいきます。", de: "Nächste Woche fahre ich nach Kyoto." }
  ]},
  { id: "k116", char: "曜", meaning: ["Wochentag"], speak: "よう", on: ["よう"], kun: [], examples: ["何曜日 (なんようび) — welcher Wochentag", "月曜日 (げつようび) — Montag"], sentences: [
    { jp: "今日は何曜日ですか。", reading: "きょうはなんようびですか。", de: "Welcher Wochentag ist heute?" },
    { jp: "月曜日から授業があります。", reading: "げつようびからじゅぎょうがあります。", de: "Ab Montag habe ich Unterricht." }
  ]},

  // Jahreszeiten
  { id: "k117", char: "春", meaning: ["Frühling"], speak: "はる", on: ["しゅん"], kun: ["はる"], examples: ["春 (はる) — Frühling", "春休み (はるやすみ) — Frühlingsferien"], sentences: [
    { jp: "春に桜が咲きます。", reading: "はるにさくらがさきます。", de: "Im Frühling blühen die Kirschblüten." },
    { jp: "春は暖かくて気持ちいいです。", reading: "はるはあたたかくてきもちいいです。", de: "Der Frühling ist warm und angenehm." }
  ]},
  { id: "k118", char: "夏", meaning: ["Sommer"], speak: "なつ", on: ["か"], kun: ["なつ"], examples: ["夏 (なつ) — Sommer", "夏休み (なつやすみ) — Sommerferien"], sentences: [
    { jp: "日本の夏は暑いです。", reading: "にほんのなつはあついです。", de: "Der Sommer in Japan ist heiß." },
    { jp: "夏休みに海へ行きます。", reading: "なつやすみにうみへいきます。", de: "In den Sommerferien fahre ich ans Meer." }
  ]},
  { id: "k119", char: "秋", meaning: ["Herbst"], speak: "あき", on: ["しゅう"], kun: ["あき"], examples: ["秋 (あき) — Herbst", "秋の風 (あきのかぜ) — Herbstwind"], sentences: [
    { jp: "秋は涼しくなります。", reading: "あきはすずしくなります。", de: "Im Herbst wird es kühler." },
    { jp: "秋の山はとてもきれいです。", reading: "あきのやまはとてもきれいです。", de: "Die Berge im Herbst sind sehr schön." }
  ]},
  { id: "k120", char: "冬", meaning: ["Winter"], speak: "ふゆ", on: ["とう"], kun: ["ふゆ"], examples: ["冬 (ふゆ) — Winter", "冬休み (ふゆやすみ) — Winterferien"], sentences: [
    { jp: "冬は雪が降ります。", reading: "ふゆはゆきがふります。", de: "Im Winter schneit es." },
    { jp: "冬は寒いので暖かい服を着ます。", reading: "ふゆはさむいのであたたかいふくをきます。", de: "Im Winter ist es kalt, also trage ich warme Kleidung." }
  ]},

  // Mengen & Eigenschaften
  { id: "k121", char: "多", meaning: ["viel", "zahlreich"], speak: "おおい", on: ["た"], kun: ["おお"], examples: ["多い (おおい) — viel", "多分 (たぶん) — wahrscheinlich"], sentences: [
    { jp: "東京は人が多いです。", reading: "とうきょうはひとがおおいです。", de: "In Tokio gibt es viele Menschen." },
    { jp: "多分明日は晴れます。", reading: "たぶんあしたははれます。", de: "Morgen wird es wahrscheinlich sonnig." }
  ]},
  { id: "k122", char: "少", meaning: ["wenig"], speak: "すくない", on: ["しょう"], kun: ["すく", "すこ"], examples: ["少ない (すくない) — wenig", "少し (すこし) — ein bisschen"], sentences: [
    { jp: "お金が少ないです。", reading: "おかねがすくないです。", de: "Ich habe wenig Geld." },
    { jp: "少し休みましょう。", reading: "すこしやすみましょう。", de: "Lasst uns eine kleine Pause machen." }
  ]},
  { id: "k123", char: "早", meaning: ["früh", "schnell"], speak: "はやい", on: ["そう"], kun: ["はや"], examples: ["早い (はやい) — früh", "早く (はやく) — früh/schnell"], sentences: [
    { jp: "毎朝早く起きます。", reading: "まいあさはやくおきます。", de: "Ich stehe jeden Morgen früh auf." },
    { jp: "早く来てください。", reading: "はやくきてください。", de: "Bitte kommen Sie schnell." }
  ]},

  // Körper & Geist
  { id: "k124", char: "体", meaning: ["Körper"], speak: "からだ", on: ["たい", "てい"], kun: ["からだ"], examples: ["体 (からだ) — Körper", "体育 (たいいく) — Sport/Turnen"], sentences: [
    { jp: "体に気をつけてください。", reading: "からだにきをつけてください。", de: "Passen Sie auf Ihre Gesundheit auf." },
    { jp: "毎日体を動かします。", reading: "まいにちからだをうごかします。", de: "Ich bewege meinen Körper jeden Tag." }
  ]},
  { id: "k125", char: "力", meaning: ["Kraft", "Stärke"], speak: "ちから", on: ["りょく", "りき"], kun: ["ちから"], examples: ["力 (ちから) — Kraft", "電力 (でんりょく) — elektrische Leistung"], sentences: [
    { jp: "彼は力が強いです。", reading: "かれはちからがつよいです。", de: "Er hat viel Kraft." },
    { jp: "全力で頑張ります。", reading: "ぜんりょくでがんばります。", de: "Ich gebe mein Bestes." }
  ]},
  { id: "k126", char: "心", meaning: ["Herz", "Geist"], speak: "こころ", on: ["しん"], kun: ["こころ"], examples: ["心 (こころ) — Herz", "安心 (あんしん) — Erleichterung"], sentences: [
    { jp: "心から感謝します。", reading: "こころからかんしゃします。", de: "Ich danke Ihnen von Herzen." },
    { jp: "安心してください。", reading: "あんしんしてください。", de: "Seien Sie beruhigt." }
  ]},
  { id: "k127", char: "思", meaning: ["denken", "glauben"], speak: "おもう", on: ["し"], kun: ["おも"], examples: ["思う (おもう) — denken", "思い出 (おもいで) — Erinnerung"], sentences: [
    { jp: "明日は雨が降ると思います。", reading: "あしたはあめがふるとおもいます。", de: "Ich glaube, morgen wird es regnen." },
    { jp: "子供の頃の思い出があります。", reading: "こどものころのおもいでがあります。", de: "Ich habe Erinnerungen aus meiner Kindheit." }
  ]},
  { id: "k128", char: "考", meaning: ["überlegen", "denken"], speak: "かんがえる", on: ["こう"], kun: ["かんが"], examples: ["考える (かんがえる) — überlegen", "参考 (さんこう) — Referenz"], sentences: [
    { jp: "もう少し考えさせてください。", reading: "もうすこしかんがえさせてください。", de: "Lassen Sie mich noch etwas überlegen." },
    { jp: "参考書を買いました。", reading: "さんこうしょをかいました。", de: "Ich habe ein Nachschlagewerk gekauft." }
  ]},

  // Lernen & Schule
  { id: "k129", char: "教", meaning: ["lehren", "unterrichten"], speak: "おしえる", on: ["きょう"], kun: ["おし"], examples: ["教える (おしえる) — lehren", "教室 (きょうしつ) — Klassenzimmer"], sentences: [
    { jp: "日本語を教えてください。", reading: "にほんごをおしえてください。", de: "Bitte bringen Sie mir Japanisch bei." },
    { jp: "教室で勉強します。", reading: "きょうしつでべんきょうします。", de: "Ich lerne im Klassenzimmer." }
  ]},
  { id: "k130", char: "習", meaning: ["lernen", "üben"], speak: "ならう", on: ["しゅう"], kun: ["なら"], examples: ["習う (ならう) — lernen", "練習 (れんしゅう) — Übung"], sentences: [
    { jp: "ピアノを習っています。", reading: "ピアノをならっています。", de: "Ich lerne Klavier." },
    { jp: "毎日漢字の練習をします。", reading: "まいにちかんじのれんしゅうをします。", de: "Ich übe jeden Tag Kanji." }
  ]},
  { id: "k131", char: "勉", meaning: ["fleißig sein", "sich anstrengen"], speak: "べん", on: ["べん"], kun: [], examples: ["勉強 (べんきょう) — Lernen/Studium", "勤勉 (きんべん) — fleißig"], sentences: [
    { jp: "毎日勉強しています。", reading: "まいにちべんきょうしています。", de: "Ich lerne jeden Tag." },
    { jp: "彼はとても勤勉です。", reading: "かれはとてもきんべんです。", de: "Er ist sehr fleißig." }
  ]},
  { id: "k132", char: "強", meaning: ["stark", "kräftig"], speak: "つよい", on: ["きょう"], kun: ["つよ"], examples: ["強い (つよい) — stark", "勉強 (べんきょう) — Studium"], sentences: [
    { jp: "風が強くなりました。", reading: "かぜがつよくなりました。", de: "Der Wind ist stärker geworden." },
    { jp: "勉強が好きです。", reading: "べんきょうがすきです。", de: "Ich mag das Lernen." }
  ]},
  { id: "k133", char: "答", meaning: ["antworten", "Antwort"], speak: "こたえ", on: ["とう"], kun: ["こた"], examples: ["答え (こたえ) — Antwort", "答える (こたえる) — antworten"], sentences: [
    { jp: "質問に答えてください。", reading: "しつもんにこたえてください。", de: "Bitte beantworten Sie die Frage." },
    { jp: "答えはまだ分かりません。", reading: "こたえはまだわかりません。", de: "Ich kenne die Antwort noch nicht." }
  ]},
  { id: "k134", char: "問", meaning: ["fragen", "Frage"], speak: "もん", on: ["もん"], kun: ["と"], examples: ["問題 (もんだい) — Problem/Frage", "質問 (しつもん) — Frage"], sentences: [
    { jp: "これは難しい問題です。", reading: "これはむずかしいもんだいです。", de: "Das ist eine schwierige Frage." },
    { jp: "何か質問はありますか。", reading: "なにかしつもんはありますか。", de: "Gibt es noch Fragen?" }
  ]},
  { id: "k135", char: "漢", meaning: ["Han (China)"], speak: "かん", on: ["かん"], kun: [], examples: ["漢字 (かんじ) — Kanji", "漢方 (かんぽう) — chinesische Medizin"], sentences: [
    { jp: "漢字は難しいですが面白いです。", reading: "かんじはむずかしいですがおもしろいです。", de: "Kanji sind schwierig, aber interessant." },
    { jp: "毎日新しい漢字を覚えます。", reading: "まいにちあたらしいかんじをおぼえます。", de: "Ich lerne jeden Tag neue Kanji." }
  ]},
  { id: "k136", char: "英", meaning: ["England", "englisch"], speak: "えい", on: ["えい"], kun: [], examples: ["英語 (えいご) — Englisch", "英国 (えいこく) — Großbritannien"], sentences: [
    { jp: "英語が話せますか。", reading: "えいごがはなせますか。", de: "Können Sie Englisch sprechen?" },
    { jp: "英語の本を読んでいます。", reading: "えいごのほんをよんでいます。", de: "Ich lese ein Buch auf Englisch." }
  ]},

  // Allgemeines & Orte
  { id: "k137", char: "物", meaning: ["Ding", "Sache"], speak: "もの", on: ["ぶつ", "もつ"], kun: ["もの"], examples: ["物 (もの) — Ding", "買い物 (かいもの) — Einkaufen"], sentences: [
    { jp: "この物は何ですか。", reading: "このものはなんですか。", de: "Was ist dieses Ding?" },
    { jp: "週末に買い物をします。", reading: "しゅうまつにかいものをします。", de: "Am Wochenende gehe ich einkaufen." }
  ]},
  { id: "k138", char: "事", meaning: ["Sache", "Angelegenheit"], speak: "こと", on: ["じ"], kun: ["こと"], examples: ["仕事 (しごと) — Arbeit", "事 (こと) — Sache"], sentences: [
    { jp: "仕事はとても忙しいです。", reading: "しごとはとてもいそがしいです。", de: "Die Arbeit ist sehr stressig." },
    { jp: "大事な事を話します。", reading: "だいじなことをはなします。", de: "Ich spreche über eine wichtige Sache." }
  ]},
  { id: "k139", char: "場", meaning: ["Ort", "Platz"], speak: "ばしょ", on: ["じょう"], kun: ["ば"], examples: ["場所 (ばしょ) — Ort", "会場 (かいじょう) — Veranstaltungsort"], sentences: [
    { jp: "待ち合わせの場所はどこですか。", reading: "まちあわせのばしょはどこですか。", de: "Wo ist der Treffpunkt?" },
    { jp: "会場まで車で行きます。", reading: "かいじょうまでくるまでいきます。", de: "Ich fahre mit dem Auto zum Veranstaltungsort." }
  ]},
  { id: "k140", char: "所", meaning: ["Ort", "Stelle"], speak: "ところ", on: ["しょ"], kun: ["ところ"], examples: ["場所 (ばしょ) — Ort", "近所 (きんじょ) — Nachbarschaft"], sentences: [
    { jp: "静かな所が好きです。", reading: "しずかなところがすきです。", de: "Ich mag ruhige Orte." },
    { jp: "近所にいいレストランがあります。", reading: "きんじょにいいレストランがあります。", de: "In der Nachbarschaft gibt es ein gutes Restaurant." }
  ]},
  { id: "k141", char: "室", meaning: ["Raum", "Zimmer"], speak: "しつ", on: ["しつ"], kun: [], examples: ["教室 (きょうしつ) — Klassenzimmer", "会議室 (かいぎしつ) — Konferenzraum"], sentences: [
    { jp: "教室に学生がたくさんいます。", reading: "きょうしつにがくせいがたくさんいます。", de: "Im Klassenzimmer sind viele Studenten." },
    { jp: "会議室は二階にあります。", reading: "かいぎしつはにかいにあります。", de: "Der Konferenzraum ist im zweiten Stock." }
  ]},
  { id: "k142", char: "病", meaning: ["Krankheit"], speak: "びょうき", on: ["びょう"], kun: ["やまい"], examples: ["病気 (びょうき) — Krankheit", "病院 (びょういん) — Krankenhaus"], sentences: [
    { jp: "病気で会社を休みました。", reading: "びょうきでかいしゃをやすみました。", de: "Wegen Krankheit war ich nicht in der Arbeit." },
    { jp: "病院へ行ってください。", reading: "びょういんへいってください。", de: "Bitte gehen Sie ins Krankenhaus." }
  ]},
  { id: "k143", char: "院", meaning: ["Institution", "Anstalt"], speak: "いん", on: ["いん"], kun: [], examples: ["病院 (びょういん) — Krankenhaus", "大学院 (だいがくいん) — Graduiertenschule"], sentences: [
    { jp: "病院の場所を教えてください。", reading: "びょういんのばしょをおしえてください。", de: "Bitte sagen Sie mir, wo das Krankenhaus ist." },
    { jp: "大学院で日本文学を勉強しています。", reading: "だいがくいんでにほんぶんがくをべんきょうしています。", de: "Ich studiere japanische Literatur an der Graduiertenschule." }
  ]},
  { id: "k144", char: "医", meaning: ["Medizin", "Arzt"], speak: "い", on: ["い"], kun: [], examples: ["医者 (いしゃ) — Arzt", "医学 (いがく) — Medizin"], sentences: [
    { jp: "医者に相談しました。", reading: "いしゃにそうだんしました。", de: "Ich habe mit dem Arzt gesprochen." },
    { jp: "彼は医学を勉強しています。", reading: "かれはいがくをべんきょうしています。", de: "Er studiert Medizin." }
  ]},
  { id: "k145", char: "者", meaning: ["Person"], speak: "しゃ", on: ["しゃ"], kun: ["もの"], examples: ["医者 (いしゃ) — Arzt", "学者 (がくしゃ) — Wissenschaftler"], sentences: [
    { jp: "若い者がたくさん来ました。", reading: "わかいものがたくさんきました。", de: "Viele junge Leute sind gekommen." },
    { jp: "彼は有名な学者です。", reading: "かれはゆうめいながくしゃです。", de: "Er ist ein berühmter Wissenschaftler." }
  ]},
  { id: "k146", char: "図", meaning: ["Diagramm", "Karte"], speak: "ず", on: ["ず", "と"], kun: [], examples: ["地図 (ちず) — Karte", "図書館 (としょかん) — Bibliothek"], sentences: [
    { jp: "地図を見せてください。", reading: "ちずをみせてください。", de: "Bitte zeigen Sie mir die Karte." },
    { jp: "図書館で本を借ります。", reading: "としょかんでほんをかります。", de: "Ich leihe Bücher in der Bibliothek aus." }
  ]},
  { id: "k147", char: "館", meaning: ["Halle", "Gebäude"], speak: "かん", on: ["かん"], kun: [], examples: ["図書館 (としょかん) — Bibliothek", "映画館 (えいがかん) — Kino"], sentences: [
    { jp: "今日は図書館で勉強します。", reading: "きょうはとしょかんでべんきょうします。", de: "Heute lerne ich in der Bibliothek." },
    { jp: "映画館で新しい映画を見ました。", reading: "えいがかんであたらしいえいがをみました。", de: "Ich habe den neuen Film im Kino gesehen." }
  ]},
  { id: "k148", char: "紙", meaning: ["Papier"], speak: "かみ", on: ["し"], kun: ["かみ"], examples: ["紙 (かみ) — Papier", "手紙 (てがみ) — Brief"], sentences: [
    { jp: "紙に名前を書いてください。", reading: "かみになまえをかいてください。", de: "Bitte schreiben Sie Ihren Namen auf das Papier." },
    { jp: "母に手紙を書きました。", reading: "ははにてがみをかきました。", de: "Ich habe meiner Mutter einen Brief geschrieben." }
  ]},

  // Medien & Kultur
  { id: "k149", char: "写", meaning: ["kopieren", "abbilden"], speak: "しゃしん", on: ["しゃ"], kun: ["うつ"], examples: ["写真 (しゃしん) — Foto", "写す (うつす) — kopieren/abbilden"], sentences: [
    { jp: "写真を撮ってもいいですか。", reading: "しゃしんをとってもいいですか。", de: "Darf ich ein Foto machen?" },
    { jp: "ノートに写してください。", reading: "ノートにうつしてください。", de: "Bitte schreiben Sie es in Ihr Heft ab." }
  ]},
  { id: "k150", char: "真", meaning: ["wahr", "echt"], speak: "しん", on: ["しん"], kun: ["ま"], examples: ["写真 (しゃしん) — Foto", "真ん中 (まんなか) — Mitte"], sentences: [
    { jp: "この写真はとてもきれいです。", reading: "このしゃしんはとてもきれいです。", de: "Dieses Foto ist sehr schön." },
    { jp: "部屋の真ん中にテーブルがあります。", reading: "へやのまんなかにテーブルがあります。", de: "In der Mitte des Zimmers steht ein Tisch." }
  ]},
  { id: "k151", char: "映", meaning: ["projizieren", "reflektieren"], speak: "えいが", on: ["えい"], kun: ["うつ"], examples: ["映画 (えいが) — Film", "映る (うつる) — sich spiegeln"], sentences: [
    { jp: "週末に映画を見に行きます。", reading: "しゅうまつにえいがをみにいきます。", de: "Am Wochenende gehe ich ins Kino." },
    { jp: "湖に山が映っています。", reading: "みずうみにやまがうつっています。", de: "Der Berg spiegelt sich im See." }
  ]},
  { id: "k152", char: "画", meaning: ["Bild", "Plan"], speak: "が", on: ["が", "かく"], kun: [], examples: ["映画 (えいが) — Film", "計画 (けいかく) — Plan"], sentences: [
    { jp: "好きな映画は何ですか。", reading: "すきなえいがはなんですか。", de: "Was ist Ihr Lieblingsfilm?" },
    { jp: "旅行の計画を立てます。", reading: "りょこうのけいかくをたてます。", de: "Ich plane eine Reise." }
  ]},
  { id: "k153", char: "音", meaning: ["Klang", "Geräusch"], speak: "おと", on: ["おん"], kun: ["おと"], examples: ["音 (おと) — Geräusch", "音楽 (おんがく) — Musik"], sentences: [
    { jp: "外から大きな音が聞こえます。", reading: "そとからおおきなおとがきこえます。", de: "Von draußen ist ein lautes Geräusch zu hören." },
    { jp: "音楽を聞きながら勉強します。", reading: "おんがくをききながらべんきょうします。", de: "Ich lerne, während ich Musik höre." }
  ]},
  { id: "k154", char: "楽", meaning: ["Spaß", "Musik", "angenehm"], speak: "たのしい", on: ["がく", "らく"], kun: ["たの"], examples: ["音楽 (おんがく) — Musik", "楽しい (たのしい) — lustig/Spaß"], sentences: [
    { jp: "旅行はとても楽しかったです。", reading: "りょこうはとてもたのしかったです。", de: "Die Reise war sehr schön." },
    { jp: "音楽が好きです。", reading: "おんがくがすきです。", de: "Ich mag Musik." }
  ]},

  // Essen & Trinken
  { id: "k155", char: "茶", meaning: ["Tee"], speak: "ちゃ", on: ["ちゃ", "さ"], kun: [], examples: ["お茶 (おちゃ) — Tee", "喫茶店 (きっさてん) — Café"], sentences: [
    { jp: "お茶を飲みませんか。", reading: "おちゃをのみませんか。", de: "Möchten Sie nicht Tee trinken?" },
    { jp: "駅前の喫茶店で会いましょう。", reading: "えきまえのきっさてんであいましょう。", de: "Treffen wir uns im Café vor dem Bahnhof." }
  ]},
  { id: "k156", char: "牛", meaning: ["Kuh", "Rind"], speak: "うし", on: ["ぎゅう"], kun: ["うし"], examples: ["牛 (うし) — Kuh", "牛肉 (ぎゅうにく) — Rindfleisch"], sentences: [
    { jp: "牧場で牛を見ました。", reading: "ぼくじょうでうしをみました。", de: "Auf der Weide habe ich Kühe gesehen." },
    { jp: "夕食に牛肉を食べました。", reading: "ゆうしょくにぎゅうにくをたべました。", de: "Zum Abendessen habe ich Rindfleisch gegessen." }
  ]},
  { id: "k157", char: "肉", meaning: ["Fleisch"], speak: "にく", on: ["にく"], kun: [], examples: ["肉 (にく) — Fleisch", "鶏肉 (とりにく) — Hühnerfleisch"], sentences: [
    { jp: "肉が好きですか。", reading: "にくがすきですか。", de: "Mögen Sie Fleisch?" },
    { jp: "肉より魚の方が好きです。", reading: "にくよりさかなのほうがすきです。", de: "Ich mag Fisch lieber als Fleisch." }
  ]},
  { id: "k158", char: "魚", meaning: ["Fisch"], speak: "さかな", on: ["ぎょ"], kun: ["さかな"], examples: ["魚 (さかな) — Fisch", "金魚 (きんぎょ) — Goldfisch"], sentences: [
    { jp: "新鮮な魚を買いました。", reading: "しんせんなさかなをかいました。", de: "Ich habe frischen Fisch gekauft." },
    { jp: "子供が金魚を見ています。", reading: "こどもがきんぎょをみています。", de: "Das Kind schaut die Goldfische an." }
  ]},
  { id: "k159", char: "鳥", meaning: ["Vogel"], speak: "とり", on: ["ちょう"], kun: ["とり"], examples: ["鳥 (とり) — Vogel", "小鳥 (ことり) — Vögelchen"], sentences: [
    { jp: "鳥が空を飛んでいます。", reading: "とりがそらをとんでいます。", de: "Vögel fliegen am Himmel." },
    { jp: "庭で小鳥が鳴いています。", reading: "にわでことりがないています。", de: "Im Garten zwitschern Vögelchen." }
  ]},
  { id: "k160", char: "米", meaning: ["Reis (roh)", "USA"], speak: "こめ", on: ["べい", "まい"], kun: ["こめ"], examples: ["お米 (おこめ) — Reis", "米国 (べいこく) — USA"], sentences: [
    { jp: "日本ではお米をよく食べます。", reading: "にほんではおこめをよくたべます。", de: "In Japan isst man oft Reis." },
    { jp: "兄は米国に住んでいます。", reading: "あにはべいこくにすんでいます。", de: "Mein älterer Bruder wohnt in den USA." }
  ]},
  { id: "k161", char: "野", meaning: ["Feld", "Wildnis"], speak: "の", on: ["や"], kun: ["の"], examples: ["野菜 (やさい) — Gemüse", "野原 (のはら) — Feld/Wiese"], sentences: [
    { jp: "野菜をたくさん食べてください。", reading: "やさいをたくさんたべてください。", de: "Bitte essen Sie viel Gemüse." },
    { jp: "野原で子供たちが遊んでいます。", reading: "のはらでこどもたちがあそんでいます。", de: "Auf der Wiese spielen Kinder." }
  ]},
  { id: "k162", char: "菜", meaning: ["Gemüse"], speak: "やさい", on: ["さい"], kun: ["な"], examples: ["野菜 (やさい) — Gemüse", "白菜 (はくさい) — Chinakohl"], sentences: [
    { jp: "今日は野菜サラダを作ります。", reading: "きょうはやさいサラダをつくります。", de: "Heute mache ich Gemüsesalat." },
    { jp: "白菜が安かったので買いました。", reading: "はくさいがやすかったのでかいました。", de: "Der Chinakohl war günstig, also habe ich ihn gekauft." }
  ]},

  // Verben — Bewegung & Alltag
  { id: "k163", char: "起", meaning: ["aufstehen", "geschehen"], speak: "おきる", on: ["き"], kun: ["お"], examples: ["起きる (おきる) — aufstehen", "起こす (おこす) — wecken"], sentences: [
    { jp: "毎朝六時に起きます。", reading: "まいあさろくじにおきます。", de: "Ich stehe jeden Morgen um sechs Uhr auf." },
    { jp: "明日早く起こしてください。", reading: "あしたはやくおこしてください。", de: "Bitte wecken Sie mich morgen früh." }
  ]},
  { id: "k164", char: "寝", meaning: ["schlafen"], speak: "ねる", on: ["しん"], kun: ["ね"], examples: ["寝る (ねる) — schlafen", "寝室 (しんしつ) — Schlafzimmer"], sentences: [
    { jp: "昨日は十一時に寝ました。", reading: "きのうはじゅういちじにねました。", de: "Gestern bin ich um elf Uhr ins Bett gegangen." },
    { jp: "寝室は二階にあります。", reading: "しんしつはにかいにあります。", de: "Das Schlafzimmer ist im zweiten Stock." }
  ]},
  { id: "k165", char: "着", meaning: ["tragen", "ankommen"], speak: "きる", on: ["ちゃく"], kun: ["き", "つ"], examples: ["着る (きる) — anziehen", "到着 (とうちゃく) — Ankunft"], sentences: [
    { jp: "新しいシャツを着ています。", reading: "あたらしいシャツをきています。", de: "Ich trage ein neues Hemd." },
    { jp: "電車が駅に着きました。", reading: "でんしゃがえきにつきました。", de: "Der Zug ist am Bahnhof angekommen." }
  ]},
  { id: "k166", char: "持", meaning: ["halten", "tragen"], speak: "もつ", on: ["じ"], kun: ["も"], examples: ["持つ (もつ) — halten", "気持ち (きもち) — Gefühl"], sentences: [
    { jp: "傘を持って行きます。", reading: "かさをもっていきます。", de: "Ich nehme einen Regenschirm mit." },
    { jp: "気持ちがいい朝です。", reading: "きもちがいいあさです。", de: "Es ist ein angenehmer Morgen." }
  ]},
  { id: "k167", char: "待", meaning: ["warten"], speak: "まつ", on: ["たい"], kun: ["ま"], examples: ["待つ (まつ) — warten", "招待 (しょうたい) — Einladung"], sentences: [
    { jp: "ここで少し待ってください。", reading: "ここですこしまってください。", de: "Bitte warten Sie hier kurz." },
    { jp: "誕生日会に招待されました。", reading: "たんじょうびかいにしょうたいされました。", de: "Ich wurde zu einer Geburtstagsfeier eingeladen." }
  ]},
  { id: "k168", char: "歩", meaning: ["gehen", "Schritt"], speak: "あるく", on: ["ほ"], kun: ["ある", "あゆ"], examples: ["歩く (あるく) — gehen", "散歩 (さんぽ) — Spaziergang"], sentences: [
    { jp: "公園を歩きましょう。", reading: "こうえんをあるきましょう。", de: "Lasst uns durch den Park gehen." },
    { jp: "毎晩犬と散歩します。", reading: "まいばんいぬとさんぽします。", de: "Jeden Abend gehe ich mit dem Hund spazieren." }
  ]},
  { id: "k169", char: "走", meaning: ["rennen", "laufen"], speak: "はしる", on: ["そう"], kun: ["はし"], examples: ["走る (はしる) — rennen", "競走 (きょうそう) — Wettrennen"], sentences: [
    { jp: "毎朝公園で走ります。", reading: "まいあさこうえんではしります。", de: "Ich laufe jeden Morgen im Park." },
    { jp: "電車に遅れそうで走りました。", reading: "でんしゃにおくれそうではしりました。", de: "Ich bin gerannt, weil ich fast zu spät zum Zug kam." }
  ]},
  { id: "k170", char: "使", meaning: ["benutzen", "gebrauchen"], speak: "つかう", on: ["し"], kun: ["つか"], examples: ["使う (つかう) — benutzen", "大使館 (たいしかん) — Botschaft"], sentences: [
    { jp: "このペンを使ってもいいですか。", reading: "このペンをつかってもいいですか。", de: "Darf ich diesen Stift benutzen?" },
    { jp: "ドイツ大使館はどこですか。", reading: "ドイツたいしかんはどこですか。", de: "Wo ist die Deutsche Botschaft?" }
  ]},
];
