const VOCAB = [
  // Begrüßungen & Ausdrücke
  { id: "v001", word: "おはようございます", reading: "おはようございます", meaning: "Guten Morgen (höflich)", pos: "Ausdruck", examples: [
    { jp: "先生におはようございますと言いました。", de: "Ich habe dem Lehrer guten Morgen gesagt." },
    { jp: "毎朝、おはようございますと言います。", de: "Jeden Morgen sage ich guten Morgen." }
  ]},
  { id: "v002", word: "こんにちは", reading: "こんにちは", meaning: "Guten Tag / Hallo", pos: "Ausdruck", examples: [
    { jp: "友達にこんにちはと言いました。", de: "Ich habe meiner Freundin hallo gesagt." },
    { jp: "店員さんにこんにちはと言います。", de: "Ich sage dem Verkäufer guten Tag." }
  ]},
  { id: "v003", word: "こんばんは", reading: "こんばんは", meaning: "Guten Abend", pos: "Ausdruck", examples: [
    { jp: "隣の人にこんばんはと言いました。", de: "Ich habe dem Nachbarn guten Abend gesagt." },
    { jp: "こんばんは、元気ですか。", de: "Guten Abend, wie geht es Ihnen?" }
  ]},
  { id: "v004", word: "おやすみなさい", reading: "おやすみなさい", meaning: "Gute Nacht", pos: "Ausdruck", examples: [
    { jp: "寝る前におやすみなさいと言います。", de: "Vor dem Schlafen sage ich gute Nacht." },
    { jp: "子供におやすみなさいと言いました。", de: "Ich habe dem Kind gute Nacht gesagt." }
  ]},
  { id: "v005", word: "さようなら", reading: "さようなら", meaning: "Auf Wiedersehen", pos: "Ausdruck", examples: [
    { jp: "学校でさようならと言いました。", de: "In der Schule habe ich auf Wiedersehen gesagt." },
    { jp: "友達にさようならと言って帰りました。", de: "Ich habe meinem Freund auf Wiedersehen gesagt und bin nach Hause gegangen." }
  ]},
  { id: "v006", word: "ありがとうございます", reading: "ありがとうございます", meaning: "Vielen Dank (höflich)", pos: "Ausdruck", examples: [
    { jp: "プレゼントをもらって、ありがとうございますと言いました。", de: "Ich habe ein Geschenk bekommen und vielen Dank gesagt." },
    { jp: "手伝ってくれて、ありがとうございます。", de: "Vielen Dank, dass Sie mir geholfen haben." }
  ]},
  { id: "v007", word: "すみません", reading: "すみません", meaning: "Entschuldigung / Excuse me", pos: "Ausdruck", examples: [
    { jp: "すみません、駅はどこですか。", de: "Entschuldigung, wo ist der Bahnhof?" },
    { jp: "すみません、少し待ってください。", de: "Entschuldigung, warten Sie bitte kurz." }
  ]},
  { id: "v008", word: "ごめんなさい", reading: "ごめんなさい", meaning: "Es tut mir leid", pos: "Ausdruck", examples: [
    { jp: "遅れてごめんなさい。", de: "Es tut mir leid, dass ich zu spät bin." },
    { jp: "ごめんなさい、忘れました。", de: "Es tut mir leid, ich habe es vergessen." }
  ]},
  { id: "v009", word: "はい", reading: "はい", meaning: "Ja", pos: "Ausdruck", examples: [
    { jp: "「田中さんですか。」「はい、そうです。」", de: "\"Sind Sie Herr Tanaka?\" \"Ja, das bin ich.\"" },
    { jp: "はい、わかりました。", de: "Ja, ich habe es verstanden." }
  ]},
  { id: "v010", word: "いいえ", reading: "いいえ", meaning: "Nein", pos: "Ausdruck", examples: [
    { jp: "「日本人ですか。」「いいえ、ドイツ人です。」", de: "\"Sind Sie Japaner?\" \"Nein, ich bin Deutscher.\"" },
    { jp: "いいえ、まだです。", de: "Nein, noch nicht." }
  ]},
  { id: "v011", word: "どうぞ", reading: "どうぞ", meaning: "Bitte (beim Geben/Anbieten)", pos: "Ausdruck", examples: [
    { jp: "どうぞ、座ってください。", de: "Bitte, setzen Sie sich." },
    { jp: "これをどうぞ。", de: "Hier, bitte sehr." }
  ]},
  { id: "v012", word: "いただきます", reading: "いただきます", meaning: "Guten Appetit (vor dem Essen)", pos: "Ausdruck", examples: [
    { jp: "ご飯の前にいただきますと言います。", de: "Vor dem Essen sagt man \"Guten Appetit\"." },
    { jp: "家族と一緒にいただきますと言いました。", de: "Ich habe zusammen mit der Familie \"Itadakimasu\" gesagt." }
  ]},
  { id: "v013", word: "ごちそうさまでした", reading: "ごちそうさまでした", meaning: "Danke fürs Essen (nach dem Essen)", pos: "Ausdruck", examples: [
    { jp: "食べた後でごちそうさまでしたと言います。", de: "Nach dem Essen sagt man \"Gochisosama deshita\"." },
    { jp: "おいしかったです。ごちそうさまでした。", de: "Es war lecker. Danke für das Essen." }
  ]},
  { id: "v014", word: "おねがいします", reading: "おねがいします", meaning: "Bitte (Bitte um etwas)", pos: "Ausdruck", examples: [
    { jp: "コーヒーをおねがいします。", de: "Einen Kaffee bitte." },
    { jp: "もう一度おねがいします。", de: "Noch einmal bitte." }
  ]},
  { id: "v015", word: "どういたしまして", reading: "どういたしまして", meaning: "Bitte sehr / Gern geschehen", pos: "Ausdruck", examples: [
    { jp: "「ありがとうございます。」「どういたしまして。」", de: "\"Vielen Dank.\" \"Gern geschehen.\"" },
    { jp: "どういたしまして、また来てください。", de: "Gern geschehen, kommen Sie gerne wieder." }
  ]},
  { id: "v016", word: "はじめまして", reading: "はじめまして", meaning: "Angenehm / Freut mich", pos: "Ausdruck", examples: [
    { jp: "はじめまして、田中と申します。", de: "Angenehm, mein Name ist Tanaka." },
    { jp: "はじめまして、どうぞよろしく。", de: "Freut mich, Sie kennenzulernen." }
  ]},
  { id: "v017", word: "よろしくおねがいします", reading: "よろしくおねがいします", meaning: "Ich freue mich auf die Zusammenarbeit", pos: "Ausdruck", examples: [
    { jp: "はじめまして、よろしくおねがいします。", de: "Angenehm, ich freue mich auf die Zusammenarbeit." },
    { jp: "これからよろしくおねがいします。", de: "Ich freue mich auf gute Zusammenarbeit von nun an." }
  ]},

  // Zeit - Tage
  { id: "v018", word: "今日", reading: "きょう", meaning: "heute", pos: "Nomen", examples: [
    { jp: "今日は天気がいいです。", de: "Heute ist das Wetter schön." },
    { jp: "今日、学校に行きます。", de: "Heute gehe ich zur Schule." }
  ]},
  { id: "v019", word: "明日", reading: "あした", meaning: "morgen", pos: "Nomen", examples: [
    { jp: "明日、友達に会います。", de: "Morgen treffe ich einen Freund." },
    { jp: "明日は休みです。", de: "Morgen ist frei." }
  ]},
  { id: "v020", word: "昨日", reading: "きのう", meaning: "gestern", pos: "Nomen", examples: [
    { jp: "昨日、映画を見ました。", de: "Gestern habe ich einen Film gesehen." },
    { jp: "昨日は雨でした。", de: "Gestern hat es geregnet." }
  ]},
  { id: "v021", word: "今週", reading: "こんしゅう", meaning: "diese Woche", pos: "Nomen", examples: [
    { jp: "今週は忙しいです。", de: "Diese Woche bin ich beschäftigt." },
    { jp: "今週、試験があります。", de: "Diese Woche gibt es eine Prüfung." }
  ]},
  { id: "v022", word: "来週", reading: "らいしゅう", meaning: "nächste Woche", pos: "Nomen", examples: [
    { jp: "来週、旅行します。", de: "Nächste Woche reise ich." },
    { jp: "来週また来ます。", de: "Nächste Woche komme ich wieder." }
  ]},
  { id: "v023", word: "先週", reading: "せんしゅう", meaning: "letzte Woche", pos: "Nomen", examples: [
    { jp: "先週、本を買いました。", de: "Letzte Woche habe ich ein Buch gekauft." },
    { jp: "先週は寒かったです。", de: "Letzte Woche war es kalt." }
  ]},
  { id: "v024", word: "今月", reading: "こんげつ", meaning: "diesen Monat", pos: "Nomen", examples: [
    { jp: "今月、新しい仕事を始めます。", de: "Diesen Monat fange ich eine neue Arbeit an." },
    { jp: "今月は忙しいです。", de: "Diesen Monat bin ich beschäftigt." }
  ]},
  { id: "v025", word: "来月", reading: "らいげつ", meaning: "nächsten Monat", pos: "Nomen", examples: [
    { jp: "来月、日本に行きます。", de: "Nächsten Monat fahre ich nach Japan." },
    { jp: "来月また会いましょう。", de: "Treffen wir uns nächsten Monat wieder." }
  ]},
  { id: "v026", word: "先月", reading: "せんげつ", meaning: "letzten Monat", pos: "Nomen", examples: [
    { jp: "先月、新しい車を買いました。", de: "Letzten Monat habe ich ein neues Auto gekauft." },
    { jp: "先月は雨が多かったです。", de: "Letzten Monat hat es viel geregnet." }
  ]},
  { id: "v027", word: "今年", reading: "ことし", meaning: "dieses Jahr", pos: "Nomen", examples: [
    { jp: "今年、大学を卒業します。", de: "Dieses Jahr schließe ich die Universität ab." },
    { jp: "今年の夏は暑いです。", de: "Der Sommer dieses Jahres ist heiß." }
  ]},
  { id: "v028", word: "来年", reading: "らいねん", meaning: "nächstes Jahr", pos: "Nomen", examples: [
    { jp: "来年、結婚します。", de: "Nächstes Jahr heirate ich." },
    { jp: "来年また会いましょう。", de: "Treffen wir uns nächstes Jahr wieder." }
  ]},
  { id: "v029", word: "去年", reading: "きょねん", meaning: "letztes Jahr", pos: "Nomen", examples: [
    { jp: "去年、日本語を勉強し始めました。", de: "Letztes Jahr habe ich angefangen, Japanisch zu lernen." },
    { jp: "去年の冬は寒かったです。", de: "Der Winter letztes Jahr war kalt." }
  ]},
  { id: "v030", word: "朝", reading: "あさ", meaning: "Morgen / Vormittag", pos: "Nomen", examples: [
    { jp: "朝、コーヒーを飲みます。", de: "Morgens trinke ich Kaffee." },
    { jp: "朝は早く起きます。", de: "Morgens stehe ich früh auf." }
  ]},
  { id: "v031", word: "昼", reading: "ひる", meaning: "Mittag / Mittagszeit", pos: "Nomen", examples: [
    { jp: "昼はラーメンを食べました。", de: "Zum Mittagessen habe ich Ramen gegessen." },
    { jp: "昼に友達と会います。", de: "Mittags treffe ich einen Freund." }
  ]},
  { id: "v032", word: "夜", reading: "よる", meaning: "Abend / Nacht", pos: "Nomen", examples: [
    { jp: "夜、テレビを見ます。", de: "Abends schaue ich Fernsehen." },
    { jp: "夜は早く寝ます。", de: "Abends gehe ich früh schlafen." }
  ]},
  { id: "v033", word: "午前", reading: "ごぜん", meaning: "Vormittag (AM)", pos: "Nomen", examples: [
    { jp: "午前中に買い物をします。", de: "Am Vormittag gehe ich einkaufen." },
    { jp: "午前九時に会議があります。", de: "Um 9 Uhr morgens gibt es eine Besprechung." }
  ]},
  { id: "v034", word: "午後", reading: "ごご", meaning: "Nachmittag (PM)", pos: "Nomen", examples: [
    { jp: "午後、図書館で勉強します。", de: "Nachmittags lerne ich in der Bibliothek." },
    { jp: "午後三時に来てください。", de: "Kommen Sie bitte um 15 Uhr." }
  ]},
  { id: "v035", word: "毎日", reading: "まいにち", meaning: "jeden Tag", pos: "Nomen/Adverb", examples: [
    { jp: "毎日日本語を勉強します。", de: "Jeden Tag lerne ich Japanisch." },
    { jp: "毎日電車で会社に行きます。", de: "Jeden Tag fahre ich mit dem Zug zur Arbeit." }
  ]},
  { id: "v036", word: "毎週", reading: "まいしゅう", meaning: "jede Woche", pos: "Nomen/Adverb", examples: [
    { jp: "毎週日曜日に公園に行きます。", de: "Jeden Sonntag gehe ich in den Park." },
    { jp: "毎週スーパーで買い物をします。", de: "Jede Woche kaufe ich im Supermarkt ein." }
  ]},
  { id: "v037", word: "毎朝", reading: "まいあさ", meaning: "jeden Morgen", pos: "Nomen/Adverb", examples: [
    { jp: "毎朝ご飯を食べます。", de: "Jeden Morgen esse ich Frühstück." },
    { jp: "毎朝七時に起きます。", de: "Jeden Morgen stehe ich um 7 Uhr auf." }
  ]},
  { id: "v038", word: "今", reading: "いま", meaning: "jetzt / gerade", pos: "Nomen/Adverb", examples: [
    { jp: "今、何時ですか。", de: "Wie viel Uhr ist es jetzt?" },
    { jp: "今、勉強しています。", de: "Ich lerne gerade." }
  ]},

  // Wochentage
  { id: "v039", word: "月曜日", reading: "げつようび", meaning: "Montag", pos: "Nomen", examples: [
    { jp: "月曜日は学校があります。", de: "Am Montag habe ich Schule." },
    { jp: "月曜日に会議があります。", de: "Am Montag gibt es eine Besprechung." }
  ]},
  { id: "v040", word: "火曜日", reading: "かようび", meaning: "Dienstag", pos: "Nomen", examples: [
    { jp: "火曜日に日本語のクラスがあります。", de: "Dienstags habe ich Japanischunterricht." },
    { jp: "火曜日は忙しいです。", de: "Dienstags bin ich beschäftigt." }
  ]},
  { id: "v041", word: "水曜日", reading: "すいようび", meaning: "Mittwoch", pos: "Nomen", examples: [
    { jp: "水曜日は早く帰ります。", de: "Mittwochs gehe ich früh nach Hause." },
    { jp: "水曜日に図書館に行きます。", de: "Mittwochs gehe ich in die Bibliothek." }
  ]},
  { id: "v042", word: "木曜日", reading: "もくようび", meaning: "Donnerstag", pos: "Nomen", examples: [
    { jp: "木曜日に友達と映画を見ます。", de: "Donnerstags schaue ich mit Freunden einen Film." },
    { jp: "木曜日は授業が多いです。", de: "Donnerstags habe ich viele Stunden." }
  ]},
  { id: "v043", word: "金曜日", reading: "きんようび", meaning: "Freitag", pos: "Nomen", examples: [
    { jp: "金曜日の夜は楽しいです。", de: "Der Freitagabend ist schön." },
    { jp: "金曜日に仕事が終わります。", de: "Freitags ist die Arbeit zu Ende." }
  ]},
  { id: "v044", word: "土曜日", reading: "どようび", meaning: "Samstag", pos: "Nomen", examples: [
    { jp: "土曜日に買い物をします。", de: "Samstags gehe ich einkaufen." },
    { jp: "土曜日は休みです。", de: "Samstags habe ich frei." }
  ]},
  { id: "v045", word: "日曜日", reading: "にちようび", meaning: "Sonntag", pos: "Nomen", examples: [
    { jp: "日曜日に家族と公園に行きます。", de: "Sonntags gehe ich mit der Familie in den Park." },
    { jp: "日曜日はゆっくり休みます。", de: "Sonntags erhole ich mich in Ruhe." }
  ]},

  // Familie
  { id: "v046", word: "お父さん", reading: "おとうさん", meaning: "Vater (höflich / jemand anderes)", pos: "Nomen", examples: [
    { jp: "お父さんは会社員です。", de: "Mein Vater ist Büroangestellter." },
    { jp: "田中さんのお父さんは背が高いです。", de: "Herr Tanakas Vater ist groß." }
  ]},
  { id: "v047", word: "お母さん", reading: "おかあさん", meaning: "Mutter (höflich / jemand anderes)", pos: "Nomen", examples: [
    { jp: "お母さんは料理が上手です。", de: "Meine Mutter kocht sehr gut." },
    { jp: "お母さんと一緒に買い物をします。", de: "Ich gehe mit meiner Mutter einkaufen." }
  ]},
  { id: "v048", word: "お兄さん", reading: "おにいさん", meaning: "älterer Bruder (höflich / jemand anderes)", pos: "Nomen", examples: [
    { jp: "お兄さんは大学生です。", de: "Mein älterer Bruder ist Student." },
    { jp: "お兄さんに自転車を借りました。", de: "Ich habe mir vom älteren Bruder ein Fahrrad geliehen." }
  ]},
  { id: "v049", word: "お姉さん", reading: "おねえさん", meaning: "ältere Schwester (höflich / jemand anderes)", pos: "Nomen", examples: [
    { jp: "お姉さんは先生です。", de: "Meine ältere Schwester ist Lehrerin." },
    { jp: "お姉さんと映画を見ました。", de: "Ich habe mit meiner älteren Schwester einen Film gesehen." }
  ]},
  { id: "v050", word: "弟", reading: "おとうと", meaning: "jüngerer Bruder (eigener)", pos: "Nomen", examples: [
    { jp: "弟は小学生です。", de: "Mein jüngerer Bruder geht in die Grundschule." },
    { jp: "弟と一緒に遊びます。", de: "Ich spiele zusammen mit meinem jüngeren Bruder." }
  ]},
  { id: "v051", word: "妹", reading: "いもうと", meaning: "jüngere Schwester (eigene)", pos: "Nomen", examples: [
    { jp: "妹はかわいいです。", de: "Meine jüngere Schwester ist süß." },
    { jp: "妹に本を読んであげます。", de: "Ich lese meiner jüngeren Schwester ein Buch vor." }
  ]},
  { id: "v052", word: "子供", reading: "こども", meaning: "Kind / Kinder", pos: "Nomen", examples: [
    { jp: "子供は公園で遊んでいます。", de: "Die Kinder spielen im Park." },
    { jp: "子供の頃、よく泳ぎました。", de: "Als Kind bin ich oft geschwommen." }
  ]},
  { id: "v053", word: "家族", reading: "かぞく", meaning: "Familie", pos: "Nomen", examples: [
    { jp: "家族と一緒にご飯を食べます。", de: "Ich esse zusammen mit meiner Familie." },
    { jp: "私の家族は四人です。", de: "Meine Familie besteht aus vier Personen." }
  ]},
  { id: "v054", word: "友達", reading: "ともだち", meaning: "Freund / Freundin", pos: "Nomen", examples: [
    { jp: "友達と映画を見ました。", de: "Ich habe mit einem Freund einen Film gesehen." },
    { jp: "友達にメールを送りました。", de: "Ich habe meiner Freundin eine E-Mail geschickt." }
  ]},
  { id: "v055", word: "夫", reading: "おっと", meaning: "Ehemann (eigener)", pos: "Nomen", examples: [
    { jp: "夫は毎朝早く起きます。", de: "Mein Mann steht jeden Morgen früh auf." },
    { jp: "夫と一緒に買い物に行きます。", de: "Ich gehe zusammen mit meinem Mann einkaufen." }
  ]},
  { id: "v056", word: "妻", reading: "つま", meaning: "Ehefrau (eigene)", pos: "Nomen", examples: [
    { jp: "妻は料理が好きです。", de: "Meine Frau kocht gerne." },
    { jp: "妻に花を買いました。", de: "Ich habe meiner Frau Blumen gekauft." }
  ]},

  // Essen & Trinken
  { id: "v057", word: "ご飯", reading: "ごはん", meaning: "Reis / Mahlzeit / Essen", pos: "Nomen", examples: [
    { jp: "毎朝ご飯を食べます。", de: "Jeden Morgen esse ich Reis." },
    { jp: "ご飯はもう食べましたか。", de: "Haben Sie schon gegessen?" }
  ]},
  { id: "v058", word: "パン", reading: "パン", meaning: "Brot", pos: "Nomen", examples: [
    { jp: "朝はパンを食べます。", de: "Morgens esse ich Brot." },
    { jp: "スーパーでパンを買いました。", de: "Ich habe im Supermarkt Brot gekauft." }
  ]},
  { id: "v059", word: "肉", reading: "にく", meaning: "Fleisch", pos: "Nomen", examples: [
    { jp: "肉が好きですか。", de: "Mögen Sie Fleisch?" },
    { jp: "スーパーで肉を買いました。", de: "Ich habe im Supermarkt Fleisch gekauft." }
  ]},
  { id: "v060", word: "魚", reading: "さかな", meaning: "Fisch", pos: "Nomen", examples: [
    { jp: "魚を食べるのが好きです。", de: "Ich esse gerne Fisch." },
    { jp: "日本人はよく魚を食べます。", de: "Japaner essen oft Fisch." }
  ]},
  { id: "v061", word: "野菜", reading: "やさい", meaning: "Gemüse", pos: "Nomen", examples: [
    { jp: "毎日野菜を食べます。", de: "Jeden Tag esse ich Gemüse." },
    { jp: "野菜は体にいいです。", de: "Gemüse ist gut für den Körper." }
  ]},
  { id: "v062", word: "果物", reading: "くだもの", meaning: "Obst", pos: "Nomen", examples: [
    { jp: "果物が好きですか。", de: "Mögen Sie Obst?" },
    { jp: "毎日果物を食べます。", de: "Jeden Tag esse ich Obst." }
  ]},
  { id: "v063", word: "水", reading: "みず", meaning: "Wasser", pos: "Nomen", examples: [
    { jp: "水を一杯ください。", de: "Ein Glas Wasser bitte." },
    { jp: "毎日水をたくさん飲みます。", de: "Jeden Tag trinke ich viel Wasser." }
  ]},
  { id: "v064", word: "お茶", reading: "おちゃ", meaning: "Tee (japanischer)", pos: "Nomen", examples: [
    { jp: "お茶を一杯いただきます。", de: "Ich nehme eine Tasse Tee." },
    { jp: "日本ではよくお茶を飲みます。", de: "In Japan trinkt man oft Tee." }
  ]},
  { id: "v065", word: "コーヒー", reading: "コーヒー", meaning: "Kaffee", pos: "Nomen", examples: [
    { jp: "朝にコーヒーを飲みます。", de: "Morgens trinke ich Kaffee." },
    { jp: "コーヒーと紅茶、どちらがいいですか。", de: "Möchten Sie Kaffee oder Tee?" }
  ]},
  { id: "v066", word: "ジュース", reading: "ジュース", meaning: "Saft / Fruchtsaft", pos: "Nomen", examples: [
    { jp: "りんごのジュースを飲みました。", de: "Ich habe Apfelsaft getrunken." },
    { jp: "子供はジュースが好きです。", de: "Kinder mögen Saft." }
  ]},
  { id: "v067", word: "お酒", reading: "おさけ", meaning: "Alkohol / Sake", pos: "Nomen", examples: [
    { jp: "お酒はあまり飲みません。", de: "Ich trinke nicht viel Alkohol." },
    { jp: "友達とお酒を飲みました。", de: "Ich habe mit Freunden Alkohol getrunken." }
  ]},
  { id: "v068", word: "牛乳", reading: "ぎゅうにゅう", meaning: "Milch", pos: "Nomen", examples: [
    { jp: "毎朝牛乳を飲みます。", de: "Jeden Morgen trinke ich Milch." },
    { jp: "牛乳はスーパーで買います。", de: "Milch kaufe ich im Supermarkt." }
  ]},
  { id: "v069", word: "卵", reading: "たまご", meaning: "Ei", pos: "Nomen", examples: [
    { jp: "朝ごはんに卵を食べます。", de: "Zum Frühstück esse ich ein Ei." },
    { jp: "卵を三つ買ってください。", de: "Kaufen Sie bitte drei Eier." }
  ]},
  { id: "v070", word: "りんご", reading: "りんご", meaning: "Apfel", pos: "Nomen", examples: [
    { jp: "りんごが好きです。", de: "Ich mag Äpfel." },
    { jp: "りんごを一つ食べました。", de: "Ich habe einen Apfel gegessen." }
  ]},
  { id: "v071", word: "バナナ", reading: "バナナ", meaning: "Banane", pos: "Nomen", examples: [
    { jp: "バナナを毎日食べます。", de: "Jeden Tag esse ich eine Banane." },
    { jp: "バナナは甘くておいしいです。", de: "Bananen sind süß und lecker." }
  ]},
  { id: "v072", word: "みかん", reading: "みかん", meaning: "Mandarine / Clementine", pos: "Nomen", examples: [
    { jp: "冬にみかんをよく食べます。", de: "Im Winter esse ich oft Mandarinen." },
    { jp: "みかんを三つ買いました。", de: "Ich habe drei Mandarinen gekauft." }
  ]},
  { id: "v073", word: "寿司", reading: "すし", meaning: "Sushi", pos: "Nomen", examples: [
    { jp: "寿司が大好きです。", de: "Ich liebe Sushi." },
    { jp: "友達と寿司を食べに行きました。", de: "Ich bin mit Freunden Sushi essen gegangen." }
  ]},
  { id: "v074", word: "ラーメン", reading: "ラーメン", meaning: "Ramen (Nudelsuppe)", pos: "Nomen", examples: [
    { jp: "昼にラーメンを食べました。", de: "Zum Mittagessen habe ich Ramen gegessen." },
    { jp: "このラーメンはとてもおいしいです。", de: "Diese Ramen sind sehr lecker." }
  ]},
  { id: "v075", word: "天ぷら", reading: "てんぷら", meaning: "Tempura", pos: "Nomen", examples: [
    { jp: "天ぷらは好きですか。", de: "Mögen Sie Tempura?" },
    { jp: "野菜の天ぷらを食べました。", de: "Ich habe Gemüsetempura gegessen." }
  ]},
  { id: "v076", word: "味噌汁", reading: "みそしる", meaning: "Misosuppe", pos: "Nomen", examples: [
    { jp: "朝ごはんに味噌汁を飲みます。", de: "Zum Frühstück trinke ich Misosuppe." },
    { jp: "味噌汁はおいしいです。", de: "Misosuppe ist lecker." }
  ]},

  // Orte & Gebäude
  { id: "v077", word: "学校", reading: "がっこう", meaning: "Schule", pos: "Nomen", examples: [
    { jp: "毎日学校に行きます。", de: "Jeden Tag gehe ich zur Schule." },
    { jp: "学校は九時に始まります。", de: "Die Schule beginnt um 9 Uhr." }
  ]},
  { id: "v078", word: "大学", reading: "だいがく", meaning: "Universität", pos: "Nomen", examples: [
    { jp: "大学で日本語を勉強しています。", de: "Ich studiere Japanisch an der Universität." },
    { jp: "兄は大学生です。", de: "Mein älterer Bruder ist Student." }
  ]},
  { id: "v079", word: "会社", reading: "かいしゃ", meaning: "Firma / Büro / Unternehmen", pos: "Nomen", examples: [
    { jp: "毎日会社に電車で行きます。", de: "Jeden Tag fahre ich mit dem Zug zur Firma." },
    { jp: "会社は八時に始まります。", de: "Die Arbeit beginnt um 8 Uhr." }
  ]},
  { id: "v080", word: "病院", reading: "びょういん", meaning: "Krankenhaus", pos: "Nomen", examples: [
    { jp: "病院に行きました。", de: "Ich bin ins Krankenhaus gegangen." },
    { jp: "病院はどこですか。", de: "Wo ist das Krankenhaus?" }
  ]},
  { id: "v081", word: "銀行", reading: "ぎんこう", meaning: "Bank", pos: "Nomen", examples: [
    { jp: "銀行でお金を下ろします。", de: "Ich hebe bei der Bank Geld ab." },
    { jp: "銀行は何時まで開いていますか。", de: "Bis wie viel Uhr hat die Bank geöffnet?" }
  ]},
  { id: "v082", word: "郵便局", reading: "ゆうびんきょく", meaning: "Post(amt)", pos: "Nomen", examples: [
    { jp: "郵便局で手紙を送りました。", de: "Ich habe auf dem Postamt einen Brief geschickt." },
    { jp: "郵便局はどこですか。", de: "Wo ist das Postamt?" }
  ]},
  { id: "v083", word: "駅", reading: "えき", meaning: "Bahnhof", pos: "Nomen", examples: [
    { jp: "駅まで歩きます。", de: "Ich gehe zum Bahnhof zu Fuß." },
    { jp: "駅の前で待っています。", de: "Ich warte vor dem Bahnhof." }
  ]},
  { id: "v084", word: "スーパー", reading: "スーパー", meaning: "Supermarkt", pos: "Nomen", examples: [
    { jp: "スーパーで野菜を買います。", de: "Ich kaufe Gemüse im Supermarkt." },
    { jp: "近くにスーパーがあります。", de: "In der Nähe gibt es einen Supermarkt." }
  ]},
  { id: "v085", word: "レストラン", reading: "レストラン", meaning: "Restaurant", pos: "Nomen", examples: [
    { jp: "友達とレストランで食べました。", de: "Ich habe mit Freunden im Restaurant gegessen." },
    { jp: "このレストランはおいしいです。", de: "Dieses Restaurant ist lecker." }
  ]},
  { id: "v086", word: "ホテル", reading: "ホテル", meaning: "Hotel", pos: "Nomen", examples: [
    { jp: "ホテルに泊まりました。", de: "Ich habe im Hotel übernachtet." },
    { jp: "このホテルはきれいです。", de: "Dieses Hotel ist schön." }
  ]},
  { id: "v087", word: "家", reading: "いえ / うち", meaning: "Haus / Zuhause", pos: "Nomen", examples: [
    { jp: "家に帰ります。", de: "Ich gehe nach Hause." },
    { jp: "私の家は駅の近くです。", de: "Mein Haus ist in der Nähe des Bahnhofs." }
  ]},
  { id: "v088", word: "部屋", reading: "へや", meaning: "Zimmer / Raum", pos: "Nomen", examples: [
    { jp: "私の部屋は小さいです。", de: "Mein Zimmer ist klein." },
    { jp: "部屋をきれいにします。", de: "Ich mache das Zimmer sauber." }
  ]},
  { id: "v089", word: "トイレ", reading: "トイレ", meaning: "Toilette / WC", pos: "Nomen", examples: [
    { jp: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    { jp: "トイレに行ってもいいですか。", de: "Darf ich auf die Toilette gehen?" }
  ]},
  { id: "v090", word: "図書館", reading: "としょかん", meaning: "Bibliothek", pos: "Nomen", examples: [
    { jp: "図書館で本を読みます。", de: "In der Bibliothek lese ich Bücher." },
    { jp: "図書館は静かです。", de: "Die Bibliothek ist ruhig." }
  ]},
  { id: "v091", word: "公園", reading: "こうえん", meaning: "Park", pos: "Nomen", examples: [
    { jp: "公園で散歩します。", de: "Im Park mache ich einen Spaziergang." },
    { jp: "子供たちは公園で遊んでいます。", de: "Die Kinder spielen im Park." }
  ]},

  // Transport
  { id: "v092", word: "電車", reading: "でんしゃ", meaning: "Zug / S-Bahn / Stadtbahn", pos: "Nomen", examples: [
    { jp: "電車で学校に行きます。", de: "Ich fahre mit dem Zug zur Schule." },
    { jp: "電車は便利です。", de: "Der Zug ist praktisch." }
  ]},
  { id: "v093", word: "バス", reading: "バス", meaning: "Bus", pos: "Nomen", examples: [
    { jp: "バスで駅まで行きます。", de: "Ich fahre mit dem Bus zum Bahnhof." },
    { jp: "バスは何時に来ますか。", de: "Wann kommt der Bus?" }
  ]},
  { id: "v094", word: "タクシー", reading: "タクシー", meaning: "Taxi", pos: "Nomen", examples: [
    { jp: "タクシーでホテルに行きました。", de: "Ich bin mit dem Taxi zum Hotel gefahren." },
    { jp: "タクシーを呼んでください。", de: "Rufen Sie bitte ein Taxi." }
  ]},
  { id: "v095", word: "地下鉄", reading: "ちかてつ", meaning: "U-Bahn", pos: "Nomen", examples: [
    { jp: "地下鉄で会社に行きます。", de: "Ich fahre mit der U-Bahn zur Arbeit." },
    { jp: "地下鉄は速いです。", de: "Die U-Bahn ist schnell." }
  ]},
  { id: "v096", word: "車", reading: "くるま", meaning: "Auto / Fahrzeug", pos: "Nomen", examples: [
    { jp: "車で買い物に行きます。", de: "Ich fahre mit dem Auto einkaufen." },
    { jp: "新しい車を買いました。", de: "Ich habe ein neues Auto gekauft." }
  ]},
  { id: "v097", word: "自転車", reading: "じてんしゃ", meaning: "Fahrrad", pos: "Nomen", examples: [
    { jp: "自転車で学校に行きます。", de: "Ich fahre mit dem Fahrrad zur Schule." },
    { jp: "自転車は健康にいいです。", de: "Fahrradfahren ist gut für die Gesundheit." }
  ]},
  { id: "v098", word: "飛行機", reading: "ひこうき", meaning: "Flugzeug", pos: "Nomen", examples: [
    { jp: "飛行機で日本に行きます。", de: "Ich fliege mit dem Flugzeug nach Japan." },
    { jp: "飛行機は速いですが、高いです。", de: "Das Flugzeug ist schnell, aber teuer." }
  ]},
  { id: "v099", word: "船", reading: "ふね", meaning: "Schiff / Boot", pos: "Nomen", examples: [
    { jp: "船で島に行きました。", de: "Ich bin mit dem Schiff zur Insel gefahren." },
    { jp: "船に乗るのは楽しいです。", de: "Mit dem Schiff zu fahren macht Spaß." }
  ]},

  // Gegenstände & Alltag
  { id: "v100", word: "本", reading: "ほん", meaning: "Buch", pos: "Nomen", examples: [
    { jp: "図書館で本を借りました。", de: "Ich habe in der Bibliothek ein Buch ausgeliehen." },
    { jp: "毎日本を読みます。", de: "Jeden Tag lese ich ein Buch." }
  ]},
  { id: "v101", word: "新聞", reading: "しんぶん", meaning: "Zeitung", pos: "Nomen", examples: [
    { jp: "毎朝新聞を読みます。", de: "Jeden Morgen lese ich die Zeitung." },
    { jp: "父は新聞が好きです。", de: "Mein Vater liest gerne Zeitung." }
  ]},
  { id: "v102", word: "雑誌", reading: "ざっし", meaning: "Zeitschrift / Magazin", pos: "Nomen", examples: [
    { jp: "雑誌を読んでいます。", de: "Ich lese eine Zeitschrift." },
    { jp: "電車の中で雑誌を読みます。", de: "Im Zug lese ich Zeitschriften." }
  ]},
  { id: "v103", word: "手紙", reading: "てがみ", meaning: "Brief", pos: "Nomen", examples: [
    { jp: "友達に手紙を書きました。", de: "Ich habe meinem Freund einen Brief geschrieben." },
    { jp: "郵便局で手紙を送りました。", de: "Ich habe auf dem Postamt einen Brief abgeschickt." }
  ]},
  { id: "v104", word: "電話", reading: "でんわ", meaning: "Telefon", pos: "Nomen", examples: [
    { jp: "電話で話しました。", de: "Ich habe telefoniert." },
    { jp: "電話番号を教えてください。", de: "Geben Sie mir bitte Ihre Telefonnummer." }
  ]},
  { id: "v105", word: "テレビ", reading: "テレビ", meaning: "Fernseher", pos: "Nomen", examples: [
    { jp: "夜にテレビを見ます。", de: "Abends schaue ich Fernsehen." },
    { jp: "このテレビは大きいです。", de: "Dieser Fernseher ist groß." }
  ]},
  { id: "v106", word: "かばん", reading: "かばん", meaning: "Tasche / Koffer", pos: "Nomen", examples: [
    { jp: "かばんの中に本があります。", de: "In der Tasche ist ein Buch." },
    { jp: "新しいかばんを買いました。", de: "Ich habe eine neue Tasche gekauft." }
  ]},
  { id: "v107", word: "財布", reading: "さいふ", meaning: "Geldbörse / Portemonnaie", pos: "Nomen", examples: [
    { jp: "財布を忘れました。", de: "Ich habe meine Geldbörse vergessen." },
    { jp: "財布の中にお金がありません。", de: "In meiner Geldbörse ist kein Geld." }
  ]},
  { id: "v108", word: "時計", reading: "とけい", meaning: "Uhr / Armbanduhr", pos: "Nomen", examples: [
    { jp: "時計を見てください。", de: "Schauen Sie auf die Uhr." },
    { jp: "この時計は高いです。", de: "Diese Uhr ist teuer." }
  ]},
  { id: "v109", word: "眼鏡", reading: "めがね", meaning: "Brille", pos: "Nomen", examples: [
    { jp: "眼鏡をかけています。", de: "Ich trage eine Brille." },
    { jp: "眼鏡がどこにありますか。", de: "Wo ist meine Brille?" }
  ]},
  { id: "v110", word: "鍵", reading: "かぎ", meaning: "Schlüssel", pos: "Nomen", examples: [
    { jp: "鍵を忘れました。", de: "Ich habe den Schlüssel vergessen." },
    { jp: "鍵はかばんの中にあります。", de: "Der Schlüssel ist in der Tasche." }
  ]},
  { id: "v111", word: "服", reading: "ふく", meaning: "Kleidung", pos: "Nomen", examples: [
    { jp: "新しい服を買いました。", de: "Ich habe neue Kleidung gekauft." },
    { jp: "今日はどんな服を着ますか。", de: "Was ziehen Sie heute an?" }
  ]},
  { id: "v112", word: "靴", reading: "くつ", meaning: "Schuhe", pos: "Nomen", examples: [
    { jp: "新しい靴を買いました。", de: "Ich habe neue Schuhe gekauft." },
    { jp: "靴を脱いでください。", de: "Bitte ziehen Sie die Schuhe aus." }
  ]},
  { id: "v113", word: "傘", reading: "かさ", meaning: "Regenschirm", pos: "Nomen", examples: [
    { jp: "雨が降っているので傘を持っていきます。", de: "Es regnet, also nehme ich einen Regenschirm mit." },
    { jp: "傘を忘れました。", de: "Ich habe den Regenschirm vergessen." }
  ]},
  { id: "v114", word: "机", reading: "つくえ", meaning: "Schreibtisch", pos: "Nomen", examples: [
    { jp: "机の上に本があります。", de: "Auf dem Schreibtisch liegt ein Buch." },
    { jp: "机で勉強します。", de: "Ich lerne am Schreibtisch." }
  ]},
  { id: "v115", word: "椅子", reading: "いす", meaning: "Stuhl", pos: "Nomen", examples: [
    { jp: "椅子に座ってください。", de: "Bitte setzen Sie sich auf den Stuhl." },
    { jp: "椅子が三つあります。", de: "Es gibt drei Stühle." }
  ]},
  { id: "v116", word: "窓", reading: "まど", meaning: "Fenster", pos: "Nomen", examples: [
    { jp: "窓を開けてください。", de: "Bitte öffnen Sie das Fenster." },
    { jp: "窓から富士山が見えます。", de: "Vom Fenster aus kann man den Fuji sehen." }
  ]},
  { id: "v117", word: "ドア", reading: "ドア", meaning: "Tür", pos: "Nomen", examples: [
    { jp: "ドアを閉めてください。", de: "Bitte schließen Sie die Tür." },
    { jp: "ドアの前で待っています。", de: "Ich warte vor der Tür." }
  ]},
  { id: "v118", word: "写真", reading: "しゃしん", meaning: "Foto / Bild", pos: "Nomen", examples: [
    { jp: "写真を撮ってもいいですか。", de: "Darf ich ein Foto machen?" },
    { jp: "家族の写真があります。", de: "Ich habe ein Familienfoto." }
  ]},

  // i-Adjektive
  { id: "v119", word: "大きい", reading: "おおきい", meaning: "groß", pos: "i-Adjektiv", examples: [
    { jp: "この犬はとても大きいです。", de: "Dieser Hund ist sehr groß." },
    { jp: "大きいかばんを買いました。", de: "Ich habe eine große Tasche gekauft." }
  ]},
  { id: "v120", word: "小さい", reading: "ちいさい", meaning: "klein", pos: "i-Adjektiv", examples: [
    { jp: "私の部屋は小さいです。", de: "Mein Zimmer ist klein." },
    { jp: "小さい猫がいます。", de: "Es gibt eine kleine Katze." }
  ]},
  { id: "v121", word: "高い", reading: "たかい", meaning: "hoch / teuer", pos: "i-Adjektiv", examples: [
    { jp: "この山は高いです。", de: "Dieser Berg ist hoch." },
    { jp: "このレストランは高いです。", de: "Dieses Restaurant ist teuer." }
  ]},
  { id: "v122", word: "安い", reading: "やすい", meaning: "billig / günstig", pos: "i-Adjektiv", examples: [
    { jp: "このスーパーは安いです。", de: "Dieser Supermarkt ist günstig." },
    { jp: "安いホテルを探しています。", de: "Ich suche ein günstiges Hotel." }
  ]},
  { id: "v123", word: "新しい", reading: "あたらしい", meaning: "neu", pos: "i-Adjektiv", examples: [
    { jp: "新しい服を買いました。", de: "Ich habe neue Kleidung gekauft." },
    { jp: "新しい学校はどうですか。", de: "Wie ist die neue Schule?" }
  ]},
  { id: "v124", word: "古い", reading: "ふるい", meaning: "alt (Dinge)", pos: "i-Adjektiv", examples: [
    { jp: "この建物は古いです。", de: "Dieses Gebäude ist alt." },
    { jp: "古い本を読みました。", de: "Ich habe ein altes Buch gelesen." }
  ]},
  { id: "v125", word: "長い", reading: "ながい", meaning: "lang", pos: "i-Adjektiv", examples: [
    { jp: "この川は長いです。", de: "Dieser Fluss ist lang." },
    { jp: "長い時間待ちました。", de: "Ich habe lange gewartet." }
  ]},
  { id: "v126", word: "短い", reading: "みじかい", meaning: "kurz", pos: "i-Adjektiv", examples: [
    { jp: "この映画は短いです。", de: "Dieser Film ist kurz." },
    { jp: "短い手紙を書きました。", de: "Ich habe einen kurzen Brief geschrieben." }
  ]},
  { id: "v127", word: "速い", reading: "はやい", meaning: "schnell", pos: "i-Adjektiv", examples: [
    { jp: "電車はバスより速いです。", de: "Der Zug ist schneller als der Bus." },
    { jp: "速い車ですね。", de: "Das ist ein schnelles Auto." }
  ]},
  { id: "v128", word: "遅い", reading: "おそい", meaning: "langsam / spät", pos: "i-Adjektiv", examples: [
    { jp: "今日は少し遅いですね。", de: "Heute sind Sie etwas spät." },
    { jp: "このバスは遅いです。", de: "Dieser Bus ist langsam." }
  ]},
  { id: "v129", word: "多い", reading: "おおい", meaning: "viele / viel", pos: "i-Adjektiv", examples: [
    { jp: "東京は人が多いです。", de: "In Tokio gibt es viele Menschen." },
    { jp: "今日は仕事が多いです。", de: "Heute habe ich viel Arbeit." }
  ]},
  { id: "v130", word: "少ない", reading: "すくない", meaning: "wenige / wenig", pos: "i-Adjektiv", examples: [
    { jp: "今日は客が少ないです。", de: "Heute gibt es wenige Kunden." },
    { jp: "時間が少ないです。", de: "Es ist wenig Zeit." }
  ]},
  { id: "v131", word: "いい / 良い", reading: "いい / よい", meaning: "gut", pos: "i-Adjektiv (unregelmäßig)", examples: [
    { jp: "今日はいい天気です。", de: "Heute ist schönes Wetter." },
    { jp: "この映画はいいですよ。", de: "Dieser Film ist gut." }
  ]},
  { id: "v132", word: "悪い", reading: "わるい", meaning: "schlecht / böse", pos: "i-Adjektiv", examples: [
    { jp: "今日は天気が悪いです。", de: "Heute ist das Wetter schlecht." },
    { jp: "体の調子が悪いです。", de: "Mir geht es nicht gut." }
  ]},
  { id: "v133", word: "面白い", reading: "おもしろい", meaning: "interessant / lustig", pos: "i-Adjektiv", examples: [
    { jp: "この本はとても面白いです。", de: "Dieses Buch ist sehr interessant." },
    { jp: "面白い映画を見ました。", de: "Ich habe einen lustigen Film gesehen." }
  ]},
  { id: "v134", word: "つまらない", reading: "つまらない", meaning: "langweilig / uninteressant", pos: "i-Adjektiv", examples: [
    { jp: "この映画はつまらないです。", de: "Dieser Film ist langweilig." },
    { jp: "今日はつまらない一日でした。", de: "Heute war ein langweiliger Tag." }
  ]},
  { id: "v135", word: "楽しい", reading: "たのしい", meaning: "spaßig / schön / fröhlich", pos: "i-Adjektiv", examples: [
    { jp: "パーティーはとても楽しかったです。", de: "Die Party war sehr schön." },
    { jp: "友達と遊ぶのは楽しいです。", de: "Mit Freunden zu spielen macht Spaß." }
  ]},
  { id: "v136", word: "難しい", reading: "むずかしい", meaning: "schwierig / schwer", pos: "i-Adjektiv", examples: [
    { jp: "この問題は難しいです。", de: "Diese Aufgabe ist schwierig." },
    { jp: "日本語は難しいですか。", de: "Ist Japanisch schwer?" }
  ]},
  { id: "v137", word: "易しい", reading: "やさしい", meaning: "leicht / einfach", pos: "i-Adjektiv", examples: [
    { jp: "この問題は易しいです。", de: "Diese Aufgabe ist einfach." },
    { jp: "易しい本から読み始めました。", de: "Ich habe mit einfachen Büchern angefangen zu lesen." }
  ]},
  { id: "v138", word: "暑い", reading: "あつい", meaning: "heiß (Wetter/Luft)", pos: "i-Adjektiv", examples: [
    { jp: "今日はとても暑いです。", de: "Heute ist es sehr heiß." },
    { jp: "夏は暑いので、水をたくさん飲みます。", de: "Im Sommer ist es heiß, also trinke ich viel Wasser." }
  ]},
  { id: "v139", word: "寒い", reading: "さむい", meaning: "kalt (Wetter/Luft)", pos: "i-Adjektiv", examples: [
    { jp: "今日は寒いですね。", de: "Heute ist es kalt, nicht wahr?" },
    { jp: "冬は寒いので、コートを着ます。", de: "Im Winter ist es kalt, also ziehe ich einen Mantel an." }
  ]},
  { id: "v140", word: "暖かい", reading: "あたたかい", meaning: "warm", pos: "i-Adjektiv", examples: [
    { jp: "春は暖かいです。", de: "Im Frühling ist es warm." },
    { jp: "このスープは暖かいです。", de: "Diese Suppe ist warm." }
  ]},
  { id: "v141", word: "涼しい", reading: "すずしい", meaning: "kühl (angenehm)", pos: "i-Adjektiv", examples: [
    { jp: "秋は涼しくて気持ちいいです。", de: "Im Herbst ist es angenehm kühl." },
    { jp: "今日は涼しいですね。", de: "Heute ist es kühl, nicht wahr?" }
  ]},
  { id: "v142", word: "辛い", reading: "からい", meaning: "scharf / pikant", pos: "i-Adjektiv", examples: [
    { jp: "この料理は辛いです。", de: "Dieses Gericht ist scharf." },
    { jp: "辛い食べ物は好きですか。", de: "Mögen Sie scharfes Essen?" }
  ]},
  { id: "v143", word: "甘い", reading: "あまい", meaning: "süß", pos: "i-Adjektiv", examples: [
    { jp: "このケーキはとても甘いです。", de: "Dieser Kuchen ist sehr süß." },
    { jp: "甘いものが好きです。", de: "Ich mag süße Sachen." }
  ]},
  { id: "v144", word: "美味しい", reading: "おいしい", meaning: "lecker / schmackhaft", pos: "i-Adjektiv", examples: [
    { jp: "このラーメンはとてもおいしいです。", de: "Diese Ramen sind sehr lecker." },
    { jp: "お母さんの料理はおいしいです。", de: "Das Essen meiner Mutter ist lecker." }
  ]},
  { id: "v145", word: "まずい", reading: "まずい", meaning: "nicht lecker / schlecht schmecken", pos: "i-Adjektiv", examples: [
    { jp: "この料理はまずいです。", de: "Dieses Gericht schmeckt nicht gut." },
    { jp: "まずい薬を飲みました。", de: "Ich habe eine bittere Medizin genommen." }
  ]},
  { id: "v146", word: "嬉しい", reading: "うれしい", meaning: "froh / erfreut", pos: "i-Adjektiv", examples: [
    { jp: "プレゼントをもらって嬉しいです。", de: "Ich freue mich, ein Geschenk bekommen zu haben." },
    { jp: "合格して嬉しいです。", de: "Ich bin froh, bestanden zu haben." }
  ]},
  { id: "v147", word: "悲しい", reading: "かなしい", meaning: "traurig", pos: "i-Adjektiv", examples: [
    { jp: "悲しい映画を見ました。", de: "Ich habe einen traurigen Film gesehen." },
    { jp: "友達が引っ越して悲しいです。", de: "Ich bin traurig, dass mein Freund umgezogen ist." }
  ]},
  { id: "v148", word: "痛い", reading: "いたい", meaning: "schmerzhaft / es tut weh", pos: "i-Adjektiv", examples: [
    { jp: "頭が痛いです。", de: "Ich habe Kopfschmerzen." },
    { jp: "足が痛いので、病院に行きます。", de: "Mein Bein tut weh, also gehe ich ins Krankenhaus." }
  ]},
  { id: "v149", word: "眠い", reading: "ねむい", meaning: "schläfrig / müde", pos: "i-Adjektiv", examples: [
    { jp: "今日は眠いです。", de: "Heute bin ich schläfrig." },
    { jp: "眠いので、もう寝ます。", de: "Ich bin müde, also gehe ich jetzt schlafen." }
  ]},
  { id: "v150", word: "忙しい", reading: "いそがしい", meaning: "beschäftigt / busy", pos: "i-Adjektiv", examples: [
    { jp: "今週は忙しいです。", de: "Diese Woche bin ich sehr beschäftigt." },
    { jp: "忙しくて食事の時間がありません。", de: "Ich bin so beschäftigt, dass ich keine Zeit zum Essen habe." }
  ]},
  { id: "v151", word: "怖い", reading: "こわい", meaning: "beängstigend / Angst einflößend", pos: "i-Adjektiv", examples: [
    { jp: "怖い映画は見ません。", de: "Ich schaue keine Horrorfilme." },
    { jp: "犬が怖いです。", de: "Ich habe Angst vor Hunden." }
  ]},
  { id: "v152", word: "広い", reading: "ひろい", meaning: "weit / geräumig", pos: "i-Adjektiv", examples: [
    { jp: "この部屋はとても広いです。", de: "Dieses Zimmer ist sehr geräumig." },
    { jp: "広い公園で遊びます。", de: "Ich spiele in einem großen Park." }
  ]},
  { id: "v153", word: "狭い", reading: "せまい", meaning: "eng / schmal", pos: "i-Adjektiv", examples: [
    { jp: "この道は狭いです。", de: "Diese Straße ist eng." },
    { jp: "部屋が狭いので、荷物を置く場所がありません。", de: "Das Zimmer ist klein, also gibt es keinen Platz für Gepäck." }
  ]},
  { id: "v154", word: "重い", reading: "おもい", meaning: "schwer (Gewicht)", pos: "i-Adjektiv", examples: [
    { jp: "このかばんはとても重いです。", de: "Diese Tasche ist sehr schwer." },
    { jp: "重い荷物を持ちました。", de: "Ich habe schweres Gepäck getragen." }
  ]},
  { id: "v155", word: "軽い", reading: "かるい", meaning: "leicht (Gewicht)", pos: "i-Adjektiv", examples: [
    { jp: "この荷物は軽いです。", de: "Dieses Gepäck ist leicht." },
    { jp: "軽い傘を持っています。", de: "Ich habe einen leichten Regenschirm." }
  ]},

  // na-Adjektive
  { id: "v156", word: "きれい", reading: "きれい", meaning: "schön / sauber / hübsch", pos: "na-Adjektiv", examples: [
    { jp: "この花はきれいです。", de: "Diese Blume ist schön." },
    { jp: "部屋をきれいにしました。", de: "Ich habe das Zimmer sauber gemacht." }
  ]},
  { id: "v157", word: "静か", reading: "しずか", meaning: "ruhig / still", pos: "na-Adjektiv", examples: [
    { jp: "図書館は静かです。", de: "Die Bibliothek ist ruhig." },
    { jp: "静かな場所で勉強します。", de: "Ich lerne an einem ruhigen Ort." }
  ]},
  { id: "v158", word: "便利", reading: "べんり", meaning: "praktisch / bequem", pos: "na-Adjektiv", examples: [
    { jp: "このアプリはとても便利です。", de: "Diese App ist sehr praktisch." },
    { jp: "駅の近くは便利です。", de: "In der Nähe des Bahnhofs ist es praktisch." }
  ]},
  { id: "v159", word: "親切", reading: "しんせつ", meaning: "freundlich / nett / hilfreich", pos: "na-Adjektiv", examples: [
    { jp: "駅員さんはとても親切でした。", de: "Der Bahnhofsangestellte war sehr freundlich." },
    { jp: "親切な人に道を教えてもらいました。", de: "Eine nette Person hat mir den Weg erklärt." }
  ]},
  { id: "v160", word: "元気", reading: "げんき", meaning: "gesund / munter / fit", pos: "na-Adjektiv", examples: [
    { jp: "元気ですか。", de: "Wie geht es Ihnen?" },
    { jp: "今日はとても元気です。", de: "Heute geht es mir sehr gut." }
  ]},
  { id: "v161", word: "有名", reading: "ゆうめい", meaning: "berühmt", pos: "na-Adjektiv", examples: [
    { jp: "富士山は有名です。", de: "Der Fuji ist berühmt." },
    { jp: "有名なレストランに行きました。", de: "Ich bin in ein berühmtes Restaurant gegangen." }
  ]},
  { id: "v162", word: "好き", reading: "すき", meaning: "mögen / gern haben", pos: "na-Adjektiv", examples: [
    { jp: "音楽が好きです。", de: "Ich mag Musik." },
    { jp: "どんな食べ物が好きですか。", de: "Welche Speisen mögen Sie?" }
  ]},
  { id: "v163", word: "嫌い", reading: "きらい", meaning: "nicht mögen / ablehnen", pos: "na-Adjektiv", examples: [
    { jp: "辛い食べ物が嫌いです。", de: "Ich mag kein scharfes Essen." },
    { jp: "虫が嫌いです。", de: "Ich mag keine Insekten." }
  ]},
  { id: "v164", word: "上手", reading: "じょうず", meaning: "geschickt / gut in etw.", pos: "na-Adjektiv", examples: [
    { jp: "田中さんは料理が上手です。", de: "Herr Tanaka kocht sehr gut." },
    { jp: "日本語が上手ですね。", de: "Ihr Japanisch ist sehr gut." }
  ]},
  { id: "v165", word: "下手", reading: "へた", meaning: "ungeschickt / schlecht in etw.", pos: "na-Adjektiv", examples: [
    { jp: "私は歌が下手です。", de: "Ich singe schlecht." },
    { jp: "料理が下手なので、よく外食します。", de: "Da ich schlecht koche, gehe ich oft auswärts essen." }
  ]},
  { id: "v166", word: "大丈夫", reading: "だいじょうぶ", meaning: "in Ordnung / kein Problem", pos: "na-Adjektiv", examples: [
    { jp: "「大丈夫ですか。」「はい、大丈夫です。」", de: "\"Alles in Ordnung?\" \"Ja, alles gut.\"" },
    { jp: "一人で大丈夫です。", de: "Alleine ist es kein Problem." }
  ]},
  { id: "v167", word: "大変", reading: "たいへん", meaning: "schwierig / schlimm / sehr", pos: "na-Adjektiv/Adverb", examples: [
    { jp: "この仕事は大変です。", de: "Diese Arbeit ist schwer." },
    { jp: "大変おいしいです。", de: "Es ist ausgesprochen lecker." }
  ]},
  { id: "v168", word: "にぎやか", reading: "にぎやか", meaning: "belebt / lebhaft / laut", pos: "na-Adjektiv", examples: [
    { jp: "この町はにぎやかです。", de: "Diese Stadt ist belebt." },
    { jp: "にぎやかなパーティーでした。", de: "Es war eine lebhafte Party." }
  ]},
  { id: "v169", word: "暇", reading: "ひま", meaning: "Freizeit haben / nicht beschäftigt sein", pos: "na-Adjektiv", examples: [
    { jp: "今日は暇です。", de: "Heute habe ich frei." },
    { jp: "暇な時間に本を読みます。", de: "In meiner Freizeit lese ich Bücher." }
  ]},
  { id: "v170", word: "特別", reading: "とくべつ", meaning: "besonders / speziell", pos: "na-Adjektiv", examples: [
    { jp: "今日は特別な日です。", de: "Heute ist ein besonderer Tag." },
    { jp: "特別なプレゼントをもらいました。", de: "Ich habe ein besonderes Geschenk bekommen." }
  ]},
  { id: "v171", word: "丈夫", reading: "じょうぶ", meaning: "robust / haltbar / sturdy", pos: "na-Adjektiv", examples: [
    { jp: "この靴は丈夫です。", de: "Diese Schuhe sind robust." },
    { jp: "丈夫なかばんを買いました。", de: "Ich habe eine haltbare Tasche gekauft." }
  ]},
  { id: "v172", word: "真面目", reading: "まじめ", meaning: "ernsthaft / pflichtbewusst / seriös", pos: "na-Adjektiv", examples: [
    { jp: "田中さんはとても真面目な学生です。", de: "Herr Tanaka ist ein sehr fleißiger Student." },
    { jp: "真面目に勉強します。", de: "Ich lerne ernsthaft." }
  ]},

  // Verben - Godan (Gruppe 1)
  { id: "v173", word: "行く", reading: "いく", meaning: "gehen (dorthin)", pos: "Verb (Godan, く)", examples: [
    { jp: "明日、学校に行きます。", de: "Morgen gehe ich zur Schule." },
    { jp: "週末に公園に行きました。", de: "Am Wochenende bin ich in den Park gegangen." }
  ]},
  { id: "v174", word: "買う", reading: "かう", meaning: "kaufen", pos: "Verb (Godan, う)", examples: [
    { jp: "スーパーで野菜を買います。", de: "Ich kaufe Gemüse im Supermarkt." },
    { jp: "新しい本を買いました。", de: "Ich habe ein neues Buch gekauft." }
  ]},
  { id: "v175", word: "読む", reading: "よむ", meaning: "lesen", pos: "Verb (Godan, む)", examples: [
    { jp: "毎日新聞を読みます。", de: "Jeden Tag lese ich die Zeitung." },
    { jp: "図書館で本を読みました。", de: "Ich habe in der Bibliothek ein Buch gelesen." }
  ]},
  { id: "v176", word: "書く", reading: "かく", meaning: "schreiben", pos: "Verb (Godan, く)", examples: [
    { jp: "友達に手紙を書きます。", de: "Ich schreibe meinem Freund einen Brief." },
    { jp: "日本語でメモを書きました。", de: "Ich habe eine Notiz auf Japanisch geschrieben." }
  ]},
  { id: "v177", word: "聞く", reading: "きく", meaning: "hören / fragen", pos: "Verb (Godan, く)", examples: [
    { jp: "音楽を聞くのが好きです。", de: "Ich höre gerne Musik." },
    { jp: "先生に質問を聞きました。", de: "Ich habe den Lehrer etwas gefragt." }
  ]},
  { id: "v178", word: "話す", reading: "はなす", meaning: "sprechen / erzählen", pos: "Verb (Godan, す)", examples: [
    { jp: "日本語で話してください。", de: "Sprechen Sie bitte auf Japanisch." },
    { jp: "友達と電話で話しました。", de: "Ich habe mit meinem Freund telefoniert." }
  ]},
  { id: "v179", word: "飲む", reading: "のむ", meaning: "trinken", pos: "Verb (Godan, む)", examples: [
    { jp: "毎朝コーヒーを飲みます。", de: "Jeden Morgen trinke ich Kaffee." },
    { jp: "水をたくさん飲んでください。", de: "Trinken Sie bitte viel Wasser." }
  ]},
  { id: "v180", word: "帰る", reading: "かえる", meaning: "heimgehen / nach Hause gehen", pos: "Verb (Godan, る)*", examples: [
    { jp: "六時に家に帰ります。", de: "Um 6 Uhr gehe ich nach Hause." },
    { jp: "昨日は早く帰りました。", de: "Gestern bin ich früh nach Hause gegangen." }
  ]},
  { id: "v181", word: "待つ", reading: "まつ", meaning: "warten", pos: "Verb (Godan, つ)", examples: [
    { jp: "駅で友達を待ちます。", de: "Ich warte am Bahnhof auf meinen Freund." },
    { jp: "バスを三十分待ちました。", de: "Ich habe dreißig Minuten auf den Bus gewartet." }
  ]},
  { id: "v182", word: "持つ", reading: "もつ", meaning: "halten / tragen / besitzen", pos: "Verb (Godan, つ)", examples: [
    { jp: "かばんを持ってください。", de: "Halten Sie bitte die Tasche." },
    { jp: "重い荷物を持ちました。", de: "Ich habe schweres Gepäck getragen." }
  ]},
  { id: "v183", word: "分かる", reading: "わかる", meaning: "verstehen / begreifen", pos: "Verb (Godan, る)*", examples: [
    { jp: "日本語が少し分かります。", de: "Ich verstehe ein wenig Japanisch." },
    { jp: "この問題が分かりません。", de: "Ich verstehe diese Aufgabe nicht." }
  ]},
  { id: "v184", word: "知る", reading: "しる", meaning: "wissen / kennen", pos: "Verb (Godan, る)*", examples: [
    { jp: "田中さんを知っていますか。", de: "Kennen Sie Herrn Tanaka?" },
    { jp: "この映画を知っています。", de: "Ich kenne diesen Film." }
  ]},
  { id: "v185", word: "会う", reading: "あう", meaning: "treffen / begegnen", pos: "Verb (Godan, う)", examples: [
    { jp: "明日、友達に会います。", de: "Morgen treffe ich einen Freund." },
    { jp: "駅で先生に会いました。", de: "Am Bahnhof bin ich meinem Lehrer begegnet." }
  ]},
  { id: "v186", word: "使う", reading: "つかう", meaning: "benutzen / verwenden", pos: "Verb (Godan, う)", examples: [
    { jp: "毎日スマホを使います。", de: "Jeden Tag benutze ich mein Smartphone." },
    { jp: "この辞書をよく使います。", de: "Dieses Wörterbuch benutze ich oft." }
  ]},
  { id: "v187", word: "作る", reading: "つくる", meaning: "machen / herstellen / kochen", pos: "Verb (Godan, る)*", examples: [
    { jp: "お母さんは料理を作ります。", de: "Meine Mutter kocht." },
    { jp: "友達のためにケーキを作りました。", de: "Ich habe für meinen Freund einen Kuchen gebacken." }
  ]},
  { id: "v188", word: "入る", reading: "はいる", meaning: "eintreten / hineingehen", pos: "Verb (Godan, る)*", examples: [
    { jp: "部屋に入ってください。", de: "Kommen Sie bitte ins Zimmer." },
    { jp: "図書館に入りました。", de: "Ich bin in die Bibliothek gegangen." }
  ]},
  { id: "v189", word: "終わる", reading: "おわる", meaning: "enden / aufhören / fertig werden", pos: "Verb (Godan, る)*", examples: [
    { jp: "授業は三時に終わります。", de: "Der Unterricht endet um 3 Uhr." },
    { jp: "仕事が終わったら、電話します。", de: "Wenn die Arbeit fertig ist, rufe ich an." }
  ]},
  { id: "v190", word: "休む", reading: "やすむ", meaning: "ruhen / Pause machen / fehlen", pos: "Verb (Godan, む)", examples: [
    { jp: "体の調子が悪いので、学校を休みます。", de: "Mir geht es nicht gut, also fehle ich in der Schule." },
    { jp: "少し休みましょう。", de: "Machen wir eine kurze Pause." }
  ]},
  { id: "v191", word: "乗る", reading: "のる", meaning: "einsteigen / fahren mit (Fahrzeug)", pos: "Verb (Godan, る)*", examples: [
    { jp: "電車に乗って会社に行きます。", de: "Ich steige in den Zug ein und fahre zur Arbeit." },
    { jp: "バスに乗りました。", de: "Ich bin in den Bus eingestiegen." }
  ]},
  { id: "v192", word: "泳ぐ", reading: "およぐ", meaning: "schwimmen", pos: "Verb (Godan, ぐ)", examples: [
    { jp: "夏に海で泳ぎます。", de: "Im Sommer schwimme ich im Meer." },
    { jp: "プールで泳ぐのが好きです。", de: "Ich schwimme gerne im Schwimmbad." }
  ]},
  { id: "v193", word: "走る", reading: "はしる", meaning: "rennen / laufen", pos: "Verb (Godan, る)*", examples: [
    { jp: "毎朝公園を走ります。", de: "Jeden Morgen laufe ich im Park." },
    { jp: "駅まで走りました。", de: "Ich bin zum Bahnhof gerannt." }
  ]},
  { id: "v194", word: "歩く", reading: "あるく", meaning: "gehen / zu Fuß gehen", pos: "Verb (Godan, く)", examples: [
    { jp: "駅まで歩いて十分です。", de: "Zum Bahnhof sind es zehn Minuten zu Fuß." },
    { jp: "公園を歩くのが好きです。", de: "Ich gehe gerne im Park spazieren." }
  ]},
  { id: "v195", word: "遊ぶ", reading: "あそぶ", meaning: "spielen / sich vergnügen", pos: "Verb (Godan, ぶ)", examples: [
    { jp: "子供たちが公園で遊んでいます。", de: "Die Kinder spielen im Park." },
    { jp: "週末に友達と遊びました。", de: "Am Wochenende habe ich mit Freunden gespielt." }
  ]},
  { id: "v196", word: "洗う", reading: "あらう", meaning: "waschen / spülen", pos: "Verb (Godan, う)", examples: [
    { jp: "食事の前に手を洗います。", de: "Vor dem Essen wasche ich mir die Hände." },
    { jp: "食器を洗いました。", de: "Ich habe das Geschirr gespült." }
  ]},
  { id: "v197", word: "切る", reading: "きる", meaning: "schneiden", pos: "Verb (Godan, る)*", examples: [
    { jp: "野菜を切ります。", de: "Ich schneide Gemüse." },
    { jp: "ハサミで紙を切りました。", de: "Ich habe Papier mit der Schere geschnitten." }
  ]},
  { id: "v198", word: "送る", reading: "おくる", meaning: "schicken / senden / begleiten", pos: "Verb (Godan, る)*", examples: [
    { jp: "友達にメールを送りました。", de: "Ich habe meinem Freund eine E-Mail geschickt." },
    { jp: "荷物を郵便局から送ります。", de: "Ich schicke das Paket vom Postamt." }
  ]},
  { id: "v199", word: "貸す", reading: "かす", meaning: "leihen (jmd. etwas leihen)", pos: "Verb (Godan, す)", examples: [
    { jp: "友達に本を貸しました。", de: "Ich habe meinem Freund ein Buch geliehen." },
    { jp: "傘を貸してください。", de: "Leihen Sie mir bitte einen Regenschirm." }
  ]},
  { id: "v200", word: "頼む", reading: "たのむ", meaning: "bitten / bestellen / beauftragen", pos: "Verb (Godan, む)", examples: [
    { jp: "友達に手伝いを頼みました。", de: "Ich habe meinen Freund um Hilfe gebeten." },
    { jp: "レストランで料理を頼みます。", de: "Im Restaurant bestelle ich ein Gericht." }
  ]},
  { id: "v201", word: "困る", reading: "こまる", meaning: "in Schwierigkeiten sein / Probleme haben", pos: "Verb (Godan, る)*", examples: [
    { jp: "お金がなくて困っています。", de: "Ich bin in der Klemme, weil ich kein Geld habe." },
    { jp: "道に迷って困りました。", de: "Ich habe mich verlaufen und wusste nicht mehr weiter." }
  ]},

  // Verben - Ichidan (Gruppe 2)
  { id: "v202", word: "食べる", reading: "たべる", meaning: "essen", pos: "Verb (Ichidan)", examples: [
    { jp: "朝ごはんを食べます。", de: "Ich esse Frühstück." },
    { jp: "寿司を食べたことがありますか。", de: "Haben Sie schon einmal Sushi gegessen?" }
  ]},
  { id: "v203", word: "見る", reading: "みる", meaning: "sehen / ansehen / schauen", pos: "Verb (Ichidan)", examples: [
    { jp: "夜にテレビを見ます。", de: "Abends schaue ich Fernsehen." },
    { jp: "富士山を見たいです。", de: "Ich möchte den Fuji sehen." }
  ]},
  { id: "v204", word: "起きる", reading: "おきる", meaning: "aufstehen / aufwachen", pos: "Verb (Ichidan)", examples: [
    { jp: "毎朝七時に起きます。", de: "Jeden Morgen stehe ich um 7 Uhr auf." },
    { jp: "今朝は早く起きました。", de: "Heute Morgen bin ich früh aufgestanden." }
  ]},
  { id: "v205", word: "寝る", reading: "ねる", meaning: "schlafen / sich hinlegen", pos: "Verb (Ichidan)", examples: [
    { jp: "十一時に寝ます。", de: "Ich gehe um 11 Uhr schlafen." },
    { jp: "昨日は早く寝ました。", de: "Gestern bin ich früh schlafen gegangen." }
  ]},
  { id: "v206", word: "着る", reading: "きる", meaning: "anziehen (Oberkörper)", pos: "Verb (Ichidan)", examples: [
    { jp: "今日はセーターを着ます。", de: "Heute ziehe ich einen Pullover an." },
    { jp: "着物を着たことがありますか。", de: "Haben Sie schon einmal einen Kimono getragen?" }
  ]},
  { id: "v207", word: "出る", reading: "でる", meaning: "herausgehen / verlassen / erscheinen", pos: "Verb (Ichidan)", examples: [
    { jp: "八時に家を出ます。", de: "Um 8 Uhr verlasse ich das Haus." },
    { jp: "電車が駅を出ました。", de: "Der Zug hat den Bahnhof verlassen." }
  ]},
  { id: "v208", word: "教える", reading: "おしえる", meaning: "lehren / unterrichten / erklären", pos: "Verb (Ichidan)", examples: [
    { jp: "先生は日本語を教えます。", de: "Der Lehrer unterrichtet Japanisch." },
    { jp: "道を教えてください。", de: "Erklären Sie mir bitte den Weg." }
  ]},
  { id: "v209", word: "覚える", reading: "おぼえる", meaning: "sich merken / auswendig lernen", pos: "Verb (Ichidan)", examples: [
    { jp: "単語を覚えます。", de: "Ich lerne Vokabeln auswendig." },
    { jp: "名前を覚えています。", de: "Ich merke mir Namen." }
  ]},
  { id: "v210", word: "忘れる", reading: "わすれる", meaning: "vergessen", pos: "Verb (Ichidan)", examples: [
    { jp: "傘を忘れました。", de: "Ich habe meinen Regenschirm vergessen." },
    { jp: "宿題を忘れないでください。", de: "Vergessen Sie die Hausaufgaben nicht." }
  ]},
  { id: "v211", word: "開ける", reading: "あける", meaning: "öffnen / aufmachen", pos: "Verb (Ichidan)", examples: [
    { jp: "窓を開けてください。", de: "Öffnen Sie bitte das Fenster." },
    { jp: "ドアを開けました。", de: "Ich habe die Tür geöffnet." }
  ]},
  { id: "v212", word: "閉める", reading: "しめる", meaning: "schließen / zumachen", pos: "Verb (Ichidan)", examples: [
    { jp: "ドアを閉めてください。", de: "Schließen Sie bitte die Tür." },
    { jp: "窓を閉めました。", de: "Ich habe das Fenster geschlossen." }
  ]},
  { id: "v213", word: "始める", reading: "はじめる", meaning: "beginnen / anfangen (transitiv)", pos: "Verb (Ichidan)", examples: [
    { jp: "九時に仕事を始めます。", de: "Um 9 Uhr beginne ich mit der Arbeit." },
    { jp: "日本語の勉強を始めました。", de: "Ich habe angefangen, Japanisch zu lernen." }
  ]},
  { id: "v214", word: "降りる", reading: "おりる", meaning: "aussteigen / heruntersteigen", pos: "Verb (Ichidan)", examples: [
    { jp: "次の駅で降ります。", de: "Ich steige an der nächsten Station aus." },
    { jp: "バスを降りました。", de: "Ich bin aus dem Bus ausgestiegen." }
  ]},
  { id: "v215", word: "借りる", reading: "かりる", meaning: "leihen / borgen (sich etwas leihen)", pos: "Verb (Ichidan)", examples: [
    { jp: "図書館で本を借りました。", de: "Ich habe in der Bibliothek ein Buch ausgeliehen." },
    { jp: "友達に自転車を借りました。", de: "Ich habe mir von meinem Freund ein Fahrrad geliehen." }
  ]},
  { id: "v216", word: "答える", reading: "こたえる", meaning: "antworten / beantworten", pos: "Verb (Ichidan)", examples: [
    { jp: "先生の質問に答えます。", de: "Ich antworte auf die Frage des Lehrers." },
    { jp: "メールに答えました。", de: "Ich habe auf die E-Mail geantwortet." }
  ]},

  // Unregelmäßige Verben
  { id: "v217", word: "来る", reading: "くる", meaning: "kommen (hierher)", pos: "Verb (unregelmäßig)", examples: [
    { jp: "友達が家に来ます。", de: "Ein Freund kommt zu mir nach Hause." },
    { jp: "先生がもうすぐ来ます。", de: "Der Lehrer kommt gleich." }
  ]},
  { id: "v218", word: "する", reading: "する", meaning: "tun / machen", pos: "Verb (unregelmäßig)", examples: [
    { jp: "宿題をします。", de: "Ich mache Hausaufgaben." },
    { jp: "何をしますか。", de: "Was machen Sie?" }
  ]},
  { id: "v219", word: "勉強する", reading: "べんきょうする", meaning: "lernen / studieren", pos: "Verb (する-Verb)", examples: [
    { jp: "毎日日本語を勉強します。", de: "Jeden Tag lerne ich Japanisch." },
    { jp: "図書館で勉強しました。", de: "Ich habe in der Bibliothek gelernt." }
  ]},
  { id: "v220", word: "仕事する", reading: "しごとする", meaning: "arbeiten", pos: "Verb (する-Verb)", examples: [
    { jp: "毎日八時間仕事します。", de: "Jeden Tag arbeite ich acht Stunden." },
    { jp: "今日は家で仕事しました。", de: "Heute habe ich von zu Hause aus gearbeitet." }
  ]},
  { id: "v221", word: "電話する", reading: "でんわする", meaning: "telefonieren / anrufen", pos: "Verb (する-Verb)", examples: [
    { jp: "後で電話します。", de: "Ich rufe später an." },
    { jp: "お母さんに電話しました。", de: "Ich habe meine Mutter angerufen." }
  ]},
  { id: "v222", word: "旅行する", reading: "りょこうする", meaning: "reisen", pos: "Verb (する-Verb)", examples: [
    { jp: "来年、日本に旅行します。", de: "Nächstes Jahr reise ich nach Japan." },
    { jp: "家族と一緒に旅行しました。", de: "Ich habe mit der Familie eine Reise gemacht." }
  ]},
  { id: "v223", word: "結婚する", reading: "けっこんする", meaning: "heiraten", pos: "Verb (する-Verb)", examples: [
    { jp: "来年、結婚します。", de: "Nächstes Jahr heirate ich." },
    { jp: "兄は去年結婚しました。", de: "Mein älterer Bruder hat letztes Jahr geheiratet." }
  ]},

  // Wichtige Nomen
  { id: "v224", word: "名前", reading: "なまえ", meaning: "Name", pos: "Nomen", examples: [
    { jp: "お名前は何ですか。", de: "Wie ist Ihr Name?" },
    { jp: "名前を書いてください。", de: "Schreiben Sie bitte Ihren Namen." }
  ]},
  { id: "v225", word: "言葉", reading: "ことば", meaning: "Wort / Sprache / Ausdrucksweise", pos: "Nomen", examples: [
    { jp: "新しい言葉を覚えました。", de: "Ich habe ein neues Wort gelernt." },
    { jp: "日本語の言葉は難しいです。", de: "Japanische Wörter sind schwierig." }
  ]},
  { id: "v226", word: "仕事", reading: "しごと", meaning: "Arbeit / Job / Beruf", pos: "Nomen", examples: [
    { jp: "仕事は何時に終わりますか。", de: "Um wie viel Uhr endet Ihre Arbeit?" },
    { jp: "今の仕事が好きです。", de: "Ich mag meinen jetzigen Job." }
  ]},
  { id: "v227", word: "勉強", reading: "べんきょう", meaning: "Lernen / Studium", pos: "Nomen", examples: [
    { jp: "毎日勉強します。", de: "Jeden Tag lerne ich." },
    { jp: "日本語の勉強は楽しいです。", de: "Das Japanischlernen macht Spaß." }
  ]},
  { id: "v228", word: "音楽", reading: "おんがく", meaning: "Musik", pos: "Nomen", examples: [
    { jp: "音楽を聞くのが好きです。", de: "Ich höre gerne Musik." },
    { jp: "音楽の授業があります。", de: "Es gibt Musikunterricht." }
  ]},
  { id: "v229", word: "映画", reading: "えいが", meaning: "Film / Kino", pos: "Nomen", examples: [
    { jp: "週末に映画を見ます。", de: "Am Wochenende schaue ich einen Film." },
    { jp: "日本映画が好きです。", de: "Ich mag japanische Filme." }
  ]},
  { id: "v230", word: "旅行", reading: "りょこう", meaning: "Reise", pos: "Nomen", examples: [
    { jp: "来年、日本に旅行します。", de: "Nächstes Jahr mache ich eine Reise nach Japan." },
    { jp: "旅行が好きですか。", de: "Reisen Sie gerne?" }
  ]},
  { id: "v231", word: "天気", reading: "てんき", meaning: "Wetter", pos: "Nomen", examples: [
    { jp: "今日は天気がいいです。", de: "Heute ist das Wetter schön." },
    { jp: "明日の天気はどうですか。", de: "Wie wird das Wetter morgen?" }
  ]},
  { id: "v232", word: "季節", reading: "きせつ", meaning: "Jahreszeit", pos: "Nomen", examples: [
    { jp: "好きな季節はいつですか。", de: "Welche Jahreszeit mögen Sie am liebsten?" },
    { jp: "日本には四つの季節があります。", de: "Japan hat vier Jahreszeiten." }
  ]},
  { id: "v233", word: "春", reading: "はる", meaning: "Frühling", pos: "Nomen", examples: [
    { jp: "春は桜がきれいです。", de: "Im Frühling sind die Kirschblüten schön." },
    { jp: "春は暖かいです。", de: "Im Frühling ist es warm." }
  ]},
  { id: "v234", word: "夏", reading: "なつ", meaning: "Sommer", pos: "Nomen", examples: [
    { jp: "夏は海に行きます。", de: "Im Sommer gehe ich ans Meer." },
    { jp: "夏はとても暑いです。", de: "Im Sommer ist es sehr heiß." }
  ]},
  { id: "v235", word: "秋", reading: "あき", meaning: "Herbst", pos: "Nomen", examples: [
    { jp: "秋は紅葉がきれいです。", de: "Im Herbst sind die Laubblätter schön." },
    { jp: "秋は涼しくて気持ちいいです。", de: "Im Herbst ist es angenehm kühl." }
  ]},
  { id: "v236", word: "冬", reading: "ふゆ", meaning: "Winter", pos: "Nomen", examples: [
    { jp: "冬は寒いです。", de: "Im Winter ist es kalt." },
    { jp: "冬に雪が降ります。", de: "Im Winter schneit es." }
  ]},
  { id: "v237", word: "花", reading: "はな", meaning: "Blume / Blüte", pos: "Nomen", examples: [
    { jp: "花をプレゼントしました。", de: "Ich habe Blumen verschenkt." },
    { jp: "公園に花がたくさんあります。", de: "Im Park gibt es viele Blumen." }
  ]},
  { id: "v238", word: "空", reading: "そら", meaning: "Himmel", pos: "Nomen", examples: [
    { jp: "今日は空が青いです。", de: "Heute ist der Himmel blau." },
    { jp: "空に星がたくさんあります。", de: "Am Himmel gibt es viele Sterne." }
  ]},
  { id: "v239", word: "海", reading: "うみ", meaning: "Meer / See", pos: "Nomen", examples: [
    { jp: "夏に海に行きます。", de: "Im Sommer gehe ich ans Meer." },
    { jp: "海は広いです。", de: "Das Meer ist weit." }
  ]},
  { id: "v240", word: "犬", reading: "いぬ", meaning: "Hund", pos: "Nomen", examples: [
    { jp: "犬を飼っています。", de: "Ich habe einen Hund." },
    { jp: "公園で犬と散歩します。", de: "Ich gehe mit dem Hund im Park spazieren." }
  ]},
  { id: "v241", word: "猫", reading: "ねこ", meaning: "Katze", pos: "Nomen", examples: [
    { jp: "猫が好きですか。", de: "Mögen Sie Katzen?" },
    { jp: "うちに猫が二匹います。", de: "Bei uns zu Hause gibt es zwei Katzen." }
  ]},
  { id: "v242", word: "鳥", reading: "とり", meaning: "Vogel", pos: "Nomen", examples: [
    { jp: "木の上に鳥がいます。", de: "Auf dem Baum sitzt ein Vogel." },
    { jp: "鳥の声が聞こえます。", de: "Ich höre Vogelstimmen." }
  ]},
  { id: "v243", word: "学生", reading: "がくせい", meaning: "Student / Schüler", pos: "Nomen", examples: [
    { jp: "私は大学の学生です。", de: "Ich bin Student an der Universität." },
    { jp: "学生のとき、よく旅行しました。", de: "Als Student habe ich oft gereist." }
  ]},
  { id: "v244", word: "先生", reading: "せんせい", meaning: "Lehrer / Lehrerin", pos: "Nomen", examples: [
    { jp: "先生に質問しました。", de: "Ich habe den Lehrer etwas gefragt." },
    { jp: "日本語の先生はとても親切です。", de: "Die Japanischlehrerin ist sehr freundlich." }
  ]},
  { id: "v245", word: "会社員", reading: "かいしゃいん", meaning: "Büroangestellter / Firma-Mitarbeiter", pos: "Nomen", examples: [
    { jp: "私は会社員です。", de: "Ich bin Büroangestellter." },
    { jp: "父は会社員として働いています。", de: "Mein Vater arbeitet als Büroangestellter." }
  ]},
  { id: "v246", word: "買い物", reading: "かいもの", meaning: "Einkaufen / Einkauf", pos: "Nomen", examples: [
    { jp: "土曜日に買い物をします。", de: "Samstags gehe ich einkaufen." },
    { jp: "スーパーで買い物をしました。", de: "Ich habe im Supermarkt eingekauft." }
  ]},
  { id: "v247", word: "飲み物", reading: "のみもの", meaning: "Getränk", pos: "Nomen", examples: [
    { jp: "何か飲み物はいかがですか。", de: "Möchten Sie etwas zu trinken?" },
    { jp: "好きな飲み物はコーヒーです。", de: "Mein Lieblingsgetränk ist Kaffee." }
  ]},
  { id: "v248", word: "食べ物", reading: "たべもの", meaning: "Speise / Lebensmittel", pos: "Nomen", examples: [
    { jp: "好きな食べ物は寿司です。", de: "Meine Lieblingsspeise ist Sushi." },
    { jp: "日本の食べ物はおいしいです。", de: "Japanisches Essen ist lecker." }
  ]},

  // Fragewörter
  { id: "v249", word: "何", reading: "なに / なん", meaning: "was", pos: "Fragewort", examples: [
    { jp: "これは何ですか。", de: "Was ist das?" },
    { jp: "今日の昼ごはんは何ですか。", de: "Was gibt es heute zum Mittagessen?" }
  ]},
  { id: "v250", word: "誰", reading: "だれ", meaning: "wer", pos: "Fragewort", examples: [
    { jp: "あの人は誰ですか。", de: "Wer ist diese Person dort?" },
    { jp: "誰と一緒に来ましたか。", de: "Mit wem sind Sie gekommen?" }
  ]},
  { id: "v251", word: "どこ", reading: "どこ", meaning: "wo / wohin", pos: "Fragewort", examples: [
    { jp: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    { jp: "どこに行きますか。", de: "Wohin gehen Sie?" }
  ]},
  { id: "v252", word: "いつ", reading: "いつ", meaning: "wann", pos: "Fragewort", examples: [
    { jp: "いつ日本に来ましたか。", de: "Wann sind Sie nach Japan gekommen?" },
    { jp: "パーティーはいつですか。", de: "Wann ist die Party?" }
  ]},
  { id: "v253", word: "どうして", reading: "どうして", meaning: "warum / weshalb", pos: "Fragewort", examples: [
    { jp: "どうして学校を休みましたか。", de: "Warum haben Sie die Schule geschwänzt?" },
    { jp: "どうして日本語を勉強しますか。", de: "Warum lernen Sie Japanisch?" }
  ]},
  { id: "v254", word: "どう", reading: "どう", meaning: "wie / auf welche Weise", pos: "Fragewort", examples: [
    { jp: "日本はどうですか。", de: "Wie finden Sie Japan?" },
    { jp: "この料理はどうやって作りますか。", de: "Wie macht man dieses Gericht?" }
  ]},
  { id: "v255", word: "いくら", reading: "いくら", meaning: "wie viel (Geld)", pos: "Fragewort", examples: [
    { jp: "これはいくらですか。", de: "Wie viel kostet das?" },
    { jp: "このりんごはいくらですか。", de: "Wie viel kosten diese Äpfel?" }
  ]},
  { id: "v256", word: "いくつ", reading: "いくつ", meaning: "wie viele / wie alt", pos: "Fragewort", examples: [
    { jp: "りんごはいくつありますか。", de: "Wie viele Äpfel gibt es?" },
    { jp: "お子さんはいくつですか。", de: "Wie alt ist Ihr Kind?" }
  ]},
  { id: "v257", word: "どれ", reading: "どれ", meaning: "welches (von mehreren)", pos: "Fragewort", examples: [
    { jp: "どれがあなたのかばんですか。", de: "Welche Tasche gehört Ihnen?" },
    { jp: "どれを買いますか。", de: "Welches kaufen Sie?" }
  ]},
  { id: "v258", word: "どの", reading: "どの", meaning: "welches (vor Nomen)", pos: "Fragewort", examples: [
    { jp: "どの電車に乗りますか。", de: "Welchen Zug nehmen Sie?" },
    { jp: "どの本が面白いですか。", de: "Welches Buch ist interessant?" }
  ]},

  // Adverbien & häufige Wörter
  { id: "v259", word: "とても", reading: "とても", meaning: "sehr / überaus", pos: "Adverb", examples: [
    { jp: "この映画はとても面白いです。", de: "Dieser Film ist sehr interessant." },
    { jp: "今日はとても暑いですね。", de: "Heute ist es sehr heiß, nicht wahr?" }
  ]},
  { id: "v260", word: "少し", reading: "すこし", meaning: "ein wenig / etwas", pos: "Adverb", examples: [
    { jp: "日本語が少し分かります。", de: "Ich verstehe ein wenig Japanisch." },
    { jp: "少し待ってください。", de: "Warten Sie bitte einen Moment." }
  ]},
  { id: "v261", word: "たくさん", reading: "たくさん", meaning: "viel / viele", pos: "Adverb", examples: [
    { jp: "水をたくさん飲んでください。", de: "Trinken Sie bitte viel Wasser." },
    { jp: "公園に花がたくさんあります。", de: "Im Park gibt es viele Blumen." }
  ]},
  { id: "v262", word: "もう", reading: "もう", meaning: "schon / bereits / bald", pos: "Adverb", examples: [
    { jp: "もう食べましたか。", de: "Haben Sie schon gegessen?" },
    { jp: "もう八時です。", de: "Es ist schon 8 Uhr." }
  ]},
  { id: "v263", word: "まだ", reading: "まだ", meaning: "noch / noch nicht", pos: "Adverb", examples: [
    { jp: "まだ宿題をしていません。", de: "Ich habe die Hausaufgaben noch nicht gemacht." },
    { jp: "友達はまだ来ていません。", de: "Mein Freund ist noch nicht gekommen." }
  ]},
  { id: "v264", word: "また", reading: "また", meaning: "wieder / nochmal", pos: "Adverb", examples: [
    { jp: "また来てください。", de: "Kommen Sie bitte wieder." },
    { jp: "またゆっくり話してください。", de: "Sprechen Sie bitte nochmal langsam." }
  ]},
  { id: "v265", word: "いつも", reading: "いつも", meaning: "immer / stets", pos: "Adverb", examples: [
    { jp: "いつも電車で通勤します。", de: "Ich fahre immer mit dem Zug zur Arbeit." },
    { jp: "いつも親切にしてくれてありがとう。", de: "Danke, dass du immer so nett zu mir bist." }
  ]},
  { id: "v266", word: "時々", reading: "ときどき", meaning: "manchmal / gelegentlich", pos: "Adverb", examples: [
    { jp: "時々映画を見ます。", de: "Manchmal schaue ich einen Film." },
    { jp: "時々友達と外食します。", de: "Gelegentlich esse ich mit Freunden auswärts." }
  ]},
  { id: "v267", word: "よく", reading: "よく", meaning: "oft / gut / gut und gerne", pos: "Adverb", examples: [
    { jp: "よく図書館に行きます。", de: "Ich gehe oft in die Bibliothek." },
    { jp: "子供の頃、よく公園で遊びました。", de: "Als Kind habe ich oft im Park gespielt." }
  ]},
  { id: "v268", word: "一緒に", reading: "いっしょに", meaning: "zusammen / gemeinsam", pos: "Adverb", examples: [
    { jp: "家族と一緒に食事をします。", de: "Ich esse zusammen mit der Familie." },
    { jp: "一緒に勉強しましょう。", de: "Lass uns zusammen lernen." }
  ]},
  { id: "v269", word: "ゆっくり", reading: "ゆっくり", meaning: "langsam / gemächlich", pos: "Adverb", examples: [
    { jp: "ゆっくり話してください。", de: "Sprechen Sie bitte langsam." },
    { jp: "今日はゆっくり休みます。", de: "Heute erhole ich mich in Ruhe." }
  ]},
  { id: "v270", word: "はじめて", reading: "はじめて", meaning: "zum ersten Mal", pos: "Adverb", examples: [
    { jp: "はじめて寿司を食べました。", de: "Ich habe zum ersten Mal Sushi gegessen." },
    { jp: "はじめて日本に来ました。", de: "Ich bin zum ersten Mal nach Japan gekommen." }
  ]},
];
