const KANJI = [
  // Zahlen
  { id: "k001", char: "一", meaning: ["eins", "1"], on: ["いち", "いつ"], kun: ["ひと", "ひとつ"], examples: ["一月 (いちがつ) — Januar", "一つ (ひとつ) — ein Ding"], sentences: [
    { jp: "りんごを一つください。", de: "Geben Sie mir bitte einen Apfel." },
    { jp: "一月はとても寒いです。", de: "Der Januar ist sehr kalt." }
  ]},
  { id: "k002", char: "二", meaning: ["zwei", "2"], on: ["に", "じ"], kun: ["ふた", "ふたつ"], examples: ["二月 (にがつ) — Februar", "二つ (ふたつ) — zwei Dinge"], sentences: [
    { jp: "コーヒーを二つお願いします。", de: "Zwei Kaffee bitte." },
    { jp: "二月に誕生日があります。", de: "Mein Geburtstag ist im Februar." }
  ]},
  { id: "k003", char: "三", meaning: ["drei", "3"], on: ["さん"], kun: ["み", "みっつ"], examples: ["三月 (さんがつ) — März", "三つ (みっつ) — drei Dinge"], sentences: [
    { jp: "三時に友達と会います。", de: "Ich treffe mich um drei Uhr mit meinem Freund." },
    { jp: "三つのケーキを食べました。", de: "Ich habe drei Kuchen gegessen." }
  ]},
  { id: "k004", char: "四", meaning: ["vier", "4"], on: ["し"], kun: ["よ", "よん", "よっつ"], examples: ["四月 (しがつ) — April", "四つ (よっつ) — vier Dinge"], sentences: [
    { jp: "四月に学校が始まります。", de: "Die Schule beginnt im April." },
    { jp: "家族は四人います。", de: "Meine Familie hat vier Personen." }
  ]},
  { id: "k005", char: "五", meaning: ["fünf", "5"], on: ["ご"], kun: ["いつ", "いつつ"], examples: ["五月 (ごがつ) — Mai", "五つ (いつつ) — fünf Dinge"], sentences: [
    { jp: "五月は天気がいいです。", de: "Im Mai ist das Wetter schön." },
    { jp: "五時に家に帰ります。", de: "Ich gehe um fünf Uhr nach Hause." }
  ]},
  { id: "k006", char: "六", meaning: ["sechs", "6"], on: ["ろく"], kun: ["む", "むっつ"], examples: ["六月 (ろくがつ) — Juni", "六つ (むっつ) — sechs Dinge"], sentences: [
    { jp: "六月はよく雨が降ります。", de: "Im Juni regnet es oft." },
    { jp: "六時に起きます。", de: "Ich stehe um sechs Uhr auf." }
  ]},
  { id: "k007", char: "七", meaning: ["sieben", "7"], on: ["しち"], kun: ["なな", "ななつ"], examples: ["七月 (しちがつ) — Juli", "七つ (ななつ) — sieben Dinge"], sentences: [
    { jp: "七月に海へ行きます。", de: "Im Juli fahre ich ans Meer." },
    { jp: "七時に朝ごはんを食べます。", de: "Ich esse um sieben Uhr Frühstück." }
  ]},
  { id: "k008", char: "八", meaning: ["acht", "8"], on: ["はち"], kun: ["や", "やっつ"], examples: ["八月 (はちがつ) — August", "八つ (やっつ) — acht Dinge"], sentences: [
    { jp: "八月はとても暑いです。", de: "Im August ist es sehr heiß." },
    { jp: "八時に学校が始まります。", de: "Die Schule beginnt um acht Uhr." }
  ]},
  { id: "k009", char: "九", meaning: ["neun", "9"], on: ["く", "きゅう"], kun: ["ここの", "ここのつ"], examples: ["九月 (くがつ) — September", "九つ (ここのつ) — neun Dinge"], sentences: [
    { jp: "九月に日本へ来ました。", de: "Ich bin im September nach Japan gekommen." },
    { jp: "九時まで起きています。", de: "Ich bleibe bis neun Uhr auf." }
  ]},
  { id: "k010", char: "十", meaning: ["zehn", "10"], on: ["じゅう", "じっ"], kun: ["とお", "と"], examples: ["十月 (じゅうがつ) — Oktober", "十 (とお) — zehn Dinge"], sentences: [
    { jp: "十月は紅葉がきれいです。", de: "Im Oktober sind die Herbstblätter wunderschön." },
    { jp: "十分待ってください。", de: "Bitte warten Sie zehn Minuten." }
  ]},

  // Große Zahlen & Geld
  { id: "k011", char: "百", meaning: ["hundert", "100"], on: ["ひゃく", "びゃく", "ぴゃく"], kun: [], examples: ["百円 (ひゃくえん) — 100 Yen", "三百 (さんびゃく) — 300"], sentences: [
    { jp: "このジュースは百円です。", de: "Dieser Saft kostet 100 Yen." },
    { jp: "百メートル歩きました。", de: "Ich bin hundert Meter gelaufen." }
  ]},
  { id: "k012", char: "千", meaning: ["tausend", "1.000"], on: ["せん", "ぜん"], kun: ["ち"], examples: ["千円 (せんえん) — 1.000 Yen", "三千 (さんぜん) — 3.000"], sentences: [
    { jp: "このかばんは千円です。", de: "Diese Tasche kostet 1.000 Yen." },
    { jp: "千円でランチを食べました。", de: "Ich habe für 1.000 Yen zu Mittag gegessen." }
  ]},
  { id: "k013", char: "万", meaning: ["zehntausend", "10.000"], on: ["まん", "ばん"], kun: [], examples: ["一万円 (いちまんえん) — 10.000 Yen", "万国 (ばんこく) — alle Länder"], sentences: [
    { jp: "このパソコンは五万円です。", de: "Dieser Computer kostet 50.000 Yen." },
    { jp: "一万円をATMでおろしました。", de: "Ich habe 10.000 Yen am Geldautomaten abgehoben." }
  ]},
  { id: "k014", char: "円", meaning: ["Yen", "Kreis", "rund"], on: ["えん"], kun: ["まるい"], examples: ["百円 (ひゃくえん) — 100 Yen", "円い (まるい) — rund"], sentences: [
    { jp: "すみません、百円がありますか。", de: "Entschuldigung, haben Sie 100 Yen?" },
    { jp: "このケーキは円い形です。", de: "Dieser Kuchen hat eine runde Form." }
  ]},

  // Zeit
  { id: "k015", char: "年", meaning: ["Jahr"], on: ["ねん"], kun: ["とし"], examples: ["今年 (ことし) — dieses Jahr", "来年 (らいねん) — nächstes Jahr"], sentences: [
    { jp: "今年は日本語を勉強します。", de: "Dieses Jahr lerne ich Japanisch." },
    { jp: "来年、日本へ行きたいです。", de: "Nächstes Jahr möchte ich nach Japan fahren." }
  ]},
  { id: "k016", char: "月", meaning: ["Monat", "Mond"], on: ["げつ", "がつ"], kun: ["つき"], examples: ["一月 (いちがつ) — Januar", "月 (つき) — Mond"], sentences: [
    { jp: "今月は忙しいです。", de: "Diesen Monat bin ich sehr beschäftigt." },
    { jp: "夜、月がとてもきれいです。", de: "Nachts ist der Mond sehr schön." }
  ]},
  { id: "k017", char: "日", meaning: ["Tag", "Sonne", "Japan"], on: ["にち", "じつ"], kun: ["ひ", "か"], examples: ["日本語 (にほんご) — Japanisch", "毎日 (まいにち) — jeden Tag"], sentences: [
    { jp: "今日はいい天気ですね。", de: "Das Wetter ist heute schön." },
    { jp: "毎日日本語を勉強します。", de: "Ich lerne jeden Tag Japanisch." }
  ]},
  { id: "k018", char: "時", meaning: ["Zeit", "Uhr", "Stunde"], on: ["じ"], kun: ["とき"], examples: ["三時 (さんじ) — 3 Uhr", "時々 (ときどき) — manchmal"], sentences: [
    { jp: "今、何時ですか。", de: "Wie viel Uhr ist es jetzt?" },
    { jp: "時々コーヒーを飲みます。", de: "Manchmal trinke ich Kaffee." }
  ]},
  { id: "k019", char: "分", meaning: ["Minute", "Teil", "verstehen"], on: ["ふん", "ぶん", "ぷん"], kun: ["わかる", "わける"], examples: ["五分 (ごふん) — 5 Minuten", "分かる (わかる) — verstehen"], sentences: [
    { jp: "五分後に来てください。", de: "Bitte kommen Sie in fünf Minuten." },
    { jp: "日本語が少し分かります。", de: "Ich verstehe ein bisschen Japanisch." }
  ]},
  { id: "k020", char: "半", meaning: ["halb", "Mitte"], on: ["はん"], kun: ["なかば"], examples: ["三時半 (さんじはん) — halb vier", "半分 (はんぶん) — die Hälfte"], sentences: [
    { jp: "七時半に朝ごはんを食べます。", de: "Ich esse um halb acht Frühstück." },
    { jp: "ケーキを半分食べました。", de: "Ich habe die Hälfte des Kuchens gegessen." }
  ]},

  // Frageworte & Zeit
  { id: "k021", char: "今", meaning: ["jetzt", "gegenwärtig"], on: ["こん", "きん"], kun: ["いま"], examples: ["今 (いま) — jetzt", "今日 (きょう) — heute"], sentences: [
    { jp: "今、何をしていますか。", de: "Was machen Sie gerade?" },
    { jp: "今日は学校があります。", de: "Heute habe ich Schule." }
  ]},
  { id: "k022", char: "何", meaning: ["was", "welche", "wie viele"], on: ["なに", "なん"], kun: ["なに", "なん"], examples: ["何時 (なんじ) — wie viel Uhr?", "何 (なに) — was?"], sentences: [
    { jp: "今日は何を食べますか。", de: "Was essen Sie heute?" },
    { jp: "何時に起きますか。", de: "Um wie viel Uhr stehen Sie auf?" }
  ]},

  // Personen
  { id: "k023", char: "人", meaning: ["Mensch", "Person"], on: ["じん", "にん"], kun: ["ひと"], examples: ["日本人 (にほんじん) — Japaner", "一人 (ひとり) — eine Person"], sentences: [
    { jp: "あの人は誰ですか。", de: "Wer ist diese Person dort?" },
    { jp: "日本人の友達がいます。", de: "Ich habe einen japanischen Freund." }
  ]},
  { id: "k024", char: "男", meaning: ["Mann", "männlich"], on: ["だん", "なん"], kun: ["おとこ"], examples: ["男の人 (おとこのひと) — Mann", "男子 (だんし) — männlich"], sentences: [
    { jp: "あの男の人は先生ですか。", de: "Ist dieser Mann ein Lehrer?" },
    { jp: "男の子が公園で遊んでいます。", de: "Ein Junge spielt im Park." }
  ]},
  { id: "k025", char: "女", meaning: ["Frau", "weiblich"], on: ["じょ", "にょ"], kun: ["おんな", "め"], examples: ["女の人 (おんなのひと) — Frau", "女子 (じょし) — weiblich"], sentences: [
    { jp: "女の人がバスに乗っています。", de: "Eine Frau sitzt im Bus." },
    { jp: "女の子は赤いかばんを持っています。", de: "Das Mädchen hat eine rote Tasche." }
  ]},
  { id: "k026", char: "子", meaning: ["Kind", "Sohn", "Tochter"], on: ["し", "す"], kun: ["こ"], examples: ["子供 (こども) — Kind", "女の子 (おんなのこ) — Mädchen"], sentences: [
    { jp: "子供が公園で遊んでいます。", de: "Die Kinder spielen im Park." },
    { jp: "あの子はとても元気です。", de: "Dieses Kind ist sehr lebhaft." }
  ]},
  { id: "k027", char: "父", meaning: ["Vater"], on: ["ふ"], kun: ["ちち"], examples: ["父 (ちち) — mein Vater", "お父さん (おとうさん) — Vater (höflich)"], sentences: [
    { jp: "父は毎朝コーヒーを飲みます。", de: "Mein Vater trinkt jeden Morgen Kaffee." },
    { jp: "お父さんの仕事は何ですか。", de: "Was ist der Beruf Ihres Vaters?" }
  ]},
  { id: "k028", char: "母", meaning: ["Mutter"], on: ["ぼ"], kun: ["はは"], examples: ["母 (はは) — meine Mutter", "お母さん (おかあさん) — Mutter (höflich)"], sentences: [
    { jp: "母は料理が上手です。", de: "Meine Mutter kocht sehr gut." },
    { jp: "お母さんと買い物に行きました。", de: "Ich bin mit meiner Mutter einkaufen gegangen." }
  ]},
  { id: "k029", char: "友", meaning: ["Freund", "Freundschaft"], on: ["ゆう"], kun: ["とも"], examples: ["友達 (ともだち) — Freund", "親友 (しんゆう) — enger Freund"], sentences: [
    { jp: "友達と映画を見ます。", de: "Ich schaue mit meinem Freund einen Film." },
    { jp: "友達の家でご飯を食べました。", de: "Ich habe bei meinem Freund gegessen." }
  ]},

  // Schule & Bildung
  { id: "k030", char: "先", meaning: ["vorher", "Spitze", "zuerst"], on: ["せん"], kun: ["さき", "まず"], examples: ["先生 (せんせい) — Lehrer", "先週 (せんしゅう) — letzte Woche"], sentences: [
    { jp: "先生に質問があります。", de: "Ich habe eine Frage an den Lehrer." },
    { jp: "先週、図書館へ行きました。", de: "Letzte Woche bin ich in die Bibliothek gegangen." }
  ]},
  { id: "k031", char: "生", meaning: ["Leben", "gebären", "roh"], on: ["せい", "しょう"], kun: ["いきる", "うまれる", "なま"], examples: ["先生 (せんせい) — Lehrer", "学生 (がくせい) — Student"], sentences: [
    { jp: "私は学生です。", de: "Ich bin Student." },
    { jp: "先生はやさしいです。", de: "Der Lehrer ist freundlich." }
  ]},
  { id: "k032", char: "学", meaning: ["lernen", "Wissenschaft"], on: ["がく"], kun: ["まなぶ"], examples: ["学校 (がっこう) — Schule", "大学 (だいがく) — Universität"], sentences: [
    { jp: "毎日学校へ行きます。", de: "Ich gehe jeden Tag zur Schule." },
    { jp: "大学で日本語を学んでいます。", de: "Ich lerne an der Universität Japanisch." }
  ]},
  { id: "k033", char: "校", meaning: ["Schule"], on: ["こう"], kun: [], examples: ["学校 (がっこう) — Schule", "高校 (こうこう) — Oberschule"], sentences: [
    { jp: "学校は九時に始まります。", de: "Die Schule beginnt um neun Uhr." },
    { jp: "高校に入りたいです。", de: "Ich möchte in die Oberschule eintreten." }
  ]},

  // Gesellschaft
  { id: "k034", char: "会", meaning: ["Treffen", "Gesellschaft", "verstehen"], on: ["かい", "え"], kun: ["あう"], examples: ["会社 (かいしゃ) — Firma", "会う (あう) — treffen"], sentences: [
    { jp: "友達に会いました。", de: "Ich habe meinen Freund getroffen." },
    { jp: "父は会社で働いています。", de: "Mein Vater arbeitet in einer Firma." }
  ]},
  { id: "k035", char: "社", meaning: ["Gesellschaft", "Firma", "Schrein"], on: ["しゃ", "じゃ"], kun: ["やしろ"], examples: ["会社 (かいしゃ) — Firma", "神社 (じんじゃ) — Shinto-Schrein"], sentences: [
    { jp: "母は会社に行きました。", de: "Meine Mutter ist zur Firma gegangen." },
    { jp: "神社でお参りをしました。", de: "Ich habe am Shinto-Schrein gebetet." }
  ]},
  { id: "k036", char: "店", meaning: ["Geschäft", "Laden"], on: ["てん"], kun: ["みせ"], examples: ["お店 (おみせ) — Laden", "本店 (ほんてん) — Hauptgeschäft"], sentences: [
    { jp: "あのお店でパンを買います。", de: "Ich kaufe Brot in diesem Laden." },
    { jp: "その店は何時に開きますか。", de: "Um wie viel Uhr öffnet dieses Geschäft?" }
  ]},
  { id: "k037", char: "家", meaning: ["Haus", "Zuhause", "Familie"], on: ["か", "け"], kun: ["いえ", "うち"], examples: ["家 (うち) — Zuhause", "家族 (かぞく) — Familie"], sentences: [
    { jp: "家に帰ります。", de: "Ich gehe nach Hause." },
    { jp: "家族と夕ごはんを食べます。", de: "Ich esse mit meiner Familie Abendessen." }
  ]},
  { id: "k038", char: "国", meaning: ["Land", "Nation"], on: ["こく", "ごく"], kun: ["くに"], examples: ["日本国 (にほんこく) — Japan", "外国語 (がいこくご) — Fremdsprache"], sentences: [
    { jp: "あなたの国はどこですか。", de: "Aus welchem Land kommen Sie?" },
    { jp: "外国語を勉強するのは楽しいです。", de: "Es macht Spaß, eine Fremdsprache zu lernen." }
  ]},

  // Sprache
  { id: "k039", char: "語", meaning: ["Sprache", "Wort"], on: ["ご"], kun: ["かたる", "かたらう"], examples: ["日本語 (にほんご) — Japanisch", "英語 (えいご) — Englisch"], sentences: [
    { jp: "日本語を毎日練習します。", de: "Ich übe jeden Tag Japanisch." },
    { jp: "英語と日本語を話せます。", de: "Ich kann Englisch und Japanisch sprechen." }
  ]},
  { id: "k040", char: "字", meaning: ["Schriftzeichen", "Buchstabe"], on: ["じ"], kun: ["あざ"], examples: ["漢字 (かんじ) — Kanji", "文字 (もじ) — Schriftzeichen"], sentences: [
    { jp: "漢字を毎日練習しています。", de: "Ich übe jeden Tag Kanji." },
    { jp: "この字はどう読みますか。", de: "Wie liest man dieses Schriftzeichen?" }
  ]},
  { id: "k041", char: "文", meaning: ["Text", "Schrift", "Satz"], on: ["ぶん", "もん"], kun: ["ふみ"], examples: ["文字 (もじ) — Schriftzeichen", "作文 (さくぶん) — Aufsatz"], sentences: [
    { jp: "日本語で文を書きました。", de: "Ich habe einen Satz auf Japanisch geschrieben." },
    { jp: "作文の宿題があります。", de: "Ich habe Hausaufgaben für den Aufsatz." }
  ]},
  { id: "k042", char: "本", meaning: ["Buch", "Ursprung", "Japan"], on: ["ほん", "ぽん", "ぼん"], kun: ["もと"], examples: ["本 (ほん) — Buch", "日本 (にほん) — Japan"], sentences: [
    { jp: "図書館で本を読みました。", de: "Ich habe in der Bibliothek ein Buch gelesen." },
    { jp: "日本へ旅行したいです。", de: "Ich möchte nach Japan reisen." }
  ]},

  // Handlungen (Verben als Kanji)
  { id: "k043", char: "書", meaning: ["schreiben"], on: ["しょ"], kun: ["かく"], examples: ["書く (かく) — schreiben", "教科書 (きょうかしょ) — Schulbuch"], sentences: [
    { jp: "手紙を書いています。", de: "Ich schreibe gerade einen Brief." },
    { jp: "教科書に名前を書いてください。", de: "Bitte schreiben Sie Ihren Namen ins Schulbuch." }
  ]},
  { id: "k044", char: "読", meaning: ["lesen"], on: ["どく", "とく"], kun: ["よむ"], examples: ["読む (よむ) — lesen", "読書 (どくしょ) — Lektüre"], sentences: [
    { jp: "寝る前に本を読みます。", de: "Ich lese vor dem Schlafen ein Buch." },
    { jp: "この文字が読めません。", de: "Ich kann dieses Schriftzeichen nicht lesen." }
  ]},
  { id: "k045", char: "聞", meaning: ["hören", "fragen"], on: ["ぶん", "もん"], kun: ["きく", "きこえる"], examples: ["聞く (きく) — hören/fragen", "新聞 (しんぶん) — Zeitung"], sentences: [
    { jp: "音楽を聞くのが好きです。", de: "Ich höre gerne Musik." },
    { jp: "先生に道を聞きました。", de: "Ich habe den Lehrer nach dem Weg gefragt." }
  ]},
  { id: "k046", char: "話", meaning: ["sprechen", "Gespräch", "Geschichte"], on: ["わ"], kun: ["はなす", "はなし"], examples: ["話す (はなす) — sprechen", "電話 (でんわ) — Telefon"], sentences: [
    { jp: "友達と電話で話しました。", de: "Ich habe mit meinem Freund telefoniert." },
    { jp: "日本語で話してみてください。", de: "Versuchen Sie bitte, auf Japanisch zu sprechen." }
  ]},
  { id: "k047", char: "言", meaning: ["sagen", "Wort"], on: ["げん", "ごん"], kun: ["いう", "こと"], examples: ["言う (いう) — sagen", "言葉 (ことば) — Wort/Sprache"], sentences: [
    { jp: "先生は何と言いましたか。", de: "Was hat der Lehrer gesagt?" },
    { jp: "日本語の言葉を覚えています。", de: "Ich lerne japanische Wörter auswendig." }
  ]},
  { id: "k048", char: "見", meaning: ["sehen", "zeigen"], on: ["けん"], kun: ["みる", "みえる", "みせる"], examples: ["見る (みる) — sehen", "見せる (みせる) — zeigen"], sentences: [
    { jp: "テレビを見るのが好きです。", de: "Ich schaue gerne Fernsehen." },
    { jp: "写真を見せてください。", de: "Bitte zeigen Sie mir das Foto." }
  ]},
  { id: "k049", char: "食", meaning: ["essen", "Essen"], on: ["しょく", "じき"], kun: ["たべる", "くう"], examples: ["食べる (たべる) — essen", "食事 (しょくじ) — Mahlzeit"], sentences: [
    { jp: "朝ごはんにパンを食べます。", de: "Zum Frühstück esse ich Brot." },
    { jp: "家族と一緒に食事をします。", de: "Ich esse gemeinsam mit meiner Familie." }
  ]},
  { id: "k050", char: "飲", meaning: ["trinken"], on: ["いん"], kun: ["のむ"], examples: ["飲む (のむ) — trinken", "飲み物 (のみもの) — Getränk"], sentences: [
    { jp: "毎朝お茶を飲みます。", de: "Ich trinke jeden Morgen Tee." },
    { jp: "どんな飲み物が好きですか。", de: "Welches Getränk mögen Sie?" }
  ]},
  { id: "k051", char: "行", meaning: ["gehen", "Reihe"], on: ["こう", "ぎょう", "あん"], kun: ["いく", "ゆく", "おこなう"], examples: ["行く (いく) — gehen", "旅行 (りょこう) — Reise"], sentences: [
    { jp: "明日、学校に行きます。", de: "Morgen gehe ich zur Schule." },
    { jp: "夏休みに旅行したいです。", de: "Ich möchte in den Sommerferien verreisen." }
  ]},
  { id: "k052", char: "来", meaning: ["kommen"], on: ["らい"], kun: ["くる", "きたる", "こ"], examples: ["来る (くる) — kommen", "来週 (らいしゅう) — nächste Woche"], sentences: [
    { jp: "友達が家に来ます。", de: "Mein Freund kommt zu mir nach Hause." },
    { jp: "来週、テストがあります。", de: "Nächste Woche haben wir einen Test." }
  ]},
  { id: "k053", char: "帰", meaning: ["heimkehren", "zurückkehren"], on: ["き"], kun: ["かえる", "かえす"], examples: ["帰る (かえる) — nach Hause gehen", "帰国 (きこく) — Heimkehr"], sentences: [
    { jp: "六時に家に帰ります。", de: "Ich gehe um sechs Uhr nach Hause." },
    { jp: "雨が降る前に帰りましょう。", de: "Lass uns nach Hause gehen, bevor es regnet." }
  ]},
  { id: "k054", char: "出", meaning: ["herausgehen", "herausnehmen"], on: ["しゅつ", "すい"], kun: ["でる", "だす"], examples: ["出る (でる) — herausgehen", "出口 (でぐち) — Ausgang"], sentences: [
    { jp: "八時に家を出ます。", de: "Ich verlasse das Haus um acht Uhr." },
    { jp: "出口はどこですか。", de: "Wo ist der Ausgang?" }
  ]},
  { id: "k055", char: "入", meaning: ["eintreten", "hineingehen"], on: ["にゅう"], kun: ["いる", "いれる", "はいる"], examples: ["入る (はいる) — eintreten", "入口 (いりぐち) — Eingang"], sentences: [
    { jp: "部屋に入ってください。", de: "Bitte treten Sie ins Zimmer ein." },
    { jp: "入口はあちらです。", de: "Der Eingang ist dort drüben." }
  ]},
  { id: "k056", char: "買", meaning: ["kaufen"], on: ["ばい"], kun: ["かう"], examples: ["買う (かう) — kaufen", "買い物 (かいもの) — Einkaufen"], sentences: [
    { jp: "スーパーで野菜を買いました。", de: "Ich habe im Supermarkt Gemüse gekauft." },
    { jp: "お母さんと買い物に行きます。", de: "Ich gehe mit meiner Mutter einkaufen." }
  ]},
  { id: "k057", char: "売", meaning: ["verkaufen"], on: ["ばい"], kun: ["うる", "うれる"], examples: ["売る (うる) — verkaufen", "売り場 (うりば) — Verkaufsstand"], sentences: [
    { jp: "あの店でりんごを売っています。", de: "In diesem Laden werden Äpfel verkauft." },
    { jp: "売り場はどこですか。", de: "Wo ist der Verkaufsstand?" }
  ]},
  { id: "k058", char: "作", meaning: ["machen", "herstellen"], on: ["さく", "さ"], kun: ["つくる"], examples: ["作る (つくる) — machen/herstellen", "作文 (さくぶん) — Aufsatz"], sentences: [
    { jp: "母と一緒にケーキを作りました。", de: "Ich habe zusammen mit meiner Mutter einen Kuchen gebacken." },
    { jp: "日本語で作文を書きます。", de: "Ich schreibe einen Aufsatz auf Japanisch." }
  ]},
  { id: "k059", char: "立", meaning: ["stehen", "aufstehen"], on: ["りつ", "りゅう"], kun: ["たつ", "たてる"], examples: ["立つ (たつ) — stehen", "立派 (りっぱ) — prächtig"], sentences: [
    { jp: "バスの中で立っています。", de: "Ich stehe im Bus." },
    { jp: "あの建物は立派ですね。", de: "Dieses Gebäude ist wirklich prächtig." }
  ]},
  { id: "k060", char: "知", meaning: ["wissen", "kennen"], on: ["ち"], kun: ["しる", "しらせる"], examples: ["知る (しる) — wissen/kennen", "知識 (ちしき) — Wissen"], sentences: [
    { jp: "その店を知っていますか。", de: "Kennen Sie dieses Geschäft?" },
    { jp: "日本の文化をもっと知りたいです。", de: "Ich möchte mehr über die japanische Kultur wissen." }
  ]},
  { id: "k061", char: "休", meaning: ["Ruhe", "Pause", "ruhen"], on: ["きゅう"], kun: ["やすむ", "やすまる", "やすみ"], examples: ["休む (やすむ) — ruhen/pausieren", "休日 (きゅうじつ) — Ruhetag"], sentences: [
    { jp: "今日は学校を休みました。", de: "Ich habe heute die Schule gefehlt." },
    { jp: "休日に家族と公園へ行きます。", de: "Am freien Tag gehe ich mit meiner Familie in den Park." }
  ]},

  // Richtungen & Position
  { id: "k062", char: "上", meaning: ["oben", "über", "hinauf"], on: ["じょう", "しょう"], kun: ["うえ", "うわ", "かみ", "あげる", "のぼる"], examples: ["上 (うえ) — oben", "上手 (じょうず) — geschickt"], sentences: [
    { jp: "テーブルの上に本があります。", de: "Auf dem Tisch liegt ein Buch." },
    { jp: "兄はピアノが上手です。", de: "Mein älterer Bruder spielt gut Klavier." }
  ]},
  { id: "k063", char: "下", meaning: ["unten", "unter", "hinunter"], on: ["か", "げ"], kun: ["した", "しも", "くだる", "おりる"], examples: ["下 (した) — unten", "地下鉄 (ちかてつ) — U-Bahn"], sentences: [
    { jp: "かばんは椅子の下にあります。", de: "Die Tasche ist unter dem Stuhl." },
    { jp: "地下鉄で学校へ行きます。", de: "Ich fahre mit der U-Bahn zur Schule." }
  ]},
  { id: "k064", char: "中", meaning: ["Mitte", "innen", "China"], on: ["ちゅう", "じゅう"], kun: ["なか"], examples: ["中 (なか) — innen/Mitte", "中国 (ちゅうごく) — China"], sentences: [
    { jp: "かばんの中に教科書があります。", de: "Im Rucksack ist ein Schulbuch." },
    { jp: "中国語も少し話せます。", de: "Ich kann auch ein bisschen Chinesisch sprechen." }
  ]},
  { id: "k065", char: "外", meaning: ["außen", "draußen", "Ausland"], on: ["がい", "げ"], kun: ["そと", "はずれる"], examples: ["外 (そと) — draußen", "外国語 (がいこくご) — Fremdsprache"], sentences: [
    { jp: "外はとても寒いです。", de: "Draußen ist es sehr kalt." },
    { jp: "外国語を話せる人が増えています。", de: "Immer mehr Menschen können eine Fremdsprache sprechen." }
  ]},
  { id: "k066", char: "右", meaning: ["rechts"], on: ["う", "ゆう"], kun: ["みぎ"], examples: ["右 (みぎ) — rechts", "右側 (みぎがわ) — rechte Seite"], sentences: [
    { jp: "右に曲がってください。", de: "Bitte biegen Sie rechts ab." },
    { jp: "右側に座ってください。", de: "Bitte setzen Sie sich auf die rechte Seite." }
  ]},
  { id: "k067", char: "左", meaning: ["links"], on: ["さ"], kun: ["ひだり"], examples: ["左 (ひだり) — links", "左側 (ひだりがわ) — linke Seite"], sentences: [
    { jp: "左に曲がると駅があります。", de: "Wenn Sie links abbiegen, gibt es einen Bahnhof." },
    { jp: "左手にかばんを持っています。", de: "Ich halte die Tasche in der linken Hand." }
  ]},
  { id: "k068", char: "前", meaning: ["vorne", "vorher", "davor"], on: ["ぜん"], kun: ["まえ"], examples: ["前 (まえ) — vorne/vorher", "名前 (なまえ) — Name"], sentences: [
    { jp: "学校の前でバスを待ちます。", de: "Ich warte vor der Schule auf den Bus." },
    { jp: "名前を教えてください。", de: "Bitte sagen Sie mir Ihren Namen." }
  ]},
  { id: "k069", char: "後", meaning: ["hinten", "nachher", "danach"], on: ["ご", "こう"], kun: ["あと", "うしろ", "おくれる"], examples: ["後 (あと) — nachher", "午後 (ごご) — Nachmittag"], sentences: [
    { jp: "授業の後で図書館へ行きます。", de: "Nach dem Unterricht gehe ich in die Bibliothek." },
    { jp: "午後三時に会いましょう。", de: "Treffen wir uns um drei Uhr nachmittags." }
  ]},

  // Himmelsrichtungen
  { id: "k070", char: "東", meaning: ["Osten"], on: ["とう"], kun: ["ひがし"], examples: ["東京 (とうきょう) — Tokio", "東 (ひがし) — Osten"], sentences: [
    { jp: "東京に住んでいます。", de: "Ich wohne in Tokio." },
    { jp: "太陽は東から出ます。", de: "Die Sonne geht im Osten auf." }
  ]},
  { id: "k071", char: "西", meaning: ["Westen"], on: ["せい", "さい"], kun: ["にし"], examples: ["西 (にし) — Westen", "関西 (かんさい) — Kansai-Region"], sentences: [
    { jp: "太陽は西に沈みます。", de: "Die Sonne geht im Westen unter." },
    { jp: "関西の食べ物が好きです。", de: "Ich mag das Essen aus der Kansai-Region." }
  ]},
  { id: "k072", char: "南", meaning: ["Süden"], on: ["なん", "な"], kun: ["みなみ"], examples: ["南 (みなみ) — Süden", "南口 (みなみぐち) — Südausgang"], sentences: [
    { jp: "南口で待ち合わせをします。", de: "Wir treffen uns am Südausgang." },
    { jp: "南の国は暖かいです。", de: "Die Länder im Süden sind warm." }
  ]},
  { id: "k073", char: "北", meaning: ["Norden"], on: ["ほく", "ほっ"], kun: ["きた"], examples: ["北海道 (ほっかいどう) — Hokkaido", "北 (きた) — Norden"], sentences: [
    { jp: "北海道はとても寒いです。", de: "Hokkaido ist sehr kalt." },
    { jp: "北の駅で乗り換えます。", de: "Ich steige am nördlichen Bahnhof um." }
  ]},

  // Größe & Eigenschaften
  { id: "k074", char: "大", meaning: ["groß", "riesig"], on: ["だい", "たい"], kun: ["おおきい", "おお"], examples: ["大きい (おおきい) — groß", "大学 (だいがく) — Universität"], sentences: [
    { jp: "大きいケーキを買いました。", de: "Ich habe einen großen Kuchen gekauft." },
    { jp: "大学で友達ができました。", de: "An der Universität habe ich Freunde gefunden." }
  ]},
  { id: "k075", char: "小", meaning: ["klein"], on: ["しょう"], kun: ["ちいさい", "こ", "お"], examples: ["小さい (ちいさい) — klein", "小学校 (しょうがっこう) — Grundschule"], sentences: [
    { jp: "小さい猫がいます。", de: "Es gibt eine kleine Katze." },
    { jp: "妹は小学校に通っています。", de: "Meine jüngere Schwester geht in die Grundschule." }
  ]},
  { id: "k076", char: "高", meaning: ["hoch", "teuer"], on: ["こう"], kun: ["たかい", "たか", "たかまる"], examples: ["高い (たかい) — hoch/teuer", "高校 (こうこう) — Oberschule"], sentences: [
    { jp: "このかばんは高いですね。", de: "Diese Tasche ist teuer, nicht wahr?" },
    { jp: "兄は高校生です。", de: "Mein älterer Bruder ist Oberschüler." }
  ]},
  { id: "k077", char: "安", meaning: ["billig", "sicher", "ruhig"], on: ["あん"], kun: ["やすい", "やすまる"], examples: ["安い (やすい) — billig", "安心 (あんしん) — Beruhigung"], sentences: [
    { jp: "このスーパーは安いです。", de: "Dieser Supermarkt ist günstig." },
    { jp: "家族が元気で安心しました。", de: "Ich bin erleichtert, dass meine Familie gesund ist." }
  ]},
  { id: "k078", char: "新", meaning: ["neu"], on: ["しん"], kun: ["あたらしい", "あら", "にい"], examples: ["新しい (あたらしい) — neu", "新聞 (しんぶん) — Zeitung"], sentences: [
    { jp: "新しい教科書を買いました。", de: "Ich habe ein neues Schulbuch gekauft." },
    { jp: "毎朝新聞を読みます。", de: "Ich lese jeden Morgen die Zeitung." }
  ]},
  { id: "k079", char: "古", meaning: ["alt"], on: ["こ"], kun: ["ふるい", "ふるす"], examples: ["古い (ふるい) — alt", "古典 (こてん) — Klassiker"], sentences: [
    { jp: "この寺はとても古いです。", de: "Dieser Tempel ist sehr alt." },
    { jp: "古い本が好きです。", de: "Ich mag alte Bücher." }
  ]},
  { id: "k080", char: "長", meaning: ["lang", "Chef", "Anführer"], on: ["ちょう"], kun: ["ながい", "おさ"], examples: ["長い (ながい) — lang", "長所 (ちょうしょ) — Stärke"], sentences: [
    { jp: "この映画は長いです。", de: "Dieser Film ist lang." },
    { jp: "自分の長所を教えてください。", de: "Bitte nennen Sie mir Ihre Stärken." }
  ]},

  // Farben
  { id: "k081", char: "白", meaning: ["weiß"], on: ["はく", "びゃく"], kun: ["しろ", "しろい"], examples: ["白い (しろい) — weiß", "白 (しろ) — Weiß"], sentences: [
    { jp: "白いシャツを着ています。", de: "Ich trage ein weißes Hemd." },
    { jp: "雪のように白いです。", de: "Es ist so weiß wie Schnee." }
  ]},
  { id: "k082", char: "赤", meaning: ["rot"], on: ["せき", "しゃく"], kun: ["あか", "あかい"], examples: ["赤い (あかい) — rot", "赤 (あか) — Rot"], sentences: [
    { jp: "赤いリンゴが好きです。", de: "Ich mag rote Äpfel." },
    { jp: "信号が赤です。止まってください。", de: "Die Ampel ist rot. Bitte anhalten." }
  ]},
  { id: "k083", char: "青", meaning: ["blau", "grün (Pflanzen)"], on: ["せい", "しょう"], kun: ["あお", "あおい"], examples: ["青い (あおい) — blau/grün", "青空 (あおぞら) — blauer Himmel"], sentences: [
    { jp: "今日は青い空がきれいです。", de: "Heute ist der blaue Himmel wunderschön." },
    { jp: "青いシャツを買いました。", de: "Ich habe ein blaues Hemd gekauft." }
  ]},
  { id: "k084", char: "黒", meaning: ["schwarz"], on: ["こく"], kun: ["くろ", "くろい"], examples: ["黒い (くろい) — schwarz", "黒板 (こくばん) — Schultafel"], sentences: [
    { jp: "黒い犬がいます。", de: "Es gibt einen schwarzen Hund." },
    { jp: "先生が黒板に字を書きます。", de: "Der Lehrer schreibt Buchstaben an die Tafel." }
  ]},

  // Natur
  { id: "k085", char: "水", meaning: ["Wasser"], on: ["すい"], kun: ["みず"], examples: ["水 (みず) — Wasser", "水曜日 (すいようび) — Mittwoch"], sentences: [
    { jp: "水をください。", de: "Bitte geben Sie mir Wasser." },
    { jp: "水曜日に体育があります。", de: "Mittwochs haben wir Sport." }
  ]},
  { id: "k086", char: "山", meaning: ["Berg"], on: ["さん", "ざん"], kun: ["やま"], examples: ["山 (やま) — Berg", "富士山 (ふじさん) — Fuji"], sentences: [
    { jp: "山に登るのが好きです。", de: "Ich klettere gerne auf Berge." },
    { jp: "富士山はとても高いです。", de: "Der Fuji ist sehr hoch." }
  ]},
  { id: "k087", char: "川", meaning: ["Fluss"], on: ["せん"], kun: ["かわ", "がわ"], examples: ["川 (かわ) — Fluss", "神奈川 (かながわ) — Kanagawa"], sentences: [
    { jp: "川のそばで弁当を食べました。", de: "Ich habe mein Lunchpaket am Flussufer gegessen." },
    { jp: "川で魚を見ました。", de: "Ich habe Fische im Fluss gesehen." }
  ]},
  { id: "k088", char: "雨", meaning: ["Regen"], on: ["う"], kun: ["あめ", "あま"], examples: ["雨 (あめ) — Regen", "雨天 (うてん) — Regenwetter"], sentences: [
    { jp: "今日は雨が降っています。", de: "Heute regnet es." },
    { jp: "雨の日は家にいます。", de: "An Regentagen bleibe ich zu Hause." }
  ]},
  { id: "k089", char: "天", meaning: ["Himmel", "Natur", "himmlisch"], on: ["てん"], kun: ["あま", "あめ"], examples: ["天気 (てんき) — Wetter", "天ぷら (てんぷら) — Tempura"], sentences: [
    { jp: "今日の天気はどうですか。", de: "Wie ist das Wetter heute?" },
    { jp: "天ぷらが大好きです。", de: "Ich liebe Tempura sehr." }
  ]},
  { id: "k090", char: "火", meaning: ["Feuer"], on: ["か"], kun: ["ひ", "ほ"], examples: ["火曜日 (かようび) — Dienstag", "花火 (はなび) — Feuerwerk"], sentences: [
    { jp: "火曜日は日本語の授業があります。", de: "Dienstags habe ich Japanischunterricht." },
    { jp: "夏祭りで花火を見ました。", de: "Beim Sommerfest habe ich das Feuerwerk gesehen." }
  ]},
  { id: "k091", char: "木", meaning: ["Baum", "Holz"], on: ["もく", "ぼく"], kun: ["き", "こ"], examples: ["木曜日 (もくようび) — Donnerstag", "木 (き) — Baum"], sentences: [
    { jp: "公園に大きい木があります。", de: "Im Park gibt es einen großen Baum." },
    { jp: "木曜日に友達と映画を見ます。", de: "Donnerstags schaue ich mit meinem Freund einen Film." }
  ]},

  // Technik & Transport
  { id: "k092", char: "電", meaning: ["Elektrizität", "elektrisch"], on: ["でん"], kun: [], examples: ["電車 (でんしゃ) — Zug/Bahn", "電話 (でんわ) — Telefon"], sentences: [
    { jp: "電車で学校へ行きます。", de: "Ich fahre mit dem Zug zur Schule." },
    { jp: "お母さんに電話しました。", de: "Ich habe meine Mutter angerufen." }
  ]},
  { id: "k093", char: "車", meaning: ["Auto", "Fahrzeug"], on: ["しゃ"], kun: ["くるま"], examples: ["電車 (でんしゃ) — Zug", "車 (くるま) — Auto"], sentences: [
    { jp: "父は車で会社へ行きます。", de: "Mein Vater fährt mit dem Auto zur Arbeit." },
    { jp: "この車は新しいですか。", de: "Ist dieses Auto neu?" }
  ]},

  // Körper & Geist
  { id: "k094", char: "気", meaning: ["Geist", "Energie", "Gefühl"], on: ["き", "け"], kun: [], examples: ["天気 (てんき) — Wetter", "元気 (げんき) — gesund/munter"], sentences: [
    { jp: "今日は元気ですか。", de: "Wie geht es Ihnen heute?" },
    { jp: "明日の天気が気になります。", de: "Ich mache mir Gedanken über das Wetter morgen." }
  ]},
  { id: "k095", char: "名", meaning: ["Name", "Ruf"], on: ["めい", "みょう"], kun: ["な"], examples: ["名前 (なまえ) — Name", "有名 (ゆうめい) — berühmt"], sentences: [
    { jp: "お名前を教えていただけますか。", de: "Darf ich Ihren Namen erfahren?" },
    { jp: "富士山は有名な山です。", de: "Der Fuji ist ein berühmter Berg." }
  ]},
  { id: "k096", char: "手", meaning: ["Hand"], on: ["しゅ", "ず"], kun: ["て", "た"], examples: ["手 (て) — Hand", "上手 (じょうず) — geschickt"], sentences: [
    { jp: "手を洗ってから食べます。", de: "Ich wasche die Hände, bevor ich esse." },
    { jp: "妹は絵が上手です。", de: "Meine jüngere Schwester ist gut im Zeichnen." }
  ]},
  { id: "k097", char: "足", meaning: ["Fuß", "Bein", "genug"], on: ["そく"], kun: ["あし", "たりる", "たす"], examples: ["足 (あし) — Fuß/Bein", "足りる (たりる) — genug sein"], sentences: [
    { jp: "足が痛いです。", de: "Mein Fuß tut weh." },
    { jp: "お金が足りません。", de: "Ich habe nicht genug Geld." }
  ]},
  { id: "k098", char: "耳", meaning: ["Ohr"], on: ["じ"], kun: ["みみ"], examples: ["耳 (みみ) — Ohr", "耳鼻科 (じびか) — HNO-Arzt"], sentences: [
    { jp: "耳が痛いので病院へ行きます。", de: "Mein Ohr tut weh, also gehe ich ins Krankenhaus." },
    { jp: "音楽を耳で楽しみます。", de: "Ich genieße Musik mit den Ohren." }
  ]},
  { id: "k099", char: "目", meaning: ["Auge"], on: ["もく", "ぼく"], kun: ["め", "ま"], examples: ["目 (め) — Auge", "目的 (もくてき) — Ziel/Zweck"], sentences: [
    { jp: "目が疲れました。", de: "Meine Augen sind müde." },
    { jp: "日本語の勉強が目的です。", de: "Das Ziel ist es, Japanisch zu lernen." }
  ]},
  { id: "k100", char: "口", meaning: ["Mund", "Eingang", "Öffnung"], on: ["こう", "く"], kun: ["くち"], examples: ["口 (くち) — Mund", "出口 (でぐち) — Ausgang"], sentences: [
    { jp: "口を大きく開けてください。", de: "Bitte öffnen Sie den Mund weit." },
    { jp: "出口は右側にあります。", de: "Der Ausgang befindet sich auf der rechten Seite." }
  ]},
];
