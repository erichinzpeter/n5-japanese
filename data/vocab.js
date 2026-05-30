const VOCAB = [
  // Begrüßungen & Ausdrücke
  { id: "v001", word: "おはようございます", reading: "おはようございます", meaning: "Guten Morgen (höflich)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "先生におはようございますと言いました。", reading: "せんせいにおはようございますといいました。", de: "Ich habe dem Lehrer guten Morgen gesagt." },
    { jp: "毎朝、おはようございますと言います。", reading: "まいあさ、おはようございますといいます。", de: "Jeden Morgen sage ich guten Morgen." }
  ]},
  { id: "v002", word: "こんにちは", reading: "こんにちは", meaning: "Guten Tag / Hallo", pos: "Ausdruck", level: "easy", examples: [
    { jp: "友達にこんにちはと言いました。", reading: "ともだちにこんにちはといいました。", de: "Ich habe meiner Freundin hallo gesagt." },
    { jp: "店員さんにこんにちはと言います。", reading: "てんいんさんにこんにちはといいます。", de: "Ich sage dem Verkäufer guten Tag." }
  ]},
  { id: "v003", word: "こんばんは", reading: "こんばんは", meaning: "Guten Abend", pos: "Ausdruck", level: "easy", examples: [
    { jp: "隣の人にこんばんはと言いました。", reading: "となりのひとにこんばんはといいました。", de: "Ich habe dem Nachbarn guten Abend gesagt." },
    { jp: "こんばんは、元気ですか。", reading: "こんばんは、げんきですか。", de: "Guten Abend, wie geht es Ihnen?" }
  ]},
  { id: "v004", word: "おやすみなさい", reading: "おやすみなさい", meaning: "Gute Nacht", pos: "Ausdruck", level: "easy", examples: [
    { jp: "寝る前におやすみなさいと言います。", reading: "ねるまえにおやすみなさいといいます。", de: "Vor dem Schlafen sage ich gute Nacht." },
    { jp: "子供におやすみなさいと言いました。", reading: "こどもにおやすみなさいといいました。", de: "Ich habe dem Kind gute Nacht gesagt." }
  ]},
  { id: "v005", word: "さようなら", reading: "さようなら", meaning: "Auf Wiedersehen", pos: "Ausdruck", level: "easy", examples: [
    { jp: "学校でさようならと言いました。", reading: "がっこうでさようならといいました。", de: "In der Schule habe ich auf Wiedersehen gesagt." },
    { jp: "友達にさようならと言って帰りました。", reading: "ともだちにさようならといってかえりました。", de: "Ich habe meinem Freund auf Wiedersehen gesagt und bin nach Hause gegangen." }
  ]},
  { id: "v006", word: "ありがとうございます", reading: "ありがとうございます", meaning: "Vielen Dank (höflich)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "プレゼントをもらって、ありがとうございますと言いました。", reading: "プレゼントをもらって、ありがとうございますといいました。", de: "Ich habe ein Geschenk bekommen und vielen Dank gesagt." },
    { jp: "手伝ってくれて、ありがとうございます。", reading: "てつだってくれて、ありがとうございます。", de: "Vielen Dank, dass Sie mir geholfen haben." }
  ]},
  { id: "v007", word: "すみません", reading: "すみません", meaning: "Entschuldigung / Excuse me", pos: "Ausdruck", level: "easy", examples: [
    { jp: "すみません、駅はどこですか。", reading: "すみません、えきはどこですか。", de: "Entschuldigung, wo ist der Bahnhof?" },
    { jp: "すみません、少し待ってください。", reading: "すみません、すこしまってください。", de: "Entschuldigung, warten Sie bitte kurz." }
  ]},
  { id: "v008", word: "ごめんなさい", reading: "ごめんなさい", meaning: "Es tut mir leid", pos: "Ausdruck", level: "easy", examples: [
    { jp: "遅れてごめんなさい。", reading: "おくれてごめんなさい。", de: "Es tut mir leid, dass ich zu spät bin." },
    { jp: "ごめんなさい、忘れました。", reading: "ごめんなさい、わすれました。", de: "Es tut mir leid, ich habe es vergessen." }
  ]},
  { id: "v009", word: "はい", reading: "はい", meaning: "Ja", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「田中さんですか。」「はい、そうです。」", reading: "「たなかさんですか。」「はい、そうです。」", de: "\"Sind Sie Herr Tanaka?\" \"Ja, das bin ich.\"" },
    { jp: "はい、わかりました。", de: "Ja, ich habe es verstanden." }
  ]},
  { id: "v010", word: "いいえ", reading: "いいえ", meaning: "Nein", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「日本人ですか。」「いいえ、ドイツ人です。」", reading: "「にほんじんですか。」「いいえ、ドイツじんです。」", de: "\"Sind Sie Japaner?\" \"Nein, ich bin Deutscher.\"" },
    { jp: "いいえ、まだです。", de: "Nein, noch nicht." }
  ]},
  { id: "v011", word: "どうぞ", reading: "どうぞ", meaning: "Bitte (beim Geben/Anbieten)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "どうぞ、座ってください。", reading: "どうぞ、すわってください。", de: "Bitte, setzen Sie sich." },
    { jp: "これをどうぞ。", de: "Hier, bitte sehr." }
  ]},
  { id: "v012", word: "いただきます", reading: "いただきます", meaning: "Guten Appetit (vor dem Essen)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "ご飯の前にいただきますと言います。", reading: "ごはんのまえにいただきますといいます。", de: "Vor dem Essen sagt man \"Guten Appetit\"." },
    { jp: "家族と一緒にいただきますと言いました。", reading: "かぞくといっしょにいただきますといいました。", de: "Ich habe zusammen mit der Familie \"Itadakimasu\" gesagt." }
  ]},
  { id: "v013", word: "ごちそうさまでした", reading: "ごちそうさまでした", meaning: "Danke fürs Essen (nach dem Essen)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "食べた後でごちそうさまでしたと言います。", reading: "たべたあとでごちそうさまでしたといいます。", de: "Nach dem Essen sagt man \"Gochisosama deshita\"." },
    { jp: "おいしかったです。ごちそうさまでした。", de: "Es war lecker. Danke für das Essen." }
  ]},
  { id: "v014", word: "おねがいします", reading: "おねがいします", meaning: "Bitte (Bitte um etwas)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "コーヒーをおねがいします。", de: "Einen Kaffee bitte." },
    { jp: "もう一度おねがいします。", reading: "もういちどおねがいします。", de: "Noch einmal bitte." }
  ]},
  { id: "v015", word: "どういたしまして", reading: "どういたしまして", meaning: "Bitte sehr / Gern geschehen", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「ありがとうございます。」「どういたしまして。」", de: "\"Vielen Dank.\" \"Gern geschehen.\"" },
    { jp: "どういたしまして、また来てください。", reading: "どういたしまして、またきてください。", de: "Gern geschehen, kommen Sie gerne wieder." }
  ]},
  { id: "v016", word: "はじめまして", reading: "はじめまして", meaning: "Angenehm / Freut mich", pos: "Ausdruck", level: "easy", examples: [
    { jp: "はじめまして、田中と申します。", reading: "はじめまして、たなかともうします。", de: "Angenehm, mein Name ist Tanaka." },
    { jp: "はじめまして、どうぞよろしく。", de: "Freut mich, Sie kennenzulernen." }
  ]},
  { id: "v017", word: "よろしくおねがいします", reading: "よろしくおねがいします", meaning: "Ich freue mich auf die Zusammenarbeit", pos: "Ausdruck", level: "easy", examples: [
    { jp: "はじめまして、よろしくおねがいします。", de: "Angenehm, ich freue mich auf die Zusammenarbeit." },
    { jp: "これからよろしくおねがいします。", de: "Ich freue mich auf gute Zusammenarbeit von nun an." }
  ]},

  // Zeit - Tage
  { id: "v018", word: "今日", reading: "きょう", meaning: "heute", pos: "Nomen", level: "easy", examples: [
    { jp: "今日は天気がいいです。", reading: "きょうはてんきがいいです。", de: "Heute ist das Wetter schön." },
    { jp: "今日、学校に行きます。", reading: "きょう、がっこうにいきます。", de: "Heute gehe ich zur Schule." }
  ]},
  { id: "v019", word: "明日", reading: "あした", meaning: "morgen", pos: "Nomen", level: "easy", examples: [
    { jp: "明日、友達に会います。", reading: "あした、ともだちにあいます。", de: "Morgen treffe ich einen Freund." },
    { jp: "明日は休みです。", reading: "あしたはやすみです。", de: "Morgen ist frei." }
  ]},
  { id: "v020", word: "昨日", reading: "きのう", meaning: "gestern", pos: "Nomen", level: "easy", examples: [
    { jp: "昨日、映画を見ました。", reading: "きのう、えいがをみました。", de: "Gestern habe ich einen Film gesehen." },
    { jp: "昨日は雨でした。", reading: "きのうはあめでした。", de: "Gestern hat es geregnet." }
  ]},
  { id: "v021", word: "今週", reading: "こんしゅう", meaning: "diese Woche", pos: "Nomen", level: "easy", examples: [
    { jp: "今週は忙しいです。", reading: "こんしゅうはいそがしいです。", de: "Diese Woche bin ich beschäftigt." },
    { jp: "今週、試験があります。", reading: "こんしゅう、しけんがあります。", de: "Diese Woche gibt es eine Prüfung." }
  ]},
  { id: "v022", word: "来週", reading: "らいしゅう", meaning: "nächste Woche", pos: "Nomen", level: "easy", examples: [
    { jp: "来週、旅行します。", reading: "らいしゅう、りょこうします。", de: "Nächste Woche reise ich." },
    { jp: "来週また来ます。", reading: "らいしゅうまたきます。", de: "Nächste Woche komme ich wieder." }
  ]},
  { id: "v023", word: "先週", reading: "せんしゅう", meaning: "letzte Woche", pos: "Nomen", level: "easy", examples: [
    { jp: "先週、本を買いました。", reading: "せんしゅう、ほんをかいました。", de: "Letzte Woche habe ich ein Buch gekauft." },
    { jp: "先週は寒かったです。", reading: "せんしゅうはさむかったです。", de: "Letzte Woche war es kalt." }
  ]},
  { id: "v024", word: "今月", reading: "こんげつ", meaning: "diesen Monat", pos: "Nomen", level: "easy", examples: [
    { jp: "今月、新しい仕事を始めます。", reading: "こんげつ、あたらしいしごとをはじめます。", de: "Diesen Monat fange ich eine neue Arbeit an." },
    { jp: "今月は忙しいです。", reading: "こんげつはいそがしいです。", de: "Diesen Monat bin ich beschäftigt." }
  ]},
  { id: "v025", word: "来月", reading: "らいげつ", meaning: "nächsten Monat", pos: "Nomen", level: "easy", examples: [
    { jp: "来月、日本に行きます。", reading: "らいげつ、にほんにいきます。", de: "Nächsten Monat fahre ich nach Japan." },
    { jp: "来月また会いましょう。", reading: "らいげつまたあいましょう。", de: "Treffen wir uns nächsten Monat wieder." }
  ]},
  { id: "v026", word: "先月", reading: "せんげつ", meaning: "letzten Monat", pos: "Nomen", level: "easy", examples: [
    { jp: "先月、新しい車を買いました。", reading: "せんげつ、あたらしいくるまをかいました。", de: "Letzten Monat habe ich ein neues Auto gekauft." },
    { jp: "先月は雨が多かったです。", reading: "せんげつはあめがおおかったです。", de: "Letzten Monat hat es viel geregnet." }
  ]},
  { id: "v027", word: "今年", reading: "ことし", meaning: "dieses Jahr", pos: "Nomen", level: "easy", examples: [
    { jp: "今年、大学を卒業します。", reading: "ことし、だいがくをそつぎょうします。", de: "Dieses Jahr schließe ich die Universität ab." },
    { jp: "今年の夏は暑いです。", reading: "ことしのなつはあついです。", de: "Der Sommer dieses Jahres ist heiß." }
  ]},
  { id: "v028", word: "来年", reading: "らいねん", meaning: "nächstes Jahr", pos: "Nomen", level: "easy", examples: [
    { jp: "来年、結婚します。", reading: "らいねん、けっこんします。", de: "Nächstes Jahr heirate ich." },
    { jp: "来年また会いましょう。", reading: "らいねんまたあいましょう。", de: "Treffen wir uns nächstes Jahr wieder." }
  ]},
  { id: "v029", word: "去年", reading: "きょねん", meaning: "letztes Jahr", pos: "Nomen", level: "easy", examples: [
    { jp: "去年、日本語を勉強し始めました。", reading: "きょねん、にほんごをべんきょうしはじめました。", de: "Letztes Jahr habe ich angefangen, Japanisch zu lernen." },
    { jp: "去年の冬は寒かったです。", reading: "きょねんのふゆはさむかったです。", de: "Der Winter letztes Jahr war kalt." }
  ]},
  { id: "v030", word: "朝", reading: "あさ", meaning: "Morgen / Vormittag", pos: "Nomen", level: "easy", examples: [
    { jp: "朝、コーヒーを飲みます。", reading: "あさ、コーヒーをのみます。", de: "Morgens trinke ich Kaffee." },
    { jp: "朝は早く起きます。", reading: "あさははやくおきます。", de: "Morgens stehe ich früh auf." }
  ]},
  { id: "v031", word: "昼", reading: "ひる", meaning: "Mittag / Mittagszeit", pos: "Nomen", level: "easy", examples: [
    { jp: "昼はラーメンを食べました。", reading: "ひるはラーメンをたべました。", de: "Zum Mittagessen habe ich Ramen gegessen." },
    { jp: "昼に友達と会います。", reading: "ひるにともだちとあいます。", de: "Mittags treffe ich einen Freund." }
  ]},
  { id: "v032", word: "夜", reading: "よる", meaning: "Abend / Nacht", pos: "Nomen", level: "easy", examples: [
    { jp: "夜、テレビを見ます。", reading: "よる、テレビをみます。", de: "Abends schaue ich Fernsehen." },
    { jp: "夜は早く寝ます。", reading: "よるははやくねます。", de: "Abends gehe ich früh schlafen." }
  ]},
  { id: "v033", word: "午前", reading: "ごぜん", meaning: "Vormittag (AM)", pos: "Nomen", level: "easy", examples: [
    { jp: "午前中に買い物をします。", reading: "ごぜんちゅうにかいものをします。", de: "Am Vormittag gehe ich einkaufen." },
    { jp: "午前九時に会議があります。", reading: "ごぜんくじにかいぎがあります。", de: "Um 9 Uhr morgens gibt es eine Besprechung." }
  ]},
  { id: "v034", word: "午後", reading: "ごご", meaning: "Nachmittag (PM)", pos: "Nomen", level: "easy", examples: [
    { jp: "午後、図書館で勉強します。", reading: "ごご、としょかんでべんきょうします。", de: "Nachmittags lerne ich in der Bibliothek." },
    { jp: "午後三時に来てください。", reading: "ごごさんじにきてください。", de: "Kommen Sie bitte um 15 Uhr." }
  ]},
  { id: "v035", word: "毎日", reading: "まいにち", meaning: "jeden Tag", pos: "Nomen/Adverb", level: "easy", examples: [
    { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Jeden Tag lerne ich Japanisch." },
    { jp: "毎日電車で会社に行きます。", reading: "まいにちでんしゃでかいしゃにいきます。", de: "Jeden Tag fahre ich mit dem Zug zur Arbeit." }
  ]},
  { id: "v036", word: "毎週", reading: "まいしゅう", meaning: "jede Woche", pos: "Nomen/Adverb", level: "easy", examples: [
    { jp: "毎週日曜日に公園に行きます。", reading: "まいしゅうにちようびにこうえんにいきます。", de: "Jeden Sonntag gehe ich in den Park." },
    { jp: "毎週スーパーで買い物をします。", reading: "まいしゅうスーパーでかいものをします。", de: "Jede Woche kaufe ich im Supermarkt ein." }
  ]},
  { id: "v037", word: "毎朝", reading: "まいあさ", meaning: "jeden Morgen", pos: "Nomen/Adverb", level: "easy", examples: [
    { jp: "毎朝ご飯を食べます。", reading: "まいあさごはんをたべます。", de: "Jeden Morgen esse ich Frühstück." },
    { jp: "毎朝七時に起きます。", reading: "まいあさしちじにおきます。", de: "Jeden Morgen stehe ich um 7 Uhr auf." }
  ]},
  { id: "v038", word: "今", reading: "いま", meaning: "jetzt / gerade", pos: "Nomen/Adverb", level: "easy", examples: [
    { jp: "今、何時ですか。", reading: "いま、なんじですか。", de: "Wie viel Uhr ist es jetzt?" },
    { jp: "今、勉強しています。", reading: "いま、べんきょうしています。", de: "Ich lerne gerade." }
  ]},

  // Wochentage
  { id: "v039", word: "月曜日", reading: "げつようび", meaning: "Montag", pos: "Nomen", level: "easy", examples: [
    { jp: "月曜日は学校があります。", reading: "げつようびはがっこうがあります。", de: "Am Montag habe ich Schule." },
    { jp: "月曜日に会議があります。", reading: "げつようびにかいぎがあります。", de: "Am Montag gibt es eine Besprechung." }
  ]},
  { id: "v040", word: "火曜日", reading: "かようび", meaning: "Dienstag", pos: "Nomen", level: "easy", examples: [
    { jp: "火曜日に日本語のクラスがあります。", reading: "かようびににほんごのクラスがあります。", de: "Dienstags habe ich Japanischunterricht." },
    { jp: "火曜日は忙しいです。", reading: "かようびはいそがしいです。", de: "Dienstags bin ich beschäftigt." }
  ]},
  { id: "v041", word: "水曜日", reading: "すいようび", meaning: "Mittwoch", pos: "Nomen", level: "easy", examples: [
    { jp: "水曜日は早く帰ります。", reading: "すいようびははやくかえります。", de: "Mittwochs gehe ich früh nach Hause." },
    { jp: "水曜日に図書館に行きます。", reading: "すいようびにとしょかんにいきます。", de: "Mittwochs gehe ich in die Bibliothek." }
  ]},
  { id: "v042", word: "木曜日", reading: "もくようび", meaning: "Donnerstag", pos: "Nomen", level: "easy", examples: [
    { jp: "木曜日に友達と映画を見ます。", reading: "もくようびにともだちとえいがをみます。", de: "Donnerstags schaue ich mit Freunden einen Film." },
    { jp: "木曜日は授業が多いです。", reading: "もくようびはじゅぎょうがおおいです。", de: "Donnerstags habe ich viele Stunden." }
  ]},
  { id: "v043", word: "金曜日", reading: "きんようび", meaning: "Freitag", pos: "Nomen", level: "easy", examples: [
    { jp: "金曜日の夜は楽しいです。", reading: "きんようびのよるはたのしいです。", de: "Der Freitagabend ist schön." },
    { jp: "金曜日に仕事が終わります。", reading: "きんようびにしごとがおわります。", de: "Freitags ist die Arbeit zu Ende." }
  ]},
  { id: "v044", word: "土曜日", reading: "どようび", meaning: "Samstag", pos: "Nomen", level: "easy", examples: [
    { jp: "土曜日に買い物をします。", reading: "どようびにかいものをします。", de: "Samstags gehe ich einkaufen." },
    { jp: "土曜日は休みです。", reading: "どようびはやすみです。", de: "Samstags habe ich frei." }
  ]},
  { id: "v045", word: "日曜日", reading: "にちようび", meaning: "Sonntag", pos: "Nomen", level: "easy", examples: [
    { jp: "日曜日に家族と公園に行きます。", reading: "にちようびにかぞくとこうえんにいきます。", de: "Sonntags gehe ich mit der Familie in den Park." },
    { jp: "日曜日はゆっくり休みます。", reading: "にちようびはゆっくりやすみます。", de: "Sonntags erhole ich mich in Ruhe." }
  ]},

  // Familie
  { id: "v046", word: "お父さん", reading: "おとうさん", meaning: "Vater (höflich / jemand anderes)", pos: "Nomen", level: "easy", examples: [
    { jp: "お父さんは会社員です。", reading: "おとうさんはかいしゃいんです。", de: "Mein Vater ist Büroangestellter." },
    { jp: "田中さんのお父さんは背が高いです。", reading: "たなかさんのおとうさんはせがたかいです。", de: "Herr Tanakas Vater ist groß." }
  ]},
  { id: "v047", word: "お母さん", reading: "おかあさん", meaning: "Mutter (höflich / jemand anderes)", pos: "Nomen", level: "easy", examples: [
    { jp: "お母さんは料理が上手です。", reading: "おかあさんはりょうりがじょうずです。", de: "Meine Mutter kocht sehr gut." },
    { jp: "お母さんと一緒に買い物をします。", reading: "おかあさんといっしょにかいものをします。", de: "Ich gehe mit meiner Mutter einkaufen." }
  ]},
  { id: "v048", word: "お兄さん", reading: "おにいさん", meaning: "älterer Bruder (höflich / jemand anderes)", pos: "Nomen", level: "easy", examples: [
    { jp: "お兄さんは大学生です。", reading: "おにいさんはだいがくせいです。", de: "Mein älterer Bruder ist Student." },
    { jp: "お兄さんに自転車を借りました。", reading: "おにいさんにじてんしゃをかりました。", de: "Ich habe mir vom älteren Bruder ein Fahrrad geliehen." }
  ]},
  { id: "v049", word: "お姉さん", reading: "おねえさん", meaning: "ältere Schwester (höflich / jemand anderes)", pos: "Nomen", level: "easy", examples: [
    { jp: "お姉さんは先生です。", reading: "おねえさんはせんせいです。", de: "Meine ältere Schwester ist Lehrerin." },
    { jp: "お姉さんと映画を見ました。", reading: "おねえさんとえいがをみました。", de: "Ich habe mit meiner älteren Schwester einen Film gesehen." }
  ]},
  { id: "v050", word: "弟", reading: "おとうと", meaning: "jüngerer Bruder (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "弟は小学生です。", reading: "おとうとはしょうがくせいです。", de: "Mein jüngerer Bruder geht in die Grundschule." },
    { jp: "弟と一緒に遊びます。", reading: "おとうとといっしょにあそびます。", de: "Ich spiele zusammen mit meinem jüngeren Bruder." }
  ]},
  { id: "v051", word: "妹", reading: "いもうと", meaning: "jüngere Schwester (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "妹はかわいいです。", reading: "いもうとはかわいいです。", de: "Meine jüngere Schwester ist süß." },
    { jp: "妹に本を読んであげます。", reading: "いもうとにほんをよんであげます。", de: "Ich lese meiner jüngeren Schwester ein Buch vor." }
  ]},
  { id: "v052", word: "子供", reading: "こども", meaning: "Kind / Kinder", pos: "Nomen", level: "easy", examples: [
    { jp: "子供は公園で遊んでいます。", reading: "こどもはこうえんであそんでいます。", de: "Die Kinder spielen im Park." },
    { jp: "子供の頃、よく泳ぎました。", reading: "こどものころ、よくおよぎました。", de: "Als Kind bin ich oft geschwommen." }
  ]},
  { id: "v053", word: "家族", reading: "かぞく", meaning: "Familie", pos: "Nomen", level: "easy", examples: [
    { jp: "家族と一緒にご飯を食べます。", reading: "かぞくといっしょにごはんをたべます。", de: "Ich esse zusammen mit meiner Familie." },
    { jp: "私の家族は四人です。", reading: "わたしのかぞくはよにんです。", de: "Meine Familie besteht aus vier Personen." }
  ]},
  { id: "v054", word: "友達", reading: "ともだち", meaning: "Freund / Freundin", pos: "Nomen", level: "easy", examples: [
    { jp: "友達と映画を見ました。", reading: "ともだちとえいがをみました。", de: "Ich habe mit einem Freund einen Film gesehen." },
    { jp: "友達にメールを送りました。", reading: "ともだちにメールをおくりました。", de: "Ich habe meiner Freundin eine E-Mail geschickt." }
  ]},
  { id: "v055", word: "夫", reading: "おっと", meaning: "Ehemann (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "夫は毎朝早く起きます。", reading: "おっとはまいあさはやくおきます。", de: "Mein Mann steht jeden Morgen früh auf." },
    { jp: "夫と一緒に買い物に行きます。", reading: "おっとといっしょにかいものにいきます。", de: "Ich gehe zusammen mit meinem Mann einkaufen." }
  ]},
  { id: "v056", word: "妻", reading: "つま", meaning: "Ehefrau (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "妻は料理が好きです。", reading: "つまはりょうりがすきです。", de: "Meine Frau kocht gerne." },
    { jp: "妻に花を買いました。", reading: "つまにはなをかいました。", de: "Ich habe meiner Frau Blumen gekauft." }
  ]},

  // Essen & Trinken
  { id: "v057", word: "ご飯", reading: "ごはん", meaning: "Reis / Mahlzeit / Essen", pos: "Nomen", level: "easy", examples: [
    { jp: "毎朝ご飯を食べます。", reading: "まいあさごはんをたべます。", de: "Jeden Morgen esse ich Reis." },
    { jp: "ご飯はもう食べましたか。", reading: "ごはんはもうたべましたか。", de: "Haben Sie schon gegessen?" }
  ]},
  { id: "v058", word: "パン", reading: "パン", meaning: "Brot", pos: "Nomen", level: "easy", examples: [
    { jp: "朝はパンを食べます。", reading: "あさはパンをたべます。", de: "Morgens esse ich Brot." },
    { jp: "スーパーでパンを買いました。", reading: "スーパーでパンをかいました。", de: "Ich habe im Supermarkt Brot gekauft." }
  ]},
  { id: "v059", word: "肉", reading: "にく", meaning: "Fleisch", pos: "Nomen", level: "easy", examples: [
    { jp: "肉が好きですか。", reading: "にくがすきですか。", de: "Mögen Sie Fleisch?" },
    { jp: "スーパーで肉を買いました。", reading: "スーパーでにくをかいました。", de: "Ich habe im Supermarkt Fleisch gekauft." }
  ]},
  { id: "v060", word: "魚", reading: "さかな", meaning: "Fisch", pos: "Nomen", level: "easy", examples: [
    { jp: "魚を食べるのが好きです。", reading: "さかなをたべるのがすきです。", de: "Ich esse gerne Fisch." },
    { jp: "日本人はよく魚を食べます。", reading: "にほんじんはよくさかなをたべます。", de: "Japaner essen oft Fisch." }
  ]},
  { id: "v061", word: "野菜", reading: "やさい", meaning: "Gemüse", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日野菜を食べます。", reading: "まいにちやさいをたべます。", de: "Jeden Tag esse ich Gemüse." },
    { jp: "野菜は体にいいです。", reading: "やさいはからだにいいです。", de: "Gemüse ist gut für den Körper." }
  ]},
  { id: "v062", word: "果物", reading: "くだもの", meaning: "Obst", pos: "Nomen", level: "easy", examples: [
    { jp: "果物が好きですか。", reading: "くだものがすきですか。", de: "Mögen Sie Obst?" },
    { jp: "毎日果物を食べます。", reading: "まいにちくだものをたべます。", de: "Jeden Tag esse ich Obst." }
  ]},
  { id: "v063", word: "水", reading: "みず", meaning: "Wasser", pos: "Nomen", level: "easy", examples: [
    { jp: "水を一杯ください。", reading: "みずをいっぱいください。", de: "Ein Glas Wasser bitte." },
    { jp: "毎日水をたくさん飲みます。", reading: "まいにちみずをたくさんのみます。", de: "Jeden Tag trinke ich viel Wasser." }
  ]},
  { id: "v064", word: "お茶", reading: "おちゃ", meaning: "Tee (japanischer)", pos: "Nomen", level: "easy", examples: [
    { jp: "お茶を一杯いただきます。", reading: "おちゃをいっぱいいただきます。", de: "Ich nehme eine Tasse Tee." },
    { jp: "日本ではよくお茶を飲みます。", reading: "にほんではよくおちゃをのみます。", de: "In Japan trinkt man oft Tee." }
  ]},
  { id: "v065", word: "コーヒー", reading: "コーヒー", meaning: "Kaffee", pos: "Nomen", level: "easy", examples: [
    { jp: "朝にコーヒーを飲みます。", reading: "あさにコーヒーをのみます。", de: "Morgens trinke ich Kaffee." },
    { jp: "コーヒーと紅茶、どちらがいいですか。", reading: "コーヒーとこうちゃ、どちらがいいですか。", de: "Möchten Sie Kaffee oder Tee?" }
  ]},
  { id: "v066", word: "ジュース", reading: "ジュース", meaning: "Saft / Fruchtsaft", pos: "Nomen", level: "easy", examples: [
    { jp: "りんごのジュースを飲みました。", reading: "りんごのジュースをのみました。", de: "Ich habe Apfelsaft getrunken." },
    { jp: "子供はジュースが好きです。", reading: "こどもはジュースがすきです。", de: "Kinder mögen Saft." }
  ]},
  { id: "v067", word: "お酒", reading: "おさけ", meaning: "Alkohol / Sake", pos: "Nomen", level: "easy", examples: [
    { jp: "お酒はあまり飲みません。", reading: "おさけはあまりのみません。", de: "Ich trinke nicht viel Alkohol." },
    { jp: "友達とお酒を飲みました。", reading: "ともだちとおさけをのみました。", de: "Ich habe mit Freunden Alkohol getrunken." }
  ]},
  { id: "v068", word: "牛乳", reading: "ぎゅうにゅう", meaning: "Milch", pos: "Nomen", level: "easy", examples: [
    { jp: "毎朝牛乳を飲みます。", reading: "まいあさぎゅうにゅうをのみます。", de: "Jeden Morgen trinke ich Milch." },
    { jp: "牛乳はスーパーで買います。", reading: "ぎゅうにゅうはスーパーでかいます。", de: "Milch kaufe ich im Supermarkt." }
  ]},
  { id: "v069", word: "卵", reading: "たまご", meaning: "Ei", pos: "Nomen", level: "easy", examples: [
    { jp: "朝ごはんに卵を食べます。", reading: "あさごはんにたまごをたべます。", de: "Zum Frühstück esse ich ein Ei." },
    { jp: "卵を三つ買ってください。", reading: "たまごをみっつかってください。", de: "Kaufen Sie bitte drei Eier." }
  ]},
  { id: "v070", word: "りんご", reading: "りんご", meaning: "Apfel", pos: "Nomen", level: "easy", examples: [
    { jp: "りんごが好きです。", de: "Ich mag Äpfel." },
    { jp: "りんごを一つ食べました。", reading: "りんごをひとつたべました。", de: "Ich habe einen Apfel gegessen." }
  ]},
  { id: "v071", word: "バナナ", reading: "バナナ", meaning: "Banane", pos: "Nomen", level: "easy", examples: [
    { jp: "バナナを毎日食べます。", reading: "バナナをまいにちたべます。", de: "Jeden Tag esse ich eine Banane." },
    { jp: "バナナは甘くておいしいです。", reading: "バナナはあまくておいしいです。", de: "Bananen sind süß und lecker." }
  ]},
  { id: "v072", word: "みかん", reading: "みかん", meaning: "Mandarine / Clementine", pos: "Nomen", level: "easy", examples: [
    { jp: "冬にみかんをよく食べます。", reading: "ふゆにみかんをよくたべます。", de: "Im Winter esse ich oft Mandarinen." },
    { jp: "みかんを三つ買いました。", reading: "みかんをみっつかいました。", de: "Ich habe drei Mandarinen gekauft." }
  ]},
  { id: "v073", word: "寿司", reading: "すし", meaning: "Sushi", pos: "Nomen", level: "easy", examples: [
    { jp: "寿司が大好きです。", reading: "すしがだいすきです。", de: "Ich liebe Sushi." },
    { jp: "友達と寿司を食べに行きました。", reading: "ともだちとすしをたべにいきました。", de: "Ich bin mit Freunden Sushi essen gegangen." }
  ]},
  { id: "v074", word: "ラーメン", reading: "ラーメン", meaning: "Ramen (Nudelsuppe)", pos: "Nomen", level: "easy", examples: [
    { jp: "昼にラーメンを食べました。", reading: "ひるにラーメンをたべました。", de: "Zum Mittagessen habe ich Ramen gegessen." },
    { jp: "このラーメンはとてもおいしいです。", de: "Diese Ramen sind sehr lecker." }
  ]},
  { id: "v075", word: "天ぷら", reading: "てんぷら", meaning: "Tempura", pos: "Nomen", level: "adv", examples: [
    { jp: "天ぷらは好きですか。", reading: "てんぷらはすきですか。", de: "Mögen Sie Tempura?" },
    { jp: "野菜の天ぷらを食べました。", reading: "やさいのてんぷらをたべました。", de: "Ich habe Gemüsetempura gegessen." }
  ]},
  { id: "v076", word: "味噌汁", reading: "みそしる", meaning: "Misosuppe", pos: "Nomen", level: "adv", examples: [
    { jp: "朝ごはんに味噌汁を飲みます。", reading: "あさごはんにみそしるをのみます。", de: "Zum Frühstück trinke ich Misosuppe." },
    { jp: "味噌汁はおいしいです。", reading: "みそしるはおいしいです。", de: "Misosuppe ist lecker." }
  ]},

  // Orte & Gebäude
  { id: "v077", word: "学校", reading: "がっこう", meaning: "Schule", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日学校に行きます。", reading: "まいにちがっこうにいきます。", de: "Jeden Tag gehe ich zur Schule." },
    { jp: "学校は九時に始まります。", reading: "がっこうはくじにはじまります。", de: "Die Schule beginnt um 9 Uhr." }
  ]},
  { id: "v078", word: "大学", reading: "だいがく", meaning: "Universität", pos: "Nomen", level: "easy", examples: [
    { jp: "大学で日本語を勉強しています。", reading: "だいがくでにほんごをべんきょうしています。", de: "Ich studiere Japanisch an der Universität." },
    { jp: "兄は大学生です。", reading: "あにはだいがくせいです。", de: "Mein älterer Bruder ist Student." }
  ]},
  { id: "v079", word: "会社", reading: "かいしゃ", meaning: "Firma / Büro / Unternehmen", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日会社に電車で行きます。", reading: "まいにちかいしゃにでんしゃでいきます。", de: "Jeden Tag fahre ich mit dem Zug zur Firma." },
    { jp: "会社は八時に始まります。", reading: "かいしゃははちじにはじまります。", de: "Die Arbeit beginnt um 8 Uhr." }
  ]},
  { id: "v080", word: "病院", reading: "びょういん", meaning: "Krankenhaus", pos: "Nomen", level: "adv", examples: [
    { jp: "病院に行きました。", reading: "びょういんにいきました。", de: "Ich bin ins Krankenhaus gegangen." },
    { jp: "病院はどこですか。", reading: "びょういんはどこですか。", de: "Wo ist das Krankenhaus?" }
  ]},
  { id: "v081", word: "銀行", reading: "ぎんこう", meaning: "Bank", pos: "Nomen", level: "adv", examples: [
    { jp: "銀行でお金を下ろします。", reading: "ぎんこうでおかねをおろします。", de: "Ich hebe bei der Bank Geld ab." },
    { jp: "銀行は何時まで開いていますか。", reading: "ぎんこうはなんじまであいていますか。", de: "Bis wie viel Uhr hat die Bank geöffnet?" }
  ]},
  { id: "v082", word: "郵便局", reading: "ゆうびんきょく", meaning: "Post(amt)", pos: "Nomen", level: "adv", examples: [
    { jp: "郵便局で手紙を送りました。", reading: "ゆうびんきょくでてがみをおくりました。", de: "Ich habe auf dem Postamt einen Brief geschickt." },
    { jp: "郵便局はどこですか。", reading: "ゆうびんきょくはどこですか。", de: "Wo ist das Postamt?" }
  ]},
  { id: "v083", word: "駅", reading: "えき", meaning: "Bahnhof", pos: "Nomen", level: "easy", examples: [
    { jp: "駅まで歩きます。", reading: "えきまであるきます。", de: "Ich gehe zum Bahnhof zu Fuß." },
    { jp: "駅の前で待っています。", reading: "えきのまえでまっています。", de: "Ich warte vor dem Bahnhof." }
  ]},
  { id: "v084", word: "スーパー", reading: "スーパー", meaning: "Supermarkt", pos: "Nomen", level: "easy", examples: [
    { jp: "スーパーで野菜を買います。", reading: "スーパーでやさいをかいます。", de: "Ich kaufe Gemüse im Supermarkt." },
    { jp: "近くにスーパーがあります。", reading: "ちかくにスーパーがあります。", de: "In der Nähe gibt es einen Supermarkt." }
  ]},
  { id: "v085", word: "レストラン", reading: "レストラン", meaning: "Restaurant", pos: "Nomen", level: "easy", examples: [
    { jp: "友達とレストランで食べました。", reading: "ともだちとレストランでたべました。", de: "Ich habe mit Freunden im Restaurant gegessen." },
    { jp: "このレストランはおいしいです。", de: "Dieses Restaurant ist lecker." }
  ]},
  { id: "v086", word: "ホテル", reading: "ホテル", meaning: "Hotel", pos: "Nomen", level: "adv", examples: [
    { jp: "ホテルに泊まりました。", reading: "ホテルにとまりました。", de: "Ich habe im Hotel übernachtet." },
    { jp: "このホテルはきれいです。", de: "Dieses Hotel ist schön." }
  ]},
  { id: "v087", word: "家", reading: "いえ / うち", meaning: "Haus / Zuhause", pos: "Nomen", level: "easy", examples: [
    { jp: "家に帰ります。", reading: "いえにかえります。", de: "Ich gehe nach Hause." },
    { jp: "私の家は駅の近くです。", reading: "わたしのいえはえきのちかくです。", de: "Mein Haus ist in der Nähe des Bahnhofs." }
  ]},
  { id: "v088", word: "部屋", reading: "へや", meaning: "Zimmer / Raum", pos: "Nomen", level: "easy", examples: [
    { jp: "私の部屋は小さいです。", reading: "わたしのへやはちいさいです。", de: "Mein Zimmer ist klein." },
    { jp: "部屋をきれいにします。", reading: "へやをきれいにします。", de: "Ich mache das Zimmer sauber." }
  ]},
  { id: "v089", word: "トイレ", reading: "トイレ", meaning: "Toilette / WC", pos: "Nomen", level: "easy", examples: [
    { jp: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    { jp: "トイレに行ってもいいですか。", reading: "トイレにいってもいいですか。", de: "Darf ich auf die Toilette gehen?" }
  ]},
  { id: "v090", word: "図書館", reading: "としょかん", meaning: "Bibliothek", pos: "Nomen", level: "easy", examples: [
    { jp: "図書館で本を読みます。", reading: "としょかんでほんをよみます。", de: "In der Bibliothek lese ich Bücher." },
    { jp: "図書館は静かです。", reading: "としょかんはしずかです。", de: "Die Bibliothek ist ruhig." }
  ]},
  { id: "v091", word: "公園", reading: "こうえん", meaning: "Park", pos: "Nomen", level: "easy", examples: [
    { jp: "公園で散歩します。", reading: "こうえんでさんぽします。", de: "Im Park mache ich einen Spaziergang." },
    { jp: "子供たちは公園で遊んでいます。", reading: "こどもたちはこうえんであそんでいます。", de: "Die Kinder spielen im Park." }
  ]},

  // Transport
  { id: "v092", word: "電車", reading: "でんしゃ", meaning: "Zug / S-Bahn / Stadtbahn", pos: "Nomen", level: "easy", examples: [
    { jp: "電車で学校に行きます。", reading: "でんしゃでがっこうにいきます。", de: "Ich fahre mit dem Zug zur Schule." },
    { jp: "電車は便利です。", reading: "でんしゃはべんりです。", de: "Der Zug ist praktisch." }
  ]},
  { id: "v093", word: "バス", reading: "バス", meaning: "Bus", pos: "Nomen", level: "easy", examples: [
    { jp: "バスで駅まで行きます。", reading: "バスでえきまでいきます。", de: "Ich fahre mit dem Bus zum Bahnhof." },
    { jp: "バスは何時に来ますか。", reading: "バスはなんじにきますか。", de: "Wann kommt der Bus?" }
  ]},
  { id: "v094", word: "タクシー", reading: "タクシー", meaning: "Taxi", pos: "Nomen", level: "adv", examples: [
    { jp: "タクシーでホテルに行きました。", reading: "タクシーでホテルにいきました。", de: "Ich bin mit dem Taxi zum Hotel gefahren." },
    { jp: "タクシーを呼んでください。", reading: "タクシーをよんでください。", de: "Rufen Sie bitte ein Taxi." }
  ]},
  { id: "v095", word: "地下鉄", reading: "ちかてつ", meaning: "U-Bahn", pos: "Nomen", level: "adv", examples: [
    { jp: "地下鉄で会社に行きます。", reading: "ちかてつでかいしゃにいきます。", de: "Ich fahre mit der U-Bahn zur Arbeit." },
    { jp: "地下鉄は速いです。", reading: "ちかてつははやいです。", de: "Die U-Bahn ist schnell." }
  ]},
  { id: "v096", word: "車", reading: "くるま", meaning: "Auto / Fahrzeug", pos: "Nomen", level: "easy", examples: [
    { jp: "車で買い物に行きます。", reading: "くるまでかいものにいきます。", de: "Ich fahre mit dem Auto einkaufen." },
    { jp: "新しい車を買いました。", reading: "あたらしいくるまをかいました。", de: "Ich habe ein neues Auto gekauft." }
  ]},
  { id: "v097", word: "自転車", reading: "じてんしゃ", meaning: "Fahrrad", pos: "Nomen", level: "easy", examples: [
    { jp: "自転車で学校に行きます。", reading: "じてんしゃでがっこうにいきます。", de: "Ich fahre mit dem Fahrrad zur Schule." },
    { jp: "自転車は健康にいいです。", reading: "じてんしゃはけんこうにいいです。", de: "Fahrradfahren ist gut für die Gesundheit." }
  ]},
  { id: "v098", word: "飛行機", reading: "ひこうき", meaning: "Flugzeug", pos: "Nomen", level: "adv", examples: [
    { jp: "飛行機で日本に行きます。", reading: "ひこうきでにほんにいきます。", de: "Ich fliege mit dem Flugzeug nach Japan." },
    { jp: "飛行機は速いですが、高いです。", reading: "ひこうきははやいですが、たかいです。", de: "Das Flugzeug ist schnell, aber teuer." }
  ]},
  { id: "v099", word: "船", reading: "ふね", meaning: "Schiff / Boot", pos: "Nomen", level: "adv", examples: [
    { jp: "船で島に行きました。", reading: "ふねでしまにいきました。", de: "Ich bin mit dem Schiff zur Insel gefahren." },
    { jp: "船に乗るのは楽しいです。", reading: "ふねにのるのはたのしいです。", de: "Mit dem Schiff zu fahren macht Spaß." }
  ]},

  // Gegenstände & Alltag
  { id: "v100", word: "本", reading: "ほん", meaning: "Buch", pos: "Nomen", level: "easy", examples: [
    { jp: "図書館で本を借りました。", reading: "としょかんでほんをかりました。", de: "Ich habe in der Bibliothek ein Buch ausgeliehen." },
    { jp: "毎日本を読みます。", reading: "まいにちほんをよみます。", de: "Jeden Tag lese ich ein Buch." }
  ]},
  { id: "v101", word: "新聞", reading: "しんぶん", meaning: "Zeitung", pos: "Nomen", level: "easy", examples: [
    { jp: "毎朝新聞を読みます。", reading: "まいあさしんぶんをよみます。", de: "Jeden Morgen lese ich die Zeitung." },
    { jp: "父は新聞が好きです。", reading: "ちちはしんぶんがすきです。", de: "Mein Vater liest gerne Zeitung." }
  ]},
  { id: "v102", word: "雑誌", reading: "ざっし", meaning: "Zeitschrift / Magazin", pos: "Nomen", level: "adv", examples: [
    { jp: "雑誌を読んでいます。", reading: "ざっしをよんでいます。", de: "Ich lese eine Zeitschrift." },
    { jp: "電車の中で雑誌を読みます。", reading: "でんしゃのなかでざっしをよみます。", de: "Im Zug lese ich Zeitschriften." }
  ]},
  { id: "v103", word: "手紙", reading: "てがみ", meaning: "Brief", pos: "Nomen", level: "easy", examples: [
    { jp: "友達に手紙を書きました。", reading: "ともだちにてがみをかきました。", de: "Ich habe meinem Freund einen Brief geschrieben." },
    { jp: "郵便局で手紙を送りました。", reading: "ゆうびんきょくでてがみをおくりました。", de: "Ich habe auf dem Postamt einen Brief abgeschickt." }
  ]},
  { id: "v104", word: "電話", reading: "でんわ", meaning: "Telefon", pos: "Nomen", level: "easy", examples: [
    { jp: "電話で話しました。", reading: "でんわではなしました。", de: "Ich habe telefoniert." },
    { jp: "電話番号を教えてください。", reading: "でんわばんごうをおしえてください。", de: "Geben Sie mir bitte Ihre Telefonnummer." }
  ]},
  { id: "v105", word: "テレビ", reading: "テレビ", meaning: "Fernseher", pos: "Nomen", level: "easy", examples: [
    { jp: "夜にテレビを見ます。", reading: "よるにテレビをみます。", de: "Abends schaue ich Fernsehen." },
    { jp: "このテレビは大きいです。", reading: "このテレビはおおきいです。", de: "Dieser Fernseher ist groß." }
  ]},
  { id: "v106", word: "かばん", reading: "かばん", meaning: "Tasche / Koffer", pos: "Nomen", level: "easy", examples: [
    { jp: "かばんの中に本があります。", reading: "かばんのなかにほんがあります。", de: "In der Tasche ist ein Buch." },
    { jp: "新しいかばんを買いました。", reading: "あたらしいかばんをかいました。", de: "Ich habe eine neue Tasche gekauft." }
  ]},
  { id: "v107", word: "財布", reading: "さいふ", meaning: "Geldbörse / Portemonnaie", pos: "Nomen", level: "easy", examples: [
    { jp: "財布を忘れました。", reading: "さいふをわすれました。", de: "Ich habe meine Geldbörse vergessen." },
    { jp: "財布の中にお金がありません。", reading: "さいふのなかにおかねがありません。", de: "In meiner Geldbörse ist kein Geld." }
  ]},
  { id: "v108", word: "時計", reading: "とけい", meaning: "Uhr / Armbanduhr", pos: "Nomen", level: "easy", examples: [
    { jp: "時計を見てください。", reading: "とけいをみてください。", de: "Schauen Sie auf die Uhr." },
    { jp: "この時計は高いです。", reading: "このとけいはたかいです。", de: "Diese Uhr ist teuer." }
  ]},
  { id: "v109", word: "眼鏡", reading: "めがね", meaning: "Brille", pos: "Nomen", level: "easy", examples: [
    { jp: "眼鏡をかけています。", reading: "めがねをかけています。", de: "Ich trage eine Brille." },
    { jp: "眼鏡がどこにありますか。", reading: "めがねがどこにありますか。", de: "Wo ist meine Brille?" }
  ]},
  { id: "v110", word: "鍵", reading: "かぎ", meaning: "Schlüssel", pos: "Nomen", level: "easy", examples: [
    { jp: "鍵を忘れました。", reading: "かぎをわすれました。", de: "Ich habe den Schlüssel vergessen." },
    { jp: "鍵はかばんの中にあります。", reading: "かぎはかばんのなかにあります。", de: "Der Schlüssel ist in der Tasche." }
  ]},
  { id: "v111", word: "服", reading: "ふく", meaning: "Kleidung", pos: "Nomen", level: "easy", examples: [
    { jp: "新しい服を買いました。", reading: "あたらしいふくをかいました。", de: "Ich habe neue Kleidung gekauft." },
    { jp: "今日はどんな服を着ますか。", reading: "きょうはどんなふくをきますか。", de: "Was ziehen Sie heute an?" }
  ]},
  { id: "v112", word: "靴", reading: "くつ", meaning: "Schuhe", pos: "Nomen", level: "easy", examples: [
    { jp: "新しい靴を買いました。", reading: "あたらしいくつをかいました。", de: "Ich habe neue Schuhe gekauft." },
    { jp: "靴を脱いでください。", reading: "くつをぬいでください。", de: "Bitte ziehen Sie die Schuhe aus." }
  ]},
  { id: "v113", word: "傘", reading: "かさ", meaning: "Regenschirm", pos: "Nomen", level: "easy", examples: [
    { jp: "雨が降っているので傘を持っていきます。", reading: "あめがふっているのでかさをもっていきます。", de: "Es regnet, also nehme ich einen Regenschirm mit." },
    { jp: "傘を忘れました。", reading: "かさをわすれました。", de: "Ich habe den Regenschirm vergessen." }
  ]},
  { id: "v114", word: "机", reading: "つくえ", meaning: "Schreibtisch", pos: "Nomen", level: "easy", examples: [
    { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Schreibtisch liegt ein Buch." },
    { jp: "机で勉強します。", reading: "つくえでべんきょうします。", de: "Ich lerne am Schreibtisch." }
  ]},
  { id: "v115", word: "椅子", reading: "いす", meaning: "Stuhl", pos: "Nomen", level: "easy", examples: [
    { jp: "椅子に座ってください。", reading: "いすにすわってください。", de: "Bitte setzen Sie sich auf den Stuhl." },
    { jp: "椅子が三つあります。", reading: "いすがみっつあります。", de: "Es gibt drei Stühle." }
  ]},
  { id: "v116", word: "窓", reading: "まど", meaning: "Fenster", pos: "Nomen", level: "easy", examples: [
    { jp: "窓を開けてください。", reading: "まどをあけてください。", de: "Bitte öffnen Sie das Fenster." },
    { jp: "窓から富士山が見えます。", reading: "まどからふじさんがみえます。", de: "Vom Fenster aus kann man den Fuji sehen." }
  ]},
  { id: "v117", word: "ドア", reading: "ドア", meaning: "Tür", pos: "Nomen", level: "easy", examples: [
    { jp: "ドアを閉めてください。", reading: "ドアをしめてください。", de: "Bitte schließen Sie die Tür." },
    { jp: "ドアの前で待っています。", reading: "ドアのまえでまっています。", de: "Ich warte vor der Tür." }
  ]},
  { id: "v118", word: "写真", reading: "しゃしん", meaning: "Foto / Bild", pos: "Nomen", level: "easy", examples: [
    { jp: "写真を撮ってもいいですか。", reading: "しゃしんをとってもいいですか。", de: "Darf ich ein Foto machen?" },
    { jp: "家族の写真があります。", reading: "かぞくのしゃしんがあります。", de: "Ich habe ein Familienfoto." }
  ]},

  // i-Adjektive
  { id: "v119", word: "大きい", reading: "おおきい", meaning: "groß", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この犬はとても大きいです。", reading: "このいぬはとてもおおきいです。", de: "Dieser Hund ist sehr groß." },
    { jp: "大きいかばんを買いました。", reading: "おおきいかばんをかいました。", de: "Ich habe eine große Tasche gekauft." }
  ]},
  { id: "v120", word: "小さい", reading: "ちいさい", meaning: "klein", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "私の部屋は小さいです。", reading: "わたしのへやはちいさいです。", de: "Mein Zimmer ist klein." },
    { jp: "小さい猫がいます。", reading: "ちいさいねこがいます。", de: "Es gibt eine kleine Katze." }
  ]},
  { id: "v121", word: "高い", reading: "たかい", meaning: "hoch / teuer", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この山は高いです。", reading: "このやまはたかいです。", de: "Dieser Berg ist hoch." },
    { jp: "このレストランは高いです。", reading: "このレストランはたかいです。", de: "Dieses Restaurant ist teuer." }
  ]},
  { id: "v122", word: "安い", reading: "やすい", meaning: "billig / günstig", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "このスーパーは安いです。", reading: "このスーパーはやすいです。", de: "Dieser Supermarkt ist günstig." },
    { jp: "安いホテルを探しています。", reading: "やすいホテルをさがしています。", de: "Ich suche ein günstiges Hotel." }
  ]},
  { id: "v123", word: "新しい", reading: "あたらしい", meaning: "neu", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "新しい服を買いました。", reading: "あたらしいふくをかいました。", de: "Ich habe neue Kleidung gekauft." },
    { jp: "新しい学校はどうですか。", reading: "あたらしいがっこうはどうですか。", de: "Wie ist die neue Schule?" }
  ]},
  { id: "v124", word: "古い", reading: "ふるい", meaning: "alt (Dinge)", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この建物は古いです。", reading: "このたてものはふるいです。", de: "Dieses Gebäude ist alt." },
    { jp: "古い本を読みました。", reading: "ふるいほんをよみました。", de: "Ich habe ein altes Buch gelesen." }
  ]},
  { id: "v125", word: "長い", reading: "ながい", meaning: "lang", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この川は長いです。", reading: "このかわはながいです。", de: "Dieser Fluss ist lang." },
    { jp: "長い時間待ちました。", reading: "ながいじかんまちました。", de: "Ich habe lange gewartet." }
  ]},
  { id: "v126", word: "短い", reading: "みじかい", meaning: "kurz", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この映画は短いです。", reading: "このえいがはみじかいです。", de: "Dieser Film ist kurz." },
    { jp: "短い手紙を書きました。", reading: "みじかいてがみをかきました。", de: "Ich habe einen kurzen Brief geschrieben." }
  ]},
  { id: "v127", word: "速い", reading: "はやい", meaning: "schnell", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "電車はバスより速いです。", reading: "でんしゃはバスよりはやいです。", de: "Der Zug ist schneller als der Bus." },
    { jp: "速い車ですね。", reading: "はやいくるまですね。", de: "Das ist ein schnelles Auto." }
  ]},
  { id: "v128", word: "遅い", reading: "おそい", meaning: "langsam / spät", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今日は少し遅いですね。", reading: "きょうはすこしおそいですね。", de: "Heute sind Sie etwas spät." },
    { jp: "このバスは遅いです。", reading: "このバスはおそいです。", de: "Dieser Bus ist langsam." }
  ]},
  { id: "v129", word: "多い", reading: "おおい", meaning: "viele / viel", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "東京は人が多いです。", reading: "とうきょうはひとがおおいです。", de: "In Tokio gibt es viele Menschen." },
    { jp: "今日は仕事が多いです。", reading: "きょうはしごとがおおいです。", de: "Heute habe ich viel Arbeit." }
  ]},
  { id: "v130", word: "少ない", reading: "すくない", meaning: "wenige / wenig", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今日は客が少ないです。", reading: "きょうはきゃくがすくないです。", de: "Heute gibt es wenige Kunden." },
    { jp: "時間が少ないです。", reading: "じかんがすくないです。", de: "Es ist wenig Zeit." }
  ]},
  { id: "v131", word: "いい / 良い", reading: "いい / よい", meaning: "gut", pos: "i-Adjektiv (unregelmäßig)", level: "easy", examples: [
    { jp: "今日はいい天気です。", reading: "きょうはいいてんきです。", de: "Heute ist schönes Wetter." },
    { jp: "この映画はいいですよ。", reading: "このえいがはいいですよ。", de: "Dieser Film ist gut." }
  ]},
  { id: "v132", word: "悪い", reading: "わるい", meaning: "schlecht / böse", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今日は天気が悪いです。", reading: "きょうはてんきがわるいです。", de: "Heute ist das Wetter schlecht." },
    { jp: "体の調子が悪いです。", reading: "からだのちょうしがわるいです。", de: "Mir geht es nicht gut." }
  ]},
  { id: "v133", word: "面白い", reading: "おもしろい", meaning: "interessant / lustig", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この本はとても面白いです。", reading: "このほんはとてもおもしろいです。", de: "Dieses Buch ist sehr interessant." },
    { jp: "面白い映画を見ました。", reading: "おもしろいえいがをみました。", de: "Ich habe einen lustigen Film gesehen." }
  ]},
  { id: "v134", word: "つまらない", reading: "つまらない", meaning: "langweilig / uninteressant", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この映画はつまらないです。", reading: "このえいがはつまらないです。", de: "Dieser Film ist langweilig." },
    { jp: "今日はつまらない一日でした。", reading: "きょうはつまらないいちにちでした。", de: "Heute war ein langweiliger Tag." }
  ]},
  { id: "v135", word: "楽しい", reading: "たのしい", meaning: "spaßig / schön / fröhlich", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "パーティーはとても楽しかったです。", reading: "パーティーはとてもたのしかったです。", de: "Die Party war sehr schön." },
    { jp: "友達と遊ぶのは楽しいです。", reading: "ともだちとあそぶのはたのしいです。", de: "Mit Freunden zu spielen macht Spaß." }
  ]},
  { id: "v136", word: "難しい", reading: "むずかしい", meaning: "schwierig / schwer", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この問題は難しいです。", reading: "このもんだいはむずかしいです。", de: "Diese Aufgabe ist schwierig." },
    { jp: "日本語は難しいですか。", reading: "にほんごはむずかしいですか。", de: "Ist Japanisch schwer?" }
  ]},
  { id: "v137", word: "易しい", reading: "やさしい", meaning: "leicht / einfach", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この問題は易しいです。", reading: "このもんだいはやさしいです。", de: "Diese Aufgabe ist einfach." },
    { jp: "易しい本から読み始めました。", reading: "やさしいほんからよみはじめました。", de: "Ich habe mit einfachen Büchern angefangen zu lesen." }
  ]},
  { id: "v138", word: "暑い", reading: "あつい", meaning: "heiß (Wetter/Luft)", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今日はとても暑いです。", reading: "きょうはとてもあついです。", de: "Heute ist es sehr heiß." },
    { jp: "夏は暑いので、水をたくさん飲みます。", reading: "なつはあついので、みずをたくさんのみます。", de: "Im Sommer ist es heiß, also trinke ich viel Wasser." }
  ]},
  { id: "v139", word: "寒い", reading: "さむい", meaning: "kalt (Wetter/Luft)", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今日は寒いですね。", reading: "きょうはさむいですね。", de: "Heute ist es kalt, nicht wahr?" },
    { jp: "冬は寒いので、コートを着ます。", reading: "ふゆはさむいので、コートをきます。", de: "Im Winter ist es kalt, also ziehe ich einen Mantel an." }
  ]},
  { id: "v140", word: "暖かい", reading: "あたたかい", meaning: "warm", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "春は暖かいです。", reading: "はるはあたたかいです。", de: "Im Frühling ist es warm." },
    { jp: "このスープは暖かいです。", reading: "このスープはあたたかいです。", de: "Diese Suppe ist warm." }
  ]},
  { id: "v141", word: "涼しい", reading: "すずしい", meaning: "kühl (angenehm)", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "秋は涼しくて気持ちいいです。", reading: "あきはすずしくてきもちいいです。", de: "Im Herbst ist es angenehm kühl." },
    { jp: "今日は涼しいですね。", reading: "きょうはすずしいですね。", de: "Heute ist es kühl, nicht wahr?" }
  ]},
  { id: "v142", word: "辛い", reading: "からい", meaning: "scharf / pikant", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この料理は辛いです。", reading: "このりょうりはからいです。", de: "Dieses Gericht ist scharf." },
    { jp: "辛い食べ物は好きですか。", reading: "からいたべものはすきですか。", de: "Mögen Sie scharfes Essen?" }
  ]},
  { id: "v143", word: "甘い", reading: "あまい", meaning: "süß", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "このケーキはとても甘いです。", reading: "このケーキはとてもあまいです。", de: "Dieser Kuchen ist sehr süß." },
    { jp: "甘いものが好きです。", reading: "あまいものがすきです。", de: "Ich mag süße Sachen." }
  ]},
  { id: "v144", word: "美味しい", reading: "おいしい", meaning: "lecker / schmackhaft", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "このラーメンはとてもおいしいです。", de: "Diese Ramen sind sehr lecker." },
    { jp: "お母さんの料理はおいしいです。", reading: "おかあさんのりょうりはおいしいです。", de: "Das Essen meiner Mutter ist lecker." }
  ]},
  { id: "v145", word: "まずい", reading: "まずい", meaning: "nicht lecker / schlecht schmecken", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この料理はまずいです。", reading: "このりょうりはまずいです。", de: "Dieses Gericht schmeckt nicht gut." },
    { jp: "まずい薬を飲みました。", reading: "まずいくすりをのみました。", de: "Ich habe eine bittere Medizin genommen." }
  ]},
  { id: "v146", word: "嬉しい", reading: "うれしい", meaning: "froh / erfreut", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "プレゼントをもらって嬉しいです。", reading: "プレゼントをもらってうれしいです。", de: "Ich freue mich, ein Geschenk bekommen zu haben." },
    { jp: "合格して嬉しいです。", reading: "ごうかくしてうれしいです。", de: "Ich bin froh, bestanden zu haben." }
  ]},
  { id: "v147", word: "悲しい", reading: "かなしい", meaning: "traurig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "悲しい映画を見ました。", reading: "かなしいえいがをみました。", de: "Ich habe einen traurigen Film gesehen." },
    { jp: "友達が引っ越して悲しいです。", reading: "ともだちがひっこしてかなしいです。", de: "Ich bin traurig, dass mein Freund umgezogen ist." }
  ]},
  { id: "v148", word: "痛い", reading: "いたい", meaning: "schmerzhaft / es tut weh", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "頭が痛いです。", reading: "あたまがいたいです。", de: "Ich habe Kopfschmerzen." },
    { jp: "足が痛いので、病院に行きます。", reading: "あしがいたいので、びょういんにいきます。", de: "Mein Bein tut weh, also gehe ich ins Krankenhaus." }
  ]},
  { id: "v149", word: "眠い", reading: "ねむい", meaning: "schläfrig / müde", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "今日は眠いです。", reading: "きょうはねむいです。", de: "Heute bin ich schläfrig." },
    { jp: "眠いので、もう寝ます。", reading: "ねむいので、もうねます。", de: "Ich bin müde, also gehe ich jetzt schlafen." }
  ]},
  { id: "v150", word: "忙しい", reading: "いそがしい", meaning: "beschäftigt / busy", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "今週は忙しいです。", reading: "こんしゅうはいそがしいです。", de: "Diese Woche bin ich sehr beschäftigt." },
    { jp: "忙しくて食事の時間がありません。", reading: "いそがしくてしょくじのじかんがありません。", de: "Ich bin so beschäftigt, dass ich keine Zeit zum Essen habe." }
  ]},
  { id: "v151", word: "怖い", reading: "こわい", meaning: "beängstigend / Angst einflößend", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "怖い映画は見ません。", reading: "こわいえいがはみません。", de: "Ich schaue keine Horrorfilme." },
    { jp: "犬が怖いです。", reading: "いぬがこわいです。", de: "Ich habe Angst vor Hunden." }
  ]},
  { id: "v152", word: "広い", reading: "ひろい", meaning: "weit / geräumig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この部屋はとても広いです。", reading: "このへやはとてもひろいです。", de: "Dieses Zimmer ist sehr geräumig." },
    { jp: "広い公園で遊びます。", reading: "ひろいこうえんであそびます。", de: "Ich spiele in einem großen Park." }
  ]},
  { id: "v153", word: "狭い", reading: "せまい", meaning: "eng / schmal", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この道は狭いです。", reading: "このみちはせまいです。", de: "Diese Straße ist eng." },
    { jp: "部屋が狭いので、荷物を置く場所がありません。", reading: "へやがせまいので、にもつをおくばしょがありません。", de: "Das Zimmer ist klein, also gibt es keinen Platz für Gepäck." }
  ]},
  { id: "v154", word: "重い", reading: "おもい", meaning: "schwer (Gewicht)", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "このかばんはとても重いです。", reading: "このかばんはとてもおもいです。", de: "Diese Tasche ist sehr schwer." },
    { jp: "重い荷物を持ちました。", reading: "おもいにもつをもちました。", de: "Ich habe schweres Gepäck getragen." }
  ]},
  { id: "v155", word: "軽い", reading: "かるい", meaning: "leicht (Gewicht)", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この荷物は軽いです。", reading: "このにもつはかるいです。", de: "Dieses Gepäck ist leicht." },
    { jp: "軽い傘を持っています。", reading: "かるいかさをもっています。", de: "Ich habe einen leichten Regenschirm." }
  ]},

  // na-Adjektive
  { id: "v156", word: "きれい", reading: "きれい", meaning: "schön / sauber / hübsch", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "この花はきれいです。", reading: "このはなはきれいです。", de: "Diese Blume ist schön." },
    { jp: "部屋をきれいにしました。", reading: "へやをきれいにしました。", de: "Ich habe das Zimmer sauber gemacht." }
  ]},
  { id: "v157", word: "静か", reading: "しずか", meaning: "ruhig / still", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "図書館は静かです。", reading: "としょかんはしずかです。", de: "Die Bibliothek ist ruhig." },
    { jp: "静かな場所で勉強します。", reading: "しずかなばしょでべんきょうします。", de: "Ich lerne an einem ruhigen Ort." }
  ]},
  { id: "v158", word: "便利", reading: "べんり", meaning: "praktisch / bequem", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "このアプリはとても便利です。", reading: "このアプリはとてもべんりです。", de: "Diese App ist sehr praktisch." },
    { jp: "駅の近くは便利です。", reading: "えきのちかくはべんりです。", de: "In der Nähe des Bahnhofs ist es praktisch." }
  ]},
  { id: "v159", word: "親切", reading: "しんせつ", meaning: "freundlich / nett / hilfreich", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "駅員さんはとても親切でした。", reading: "えきいんさんはとてもしんせつでした。", de: "Der Bahnhofsangestellte war sehr freundlich." },
    { jp: "親切な人に道を教えてもらいました。", reading: "しんせつなひとにみちをおしえてもらいました。", de: "Eine nette Person hat mir den Weg erklärt." }
  ]},
  { id: "v160", word: "元気", reading: "げんき", meaning: "gesund / munter / fit", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "元気ですか。", reading: "げんきですか。", de: "Wie geht es Ihnen?" },
    { jp: "今日はとても元気です。", reading: "きょうはとてもげんきです。", de: "Heute geht es mir sehr gut." }
  ]},
  { id: "v161", word: "有名", reading: "ゆうめい", meaning: "berühmt", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "富士山は有名です。", reading: "ふじさんはゆうめいです。", de: "Der Fuji ist berühmt." },
    { jp: "有名なレストランに行きました。", reading: "ゆうめいなレストランにいきました。", de: "Ich bin in ein berühmtes Restaurant gegangen." }
  ]},
  { id: "v162", word: "好き", reading: "すき", meaning: "mögen / gern haben", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "音楽が好きです。", reading: "おんがくがすきです。", de: "Ich mag Musik." },
    { jp: "どんな食べ物が好きですか。", reading: "どんなたべものがすきですか。", de: "Welche Speisen mögen Sie?" }
  ]},
  { id: "v163", word: "嫌い", reading: "きらい", meaning: "nicht mögen / ablehnen", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "辛い食べ物が嫌いです。", reading: "からいたべものがきらいです。", de: "Ich mag kein scharfes Essen." },
    { jp: "虫が嫌いです。", reading: "むしがきらいです。", de: "Ich mag keine Insekten." }
  ]},
  { id: "v164", word: "上手", reading: "じょうず", meaning: "geschickt / gut in etw.", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "田中さんは料理が上手です。", reading: "たなかさんはりょうりがじょうずです。", de: "Herr Tanaka kocht sehr gut." },
    { jp: "日本語が上手ですね。", reading: "にほんごがじょうずですね。", de: "Ihr Japanisch ist sehr gut." }
  ]},
  { id: "v165", word: "下手", reading: "へた", meaning: "ungeschickt / schlecht in etw.", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "私は歌が下手です。", reading: "わたしはうたがへたです。", de: "Ich singe schlecht." },
    { jp: "料理が下手なので、よく外食します。", reading: "りょうりがへたなので、よくがいしょくします。", de: "Da ich schlecht koche, gehe ich oft auswärts essen." }
  ]},
  { id: "v166", word: "大丈夫", reading: "だいじょうぶ", meaning: "in Ordnung / kein Problem", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "「大丈夫ですか。」「はい、大丈夫です。」", reading: "「だいじょうぶですか。」「はい、だいじょうぶです。」", de: "\"Alles in Ordnung?\" \"Ja, alles gut.\"" },
    { jp: "一人で大丈夫です。", reading: "ひとりでだいじょうぶです。", de: "Alleine ist es kein Problem." }
  ]},
  { id: "v167", word: "大変", reading: "たいへん", meaning: "schwierig / schlimm / sehr", pos: "na-Adjektiv/Adverb", level: "adv", examples: [
    { jp: "この仕事は大変です。", reading: "このしごとはたいへんです。", de: "Diese Arbeit ist schwer." },
    { jp: "大変おいしいです。", reading: "たいへんおいしいです。", de: "Es ist ausgesprochen lecker." }
  ]},
  { id: "v168", word: "にぎやか", reading: "にぎやか", meaning: "belebt / lebhaft / laut", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "この町はにぎやかです。", reading: "このまちはにぎやかです。", de: "Diese Stadt ist belebt." },
    { jp: "にぎやかなパーティーでした。", de: "Es war eine lebhafte Party." }
  ]},
  { id: "v169", word: "暇", reading: "ひま", meaning: "Freizeit haben / nicht beschäftigt sein", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "今日は暇です。", reading: "きょうはひまです。", de: "Heute habe ich frei." },
    { jp: "暇な時間に本を読みます。", reading: "ひまなじかんにほんをよみます。", de: "In meiner Freizeit lese ich Bücher." }
  ]},
  { id: "v170", word: "特別", reading: "とくべつ", meaning: "besonders / speziell", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "今日は特別な日です。", reading: "きょうはとくべつなひです。", de: "Heute ist ein besonderer Tag." },
    { jp: "特別なプレゼントをもらいました。", reading: "とくべつなプレゼントをもらいました。", de: "Ich habe ein besonderes Geschenk bekommen." }
  ]},
  { id: "v171", word: "丈夫", reading: "じょうぶ", meaning: "robust / haltbar / sturdy", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "この靴は丈夫です。", reading: "このくつはじょうぶです。", de: "Diese Schuhe sind robust." },
    { jp: "丈夫なかばんを買いました。", reading: "じょうぶなかばんをかいました。", de: "Ich habe eine haltbare Tasche gekauft." }
  ]},
  { id: "v172", word: "真面目", reading: "まじめ", meaning: "ernsthaft / pflichtbewusst / seriös", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "田中さんはとても真面目な学生です。", reading: "たなかさんはとてもまじめながくせいです。", de: "Herr Tanaka ist ein sehr fleißiger Student." },
    { jp: "真面目に勉強します。", reading: "まじめにべんきょうします。", de: "Ich lerne ernsthaft." }
  ]},

  // Verben - Godan (Gruppe 1)
  { id: "v173", word: "行く", reading: "いく", meaning: "gehen (dorthin)", pos: "Verb (Godan, く)", level: "easy", examples: [
    { jp: "明日、学校に行きます。", reading: "あした、がっこうにいきます。", de: "Morgen gehe ich zur Schule." },
    { jp: "週末に公園に行きました。", reading: "しゅうまつにこうえんにいきました。", de: "Am Wochenende bin ich in den Park gegangen." }
  ]},
  { id: "v174", word: "買う", reading: "かう", meaning: "kaufen", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "スーパーで野菜を買います。", reading: "スーパーでやさいをかいます。", de: "Ich kaufe Gemüse im Supermarkt." },
    { jp: "新しい本を買いました。", reading: "あたらしいほんをかいました。", de: "Ich habe ein neues Buch gekauft." }
  ]},
  { id: "v175", word: "読む", reading: "よむ", meaning: "lesen", pos: "Verb (Godan, む)", level: "easy", examples: [
    { jp: "毎日新聞を読みます。", reading: "まいにちしんぶんをよみます。", de: "Jeden Tag lese ich die Zeitung." },
    { jp: "図書館で本を読みました。", reading: "としょかんでほんをよみました。", de: "Ich habe in der Bibliothek ein Buch gelesen." }
  ]},
  { id: "v176", word: "書く", reading: "かく", meaning: "schreiben", pos: "Verb (Godan, く)", level: "easy", examples: [
    { jp: "友達に手紙を書きます。", reading: "ともだちにてがみをかきます。", de: "Ich schreibe meinem Freund einen Brief." },
    { jp: "日本語でメモを書きました。", reading: "にほんごでメモをかきました。", de: "Ich habe eine Notiz auf Japanisch geschrieben." }
  ]},
  { id: "v177", word: "聞く", reading: "きく", meaning: "hören / fragen", pos: "Verb (Godan, く)", level: "easy", examples: [
    { jp: "音楽を聞くのが好きです。", reading: "おんがくをきくのがすきです。", de: "Ich höre gerne Musik." },
    { jp: "先生に質問を聞きました。", reading: "せんせいにしつもんをききました。", de: "Ich habe den Lehrer etwas gefragt." }
  ]},
  { id: "v178", word: "話す", reading: "はなす", meaning: "sprechen / erzählen", pos: "Verb (Godan, す)", level: "easy", examples: [
    { jp: "日本語で話してください。", reading: "にほんごではなしてください。", de: "Sprechen Sie bitte auf Japanisch." },
    { jp: "友達と電話で話しました。", reading: "ともだちとでんわではなしました。", de: "Ich habe mit meinem Freund telefoniert." }
  ]},
  { id: "v179", word: "飲む", reading: "のむ", meaning: "trinken", pos: "Verb (Godan, む)", level: "easy", examples: [
    { jp: "毎朝コーヒーを飲みます。", reading: "まいあさコーヒーをのみます。", de: "Jeden Morgen trinke ich Kaffee." },
    { jp: "水をたくさん飲んでください。", reading: "みずをたくさんのんでください。", de: "Trinken Sie bitte viel Wasser." }
  ]},
  { id: "v180", word: "帰る", reading: "かえる", meaning: "heimgehen / nach Hause gehen", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "六時に家に帰ります。", reading: "ろくじにいえにかえります。", de: "Um 6 Uhr gehe ich nach Hause." },
    { jp: "昨日は早く帰りました。", reading: "きのうははやくかえりました。", de: "Gestern bin ich früh nach Hause gegangen." }
  ]},
  { id: "v181", word: "待つ", reading: "まつ", meaning: "warten", pos: "Verb (Godan, つ)", level: "adv", examples: [
    { jp: "駅で友達を待ちます。", reading: "えきでともだちをまちます。", de: "Ich warte am Bahnhof auf meinen Freund." },
    { jp: "バスを三十分待ちました。", reading: "バスをさんじゅっぷんまちました。", de: "Ich habe dreißig Minuten auf den Bus gewartet." }
  ]},
  { id: "v182", word: "持つ", reading: "もつ", meaning: "halten / tragen / besitzen", pos: "Verb (Godan, つ)", level: "adv", examples: [
    { jp: "かばんを持ってください。", reading: "かばんをもってください。", de: "Halten Sie bitte die Tasche." },
    { jp: "重い荷物を持ちました。", reading: "おもいにもつをもちました。", de: "Ich habe schweres Gepäck getragen." }
  ]},
  { id: "v183", word: "分かる", reading: "わかる", meaning: "verstehen / begreifen", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "日本語が少し分かります。", reading: "にほんごがすこしわかります。", de: "Ich verstehe ein wenig Japanisch." },
    { jp: "この問題が分かりません。", reading: "このもんだいがわかりません。", de: "Ich verstehe diese Aufgabe nicht." }
  ]},
  { id: "v184", word: "知る", reading: "しる", meaning: "wissen / kennen", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "田中さんを知っていますか。", reading: "たなかさんをしっていますか。", de: "Kennen Sie Herrn Tanaka?" },
    { jp: "この映画を知っています。", reading: "このえいがをしっています。", de: "Ich kenne diesen Film." }
  ]},
  { id: "v185", word: "会う", reading: "あう", meaning: "treffen / begegnen", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "明日、友達に会います。", reading: "あした、ともだちにあいます。", de: "Morgen treffe ich einen Freund." },
    { jp: "駅で先生に会いました。", reading: "えきでせんせいにあいました。", de: "Am Bahnhof bin ich meinem Lehrer begegnet." }
  ]},
  { id: "v186", word: "使う", reading: "つかう", meaning: "benutzen / verwenden", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "毎日スマホを使います。", reading: "まいにちスマホをつかいます。", de: "Jeden Tag benutze ich mein Smartphone." },
    { jp: "この辞書をよく使います。", reading: "このじしょをよくつかいます。", de: "Dieses Wörterbuch benutze ich oft." }
  ]},
  { id: "v187", word: "作る", reading: "つくる", meaning: "machen / herstellen / kochen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "お母さんは料理を作ります。", reading: "おかあさんはりょうりをつくります。", de: "Meine Mutter kocht." },
    { jp: "友達のためにケーキを作りました。", reading: "ともだちのためにケーキをつくりました。", de: "Ich habe für meinen Freund einen Kuchen gebacken." }
  ]},
  { id: "v188", word: "入る", reading: "はいる", meaning: "eintreten / hineingehen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "部屋に入ってください。", reading: "へやにはいってください。", de: "Kommen Sie bitte ins Zimmer." },
    { jp: "図書館に入りました。", reading: "としょかんにはいりました。", de: "Ich bin in die Bibliothek gegangen." }
  ]},
  { id: "v189", word: "終わる", reading: "おわる", meaning: "enden / aufhören / fertig werden", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "授業は三時に終わります。", reading: "じゅぎょうはさんじにおわります。", de: "Der Unterricht endet um 3 Uhr." },
    { jp: "仕事が終わったら、電話します。", reading: "しごとがおわったら、でんわします。", de: "Wenn die Arbeit fertig ist, rufe ich an." }
  ]},
  { id: "v190", word: "休む", reading: "やすむ", meaning: "ruhen / Pause machen / fehlen", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "体の調子が悪いので、学校を休みます。", reading: "からだのちょうしがわるいので、がっこうをやすみます。", de: "Mir geht es nicht gut, also fehle ich in der Schule." },
    { jp: "少し休みましょう。", reading: "すこしやすみましょう。", de: "Machen wir eine kurze Pause." }
  ]},
  { id: "v191", word: "乗る", reading: "のる", meaning: "einsteigen / fahren mit (Fahrzeug)", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "電車に乗って会社に行きます。", reading: "でんしゃにのってかいしゃにいきます。", de: "Ich steige in den Zug ein und fahre zur Arbeit." },
    { jp: "バスに乗りました。", reading: "バスにのりました。", de: "Ich bin in den Bus eingestiegen." }
  ]},
  { id: "v192", word: "泳ぐ", reading: "およぐ", meaning: "schwimmen", pos: "Verb (Godan, ぐ)", level: "adv", examples: [
    { jp: "夏に海で泳ぎます。", reading: "なつにうみでおよぎます。", de: "Im Sommer schwimme ich im Meer." },
    { jp: "プールで泳ぐのが好きです。", reading: "プールでおよぐのがすきです。", de: "Ich schwimme gerne im Schwimmbad." }
  ]},
  { id: "v193", word: "走る", reading: "はしる", meaning: "rennen / laufen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "毎朝公園を走ります。", reading: "まいあさこうえんをはしります。", de: "Jeden Morgen laufe ich im Park." },
    { jp: "駅まで走りました。", reading: "えきまではしりました。", de: "Ich bin zum Bahnhof gerannt." }
  ]},
  { id: "v194", word: "歩く", reading: "あるく", meaning: "gehen / zu Fuß gehen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "駅まで歩いて十分です。", reading: "えきまであるいてじゅっぷんです。", de: "Zum Bahnhof sind es zehn Minuten zu Fuß." },
    { jp: "公園を歩くのが好きです。", reading: "こうえんをあるくのがすきです。", de: "Ich gehe gerne im Park spazieren." }
  ]},
  { id: "v195", word: "遊ぶ", reading: "あそぶ", meaning: "spielen / sich vergnügen", pos: "Verb (Godan, ぶ)", level: "adv", examples: [
    { jp: "子供たちが公園で遊んでいます。", reading: "こどもたちがこうえんであそんでいます。", de: "Die Kinder spielen im Park." },
    { jp: "週末に友達と遊びました。", reading: "しゅうまつにともだちとあそびました。", de: "Am Wochenende habe ich mit Freunden gespielt." }
  ]},
  { id: "v196", word: "洗う", reading: "あらう", meaning: "waschen / spülen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "食事の前に手を洗います。", reading: "しょくじのまえにてをあらいます。", de: "Vor dem Essen wasche ich mir die Hände." },
    { jp: "食器を洗いました。", reading: "しょっきをあらいました。", de: "Ich habe das Geschirr gespült." }
  ]},
  { id: "v197", word: "切る", reading: "きる", meaning: "schneiden", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "野菜を切ります。", reading: "やさいをきります。", de: "Ich schneide Gemüse." },
    { jp: "ハサミで紙を切りました。", reading: "ハサミでかみをきりました。", de: "Ich habe Papier mit der Schere geschnitten." }
  ]},
  { id: "v198", word: "送る", reading: "おくる", meaning: "schicken / senden / begleiten", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "友達にメールを送りました。", reading: "ともだちにメールをおくりました。", de: "Ich habe meinem Freund eine E-Mail geschickt." },
    { jp: "荷物を郵便局から送ります。", reading: "にもつをゆうびんきょくからおくります。", de: "Ich schicke das Paket vom Postamt." }
  ]},
  { id: "v199", word: "貸す", reading: "かす", meaning: "leihen (jmd. etwas leihen)", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "友達に本を貸しました。", reading: "ともだちにほんをかしました。", de: "Ich habe meinem Freund ein Buch geliehen." },
    { jp: "傘を貸してください。", reading: "かさをかしてください。", de: "Leihen Sie mir bitte einen Regenschirm." }
  ]},
  { id: "v200", word: "頼む", reading: "たのむ", meaning: "bitten / bestellen / beauftragen", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "友達に手伝いを頼みました。", reading: "ともだちにてつだいをたのみました。", de: "Ich habe meinen Freund um Hilfe gebeten." },
    { jp: "レストランで料理を頼みます。", reading: "レストランでりょうりをたのみます。", de: "Im Restaurant bestelle ich ein Gericht." }
  ]},
  { id: "v201", word: "困る", reading: "こまる", meaning: "in Schwierigkeiten sein / Probleme haben", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "お金がなくて困っています。", reading: "おかねがなくてこまっています。", de: "Ich bin in der Klemme, weil ich kein Geld habe." },
    { jp: "道に迷って困りました。", reading: "みちにまよってこまりました。", de: "Ich habe mich verlaufen und wusste nicht mehr weiter." }
  ]},

  // Verben - Ichidan (Gruppe 2)
  { id: "v202", word: "食べる", reading: "たべる", meaning: "essen", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "朝ごはんを食べます。", reading: "あさごはんをたべます。", de: "Ich esse Frühstück." },
    { jp: "寿司を食べたことがありますか。", reading: "すしをたべたことがありますか。", de: "Haben Sie schon einmal Sushi gegessen?" }
  ]},
  { id: "v203", word: "見る", reading: "みる", meaning: "sehen / ansehen / schauen", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "夜にテレビを見ます。", reading: "よるにテレビをみます。", de: "Abends schaue ich Fernsehen." },
    { jp: "富士山を見たいです。", reading: "ふじさんをみたいです。", de: "Ich möchte den Fuji sehen." }
  ]},
  { id: "v204", word: "起きる", reading: "おきる", meaning: "aufstehen / aufwachen", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "毎朝七時に起きます。", reading: "まいあさしちじにおきます。", de: "Jeden Morgen stehe ich um 7 Uhr auf." },
    { jp: "今朝は早く起きました。", reading: "けさははやくおきました。", de: "Heute Morgen bin ich früh aufgestanden." }
  ]},
  { id: "v205", word: "寝る", reading: "ねる", meaning: "schlafen / sich hinlegen", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "十一時に寝ます。", reading: "じゅういちじにねます。", de: "Ich gehe um 11 Uhr schlafen." },
    { jp: "昨日は早く寝ました。", reading: "きのうははやくねました。", de: "Gestern bin ich früh schlafen gegangen." }
  ]},
  { id: "v206", word: "着る", reading: "きる", meaning: "anziehen (Oberkörper)", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "今日はセーターを着ます。", reading: "きょうはセーターをきます。", de: "Heute ziehe ich einen Pullover an." },
    { jp: "着物を着たことがありますか。", reading: "きものをきたことがありますか。", de: "Haben Sie schon einmal einen Kimono getragen?" }
  ]},
  { id: "v207", word: "出る", reading: "でる", meaning: "herausgehen / verlassen / erscheinen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "八時に家を出ます。", reading: "はちじにいえをでます。", de: "Um 8 Uhr verlasse ich das Haus." },
    { jp: "電車が駅を出ました。", reading: "でんしゃがえきをでました。", de: "Der Zug hat den Bahnhof verlassen." }
  ]},
  { id: "v208", word: "教える", reading: "おしえる", meaning: "lehren / unterrichten / erklären", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "先生は日本語を教えます。", reading: "せんせいはにほんごをおしえます。", de: "Der Lehrer unterrichtet Japanisch." },
    { jp: "道を教えてください。", reading: "みちをおしえてください。", de: "Erklären Sie mir bitte den Weg." }
  ]},
  { id: "v209", word: "覚える", reading: "おぼえる", meaning: "sich merken / auswendig lernen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "単語を覚えます。", reading: "たんごをおぼえます。", de: "Ich lerne Vokabeln auswendig." },
    { jp: "名前を覚えています。", reading: "なまえをおぼえています。", de: "Ich merke mir Namen." }
  ]},
  { id: "v210", word: "忘れる", reading: "わすれる", meaning: "vergessen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "傘を忘れました。", reading: "かさをわすれました。", de: "Ich habe meinen Regenschirm vergessen." },
    { jp: "宿題を忘れないでください。", reading: "しゅくだいをわすれないでください。", de: "Vergessen Sie die Hausaufgaben nicht." }
  ]},
  { id: "v211", word: "開ける", reading: "あける", meaning: "öffnen / aufmachen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "窓を開けてください。", reading: "まどをあけてください。", de: "Öffnen Sie bitte das Fenster." },
    { jp: "ドアを開けました。", reading: "ドアをあけました。", de: "Ich habe die Tür geöffnet." }
  ]},
  { id: "v212", word: "閉める", reading: "しめる", meaning: "schließen / zumachen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "ドアを閉めてください。", reading: "ドアをしめてください。", de: "Schließen Sie bitte die Tür." },
    { jp: "窓を閉めました。", reading: "まどをしめました。", de: "Ich habe das Fenster geschlossen." }
  ]},
  { id: "v213", word: "始める", reading: "はじめる", meaning: "beginnen / anfangen (transitiv)", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "九時に仕事を始めます。", reading: "くじにしごとをはじめます。", de: "Um 9 Uhr beginne ich mit der Arbeit." },
    { jp: "日本語の勉強を始めました。", reading: "にほんごのべんきょうをはじめました。", de: "Ich habe angefangen, Japanisch zu lernen." }
  ]},
  { id: "v214", word: "降りる", reading: "おりる", meaning: "aussteigen / heruntersteigen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "次の駅で降ります。", reading: "つぎのえきでおります。", de: "Ich steige an der nächsten Station aus." },
    { jp: "バスを降りました。", reading: "バスをおりました。", de: "Ich bin aus dem Bus ausgestiegen." }
  ]},
  { id: "v215", word: "借りる", reading: "かりる", meaning: "leihen / borgen (sich etwas leihen)", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "図書館で本を借りました。", reading: "としょかんでほんをかりました。", de: "Ich habe in der Bibliothek ein Buch ausgeliehen." },
    { jp: "友達に自転車を借りました。", reading: "ともだちにじてんしゃをかりました。", de: "Ich habe mir von meinem Freund ein Fahrrad geliehen." }
  ]},
  { id: "v216", word: "答える", reading: "こたえる", meaning: "antworten / beantworten", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "先生の質問に答えます。", reading: "せんせいのしつもんにこたえます。", de: "Ich antworte auf die Frage des Lehrers." },
    { jp: "メールに答えました。", reading: "メールにこたえました。", de: "Ich habe auf die E-Mail geantwortet." }
  ]},

  // Unregelmäßige Verben
  { id: "v217", word: "来る", reading: "くる", meaning: "kommen (hierher)", pos: "Verb (unregelmäßig)", level: "easy", examples: [
    { jp: "友達が家に来ます。", reading: "ともだちがいえにきます。", de: "Ein Freund kommt zu mir nach Hause." },
    { jp: "先生がもうすぐ来ます。", reading: "せんせいがもうすぐきます。", de: "Der Lehrer kommt gleich." }
  ]},
  { id: "v218", word: "する", reading: "する", meaning: "tun / machen", pos: "Verb (unregelmäßig)", level: "easy", examples: [
    { jp: "宿題をします。", reading: "しゅくだいをします。", de: "Ich mache Hausaufgaben." },
    { jp: "何をしますか。", reading: "なにをしますか。", de: "Was machen Sie?" }
  ]},
  { id: "v219", word: "勉強する", reading: "べんきょうする", meaning: "lernen / studieren", pos: "Verb (する-Verb)", level: "easy", examples: [
    { jp: "毎日日本語を勉強します。", reading: "まいにちにほんごをべんきょうします。", de: "Jeden Tag lerne ich Japanisch." },
    { jp: "図書館で勉強しました。", reading: "としょかんでべんきょうしました。", de: "Ich habe in der Bibliothek gelernt." }
  ]},
  { id: "v220", word: "仕事する", reading: "しごとする", meaning: "arbeiten", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "毎日八時間仕事します。", reading: "まいにちはちじかんしごとします。", de: "Jeden Tag arbeite ich acht Stunden." },
    { jp: "今日は家で仕事しました。", reading: "きょうはいえでしごとしました。", de: "Heute habe ich von zu Hause aus gearbeitet." }
  ]},
  { id: "v221", word: "電話する", reading: "でんわする", meaning: "telefonieren / anrufen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "後で電話します。", reading: "あとででんわします。", de: "Ich rufe später an." },
    { jp: "お母さんに電話しました。", reading: "おかあさんにでんわしました。", de: "Ich habe meine Mutter angerufen." }
  ]},
  { id: "v222", word: "旅行する", reading: "りょこうする", meaning: "reisen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "来年、日本に旅行します。", reading: "らいねん、にほんにりょこうします。", de: "Nächstes Jahr reise ich nach Japan." },
    { jp: "家族と一緒に旅行しました。", reading: "かぞくといっしょにりょこうしました。", de: "Ich habe mit der Familie eine Reise gemacht." }
  ]},
  { id: "v223", word: "結婚する", reading: "けっこんする", meaning: "heiraten", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "来年、結婚します。", reading: "らいねん、けっこんします。", de: "Nächstes Jahr heirate ich." },
    { jp: "兄は去年結婚しました。", reading: "あにはきょねんけっこんしました。", de: "Mein älterer Bruder hat letztes Jahr geheiratet." }
  ]},

  // Wichtige Nomen
  { id: "v224", word: "名前", reading: "なまえ", meaning: "Name", pos: "Nomen", level: "easy", examples: [
    { jp: "お名前は何ですか。", reading: "おなまえはなんですか。", de: "Wie ist Ihr Name?" },
    { jp: "名前を書いてください。", reading: "なまえをかいてください。", de: "Schreiben Sie bitte Ihren Namen." }
  ]},
  { id: "v225", word: "言葉", reading: "ことば", meaning: "Wort / Sprache / Ausdrucksweise", pos: "Nomen", level: "adv", examples: [
    { jp: "新しい言葉を覚えました。", reading: "あたらしいことばをおぼえました。", de: "Ich habe ein neues Wort gelernt." },
    { jp: "日本語の言葉は難しいです。", reading: "にほんごのことばはむずかしいです。", de: "Japanische Wörter sind schwierig." }
  ]},
  { id: "v226", word: "仕事", reading: "しごと", meaning: "Arbeit / Job / Beruf", pos: "Nomen", level: "easy", examples: [
    { jp: "仕事は何時に終わりますか。", reading: "しごとはなんじにおわりますか。", de: "Um wie viel Uhr endet Ihre Arbeit?" },
    { jp: "今の仕事が好きです。", reading: "いまのしごとがすきです。", de: "Ich mag meinen jetzigen Job." }
  ]},
  { id: "v227", word: "勉強", reading: "べんきょう", meaning: "Lernen / Studium", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日勉強します。", reading: "まいにちべんきょうします。", de: "Jeden Tag lerne ich." },
    { jp: "日本語の勉強は楽しいです。", reading: "にほんごのべんきょうはたのしいです。", de: "Das Japanischlernen macht Spaß." }
  ]},
  { id: "v228", word: "音楽", reading: "おんがく", meaning: "Musik", pos: "Nomen", level: "easy", examples: [
    { jp: "音楽を聞くのが好きです。", reading: "おんがくをきくのがすきです。", de: "Ich höre gerne Musik." },
    { jp: "音楽の授業があります。", reading: "おんがくのじゅぎょうがあります。", de: "Es gibt Musikunterricht." }
  ]},
  { id: "v229", word: "映画", reading: "えいが", meaning: "Film / Kino", pos: "Nomen", level: "easy", examples: [
    { jp: "週末に映画を見ます。", reading: "しゅうまつにえいがをみます。", de: "Am Wochenende schaue ich einen Film." },
    { jp: "日本映画が好きです。", reading: "にほんえいががすきです。", de: "Ich mag japanische Filme." }
  ]},
  { id: "v230", word: "旅行", reading: "りょこう", meaning: "Reise", pos: "Nomen", level: "adv", examples: [
    { jp: "来年、日本に旅行します。", reading: "らいねん、にほんにりょこうします。", de: "Nächstes Jahr mache ich eine Reise nach Japan." },
    { jp: "旅行が好きですか。", reading: "りょこうがすきですか。", de: "Reisen Sie gerne?" }
  ]},
  { id: "v231", word: "天気", reading: "てんき", meaning: "Wetter", pos: "Nomen", level: "easy", examples: [
    { jp: "今日は天気がいいです。", reading: "きょうはてんきがいいです。", de: "Heute ist das Wetter schön." },
    { jp: "明日の天気はどうですか。", reading: "あしたのてんきはどうですか。", de: "Wie wird das Wetter morgen?" }
  ]},
  { id: "v232", word: "季節", reading: "きせつ", meaning: "Jahreszeit", pos: "Nomen", level: "adv", examples: [
    { jp: "好きな季節はいつですか。", reading: "すきなきせつはいつですか。", de: "Welche Jahreszeit mögen Sie am liebsten?" },
    { jp: "日本には四つの季節があります。", reading: "にほんにはよっつのきせつがあります。", de: "Japan hat vier Jahreszeiten." }
  ]},
  { id: "v233", word: "春", reading: "はる", meaning: "Frühling", pos: "Nomen", level: "easy", examples: [
    { jp: "春は桜がきれいです。", reading: "はるはさくらがきれいです。", de: "Im Frühling sind die Kirschblüten schön." },
    { jp: "春は暖かいです。", reading: "はるはあたたかいです。", de: "Im Frühling ist es warm." }
  ]},
  { id: "v234", word: "夏", reading: "なつ", meaning: "Sommer", pos: "Nomen", level: "easy", examples: [
    { jp: "夏は海に行きます。", reading: "なつはうみにいきます。", de: "Im Sommer gehe ich ans Meer." },
    { jp: "夏はとても暑いです。", reading: "なつはとてもあついです。", de: "Im Sommer ist es sehr heiß." }
  ]},
  { id: "v235", word: "秋", reading: "あき", meaning: "Herbst", pos: "Nomen", level: "easy", examples: [
    { jp: "秋は紅葉がきれいです。", reading: "あきはこうようがきれいです。", de: "Im Herbst sind die Laubblätter schön." },
    { jp: "秋は涼しくて気持ちいいです。", reading: "あきはすずしくてきもちいいです。", de: "Im Herbst ist es angenehm kühl." }
  ]},
  { id: "v236", word: "冬", reading: "ふゆ", meaning: "Winter", pos: "Nomen", level: "easy", examples: [
    { jp: "冬は寒いです。", reading: "ふゆはさむいです。", de: "Im Winter ist es kalt." },
    { jp: "冬に雪が降ります。", reading: "ふゆにゆきがふります。", de: "Im Winter schneit es." }
  ]},
  { id: "v237", word: "花", reading: "はな", meaning: "Blume / Blüte", pos: "Nomen", level: "easy", examples: [
    { jp: "花をプレゼントしました。", reading: "はなをプレゼントしました。", de: "Ich habe Blumen verschenkt." },
    { jp: "公園に花がたくさんあります。", reading: "こうえんにはながたくさんあります。", de: "Im Park gibt es viele Blumen." }
  ]},
  { id: "v238", word: "空", reading: "そら", meaning: "Himmel", pos: "Nomen", level: "adv", examples: [
    { jp: "今日は空が青いです。", reading: "きょうはそらがあおいです。", de: "Heute ist der Himmel blau." },
    { jp: "空に星がたくさんあります。", reading: "そらにほしがたくさんあります。", de: "Am Himmel gibt es viele Sterne." }
  ]},
  { id: "v239", word: "海", reading: "うみ", meaning: "Meer / See", pos: "Nomen", level: "easy", examples: [
    { jp: "夏に海に行きます。", reading: "なつにうみにいきます。", de: "Im Sommer gehe ich ans Meer." },
    { jp: "海は広いです。", reading: "うみはひろいです。", de: "Das Meer ist weit." }
  ]},
  { id: "v240", word: "犬", reading: "いぬ", meaning: "Hund", pos: "Nomen", level: "easy", examples: [
    { jp: "犬を飼っています。", reading: "いぬをかっています。", de: "Ich habe einen Hund." },
    { jp: "公園で犬と散歩します。", reading: "こうえんでいぬとさんぽします。", de: "Ich gehe mit dem Hund im Park spazieren." }
  ]},
  { id: "v241", word: "猫", reading: "ねこ", meaning: "Katze", pos: "Nomen", level: "easy", examples: [
    { jp: "猫が好きですか。", reading: "ねこがすきですか。", de: "Mögen Sie Katzen?" },
    { jp: "うちに猫が二匹います。", reading: "うちにねこがにひきいます。", de: "Bei uns zu Hause gibt es zwei Katzen." }
  ]},
  { id: "v242", word: "鳥", reading: "とり", meaning: "Vogel", pos: "Nomen", level: "easy", examples: [
    { jp: "木の上に鳥がいます。", reading: "きのうえにとりがいます。", de: "Auf dem Baum sitzt ein Vogel." },
    { jp: "鳥の声が聞こえます。", reading: "とりのこえがきこえます。", de: "Ich höre Vogelstimmen." }
  ]},
  { id: "v243", word: "学生", reading: "がくせい", meaning: "Student / Schüler", pos: "Nomen", level: "easy", examples: [
    { jp: "私は大学の学生です。", reading: "わたしはだいがくのがくせいです。", de: "Ich bin Student an der Universität." },
    { jp: "学生のとき、よく旅行しました。", reading: "がくせいのとき、よくりょこうしました。", de: "Als Student habe ich oft gereist." }
  ]},
  { id: "v244", word: "先生", reading: "せんせい", meaning: "Lehrer / Lehrerin", pos: "Nomen", level: "easy", examples: [
    { jp: "先生に質問しました。", reading: "せんせいにしつもんしました。", de: "Ich habe den Lehrer etwas gefragt." },
    { jp: "日本語の先生はとても親切です。", reading: "にほんごのせんせいはとてもしんせつです。", de: "Die Japanischlehrerin ist sehr freundlich." }
  ]},
  { id: "v245", word: "会社員", reading: "かいしゃいん", meaning: "Büroangestellter / Firma-Mitarbeiter", pos: "Nomen", level: "adv", examples: [
    { jp: "私は会社員です。", reading: "わたしはかいしゃいんです。", de: "Ich bin Büroangestellter." },
    { jp: "父は会社員として働いています。", reading: "ちちはかいしゃいんとしてはたらいています。", de: "Mein Vater arbeitet als Büroangestellter." }
  ]},
  { id: "v246", word: "買い物", reading: "かいもの", meaning: "Einkaufen / Einkauf", pos: "Nomen", level: "easy", examples: [
    { jp: "土曜日に買い物をします。", reading: "どようびにかいものをします。", de: "Samstags gehe ich einkaufen." },
    { jp: "スーパーで買い物をしました。", reading: "スーパーでかいものをしました。", de: "Ich habe im Supermarkt eingekauft." }
  ]},
  { id: "v247", word: "飲み物", reading: "のみもの", meaning: "Getränk", pos: "Nomen", level: "easy", examples: [
    { jp: "何か飲み物はいかがですか。", reading: "なにかのみものはいかがですか。", de: "Möchten Sie etwas zu trinken?" },
    { jp: "好きな飲み物はコーヒーです。", reading: "すきなのみものはコーヒーです。", de: "Mein Lieblingsgetränk ist Kaffee." }
  ]},
  { id: "v248", word: "食べ物", reading: "たべもの", meaning: "Speise / Lebensmittel", pos: "Nomen", level: "easy", examples: [
    { jp: "好きな食べ物は寿司です。", reading: "すきなたべものはすしです。", de: "Meine Lieblingsspeise ist Sushi." },
    { jp: "日本の食べ物はおいしいです。", reading: "にほんのたべものはおいしいです。", de: "Japanisches Essen ist lecker." }
  ]},

  // Fragewörter
  { id: "v249", word: "何", reading: "なに / なん", meaning: "was", pos: "Fragewort", level: "easy", examples: [
    { jp: "これは何ですか。", reading: "これはなんですか。", de: "Was ist das?" },
    { jp: "今日の昼ごはんは何ですか。", reading: "きょうのひるごはんはなんですか。", de: "Was gibt es heute zum Mittagessen?" }
  ]},
  { id: "v250", word: "誰", reading: "だれ", meaning: "wer", pos: "Fragewort", level: "easy", examples: [
    { jp: "あの人は誰ですか。", reading: "あのひとはだれですか。", de: "Wer ist diese Person dort?" },
    { jp: "誰と一緒に来ましたか。", reading: "だれといっしょにきましたか。", de: "Mit wem sind Sie gekommen?" }
  ]},
  { id: "v251", word: "どこ", reading: "どこ", meaning: "wo / wohin", pos: "Fragewort", level: "easy", examples: [
    { jp: "トイレはどこですか。", de: "Wo ist die Toilette?" },
    { jp: "どこに行きますか。", reading: "どこにいきますか。", de: "Wohin gehen Sie?" }
  ]},
  { id: "v252", word: "いつ", reading: "いつ", meaning: "wann", pos: "Fragewort", level: "easy", examples: [
    { jp: "いつ日本に来ましたか。", reading: "いつにほんにきましたか。", de: "Wann sind Sie nach Japan gekommen?" },
    { jp: "パーティーはいつですか。", de: "Wann ist die Party?" }
  ]},
  { id: "v253", word: "どうして", reading: "どうして", meaning: "warum / weshalb", pos: "Fragewort", level: "easy", examples: [
    { jp: "どうして学校を休みましたか。", reading: "どうしてがっこうをやすみましたか。", de: "Warum haben Sie die Schule geschwänzt?" },
    { jp: "どうして日本語を勉強しますか。", reading: "どうしてにほんごをべんきょうしますか。", de: "Warum lernen Sie Japanisch?" }
  ]},
  { id: "v254", word: "どう", reading: "どう", meaning: "wie / auf welche Weise", pos: "Fragewort", level: "easy", examples: [
    { jp: "日本はどうですか。", reading: "にほんはどうですか。", de: "Wie finden Sie Japan?" },
    { jp: "この料理はどうやって作りますか。", reading: "このりょうりはどうやってつくりますか。", de: "Wie macht man dieses Gericht?" }
  ]},
  { id: "v255", word: "いくら", reading: "いくら", meaning: "wie viel (Geld)", pos: "Fragewort", level: "easy", examples: [
    { jp: "これはいくらですか。", de: "Wie viel kostet das?" },
    { jp: "このりんごはいくらですか。", de: "Wie viel kosten diese Äpfel?" }
  ]},
  { id: "v256", word: "いくつ", reading: "いくつ", meaning: "wie viele / wie alt", pos: "Fragewort", level: "easy", examples: [
    { jp: "りんごはいくつありますか。", de: "Wie viele Äpfel gibt es?" },
    { jp: "お子さんはいくつですか。", reading: "おこさんはいくつですか。", de: "Wie alt ist Ihr Kind?" }
  ]},
  { id: "v257", word: "どれ", reading: "どれ", meaning: "welches (von mehreren)", pos: "Fragewort", level: "easy", examples: [
    { jp: "どれがあなたのかばんですか。", de: "Welche Tasche gehört Ihnen?" },
    { jp: "どれを買いますか。", reading: "どれをかいますか。", de: "Welches kaufen Sie?" }
  ]},
  { id: "v258", word: "どの", reading: "どの", meaning: "welches (vor Nomen)", pos: "Fragewort", level: "easy", examples: [
    { jp: "どの電車に乗りますか。", reading: "どのでんしゃにのりますか。", de: "Welchen Zug nehmen Sie?" },
    { jp: "どの本が面白いですか。", reading: "どのほんがおもしろいですか。", de: "Welches Buch ist interessant?" }
  ]},

  // Adverbien & häufige Wörter
  { id: "v259", word: "とても", reading: "とても", meaning: "sehr / überaus", pos: "Adverb", level: "easy", examples: [
    { jp: "この映画はとても面白いです。", reading: "このえいがはとてもおもしろいです。", de: "Dieser Film ist sehr interessant." },
    { jp: "今日はとても暑いですね。", reading: "きょうはとてもあついですね。", de: "Heute ist es sehr heiß, nicht wahr?" }
  ]},
  { id: "v260", word: "少し", reading: "すこし", meaning: "ein wenig / etwas", pos: "Adverb", level: "easy", examples: [
    { jp: "日本語が少し分かります。", reading: "にほんごがすこしわかります。", de: "Ich verstehe ein wenig Japanisch." },
    { jp: "少し待ってください。", reading: "すこしまってください。", de: "Warten Sie bitte einen Moment." }
  ]},
  { id: "v261", word: "たくさん", reading: "たくさん", meaning: "viel / viele", pos: "Adverb", level: "easy", examples: [
    { jp: "水をたくさん飲んでください。", reading: "みずをたくさんのんでください。", de: "Trinken Sie bitte viel Wasser." },
    { jp: "公園に花がたくさんあります。", reading: "こうえんにはながたくさんあります。", de: "Im Park gibt es viele Blumen." }
  ]},
  { id: "v262", word: "もう", reading: "もう", meaning: "schon / bereits / bald", pos: "Adverb", level: "easy", examples: [
    { jp: "もう食べましたか。", reading: "もうたべましたか。", de: "Haben Sie schon gegessen?" },
    { jp: "もう八時です。", reading: "もうはちじです。", de: "Es ist schon 8 Uhr." }
  ]},
  { id: "v263", word: "まだ", reading: "まだ", meaning: "noch / noch nicht", pos: "Adverb", level: "easy", examples: [
    { jp: "まだ宿題をしていません。", reading: "まだしゅくだいをしていません。", de: "Ich habe die Hausaufgaben noch nicht gemacht." },
    { jp: "友達はまだ来ていません。", reading: "ともだちはまだきていません。", de: "Mein Freund ist noch nicht gekommen." }
  ]},
  { id: "v264", word: "また", reading: "また", meaning: "wieder / nochmal", pos: "Adverb", level: "easy", examples: [
    { jp: "また来てください。", reading: "またきてください。", de: "Kommen Sie bitte wieder." },
    { jp: "またゆっくり話してください。", reading: "またゆっくりはなしてください。", de: "Sprechen Sie bitte nochmal langsam." }
  ]},
  { id: "v265", word: "いつも", reading: "いつも", meaning: "immer / stets", pos: "Adverb", level: "easy", examples: [
    { jp: "いつも電車で通勤します。", reading: "いつもでんしゃでつうきんします。", de: "Ich fahre immer mit dem Zug zur Arbeit." },
    { jp: "いつも親切にしてくれてありがとう。", reading: "いつもしんせつにしてくれてありがとう。", de: "Danke, dass du immer so nett zu mir bist." }
  ]},
  { id: "v266", word: "時々", reading: "ときどき", meaning: "manchmal / gelegentlich", pos: "Adverb", level: "adv", examples: [
    { jp: "時々映画を見ます。", reading: "ときどきえいがをみます。", de: "Manchmal schaue ich einen Film." },
    { jp: "時々友達と外食します。", reading: "ときどきともだちとがいしょくします。", de: "Gelegentlich esse ich mit Freunden auswärts." }
  ]},
  { id: "v267", word: "よく", reading: "よく", meaning: "oft / gut / gut und gerne", pos: "Adverb", level: "easy", examples: [
    { jp: "よく図書館に行きます。", reading: "よくとしょかんにいきます。", de: "Ich gehe oft in die Bibliothek." },
    { jp: "子供の頃、よく公園で遊びました。", reading: "こどものころ、よくこうえんであそびました。", de: "Als Kind habe ich oft im Park gespielt." }
  ]},
  { id: "v268", word: "一緒に", reading: "いっしょに", meaning: "zusammen / gemeinsam", pos: "Adverb", level: "easy", examples: [
    { jp: "家族と一緒に食事をします。", reading: "かぞくといっしょにしょくじをします。", de: "Ich esse zusammen mit der Familie." },
    { jp: "一緒に勉強しましょう。", reading: "いっしょにべんきょうしましょう。", de: "Lass uns zusammen lernen." }
  ]},
  { id: "v269", word: "ゆっくり", reading: "ゆっくり", meaning: "langsam / gemächlich", pos: "Adverb", level: "adv", examples: [
    { jp: "ゆっくり話してください。", reading: "ゆっくりはなしてください。", de: "Sprechen Sie bitte langsam." },
    { jp: "今日はゆっくり休みます。", reading: "きょうはゆっくりやすみます。", de: "Heute erhole ich mich in Ruhe." }
  ]},
  { id: "v270", word: "はじめて", reading: "はじめて", meaning: "zum ersten Mal", pos: "Adverb", level: "adv", examples: [
    { jp: "はじめて寿司を食べました。", reading: "はじめてすしをたべました。", de: "Ich habe zum ersten Mal Sushi gegessen." },
    { jp: "はじめて日本に来ました。", reading: "はじめてにほんにきました。", de: "Ich bin zum ersten Mal nach Japan gekommen." }
  ]},

  // === v2.9.0: zusätzliche N5-Vokabeln ===

  // Verben
  { id: "v271", word: "返す", reading: "かえす", meaning: "zurückgeben", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "友達に本を返しました。", reading: "ともだちにほんをかえしました。", de: "Ich habe meinem Freund das Buch zurückgegeben." },
    { jp: "図書館に本を返します。", reading: "としょかんにほんをかえします。", de: "Ich gebe das Buch der Bibliothek zurück." }
  ]},
  { id: "v272", word: "立つ", reading: "たつ", meaning: "stehen / aufstehen", pos: "Verb (Godan, つ)", level: "adv", examples: [
    { jp: "先生が前に立っています。", reading: "せんせいがまえにたっています。", de: "Der Lehrer steht vorne." },
    { jp: "電車でずっと立っていました。", reading: "でんしゃでずっとたっていました。", de: "Ich habe im Zug die ganze Zeit gestanden." }
  ]},
  { id: "v273", word: "座る", reading: "すわる", meaning: "sich setzen / sitzen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "椅子に座ってください。", reading: "いすにすわってください。", de: "Setzen Sie sich bitte auf den Stuhl." },
    { jp: "ここに座ってもいいですか。", reading: "ここにすわってもいいですか。", de: "Darf ich mich hier hinsetzen?" }
  ]},
  { id: "v274", word: "急ぐ", reading: "いそぐ", meaning: "sich beeilen / eilen", pos: "Verb (Godan, ぐ)", level: "adv", examples: [
    { jp: "時間がないので急ぎます。", reading: "じかんがないのでいそぎます。", de: "Ich beeile mich, weil ich keine Zeit habe." },
    { jp: "急いで駅に行きました。", reading: "いそいでえきにいきました。", de: "Ich bin eilig zum Bahnhof gegangen." }
  ]},
  { id: "v275", word: "疲れる", reading: "つかれる", meaning: "müde werden / erschöpft sein", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "今日はとても疲れました。", reading: "きょうはとてもつかれました。", de: "Heute bin ich sehr müde geworden." },
    { jp: "仕事で疲れています。", reading: "しごとでつかれています。", de: "Ich bin von der Arbeit erschöpft." }
  ]},
  { id: "v276", word: "手伝う", reading: "てつだう", meaning: "helfen / mithelfen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "母を手伝います。", reading: "ははをてつだいます。", de: "Ich helfe meiner Mutter." },
    { jp: "友達が宿題を手伝ってくれました。", reading: "ともだちがしゅくだいをてつだってくれました。", de: "Mein Freund hat mir bei den Hausaufgaben geholfen." }
  ]},
  { id: "v277", word: "押す", reading: "おす", meaning: "drücken / schieben", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "ボタンを押してください。", reading: "ボタンをおしてください。", de: "Drücken Sie bitte den Knopf." },
    { jp: "ドアを押して開けます。", reading: "ドアをおしてあけます。", de: "Ich drücke die Tür auf." }
  ]},
  { id: "v278", word: "引く", reading: "ひく", meaning: "ziehen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "ドアを引いてください。", reading: "ドアをひいてください。", de: "Ziehen Sie bitte an der Tür." },
    { jp: "かぜを引きました。", reading: "かぜをひきました。", de: "Ich habe mich erkältet." }
  ]},
  { id: "v279", word: "消す", reading: "けす", meaning: "ausschalten / löschen", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "電気を消してください。", reading: "でんきをけしてください。", de: "Schalten Sie bitte das Licht aus." },
    { jp: "寝る前にテレビを消しました。", reading: "ねるまえにテレビをけしました。", de: "Vor dem Schlafen habe ich den Fernseher ausgeschaltet." }
  ]},
  { id: "v280", word: "住む", reading: "すむ", meaning: "wohnen / leben", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "東京に住んでいます。", reading: "とうきょうにすんでいます。", de: "Ich wohne in Tokio." },
    { jp: "どこに住んでいますか。", reading: "どこにすんでいますか。", de: "Wo wohnen Sie?" }
  ]},
  { id: "v281", word: "働く", reading: "はたらく", meaning: "arbeiten", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "銀行で働いています。", reading: "ぎんこうではたらいています。", de: "Ich arbeite bei einer Bank." },
    { jp: "父は毎日働いています。", reading: "ちちはまいにちはたらいています。", de: "Mein Vater arbeitet jeden Tag." }
  ]},
  { id: "v282", word: "売る", reading: "うる", meaning: "verkaufen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "店で野菜を売っています。", reading: "みせでやさいをうっています。", de: "Im Laden wird Gemüse verkauft." },
    { jp: "古い車を売りました。", reading: "ふるいくるまをうりました。", de: "Ich habe mein altes Auto verkauft." }
  ]},
  { id: "v283", word: "歌う", reading: "うたう", meaning: "singen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "みんなで歌を歌いました。", reading: "みんなでうたをうたいました。", de: "Wir haben alle zusammen ein Lied gesungen." },
    { jp: "カラオケで歌うのが好きです。", reading: "カラオケでうたうのがすきです。", de: "Ich singe gerne im Karaoke." }
  ]},
  { id: "v284", word: "登る", reading: "のぼる", meaning: "(hinauf)steigen / besteigen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "夏に山に登ります。", reading: "なつにやまにのぼります。", de: "Im Sommer besteige ich einen Berg." },
    { jp: "富士山に登りたいです。", reading: "ふじさんにのぼりたいです。", de: "Ich möchte den Fuji besteigen." }
  ]},
  { id: "v285", word: "止まる", reading: "とまる", meaning: "anhalten / stehen bleiben", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "電車が駅に止まりました。", reading: "でんしゃがえきにとまりました。", de: "Der Zug ist am Bahnhof gehalten." },
    { jp: "車が家の前に止まっています。", reading: "くるまがいえのまえにとまっています。", de: "Ein Auto steht vor dem Haus." }
  ]},
  { id: "v286", word: "思う", reading: "おもう", meaning: "denken / glauben / meinen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "いい映画だと思います。", reading: "いいえいがだとおもいます。", de: "Ich finde, das ist ein guter Film." },
    { jp: "明日は雨だと思います。", reading: "あしたはあめだとおもいます。", de: "Ich glaube, morgen regnet es." }
  ]},
  { id: "v287", word: "言う", reading: "いう", meaning: "sagen / sprechen", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "先生に「おはよう」と言いました。", reading: "せんせいに「おはよう」といいました。", de: "Ich habe dem Lehrer \"Guten Morgen\" gesagt." },
    { jp: "もう一度言ってください。", reading: "もういちどいってください。", de: "Sagen Sie es bitte noch einmal." }
  ]},
  { id: "v288", word: "なる", reading: "なる", meaning: "werden", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "来年大学生になります。", reading: "らいねんだいがくせいになります。", de: "Nächstes Jahr werde ich Student." },
    { jp: "春になって暖かくなりました。", reading: "はるになってあたたかくなりました。", de: "Es ist Frühling geworden und warm geworden." }
  ]},
  { id: "v289", word: "着く", reading: "つく", meaning: "ankommen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "駅に着きました。", reading: "えきにつきました。", de: "Ich bin am Bahnhof angekommen." },
    { jp: "何時に着きますか。", reading: "なんじにつきますか。", de: "Um wie viel Uhr kommen Sie an?" }
  ]},
  { id: "v290", word: "呼ぶ", reading: "よぶ", meaning: "rufen / einladen", pos: "Verb (Godan, ぶ)", level: "adv", examples: [
    { jp: "タクシーを呼んでください。", reading: "タクシーをよんでください。", de: "Rufen Sie bitte ein Taxi." },
    { jp: "友達を家に呼びました。", reading: "ともだちをいえによびました。", de: "Ich habe einen Freund zu mir nach Hause eingeladen." }
  ]},

  // Adjektive
  { id: "v291", word: "強い", reading: "つよい", meaning: "stark", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "彼はとても強いです。", reading: "かれはとてもつよいです。", de: "Er ist sehr stark." },
    { jp: "今日は風が強いです。", reading: "きょうはかぜがつよいです。", de: "Heute ist der Wind stark." }
  ]},
  { id: "v292", word: "弱い", reading: "よわい", meaning: "schwach", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "私は体が弱いです。", reading: "わたしはからだがよわいです。", de: "Ich habe eine schwache Konstitution." },
    { jp: "この電池は弱いです。", reading: "このでんちはよわいです。", de: "Diese Batterie ist schwach." }
  ]},
  { id: "v293", word: "明るい", reading: "あかるい", meaning: "hell / heiter", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この部屋は明るいです。", reading: "このへやはあかるいです。", de: "Dieses Zimmer ist hell." },
    { jp: "彼女は明るい人です。", reading: "かのじょはあかるいひとです。", de: "Sie ist ein fröhlicher Mensch." }
  ]},
  { id: "v294", word: "暗い", reading: "くらい", meaning: "dunkel", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "外はもう暗いです。", reading: "そとはもうくらいです。", de: "Draußen ist es schon dunkel." },
    { jp: "この部屋は少し暗いです。", reading: "このへやはすこしくらいです。", de: "Dieses Zimmer ist etwas dunkel." }
  ]},
  { id: "v295", word: "近い", reading: "ちかい", meaning: "nah", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "駅は家から近いです。", reading: "えきはいえからちかいです。", de: "Der Bahnhof ist nah am Haus." },
    { jp: "近いスーパーで買い物します。", reading: "ちかいスーパーでかいものします。", de: "Ich kaufe im nahen Supermarkt ein." }
  ]},
  { id: "v296", word: "遠い", reading: "とおい", meaning: "weit / fern", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "学校は駅から遠いです。", reading: "がっこうはえきからとおいです。", de: "Die Schule ist weit vom Bahnhof entfernt." },
    { jp: "遠い国に住んでいます。", reading: "とおいくににすんでいます。", de: "Ich wohne in einem fernen Land." }
  ]},
  { id: "v297", word: "汚い", reading: "きたない", meaning: "schmutzig / dreckig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "手が汚いので洗います。", reading: "てがきたないのであらいます。", de: "Meine Hände sind schmutzig, also wasche ich sie." },
    { jp: "この部屋は汚いです。", reading: "このへやはきたないです。", de: "Dieses Zimmer ist schmutzig." }
  ]},
  { id: "v298", word: "危ない", reading: "あぶない", meaning: "gefährlich", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "ここは車が多くて危ないです。", reading: "ここはくるまがおおくてあぶないです。", de: "Hier sind viele Autos, das ist gefährlich." },
    { jp: "危ないですから、気をつけてください。", reading: "あぶないですから、きをつけてください。", de: "Es ist gefährlich, also passen Sie bitte auf." }
  ]},
  { id: "v299", word: "正しい", reading: "ただしい", meaning: "richtig / korrekt", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "この答えは正しいです。", reading: "このこたえはただしいです。", de: "Diese Antwort ist richtig." },
    { jp: "正しい日本語を勉強します。", reading: "ただしいにほんごをべんきょうします。", de: "Ich lerne korrektes Japanisch." }
  ]},
  { id: "v300", word: "うるさい", reading: "うるさい", meaning: "laut / lästig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "外がうるさいです。", reading: "そとがうるさいです。", de: "Draußen ist es laut." },
    { jp: "この店は音楽がうるさいです。", reading: "このみせはおんがくがうるさいです。", de: "In diesem Laden ist die Musik zu laut." }
  ]},
  { id: "v301", word: "若い", reading: "わかい", meaning: "jung", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "あの先生はまだ若いです。", reading: "あのせんせいはまだわかいです。", de: "Dieser Lehrer ist noch jung." },
    { jp: "若いとき、よく旅行しました。", reading: "わかいとき、よくりょこうしました。", de: "Als ich jung war, bin ich oft gereist." }
  ]},
  { id: "v302", word: "不便", reading: "ふべん", meaning: "unpraktisch / unbequem", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "この町はバスが少なくて不便です。", reading: "このまちはバスがすくなくてふべんです。", de: "In dieser Stadt fahren wenige Busse, das ist unpraktisch." },
    { jp: "駅から遠くて不便です。", reading: "えきからとおくてふべんです。", de: "Es ist weit vom Bahnhof und unpraktisch." }
  ]},
  { id: "v303", word: "簡単", reading: "かんたん", meaning: "einfach / leicht", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "この問題は簡単です。", reading: "このもんだいはかんたんです。", de: "Diese Aufgabe ist einfach." },
    { jp: "簡単な料理を作りました。", reading: "かんたんなりょうりをつくりました。", de: "Ich habe ein einfaches Gericht gekocht." }
  ]},
  { id: "v304", word: "色々", reading: "いろいろ", meaning: "verschieden / allerlei", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "店で色々な物を買いました。", reading: "みせでいろいろなものをかいました。", de: "Ich habe im Laden verschiedene Dinge gekauft." },
    { jp: "色々ありがとうございました。", reading: "いろいろありがとうございました。", de: "Vielen Dank für alles." }
  ]},
  { id: "v305", word: "同じ", reading: "おなじ", meaning: "gleich / dasselbe", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "私と妹は同じ学校です。", reading: "わたしといもうとはおなじがっこうです。", de: "Meine Schwester und ich gehen auf dieselbe Schule." },
    { jp: "これと同じ物がほしいです。", reading: "これとおなじものがほしいです。", de: "Ich möchte das Gleiche wie das hier." }
  ]},

  // Nomen - Haushalt, Schule, Gegenstände
  { id: "v306", word: "ベッド", reading: "ベッド", meaning: "Bett", pos: "Nomen", level: "easy", examples: [
    { jp: "ベッドで寝ます。", reading: "ベッドでねます。", de: "Ich schlafe im Bett." },
    { jp: "新しいベッドを買いました。", reading: "あたらしいベッドをかいました。", de: "Ich habe ein neues Bett gekauft." }
  ]},
  { id: "v307", word: "冷蔵庫", reading: "れいぞうこ", meaning: "Kühlschrank", pos: "Nomen", level: "adv", examples: [
    { jp: "牛乳は冷蔵庫にあります。", reading: "ぎゅうにゅうはれいぞうこにあります。", de: "Die Milch ist im Kühlschrank." },
    { jp: "冷蔵庫に野菜を入れます。", reading: "れいぞうこにやさいをいれます。", de: "Ich lege das Gemüse in den Kühlschrank." }
  ]},
  { id: "v308", word: "電気", reading: "でんき", meaning: "Licht / Strom / Elektrizität", pos: "Nomen", level: "easy", examples: [
    { jp: "電気をつけてください。", reading: "でんきをつけてください。", de: "Schalten Sie bitte das Licht ein." },
    { jp: "寝る前に電気を消します。", reading: "ねるまえにでんきをけします。", de: "Vor dem Schlafen schalte ich das Licht aus." }
  ]},
  { id: "v309", word: "紙", reading: "かみ", meaning: "Papier", pos: "Nomen", level: "easy", examples: [
    { jp: "紙に名前を書きます。", reading: "かみになまえをかきます。", de: "Ich schreibe meinen Namen auf das Papier." },
    { jp: "白い紙をください。", reading: "しろいかみをください。", de: "Geben Sie mir bitte weißes Papier." }
  ]},
  { id: "v310", word: "鉛筆", reading: "えんぴつ", meaning: "Bleistift", pos: "Nomen", level: "easy", examples: [
    { jp: "鉛筆で書いてください。", reading: "えんぴつでかいてください。", de: "Schreiben Sie bitte mit einem Bleistift." },
    { jp: "鉛筆が三本あります。", reading: "えんぴつがさんぼんあります。", de: "Es gibt drei Bleistifte." }
  ]},
  { id: "v311", word: "ペン", reading: "ペン", meaning: "Kugelschreiber / Stift", pos: "Nomen", level: "easy", examples: [
    { jp: "ペンを貸してください。", reading: "ペンをかしてください。", de: "Leihen Sie mir bitte einen Stift." },
    { jp: "青いペンで書きました。", reading: "あおいペンでかきました。", de: "Ich habe mit einem blauen Stift geschrieben." }
  ]},
  { id: "v312", word: "ノート", reading: "ノート", meaning: "Heft / Notizbuch", pos: "Nomen", level: "easy", examples: [
    { jp: "ノートに書きます。", reading: "ノートにかきます。", de: "Ich schreibe ins Heft." },
    { jp: "新しいノートを買いました。", reading: "あたらしいノートをかいました。", de: "Ich habe ein neues Heft gekauft." }
  ]},
  { id: "v313", word: "消しゴム", reading: "けしゴム", meaning: "Radiergummi", pos: "Nomen", level: "adv", examples: [
    { jp: "消しゴムを忘れました。", reading: "けしゴムをわすれました。", de: "Ich habe meinen Radiergummi vergessen." },
    { jp: "消しゴムで字を消します。", reading: "けしゴムでじをけします。", de: "Ich radiere die Buchstaben mit dem Radiergummi weg." }
  ]},
  { id: "v314", word: "辞書", reading: "じしょ", meaning: "Wörterbuch", pos: "Nomen", level: "adv", examples: [
    { jp: "辞書で言葉を調べます。", reading: "じしょでことばをしらべます。", de: "Ich schlage Wörter im Wörterbuch nach." },
    { jp: "この辞書はとても便利です。", reading: "このじしょはとてもべんりです。", de: "Dieses Wörterbuch ist sehr praktisch." }
  ]},
  { id: "v315", word: "教科書", reading: "きょうかしょ", meaning: "Lehrbuch / Schulbuch", pos: "Nomen", level: "adv", examples: [
    { jp: "教科書を開いてください。", reading: "きょうかしょをひらいてください。", de: "Öffnen Sie bitte Ihr Lehrbuch." },
    { jp: "日本語の教科書を買いました。", reading: "にほんごのきょうかしょをかいました。", de: "Ich habe ein japanisches Lehrbuch gekauft." }
  ]},
  { id: "v316", word: "宿題", reading: "しゅくだい", meaning: "Hausaufgabe", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日宿題をします。", reading: "まいにちしゅくだいをします。", de: "Ich mache jeden Tag Hausaufgaben." },
    { jp: "宿題はもう終わりました。", reading: "しゅくだいはもうおわりました。", de: "Die Hausaufgaben sind schon fertig." }
  ]},
  { id: "v317", word: "質問", reading: "しつもん", meaning: "Frage", pos: "Nomen", level: "adv", examples: [
    { jp: "質問があります。", reading: "しつもんがあります。", de: "Ich habe eine Frage." },
    { jp: "先生に質問しました。", reading: "せんせいにしつもんしました。", de: "Ich habe dem Lehrer eine Frage gestellt." }
  ]},
  { id: "v318", word: "問題", reading: "もんだい", meaning: "Problem / Aufgabe", pos: "Nomen", level: "adv", examples: [
    { jp: "この問題は難しいです。", reading: "このもんだいはむずかしいです。", de: "Diese Aufgabe ist schwierig." },
    { jp: "問題が三つあります。", reading: "もんだいがみっつあります。", de: "Es gibt drei Aufgaben." }
  ]},
  { id: "v319", word: "答え", reading: "こたえ", meaning: "Antwort", pos: "Nomen", level: "adv", examples: [
    { jp: "答えはこれです。", reading: "こたえはこれです。", de: "Das ist die Antwort." },
    { jp: "答えが分かりません。", reading: "こたえがわかりません。", de: "Ich weiß die Antwort nicht." }
  ]},
  { id: "v320", word: "番号", reading: "ばんごう", meaning: "Nummer", pos: "Nomen", level: "adv", examples: [
    { jp: "電話番号を教えてください。", reading: "でんわばんごうをおしえてください。", de: "Geben Sie mir bitte Ihre Telefonnummer." },
    { jp: "この番号は何ですか。", reading: "このばんごうはなんですか。", de: "Was ist diese Nummer?" }
  ]},
  { id: "v321", word: "地図", reading: "ちず", meaning: "Landkarte / Stadtplan", pos: "Nomen", level: "adv", examples: [
    { jp: "地図を見て駅に行きます。", reading: "ちずをみてえきにいきます。", de: "Ich schaue auf die Karte und gehe zum Bahnhof." },
    { jp: "この地図は新しいです。", reading: "このちずはあたらしいです。", de: "Diese Karte ist neu." }
  ]},
  { id: "v322", word: "切符", reading: "きっぷ", meaning: "Fahrkarte / Ticket", pos: "Nomen", level: "adv", examples: [
    { jp: "電車の切符を買いました。", reading: "でんしゃのきっぷをかいました。", de: "Ich habe eine Zugfahrkarte gekauft." },
    { jp: "切符はどこで買いますか。", reading: "きっぷはどこでかいますか。", de: "Wo kauft man die Fahrkarte?" }
  ]},
  { id: "v323", word: "お金", reading: "おかね", meaning: "Geld", pos: "Nomen", level: "easy", examples: [
    { jp: "お金がありません。", reading: "おかねがありません。", de: "Ich habe kein Geld." },
    { jp: "銀行でお金を下ろします。", reading: "ぎんこうでおかねをおろします。", de: "Ich hebe bei der Bank Geld ab." }
  ]},
  { id: "v324", word: "台所", reading: "だいどころ", meaning: "Küche", pos: "Nomen", level: "adv", examples: [
    { jp: "母は台所で料理を作ります。", reading: "はははだいどころでりょうりをつくります。", de: "Meine Mutter kocht in der Küche." },
    { jp: "台所はきれいです。", reading: "だいどころはきれいです。", de: "Die Küche ist sauber." }
  ]},
  { id: "v325", word: "お風呂", reading: "おふろ", meaning: "Bad / Badewanne", pos: "Nomen", level: "adv", examples: [
    { jp: "毎晩お風呂に入ります。", reading: "まいばんおふろにはいります。", de: "Ich nehme jeden Abend ein Bad." },
    { jp: "お風呂は気持ちいいです。", reading: "おふろはきもちいいです。", de: "Ein Bad ist angenehm." }
  ]},
  { id: "v326", word: "庭", reading: "にわ", meaning: "Garten", pos: "Nomen", level: "adv", examples: [
    { jp: "庭に花がたくさんあります。", reading: "にわにはながたくさんあります。", de: "Im Garten gibt es viele Blumen." },
    { jp: "庭で犬が遊んでいます。", reading: "にわでいぬがあそんでいます。", de: "Im Garten spielt ein Hund." }
  ]},
  { id: "v327", word: "建物", reading: "たてもの", meaning: "Gebäude", pos: "Nomen", level: "adv", examples: [
    { jp: "あの建物は高いです。", reading: "あのたてものはたかいです。", de: "Jenes Gebäude ist hoch." },
    { jp: "古い建物がたくさんあります。", reading: "ふるいたてものがたくさんあります。", de: "Es gibt viele alte Gebäude." }
  ]},
  { id: "v328", word: "店", reading: "みせ", meaning: "Laden / Geschäft", pos: "Nomen", level: "easy", examples: [
    { jp: "この店は安いです。", reading: "このみせはやすいです。", de: "Dieser Laden ist günstig." },
    { jp: "店で果物を買いました。", reading: "みせでくだものをかいました。", de: "Ich habe im Laden Obst gekauft." }
  ]},
  { id: "v329", word: "道", reading: "みち", meaning: "Weg / Straße", pos: "Nomen", level: "easy", examples: [
    { jp: "この道はとても狭いです。", reading: "このみちはとてもせまいです。", de: "Diese Straße ist sehr eng." },
    { jp: "道で友達に会いました。", reading: "みちでともだちにあいました。", de: "Ich habe auf der Straße einen Freund getroffen." }
  ]},
  { id: "v330", word: "町", reading: "まち", meaning: "Stadt / Ort", pos: "Nomen", level: "easy", examples: [
    { jp: "私の町は静かです。", reading: "わたしのまちはしずかです。", de: "Meine Stadt ist ruhig." },
    { jp: "町に新しい店ができました。", reading: "まちにあたらしいみせができました。", de: "In der Stadt hat ein neuer Laden eröffnet." }
  ]},

  // Essen & Trinken
  { id: "v331", word: "お弁当", reading: "おべんとう", meaning: "Bentō / Lunchbox", pos: "Nomen", level: "adv", examples: [
    { jp: "昼にお弁当を食べます。", reading: "ひるにおべんとうをたべます。", de: "Mittags esse ich ein Bentō." },
    { jp: "母がお弁当を作りました。", reading: "ははがおべんとうをつくりました。", de: "Meine Mutter hat ein Bentō gemacht." }
  ]},
  { id: "v332", word: "ケーキ", reading: "ケーキ", meaning: "Kuchen / Torte", pos: "Nomen", level: "easy", examples: [
    { jp: "誕生日にケーキを食べます。", reading: "たんじょうびにケーキをたべます。", de: "Zum Geburtstag esse ich Kuchen." },
    { jp: "このケーキは甘いです。", reading: "このケーキはあまいです。", de: "Dieser Kuchen ist süß." }
  ]},
  { id: "v333", word: "お菓子", reading: "おかし", meaning: "Süßigkeiten / Snacks", pos: "Nomen", level: "adv", examples: [
    { jp: "子供はお菓子が好きです。", reading: "こどもはおかしがすきです。", de: "Kinder mögen Süßigkeiten." },
    { jp: "お菓子をたくさん買いました。", reading: "おかしをたくさんかいました。", de: "Ich habe viele Süßigkeiten gekauft." }
  ]},
  { id: "v334", word: "砂糖", reading: "さとう", meaning: "Zucker", pos: "Nomen", level: "adv", examples: [
    { jp: "コーヒーに砂糖を入れます。", reading: "コーヒーにさとうをいれます。", de: "Ich gebe Zucker in den Kaffee." },
    { jp: "砂糖はどこにありますか。", reading: "さとうはどこにありますか。", de: "Wo ist der Zucker?" }
  ]},
  { id: "v335", word: "塩", reading: "しお", meaning: "Salz", pos: "Nomen", level: "adv", examples: [
    { jp: "料理に塩を入れます。", reading: "りょうりにしおをいれます。", de: "Ich gebe Salz in das Gericht." },
    { jp: "塩を取ってください。", reading: "しおをとってください。", de: "Reichen Sie mir bitte das Salz." }
  ]},
  { id: "v336", word: "紅茶", reading: "こうちゃ", meaning: "schwarzer Tee", pos: "Nomen", level: "adv", examples: [
    { jp: "朝に紅茶を飲みます。", reading: "あさにこうちゃをのみます。", de: "Morgens trinke ich schwarzen Tee." },
    { jp: "紅茶とコーヒー、どちらがいいですか。", reading: "こうちゃとコーヒー、どちらがいいですか。", de: "Was möchten Sie lieber, Tee oder Kaffee?" }
  ]},
  { id: "v337", word: "ビール", reading: "ビール", meaning: "Bier", pos: "Nomen", level: "easy", examples: [
    { jp: "父はビールが好きです。", reading: "ちちはビールがすきです。", de: "Mein Vater mag Bier." },
    { jp: "夏は冷たいビールを飲みます。", reading: "なつはつめたいビールをのみます。", de: "Im Sommer trinke ich kaltes Bier." }
  ]},
  { id: "v338", word: "チーズ", reading: "チーズ", meaning: "Käse", pos: "Nomen", level: "easy", examples: [
    { jp: "パンにチーズをのせます。", reading: "パンにチーズをのせます。", de: "Ich lege Käse auf das Brot." },
    { jp: "チーズが大好きです。", reading: "チーズがだいすきです。", de: "Ich liebe Käse." }
  ]},
  { id: "v339", word: "飴", reading: "あめ", meaning: "Bonbon / Süßigkeit", pos: "Nomen", level: "adv", examples: [
    { jp: "子供に飴をあげました。", reading: "こどもにあめをあげました。", de: "Ich habe dem Kind ein Bonbon gegeben." },
    { jp: "かばんの中に飴があります。", reading: "かばんのなかにあめがあります。", de: "In der Tasche ist ein Bonbon." }
  ]},
  { id: "v340", word: "料理", reading: "りょうり", meaning: "Gericht / Küche / Kochen", pos: "Nomen", level: "easy", examples: [
    { jp: "母の料理はおいしいです。", reading: "ははのりょうりはおいしいです。", de: "Das Essen meiner Mutter ist lecker." },
    { jp: "日本料理が好きです。", reading: "にほんりょうりがすきです。", de: "Ich mag die japanische Küche." }
  ]},

  // Zeit & Zähler
  { id: "v341", word: "今朝", reading: "けさ", meaning: "heute Morgen", pos: "Nomen", level: "easy", examples: [
    { jp: "今朝は早く起きました。", reading: "けさははやくおきました。", de: "Heute Morgen bin ich früh aufgestanden." },
    { jp: "今朝パンを食べました。", reading: "けさパンをたべました。", de: "Heute Morgen habe ich Brot gegessen." }
  ]},
  { id: "v342", word: "今晩", reading: "こんばん", meaning: "heute Abend", pos: "Nomen", level: "easy", examples: [
    { jp: "今晩、友達に会います。", reading: "こんばん、ともだちにあいます。", de: "Heute Abend treffe ich einen Freund." },
    { jp: "今晩は何を食べますか。", reading: "こんばんはなにをたべますか。", de: "Was essen Sie heute Abend?" }
  ]},
  { id: "v343", word: "毎晩", reading: "まいばん", meaning: "jeden Abend", pos: "Nomen/Adverb", level: "easy", examples: [
    { jp: "毎晩テレビを見ます。", reading: "まいばんテレビをみます。", de: "Jeden Abend schaue ich Fernsehen." },
    { jp: "毎晩日本語を勉強します。", reading: "まいばんにほんごをべんきょうします。", de: "Jeden Abend lerne ich Japanisch." }
  ]},
  { id: "v344", word: "一日", reading: "いちにち", meaning: "ein Tag / den ganzen Tag", pos: "Nomen", level: "adv", examples: [
    { jp: "昨日は一日中家にいました。", reading: "きのうはいちにちじゅういえにいました。", de: "Gestern war ich den ganzen Tag zu Hause." },
    { jp: "一日に三回ご飯を食べます。", reading: "いちにちにさんかいごはんをたべます。", de: "Ich esse dreimal am Tag." }
  ]},
  { id: "v345", word: "時間", reading: "じかん", meaning: "Zeit / Stunde", pos: "Nomen", level: "easy", examples: [
    { jp: "時間がありません。", reading: "じかんがありません。", de: "Ich habe keine Zeit." },
    { jp: "毎日二時間勉強します。", reading: "まいにちにじかんべんきょうします。", de: "Ich lerne jeden Tag zwei Stunden." }
  ]},
  { id: "v346", word: "分", reading: "ふん", meaning: "Minute", pos: "Nomen", level: "adv", examples: [
    { jp: "あと五分待ってください。", reading: "あとごふんまってください。", de: "Warten Sie bitte noch fünf Minuten." },
    { jp: "駅まで十分かかります。", reading: "えきまでじゅっぷんかかります。", de: "Bis zum Bahnhof dauert es zehn Minuten." }
  ]},
  { id: "v347", word: "週末", reading: "しゅうまつ", meaning: "Wochenende", pos: "Nomen", level: "adv", examples: [
    { jp: "週末に映画を見ます。", reading: "しゅうまつにえいがをみます。", de: "Am Wochenende schaue ich einen Film." },
    { jp: "週末は何をしますか。", reading: "しゅうまつはなにをしますか。", de: "Was machen Sie am Wochenende?" }
  ]},
  { id: "v348", word: "誕生日", reading: "たんじょうび", meaning: "Geburtstag", pos: "Nomen", level: "adv", examples: [
    { jp: "誕生日はいつですか。", reading: "たんじょうびはいつですか。", de: "Wann haben Sie Geburtstag?" },
    { jp: "友達の誕生日にプレゼントをあげます。", reading: "ともだちのたんじょうびにプレゼントをあげます。", de: "Zum Geburtstag meines Freundes mache ich ein Geschenk." }
  ]},
  { id: "v349", word: "休み", reading: "やすみ", meaning: "Pause / Urlaub / freier Tag", pos: "Nomen", level: "easy", examples: [
    { jp: "明日は休みです。", reading: "あしたはやすみです。", de: "Morgen ist frei." },
    { jp: "夏休みに旅行します。", reading: "なつやすみにりょこうします。", de: "In den Sommerferien reise ich." }
  ]},
  { id: "v350", word: "半", reading: "はん", meaning: "halb / Hälfte (Uhrzeit)", pos: "Nomen", level: "adv", examples: [
    { jp: "今、七時半です。", reading: "いま、しちじはんです。", de: "Es ist jetzt halb acht." },
    { jp: "一時間半待ちました。", reading: "いちじかんはんまちました。", de: "Ich habe anderthalb Stunden gewartet." }
  ]},

  // Orte & Verkehr
  { id: "v351", word: "喫茶店", reading: "きっさてん", meaning: "Café", pos: "Nomen", level: "adv", examples: [
    { jp: "喫茶店でコーヒーを飲みます。", reading: "きっさてんでコーヒーをのみます。", de: "Ich trinke Kaffee im Café." },
    { jp: "駅の前に喫茶店があります。", reading: "えきのまえにきっさてんがあります。", de: "Vor dem Bahnhof gibt es ein Café." }
  ]},
  { id: "v352", word: "映画館", reading: "えいがかん", meaning: "Kino", pos: "Nomen", level: "adv", examples: [
    { jp: "映画館で映画を見ました。", reading: "えいがかんでえいがをみました。", de: "Ich habe im Kino einen Film gesehen." },
    { jp: "この映画館は新しいです。", reading: "このえいがかんはあたらしいです。", de: "Dieses Kino ist neu." }
  ]},
  { id: "v353", word: "デパート", reading: "デパート", meaning: "Kaufhaus / Warenhaus", pos: "Nomen", level: "adv", examples: [
    { jp: "デパートで服を買いました。", reading: "デパートでふくをかいました。", de: "Ich habe im Kaufhaus Kleidung gekauft." },
    { jp: "デパートはとても大きいです。", reading: "デパートはとてもおおきいです。", de: "Das Kaufhaus ist sehr groß." }
  ]},
  { id: "v354", word: "教室", reading: "きょうしつ", meaning: "Klassenzimmer", pos: "Nomen", level: "adv", examples: [
    { jp: "教室で勉強します。", reading: "きょうしつでべんきょうします。", de: "Ich lerne im Klassenzimmer." },
    { jp: "教室に学生がたくさんいます。", reading: "きょうしつにがくせいがたくさんいます。", de: "Im Klassenzimmer sind viele Schüler." }
  ]},
  { id: "v355", word: "空港", reading: "くうこう", meaning: "Flughafen", pos: "Nomen", level: "adv", examples: [
    { jp: "空港まで電車で行きます。", reading: "くうこうまででんしゃでいきます。", de: "Ich fahre mit dem Zug zum Flughafen." },
    { jp: "友達を空港で待ちます。", reading: "ともだちをくうこうでまちます。", de: "Ich warte am Flughafen auf meinen Freund." }
  ]},
  { id: "v356", word: "国", reading: "くに", meaning: "Land", pos: "Nomen", level: "easy", examples: [
    { jp: "あなたの国はどこですか。", reading: "あなたのくにはどこですか。", de: "Aus welchem Land kommen Sie?" },
    { jp: "色々な国に行きたいです。", reading: "いろいろなくににいきたいです。", de: "Ich möchte in verschiedene Länder reisen." }
  ]},
  { id: "v357", word: "山", reading: "やま", meaning: "Berg", pos: "Nomen", level: "easy", examples: [
    { jp: "あの山はとても高いです。", reading: "あのやまはとてもたかいです。", de: "Jener Berg ist sehr hoch." },
    { jp: "夏に山に登ります。", reading: "なつにやまにのぼります。", de: "Im Sommer besteige ich einen Berg." }
  ]},
  { id: "v358", word: "川", reading: "かわ", meaning: "Fluss", pos: "Nomen", level: "easy", examples: [
    { jp: "この川は長いです。", reading: "このかわはながいです。", de: "Dieser Fluss ist lang." },
    { jp: "川で泳ぎました。", reading: "かわでおよぎました。", de: "Ich bin im Fluss geschwommen." }
  ]},
  { id: "v359", word: "外国", reading: "がいこく", meaning: "Ausland", pos: "Nomen", level: "adv", examples: [
    { jp: "外国に住みたいです。", reading: "がいこくにすみたいです。", de: "Ich möchte im Ausland leben." },
    { jp: "外国の映画が好きです。", reading: "がいこくのえいががすきです。", de: "Ich mag ausländische Filme." }
  ]},
  { id: "v360", word: "入口", reading: "いりぐち", meaning: "Eingang", pos: "Nomen", level: "adv", examples: [
    { jp: "入口はあちらです。", reading: "いりぐちはあちらです。", de: "Der Eingang ist dort drüben." },
    { jp: "店の入口で待っています。", reading: "みせのいりぐちでまっています。", de: "Ich warte am Eingang des Ladens." }
  ]},

  // Körper & Gesundheit
  { id: "v361", word: "体", reading: "からだ", meaning: "Körper", pos: "Nomen", level: "adv", examples: [
    { jp: "毎日運動して体を動かします。", reading: "まいにちうんどうしてからだをうごかします。", de: "Ich bewege jeden Tag durch Sport meinen Körper." },
    { jp: "体の調子がいいです。", reading: "からだのちょうしがいいです。", de: "Mir geht es gesundheitlich gut." }
  ]},
  { id: "v362", word: "頭", reading: "あたま", meaning: "Kopf", pos: "Nomen", level: "adv", examples: [
    { jp: "頭が痛いです。", reading: "あたまがいたいです。", de: "Ich habe Kopfschmerzen." },
    { jp: "彼は頭がいいです。", reading: "かれはあたまがいいです。", de: "Er ist klug." }
  ]},
  { id: "v363", word: "目", reading: "め", meaning: "Auge", pos: "Nomen", level: "easy", examples: [
    { jp: "目が大きいですね。", reading: "めがおおきいですね。", de: "Sie haben große Augen." },
    { jp: "目が疲れました。", reading: "めがつかれました。", de: "Meine Augen sind müde." }
  ]},
  { id: "v364", word: "耳", reading: "みみ", meaning: "Ohr", pos: "Nomen", level: "easy", examples: [
    { jp: "耳が痛いです。", reading: "みみがいたいです。", de: "Mein Ohr tut weh." },
    { jp: "犬は耳がいいです。", reading: "いぬはみみがいいです。", de: "Hunde hören gut." }
  ]},
  { id: "v365", word: "口", reading: "くち", meaning: "Mund", pos: "Nomen", level: "easy", examples: [
    { jp: "口を開けてください。", reading: "くちをあけてください。", de: "Öffnen Sie bitte den Mund." },
    { jp: "口に食べ物が入っています。", reading: "くちにたべものがはいっています。", de: "Ich habe Essen im Mund." }
  ]},
  { id: "v366", word: "手", reading: "て", meaning: "Hand", pos: "Nomen", level: "easy", examples: [
    { jp: "食事の前に手を洗います。", reading: "しょくじのまえにてをあらいます。", de: "Vor dem Essen wasche ich mir die Hände." },
    { jp: "手を上げてください。", reading: "てをあげてください。", de: "Heben Sie bitte die Hand." }
  ]},
  { id: "v367", word: "足", reading: "あし", meaning: "Bein / Fuß", pos: "Nomen", level: "easy", examples: [
    { jp: "足が痛いです。", reading: "あしがいたいです。", de: "Mein Bein tut weh." },
    { jp: "たくさん歩いて足が疲れました。", reading: "たくさんあるいてあしがつかれました。", de: "Ich bin viel gelaufen und meine Beine sind müde." }
  ]},
  { id: "v368", word: "顔", reading: "かお", meaning: "Gesicht", pos: "Nomen", level: "easy", examples: [
    { jp: "朝、顔を洗います。", reading: "あさ、かおをあらいます。", de: "Morgens wasche ich mir das Gesicht." },
    { jp: "彼女はきれいな顔をしています。", reading: "かのじょはきれいなかおをしています。", de: "Sie hat ein hübsches Gesicht." }
  ]},
  { id: "v369", word: "病気", reading: "びょうき", meaning: "Krankheit", pos: "Nomen", level: "adv", examples: [
    { jp: "病気で会社を休みました。", reading: "びょうきでかいしゃをやすみました。", de: "Wegen Krankheit bin ich nicht zur Arbeit gegangen." },
    { jp: "病気のとき、病院に行きます。", reading: "びょうきのとき、びょういんにいきます。", de: "Wenn ich krank bin, gehe ich ins Krankenhaus." }
  ]},
  { id: "v370", word: "薬", reading: "くすり", meaning: "Medizin / Medikament", pos: "Nomen", level: "adv", examples: [
    { jp: "病気のとき、薬を飲みます。", reading: "びょうきのとき、くすりをのみます。", de: "Wenn ich krank bin, nehme ich Medizin." },
    { jp: "この薬は一日三回飲みます。", reading: "このくすりはいちにちさんかいのみます。", de: "Diese Medizin nehme ich dreimal am Tag." }
  ]},
];
