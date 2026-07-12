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
  { id: "v068", word: "牛乳", reading: "ぎゅうにゅう", meaning: "Milch (Kuhmilch)", pos: "Nomen", level: "easy", examples: [
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
  { id: "v220", word: "仕事する", reading: "しごとする", meaning: "arbeiten (Arbeit verrichten)", pos: "Verb (する-Verb)", level: "adv", examples: [
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
  { id: "v254", word: "どう", reading: "どう", meaning: "wie? (Zustand/Meinung)", pos: "Fragewort", level: "easy", examples: [
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
  { id: "v262", word: "もう", reading: "もう", meaning: "schon / bereits / nicht mehr (mit Verneinung)", pos: "Adverb", level: "easy", examples: [
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
  { id: "v281", word: "働く", reading: "はたらく", meaning: "arbeiten (berufstätig/körperlich)", pos: "Verb (Godan, く)", level: "adv", examples: [
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
    { jp: "色々ありがとうございました。", reading: "いろいろありがとうございました。", de: "Vielen Dank für alles." },
    { jp: "いろいろな国に行きたいです。", reading: "いろいろなくににいきたいです。", de: "Ich möchte in verschiedene Länder reisen." }
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
  { id: "v324", word: "台所", reading: "だいどころ", meaning: "Küche (traditionell)", pos: "Nomen", level: "adv", examples: [
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

  // Alltagsausdrücke & höfliche Floskeln
  { id: "v371", word: "いってきます", reading: "いってきます", meaning: "bis später / ich gehe dann (beim Weggehen)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「いってきます」と言って、家を出ました。", reading: "「いってきます」といって、いえをでました。", de: "\"Bis später\", sagte ich und ging aus dem Haus." },
    { jp: "毎朝、いってきますと言います。", reading: "まいあさ、いってきますといいます。", de: "Jeden Morgen sage ich \"ich gehe dann\"." }
  ]},
  { id: "v372", word: "いってらっしゃい", reading: "いってらっしゃい", meaning: "komm gut wieder (zum Weggehenden)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "母がいってらっしゃいと言いました。", reading: "ははがいってらっしゃいといいました。", de: "Meine Mutter sagte \"komm gut wieder\"." },
    { jp: "子供にいってらっしゃいと言います。", reading: "こどもにいってらっしゃいといいます。", de: "Ich sage dem Kind \"komm gut wieder\"." }
  ]},
  { id: "v373", word: "ただいま", reading: "ただいま", meaning: "ich bin wieder da (beim Heimkommen)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "家に帰って、ただいまと言いました。", reading: "いえにかえって、ただいまといいました。", de: "Ich kam nach Hause und sagte \"ich bin wieder da\"." },
    { jp: "ただいま、お腹が空きました。", reading: "ただいま、おなかがすきました。", de: "Ich bin wieder da, ich habe Hunger." }
  ]},
  { id: "v374", word: "おかえりなさい", reading: "おかえりなさい", meaning: "willkommen zurück", pos: "Ausdruck", level: "easy", examples: [
    { jp: "父におかえりなさいと言いました。", reading: "ちちにおかえりなさいといいました。", de: "Ich sagte zu meinem Vater \"willkommen zurück\"." },
    { jp: "おかえりなさい、今日はどうでしたか。", reading: "おかえりなさい、きょうはどうでしたか。", de: "Willkommen zurück, wie war dein Tag?" }
  ]},
  { id: "v375", word: "しつれいします", reading: "しつれいします", meaning: "mit Verlaub / Entschuldigung (Raum betreten / verlassen)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "部屋に入る前に、失礼しますと言います。", reading: "へやにはいるまえに、しつれいしますといいます。", de: "Bevor ich das Zimmer betrete, sage ich \"mit Verlaub\"." },
    { jp: "お先に失礼します。", reading: "おさきにしつれいします。", de: "Entschuldigung, ich gehe schon mal (vor Ihnen)." }
  ]},
  { id: "v376", word: "おじゃまします", reading: "おじゃまします", meaning: "Entschuldigung die Störung (fremde Wohnung betreten)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "友達の家に入る時、おじゃましますと言いました。", reading: "ともだちのいえにはいるとき、おじゃましますといいました。", de: "Als ich die Wohnung meines Freundes betrat, sagte ich \"Entschuldigung die Störung\"." },
    { jp: "「どうぞ。」「では、おじゃまします。」", reading: "「どうぞ。」「では、おじゃまします。」", de: "\"Bitte herein.\" \"Dann komme ich herein.\"" }
  ]},
  { id: "v377", word: "いらっしゃいませ", reading: "いらっしゃいませ", meaning: "willkommen (Begrüßung im Laden)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "店員がいらっしゃいませと言いました。", reading: "てんいんがいらっしゃいませといいました。", de: "Der Verkäufer sagte \"willkommen\"." },
    { jp: "店に入ると、いらっしゃいませと言われました。", reading: "みせにはいると、いらっしゃいませといわれました。", de: "Als ich den Laden betrat, hieß man mich willkommen." }
  ]},
  { id: "v378", word: "おつかれさまでした", reading: "おつかれさまでした", meaning: "gute Arbeit / danke für die Mühe", pos: "Ausdruck", level: "easy", examples: [
    { jp: "仕事の後で、おつかれさまでしたと言いました。", reading: "しごとのあとで、おつかれさまでしたといいました。", de: "Nach der Arbeit sagte ich \"gute Arbeit\"." },
    { jp: "皆さん、今日もおつかれさまでした。", reading: "みなさん、きょうもおつかれさまでした。", de: "Alle zusammen, auch heute gute Arbeit." }
  ]},
  { id: "v379", word: "おひさしぶりです", reading: "おひさしぶりです", meaning: "lange nicht gesehen", pos: "Ausdruck", level: "easy", examples: [
    { jp: "友達に会って、おひさしぶりですと言いました。", reading: "ともだちにあって、おひさしぶりですといいました。", de: "Ich traf meinen Freund und sagte \"lange nicht gesehen\"." },
    { jp: "おひさしぶりです。お元気でしたか。", reading: "おひさしぶりです。おげんきでしたか。", de: "Lange nicht gesehen. Ging es Ihnen gut?" }
  ]},
  { id: "v380", word: "おめでとうございます", reading: "おめでとうございます", meaning: "herzlichen Glückwunsch", pos: "Ausdruck", level: "easy", examples: [
    { jp: "誕生日おめでとうございます。", reading: "たんじょうびおめでとうございます。", de: "Herzlichen Glückwunsch zum Geburtstag." },
    { jp: "合格おめでとうございますと言いました。", reading: "ごうかくおめでとうございますといいました。", de: "Ich sagte \"Glückwunsch zum Bestehen\"." }
  ]},
  { id: "v381", word: "きをつけて", reading: "きをつけて", meaning: "pass auf dich auf / fahr vorsichtig", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「さようなら、気をつけて。」", reading: "「さようなら、きをつけて。」", de: "\"Auf Wiedersehen, pass auf dich auf.\"" },
    { jp: "道が暗いから、気をつけてください。", reading: "みちがくらいから、きをつけてください。", de: "Der Weg ist dunkel, sei bitte vorsichtig." }
  ]},
  { id: "v382", word: "おだいじに", reading: "おだいじに", meaning: "gute Besserung", pos: "Ausdruck", level: "easy", examples: [
    { jp: "医者がおだいじにと言いました。", reading: "いしゃがおだいじにといいました。", de: "Der Arzt sagte \"gute Besserung\"." },
    { jp: "風邪ですね。おだいじに。", reading: "かぜですね。おだいじに。", de: "Sie haben eine Erkältung. Gute Besserung." }
  ]},
  { id: "v383", word: "だいじょうぶです", reading: "だいじょうぶです", meaning: "alles ok / kein Problem", pos: "Ausdruck", level: "easy", examples: [
    { jp: "「大丈夫ですか。」「はい、大丈夫です。」", reading: "「だいじょうぶですか。」「はい、だいじょうぶです。」", de: "\"Geht es Ihnen gut?\" \"Ja, alles ok.\"" },
    { jp: "心配しないで、大丈夫です。", reading: "しんぱいしないで、だいじょうぶです。", de: "Mach dir keine Sorgen, alles ok." }
  ]},
  { id: "v384", word: "がんばってください", reading: "がんばってください", meaning: "viel Erfolg / streng dich an", pos: "Ausdruck", level: "easy", examples: [
    { jp: "試験、がんばってください。", reading: "しけん、がんばってください。", de: "Viel Erfolg bei der Prüfung." },
    { jp: "みんなが、がんばってと言ってくれました。", reading: "みんなが、がんばってといってくれました。", de: "Alle sagten mir \"streng dich an\"." }
  ]},
  { id: "v385", word: "もしもし", reading: "もしもし", meaning: "hallo (am Telefon)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "電話に出て、もしもしと言いました。", reading: "でんわにでて、もしもしといいました。", de: "Ich ging ans Telefon und sagte \"hallo\"." },
    { jp: "もしもし、田中さんですか。", reading: "もしもし、たなかさんですか。", de: "Hallo, sind Sie Herr Tanaka?" }
  ]},
  { id: "v386", word: "ようこそ", reading: "ようこそ", meaning: "herzlich willkommen", pos: "Ausdruck", level: "easy", examples: [
    { jp: "日本へようこそ。", reading: "にほんへようこそ。", de: "Herzlich willkommen in Japan." },
    { jp: "ようこそ、いらっしゃいました。", reading: "ようこそ、いらっしゃいました。", de: "Herzlich willkommen, schön dass Sie da sind." }
  ]},
  { id: "v387", word: "かしこまりました", reading: "かしこまりました", meaning: "sehr wohl / verstanden (höfliche Zusage)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "店員が「かしこまりました」と言いました。", reading: "てんいんが「かしこまりました」といいました。", de: "Der Angestellte sagte \"sehr wohl\"." },
    { jp: "ご注文、かしこまりました。", reading: "ごちゅうもん、かしこまりました。", de: "Ihre Bestellung, sehr wohl." }
  ]},
  { id: "v388", word: "おまたせしました", reading: "おまたせしました", meaning: "Entschuldigung die Wartezeit / danke fürs Warten", pos: "Ausdruck", level: "adv", examples: [
    { jp: "おまたせしました、どうぞ。", reading: "おまたせしました、どうぞ。", de: "Entschuldigung die Wartezeit, bitte sehr." },
    { jp: "長くおまたせしました。", reading: "ながくおまたせしました。", de: "Entschuldigen Sie die lange Wartezeit." }
  ]},
  { id: "v389", word: "しつれいしました", reading: "しつれいしました", meaning: "Entschuldigung (für etwas Geschehenes)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "間違えて、失礼しましたと言いました。", reading: "まちがえて、しつれいしましたといいました。", de: "Ich machte einen Fehler und sagte \"Entschuldigung\"." },
    { jp: "お名前を間違えて、失礼しました。", reading: "おなまえをまちがえて、しつれいしました。", de: "Entschuldigung, dass ich Ihren Namen verwechselt habe." }
  ]},
  { id: "v390", word: "あまり", reading: "あまり", meaning: "nicht besonders / kaum (mit Verneinung)", pos: "Adverb", level: "easy", examples: [
    { jp: "このコーヒーはあまり熱くありません。", reading: "このコーヒーはあまりあつくありません。", de: "Dieser Kaffee ist nicht besonders heiß." },
    { jp: "昨日はあまり寝ませんでした。", reading: "きのうはあまりねませんでした。", de: "Gestern habe ich kaum geschlafen." }
  ]},
  { id: "v391", word: "ちょっと", reading: "ちょっと", meaning: "ein wenig / kurz", pos: "Adverb", level: "easy", examples: [
    { jp: "ちょっと待ってください。", reading: "ちょっとまってください。", de: "Warten Sie bitte kurz." },
    { jp: "この料理はちょっと辛いです。", reading: "このりょうりはちょっとからいです。", de: "Dieses Gericht ist ein wenig scharf." }
  ]},
  { id: "v392", word: "だいたい", reading: "だいたい", meaning: "ungefähr / im Großen und Ganzen", pos: "Adverb", level: "easy", examples: [
    { jp: "だいたい分かりました。", reading: "だいたいわかりました。", de: "Ich habe es im Großen und Ganzen verstanden." },
    { jp: "駅までだいたい十分かかります。", reading: "えきまでだいたいじゅっぷんかかります。", de: "Bis zum Bahnhof dauert es ungefähr zehn Minuten." }
  ]},
  { id: "v393", word: "たいてい", reading: "たいてい", meaning: "meistens / gewöhnlich", pos: "Adverb", level: "easy", examples: [
    { jp: "週末はたいてい家にいます。", reading: "しゅうまつはたいていいえにいます。", de: "Am Wochenende bin ich meistens zu Hause." },
    { jp: "朝はたいていパンを食べます。", reading: "あさはたいていパンをたべます。", de: "Morgens esse ich gewöhnlich Brot." }
  ]},
  { id: "v395", word: "もっと", reading: "もっと", meaning: "mehr / noch mehr", pos: "Adverb", level: "easy", examples: [
    { jp: "もっと日本語を勉強したいです。", reading: "もっとにほんごをべんきょうしたいです。", de: "Ich möchte mehr Japanisch lernen." },
    { jp: "もっとゆっくり話してください。", reading: "もっとゆっくりはなしてください。", de: "Bitte sprechen Sie noch langsamer." }
  ]},
  { id: "v396", word: "一番", reading: "いちばん", meaning: "am meisten / am besten", pos: "Adverb", level: "easy", examples: [
    { jp: "夏が一番好きです。", reading: "なつがいちばんすきです。", de: "Den Sommer mag ich am liebsten." },
    { jp: "この店のラーメンが一番おいしいです。", reading: "このみせのラーメンがいちばんおいしいです。", de: "Der Ramen in diesem Laden schmeckt am besten." }
  ]},
  { id: "v397", word: "全部", reading: "ぜんぶ", meaning: "alles / ganz", pos: "Adverb", level: "easy", examples: [
    { jp: "宿題を全部やりました。", reading: "しゅくだいをぜんぶやりました。", de: "Ich habe die ganzen Hausaufgaben gemacht." },
    { jp: "ケーキを全部食べました。", reading: "ケーキをぜんぶたべました。", de: "Ich habe den ganzen Kuchen gegessen." }
  ]},
  { id: "v398", word: "だんだん", reading: "だんだん", meaning: "allmählich / nach und nach", pos: "Adverb", level: "adv", examples: [
    { jp: "だんだん寒くなってきました。", reading: "だんだんさむくなってきました。", de: "Es ist allmählich kalt geworden." },
    { jp: "日本語がだんだん分かるようになりました。", reading: "にほんごがだんだんわかるようになりました。", de: "Ich verstehe nach und nach Japanisch." }
  ]},
  { id: "v399", word: "ちょうど", reading: "ちょうど", meaning: "genau / gerade", pos: "Adverb", level: "easy", examples: [
    { jp: "今ちょうど三時です。", reading: "いまちょうどさんじです。", de: "Es ist jetzt genau drei Uhr." },
    { jp: "ちょうど家を出るところです。", reading: "ちょうどいえをでるところです。", de: "Ich bin gerade dabei, das Haus zu verlassen." }
  ]},
  { id: "v400", word: "まっすぐ", reading: "まっすぐ", meaning: "geradeaus / direkt", pos: "Adverb", level: "easy", examples: [
    { jp: "この道をまっすぐ行ってください。", reading: "このみちをまっすぐいってください。", de: "Gehen Sie diese Straße geradeaus." },
    { jp: "仕事の後、まっすぐ家に帰りました。", reading: "しごとのあと、まっすぐいえにかえりました。", de: "Nach der Arbeit bin ich direkt nach Hause gegangen." }
  ]},
  { id: "v401", word: "きっと", reading: "きっと", meaning: "bestimmt / sicherlich", pos: "Adverb", level: "easy", examples: [
    { jp: "明日はきっと晴れます。", reading: "あしたはきっとはれます。", de: "Morgen wird es bestimmt sonnig." },
    { jp: "彼はきっと来ます。", reading: "かれはきっときます。", de: "Er kommt sicherlich." }
  ]},
  { id: "v402", word: "早く", reading: "はやく", meaning: "schnell / früh", pos: "Adverb", level: "easy", examples: [
    { jp: "今朝は早く起きました。", reading: "けさははやくおきました。", de: "Heute Morgen bin ich früh aufgestanden." },
    { jp: "もっと早く歩いてください。", reading: "もっとはやくあるいてください。", de: "Bitte gehen Sie schneller." }
  ]},
  { id: "v403", word: "ずっと", reading: "ずっと", meaning: "die ganze Zeit / weitaus", pos: "Adverb", level: "easy", examples: [
    { jp: "一日中ずっと家にいました。", reading: "いちにちじゅうずっといえにいました。", de: "Ich war den ganzen Tag zu Hause." },
    { jp: "こっちのほうがずっといいです。", reading: "こっちのほうがずっといいです。", de: "Dieses hier ist weitaus besser." }
  ]},
  { id: "v404", word: "ほとんど", reading: "ほとんど", meaning: "fast / beinahe (mit Verneinung: kaum)", pos: "Adverb", level: "adv", examples: [
    { jp: "仕事はほとんど終わりました。", reading: "しごとはほとんどおわりました。", de: "Die Arbeit ist fast fertig." },
    { jp: "お金はほとんど残っていません。", reading: "おかねはほとんどのこっていません。", de: "Es ist kaum Geld übrig." }
  ]},
  { id: "v405", word: "特に", reading: "とくに", meaning: "besonders", pos: "Adverb", level: "adv", examples: [
    { jp: "果物、特にりんごが好きです。", reading: "くだもの、とくにりんごがすきです。", de: "Ich mag Obst, besonders Äpfel." },
    { jp: "今日は特に忙しいです。", reading: "きょうはとくにいそがしいです。", de: "Heute bin ich besonders beschäftigt." }
  ]},
  { id: "v406", word: "なかなか", reading: "なかなか", meaning: "ziemlich / (mit Verneinung) nicht so leicht", pos: "Adverb", level: "adv", examples: [
    { jp: "この本はなかなか面白いです。", reading: "このほんはなかなかおもしろいです。", de: "Dieses Buch ist ziemlich interessant." },
    { jp: "バスがなかなか来ません。", reading: "バスがなかなかきません。", de: "Der Bus kommt einfach nicht." }
  ]},
  { id: "v407", word: "結構", reading: "けっこう", meaning: "ziemlich / ganz gut (auch: nein danke)", pos: "Adverb", level: "adv", examples: [
    { jp: "この問題は結構難しいです。", reading: "このもんだいはけっこうむずかしいです。", de: "Diese Aufgabe ist ziemlich schwer." },
    { jp: "駅まで結構歩きました。", reading: "えきまでけっこうあるきました。", de: "Bis zum Bahnhof bin ich ganz schön viel gelaufen." }
  ]},
  { id: "v408", word: "そろそろ", reading: "そろそろ", meaning: "allmählich / bald (es wird Zeit)", pos: "Adverb", level: "adv", examples: [
    { jp: "そろそろ帰りましょう。", reading: "そろそろかえりましょう。", de: "Lass uns allmählich nach Hause gehen." },
    { jp: "そろそろ電車が来る時間です。", reading: "そろそろでんしゃがくるじかんです。", de: "Es ist bald Zeit, dass der Zug kommt." }
  ]},
  { id: "v409", word: "やっぱり", reading: "やっぱり", meaning: "doch / wie erwartet", pos: "Adverb", level: "adv", examples: [
    { jp: "やっぱりこれにします。", reading: "やっぱりこれにします。", de: "Ich nehme doch dieses." },
    { jp: "やっぱり彼は来ませんでした。", reading: "やっぱりかれはきませんでした。", de: "Wie erwartet ist er nicht gekommen." }
  ]},
  { id: "v410", word: "しばらく", reading: "しばらく", meaning: "eine Weile / eine Zeitlang", pos: "Adverb", level: "adv", examples: [
    { jp: "しばらくお待ちください。", reading: "しばらくおまちください。", de: "Warten Sie bitte eine Weile." },
    { jp: "しばらく日本に住んでいました。", reading: "しばらくにほんにすんでいました。", de: "Ich habe eine Zeitlang in Japan gewohnt." }
  ]},
  { id: "v411", word: "さっき", reading: "さっき", meaning: "vorhin / gerade eben", pos: "Adverb", level: "easy", examples: [
    { jp: "さっき電話がありました。", reading: "さっきでんわがありました。", de: "Vorhin gab es einen Anruf." },
    { jp: "さっきここに来たばかりです。", reading: "さっきここにきたばかりです。", de: "Ich bin gerade eben erst hergekommen." }
  ]}
,

  // ===== Ergänzungen aus Wörterbuch-Glossaren (JP→DE), 2026-07 =====
  { id: "v412", word: "あいさつ", reading: "あいさつ", meaning: "Gruß / Begrüßung", pos: "Nomen", level: "adv", examples: [
    { jp: "朝、先生にあいさつをします。", reading: "あさ、せんせいにあいさつをします。", de: "Morgens grüße ich den Lehrer." },
    { jp: "あいさつは大切です。", reading: "あいさつはたいせつです。", de: "Grüßen ist wichtig." }
  ]},
  { id: "v413", word: "アイスクリーム", reading: "アイスクリーム", meaning: "Eiscreme", pos: "Nomen", level: "easy", examples: [
    { jp: "夏にアイスクリームを食べます。", reading: "なつにアイスクリームをたべます。", de: "Im Sommer esse ich Eis." },
    { jp: "子供はアイスクリームが好きです。", reading: "こどもはアイスクリームがすきです。", de: "Kinder mögen Eis." }
  ]},
  { id: "v414", word: "青い", reading: "あおい", meaning: "blau", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "空が青いです。", reading: "そらがあおいです。", de: "Der Himmel ist blau." },
    { jp: "青いシャツを買いました。", reading: "あおいシャツをかいました。", de: "Ich habe ein blaues Hemd gekauft." }
  ]},
  { id: "v415", word: "赤い", reading: "あかい", meaning: "rot", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "赤いりんごを食べます。", reading: "あかいりんごをたべます。", de: "Ich esse einen roten Apfel." },
    { jp: "彼女は赤いドレスを着ています。", reading: "かのじょはあかいドレスをきています。", de: "Sie trägt ein rotes Kleid." }
  ]},
  { id: "v416", word: "赤ちゃん", reading: "あかちゃん", meaning: "Baby", pos: "Nomen", level: "easy", examples: [
    { jp: "赤ちゃんが寝ています。", reading: "あかちゃんがねています。", de: "Das Baby schläft." },
    { jp: "友達に赤ちゃんが生まれました。", reading: "ともだちにあかちゃんがうまれました。", de: "Meine Freundin hat ein Baby bekommen." }
  ]},
  { id: "v417", word: "あげる", reading: "あげる", meaning: "geben (jemandem)", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "友達にプレゼントをあげます。", reading: "ともだちにプレゼントをあげます。", de: "Ich gebe meinem Freund ein Geschenk." },
    { jp: "妹に本をあげました。", reading: "いもうとにほんをあげました。", de: "Ich habe meiner Schwester ein Buch gegeben." }
  ]},
  { id: "v418", word: "朝ごはん", reading: "あさごはん", meaning: "Frühstück", pos: "Nomen", level: "easy", examples: [
    { jp: "毎朝、朝ごはんを食べます。", reading: "まいあさ、あさごはんをたべます。", de: "Jeden Morgen esse ich Frühstück." },
    { jp: "今日の朝ごはんはパンです。", reading: "きょうのあさごはんはパンです。", de: "Das Frühstück heute ist Brot." }
  ]},
  { id: "v419", word: "あさって", reading: "あさって", meaning: "übermorgen", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "あさって東京に行きます。", reading: "あさってとうきょうにいきます。", de: "Übermorgen fahre ich nach Tōkyō." },
    { jp: "あさっては休みです。", reading: "あさってはやすみです。", de: "Übermorgen ist frei." }
  ]},
  { id: "v420", word: "あそこ", reading: "あそこ", meaning: "dort (drüben)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "あそこに駅があります。", reading: "あそこにえきがあります。", de: "Dort ist ein Bahnhof." },
    { jp: "トイレはあそこです。", reading: "トイレはあそこです。", de: "Die Toilette ist dort." }
  ]},
  { id: "v421", word: "あちら", reading: "あちら", meaning: "dort drüben / diese Richtung (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "あちらへどうぞ。", reading: "あちらへどうぞ。", de: "Hier entlang, bitte." },
    { jp: "あちらは山田さんです。", reading: "あちらはやまださんです。", de: "Das dort ist Herr Yamada." }
  ]},
  { id: "v422", word: "あと", reading: "あと", meaning: "Rest / noch (übrig)", pos: "Nomen", level: "adv", examples: [
    { jp: "あと三十分待ちます。", reading: "あとさんじゅっぷんまちます。", de: "Ich warte noch dreißig Minuten." },
    { jp: "あと少しで終わります。", reading: "あとすこしでおわります。", de: "Es ist gleich fertig." }
  ]},
  { id: "v423", word: "後で", reading: "あとで", meaning: "später, danach", pos: "Adverb", level: "easy", examples: [
    { jp: "後で電話します。", reading: "あとででんわします。", de: "Ich rufe später an." },
    { jp: "宿題は後でします。", reading: "しゅくだいはあとでします。", de: "Die Hausaufgaben mache ich später." }
  ]},
  { id: "v424", word: "あなた", reading: "あなた", meaning: "du, Sie", pos: "Ausdruck", level: "easy", examples: [
    { jp: "あなたは学生ですか。", reading: "あなたはがくせいですか。", de: "Sind Sie Student?" },
    { jp: "これはあなたの本ですか。", reading: "これはあなたのほんですか。", de: "Ist das dein Buch?" }
  ]},
  { id: "v425", word: "兄", reading: "あに", meaning: "älterer Bruder (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "兄は東京にいます。", reading: "あにはとうきょうにいます。", de: "Mein älterer Bruder ist in Tōkyō." },
    { jp: "私の兄は先生です。", reading: "わたしのあにはせんせいです。", de: "Mein älterer Bruder ist Lehrer." }
  ]},
  { id: "v426", word: "姉", reading: "あね", meaning: "ältere Schwester (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "姉は二十歳です。", reading: "あねははたちです。", de: "Meine ältere Schwester ist zwanzig." },
    { jp: "姉と買い物に行きます。", reading: "あねとかいものにいきます。", de: "Ich gehe mit meiner Schwester einkaufen." }
  ]},
  { id: "v427", word: "あの", reading: "あの", meaning: "jene(r/s) (dort)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "あの人は誰ですか。", reading: "あのひとはだれですか。", de: "Wer ist die Person dort?" },
    { jp: "あの店は安いです。", reading: "あのみせはやすいです。", de: "Der Laden dort ist günstig." }
  ]},
  { id: "v428", word: "あのう", reading: "あのう", meaning: "ähm, hm (Zögern)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "あのう、すみません。", reading: "あのう、すみません。", de: "Ähm, Entschuldigung." },
    { jp: "あのう、質問があります。", reading: "あのう、しつもんがあります。", de: "Ähm, ich habe eine Frage." }
  ]},
  { id: "v429", word: "アパート", reading: "アパート", meaning: "Wohnung, Apartment", pos: "Nomen", level: "easy", examples: [
    { jp: "東京のアパートに住んでいます。", reading: "とうきょうのアパートにすんでいます。", de: "Ich wohne in einer Wohnung in Tōkyō." },
    { jp: "新しいアパートを探しています。", reading: "あたらしいアパートをさがしています。", de: "Ich suche eine neue Wohnung." }
  ]},
  { id: "v430", word: "浴びる", reading: "あびる", meaning: "duschen / (Wasser) über sich gießen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "朝、シャワーを浴びます。", reading: "あさ、シャワーをあびます。", de: "Morgens dusche ich." },
    { jp: "運動の後でシャワーを浴びました。", reading: "うんどうのあとでシャワーをあびました。", de: "Nach dem Sport habe ich geduscht." }
  ]},
  { id: "v431", word: "アメリカ", reading: "アメリカ", meaning: "Amerika, USA", pos: "Nomen", level: "easy", examples: [
    { jp: "来年アメリカに行きます。", reading: "らいねんアメリカにいきます。", de: "Nächstes Jahr fahre ich nach Amerika." },
    { jp: "アメリカは大きい国です。", reading: "アメリカはおおきいくにです。", de: "Amerika ist ein großes Land." }
  ]},
  { id: "v432", word: "アメリカ人", reading: "アメリカじん", meaning: "Amerikaner(in)", pos: "Nomen", level: "adv", examples: [
    { jp: "彼はアメリカ人です。", reading: "かれはアメリカじんです。", de: "Er ist Amerikaner." },
    { jp: "アメリカ人の友達がいます。", reading: "アメリカじんのともだちがいます。", de: "Ich habe einen amerikanischen Freund." }
  ]},
  { id: "v433", word: "ある", reading: "ある", meaning: "es gibt / vorhanden sein (Sachen)", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
    { jp: "時間がありますか。", reading: "じかんがありますか。", de: "Haben Sie Zeit?" }
  ]},
  { id: "v434", word: "アルバム", reading: "アルバム", meaning: "Fotoalbum", pos: "Nomen", level: "adv", examples: [
    { jp: "古いアルバムを見ました。", reading: "ふるいアルバムをみました。", de: "Ich habe ein altes Album angeschaut." },
    { jp: "写真をアルバムに入れます。", reading: "しゃしんをアルバムにいれます。", de: "Ich lege die Fotos ins Album." }
  ]},
  { id: "v435", word: "あれ", reading: "あれ", meaning: "das dort (drüben)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "あれは何ですか。", reading: "あれはなんですか。", de: "Was ist das dort?" },
    { jp: "あれは私のかばんです。", reading: "あれはわたしのかばんです。", de: "Das dort ist meine Tasche." }
  ]},
  { id: "v436", word: "安心", reading: "あんしん", meaning: "Erleichterung, Beruhigung", pos: "Nomen", level: "adv", examples: [
    { jp: "試験が終わって安心しました。", reading: "しけんがおわってあんしんしました。", de: "Nach der Prüfung war ich erleichtert." },
    { jp: "家族が元気で安心です。", reading: "かぞくがげんきであんしんです。", de: "Ich bin beruhigt, dass die Familie gesund ist." }
  ]},
  { id: "v437", word: "安全な", reading: "あんぜんな", meaning: "sicher", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "ここは安全な場所です。", reading: "ここはあんぜんなばしょです。", de: "Das hier ist ein sicherer Ort." },
    { jp: "夜は安全に運転してください。", reading: "よるはあんぜんにうんてんしてください。", de: "Fahren Sie nachts bitte sicher." }
  ]},
  { id: "v438", word: "案内", reading: "あんない", meaning: "Führung / Wegweisung", pos: "Nomen", level: "adv", examples: [
    { jp: "駅まで案内します。", reading: "えきまであんないします。", de: "Ich bringe Sie zum Bahnhof." },
    { jp: "町を案内してくれました。", reading: "まちをあんないしてくれました。", de: "Er hat mir die Stadt gezeigt." }
  ]},
  { id: "v439", word: "イーメール", reading: "イーメール", meaning: "E-Mail", pos: "Nomen", level: "adv", examples: [
    { jp: "友達にイーメールを送ります。", reading: "ともだちにイーメールをおくります。", de: "Ich schicke meinem Freund eine E-Mail." },
    { jp: "毎日イーメールを見ます。", reading: "まいにちイーメールをみます。", de: "Ich schaue jeden Tag meine E-Mails an." }
  ]},
  { id: "v440", word: "いかが", reading: "いかが", meaning: "wie (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "お茶はいかがですか。", reading: "おちゃはいかがですか。", de: "Wie wäre es mit Tee?" },
    { jp: "ご気分はいかがですか。", reading: "ごきぶんはいかがですか。", de: "Wie fühlen Sie sich?" }
  ]},
  { id: "v441", word: "いけばな", reading: "いけばな", meaning: "Ikebana (Blumensteckkunst)", pos: "Nomen", level: "adv", examples: [
    { jp: "母はいけばなを習っています。", reading: "はははいけばなをならっています。", de: "Meine Mutter lernt Ikebana." },
    { jp: "いけばなは日本の文化です。", reading: "いけばなはにほんのぶんかです。", de: "Ikebana ist japanische Kultur." }
  ]},
  { id: "v442", word: "医者", reading: "いしゃ", meaning: "Arzt", pos: "Nomen", level: "easy", examples: [
    { jp: "医者になりたいです。", reading: "いしゃになりたいです。", de: "Ich möchte Arzt werden." },
    { jp: "病気のとき医者に行きます。", reading: "びょうきのときいしゃにいきます。", de: "Wenn ich krank bin, gehe ich zum Arzt." }
  ]},
  { id: "v443", word: "いただく", reading: "いただく", meaning: "essen / erhalten (höflich)", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "お茶をいただきます。", reading: "おちゃをいただきます。", de: "Ich trinke (dankend) einen Tee." },
    { jp: "先生に本をいただきました。", reading: "せんせいにほんをいただきました。", de: "Ich habe vom Lehrer ein Buch bekommen." }
  ]},
  { id: "v444", word: "一度", reading: "いちど", meaning: "einmal", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "一度、日本に行きたいです。", reading: "いちど、にほんにいきたいです。", de: "Ich möchte einmal nach Japan reisen." },
    { jp: "もう一度言ってください。", reading: "もういちどいってください。", de: "Sagen Sie es bitte noch einmal." }
  ]},
  { id: "v445", word: "いっぱい", reading: "いっぱい", meaning: "voll / eine Tasse (voll)", pos: "Adverb", level: "adv", examples: [
    { jp: "水を一杯ください。", reading: "みずをいっぱいください。", de: "Bitte ein Glas Wasser." },
    { jp: "お腹がいっぱいです。", reading: "おなかがいっぱいです。", de: "Ich bin satt." }
  ]},
  { id: "v446", word: "いとこ", reading: "いとこ", meaning: "Cousin, Cousine", pos: "Nomen", level: "adv", examples: [
    { jp: "いとこは大学生です。", reading: "いとこはだいがくせいです。", de: "Mein Cousin ist Student." },
    { jp: "夏にいとこと遊びます。", reading: "なつにいとことあそびます。", de: "Im Sommer spiele ich mit meinem Cousin." }
  ]},
  { id: "v447", word: "いる", reading: "いる", meaning: "sein, sich befinden (Lebewesen)", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "部屋に猫がいます。", reading: "へやにねこがいます。", de: "Im Zimmer ist eine Katze." },
    { jp: "教室に学生がいます。", reading: "きょうしつにがくせいがいます。", de: "Im Klassenzimmer sind Studenten." }
  ]},
  { id: "v448", word: "色", reading: "いろ", meaning: "Farbe", pos: "Nomen", level: "easy", examples: [
    { jp: "好きな色は青です。", reading: "すきないろはあおです。", de: "Meine Lieblingsfarbe ist Blau." },
    { jp: "この色がきれいです。", reading: "このいろがきれいです。", de: "Diese Farbe ist schön." }
  ]},
  { id: "v450", word: "インターナショナル", reading: "インターナショナル", meaning: "international (Lehnwort)", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "インターナショナルな会社で働きます。", reading: "インターナショナルなかいしゃではたらきます。", de: "Ich arbeite in einer internationalen Firma." },
    { jp: "この学校はインターナショナルです。", reading: "このがっこうはインターナショナルです。", de: "Diese Schule ist international." }
  ]},
  { id: "v451", word: "ウィスキー", reading: "ウィスキー", meaning: "Whisky", pos: "Nomen", level: "adv", examples: [
    { jp: "父はウィスキーが好きです。", reading: "ちちはウィスキーがすきです。", de: "Mein Vater mag Whisky." },
    { jp: "ウィスキーを少し飲みました。", reading: "ウィスキーをすこしのみました。", de: "Ich habe etwas Whisky getrunken." }
  ]},
  { id: "v452", word: "ウール", reading: "ウール", meaning: "Wolle", pos: "Nomen", level: "adv", examples: [
    { jp: "ウールのセーターは暖かいです。", reading: "ウールのセーターはあたたかいです。", de: "Der Wollpullover ist warm." },
    { jp: "冬にウールのコートを着ます。", reading: "ふゆにウールのコートをきます。", de: "Im Winter trage ich einen Wollmantel." }
  ]},
  { id: "v453", word: "上", reading: "うえ", meaning: "auf, über, oben", pos: "Nomen", level: "easy", examples: [
    { jp: "机の上に本があります。", reading: "つくえのうえにほんがあります。", de: "Auf dem Tisch liegt ein Buch." },
    { jp: "棚の上にかばんを置きます。", reading: "たなのうえにかばんをおきます。", de: "Ich stelle die Tasche auf das Regal." }
  ]},
  { id: "v454", word: "ウエイトレス", reading: "ウエイトレス", meaning: "Kellnerin", pos: "Nomen", level: "adv", examples: [
    { jp: "彼女はウエイトレスです。", reading: "かのじょはウエイトレスです。", de: "Sie ist Kellnerin." },
    { jp: "ウエイトレスに水を頼みました。", reading: "ウエイトレスにみずをたのみました。", de: "Ich habe die Kellnerin um Wasser gebeten." }
  ]},
  { id: "v455", word: "うきよえ", reading: "うきよえ", meaning: "Ukiyoe (Holzschnitte)", pos: "Nomen", level: "adv", examples: [
    { jp: "うきよえは有名です。", reading: "うきよえはゆうめいです。", de: "Ukiyoe sind berühmt." },
    { jp: "美術館でうきよえを見ました。", reading: "びじゅつかんでうきよえをみました。", de: "Im Museum habe ich Ukiyoe gesehen." }
  ]},
  { id: "v456", word: "受付", reading: "うけつけ", meaning: "Empfang, Rezeption", pos: "Nomen", level: "adv", examples: [
    { jp: "受付で聞いてください。", reading: "うけつけできいてください。", de: "Fragen Sie bitte an der Rezeption." },
    { jp: "ホテルの受付は一階です。", reading: "ホテルのうけつけはいっかいです。", de: "Die Rezeption des Hotels ist im Erdgeschoss." }
  ]},
  { id: "v457", word: "受ける", reading: "うける", meaning: "(Prüfung) ablegen / empfangen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "来週、試験を受けます。", reading: "らいしゅう、しけんをうけます。", de: "Nächste Woche lege ich eine Prüfung ab." },
    { jp: "日本語のテストを受けました。", reading: "にほんごのテストをうけました。", de: "Ich habe einen Japanisch-Test gemacht." }
  ]},
  { id: "v458", word: "動く", reading: "うごく", meaning: "sich bewegen / funktionieren", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "この時計は動きません。", reading: "このとけいはうごきません。", de: "Diese Uhr geht nicht." },
    { jp: "電車が動き始めました。", reading: "でんしゃがうごきはじめました。", de: "Der Zug hat sich in Bewegung gesetzt." }
  ]},
  { id: "v459", word: "後ろ", reading: "うしろ", meaning: "hinten, Rückseite", pos: "Nomen", level: "easy", examples: [
    { jp: "家の後ろに公園があります。", reading: "いえのうしろにこうえんがあります。", de: "Hinter dem Haus ist ein Park." },
    { jp: "私の後ろに座ってください。", reading: "わたしのうしろにすわってください。", de: "Setzen Sie sich bitte hinter mich." }
  ]},
  { id: "v460", word: "歌", reading: "うた", meaning: "Lied", pos: "Nomen", level: "easy", examples: [
    { jp: "日本の歌を歌います。", reading: "にほんのうたをうたいます。", de: "Ich singe ein japanisches Lied." },
    { jp: "この歌が好きです。", reading: "このうたがすきです。", de: "Ich mag dieses Lied." }
  ]},
  { id: "v461", word: "うち", reading: "うち", meaning: "Zuhause, Heim", pos: "Nomen", level: "easy", examples: [
    { jp: "うちに帰ります。", reading: "うちにかえります。", de: "Ich gehe nach Hause." },
    { jp: "うちは駅の近くです。", reading: "うちはえきのちかくです。", de: "Mein Zuhause ist in der Nähe des Bahnhofs." }
  ]},
  { id: "v462", word: "馬", reading: "うま", meaning: "Pferd", pos: "Nomen", level: "adv", examples: [
    { jp: "馬が走っています。", reading: "うまがはしっています。", de: "Ein Pferd läuft." },
    { jp: "牧場で馬を見ました。", reading: "ぼくじょうでうまをみました。", de: "Auf der Weide habe ich Pferde gesehen." }
  ]},
  { id: "v463", word: "生まれる", reading: "うまれる", meaning: "geboren werden", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "赤ちゃんが生まれました。", reading: "あかちゃんがうまれました。", de: "Das Baby ist geboren." },
    { jp: "私は東京で生まれました。", reading: "わたしはとうきょうでうまれました。", de: "Ich bin in Tōkyō geboren." }
  ]},
  { id: "v464", word: "売り切れ", reading: "うりきれ", meaning: "ausverkauft", pos: "Nomen", level: "adv", examples: [
    { jp: "チケットは売り切れです。", reading: "チケットはうりきれです。", de: "Die Tickets sind ausverkauft." },
    { jp: "この本は売り切れました。", reading: "このほんはうりきれました。", de: "Dieses Buch ist ausverkauft." }
  ]},
  { id: "v465", word: "売り場", reading: "うりば", meaning: "Verkaufsstelle, Abteilung", pos: "Nomen", level: "adv", examples: [
    { jp: "切符売り場はどこですか。", reading: "きっぷうりばはどこですか。", de: "Wo ist der Fahrkartenschalter?" },
    { jp: "くつ売り場は三階です。", reading: "くつうりばはさんがいです。", de: "Die Schuhabteilung ist im dritten Stock." }
  ]},
  { id: "v466", word: "運転", reading: "うんてん", meaning: "das Fahren, Steuern", pos: "Nomen", level: "adv", examples: [
    { jp: "車の運転は難しいです。", reading: "くるまのうんてんはむずかしいです。", de: "Autofahren ist schwierig." },
    { jp: "毎日運転します。", reading: "まいにちうんてんします。", de: "Ich fahre jeden Tag." }
  ]},
  { id: "v467", word: "運転手", reading: "うんてんしゅ", meaning: "Fahrer, Chauffeur", pos: "Nomen", level: "adv", examples: [
    { jp: "タクシーの運転手に道を聞きました。", reading: "タクシーのうんてんしゅにみちをききました。", de: "Ich habe den Taxifahrer nach dem Weg gefragt." },
    { jp: "バスの運転手は親切です。", reading: "バスのうんてんしゅはしんせつです。", de: "Der Busfahrer ist freundlich." }
  ]},
  { id: "v468", word: "絵", reading: "え", meaning: "Bild, Gemälde", pos: "Nomen", level: "easy", examples: [
    { jp: "壁に絵をかけます。", reading: "かべにえをかけます。", de: "Ich hänge ein Bild an die Wand." },
    { jp: "子供が絵をかいています。", reading: "こどもがえをかいています。", de: "Das Kind malt ein Bild." }
  ]},
  { id: "v469", word: "エアコン", reading: "エアコン", meaning: "Klimaanlage (Heizen+Kühlen)", pos: "Nomen", level: "adv", examples: [
    { jp: "暑いのでエアコンをつけます。", reading: "あついのでエアコンをつけます。", de: "Weil es heiß ist, schalte ich die Klimaanlage ein." },
    { jp: "この部屋にはエアコンがあります。", reading: "このへやにはエアコンがあります。", de: "In diesem Zimmer gibt es eine Klimaanlage." }
  ]},
  { id: "v470", word: "英語", reading: "えいご", meaning: "Englisch", pos: "Nomen", level: "easy", examples: [
    { jp: "英語を勉強しています。", reading: "えいごをべんきょうしています。", de: "Ich lerne Englisch." },
    { jp: "彼は英語が上手です。", reading: "かれはえいごがじょうずです。", de: "Er kann gut Englisch." }
  ]},
  { id: "v471", word: "ええ", reading: "ええ", meaning: "ja (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "ええ、そうです。", reading: "ええ、そうです。", de: "Ja, genau." },
    { jp: "ええ、いいですよ。", reading: "ええ、いいですよ。", de: "Ja, das ist in Ordnung." }
  ]},
  { id: "v472", word: "選ぶ", reading: "えらぶ", meaning: "auswählen", pos: "Verb (Godan, ぶ)", level: "adv", examples: [
    { jp: "好きな色を選んでください。", reading: "すきないろをえらんでください。", de: "Wählen Sie bitte Ihre Lieblingsfarbe." },
    { jp: "プレゼントを選びました。", reading: "プレゼントをえらびました。", de: "Ich habe ein Geschenk ausgewählt." }
  ]},
  { id: "v473", word: "円", reading: "えん", meaning: "Yen", pos: "Nomen", level: "easy", examples: [
    { jp: "この本は千円です。", reading: "このほんはせんえんです。", de: "Dieses Buch kostet 1000 Yen." },
    { jp: "百円を貸してください。", reading: "ひゃくえんをかしてください。", de: "Leih mir bitte 100 Yen." }
  ]},
  { id: "v474", word: "おいくつ", reading: "おいくつ", meaning: "wie alt? (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "失礼ですが、おいくつですか。", reading: "しつれいですが、おいくつですか。", de: "Entschuldigung, wie alt sind Sie?" },
    { jp: "お子さんはおいくつですか。", reading: "おこさんはおいくつですか。", de: "Wie alt ist Ihr Kind?" }
  ]},
  { id: "v475", word: "おおぜい", reading: "おおぜい", meaning: "(Menschen-)Menge, viele Leute", pos: "Nomen", level: "adv", examples: [
    { jp: "公園に人がおおぜいいます。", reading: "こうえんにひとがおおぜいいます。", de: "Im Park sind viele Leute." },
    { jp: "おおぜいの前で話しました。", reading: "おおぜいのまえではなしました。", de: "Ich habe vor vielen Leuten gesprochen." }
  ]},
  { id: "v476", word: "おかげさまで", reading: "おかげさまで", meaning: "Danke der Nachfrage / dank Ihrer Hilfe", pos: "Ausdruck", level: "adv", examples: [
    { jp: "おかげさまで元気です。", reading: "おかげさまでげんきです。", de: "Danke der Nachfrage, mir geht es gut." },
    { jp: "おかげさまで試験に合格しました。", reading: "おかげさまでしけんにごうかくしました。", de: "Dank Ihrer Hilfe habe ich die Prüfung bestanden." }
  ]},
  { id: "v477", word: "お客さん", reading: "おきゃくさん", meaning: "Gast, Kunde", pos: "Nomen", level: "easy", examples: [
    { jp: "今日はお客さんが来ます。", reading: "きょうはおきゃくさんがきます。", de: "Heute kommt Besuch." },
    { jp: "お客さんに飲み物を出します。", reading: "おきゃくさんにのみものをだします。", de: "Ich serviere den Gästen Getränke." }
  ]},
  { id: "v478", word: "置く", reading: "おく", meaning: "stellen, legen", pos: "Verb (Godan, く)", level: "easy", examples: [
    { jp: "机の上に本を置きます。", reading: "つくえのうえにほんをおきます。", de: "Ich lege das Buch auf den Tisch." },
    { jp: "かばんをここに置いてください。", reading: "かばんをここにおいてください。", de: "Stellen Sie die Tasche bitte hierhin." }
  ]},
  { id: "v479", word: "奥さん", reading: "おくさん", meaning: "Ehefrau (eines anderen)", pos: "Nomen", level: "easy", examples: [
    { jp: "田中さんの奥さんは先生です。", reading: "たなかさんのおくさんはせんせいです。", de: "Herrn Tanakas Frau ist Lehrerin." },
    { jp: "奥さんによろしく。", reading: "おくさんによろしく。", de: "Grüßen Sie Ihre Frau von mir." }
  ]},
  { id: "v480", word: "遅れる", reading: "おくれる", meaning: "sich verspäten", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "電車が遅れています。", reading: "でんしゃがおくれています。", de: "Der Zug hat Verspätung." },
    { jp: "会議に遅れました。", reading: "かいぎにおくれました。", de: "Ich bin zu spät zur Besprechung gekommen." }
  ]},
  { id: "v481", word: "お子さん", reading: "おこさん", meaning: "Kind (eines anderen)", pos: "Nomen", level: "adv", examples: [
    { jp: "お子さんは何歳ですか。", reading: "おこさんはなんさいですか。", de: "Wie alt ist Ihr Kind?" },
    { jp: "お子さんはかわいいですね。", reading: "おこさんはかわいいですね。", de: "Ihr Kind ist ja süß." }
  ]},
  { id: "v482", word: "怒る", reading: "おこる", meaning: "böse werden, schimpfen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "父が怒りました。", reading: "ちちがおこりました。", de: "Mein Vater wurde böse." },
    { jp: "先生は学生を怒りました。", reading: "せんせいはがくせいをおこりました。", de: "Der Lehrer hat den Studenten geschimpft." }
  ]},
  { id: "v483", word: "おじいさん", reading: "おじいさん", meaning: "Großvater / alter Mann", pos: "Nomen", level: "easy", examples: [
    { jp: "おじいさんは八十歳です。", reading: "おじいさんははちじゅっさいです。", de: "Mein Großvater ist achtzig Jahre alt." },
    { jp: "おじいさんと散歩します。", reading: "おじいさんとさんぽします。", de: "Ich gehe mit meinem Großvater spazieren." }
  ]},
  { id: "v484", word: "おじさん", reading: "おじさん", meaning: "Onkel / älterer Mann", pos: "Nomen", level: "easy", examples: [
    { jp: "おじさんは大阪に住んでいます。", reading: "おじさんはおおさかにすんでいます。", de: "Mein Onkel wohnt in Ōsaka." },
    { jp: "おじさんに手紙を書きます。", reading: "おじさんにてがみをかきます。", de: "Ich schreibe meinem Onkel einen Brief." }
  ]},
  { id: "v485", word: "おしゃべりする", reading: "おしゃべりする", meaning: "plaudern, tratschen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "友達とおしゃべりします。", reading: "ともだちとおしゃべりします。", de: "Ich plaudere mit meinen Freunden." },
    { jp: "カフェで長くおしゃべりしました。", reading: "カフェでながくおしゃべりしました。", de: "Wir haben lange im Café geplaudert." }
  ]},
  { id: "v486", word: "お嬢さん", reading: "おじょうさん", meaning: "Tochter (eines anderen), junge Dame", pos: "Nomen", level: "adv", examples: [
    { jp: "お嬢さんは大学生ですか。", reading: "おじょうさんはだいがくせいですか。", de: "Ist Ihre Tochter Studentin?" },
    { jp: "きれいなお嬢さんですね。", reading: "きれいなおじょうさんですね。", de: "Was für eine hübsche junge Dame." }
  ]},
  { id: "v487", word: "おたく", reading: "おたく", meaning: "Ihr Haus / Sie (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "おたくはどちらですか。", reading: "おたくはどちらですか。", de: "Wo wohnen Sie?" },
    { jp: "明日おたくに伺います。", reading: "あしたおたくにうかがいます。", de: "Morgen komme ich zu Ihnen." }
  ]},
  { id: "v488", word: "落ちる", reading: "おちる", meaning: "(hin)fallen, herunterfallen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "木から葉が落ちます。", reading: "きからはがおちます。", de: "Vom Baum fallen Blätter." },
    { jp: "かばんが床に落ちました。", reading: "かばんがゆかにおちました。", de: "Die Tasche ist auf den Boden gefallen." }
  ]},
  { id: "v489", word: "おつり", reading: "おつり", meaning: "Wechselgeld", pos: "Nomen", level: "adv", examples: [
    { jp: "おつりをください。", reading: "おつりをください。", de: "Geben Sie mir bitte das Wechselgeld." },
    { jp: "おつりは百円です。", reading: "おつりはひゃくえんです。", de: "Das Wechselgeld beträgt 100 Yen." }
  ]},
  { id: "v490", word: "お手洗い", reading: "おてあらい", meaning: "WC, Toilette", pos: "Nomen", level: "adv", examples: [
    { jp: "お手洗いはどこですか。", reading: "おてあらいはどこですか。", de: "Wo ist die Toilette?" },
    { jp: "お手洗いを借りてもいいですか。", reading: "おてあらいをかりてもいいですか。", de: "Darf ich Ihre Toilette benutzen?" }
  ]},
  { id: "v491", word: "お寺", reading: "おてら", meaning: "Tempel (buddhistisch)", pos: "Nomen", level: "adv", examples: [
    { jp: "京都のお寺を見ました。", reading: "きょうとのおてらをみました。", de: "Ich habe Tempel in Kyōto besichtigt." },
    { jp: "お寺は静かです。", reading: "おてらはしずかです。", de: "Der Tempel ist ruhig." }
  ]},
  { id: "v492", word: "男", reading: "おとこ", meaning: "Mann, männlich", pos: "Nomen", level: "easy", examples: [
    { jp: "あの男の人は誰ですか。", reading: "あのおとこのひとはだれですか。", de: "Wer ist der Mann dort?" },
    { jp: "男の名前を書いてください。", reading: "おとこのなまえをかいてください。", de: "Schreiben Sie bitte den Männernamen." }
  ]},
  { id: "v493", word: "男の子", reading: "おとこのこ", meaning: "Junge", pos: "Nomen", level: "easy", examples: [
    { jp: "男の子が遊んでいます。", reading: "おとこのこがあそんでいます。", de: "Ein Junge spielt." },
    { jp: "隣に男の子が住んでいます。", reading: "となりにおとこのこがすんでいます。", de: "Nebenan wohnt ein Junge." }
  ]},
  { id: "v494", word: "男の人", reading: "おとこのひと", meaning: "Mann", pos: "Nomen", level: "easy", examples: [
    { jp: "男の人が三人います。", reading: "おとこのひとがさんにんいます。", de: "Dort sind drei Männer." },
    { jp: "その男の人は背が高いです。", reading: "そのおとこのひとはせがたかいです。", de: "Der Mann ist groß." }
  ]},
  { id: "v495", word: "落とす", reading: "おとす", meaning: "fallen lassen, verlieren", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "財布を落としました。", reading: "さいふをおとしました。", de: "Ich habe meine Geldbörse verloren." },
    { jp: "コップを落とさないでください。", reading: "コップをおとさないでください。", de: "Lassen Sie das Glas nicht fallen." }
  ]},
  { id: "v496", word: "おととい", reading: "おととい", meaning: "vorgestern", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "おととい映画を見ました。", reading: "おとといえいがをみました。", de: "Vorgestern habe ich einen Film gesehen." },
    { jp: "おとといは雨でした。", reading: "おとといはあめでした。", de: "Vorgestern hat es geregnet." }
  ]},
  { id: "v497", word: "大人", reading: "おとな", meaning: "Erwachsener", pos: "Nomen", level: "easy", examples: [
    { jp: "大人は千円です。", reading: "おとなはせんえんです。", de: "Erwachsene zahlen 1000 Yen." },
    { jp: "もう大人ですから、大丈夫です。", reading: "もうおとなですから、だいじょうぶです。", de: "Ich bin schon erwachsen, also geht das." }
  ]},
  { id: "v498", word: "おなか", reading: "おなか", meaning: "Bauch", pos: "Nomen", level: "easy", examples: [
    { jp: "おなかが痛いです。", reading: "おなかがいたいです。", de: "Mir tut der Bauch weh." },
    { jp: "おなかがすきました。", reading: "おなかがすきました。", de: "Ich habe Hunger." }
  ]},
  { id: "v499", word: "おば", reading: "おば", meaning: "Tante (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "おばは名古屋にいます。", reading: "おばはなごやにいます。", de: "Meine Tante ist in Nagoya." },
    { jp: "おばは料理が上手です。", reading: "おばはりょうりがじょうずです。", de: "Meine Tante kocht gut." }
  ]},
  { id: "v500", word: "おばあさん", reading: "おばあさん", meaning: "Großmutter / alte Frau", pos: "Nomen", level: "easy", examples: [
    { jp: "おばあさんは元気です。", reading: "おばあさんはげんきです。", de: "Meine Großmutter ist gesund." },
    { jp: "おばあさんに花をあげました。", reading: "おばあさんにはなをあげました。", de: "Ich habe meiner Großmutter Blumen geschenkt." }
  ]},
  { id: "v501", word: "お花見", reading: "おはなみ", meaning: "Kirschblütenschau", pos: "Nomen", level: "adv", examples: [
    { jp: "春にお花見をします。", reading: "はるにおはなみをします。", de: "Im Frühling machen wir Hanami." },
    { jp: "公園でお花見をしました。", reading: "こうえんでおはなみをしました。", de: "Wir haben im Park die Kirschblüten betrachtet." }
  ]},
  { id: "v502", word: "温泉", reading: "おんせん", meaning: "heiße Quelle, Onsen", pos: "Nomen", level: "adv", examples: [
    { jp: "温泉に入りたいです。", reading: "おんせんにはいりたいです。", de: "Ich möchte in eine heiße Quelle." },
    { jp: "週末に温泉へ行きます。", reading: "しゅうまつにおんせんへいきます。", de: "Am Wochenende fahre ich ins Onsen." }
  ]},
  { id: "v503", word: "女", reading: "おんな", meaning: "Frau, weiblich", pos: "Nomen", level: "easy", examples: [
    { jp: "女の名前を書きます。", reading: "おんなのなまえをかきます。", de: "Ich schreibe einen Frauennamen." },
    { jp: "あの女の人は医者です。", reading: "あのおんなのひとはいしゃです。", de: "Die Frau dort ist Ärztin." }
  ]},
  { id: "v504", word: "女の子", reading: "おんなのこ", meaning: "Mädchen", pos: "Nomen", level: "easy", examples: [
    { jp: "女の子が歌っています。", reading: "おんなのこがうたっています。", de: "Ein Mädchen singt." },
    { jp: "小さい女の子がいます。", reading: "ちいさいおんなのこがいます。", de: "Da ist ein kleines Mädchen." }
  ]},
  { id: "v505", word: "女の人", reading: "おんなのひと", meaning: "Frau", pos: "Nomen", level: "easy", examples: [
    { jp: "女の人が二人います。", reading: "おんなのひとがふたりいます。", de: "Dort sind zwei Frauen." },
    { jp: "その女の人は親切です。", reading: "そのおんなのひとはしんせつです。", de: "Die Frau ist freundlich." }
  ]},
  { id: "v506", word: "カード", reading: "カード", meaning: "Karte, Kreditkarte", pos: "Nomen", level: "easy", examples: [
    { jp: "カードで払います。", reading: "カードではらいます。", de: "Ich bezahle mit Karte." },
    { jp: "誕生日にカードを送ります。", reading: "たんじょうびにカードをおくります。", de: "Zum Geburtstag schicke ich eine Karte." }
  ]},
  { id: "v507", word: "ガールフレンド", reading: "ガールフレンド", meaning: "Freundin", pos: "Nomen", level: "adv", examples: [
    { jp: "ガールフレンドと映画を見ます。", reading: "ガールフレンドとえいがをみます。", de: "Ich sehe mit meiner Freundin einen Film." },
    { jp: "彼にはガールフレンドがいます。", reading: "かれにはガールフレンドがいます。", de: "Er hat eine Freundin." }
  ]},
  { id: "v508", word: "階", reading: "かい", meaning: "Stockwerk, Etage", pos: "Nomen", level: "adv", examples: [
    { jp: "本屋は三階にあります。", reading: "ほんやはさんがいにあります。", de: "Der Buchladen ist im dritten Stock." },
    { jp: "この建物は五階まであります。", reading: "このたてものはごかいまであります。", de: "Dieses Gebäude hat fünf Stockwerke." }
  ]},
  { id: "v509", word: "改札口", reading: "かいさつぐち", meaning: "Ticketsperre (am Bahnhof)", pos: "Nomen", level: "adv", examples: [
    { jp: "改札口で待っています。", reading: "かいさつぐちでまっています。", de: "Ich warte an der Ticketsperre." },
    { jp: "改札口はどこですか。", reading: "かいさつぐちはどこですか。", de: "Wo ist die Ticketsperre?" }
  ]},
  { id: "v510", word: "帰り", reading: "かえり", meaning: "Rückkehr, Heimweg", pos: "Nomen", level: "adv", examples: [
    { jp: "帰りに買い物をします。", reading: "かえりにかいものをします。", de: "Auf dem Heimweg kaufe ich ein." },
    { jp: "帰りは何時ですか。", reading: "かえりはなんじですか。", de: "Wann kommst du zurück?" }
  ]},
  { id: "v511", word: "かかる", reading: "かかる", meaning: "dauern / kosten", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "駅まで十分かかります。", reading: "えきまでじゅっぷんかかります。", de: "Bis zum Bahnhof dauert es zehn Minuten." },
    { jp: "この旅行はお金がかかります。", reading: "このりょこうはおかねがかかります。", de: "Diese Reise kostet viel Geld." }
  ]},
  { id: "v512", word: "家具", reading: "かぐ", meaning: "Möbel", pos: "Nomen", level: "adv", examples: [
    { jp: "新しい家具を買いました。", reading: "あたらしいかぐをかいました。", de: "Ich habe neue Möbel gekauft." },
    { jp: "部屋に家具が少ないです。", reading: "へやにかぐがすくないです。", de: "Im Zimmer gibt es wenig Möbel." }
  ]},
  { id: "v513", word: "かける", reading: "かける", meaning: "sich setzen / (Brille) aufsetzen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "いすにかけてください。", reading: "いすにかけてください。", de: "Setzen Sie sich bitte auf den Stuhl." },
    { jp: "めがねをかけます。", reading: "めがねをかけます。", de: "Ich setze die Brille auf." }
  ]},
  { id: "v514", word: "かご", reading: "かご", meaning: "Korb", pos: "Nomen", level: "adv", examples: [
    { jp: "かごに果物を入れます。", reading: "かごにくだものをいれます。", de: "Ich lege Obst in den Korb." },
    { jp: "買い物かごを持っています。", reading: "かいものかごをもっています。", de: "Ich halte einen Einkaufskorb." }
  ]},
  { id: "v515", word: "風", reading: "かぜ", meaning: "Wind", pos: "Nomen", level: "easy", examples: [
    { jp: "今日は風が強いです。", reading: "きょうはかぜがつよいです。", de: "Heute ist der Wind stark." },
    { jp: "風が気持ちいいです。", reading: "かぜがきもちいいです。", de: "Der Wind ist angenehm." }
  ]},
  { id: "v516", word: "風邪をひく", reading: "かぜをひく", meaning: "sich erkälten", pos: "Ausdruck", level: "adv", examples: [
    { jp: "風邪をひきました。", reading: "かぜをひきました。", de: "Ich habe mich erkältet." },
    { jp: "寒いので風邪をひかないでください。", reading: "さむいのでかぜをひかないでください。", de: "Erkälten Sie sich bei der Kälte nicht." }
  ]},
  { id: "v517", word: "片付ける", reading: "かたづける", meaning: "aufräumen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "部屋を片付けます。", reading: "へやをかたづけます。", de: "Ich räume das Zimmer auf." },
    { jp: "食事の後で皿を片付けました。", reading: "しょくじのあとでさらをかたづけました。", de: "Nach dem Essen habe ich das Geschirr weggeräumt." }
  ]},
  { id: "v518", word: "カタログ", reading: "カタログ", meaning: "Katalog, Broschüre", pos: "Nomen", level: "adv", examples: [
    { jp: "カタログを見せてください。", reading: "カタログをみせてください。", de: "Zeigen Sie mir bitte den Katalog." },
    { jp: "新しいカタログが届きました。", reading: "あたらしいカタログがとどきました。", de: "Der neue Katalog ist angekommen." }
  ]},
  { id: "v519", word: "角", reading: "かど", meaning: "Ecke", pos: "Nomen", level: "adv", examples: [
    { jp: "次の角を右に曲がります。", reading: "つぎのかどをみぎにまがります。", de: "An der nächsten Ecke biege ich rechts ab." },
    { jp: "角に本屋があります。", reading: "かどにほんやがあります。", de: "An der Ecke ist ein Buchladen." }
  ]},
  { id: "v520", word: "家内", reading: "かない", meaning: "(meine) Ehefrau", pos: "Nomen", level: "adv", examples: [
    { jp: "家内は買い物に行きました。", reading: "かないはかいものにいきました。", de: "Meine Frau ist einkaufen gegangen." },
    { jp: "家内と旅行します。", reading: "かないとりょこうします。", de: "Ich verreise mit meiner Frau." }
  ]},
  { id: "v521", word: "花瓶", reading: "かびん", meaning: "Blumenvase", pos: "Nomen", level: "adv", examples: [
    { jp: "花瓶に花を入れます。", reading: "かびんにはなをいれます。", de: "Ich stelle Blumen in die Vase." },
    { jp: "きれいな花瓶ですね。", reading: "きれいなかびんですね。", de: "Eine schöne Vase." }
  ]},
  { id: "v522", word: "歌舞伎", reading: "かぶき", meaning: "Kabuki-Theater", pos: "Nomen", level: "adv", examples: [
    { jp: "歌舞伎を見に行きます。", reading: "かぶきをみにいきます。", de: "Ich gehe zum Kabuki." },
    { jp: "歌舞伎はおもしろかったです。", reading: "かぶきはおもしろかったです。", de: "Das Kabuki war interessant." }
  ]},
  { id: "v523", word: "我慢する", reading: "がまんする", meaning: "ertragen, sich gedulden", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "痛いですが我慢します。", reading: "いたいですががまんします。", de: "Es tut weh, aber ich halte durch." },
    { jp: "もう少し我慢してください。", reading: "もうすこしがまんしてください。", de: "Halten Sie bitte noch etwas durch." }
  ]},
  { id: "v524", word: "カメラ", reading: "カメラ", meaning: "Fotoapparat, Kamera", pos: "Nomen", level: "easy", examples: [
    { jp: "新しいカメラを買いました。", reading: "あたらしいカメラをかいました。", de: "Ich habe eine neue Kamera gekauft." },
    { jp: "カメラで写真をとります。", reading: "カメラでしゃしんをとります。", de: "Ich mache mit der Kamera Fotos." }
  ]},
  { id: "v525", word: "カメラ屋", reading: "カメラや", meaning: "Fotogeschäft", pos: "Nomen", level: "adv", examples: [
    { jp: "カメラ屋でフィルムを買います。", reading: "カメラやでフィルムをかいます。", de: "Ich kaufe Film im Fotogeschäft." },
    { jp: "駅の前にカメラ屋があります。", reading: "えきのまえにカメラやがあります。", de: "Vor dem Bahnhof ist ein Fotogeschäft." }
  ]},
  { id: "v526", word: "画面", reading: "がめん", meaning: "Bildschirm", pos: "Nomen", level: "adv", examples: [
    { jp: "画面が大きいテレビです。", reading: "がめんがおおきいテレビです。", de: "Das ist ein Fernseher mit großem Bildschirm." },
    { jp: "画面を見てください。", reading: "がめんをみてください。", de: "Schauen Sie bitte auf den Bildschirm." }
  ]},
  { id: "v527", word: "カラオケ", reading: "カラオケ", meaning: "Karaoke", pos: "Nomen", level: "adv", examples: [
    { jp: "友達とカラオケに行きます。", reading: "ともだちとカラオケにいきます。", de: "Ich gehe mit Freunden zum Karaoke." },
    { jp: "カラオケで歌を歌いました。", reading: "カラオケでうたをうたいました。", de: "Beim Karaoke habe ich gesungen." }
  ]},
  { id: "v528", word: "彼", reading: "かれ", meaning: "er / Freund", pos: "Nomen", level: "easy", examples: [
    { jp: "彼は大学生です。", reading: "かれはだいがくせいです。", de: "Er ist Student." },
    { jp: "彼は日本語が話せます。", reading: "かれはにほんごがはなせます。", de: "Er kann Japanisch sprechen." }
  ]},
  { id: "v529", word: "変わる", reading: "かわる", meaning: "sich ändern", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "天気が変わりました。", reading: "てんきがかわりました。", de: "Das Wetter hat sich geändert." },
    { jp: "予定が変わるかもしれません。", reading: "よていがかわるかもしれません。", de: "Der Plan ändert sich vielleicht." }
  ]},
  { id: "v530", word: "考える", reading: "かんがえる", meaning: "denken, überlegen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "よく考えてから決めます。", reading: "よくかんがえてからきめます。", de: "Ich entscheide nach gutem Überlegen." },
    { jp: "将来のことを考えます。", reading: "しょうらいのことをかんがえます。", de: "Ich denke über die Zukunft nach." }
  ]},
  { id: "v531", word: "観光客", reading: "かんこうきゃく", meaning: "Tourist", pos: "Nomen", level: "adv", examples: [
    { jp: "京都には観光客が多いです。", reading: "きょうとにはかんこうきゃくがおおいです。", de: "In Kyōto gibt es viele Touristen." },
    { jp: "観光客に道を教えました。", reading: "かんこうきゃくにみちをおしえました。", de: "Ich habe einem Touristen den Weg erklärt." }
  ]},
  { id: "v532", word: "かんごふ", reading: "かんごふ", meaning: "Krankenschwester", pos: "Nomen", level: "adv", examples: [
    { jp: "姉は病院のかんごふです。", reading: "あねはびょういんのかんごふです。", de: "Meine Schwester ist Krankenschwester im Krankenhaus." },
    { jp: "かんごふさんはとても親切です。", reading: "かんごふさんはとてもしんせつです。", de: "Die Krankenschwester ist sehr freundlich." }
  ]},
  { id: "v533", word: "漢字", reading: "かんじ", meaning: "Kanji (chin. Schriftzeichen)", pos: "Nomen", level: "easy", examples: [
    { jp: "漢字を書く練習をします。", reading: "かんじをかくれんしゅうをします。", de: "Ich übe, Kanji zu schreiben." },
    { jp: "この漢字は難しいです。", reading: "このかんじはむずかしいです。", de: "Dieses Kanji ist schwierig." }
  ]},
  { id: "v535", word: "乾杯", reading: "かんぱい", meaning: "Prost! / anstoßen", pos: "Ausdruck", level: "adv", examples: [
    { jp: "みんなで乾杯しましょう。", reading: "みんなでかんぱいしましょう。", de: "Lasst uns alle anstoßen." },
    { jp: "ビールで乾杯します。", reading: "ビールでかんぱいします。", de: "Wir stoßen mit Bier an." }
  ]},
  { id: "v536", word: "頑張る", reading: "がんばる", meaning: "sein Bestes geben, sich anstrengen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "試験のために頑張ります。", reading: "しけんのためにがんばります。", de: "Ich strenge mich für die Prüfung an." },
    { jp: "明日も頑張ってください。", reading: "あしたもがんばってください。", de: "Geben Sie auch morgen Ihr Bestes." }
  ]},
  { id: "v537", word: "木", reading: "き", meaning: "Baum, Holz", pos: "Nomen", level: "easy", examples: [
    { jp: "庭に大きい木があります。", reading: "にわにおおきいきがあります。", de: "Im Garten steht ein großer Baum." },
    { jp: "木の下で休みます。", reading: "きのしたでやすみます。", de: "Ich ruhe mich unter dem Baum aus." }
  ]},
  { id: "v538", word: "黄色い", reading: "きいろい", meaning: "gelb", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "黄色い花が咲いています。", reading: "きいろいはながさいています。", de: "Gelbe Blumen blühen." },
    { jp: "黄色いかばんを買いました。", reading: "きいろいかばんをかいました。", de: "Ich habe eine gelbe Tasche gekauft." }
  ]},
  { id: "v539", word: "規則", reading: "きそく", meaning: "Regel, Vorschrift", pos: "Nomen", level: "adv", examples: [
    { jp: "学校の規則を守ります。", reading: "がっこうのきそくをまもります。", de: "Ich halte die Schulregeln ein." },
    { jp: "これは大切な規則です。", reading: "これはたいせつなきそくです。", de: "Das ist eine wichtige Regel." }
  ]},
  { id: "v540", word: "北", reading: "きた", meaning: "Norden", pos: "Nomen", level: "easy", examples: [
    { jp: "北の空が暗いです。", reading: "きたのそらがくらいです。", de: "Der Himmel im Norden ist dunkel." },
    { jp: "北へ行くと海があります。", reading: "きたへいくとうみがあります。", de: "Nach Norden hin ist das Meer." }
  ]},
  { id: "v541", word: "キッチン", reading: "キッチン", meaning: "Küche (Lehnwort, modern)", pos: "Nomen", level: "adv", examples: [
    { jp: "キッチンで料理をします。", reading: "キッチンでりょうりをします。", de: "Ich koche in der Küche." },
    { jp: "このアパートはキッチンが広いです。", reading: "このアパートはキッチンがひろいです。", de: "Diese Wohnung hat eine große Küche." }
  ]},
  { id: "v542", word: "切手", reading: "きって", meaning: "Briefmarke", pos: "Nomen", level: "easy", examples: [
    { jp: "切手を三枚ください。", reading: "きってをさんまいください。", de: "Bitte drei Briefmarken." },
    { jp: "手紙に切手をはります。", reading: "てがみにきってをはります。", de: "Ich klebe eine Briefmarke auf den Brief." }
  ]},
  { id: "v543", word: "切符売り場", reading: "きっぷうりば", meaning: "Fahrkartenschalter", pos: "Nomen", level: "adv", examples: [
    { jp: "切符売り場で切符を買います。", reading: "きっぷうりばできっぷをかいます。", de: "Ich kaufe am Schalter eine Fahrkarte." },
    { jp: "切符売り場は駅の中です。", reading: "きっぷうりばはえきのなかです。", de: "Der Fahrkartenschalter ist im Bahnhof." }
  ]},
  { id: "v544", word: "絹", reading: "きぬ", meaning: "Seide", pos: "Nomen", level: "adv", examples: [
    { jp: "絹のシャツは高いです。", reading: "きぬのシャツはたかいです。", de: "Ein Seidenhemd ist teuer." },
    { jp: "この着物は絹です。", reading: "このきものはきぬです。", de: "Dieser Kimono ist aus Seide." }
  ]},
  { id: "v545", word: "気分", reading: "きぶん", meaning: "Stimmung, Befinden", pos: "Nomen", level: "adv", examples: [
    { jp: "今日は気分がいいです。", reading: "きょうはきぶんがいいです。", de: "Heute fühle ich mich gut." },
    { jp: "気分が悪いので帰ります。", reading: "きぶんがわるいのでかえります。", de: "Mir ist schlecht, also gehe ich nach Hause." }
  ]},
  { id: "v546", word: "決める", reading: "きめる", meaning: "entscheiden, festlegen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "旅行の日を決めます。", reading: "りょこうのひをきめます。", de: "Ich lege den Reisetag fest." },
    { jp: "何にするか決めました。", reading: "なににするかきめました。", de: "Ich habe entschieden, was ich nehme." }
  ]},
  { id: "v547", word: "客", reading: "きゃく", meaning: "Kunde, Gast", pos: "Nomen", level: "adv", examples: [
    { jp: "店に客が来ました。", reading: "みせにきゃくがきました。", de: "In den Laden kam ein Kunde." },
    { jp: "今日は客が多いです。", reading: "きょうはきゃくがおおいです。", de: "Heute sind viele Kunden da." }
  ]},
  { id: "v548", word: "キャンプ", reading: "キャンプ", meaning: "Camping, Lager", pos: "Nomen", level: "adv", examples: [
    { jp: "夏に山でキャンプをします。", reading: "なつにやまでキャンプをします。", de: "Im Sommer campe ich in den Bergen." },
    { jp: "キャンプは楽しかったです。", reading: "キャンプはたのしかったです。", de: "Das Camping hat Spaß gemacht." }
  ]},
  { id: "v549", word: "牛肉", reading: "ぎゅうにく", meaning: "Rindfleisch", pos: "Nomen", level: "easy", examples: [
    { jp: "牛肉を買ってきました。", reading: "ぎゅうにくをかってきました。", de: "Ich habe Rindfleisch gekauft." },
    { jp: "牛肉のステーキが好きです。", reading: "ぎゅうにくのステーキがすきです。", de: "Ich mag Rindersteak." }
  ]},
  { id: "v550", word: "兄弟", reading: "きょうだい", meaning: "Geschwister", pos: "Nomen", level: "easy", examples: [
    { jp: "兄弟は何人いますか。", reading: "きょうだいはなんにんいますか。", de: "Wie viele Geschwister haben Sie?" },
    { jp: "私は兄弟が三人います。", reading: "わたしはきょうだいがさんにんいます。", de: "Ich habe drei Geschwister." }
  ]},
  { id: "v551", word: "興味", reading: "きょうみ", meaning: "Interesse", pos: "Nomen", level: "adv", examples: [
    { jp: "日本の文化に興味があります。", reading: "にほんのぶんかにきょうみがあります。", de: "Ich interessiere mich für japanische Kultur." },
    { jp: "音楽に興味がありますか。", reading: "おんがくにきょうみがありますか。", de: "Interessieren Sie sich für Musik?" }
  ]},
  { id: "v554", word: "キロ", reading: "キロ", meaning: "Kilo(gramm) / Kilometer", pos: "Nomen", level: "adv", examples: [
    { jp: "りんごを二キロ買いました。", reading: "りんごをにキロかいました。", de: "Ich habe zwei Kilo Äpfel gekauft." },
    { jp: "駅まで三キロあります。", reading: "えきまでさんキロあります。", de: "Bis zum Bahnhof sind es drei Kilometer." }
  ]},
  { id: "v555", word: "気をつける", reading: "きをつける", meaning: "aufpassen, vorsichtig sein", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "車に気をつけてください。", reading: "くるまにきをつけてください。", de: "Passen Sie auf die Autos auf." },
    { jp: "体に気をつけてください。", reading: "からだにきをつけてください。", de: "Passen Sie auf Ihre Gesundheit auf." }
  ]},
  { id: "v556", word: "クーラー", reading: "クーラー", meaning: "Klimaanlage (nur Kühlung)", pos: "Nomen", level: "adv", examples: [
    { jp: "クーラーをつけてください。", reading: "クーラーをつけてください。", de: "Schalten Sie bitte die Klimaanlage ein." },
    { jp: "夏はクーラーが必要です。", reading: "なつはクーラーがひつようです。", de: "Im Sommer braucht man eine Klimaanlage." }
  ]},
  { id: "v557", word: "薬屋", reading: "くすりや", meaning: "Apotheke", pos: "Nomen", level: "adv", examples: [
    { jp: "薬屋で薬を買います。", reading: "くすりやでくすりをかいます。", de: "Ich kaufe Medizin in der Apotheke." },
    { jp: "薬屋は駅の近くです。", reading: "くすりやはえきのちかくです。", de: "Die Apotheke ist beim Bahnhof." }
  ]},
  { id: "v558", word: "ください", reading: "ください", meaning: "bitte (geben Sie mir)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "水をください。", reading: "みずをください。", de: "Bitte Wasser." },
    { jp: "これを二つください。", reading: "これをふたつください。", de: "Zwei davon bitte." }
  ]},
  { id: "v559", word: "クッキー", reading: "クッキー", meaning: "Keks, Plätzchen", pos: "Nomen", level: "adv", examples: [
    { jp: "母がクッキーを作りました。", reading: "ははがクッキーをつくりました。", de: "Meine Mutter hat Kekse gebacken." },
    { jp: "お茶とクッキーを食べます。", reading: "おちゃとクッキーをたべます。", de: "Ich esse Tee und Kekse." }
  ]},
  { id: "v560", word: "靴下", reading: "くつした", meaning: "Socken", pos: "Nomen", level: "easy", examples: [
    { jp: "新しい靴下をはきます。", reading: "あたらしいくつしたをはきます。", de: "Ich ziehe neue Socken an." },
    { jp: "白い靴下を買いました。", reading: "しろいくつしたをかいました。", de: "Ich habe weiße Socken gekauft." }
  ]},
  { id: "v561", word: "クッション", reading: "クッション", meaning: "Kissen (Sofa)", pos: "Nomen", level: "adv", examples: [
    { jp: "ソファーにクッションがあります。", reading: "ソファーにクッションがあります。", de: "Auf dem Sofa liegt ein Kissen." },
    { jp: "赤いクッションを買いました。", reading: "あかいクッションをかいました。", de: "Ich habe ein rotes Kissen gekauft." }
  ]},
  { id: "v562", word: "曇り", reading: "くもり", meaning: "bewölkt, Bewölkung", pos: "Nomen", level: "adv", examples: [
    { jp: "今日は曇りです。", reading: "きょうはくもりです。", de: "Heute ist es bewölkt." },
    { jp: "午後から曇りになります。", reading: "ごごからくもりになります。", de: "Ab dem Nachmittag wird es bewölkt." }
  ]},
  { id: "v563", word: "クラシック音楽", reading: "クラシックおんがく", meaning: "klassische Musik", pos: "Nomen", level: "adv", examples: [
    { jp: "クラシック音楽を聞きます。", reading: "クラシックおんがくをききます。", de: "Ich höre klassische Musik." },
    { jp: "父はクラシック音楽が好きです。", reading: "ちちはクラシックおんがくがすきです。", de: "Mein Vater mag klassische Musik." }
  ]},
  { id: "v564", word: "クラス", reading: "クラス", meaning: "Klasse", pos: "Nomen", level: "easy", examples: [
    { jp: "私のクラスは二十人です。", reading: "わたしのクラスはにじゅうにんです。", de: "Meine Klasse hat zwanzig Leute." },
    { jp: "同じクラスの友達です。", reading: "おなじクラスのともだちです。", de: "Wir sind Freunde aus derselben Klasse." }
  ]},
  { id: "v565", word: "クリーニング", reading: "クリーニング", meaning: "Reinigung", pos: "Nomen", level: "adv", examples: [
    { jp: "コートをクリーニングに出します。", reading: "コートをクリーニングにだします。", de: "Ich gebe den Mantel in die Reinigung." },
    { jp: "クリーニングは明日できます。", reading: "クリーニングはあしたできます。", de: "Die Reinigung ist morgen fertig." }
  ]},
  { id: "v566", word: "グループ", reading: "グループ", meaning: "Gruppe", pos: "Nomen", level: "adv", examples: [
    { jp: "グループで勉強します。", reading: "グループでべんきょうします。", de: "Wir lernen in der Gruppe." },
    { jp: "三つのグループに分かれます。", reading: "みっつのグループにわかれます。", de: "Wir teilen uns in drei Gruppen auf." }
  ]},
  { id: "v567", word: "くれる", reading: "くれる", meaning: "geben (mir/uns)", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "友達が本をくれました。", reading: "ともだちがほんをくれました。", de: "Ein Freund hat mir ein Buch gegeben." },
    { jp: "父が時計をくれました。", reading: "ちちがとけいをくれました。", de: "Mein Vater hat mir eine Uhr geschenkt." }
  ]},
  { id: "v568", word: "黒", reading: "くろ", meaning: "Schwarz (Farbe)", pos: "Nomen", level: "easy", examples: [
    { jp: "黒が好きです。", reading: "くろがすきです。", de: "Ich mag Schwarz." },
    { jp: "黒のかばんを買いました。", reading: "くろのかばんをかいました。", de: "Ich habe eine schwarze Tasche gekauft." }
  ]},
  { id: "v569", word: "黒い", reading: "くろい", meaning: "schwarz", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "黒いくつをはいています。", reading: "くろいくつをはいています。", de: "Ich trage schwarze Schuhe." },
    { jp: "黒い猫がいます。", reading: "くろいねこがいます。", de: "Da ist eine schwarze Katze." }
  ]},
  { id: "v570", word: "詳しい", reading: "くわしい", meaning: "genau, ausführlich", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "詳しく説明してください。", reading: "くわしくせつめいしてください。", de: "Erklären Sie es bitte ausführlich." },
    { jp: "彼は歴史に詳しいです。", reading: "かれはれきしにくわしいです。", de: "Er kennt sich gut mit Geschichte aus." }
  ]},
  { id: "v571", word: "警官", reading: "けいかん", meaning: "Polizist", pos: "Nomen", level: "adv", examples: [
    { jp: "警官に道を聞きました。", reading: "けいかんにみちをききました。", de: "Ich habe einen Polizisten nach dem Weg gefragt." },
    { jp: "駅の前に警官がいます。", reading: "えきのまえにけいかんがいます。", de: "Vor dem Bahnhof steht ein Polizist." }
  ]},
  { id: "v572", word: "警察", reading: "けいさつ", meaning: "Polizei", pos: "Nomen", level: "adv", examples: [
    { jp: "警察に電話しました。", reading: "けいさつにでんわしました。", de: "Ich habe die Polizei angerufen." },
    { jp: "警察はどこですか。", reading: "けいさつはどこですか。", de: "Wo ist die Polizei?" }
  ]},
  { id: "v573", word: "けが", reading: "けが", meaning: "Verletzung", pos: "Nomen", level: "adv", examples: [
    { jp: "足のけがは大丈夫ですか。", reading: "あしのけがはだいじょうぶですか。", de: "Ist die Verletzung am Bein in Ordnung?" },
    { jp: "大きなけがではありません。", reading: "おおきなけがではありません。", de: "Es ist keine schwere Verletzung." }
  ]},
  { id: "v574", word: "けがをする", reading: "けがをする", meaning: "sich verletzen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "転んでけがをしました。", reading: "ころんでけがをしました。", de: "Ich bin gestürzt und habe mich verletzt." },
    { jp: "けがをしないように気をつけます。", reading: "けがをしないようにきをつけます。", de: "Ich passe auf, mich nicht zu verletzen." }
  ]},
  { id: "v575", word: "結果", reading: "けっか", meaning: "Ergebnis", pos: "Nomen", level: "adv", examples: [
    { jp: "試験の結果が出ました。", reading: "しけんのけっかがでました。", de: "Das Prüfungsergebnis ist da." },
    { jp: "結果はよかったです。", reading: "けっかはよかったです。", de: "Das Ergebnis war gut." }
  ]},
  { id: "v576", word: "けっこうな", reading: "けっこうな", meaning: "in Ordnung, gut / genug", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "けっこうなお茶ですね。", reading: "けっこうなおちゃですね。", de: "Das ist ein feiner Tee." },
    { jp: "もうけっこうです。", reading: "もうけっこうです。", de: "Danke, das reicht schon." }
  ]},
  { id: "v577", word: "結婚", reading: "けっこん", meaning: "Heirat, Hochzeit", pos: "Nomen", level: "easy", examples: [
    { jp: "来年結婚します。", reading: "らいねんけっこんします。", de: "Nächstes Jahr heirate ich." },
    { jp: "結婚おめでとうございます。", reading: "けっこんおめでとうございます。", de: "Herzlichen Glückwunsch zur Hochzeit." }
  ]},
  { id: "v578", word: "結婚式", reading: "けっこんしき", meaning: "Hochzeitsfeier", pos: "Nomen", level: "adv", examples: [
    { jp: "友達の結婚式に行きます。", reading: "ともだちのけっこんしきにいきます。", de: "Ich gehe zur Hochzeit eines Freundes." },
    { jp: "結婚式はとてもきれいでした。", reading: "けっこんしきはとてもきれいでした。", de: "Die Hochzeit war sehr schön." }
  ]},
  { id: "v579", word: "券", reading: "けん", meaning: "Ticket, Eintrittskarte", pos: "Nomen", level: "adv", examples: [
    { jp: "映画の券を二枚買いました。", reading: "えいがのけんをにまいかいました。", de: "Ich habe zwei Kinotickets gekauft." },
    { jp: "この券を見せてください。", reading: "このけんをみせてください。", de: "Zeigen Sie bitte dieses Ticket." }
  ]},
  { id: "v580", word: "けんか", reading: "けんか", meaning: "Streit", pos: "Nomen", level: "adv", examples: [
    { jp: "友達とけんかをしました。", reading: "ともだちとけんかをしました。", de: "Ich hatte Streit mit einem Freund." },
    { jp: "けんかはよくないです。", reading: "けんかはよくないです。", de: "Streit ist nicht gut." }
  ]},
  { id: "v581", word: "玄関", reading: "げんかん", meaning: "Eingang, Haustür", pos: "Nomen", level: "adv", examples: [
    { jp: "玄関でくつを脱ぎます。", reading: "げんかんでくつをぬぎます。", de: "Am Eingang ziehe ich die Schuhe aus." },
    { jp: "玄関に花があります。", reading: "げんかんにはながあります。", de: "Am Eingang stehen Blumen." }
  ]},
  { id: "v583", word: "研究", reading: "けんきゅう", meaning: "Forschung", pos: "Nomen", level: "adv", examples: [
    { jp: "大学で日本語を研究しています。", reading: "だいがくでにほんごをけんきゅうしています。", de: "An der Uni erforsche ich Japanisch." },
    { jp: "これは大切な研究です。", reading: "これはたいせつなけんきゅうです。", de: "Das ist eine wichtige Forschung." }
  ]},
  { id: "v584", word: "健康", reading: "けんこう", meaning: "Gesundheit", pos: "Nomen", level: "adv", examples: [
    { jp: "健康が一番大切です。", reading: "けんこうがいちばんたいせつです。", de: "Gesundheit ist am wichtigsten." },
    { jp: "健康のために運動します。", reading: "けんこうのためにうんどうします。", de: "Für die Gesundheit treibe ich Sport." }
  ]},
  { id: "v585", word: "見物", reading: "けんぶつ", meaning: "Besichtigung", pos: "Nomen", level: "adv", examples: [
    { jp: "京都を見物します。", reading: "きょうとをけんぶつします。", de: "Ich besichtige Kyōto." },
    { jp: "お祭りを見物しました。", reading: "おまつりをけんぶつしました。", de: "Ich habe mir das Fest angesehen." }
  ]},
  { id: "v586", word: "子", reading: "こ", meaning: "Kind", pos: "Nomen", level: "easy", examples: [
    { jp: "あの子はかわいいです。", reading: "あのこはかわいいです。", de: "Das Kind dort ist süß." },
    { jp: "女の子が三人います。", reading: "おんなのこがさんにんいます。", de: "Dort sind drei Mädchen." }
  ]},
  { id: "v587", word: "合格", reading: "ごうかく", meaning: "das Bestehen (Prüfung)", pos: "Nomen", level: "adv", examples: [
    { jp: "試験の合格を祈ります。", reading: "しけんのごうかくをいのります。", de: "Ich drücke die Daumen fürs Bestehen." },
    { jp: "合格おめでとうございます。", reading: "ごうかくおめでとうございます。", de: "Glückwunsch zum Bestehen." }
  ]},
  { id: "v588", word: "合格する", reading: "ごうかくする", meaning: "eine Prüfung bestehen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "大学に合格しました。", reading: "だいがくにごうかくしました。", de: "Ich habe die Uni-Aufnahmeprüfung bestanden." },
    { jp: "試験に合格したいです。", reading: "しけんにごうかくしたいです。", de: "Ich möchte die Prüfung bestehen." }
  ]},
  { id: "v589", word: "高校", reading: "こうこう", meaning: "Oberschule, Gymnasium", pos: "Nomen", level: "adv", examples: [
    { jp: "妹は高校の学生です。", reading: "いもうとはこうこうのがくせいです。", de: "Meine Schwester ist Oberschülerin." },
    { jp: "高校で英語を教えています。", reading: "こうこうでえいごをおしえています。", de: "Ich unterrichte Englisch an der Oberschule." }
  ]},
  { id: "v590", word: "交差点", reading: "こうさてん", meaning: "Kreuzung", pos: "Nomen", level: "adv", examples: [
    { jp: "次の交差点を右に曲がります。", reading: "つぎのこうさてんをみぎにまがります。", de: "An der nächsten Kreuzung biege ich rechts ab." },
    { jp: "交差点で信号を待ちます。", reading: "こうさてんでしんごうをまちます。", de: "An der Kreuzung warte ich auf die Ampel." }
  ]},
  { id: "v591", word: "交通", reading: "こうつう", meaning: "Verkehr", pos: "Nomen", level: "adv", examples: [
    { jp: "この町は交通が便利です。", reading: "このまちはこうつうがべんりです。", de: "In dieser Stadt ist der Verkehr praktisch." },
    { jp: "朝は交通が多いです。", reading: "あさはこうつうがおおいです。", de: "Morgens ist viel Verkehr." }
  ]},
  { id: "v592", word: "交番", reading: "こうばん", meaning: "Polizeihäuschen (Kōban)", pos: "Nomen", level: "adv", examples: [
    { jp: "交番で道を聞きました。", reading: "こうばんでみちをききました。", de: "Ich habe im Kōban nach dem Weg gefragt." },
    { jp: "駅の前に交番があります。", reading: "えきのまえにこうばんがあります。", de: "Vor dem Bahnhof ist ein Polizeihäuschen." }
  ]},
  { id: "v593", word: "声", reading: "こえ", meaning: "Stimme", pos: "Nomen", level: "easy", examples: [
    { jp: "彼女は声がきれいです。", reading: "かのじょはこえがきれいです。", de: "Sie hat eine schöne Stimme." },
    { jp: "大きい声で話してください。", reading: "おおきいこえではなしてください。", de: "Sprechen Sie bitte mit lauter Stimme." }
  ]},
  { id: "v594", word: "コーチ", reading: "コーチ", meaning: "Trainer, Coach", pos: "Nomen", level: "adv", examples: [
    { jp: "テニスのコーチに習います。", reading: "テニスのコーチにならいます。", de: "Ich lerne beim Tennistrainer." },
    { jp: "コーチはとても厳しいです。", reading: "コーチはとてもきびしいです。", de: "Der Trainer ist sehr streng." }
  ]},
  { id: "v595", word: "コート", reading: "コート", meaning: "Mantel", pos: "Nomen", level: "easy", examples: [
    { jp: "冬にコートを着ます。", reading: "ふゆにコートをきます。", de: "Im Winter trage ich einen Mantel." },
    { jp: "新しいコートを買いました。", reading: "あたらしいコートをかいました。", de: "Ich habe einen neuen Mantel gekauft." }
  ]},
  { id: "v596", word: "国際的な", reading: "こくさいてきな", meaning: "international", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "国際的な会議に出ます。", reading: "こくさいてきなかいぎにでます。", de: "Ich nehme an einer internationalen Konferenz teil." },
    { jp: "東京は国際的な町です。", reading: "とうきょうはこくさいてきなまちです。", de: "Tōkyō ist eine internationale Stadt." }
  ]},
  { id: "v597", word: "ここ", reading: "ここ", meaning: "hier", pos: "Ausdruck", level: "easy", examples: [
    { jp: "ここに座ってください。", reading: "ここにすわってください。", de: "Setzen Sie sich bitte hierher." },
    { jp: "ここは私の部屋です。", reading: "ここはわたしのへやです。", de: "Das hier ist mein Zimmer." }
  ]},
  { id: "v598", word: "ご主人", reading: "ごしゅじん", meaning: "Ehemann (eines anderen)", pos: "Nomen", level: "adv", examples: [
    { jp: "ご主人はお元気ですか。", reading: "ごしゅじんはおげんきですか。", de: "Geht es Ihrem Mann gut?" },
    { jp: "ご主人によろしく。", reading: "ごしゅじんによろしく。", de: "Grüßen Sie Ihren Mann von mir." }
  ]},
  { id: "v599", word: "ごちそうさま", reading: "ごちそうさま", meaning: "Danke für das Essen", pos: "Ausdruck", level: "adv", examples: [
    { jp: "ごちそうさまでした。", reading: "ごちそうさまでした。", de: "Danke für das Essen." },
    { jp: "おいしかったです、ごちそうさま。", reading: "おいしかったです、ごちそうさま。", de: "Es war lecker, danke fürs Essen." }
  ]},
  { id: "v600", word: "こちら", reading: "こちら", meaning: "dies hier / diese Person (höflich)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "こちらへどうぞ。", reading: "こちらへどうぞ。", de: "Hier entlang, bitte." },
    { jp: "こちらは田中さんです。", reading: "こちらはたなかさんです。", de: "Das hier ist Herr Tanaka." }
  ]},
  { id: "v601", word: "コップ", reading: "コップ", meaning: "Becher, Glas", pos: "Nomen", level: "easy", examples: [
    { jp: "コップに水を入れます。", reading: "コップにみずをいれます。", de: "Ich fülle Wasser ins Glas." },
    { jp: "コップを二つください。", reading: "コップをふたつください。", de: "Bitte zwei Gläser." }
  ]},
  { id: "v602", word: "こと", reading: "こと", meaning: "Sache, Angelegenheit", pos: "Nomen", level: "easy", examples: [
    { jp: "大切なことを話します。", reading: "たいせつなことをはなします。", de: "Ich spreche über eine wichtige Sache." },
    { jp: "そのことは知りません。", reading: "そのことはしりません。", de: "Davon weiß ich nichts." }
  ]},
  { id: "v603", word: "この", reading: "この", meaning: "diese(r/s) (hier)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "この本はおもしろいです。", reading: "このほんはおもしろいです。", de: "Dieses Buch ist interessant." },
    { jp: "このかばんは私のです。", reading: "このかばんはわたしのです。", de: "Diese Tasche gehört mir." }
  ]},
  { id: "v604", word: "コピー", reading: "コピー", meaning: "Kopie", pos: "Nomen", level: "adv", examples: [
    { jp: "書類をコピーします。", reading: "しょるいをコピーします。", de: "Ich kopiere die Unterlagen." },
    { jp: "コピーを三枚ください。", reading: "コピーをさんまいください。", de: "Bitte drei Kopien." }
  ]},
  { id: "v605", word: "ごみ", reading: "ごみ", meaning: "Müll, Abfall", pos: "Nomen", level: "easy", examples: [
    { jp: "ごみを捨てます。", reading: "ごみをすてます。", de: "Ich werfe den Müll weg." },
    { jp: "ここにごみを置かないでください。", reading: "ここにごみをおかないでください。", de: "Legen Sie hier bitte keinen Müll ab." }
  ]},
  { id: "v606", word: "ごみばこ", reading: "ごみばこ", meaning: "Mülleimer", pos: "Nomen", level: "adv", examples: [
    { jp: "ごみをごみばこに入れます。", reading: "ごみをごみばこにいれます。", de: "Ich werfe den Müll in den Mülleimer." },
    { jp: "ごみばこはあそこです。", reading: "ごみばこはあそこです。", de: "Der Mülleimer ist dort." }
  ]},
  { id: "v607", word: "混む", reading: "こむ", meaning: "voll / überfüllt sein", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "朝の電車は混みます。", reading: "あさのでんしゃはこみます。", de: "Der Zug am Morgen ist voll." },
    { jp: "店が混んでいます。", reading: "みせがこんでいます。", de: "Der Laden ist überfüllt." }
  ]},
  { id: "v608", word: "ご両親", reading: "ごりょうしん", meaning: "Eltern (eines anderen)", pos: "Nomen", level: "adv", examples: [
    { jp: "ご両親はお元気ですか。", reading: "ごりょうしんはおげんきですか。", de: "Geht es Ihren Eltern gut?" },
    { jp: "ご両親によろしくお伝えください。", reading: "ごりょうしんによろしくおつたえください。", de: "Grüßen Sie bitte Ihre Eltern." }
  ]},
  { id: "v609", word: "ゴルフ", reading: "ゴルフ", meaning: "Golf", pos: "Nomen", level: "adv", examples: [
    { jp: "日曜日にゴルフをします。", reading: "にちようびにゴルフをします。", de: "Sonntags spiele ich Golf." },
    { jp: "父はゴルフが好きです。", reading: "ちちはゴルフがすきです。", de: "Mein Vater mag Golf." }
  ]},
  { id: "v610", word: "これ", reading: "これ", meaning: "dies (hier)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "これは何ですか。", reading: "これはなんですか。", de: "Was ist das?" },
    { jp: "これをください。", reading: "これをください。", de: "Das hier bitte." }
  ]},
  { id: "v611", word: "これから", reading: "これから", meaning: "ab jetzt, von nun an", pos: "Adverb", level: "adv", examples: [
    { jp: "これから勉強します。", reading: "これからべんきょうします。", de: "Ab jetzt lerne ich." },
    { jp: "これからどうしますか。", reading: "これからどうしますか。", de: "Was machen wir jetzt?" }
  ]},
  { id: "v612", word: "ごろ", reading: "ごろ", meaning: "ungefähr, gegen (Zeitpunkt)", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "七時ごろ家を出ます。", reading: "しちじごろいえをでます。", de: "Gegen sieben Uhr verlasse ich das Haus." },
    { jp: "十二時ごろ昼ごはんを食べます。", reading: "じゅうにじごろひるごはんをたべます。", de: "Gegen zwölf esse ich zu Mittag." }
  ]},
  { id: "v613", word: "コンサート", reading: "コンサート", meaning: "Konzert", pos: "Nomen", level: "easy", examples: [
    { jp: "土曜日にコンサートに行きます。", reading: "どようびにコンサートにいきます。", de: "Am Samstag gehe ich ins Konzert." },
    { jp: "コンサートはとてもよかったです。", reading: "コンサートはとてもよかったです。", de: "Das Konzert war sehr gut." }
  ]},
  { id: "v614", word: "今度", reading: "こんど", meaning: "nächstes Mal / demnächst", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "今度一緒に食事しましょう。", reading: "こんどいっしょにしょくじしましょう。", de: "Lass uns nächstes Mal zusammen essen." },
    { jp: "今度の日曜日は暇です。", reading: "こんどのにちようびはひまです。", de: "Nächsten Sonntag habe ich Zeit." }
  ]},
  { id: "v615", word: "こんな", reading: "こんな", meaning: "so ein, solche(r/s)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "こんな店は初めてです。", reading: "こんなみせははじめてです。", de: "In so einem Laden war ich zum ersten Mal." },
    { jp: "こんな時どうしますか。", reading: "こんなときどうしますか。", de: "Was macht man in so einem Fall?" }
  ]},
  { id: "v616", word: "コンビニ", reading: "コンビニ", meaning: "Konbini (24-Stunden-Laden)", pos: "Nomen", level: "easy", examples: [
    { jp: "コンビニで飲み物を買います。", reading: "コンビニでのみものをかいます。", de: "Ich kaufe Getränke im Konbini." },
    { jp: "コンビニは駅の近くにあります。", reading: "コンビニはえきのちかくにあります。", de: "Der Konbini ist beim Bahnhof." }
  ]},
  { id: "v617", word: "コンピューター", reading: "コンピューター", meaning: "Computer", pos: "Nomen", level: "easy", examples: [
    { jp: "コンピューターで仕事をします。", reading: "コンピューターでしごとをします。", de: "Ich arbeite am Computer." },
    { jp: "新しいコンピューターがほしいです。", reading: "あたらしいコンピューターがほしいです。", de: "Ich hätte gern einen neuen Computer." }
  ]},
  { id: "v618", word: "サービス", reading: "サービス", meaning: "Service, Bedienung", pos: "Nomen", level: "adv", examples: [
    { jp: "この店はサービスがいいです。", reading: "このみせはサービスがいいです。", de: "Dieser Laden hat guten Service." },
    { jp: "サービスで飲み物をもらいました。", reading: "サービスでのみものをもらいました。", de: "Als Extra habe ich ein Getränk bekommen." }
  ]},
  { id: "v619", word: "最近", reading: "さいきん", meaning: "in letzter Zeit, kürzlich", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "最近忙しいです。", reading: "さいきんいそがしいです。", de: "In letzter Zeit bin ich beschäftigt." },
    { jp: "最近日本語を始めました。", reading: "さいきんにほんごをはじめました。", de: "Kürzlich habe ich mit Japanisch angefangen." }
  ]},
  { id: "v620", word: "サイズ", reading: "サイズ", meaning: "Größe", pos: "Nomen", level: "adv", examples: [
    { jp: "このシャツのサイズはMです。", reading: "このシャツのサイズはエムです。", de: "Dieses Hemd hat Größe M." },
    { jp: "もっと大きいサイズはありますか。", reading: "もっとおおきいサイズはありますか。", de: "Haben Sie eine größere Größe?" }
  ]},
  { id: "v621", word: "サイン", reading: "サイン", meaning: "Unterschrift", pos: "Nomen", level: "adv", examples: [
    { jp: "ここにサインをしてください。", reading: "ここにサインをしてください。", de: "Unterschreiben Sie bitte hier." },
    { jp: "有名人のサインをもらいました。", reading: "ゆうめいじんのサインをもらいました。", de: "Ich habe ein Autogramm bekommen." }
  ]},
  { id: "v622", word: "サウナ", reading: "サウナ", meaning: "Sauna", pos: "Nomen", level: "adv", examples: [
    { jp: "サウナで汗をかきます。", reading: "サウナであせをかきます。", de: "In der Sauna schwitze ich." },
    { jp: "運動の後でサウナに入ります。", reading: "うんどうのあとでサウナにはいります。", de: "Nach dem Sport gehe ich in die Sauna." }
  ]},
  { id: "v623", word: "魚屋", reading: "さかなや", meaning: "Fischgeschäft", pos: "Nomen", level: "adv", examples: [
    { jp: "魚屋で魚を買います。", reading: "さかなやでさかなをかいます。", de: "Ich kaufe Fisch im Fischgeschäft." },
    { jp: "魚屋は市場の中にあります。", reading: "さかなやはいちばのなかにあります。", de: "Das Fischgeschäft ist im Markt." }
  ]},
  { id: "v624", word: "先", reading: "さき", meaning: "voraus, vorher / Spitze", pos: "Nomen", level: "adv", examples: [
    { jp: "お先にどうぞ。", reading: "おさきにどうぞ。", de: "Gehen Sie bitte vor." },
    { jp: "先に帰ります。", reading: "さきにかえります。", de: "Ich gehe schon mal nach Hause." }
  ]},
  { id: "v625", word: "桜", reading: "さくら", meaning: "Kirschblüte", pos: "Nomen", level: "adv", examples: [
    { jp: "春に桜が咲きます。", reading: "はるにさくらがさきます。", de: "Im Frühling blühen die Kirschblüten." },
    { jp: "桜がとてもきれいです。", reading: "さくらがとてもきれいです。", de: "Die Kirschblüten sind sehr schön." }
  ]},
  { id: "v626", word: "座席", reading: "ざせき", meaning: "Sitzplatz", pos: "Nomen", level: "adv", examples: [
    { jp: "座席を予約しました。", reading: "ざせきをよやくしました。", de: "Ich habe einen Sitzplatz reserviert." },
    { jp: "窓側の座席がいいです。", reading: "まどがわのざせきがいいです。", de: "Ich hätte gern einen Fensterplatz." }
  ]},
  { id: "v627", word: "サラダ", reading: "サラダ", meaning: "Salat", pos: "Nomen", level: "easy", examples: [
    { jp: "野菜のサラダを作ります。", reading: "やさいのサラダをつくります。", de: "Ich mache einen Gemüsesalat." },
    { jp: "毎日サラダを食べます。", reading: "まいにちサラダをたべます。", de: "Ich esse jeden Tag Salat." }
  ]},
  { id: "v628", word: "サングラス", reading: "サングラス", meaning: "Sonnenbrille", pos: "Nomen", level: "adv", examples: [
    { jp: "夏にサングラスをかけます。", reading: "なつにサングラスをかけます。", de: "Im Sommer trage ich eine Sonnenbrille." },
    { jp: "新しいサングラスを買いました。", reading: "あたらしいサングラスをかいました。", de: "Ich habe eine neue Sonnenbrille gekauft." }
  ]},
  { id: "v629", word: "サンドイッチ", reading: "サンドイッチ", meaning: "Sandwich", pos: "Nomen", level: "easy", examples: [
    { jp: "昼ごはんにサンドイッチを食べます。", reading: "ひるごはんにサンドイッチをたべます。", de: "Zum Mittag esse ich ein Sandwich." },
    { jp: "サンドイッチを二つ作りました。", reading: "サンドイッチをふたつつくりました。", de: "Ich habe zwei Sandwiches gemacht." }
  ]},
  { id: "v630", word: "残念", reading: "ざんねん", meaning: "schade, bedauerlich", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "行けなくて残念です。", reading: "いけなくてざんねんです。", de: "Schade, dass ich nicht kommen kann." },
    { jp: "残念ですが、また今度。", reading: "ざんねんですが、またこんど。", de: "Schade, aber dann ein andermal." }
  ]},
  { id: "v631", word: "散歩", reading: "さんぽ", meaning: "Spaziergang", pos: "Nomen", level: "easy", examples: [
    { jp: "朝、公園を散歩します。", reading: "あさ、こうえんをさんぽします。", de: "Morgens spaziere ich im Park." },
    { jp: "犬と散歩に行きます。", reading: "いぬとさんぽにいきます。", de: "Ich gehe mit dem Hund spazieren." }
  ]},
  { id: "v632", word: "しかし", reading: "しかし", meaning: "aber / jedoch (formell)", pos: "Konjunktion", level: "adv", examples: [
    { jp: "行きたいです。しかし、時間がありません。", reading: "いきたいです。しかし、じかんがありません。", de: "Ich möchte gehen. Aber ich habe keine Zeit." },
    { jp: "安いです。しかし、あまりよくありません。", reading: "やすいです。しかし、あまりよくありません。", de: "Es ist günstig. Aber nicht sehr gut." }
  ]},
  { id: "v633", word: "試験", reading: "しけん", meaning: "Prüfung", pos: "Nomen", level: "easy", examples: [
    { jp: "明日、日本語の試験があります。", reading: "あした、にほんごのしけんがあります。", de: "Morgen habe ich eine Japanisch-Prüfung." },
    { jp: "試験のために勉強します。", reading: "しけんのためにべんきょうします。", de: "Ich lerne für die Prüfung." }
  ]},
  { id: "v635", word: "システム", reading: "システム", meaning: "System", pos: "Nomen", level: "adv", examples: [
    { jp: "新しいシステムを使います。", reading: "あたらしいシステムをつかいます。", de: "Ich benutze ein neues System." },
    { jp: "このシステムは便利です。", reading: "このシステムはべんりです。", de: "Dieses System ist praktisch." }
  ]},
  { id: "v636", word: "自然", reading: "しぜん", meaning: "Natur", pos: "Nomen", level: "adv", examples: [
    { jp: "田舎は自然が多いです。", reading: "いなかはしぜんがおおいです。", de: "Auf dem Land gibt es viel Natur." },
    { jp: "自然の中を歩きます。", reading: "しぜんのなかをあるきます。", de: "Ich spaziere in der Natur." }
  ]},
  { id: "v637", word: "下", reading: "した", meaning: "unter, unten", pos: "Nomen", level: "easy", examples: [
    { jp: "机の下に猫がいます。", reading: "つくえのしたにねこがいます。", de: "Unter dem Tisch ist eine Katze." },
    { jp: "木の下で待ちます。", reading: "きのしたでまちます。", de: "Ich warte unter dem Baum." }
  ]},
  { id: "v638", word: "親しい", reading: "したしい", meaning: "eng befreundet, vertraut", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "彼とは親しいです。", reading: "かれとはしたしいです。", de: "Mit ihm bin ich eng befreundet." },
    { jp: "親しい友達と旅行します。", reading: "したしいともだちとりょこうします。", de: "Ich verreise mit einem engen Freund." }
  ]},
  { id: "v639", word: "失敗する", reading: "しっぱいする", meaning: "scheitern, Fehler machen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "試験に失敗しました。", reading: "しけんにしっぱいしました。", de: "Ich bin bei der Prüfung durchgefallen." },
    { jp: "失敗しても大丈夫です。", reading: "しっぱいしてもだいじょうぶです。", de: "Auch wenn man scheitert, ist es in Ordnung." }
  ]},
  { id: "v640", word: "死ぬ", reading: "しぬ", meaning: "sterben", pos: "Verb (Godan, ぬ)", level: "adv", examples: [
    { jp: "祖父は去年死にました。", reading: "そふはきょねんしにました。", de: "Mein Großvater ist letztes Jahr gestorben." },
    { jp: "この花は水がないと死にます。", reading: "このはなはみずがないとしにます。", de: "Diese Blume stirbt ohne Wasser." }
  ]},
  { id: "v641", word: "芝居", reading: "しばい", meaning: "Theaterstück", pos: "Nomen", level: "adv", examples: [
    { jp: "友達と芝居を見に行きます。", reading: "ともだちとしばいをみにいきます。", de: "Ich gehe mit einem Freund ins Theater." },
    { jp: "その芝居は有名です。", reading: "そのしばいはゆうめいです。", de: "Dieses Theaterstück ist berühmt." }
  ]},
  { id: "v642", word: "自分", reading: "じぶん", meaning: "man selbst, selbst", pos: "Nomen", level: "adv", examples: [
    { jp: "自分で作りました。", reading: "じぶんでつくりました。", de: "Ich habe es selbst gemacht." },
    { jp: "自分の部屋を掃除します。", reading: "じぶんのへやをそうじします。", de: "Ich putze mein eigenes Zimmer." }
  ]},
  { id: "v643", word: "島", reading: "しま", meaning: "Insel", pos: "Nomen", level: "adv", examples: [
    { jp: "夏に小さい島へ行きます。", reading: "なつにちいさいしまへいきます。", de: "Im Sommer fahre ich auf eine kleine Insel." },
    { jp: "日本は島の国です。", reading: "にほんはしまのくにです。", de: "Japan ist ein Inselland." }
  ]},
  { id: "v644", word: "ジム", reading: "ジム", meaning: "Fitnessstudio, Sporthalle", pos: "Nomen", level: "adv", examples: [
    { jp: "毎週ジムに行きます。", reading: "まいしゅうジムにいきます。", de: "Jede Woche gehe ich ins Fitnessstudio." },
    { jp: "ジムで運動します。", reading: "ジムでうんどうします。", de: "Ich trainiere im Fitnessstudio." }
  ]},
  { id: "v645", word: "事務所", reading: "じむしょ", meaning: "Büro", pos: "Nomen", level: "adv", examples: [
    { jp: "事務所は二階にあります。", reading: "じむしょはにかいにあります。", de: "Das Büro ist im ersten Stock." },
    { jp: "事務所で電話を受けます。", reading: "じむしょででんわをうけます。", de: "Ich nehme im Büro Anrufe entgegen." }
  ]},
  { id: "v646", word: "ジャケット", reading: "ジャケット", meaning: "Jacke", pos: "Nomen", level: "adv", examples: [
    { jp: "青いジャケットを着ます。", reading: "あおいジャケットをきます。", de: "Ich trage eine blaue Jacke." },
    { jp: "ジャケットを脱ぎます。", reading: "ジャケットをぬぎます。", de: "Ich ziehe die Jacke aus." }
  ]},
  { id: "v647", word: "シャツ", reading: "シャツ", meaning: "Hemd", pos: "Nomen", level: "easy", examples: [
    { jp: "白いシャツを着ています。", reading: "しろいシャツをきています。", de: "Ich trage ein weißes Hemd." },
    { jp: "シャツを洗います。", reading: "シャツをあらいます。", de: "Ich wasche das Hemd." }
  ]},
  { id: "v648", word: "シャワー", reading: "シャワー", meaning: "Dusche", pos: "Nomen", level: "easy", examples: [
    { jp: "朝、シャワーを浴びます。", reading: "あさ、シャワーをあびます。", de: "Morgens dusche ich." },
    { jp: "シャワーは熱いです。", reading: "シャワーはあついです。", de: "Die Dusche ist heiß." }
  ]},
  { id: "v649", word: "住所", reading: "じゅうしょ", meaning: "Adresse", pos: "Nomen", level: "adv", examples: [
    { jp: "ここに住所を書いてください。", reading: "ここにじゅうしょをかいてください。", de: "Schreiben Sie hier bitte Ihre Adresse." },
    { jp: "住所が変わりました。", reading: "じゅうしょがかわりました。", de: "Meine Adresse hat sich geändert." }
  ]},
  { id: "v650", word: "じゅうたい", reading: "じゅうたい", meaning: "Stau", pos: "Nomen", level: "adv", examples: [
    { jp: "道が渋滞しています。", reading: "みちがじゅうたいしています。", de: "Auf der Straße ist Stau." },
    { jp: "じゅうたいで遅れました。", reading: "じゅうたいでおくれました。", de: "Wegen des Staus habe ich mich verspätet." }
  ]},
  { id: "v651", word: "柔道", reading: "じゅうどう", meaning: "Jūdō", pos: "Nomen", level: "adv", examples: [
    { jp: "柔道を習っています。", reading: "じゅうどうをならっています。", de: "Ich lerne Jūdō." },
    { jp: "柔道は日本のスポーツです。", reading: "じゅうどうはにほんのスポーツです。", de: "Jūdō ist ein japanischer Sport." }
  ]},
  { id: "v652", word: "授業", reading: "じゅぎょう", meaning: "Unterricht", pos: "Nomen", level: "adv", examples: [
    { jp: "九時に授業が始まります。", reading: "くじにじゅぎょうがはじまります。", de: "Um neun Uhr beginnt der Unterricht." },
    { jp: "今日は授業が三つあります。", reading: "きょうはじゅぎょうがみっつあります。", de: "Heute habe ich drei Unterrichtsstunden." }
  ]},
  { id: "v653", word: "主人", reading: "しゅじん", meaning: "(mein) Ehemann", pos: "Nomen", level: "adv", examples: [
    { jp: "主人は会社員です。", reading: "しゅじんはかいしゃいんです。", de: "Mein Mann ist Angestellter." },
    { jp: "主人と旅行します。", reading: "しゅじんとりょこうします。", de: "Ich verreise mit meinem Mann." }
  ]},
  { id: "v654", word: "出発", reading: "しゅっぱつ", meaning: "Abfahrt, Abreise", pos: "Nomen", level: "adv", examples: [
    { jp: "出発は朝八時です。", reading: "しゅっぱつはあさはちじです。", de: "Die Abfahrt ist um acht Uhr morgens." },
    { jp: "出発の時間を教えてください。", reading: "しゅっぱつのじかんをおしえてください。", de: "Sagen Sie mir bitte die Abfahrtszeit." }
  ]},
  { id: "v655", word: "出発する", reading: "しゅっぱつする", meaning: "abfahren, abreisen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "電車は五分後に出発します。", reading: "でんしゃはごふんごにしゅっぱつします。", de: "Der Zug fährt in fünf Minuten ab." },
    { jp: "明日、日本に出発します。", reading: "あした、にほんにしゅっぱつします。", de: "Morgen reise ich nach Japan ab." }
  ]},
  { id: "v656", word: "紹介する", reading: "しょうかいする", meaning: "vorstellen (jemanden)", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "友達を紹介します。", reading: "ともだちをしょうかいします。", de: "Ich stelle meinen Freund vor." },
    { jp: "自己紹介をしてください。", reading: "じこしょうかいをしてください。", de: "Stellen Sie sich bitte vor." }
  ]},
  { id: "v657", word: "少々", reading: "しょうしょう", meaning: "ein wenig, einen Moment", pos: "Adverb", level: "adv", examples: [
    { jp: "少々お待ちください。", reading: "しょうしょうおまちください。", de: "Einen Moment bitte." },
    { jp: "塩を少々入れます。", reading: "しおをしょうしょういれます。", de: "Ich gebe ein wenig Salz dazu." }
  ]},
  { id: "v659", word: "招待する", reading: "しょうたいする", meaning: "einladen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "友達をパーティーに招待します。", reading: "ともだちをパーティーにしょうたいします。", de: "Ich lade Freunde zur Party ein." },
    { jp: "結婚式に招待されました。", reading: "けっこんしきにしょうたいされました。", de: "Ich wurde zur Hochzeit eingeladen." }
  ]},
  { id: "v660", word: "食事", reading: "しょくじ", meaning: "Mahlzeit, Essen", pos: "Nomen", level: "easy", examples: [
    { jp: "一緒に食事しましょう。", reading: "いっしょにしょくじしましょう。", de: "Lass uns zusammen essen." },
    { jp: "食事の後で薬を飲みます。", reading: "しょくじのあとでくすりをのみます。", de: "Nach dem Essen nehme ich Medizin." }
  ]},
  { id: "v661", word: "食堂", reading: "しょくどう", meaning: "Speisesaal, Kantine", pos: "Nomen", level: "adv", examples: [
    { jp: "食堂で昼ごはんを食べます。", reading: "しょくどうでひるごはんをたべます。", de: "In der Kantine esse ich zu Mittag." },
    { jp: "会社の食堂は安いです。", reading: "かいしゃのしょくどうはやすいです。", de: "Die Firmenkantine ist günstig." }
  ]},
  { id: "v662", word: "知らせる", reading: "しらせる", meaning: "benachrichtigen, mitteilen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "結果を知らせます。", reading: "けっかをしらせます。", de: "Ich teile das Ergebnis mit." },
    { jp: "住所が変わったら知らせてください。", reading: "じゅうしょがかわったらしらせてください。", de: "Sagen Sie Bescheid, wenn sich die Adresse ändert." }
  ]},
  { id: "v663", word: "白", reading: "しろ", meaning: "Weiß (Farbe)", pos: "Nomen", level: "easy", examples: [
    { jp: "白が好きです。", reading: "しろがすきです。", de: "Ich mag Weiß." },
    { jp: "白のシャツを買いました。", reading: "しろのシャツをかいました。", de: "Ich habe ein weißes Hemd gekauft." }
  ]},
  { id: "v664", word: "白い", reading: "しろい", meaning: "weiß", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "白い雲が見えます。", reading: "しろいくもがみえます。", de: "Man sieht weiße Wolken." },
    { jp: "白い犬がいます。", reading: "しろいいぬがいます。", de: "Da ist ein weißer Hund." }
  ]},
  { id: "v665", word: "新幹線", reading: "しんかんせん", meaning: "Shinkansen (Schnellzug)", pos: "Nomen", level: "easy", examples: [
    { jp: "新幹線で大阪へ行きます。", reading: "しんかんせんでおおさかへいきます。", de: "Ich fahre mit dem Shinkansen nach Ōsaka." },
    { jp: "新幹線はとても速いです。", reading: "しんかんせんはとてもはやいです。", de: "Der Shinkansen ist sehr schnell." }
  ]},
  { id: "v666", word: "信号", reading: "しんごう", meaning: "Ampel, Signal", pos: "Nomen", level: "adv", examples: [
    { jp: "信号が赤です。", reading: "しんごうがあかです。", de: "Die Ampel ist rot." },
    { jp: "信号を渡ってください。", reading: "しんごうをわたってください。", de: "Überqueren Sie bitte bei der Ampel." }
  ]},
  { id: "v668", word: "水泳", reading: "すいえい", meaning: "das Schwimmen", pos: "Nomen", level: "adv", examples: [
    { jp: "夏に水泳を習います。", reading: "なつにすいえいをならいます。", de: "Im Sommer lerne ich schwimmen." },
    { jp: "水泳は体にいいです。", reading: "すいえいはからだにいいです。", de: "Schwimmen ist gut für den Körper." }
  ]},
  { id: "v669", word: "吸う", reading: "すう", meaning: "(Luft) einatmen / rauchen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "ここでたばこを吸わないでください。", reading: "ここでたばこをすわないでください。", de: "Rauchen Sie hier bitte nicht." },
    { jp: "深く息を吸います。", reading: "ふかくいきをすいます。", de: "Ich atme tief ein." }
  ]},
  { id: "v670", word: "スープ", reading: "スープ", meaning: "Suppe", pos: "Nomen", level: "easy", examples: [
    { jp: "温かいスープを飲みます。", reading: "あたたかいスープをのみます。", de: "Ich esse warme Suppe." },
    { jp: "スープを作りました。", reading: "スープをつくりました。", de: "Ich habe Suppe gekocht." }
  ]},
  { id: "v671", word: "スカーフ", reading: "スカーフ", meaning: "Schal, Halstuch", pos: "Nomen", level: "adv", examples: [
    { jp: "きれいなスカーフをしています。", reading: "きれいなスカーフをしています。", de: "Sie trägt einen schönen Schal." },
    { jp: "母にスカーフをあげました。", reading: "ははにスカーフをあげました。", de: "Ich habe meiner Mutter einen Schal geschenkt." }
  ]},
  { id: "v672", word: "スキー", reading: "スキー", meaning: "Ski (fahren)", pos: "Nomen", level: "adv", examples: [
    { jp: "冬に山でスキーをします。", reading: "ふゆにやまでスキーをします。", de: "Im Winter fahre ich in den Bergen Ski." },
    { jp: "スキーは楽しいです。", reading: "スキーはたのしいです。", de: "Skifahren macht Spaß." }
  ]},
  { id: "v674", word: "すき焼き", reading: "すきやき", meaning: "Sukiyaki (jap. Gericht)", pos: "Nomen", level: "adv", examples: [
    { jp: "今晩すき焼きを食べます。", reading: "こんばんすきやきをたべます。", de: "Heute Abend essen wir Sukiyaki." },
    { jp: "すき焼きはおいしいです。", reading: "すきやきはおいしいです。", de: "Sukiyaki ist lecker." }
  ]},
  { id: "v675", word: "すく", reading: "すく", meaning: "leer werden (Bauch, Raum)", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "おなかがすきました。", reading: "おなかがすきました。", de: "Ich habe Hunger bekommen." },
    { jp: "電車がすいています。", reading: "でんしゃがすいています。", de: "Der Zug ist leer." }
  ]},
  { id: "v676", word: "すぐ", reading: "すぐ", meaning: "sofort, gleich", pos: "Adverb", level: "easy", examples: [
    { jp: "すぐ行きます。", reading: "すぐいきます。", de: "Ich komme sofort." },
    { jp: "駅はすぐそこです。", reading: "えきはすぐそこです。", de: "Der Bahnhof ist gleich dort." }
  ]},
  { id: "v677", word: "すごい", reading: "すごい", meaning: "toll, super, gewaltig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "すごい人ですね。", reading: "すごいひとですね。", de: "Was für eine beeindruckende Person." },
    { jp: "昨日はすごい雨でした。", reading: "きのうはすごいあめでした。", de: "Gestern gab es heftigen Regen." }
  ]},
  { id: "v678", word: "すっぱい", reading: "すっぱい", meaning: "sauer", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "このレモンはすっぱいです。", reading: "このレモンはすっぱいです。", de: "Diese Zitrone ist sauer." },
    { jp: "すっぱい物が好きです。", reading: "すっぱいものがすきです。", de: "Ich mag saure Sachen." }
  ]},
  { id: "v679", word: "ステーキ", reading: "ステーキ", meaning: "Steak", pos: "Nomen", level: "adv", examples: [
    { jp: "レストランでステーキを食べます。", reading: "レストランでステーキをたべます。", de: "Im Restaurant esse ich ein Steak." },
    { jp: "ステーキを焼きます。", reading: "ステーキをやきます。", de: "Ich brate ein Steak." }
  ]},
  { id: "v680", word: "捨てる", reading: "すてる", meaning: "wegwerfen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "古い新聞を捨てます。", reading: "ふるいしんぶんをすてます。", de: "Ich werfe alte Zeitungen weg." },
    { jp: "ごみをここに捨てないでください。", reading: "ごみをここにすてないでください。", de: "Werfen Sie den Müll nicht hierhin." }
  ]},
  { id: "v681", word: "ストーブ", reading: "ストーブ", meaning: "Ofen, Heizofen", pos: "Nomen", level: "adv", examples: [
    { jp: "冬はストーブをつけます。", reading: "ふゆはストーブをつけます。", de: "Im Winter mache ich den Ofen an." },
    { jp: "ストーブの前は暖かいです。", reading: "ストーブのまえはあたたかいです。", de: "Vor dem Ofen ist es warm." }
  ]},
  { id: "v682", word: "すばらしい", reading: "すばらしい", meaning: "wunderbar, großartig", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "すばらしい景色ですね。", reading: "すばらしいけしきですね。", de: "Was für eine wunderbare Aussicht." },
    { jp: "すばらしいコンサートでした。", reading: "すばらしいコンサートでした。", de: "Es war ein großartiges Konzert." }
  ]},
  { id: "v683", word: "スプーン", reading: "スプーン", meaning: "Löffel", pos: "Nomen", level: "easy", examples: [
    { jp: "スプーンでスープを飲みます。", reading: "スプーンでスープをのみます。", de: "Ich esse die Suppe mit dem Löffel." },
    { jp: "スプーンを二本ください。", reading: "スプーンをにほんください。", de: "Bitte zwei Löffel." }
  ]},
  { id: "v684", word: "スポーツ", reading: "スポーツ", meaning: "Sport", pos: "Nomen", level: "easy", examples: [
    { jp: "スポーツが好きです。", reading: "スポーツがすきです。", de: "Ich mag Sport." },
    { jp: "どんなスポーツをしますか。", reading: "どんなスポーツをしますか。", de: "Welchen Sport treiben Sie?" }
  ]},
  { id: "v685", word: "スポーツクラブ", reading: "スポーツクラブ", meaning: "Sportclub, Fitnessclub", pos: "Nomen", level: "adv", examples: [
    { jp: "スポーツクラブに入りました。", reading: "スポーツクラブにはいりました。", de: "Ich bin einem Sportclub beigetreten." },
    { jp: "週末はスポーツクラブで運動します。", reading: "しゅうまつはスポーツクラブでうんどうします。", de: "Am Wochenende trainiere ich im Sportclub." }
  ]},
  { id: "v686", word: "済ませる", reading: "すませる", meaning: "erledigen, beenden", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "仕事を早く済ませます。", reading: "しごとをはやくすませます。", de: "Ich erledige die Arbeit schnell." },
    { jp: "食事を済ませてから行きます。", reading: "しょくじをすませてからいきます。", de: "Ich gehe, nachdem ich gegessen habe." }
  ]},
  { id: "v687", word: "背", reading: "せ", meaning: "Rücken / Körpergröße", pos: "Nomen", level: "adv", examples: [
    { jp: "彼は背が高いです。", reading: "かれはせがたかいです。", de: "Er ist groß." },
    { jp: "背が高くなりました。", reading: "せがたかくなりました。", de: "Ich bin gewachsen." },
    { jp: "子供を背に乗せます。", reading: "こどもをせにのせます。", de: "Ich trage das Kind auf dem Rücken." }
  ]},
  { id: "v688", word: "生活", reading: "せいかつ", meaning: "Leben, Alltag", pos: "Nomen", level: "adv", examples: [
    { jp: "日本の生活は楽しいです。", reading: "にほんのせいかつはたのしいです。", de: "Das Leben in Japan macht Spaß." },
    { jp: "毎日の生活が忙しいです。", reading: "まいにちのせいかつがいそがしいです。", de: "Mein Alltag ist stressig." }
  ]},
  { id: "v689", word: "セーター", reading: "セーター", meaning: "Pullover", pos: "Nomen", level: "easy", examples: [
    { jp: "寒いのでセーターを着ます。", reading: "さむいのでセーターをきます。", de: "Weil es kalt ist, ziehe ich einen Pullover an." },
    { jp: "赤いセーターを買いました。", reading: "あかいセーターをかいました。", de: "Ich habe einen roten Pullover gekauft." }
  ]},
  { id: "v690", word: "セール", reading: "セール", meaning: "Ausverkauf, Sale", pos: "Nomen", level: "adv", examples: [
    { jp: "デパートでセールをしています。", reading: "デパートでセールをしています。", de: "Im Kaufhaus ist Ausverkauf." },
    { jp: "セールで安く買いました。", reading: "セールでやすくかいました。", de: "Im Sale habe ich günstig gekauft." }
  ]},
  { id: "v691", word: "せき", reading: "せき", meaning: "Husten", pos: "Nomen", level: "adv", examples: [
    { jp: "せきが止まりません。", reading: "せきがとまりません。", de: "Der Husten hört nicht auf." },
    { jp: "風邪でせきが出ます。", reading: "かぜでせきがでます。", de: "Wegen der Erkältung huste ich." }
  ]},
  { id: "v692", word: "せきをする", reading: "せきをする", meaning: "husten", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "彼は何度もせきをしました。", reading: "かれはなんどもせきをしました。", de: "Er hat mehrmals gehustet." },
    { jp: "せきをするとのどが痛いです。", reading: "せきをするとのどがいたいです。", de: "Beim Husten tut der Hals weh." }
  ]},
  { id: "v693", word: "説明", reading: "せつめい", meaning: "Erklärung", pos: "Nomen", level: "adv", examples: [
    { jp: "先生の説明はわかりやすいです。", reading: "せんせいのせつめいはわかりやすいです。", de: "Die Erklärung des Lehrers ist verständlich." },
    { jp: "もう一度説明をお願いします。", reading: "もういちどせつめいをおねがいします。", de: "Bitte noch einmal die Erklärung." }
  ]},
  { id: "v694", word: "説明する", reading: "せつめいする", meaning: "erklären", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "使い方を説明します。", reading: "つかいかたをせつめいします。", de: "Ich erkläre die Benutzung." },
    { jp: "道を説明してくれました。", reading: "みちをせつめいしてくれました。", de: "Er hat mir den Weg erklärt." }
  ]},
  { id: "v695", word: "ぜひ", reading: "ぜひ", meaning: "unbedingt, auf jeden Fall", pos: "Adverb", level: "adv", examples: [
    { jp: "ぜひ来てください。", reading: "ぜひきてください。", de: "Kommen Sie unbedingt." },
    { jp: "ぜひ一緒に行きたいです。", reading: "ぜひいっしょにいきたいです。", de: "Ich möchte unbedingt mitkommen." }
  ]},
  { id: "v696", word: "線", reading: "せん", meaning: "Linie (Bahn)", pos: "Nomen", level: "adv", examples: [
    { jp: "山手線に乗ります。", reading: "やまのてせんにのります。", de: "Ich nehme die Yamanote-Linie." },
    { jp: "この線は東京駅まで行きます。", reading: "このせんはとうきょうえきまでいきます。", de: "Diese Linie fährt bis zum Bahnhof Tōkyō." }
  ]},
  { id: "v697", word: "洗濯機", reading: "せんたくき", meaning: "Waschmaschine", pos: "Nomen", level: "adv", examples: [
    { jp: "洗濯機で服を洗います。", reading: "せんたくきでふくをあらいます。", de: "Ich wasche die Kleidung in der Waschmaschine." },
    { jp: "新しい洗濯機を買いました。", reading: "あたらしいせんたくきをかいました。", de: "Ich habe eine neue Waschmaschine gekauft." }
  ]},
  { id: "v698", word: "専門", reading: "せんもん", meaning: "Fachgebiet, Spezialisierung", pos: "Nomen", level: "adv", examples: [
    { jp: "専門は経済です。", reading: "せんもんはけいざいです。", de: "Mein Fachgebiet ist Wirtschaft." },
    { jp: "彼の専門は日本の歴史です。", reading: "かれのせんもんはにほんのれきしです。", de: "Sein Fach ist japanische Geschichte." }
  ]},
  { id: "v699", word: "掃除", reading: "そうじ", meaning: "das Putzen, Reinigung", pos: "Nomen", level: "easy", examples: [
    { jp: "部屋の掃除をします。", reading: "へやのそうじをします。", de: "Ich putze das Zimmer." },
    { jp: "掃除は大変です。", reading: "そうじはたいへんです。", de: "Putzen ist anstrengend." }
  ]},
  { id: "v700", word: "掃除する", reading: "そうじする", meaning: "putzen, sauber machen", pos: "Verb (する-Verb)", level: "easy", examples: [
    { jp: "毎日部屋を掃除します。", reading: "まいにちへやをそうじします。", de: "Ich putze jeden Tag das Zimmer." },
    { jp: "台所を掃除しました。", reading: "だいどころをそうじしました。", de: "Ich habe die Küche geputzt." }
  ]},
  { id: "v701", word: "相談する", reading: "そうだんする", meaning: "um Rat fragen, sich beraten", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "先生に相談します。", reading: "せんせいにそうだんします。", de: "Ich frage den Lehrer um Rat." },
    { jp: "友達と将来のことを相談しました。", reading: "ともだちとしょうらいのことをそうだんしました。", de: "Ich habe mit einem Freund über die Zukunft beraten." }
  ]},
  { id: "v702", word: "そこ", reading: "そこ", meaning: "dort", pos: "Ausdruck", level: "easy", examples: [
    { jp: "そこに置いてください。", reading: "そこにおいてください。", de: "Stellen Sie es bitte dorthin." },
    { jp: "そこは私の席です。", reading: "そこはわたしのせきです。", de: "Das dort ist mein Platz." }
  ]},
  { id: "v703", word: "そして", reading: "そして", meaning: "und dann, danach", pos: "Ausdruck", level: "adv", examples: [
    { jp: "朝ごはんを食べて、そして学校へ行きます。", reading: "あさごはんをたべて、そしてがっこうへいきます。", de: "Ich frühstücke und gehe dann zur Schule." },
    { jp: "宿題をしました。そして寝ました。", reading: "しゅくだいをしました。そしてねました。", de: "Ich habe die Hausaufgaben gemacht und dann geschlafen." }
  ]},
  { id: "v704", word: "そちら", reading: "そちら", meaning: "dort / Sie dort (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "そちらはいい天気ですか。", reading: "そちらはいいてんきですか。", de: "Ist bei Ihnen schönes Wetter?" },
    { jp: "そちらの本を見せてください。", reading: "そちらのほんをみせてください。", de: "Zeigen Sie mir bitte das Buch dort." }
  ]},
  { id: "v705", word: "卒業", reading: "そつぎょう", meaning: "Schulabschluss", pos: "Nomen", level: "adv", examples: [
    { jp: "来年、大学を卒業します。", reading: "らいねん、だいがくをそつぎょうします。", de: "Nächstes Jahr schließe ich die Uni ab." },
    { jp: "卒業おめでとうございます。", reading: "そつぎょうおめでとうございます。", de: "Glückwunsch zum Abschluss." }
  ]},
  { id: "v706", word: "卒業する", reading: "そつぎょうする", meaning: "graduieren, abschließen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "高校を卒業してから働きます。", reading: "こうこうをそつぎょうしてからはたらきます。", de: "Nach dem Oberschulabschluss arbeite ich." },
    { jp: "彼は東京大学を卒業しました。", reading: "かれはとうきょうだいがくをそつぎょうしました。", de: "Er hat die Universität Tōkyō abgeschlossen." }
  ]},
  { id: "v707", word: "その", reading: "その", meaning: "diese(r/s) (dort)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "その本を取ってください。", reading: "そのほんをとってください。", de: "Reichen Sie mir bitte das Buch." },
    { jp: "その話は本当ですか。", reading: "そのはなしはほんとうですか。", de: "Ist diese Geschichte wahr?" }
  ]},
  { id: "v708", word: "祖父", reading: "そふ", meaning: "Großvater (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "祖父は九十歳です。", reading: "そふはきゅうじゅっさいです。", de: "Mein Großvater ist neunzig." },
    { jp: "祖父は農業をしています。", reading: "そふはのうぎょうをしています。", de: "Mein Großvater ist Landwirt." }
  ]},
  { id: "v709", word: "ソファー", reading: "ソファー", meaning: "Sofa", pos: "Nomen", level: "adv", examples: [
    { jp: "ソファーで休みます。", reading: "ソファーでやすみます。", de: "Ich ruhe mich auf dem Sofa aus." },
    { jp: "新しいソファーを買いました。", reading: "あたらしいソファーをかいました。", de: "Ich habe ein neues Sofa gekauft." }
  ]},
  { id: "v710", word: "祖母", reading: "そぼ", meaning: "Großmutter (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "祖母は料理が上手です。", reading: "そぼはりょうりがじょうずです。", de: "Meine Großmutter kocht gut." },
    { jp: "祖母に手紙を書きます。", reading: "そぼにてがみをかきます。", de: "Ich schreibe meiner Großmutter einen Brief." }
  ]},
  { id: "v711", word: "それ", reading: "それ", meaning: "das (dort bei dir)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "それは何ですか。", reading: "それはなんですか。", de: "Was ist das?" },
    { jp: "それをください。", reading: "それをください。", de: "Das dort bitte." }
  ]},
  { id: "v712", word: "それから", reading: "それから", meaning: "danach, außerdem", pos: "Ausdruck", level: "adv", examples: [
    { jp: "買い物をして、それから帰ります。", reading: "かいものをして、それからかえります。", de: "Ich kaufe ein und gehe danach nach Hause." },
    { jp: "パンをください。それからコーヒーも。", reading: "パンをください。それからコーヒーも。", de: "Brot bitte. Und außerdem Kaffee." }
  ]},
  { id: "v713", word: "それでは", reading: "それでは", meaning: "nun denn, also dann", pos: "Ausdruck", level: "adv", examples: [
    { jp: "それでは始めましょう。", reading: "それでははじめましょう。", de: "Also dann, fangen wir an." },
    { jp: "それでは、また明日。", reading: "それでは、またあした。", de: "Also dann, bis morgen." }
  ]},
  { id: "v714", word: "大学生", reading: "だいがくせい", meaning: "Student (Universität)", pos: "Nomen", level: "easy", examples: [
    { jp: "兄は大学生です。", reading: "あにはだいがくせいです。", de: "Mein Bruder ist Student." },
    { jp: "大学生の時、日本に行きました。", reading: "だいがくせいのとき、にほんにいきました。", de: "Als Student war ich in Japan." }
  ]},
  { id: "v715", word: "退屈な", reading: "たいくつな", meaning: "langweilig", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "退屈な映画でした。", reading: "たいくつなえいがでした。", de: "Es war ein langweiliger Film." },
    { jp: "毎日退屈です。", reading: "まいにちたいくつです。", de: "Jeden Tag ist es langweilig." }
  ]},
  { id: "v716", word: "体操", reading: "たいそう", meaning: "Turnen, Gymnastik", pos: "Nomen", level: "adv", examples: [
    { jp: "朝、体操をします。", reading: "あさ、たいそうをします。", de: "Morgens mache ich Gymnastik." },
    { jp: "体操は体にいいです。", reading: "たいそうはからだにいいです。", de: "Gymnastik ist gut für den Körper." }
  ]},
  { id: "v717", word: "だいぶ", reading: "だいぶ", meaning: "ziemlich, beträchtlich", pos: "Adverb", level: "adv", examples: [
    { jp: "だいぶ寒くなりました。", reading: "だいぶさむくなりました。", de: "Es ist ziemlich kalt geworden." },
    { jp: "日本語がだいぶ上手になりました。", reading: "にほんごがだいぶじょうずになりました。", de: "Mein Japanisch ist deutlich besser geworden." }
  ]},
  { id: "v718", word: "タイプ", reading: "タイプ", meaning: "Typ / tippen", pos: "Nomen", level: "adv", examples: [
    { jp: "好きなタイプの人です。", reading: "すきなタイプのひとです。", de: "Das ist mein Typ Mensch." },
    { jp: "手紙をタイプします。", reading: "てがみをタイプします。", de: "Ich tippe den Brief." }
  ]},
  { id: "v720", word: "タクシー乗り場", reading: "タクシーのりば", meaning: "Taxistand", pos: "Nomen", level: "adv", examples: [
    { jp: "タクシー乗り場はどこですか。", reading: "タクシーのりばはどこですか。", de: "Wo ist der Taxistand?" },
    { jp: "駅の前にタクシー乗り場があります。", reading: "えきのまえにタクシーのりばがあります。", de: "Vor dem Bahnhof ist ein Taxistand." }
  ]},
  { id: "v721", word: "だけ", reading: "だけ", meaning: "nur, bloß", pos: "Partikel", level: "adv", examples: [
    { jp: "水だけ飲みます。", reading: "みずだけのみます。", de: "Ich trinke nur Wasser." },
    { jp: "一人だけ来ました。", reading: "ひとりだけきました。", de: "Nur eine Person ist gekommen." }
  ]},
  { id: "v722", word: "出す", reading: "だす", meaning: "herausnehmen / abschicken", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "手紙を出します。", reading: "てがみをだします。", de: "Ich schicke einen Brief ab." },
    { jp: "かばんから本を出しました。", reading: "かばんからほんをだしました。", de: "Ich habe das Buch aus der Tasche geholt." }
  ]},
  { id: "v723", word: "訪ねる", reading: "たずねる", meaning: "besuchen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "友達の家を訪ねます。", reading: "ともだちのいえをたずねます。", de: "Ich besuche das Haus eines Freundes." },
    { jp: "先生を訪ねました。", reading: "せんせいをたずねました。", de: "Ich habe den Lehrer besucht." }
  ]},
  { id: "v724", word: "たった", reading: "たった", meaning: "bloß, nur (Menge)", pos: "Adverb", level: "adv", examples: [
    { jp: "たった百円しかありません。", reading: "たったひゃくえんしかありません。", de: "Ich habe nur 100 Yen." },
    { jp: "たった一人で行きました。", reading: "たったひとりでいきました。", de: "Ich bin ganz allein gegangen." }
  ]},
  { id: "v725", word: "棚", reading: "たな", meaning: "Regal", pos: "Nomen", level: "adv", examples: [
    { jp: "棚に本を並べます。", reading: "たなにほんをならべます。", de: "Ich ordne die Bücher ins Regal." },
    { jp: "棚の上にかばんを置きます。", reading: "たなのうえにかばんをおきます。", de: "Ich lege die Tasche auf das Regal." }
  ]},
  { id: "v726", word: "楽しむ", reading: "たのしむ", meaning: "genießen, sich freuen", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "旅行を楽しみます。", reading: "りょこうをたのしみます。", de: "Ich genieße die Reise." },
    { jp: "音楽を楽しんでいます。", reading: "おんがくをたのしんでいます。", de: "Ich genieße die Musik." }
  ]},
  { id: "v727", word: "たばこ", reading: "たばこ", meaning: "Zigarette", pos: "Nomen", level: "easy", examples: [
    { jp: "ここでたばこを吸わないでください。", reading: "ここでたばこをすわないでください。", de: "Rauchen Sie hier bitte nicht." },
    { jp: "父はたばこをやめました。", reading: "ちちはたばこをやめました。", de: "Mein Vater hat mit dem Rauchen aufgehört." }
  ]},
  { id: "v728", word: "たぶん", reading: "たぶん", meaning: "vielleicht, wahrscheinlich", pos: "Adverb", level: "easy", examples: [
    { jp: "たぶん明日雨が降ります。", reading: "たぶんあしたあめがふります。", de: "Wahrscheinlich regnet es morgen." },
    { jp: "彼はたぶん来ません。", reading: "かれはたぶんきません。", de: "Er kommt wahrscheinlich nicht." }
  ]},
  { id: "v729", word: "たまに", reading: "たまに", meaning: "gelegentlich, ab und zu", pos: "Adverb", level: "adv", examples: [
    { jp: "たまに映画を見ます。", reading: "たまにえいがをみます。", de: "Ab und zu schaue ich einen Film." },
    { jp: "たまに外で食べます。", reading: "たまにそとでたべます。", de: "Gelegentlich esse ich auswärts." }
  ]},
  { id: "v730", word: "だめ", reading: "だめ", meaning: "nicht gut, geht nicht, verboten", pos: "na-Adjektiv", level: "easy", examples: [
    { jp: "ここに入ってはだめです。", reading: "ここにはいってはだめです。", de: "Hier darf man nicht hinein." },
    { jp: "この機械はもうだめです。", reading: "このきかいはもうだめです。", de: "Diese Maschine ist kaputt." }
  ]},
  { id: "v731", word: "だれか", reading: "だれか", meaning: "jemand, irgendjemand", pos: "Ausdruck", level: "adv", examples: [
    { jp: "だれか来ましたか。", reading: "だれかきましたか。", de: "Ist jemand gekommen?" },
    { jp: "だれかに聞いてください。", reading: "だれかにきいてください。", de: "Fragen Sie bitte jemanden." }
  ]},
  { id: "v732", word: "たんす", reading: "たんす", meaning: "Kommode, Kleiderschrank", pos: "Nomen", level: "adv", examples: [
    { jp: "服をたんすに入れます。", reading: "ふくをたんすにいれます。", de: "Ich lege die Kleidung in die Kommode." },
    { jp: "たんすの中は空です。", reading: "たんすのなかはからです。", de: "Die Kommode ist leer." }
  ]},
  { id: "v733", word: "地下", reading: "ちか", meaning: "Untergeschoss, Keller", pos: "Nomen", level: "adv", examples: [
    { jp: "食品売り場は地下にあります。", reading: "しょくひんうりばはちかにあります。", de: "Die Lebensmittelabteilung ist im Untergeschoss." },
    { jp: "地下に駐車場があります。", reading: "ちかにちゅうしゃじょうがあります。", de: "Im Untergeschoss ist ein Parkplatz." }
  ]},
  { id: "v734", word: "違う", reading: "ちがう", meaning: "sich unterscheiden, falsch sein", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "答えが違います。", reading: "こたえがちがいます。", de: "Die Antwort ist falsch." },
    { jp: "私の考えは少し違います。", reading: "わたしのかんがえはすこしちがいます。", de: "Meine Meinung ist etwas anders." }
  ]},
  { id: "v735", word: "近く", reading: "ちかく", meaning: "Nähe, in der Nähe", pos: "Nomen", level: "adv", examples: [
    { jp: "家の近くに公園があります。", reading: "いえのちかくにこうえんがあります。", de: "In der Nähe des Hauses ist ein Park." },
    { jp: "近くに駅はありますか。", reading: "ちかくにえきはありますか。", de: "Gibt es in der Nähe einen Bahnhof?" }
  ]},
  { id: "v736", word: "地球", reading: "ちきゅう", meaning: "Erde, Globus", pos: "Nomen", level: "adv", examples: [
    { jp: "地球は青いです。", reading: "ちきゅうはあおいです。", de: "Die Erde ist blau." },
    { jp: "地球を大切にします。", reading: "ちきゅうをたいせつにします。", de: "Wir schützen die Erde." }
  ]},
  { id: "v737", word: "父", reading: "ちち", meaning: "Vater (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "父は会社で働いています。", reading: "ちちはかいしゃではたらいています。", de: "Mein Vater arbeitet in einer Firma." },
    { jp: "父は五十歳です。", reading: "ちちはごじゅっさいです。", de: "Mein Vater ist fünfzig." }
  ]},
  { id: "v738", word: "チップ", reading: "チップ", meaning: "Trinkgeld", pos: "Nomen", level: "adv", examples: [
    { jp: "日本ではチップはいりません。", reading: "にほんではチップはいりません。", de: "In Japan gibt man kein Trinkgeld." },
    { jp: "チップを少し置きました。", reading: "チップをすこしおきました。", de: "Ich habe etwas Trinkgeld dagelassen." }
  ]},
  { id: "v739", word: "茶色い", reading: "ちゃいろい", meaning: "braun", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "茶色いくつをはいています。", reading: "ちゃいろいくつをはいています。", de: "Ich trage braune Schuhe." },
    { jp: "茶色いかばんがほしいです。", reading: "ちゃいろいかばんがほしいです。", de: "Ich hätte gern eine braune Tasche." }
  ]},
  { id: "v740", word: "注意", reading: "ちゅうい", meaning: "Vorsicht, Achtung", pos: "Nomen", level: "adv", examples: [
    { jp: "車に注意してください。", reading: "くるまにちゅういしてください。", de: "Achten Sie auf die Autos." },
    { jp: "先生に注意されました。", reading: "せんせいにちゅういされました。", de: "Der Lehrer hat mich ermahnt." }
  ]},
  { id: "v741", word: "中華料理", reading: "ちゅうかりょうり", meaning: "chinesische Küche", pos: "Nomen", level: "adv", examples: [
    { jp: "今晩中華料理を食べます。", reading: "こんばんちゅうかりょうりをたべます。", de: "Heute Abend essen wir chinesisch." },
    { jp: "中華料理が好きです。", reading: "ちゅうかりょうりがすきです。", de: "Ich mag chinesische Küche." }
  ]},
  { id: "v742", word: "中国", reading: "ちゅうごく", meaning: "China", pos: "Nomen", level: "easy", examples: [
    { jp: "来月中国へ行きます。", reading: "らいげつちゅうごくへいきます。", de: "Nächsten Monat fahre ich nach China." },
    { jp: "中国は大きい国です。", reading: "ちゅうごくはおおきいくにです。", de: "China ist ein großes Land." }
  ]},
  { id: "v743", word: "中国人", reading: "ちゅうごくじん", meaning: "Chinese, Chinesin", pos: "Nomen", level: "adv", examples: [
    { jp: "彼は中国人です。", reading: "かれはちゅうごくじんです。", de: "Er ist Chinese." },
    { jp: "中国人の友達がいます。", reading: "ちゅうごくじんのともだちがいます。", de: "Ich habe einen chinesischen Freund." }
  ]},
  { id: "v744", word: "駐車場", reading: "ちゅうしゃじょう", meaning: "Parkplatz", pos: "Nomen", level: "adv", examples: [
    { jp: "駐車場に車を止めます。", reading: "ちゅうしゃじょうにくるまをとめます。", de: "Ich parke das Auto auf dem Parkplatz." },
    { jp: "この駐車場は無料です。", reading: "このちゅうしゃじょうはむりょうです。", de: "Dieser Parkplatz ist kostenlos." }
  ]},
  { id: "v745", word: "昼食", reading: "ちゅうしょく", meaning: "Mittagessen (formell)", pos: "Nomen", level: "adv", examples: [
    { jp: "十二時に昼食を食べます。", reading: "じゅうにじにちゅうしょくをたべます。", de: "Um zwölf esse ich zu Mittag." },
    { jp: "昼食は会社で食べます。", reading: "ちゅうしょくはかいしゃでたべます。", de: "Zu Mittag esse ich in der Firma." }
  ]},
  { id: "v746", word: "注文する", reading: "ちゅうもんする", meaning: "bestellen", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "レストランでピザを注文します。", reading: "レストランでピザをちゅうもんします。", de: "Im Restaurant bestelle ich eine Pizza." },
    { jp: "インターネットで本を注文しました。", reading: "インターネットでほんをちゅうもんしました。", de: "Ich habe im Internet ein Buch bestellt." }
  ]},
  { id: "v747", word: "ツアー", reading: "ツアー", meaning: "Tour, Reise", pos: "Nomen", level: "adv", examples: [
    { jp: "バスツアーに参加します。", reading: "バスツアーにさんかします。", de: "Ich nehme an einer Bustour teil." },
    { jp: "京都のツアーは楽しかったです。", reading: "きょうとのツアーはたのしかったです。", de: "Die Kyōto-Tour hat Spaß gemacht." }
  ]},
  { id: "v748", word: "ツアーガイド", reading: "ツアーガイド", meaning: "Reiseleiter", pos: "Nomen", level: "adv", examples: [
    { jp: "ツアーガイドが説明します。", reading: "ツアーガイドがせつめいします。", de: "Der Reiseleiter erklärt." },
    { jp: "ツアーガイドは親切でした。", reading: "ツアーガイドはしんせつでした。", de: "Der Reiseleiter war freundlich." }
  ]},
  { id: "v749", word: "通勤する", reading: "つうきんする", meaning: "zur Arbeit pendeln", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "電車で通勤します。", reading: "でんしゃでつうきんします。", de: "Ich pendle mit dem Zug zur Arbeit." },
    { jp: "毎日一時間通勤します。", reading: "まいにちいちじかんつうきんします。", de: "Ich pendle täglich eine Stunde." }
  ]},
  { id: "v750", word: "使い方", reading: "つかいかた", meaning: "Benutzung, Bedienung", pos: "Nomen", level: "adv", examples: [
    { jp: "この機械の使い方を教えてください。", reading: "このきかいのつかいかたをおしえてください。", de: "Erklären Sie mir bitte die Bedienung dieser Maschine." },
    { jp: "使い方は簡単です。", reading: "つかいかたはかんたんです。", de: "Die Benutzung ist einfach." }
  ]},
  { id: "v751", word: "月", reading: "つき", meaning: "Mond / Monat", pos: "Nomen", level: "easy", examples: [
    { jp: "今夜は月がきれいです。", reading: "こんやはつきがきれいです。", de: "Heute Nacht ist der Mond schön." },
    { jp: "月に一度、映画を見ます。", reading: "つきにいちど、えいがをみます。", de: "Einmal im Monat schaue ich einen Film." }
  ]},
  { id: "v752", word: "次", reading: "つぎ", meaning: "nächste(r/s)", pos: "Nomen", level: "easy", examples: [
    { jp: "次の駅で降ります。", reading: "つぎのえきでおります。", de: "Ich steige an der nächsten Station aus." },
    { jp: "次は私の番です。", reading: "つぎはわたしのばんです。", de: "Als Nächstes bin ich dran." }
  ]},
  { id: "v753", word: "つける", reading: "つける", meaning: "anschalten, einschalten", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "電気をつけてください。", reading: "でんきをつけてください。", de: "Machen Sie bitte das Licht an." },
    { jp: "テレビをつけました。", reading: "テレビをつけました。", de: "Ich habe den Fernseher eingeschaltet." }
  ]},
  { id: "v754", word: "都合", reading: "つごう", meaning: "Umstände, (zeitliche) Möglichkeit", pos: "Nomen", level: "adv", examples: [
    { jp: "明日は都合が悪いです。", reading: "あしたはつごうがわるいです。", de: "Morgen passt es mir nicht." },
    { jp: "都合のいい時間を教えてください。", reading: "つごうのいいじかんをおしえてください。", de: "Sagen Sie mir eine passende Zeit." }
  ]},
  { id: "v755", word: "伝える", reading: "つたえる", meaning: "übermitteln, mitteilen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "先生によろしくお伝えください。", reading: "せんせいによろしくおつたえください。", de: "Grüßen Sie bitte den Lehrer von mir." },
    { jp: "メッセージを伝えました。", reading: "メッセージをつたえました。", de: "Ich habe die Nachricht ausgerichtet." }
  ]},
  { id: "v756", word: "勤める", reading: "つとめる", meaning: "angestellt sein (bei)", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "銀行に勤めています。", reading: "ぎんこうにつとめています。", de: "Ich bin bei einer Bank angestellt." },
    { jp: "父は学校に勤めています。", reading: "ちちはがっこうにつとめています。", de: "Mein Vater arbeitet an einer Schule." }
  ]},
  { id: "v757", word: "冷たい", reading: "つめたい", meaning: "kalt (Berührung)", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "冷たい水を飲みます。", reading: "つめたいみずをのみます。", de: "Ich trinke kaltes Wasser." },
    { jp: "手が冷たいです。", reading: "てがつめたいです。", de: "Meine Hände sind kalt." }
  ]},
  { id: "v758", word: "釣り", reading: "つり", meaning: "das Angeln", pos: "Nomen", level: "adv", examples: [
    { jp: "週末に釣りに行きます。", reading: "しゅうまつにつりにいきます。", de: "Am Wochenende gehe ich angeln." },
    { jp: "父は釣りが好きです。", reading: "ちちはつりがすきです。", de: "Mein Vater angelt gern." }
  ]},
  { id: "v759", word: "デート", reading: "デート", meaning: "Date, Verabredung", pos: "Nomen", level: "adv", examples: [
    { jp: "土曜日に彼女とデートします。", reading: "どようびにかのじょとデートします。", de: "Am Samstag habe ich ein Date mit meiner Freundin." },
    { jp: "初めてのデートは楽しかったです。", reading: "はじめてのデートはたのしかったです。", de: "Das erste Date war schön." }
  ]},
  { id: "v760", word: "テーブル", reading: "テーブル", meaning: "Tisch", pos: "Nomen", level: "easy", examples: [
    { jp: "テーブルの上に花があります。", reading: "テーブルのうえにはながあります。", de: "Auf dem Tisch stehen Blumen." },
    { jp: "テーブルを拭きます。", reading: "テーブルをふきます。", de: "Ich wische den Tisch ab." }
  ]},
  { id: "v761", word: "出かける", reading: "でかける", meaning: "ausgehen, weggehen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "午後、買い物に出かけます。", reading: "ごご、かいものにでかけます。", de: "Am Nachmittag gehe ich einkaufen." },
    { jp: "母は出かけています。", reading: "はははでかけています。", de: "Meine Mutter ist ausgegangen." }
  ]},
  { id: "v762", word: "テキスト", reading: "テキスト", meaning: "Lehrbuch, Text", pos: "Nomen", level: "adv", examples: [
    { jp: "日本語のテキストを買いました。", reading: "にほんごのテキストをかいました。", de: "Ich habe ein Japanisch-Lehrbuch gekauft." },
    { jp: "テキストの十ページを開いてください。", reading: "テキストのじゅっぺーじをひらいてください。", de: "Öffnen Sie bitte Seite zehn im Lehrbuch." }
  ]},
  { id: "v763", word: "適当な", reading: "てきとうな", meaning: "passend, angemessen", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "適当な大きさを選びます。", reading: "てきとうなおおきさをえらびます。", de: "Ich wähle die passende Größe." },
    { jp: "適当な言葉が見つかりません。", reading: "てきとうなことばがみつかりません。", de: "Ich finde nicht das passende Wort." }
  ]},
  { id: "v764", word: "できる", reading: "できる", meaning: "können / fertig werden", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "日本語ができます。", reading: "にほんごができます。", de: "Ich kann Japanisch." },
    { jp: "料理ができました。", reading: "りょうりができました。", de: "Das Essen ist fertig." }
  ]},
  { id: "v765", word: "出口", reading: "でぐち", meaning: "Ausgang", pos: "Nomen", level: "easy", examples: [
    { jp: "出口はどこですか。", reading: "でぐちはどこですか。", de: "Wo ist der Ausgang?" },
    { jp: "南の出口で会いましょう。", reading: "みなみのでぐちであいましょう。", de: "Treffen wir uns am Südausgang." }
  ]},
  { id: "v766", word: "デザート", reading: "デザート", meaning: "Nachtisch, Dessert", pos: "Nomen", level: "adv", examples: [
    { jp: "デザートにケーキを食べます。", reading: "デザートにケーキをたべます。", de: "Zum Nachtisch esse ich Kuchen." },
    { jp: "デザートは何がありますか。", reading: "デザートはなにがありますか。", de: "Was gibt es zum Nachtisch?" }
  ]},
  { id: "v767", word: "テニス", reading: "テニス", meaning: "Tennis", pos: "Nomen", level: "easy", examples: [
    { jp: "友達とテニスをします。", reading: "ともだちとテニスをします。", de: "Ich spiele mit Freunden Tennis." },
    { jp: "テニスは楽しいです。", reading: "テニスはたのしいです。", de: "Tennis macht Spaß." }
  ]},
  { id: "v768", word: "テニスコート", reading: "テニスコート", meaning: "Tennisplatz", pos: "Nomen", level: "adv", examples: [
    { jp: "公園にテニスコートがあります。", reading: "こうえんにテニスコートがあります。", de: "Im Park gibt es einen Tennisplatz." },
    { jp: "テニスコートを予約しました。", reading: "テニスコートをよやくしました。", de: "Ich habe einen Tennisplatz reserviert." }
  ]},
  { id: "v769", word: "手前", reading: "てまえ", meaning: "kurz davor, diesseits (Ort)", pos: "Nomen", level: "adv", examples: [
    { jp: "銀行の手前に本屋があります。", reading: "ぎんこうのてまえにほんやがあります。", de: "Kurz vor der Bank ist ein Buchladen." },
    { jp: "駅の手前で降ります。", reading: "えきのてまえでおります。", de: "Ich steige kurz vor dem Bahnhof aus." }
  ]},
  { id: "v770", word: "でも", reading: "でも", meaning: "aber / jedoch (umgangssprachlich)", pos: "Konjunktion", level: "adv", examples: [
    { jp: "行きたいです。でも、お金がありません。", reading: "いきたいです。でも、おかねがありません。", de: "Ich möchte gehen. Aber ich habe kein Geld." },
    { jp: "疲れました。でも、大丈夫です。", reading: "つかれました。でも、だいじょうぶです。", de: "Ich bin müde. Aber es geht schon." }
  ]},
  { id: "v771", word: "店員", reading: "てんいん", meaning: "Verkäufer(in), Angestellte(r)", pos: "Nomen", level: "easy", examples: [
    { jp: "店員に値段を聞きます。", reading: "てんいんにねだんをききます。", de: "Ich frage den Verkäufer nach dem Preis." },
    { jp: "店員はとても親切です。", reading: "てんいんはとてもしんせつです。", de: "Der Verkäufer ist sehr freundlich." }
  ]},
  { id: "v772", word: "電気屋", reading: "でんきや", meaning: "Elektrogeschäft", pos: "Nomen", level: "adv", examples: [
    { jp: "電気屋でテレビを買います。", reading: "でんきやでテレビをかいます。", de: "Ich kaufe im Elektrogeschäft einen Fernseher." },
    { jp: "電気屋は駅前にあります。", reading: "でんきやはえきまえにあります。", de: "Das Elektrogeschäft ist vor dem Bahnhof." }
  ]},
  { id: "v773", word: "電池", reading: "でんち", meaning: "Batterie", pos: "Nomen", level: "adv", examples: [
    { jp: "電池が切れました。", reading: "でんちがきれました。", de: "Die Batterie ist leer." },
    { jp: "新しい電池を入れます。", reading: "あたらしいでんちをいれます。", de: "Ich lege neue Batterien ein." }
  ]},
  { id: "v774", word: "電話番号", reading: "でんわばんごう", meaning: "Telefonnummer", pos: "Nomen", level: "easy", examples: [
    { jp: "電話番号を教えてください。", reading: "でんわばんごうをおしえてください。", de: "Sagen Sie mir bitte Ihre Telefonnummer." },
    { jp: "電話番号を忘れました。", reading: "でんわばんごうをわすれました。", de: "Ich habe die Telefonnummer vergessen." }
  ]},
  { id: "v775", word: "ドイツ", reading: "ドイツ", meaning: "Deutschland", pos: "Nomen", level: "easy", examples: [
    { jp: "私はドイツから来ました。", reading: "わたしはドイツからきました。", de: "Ich komme aus Deutschland." },
    { jp: "ドイツにはお城が多いです。", reading: "ドイツにはおしろがおおいです。", de: "In Deutschland gibt es viele Schlösser." }
  ]},
  { id: "v776", word: "ドイツ語", reading: "ドイツご", meaning: "Deutsch (Sprache)", pos: "Nomen", level: "easy", examples: [
    { jp: "ドイツ語を話します。", reading: "ドイツごをはなします。", de: "Ich spreche Deutsch." },
    { jp: "ドイツ語は難しいですか。", reading: "ドイツごはむずかしいですか。", de: "Ist Deutsch schwierig?" }
  ]},
  { id: "v777", word: "ドイツ人", reading: "ドイツじん", meaning: "Deutsche(r)", pos: "Nomen", level: "adv", examples: [
    { jp: "彼はドイツ人です。", reading: "かれはドイツじんです。", de: "Er ist Deutscher." },
    { jp: "ドイツ人の友達がいます。", reading: "ドイツじんのともだちがいます。", de: "Ich habe einen deutschen Freund." }
  ]},
  { id: "v778", word: "道具", reading: "どうぐ", meaning: "Werkzeug", pos: "Nomen", level: "adv", examples: [
    { jp: "料理の道具を買います。", reading: "りょうりのどうぐをかいます。", de: "Ich kaufe Kochutensilien." },
    { jp: "この道具は便利です。", reading: "このどうぐはべんりです。", de: "Dieses Werkzeug ist praktisch." }
  ]},
  { id: "v779", word: "豆腐", reading: "とうふ", meaning: "Tōfu", pos: "Nomen", level: "adv", examples: [
    { jp: "豆腐は体にいいです。", reading: "とうふはからだにいいです。", de: "Tōfu ist gesund." },
    { jp: "豆腐のスープを作ります。", reading: "とうふのスープをつくります。", de: "Ich mache eine Tōfu-Suppe." }
  ]},
  { id: "v780", word: "どうも", reading: "どうも", meaning: "danke / sehr", pos: "Ausdruck", level: "easy", examples: [
    { jp: "どうもありがとう。", reading: "どうもありがとう。", de: "Vielen Dank." },
    { jp: "どうもすみません。", reading: "どうもすみません。", de: "Tut mir wirklich leid." }
  ]},
  { id: "v781", word: "どうやって", reading: "どうやって", meaning: "wie? / auf welche Weise (Methode)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "駅までどうやって行きますか。", reading: "えきまでどうやっていきますか。", de: "Wie komme ich zum Bahnhof?" },
    { jp: "これはどうやって使いますか。", reading: "これはどうやってつかいますか。", de: "Wie benutzt man das?" }
  ]},
  { id: "v782", word: "通る", reading: "とおる", meaning: "hindurchgehen, passieren", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "この道を通ります。", reading: "このみちをとおります。", de: "Ich gehe diese Straße entlang." },
    { jp: "バスが家の前を通ります。", reading: "バスがいえのまえをとおります。", de: "Der Bus fährt an meinem Haus vorbei." }
  ]},
  { id: "v783", word: "独身", reading: "どくしん", meaning: "ledig, Single", pos: "Nomen", level: "adv", examples: [
    { jp: "兄はまだ独身です。", reading: "あにはまだどくしんです。", de: "Mein Bruder ist noch Single." },
    { jp: "独身の時、よく旅行しました。", reading: "どくしんのとき、よくりょこうしました。", de: "Als Single bin ich viel gereist." }
  ]},
  { id: "v784", word: "どこにも", reading: "どこにも", meaning: "nirgendwo", pos: "Ausdruck", level: "adv", examples: [
    { jp: "どこにもありません。", reading: "どこにもありません。", de: "Es ist nirgendwo." },
    { jp: "週末はどこにも行きませんでした。", reading: "しゅうまつはどこにもいきませんでした。", de: "Am Wochenende bin ich nirgendwohin gegangen." }
  ]},
  { id: "v785", word: "所", reading: "ところ", meaning: "Ort, Stelle", pos: "Nomen", level: "easy", examples: [
    { jp: "静かな所に住みたいです。", reading: "しずかなところにすみたいです。", de: "Ich möchte an einem ruhigen Ort wohnen." },
    { jp: "いい所を教えてください。", reading: "いいところをおしえてください。", de: "Empfehlen Sie mir einen guten Ort." }
  ]},
  { id: "v786", word: "ところで", reading: "ところで", meaning: "übrigens", pos: "Ausdruck", level: "adv", examples: [
    { jp: "ところで、明日は暇ですか。", reading: "ところで、あしたはひまですか。", de: "Übrigens, hast du morgen Zeit?" },
    { jp: "ところで、あの話はどうなりましたか。", reading: "ところで、あのはなしはどうなりましたか。", de: "Übrigens, was ist aus der Sache geworden?" }
  ]},
  { id: "v787", word: "戸棚", reading: "とだな", meaning: "Schrank", pos: "Nomen", level: "adv", examples: [
    { jp: "戸棚に皿を入れます。", reading: "とだなにさらをいれます。", de: "Ich stelle die Teller in den Schrank." },
    { jp: "戸棚の中に薬があります。", reading: "とだなのなかにくすりがあります。", de: "Im Schrank ist Medizin." }
  ]},
  { id: "v788", word: "どちら", reading: "どちら", meaning: "welche(r) / wo (höflich)", pos: "Ausdruck", level: "easy", examples: [
    { jp: "お国はどちらですか。", reading: "おくにはどちらですか。", de: "Aus welchem Land kommen Sie?" },
    { jp: "コーヒーとお茶、どちらがいいですか。", reading: "コーヒーとおちゃ、どちらがいいですか。", de: "Kaffee oder Tee, was möchten Sie?" }
  ]},
  { id: "v789", word: "特急", reading: "とっきゅう", meaning: "Schnellzug, Express", pos: "Nomen", level: "adv", examples: [
    { jp: "特急で京都へ行きます。", reading: "とっきゅうできょうとへいきます。", de: "Ich fahre mit dem Express nach Kyōto." },
    { jp: "特急は速いです。", reading: "とっきゅうははやいです。", de: "Der Express ist schnell." }
  ]},
  { id: "v790", word: "どっち", reading: "どっち", meaning: "welche(r/s) (ugs.)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "どっちが好きですか。", reading: "どっちがすきですか。", de: "Welches magst du?" },
    { jp: "どっちの道が近いですか。", reading: "どっちのみちがちかいですか。", de: "Welcher Weg ist kürzer?" }
  ]},
  { id: "v791", word: "届く", reading: "とどく", meaning: "ankommen (Post, Paket)", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "荷物が届きました。", reading: "にもつがとどきました。", de: "Das Paket ist angekommen." },
    { jp: "手紙はいつ届きますか。", reading: "てがみはいつとどきますか。", de: "Wann kommt der Brief an?" }
  ]},
  { id: "v792", word: "届ける", reading: "とどける", meaning: "liefern, abgeben", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "荷物を家まで届けます。", reading: "にもつをいえまでとどけます。", de: "Ich liefere das Paket bis nach Hause." },
    { jp: "落とし物を交番に届けました。", reading: "おとしものをこうばんにとどけました。", de: "Ich habe den Fund beim Kōban abgegeben." }
  ]},
  { id: "v793", word: "どなた", reading: "どなた", meaning: "wer (höflich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "どなたですか。", reading: "どなたですか。", de: "Wer sind Sie, bitte?" },
    { jp: "この方はどなたですか。", reading: "このかたはどなたですか。", de: "Wer ist diese Person?" }
  ]},
  { id: "v794", word: "隣", reading: "となり", meaning: "Nachbar, daneben", pos: "Nomen", level: "easy", examples: [
    { jp: "隣の部屋は静かです。", reading: "となりのへやはしずかです。", de: "Das Nachbarzimmer ist ruhig." },
    { jp: "隣に座ってもいいですか。", reading: "となりにすわってもいいですか。", de: "Darf ich mich neben Sie setzen?" }
  ]},
  { id: "v795", word: "どのくらい", reading: "どのくらい", meaning: "wie lange / wie viel", pos: "Ausdruck", level: "adv", examples: [
    { jp: "駅までどのくらいかかりますか。", reading: "えきまでどのくらいかかりますか。", de: "Wie lange dauert es zum Bahnhof?" },
    { jp: "日本語をどのくらい勉強しましたか。", reading: "にほんごをどのくらいべんきょうしましたか。", de: "Wie lange haben Sie Japanisch gelernt?" }
  ]},
  { id: "v796", word: "飛ぶ", reading: "とぶ", meaning: "fliegen, springen", pos: "Verb (Godan, ぶ)", level: "adv", examples: [
    { jp: "鳥が空を飛んでいます。", reading: "とりがそらをとんでいます。", de: "Ein Vogel fliegt am Himmel." },
    { jp: "飛行機が飛びます。", reading: "ひこうきがとびます。", de: "Das Flugzeug fliegt." }
  ]},
  { id: "v797", word: "トマト", reading: "トマト", meaning: "Tomate", pos: "Nomen", level: "easy", examples: [
    { jp: "サラダにトマトを入れます。", reading: "サラダにトマトをいれます。", de: "Ich gebe Tomaten in den Salat." },
    { jp: "トマトは赤いです。", reading: "トマトはあかいです。", de: "Tomaten sind rot." }
  ]},
  { id: "v798", word: "止める", reading: "とめる", meaning: "anhalten, parken", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "ここに車を止めます。", reading: "ここにくるまをとめます。", de: "Ich parke hier das Auto." },
    { jp: "音楽を止めてください。", reading: "おんがくをとめてください。", de: "Stellen Sie bitte die Musik ab." }
  ]},
  { id: "v799", word: "ドライブ", reading: "ドライブ", meaning: "Spazierfahrt (mit dem Auto)", pos: "Nomen", level: "adv", examples: [
    { jp: "日曜日に海までドライブします。", reading: "にちようびにうみまでドライブします。", de: "Sonntags fahre ich zum Meer." },
    { jp: "ドライブは気持ちいいです。", reading: "ドライブはきもちいいです。", de: "Autofahren ist angenehm." }
  ]},
  { id: "v800", word: "取りに行く", reading: "とりにいく", meaning: "holen gehen, abholen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "荷物を取りに行きます。", reading: "にもつをとりにいきます。", de: "Ich hole das Paket ab." },
    { jp: "本を図書館に取りに行きました。", reading: "ほんをとしょかんにとりにいきました。", de: "Ich habe das Buch in der Bibliothek abgeholt." }
  ]},
  { id: "v801", word: "とり肉", reading: "とりにく", meaning: "Hühnerfleisch", pos: "Nomen", level: "adv", examples: [
    { jp: "とり肉を買ってきました。", reading: "とりにくをかってきました。", de: "Ich habe Hühnerfleisch gekauft." },
    { jp: "今晩はとり肉の料理です。", reading: "こんばんはとりにくのりょうりです。", de: "Heute Abend gibt es Hühnchen." }
  ]},
  { id: "v802", word: "取る", reading: "とる", meaning: "nehmen, greifen", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "塩を取ってください。", reading: "しおをとってください。", de: "Reichen Sie mir bitte das Salz." },
    { jp: "棚から本を取ります。", reading: "たなからほんをとります。", de: "Ich nehme ein Buch aus dem Regal." }
  ]},
  { id: "v803", word: "トレーニング", reading: "トレーニング", meaning: "Training", pos: "Nomen", level: "adv", examples: [
    { jp: "毎朝トレーニングをします。", reading: "まいあさトレーニングをします。", de: "Jeden Morgen trainiere ich." },
    { jp: "試合の前にトレーニングします。", reading: "しあいのまえにトレーニングします。", de: "Vor dem Spiel trainiere ich." }
  ]},
  { id: "v804", word: "どんな", reading: "どんな", meaning: "was für ein, welche Art von", pos: "Ausdruck", level: "easy", examples: [
    { jp: "どんな音楽が好きですか。", reading: "どんなおんがくがすきですか。", de: "Welche Musik magst du?" },
    { jp: "どんな人ですか。", reading: "どんなひとですか。", de: "Was für ein Mensch ist er?" }
  ]},
  { id: "v805", word: "直す", reading: "なおす", meaning: "reparieren, korrigieren", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "時計を直します。", reading: "とけいをなおします。", de: "Ich repariere die Uhr." },
    { jp: "間違いを直してください。", reading: "まちがいをなおしてください。", de: "Korrigieren Sie bitte die Fehler." }
  ]},
  { id: "v806", word: "直る", reading: "なおる", meaning: "repariert / gesund werden", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "テレビが直りました。", reading: "テレビがなおりました。", de: "Der Fernseher ist wieder heil." },
    { jp: "風邪が早く直るといいですね。", reading: "かぜがはやくなおるといいですね。", de: "Hoffentlich wird die Erkältung schnell besser." }
  ]},
  { id: "v807", word: "中身", reading: "なかみ", meaning: "Inhalt", pos: "Nomen", level: "adv", examples: [
    { jp: "箱の中身は何ですか。", reading: "はこのなかみはなんですか。", de: "Was ist im Karton?" },
    { jp: "かばんの中身を見せてください。", reading: "かばんのなかみをみせてください。", de: "Zeigen Sie mir bitte den Inhalt der Tasche." }
  ]},
  { id: "v808", word: "ながめ", reading: "ながめ", meaning: "Aussicht", pos: "Nomen", level: "adv", examples: [
    { jp: "この部屋はながめがいいです。", reading: "このへやはながめがいいです。", de: "Dieses Zimmer hat eine gute Aussicht." },
    { jp: "山からのながめはすばらしいです。", reading: "やまからのながめはすばらしいです。", de: "Die Aussicht vom Berg ist großartig." }
  ]},
  { id: "v809", word: "習う", reading: "ならう", meaning: "lernen (unter Anleitung)", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "ピアノを習っています。", reading: "ピアノをならっています。", de: "Ich lerne Klavier." },
    { jp: "先生に日本語を習いました。", reading: "せんせいににほんごをならいました。", de: "Ich habe bei einem Lehrer Japanisch gelernt." }
  ]},
  { id: "v810", word: "なるほど", reading: "なるほど", meaning: "ich verstehe, aha", pos: "Ausdruck", level: "adv", examples: [
    { jp: "なるほど、わかりました。", reading: "なるほど、わかりました。", de: "Aha, jetzt verstehe ich." },
    { jp: "なるほど、それはいい考えですね。", reading: "なるほど、それはいいかんがえですね。", de: "Verstehe, das ist eine gute Idee." }
  ]},
  { id: "v811", word: "何度も", reading: "なんども", meaning: "mehrmals, oftmals", pos: "Adverb", level: "adv", examples: [
    { jp: "何度も練習しました。", reading: "なんどもれんしゅうしました。", de: "Ich habe mehrmals geübt." },
    { jp: "何度も電話しましたが、出ませんでした。", reading: "なんどもでんわしましたが、でませんでした。", de: "Ich habe oft angerufen, aber niemand ging ran." }
  ]},
  { id: "v813", word: "肉屋", reading: "にくや", meaning: "Metzger, Fleischerei", pos: "Nomen", level: "adv", examples: [
    { jp: "肉屋で牛肉を買います。", reading: "にくやでぎゅうにくをかいます。", de: "Ich kaufe Rindfleisch beim Metzger." },
    { jp: "肉屋は商店街にあります。", reading: "にくやはしょうてんがいにあります。", de: "Die Fleischerei ist in der Einkaufsstraße." }
  ]},
  { id: "v814", word: "日", reading: "にち", meaning: "Tag", pos: "Nomen", level: "adv", examples: [
    { jp: "三日から五日まで休みます。", reading: "みっかからいつかまでやすみます。", de: "Vom dritten bis fünften habe ich frei." },
    { jp: "その日は都合が悪いです。", reading: "そのひはつごうがわるいです。", de: "An dem Tag passt es mir nicht." }
  ]},
  { id: "v815", word: "日本", reading: "にほん", meaning: "Japan", pos: "Nomen", level: "easy", examples: [
    { jp: "日本に住んでいます。", reading: "にほんにすんでいます。", de: "Ich wohne in Japan." },
    { jp: "日本の食べ物が好きです。", reading: "にほんのたべものがすきです。", de: "Ich mag japanisches Essen." }
  ]},
  { id: "v816", word: "日本語", reading: "にほんご", meaning: "Japanisch (Sprache)", pos: "Nomen", level: "easy", examples: [
    { jp: "日本語を勉強しています。", reading: "にほんごをべんきょうしています。", de: "Ich lerne Japanisch." },
    { jp: "日本語で話しましょう。", reading: "にほんごではなしましょう。", de: "Lass uns auf Japanisch sprechen." }
  ]},
  { id: "v817", word: "日本人", reading: "にほんじん", meaning: "Japaner(in)", pos: "Nomen", level: "easy", examples: [
    { jp: "彼女は日本人です。", reading: "かのじょはにほんじんです。", de: "Sie ist Japanerin." },
    { jp: "日本人の友達がたくさんいます。", reading: "にほんじんのともだちがたくさんいます。", de: "Ich habe viele japanische Freunde." }
  ]},
  { id: "v818", word: "荷物", reading: "にもつ", meaning: "Gepäck, Paket", pos: "Nomen", level: "adv", examples: [
    { jp: "荷物が重いです。", reading: "にもつがおもいです。", de: "Das Gepäck ist schwer." },
    { jp: "荷物を部屋まで運びます。", reading: "にもつをへやまではこびます。", de: "Ich trage das Gepäck bis ins Zimmer." }
  ]},
  { id: "v819", word: "ニュース", reading: "ニュース", meaning: "Nachrichten", pos: "Nomen", level: "easy", examples: [
    { jp: "朝、ニュースを見ます。", reading: "あさ、ニュースをみます。", de: "Morgens schaue ich Nachrichten." },
    { jp: "そのニュースを聞きました。", reading: "そのニュースをききました。", de: "Ich habe die Nachricht gehört." }
  ]},
  { id: "v820", word: "ネクタイ", reading: "ネクタイ", meaning: "Krawatte", pos: "Nomen", level: "adv", examples: [
    { jp: "青いネクタイをします。", reading: "あおいネクタイをします。", de: "Ich trage eine blaue Krawatte." },
    { jp: "父にネクタイをあげました。", reading: "ちちにネクタイをあげました。", de: "Ich habe meinem Vater eine Krawatte geschenkt." }
  ]},
  { id: "v821", word: "熱", reading: "ねつ", meaning: "Fieber", pos: "Nomen", level: "adv", examples: [
    { jp: "熱があります。", reading: "ねつがあります。", de: "Ich habe Fieber." },
    { jp: "熱が下がりました。", reading: "ねつがさがりました。", de: "Das Fieber ist gesunken." }
  ]},
  { id: "v822", word: "年", reading: "ねん", meaning: "Jahr", pos: "Nomen", level: "adv", examples: [
    { jp: "今年は二千二十六年です。", reading: "ことしはにせんにじゅうろくねんです。", de: "Dieses Jahr ist 2026." },
    { jp: "一年に一度日本へ行きます。", reading: "いちねんにいちどにほんへいきます。", de: "Einmal im Jahr fahre ich nach Japan." }
  ]},
  { id: "v823", word: "のど", reading: "のど", meaning: "Hals, Kehle", pos: "Nomen", level: "adv", examples: [
    { jp: "のどが痛いです。", reading: "のどがいたいです。", de: "Mein Hals tut weh." },
    { jp: "のどがかわきました。", reading: "のどがかわきました。", de: "Ich habe Durst." }
  ]},
  { id: "v824", word: "乗り換える", reading: "のりかえる", meaning: "umsteigen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "東京駅で乗り換えます。", reading: "とうきょうえきでのりかえます。", de: "Ich steige am Bahnhof Tōkyō um." },
    { jp: "次の駅でバスに乗り換えます。", reading: "つぎのえきでバスにのりかえます。", de: "An der nächsten Station steige ich in den Bus um." }
  ]},
  { id: "v825", word: "乗り場", reading: "のりば", meaning: "Haltestelle, Einstiegsstelle", pos: "Nomen", level: "adv", examples: [
    { jp: "バスの乗り場はどこですか。", reading: "バスののりばはどこですか。", de: "Wo ist die Bushaltestelle?" },
    { jp: "タクシー乗り場で待ちます。", reading: "タクシーのりばでまちます。", de: "Ich warte am Taxistand." }
  ]},
  { id: "v826", word: "歯", reading: "は", meaning: "Zahn", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日歯をみがきます。", reading: "まいにちはをみがきます。", de: "Ich putze mir jeden Tag die Zähne." },
    { jp: "歯が痛いです。", reading: "はがいたいです。", de: "Mir tut ein Zahn weh." }
  ]},
  { id: "v827", word: "バー", reading: "バー", meaning: "Bar", pos: "Nomen", level: "adv", examples: [
    { jp: "友達とバーに行きます。", reading: "ともだちとバーにいきます。", de: "Ich gehe mit Freunden in eine Bar." },
    { jp: "このバーは静かです。", reading: "このバーはしずかです。", de: "Diese Bar ist ruhig." }
  ]},
  { id: "v828", word: "パーティー", reading: "パーティー", meaning: "Party, Feier", pos: "Nomen", level: "easy", examples: [
    { jp: "土曜日にパーティーがあります。", reading: "どようびにパーティーがあります。", de: "Am Samstag ist eine Party." },
    { jp: "パーティーに友達を招待します。", reading: "パーティーにともだちをしょうたいします。", de: "Ich lade Freunde zur Party ein." }
  ]},
  { id: "v829", word: "バーベキュー", reading: "バーベキュー", meaning: "Grillen, Barbecue", pos: "Nomen", level: "adv", examples: [
    { jp: "夏に公園でバーベキューをします。", reading: "なつにこうえんでバーベキューをします。", de: "Im Sommer grillen wir im Park." },
    { jp: "バーベキューは楽しいです。", reading: "バーベキューはたのしいです。", de: "Grillen macht Spaß." }
  ]},
  { id: "v830", word: "ハイキング", reading: "ハイキング", meaning: "Wanderung", pos: "Nomen", level: "adv", examples: [
    { jp: "日曜日に山へハイキングに行きます。", reading: "にちようびにやまへハイキングにいきます。", de: "Sonntags gehe ich in den Bergen wandern." },
    { jp: "ハイキングは気持ちがいいです。", reading: "ハイキングはきもちがいいです。", de: "Wandern tut gut." }
  ]},
  { id: "v831", word: "バイク", reading: "バイク", meaning: "Motorrad", pos: "Nomen", level: "adv", examples: [
    { jp: "バイクで会社に行きます。", reading: "バイクでかいしゃにいきます。", de: "Ich fahre mit dem Motorrad zur Arbeit." },
    { jp: "新しいバイクがほしいです。", reading: "あたらしいバイクがほしいです。", de: "Ich hätte gern ein neues Motorrad." }
  ]},
  { id: "v832", word: "灰皿", reading: "はいざら", meaning: "Aschenbecher", pos: "Nomen", level: "adv", examples: [
    { jp: "灰皿はありますか。", reading: "はいざらはありますか。", de: "Gibt es einen Aschenbecher?" },
    { jp: "テーブルに灰皿を置きます。", reading: "テーブルにはいざらをおきます。", de: "Ich stelle einen Aschenbecher auf den Tisch." }
  ]},
  { id: "v833", word: "はがき", reading: "はがき", meaning: "Postkarte", pos: "Nomen", level: "adv", examples: [
    { jp: "旅行先からはがきを送ります。", reading: "りょこうさきからはがきをおくります。", de: "Vom Reiseziel schicke ich eine Postkarte." },
    { jp: "はがきを一枚ください。", reading: "はがきをいちまいください。", de: "Bitte eine Postkarte." }
  ]},
  { id: "v834", word: "箱", reading: "はこ", meaning: "Kiste, Schachtel", pos: "Nomen", level: "easy", examples: [
    { jp: "箱にプレゼントを入れます。", reading: "はこにプレゼントをいれます。", de: "Ich lege das Geschenk in die Schachtel." },
    { jp: "この箱は重いです。", reading: "このはこはおもいです。", de: "Diese Kiste ist schwer." }
  ]},
  { id: "v835", word: "運ぶ", reading: "はこぶ", meaning: "tragen, befördern", pos: "Verb (Godan, ぶ)", level: "adv", examples: [
    { jp: "荷物を二階に運びます。", reading: "にもつをにかいにはこびます。", de: "Ich trage das Gepäck in den ersten Stock." },
    { jp: "みんなでいすを運びました。", reading: "みんなでいすをはこびました。", de: "Wir haben zusammen die Stühle getragen." }
  ]},
  { id: "v836", word: "始まる", reading: "はじまる", meaning: "anfangen (intransitiv)", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "映画は七時に始まります。", reading: "えいがはしちじにはじまります。", de: "Der Film beginnt um sieben." },
    { jp: "授業が始まりました。", reading: "じゅぎょうがはじまりました。", de: "Der Unterricht hat begonnen." }
  ]},
  { id: "v837", word: "バス乗り場", reading: "バスのりば", meaning: "Bushaltestelle", pos: "Nomen", level: "adv", examples: [
    { jp: "バス乗り場は駅の前です。", reading: "バスのりばはえきのまえです。", de: "Die Bushaltestelle ist vor dem Bahnhof." },
    { jp: "バス乗り場で並びます。", reading: "バスのりばでならびます。", de: "Ich stelle mich an der Bushaltestelle an." }
  ]},
  { id: "v838", word: "パスポート", reading: "パスポート", meaning: "Reisepass", pos: "Nomen", level: "easy", examples: [
    { jp: "パスポートを見せてください。", reading: "パスポートをみせてください。", de: "Zeigen Sie bitte Ihren Reisepass." },
    { jp: "パスポートを忘れました。", reading: "パスポートをわすれました。", de: "Ich habe meinen Reisepass vergessen." }
  ]},
  { id: "v839", word: "パソコン", reading: "パソコン", meaning: "PC, Computer", pos: "Nomen", level: "easy", examples: [
    { jp: "パソコンでメールを書きます。", reading: "パソコンでメールをかきます。", de: "Ich schreibe E-Mails am Computer." },
    { jp: "新しいパソコンを買いました。", reading: "あたらしいパソコンをかいました。", de: "Ich habe einen neuen Computer gekauft." }
  ]},
  { id: "v840", word: "花束", reading: "はなたば", meaning: "Blumenstrauß", pos: "Nomen", level: "adv", examples: [
    { jp: "母に花束をあげます。", reading: "ははにはなたばをあげます。", de: "Ich schenke meiner Mutter einen Blumenstrauß." },
    { jp: "きれいな花束ですね。", reading: "きれいなはなたばですね。", de: "Was für ein schöner Strauß." }
  ]},
  { id: "v841", word: "花屋", reading: "はなや", meaning: "Blumenladen", pos: "Nomen", level: "adv", examples: [
    { jp: "花屋で花を買います。", reading: "はなやではなをかいます。", de: "Ich kaufe Blumen im Blumenladen." },
    { jp: "花屋は駅の近くにあります。", reading: "はなやはえきのちかくにあります。", de: "Der Blumenladen ist beim Bahnhof." }
  ]},
  { id: "v842", word: "母", reading: "はは", meaning: "Mutter (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "母は料理が上手です。", reading: "はははりょうりがじょうずです。", de: "Meine Mutter kocht gut." },
    { jp: "母に電話します。", reading: "ははにでんわします。", de: "Ich rufe meine Mutter an." }
  ]},
  { id: "v843", word: "早めに", reading: "はやめに", meaning: "frühzeitig, rechtzeitig", pos: "Adverb", level: "adv", examples: [
    { jp: "早めに家を出ます。", reading: "はやめにいえをでます。", de: "Ich gehe frühzeitig aus dem Haus." },
    { jp: "早めに寝てください。", reading: "はやめにねてください。", de: "Gehen Sie bitte früh schlafen." }
  ]},
  { id: "v844", word: "払う", reading: "はらう", meaning: "bezahlen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "お金を払います。", reading: "おかねをはらいます。", de: "Ich bezahle das Geld." },
    { jp: "カードで払ってもいいですか。", reading: "カードではらってもいいですか。", de: "Kann ich mit Karte zahlen?" }
  ]},
  { id: "v845", word: "晩", reading: "ばん", meaning: "Abend", pos: "Nomen", level: "adv", examples: [
    { jp: "今晩は家にいます。", reading: "こんばんはいえにいます。", de: "Heute Abend bin ich zu Hause." },
    { jp: "晩に散歩します。", reading: "ばんにさんぽします。", de: "Abends gehe ich spazieren." }
  ]},
  { id: "v846", word: "はんこ", reading: "はんこ", meaning: "Stempel, Siegel", pos: "Nomen", level: "adv", examples: [
    { jp: "ここにはんこを押してください。", reading: "ここにはんこをおしてください。", de: "Bitte hier den Stempel abdrücken." },
    { jp: "日本ではよくはんこを使います。", reading: "にほんではよくはんこをつかいます。", de: "In Japan benutzt man oft einen Stempel." }
  ]},
  { id: "v847", word: "晩ごはん", reading: "ばんごはん", meaning: "Abendessen", pos: "Nomen", level: "easy", examples: [
    { jp: "七時に晩ごはんを食べます。", reading: "しちじにばんごはんをたべます。", de: "Um sieben esse ich Abendbrot." },
    { jp: "今日の晩ごはんは魚です。", reading: "きょうのばんごはんはさかなです。", de: "Heute gibt es Fisch zum Abendessen." }
  ]},
  { id: "v848", word: "ハンサムな", reading: "ハンサムな", meaning: "gut aussehend", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "ハンサムな人ですね。", reading: "ハンサムなひとですね。", de: "Er sieht gut aus." },
    { jp: "彼はとてもハンサムです。", reading: "かれはとてもハンサムです。", de: "Er ist sehr gut aussehend." }
  ]},
  { id: "v849", word: "ハンバーグ", reading: "ハンバーグ", meaning: "Hamburger (Frikadelle)", pos: "Nomen", level: "adv", examples: [
    { jp: "晩ごはんにハンバーグを作ります。", reading: "ばんごはんにハンバーグをつくります。", de: "Zum Abendessen mache ich Frikadellen." },
    { jp: "子供はハンバーグが好きです。", reading: "こどもはハンバーグがすきです。", de: "Kinder mögen Frikadellen." }
  ]},
  { id: "v850", word: "パン屋", reading: "パンや", meaning: "Bäckerei", pos: "Nomen", level: "easy", examples: [
    { jp: "パン屋でパンを買います。", reading: "パンやでパンをかいます。", de: "Ich kaufe Brot in der Bäckerei." },
    { jp: "いいにおいのパン屋です。", reading: "いいにおいのパンやです。", de: "Eine Bäckerei, die gut riecht." }
  ]},
  { id: "v851", word: "ひ", reading: "ひ", meaning: "Tag / Sonne", pos: "Nomen", level: "adv", examples: [
    { jp: "いい天気の日は公園へ行きます。", reading: "いいてんきのひはこうえんへいきます。", de: "An schönen Tagen gehe ich in den Park." },
    { jp: "その日は忙しかったです。", reading: "そのひはいそがしかったです。", de: "An dem Tag war ich beschäftigt." }
  ]},
  { id: "v852", word: "ピアニスト", reading: "ピアニスト", meaning: "Pianist(in)", pos: "Nomen", level: "adv", examples: [
    { jp: "姉はピアニストです。", reading: "あねはピアニストです。", de: "Meine Schwester ist Pianistin." },
    { jp: "有名なピアニストのコンサートに行きました。", reading: "ゆうめいなピアニストのコンサートにいきました。", de: "Ich war im Konzert eines berühmten Pianisten." }
  ]},
  { id: "v853", word: "ビーチ", reading: "ビーチ", meaning: "Strand", pos: "Nomen", level: "adv", examples: [
    { jp: "夏にビーチで泳ぎます。", reading: "なつにビーチでおよぎます。", de: "Im Sommer schwimme ich am Strand." },
    { jp: "ビーチは人が多いです。", reading: "ビーチはひとがおおいです。", de: "Am Strand sind viele Leute." }
  ]},
  { id: "v854", word: "東", reading: "ひがし", meaning: "Osten", pos: "Nomen", level: "easy", examples: [
    { jp: "太陽は東から出ます。", reading: "たいようはひがしからでます。", de: "Die Sonne geht im Osten auf." },
    { jp: "東の出口で会いましょう。", reading: "ひがしのでぐちであいましょう。", de: "Treffen wir uns am Ostausgang." }
  ]},
  { id: "v855", word: "低い", reading: "ひくい", meaning: "niedrig, tief", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "この机は低いです。", reading: "このつくえはひくいです。", de: "Dieser Tisch ist niedrig." },
    { jp: "彼は背が低いです。", reading: "かれはせがひくいです。", de: "Er ist klein." }
  ]},
  { id: "v856", word: "飛行士", reading: "ひこうし", meaning: "Pilot", pos: "Nomen", level: "adv", examples: [
    { jp: "彼は飛行士になりたいです。", reading: "かれはひこうしになりたいです。", de: "Er möchte Pilot werden." },
    { jp: "飛行士は忙しい仕事です。", reading: "ひこうしはいそがしいしごとです。", de: "Pilot ist ein anstrengender Beruf." }
  ]},
  { id: "v857", word: "ピザ", reading: "ピザ", meaning: "Pizza", pos: "Nomen", level: "easy", examples: [
    { jp: "ピザを注文します。", reading: "ピザをちゅうもんします。", de: "Ich bestelle eine Pizza." },
    { jp: "ピザが大好きです。", reading: "ピザがだいすきです。", de: "Ich liebe Pizza." }
  ]},
  { id: "v858", word: "ビザ", reading: "ビザ", meaning: "Visum", pos: "Nomen", level: "adv", examples: [
    { jp: "日本のビザが必要です。", reading: "にほんのビザがひつようです。", de: "Ich brauche ein Visum für Japan." },
    { jp: "ビザを申し込みました。", reading: "ビザをもうしこみました。", de: "Ich habe ein Visum beantragt." }
  ]},
  { id: "v859", word: "美術館", reading: "びじゅつかん", meaning: "Kunstmuseum", pos: "Nomen", level: "adv", examples: [
    { jp: "美術館で絵を見ます。", reading: "びじゅつかんでえをみます。", de: "Im Museum betrachte ich Bilder." },
    { jp: "この美術館は有名です。", reading: "このびじゅつかんはゆうめいです。", de: "Dieses Museum ist berühmt." }
  ]},
  { id: "v860", word: "秘書", reading: "ひしょ", meaning: "Sekretär(in)", pos: "Nomen", level: "adv", examples: [
    { jp: "彼女は社長の秘書です。", reading: "かのじょはしゃちょうのひしょです。", de: "Sie ist die Sekretärin des Chefs." },
    { jp: "秘書に予定を聞きます。", reading: "ひしょによていをききます。", de: "Ich frage die Sekretärin nach dem Termin." }
  ]},
  { id: "v861", word: "左", reading: "ひだり", meaning: "links", pos: "Nomen", level: "easy", examples: [
    { jp: "次の角を左に曲がります。", reading: "つぎのかどをひだりにまがります。", de: "An der nächsten Ecke biege ich links ab." },
    { jp: "左の手を上げてください。", reading: "ひだりのてをあげてください。", de: "Heben Sie bitte die linke Hand." }
  ]},
  { id: "v862", word: "左側", reading: "ひだりがわ", meaning: "linke Seite", pos: "Nomen", level: "adv", examples: [
    { jp: "左側に銀行があります。", reading: "ひだりがわにぎんこうがあります。", de: "Auf der linken Seite ist eine Bank." },
    { jp: "道の左側を歩きます。", reading: "みちのひだりがわをあるきます。", de: "Ich gehe auf der linken Straßenseite." }
  ]},
  { id: "v863", word: "引っ越す", reading: "ひっこす", meaning: "umziehen", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "来月、東京に引っ越します。", reading: "らいげつ、とうきょうにひっこします。", de: "Nächsten Monat ziehe ich nach Tōkyō." },
    { jp: "新しい家に引っ越しました。", reading: "あたらしいいえにひっこしました。", de: "Ich bin in ein neues Haus gezogen." }
  ]},
  { id: "v864", word: "必要な", reading: "ひつような", meaning: "notwendig, nötig", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "必要な物を買います。", reading: "ひつようなものをかいます。", de: "Ich kaufe die nötigen Dinge." },
    { jp: "パスポートが必要です。", reading: "パスポートがひつようです。", de: "Ein Reisepass ist erforderlich." }
  ]},
  { id: "v865", word: "ビデオ", reading: "ビデオ", meaning: "Video", pos: "Nomen", level: "adv", examples: [
    { jp: "ビデオを見ます。", reading: "ビデオをみます。", de: "Ich schaue ein Video." },
    { jp: "旅行のビデオをとりました。", reading: "りょこうのビデオをとりました。", de: "Ich habe ein Reisevideo gedreht." }
  ]},
  { id: "v866", word: "人", reading: "ひと", meaning: "Mensch, Person", pos: "Nomen", level: "easy", examples: [
    { jp: "あの人は誰ですか。", reading: "あのひとはだれですか。", de: "Wer ist die Person dort?" },
    { jp: "やさしい人ですね。", reading: "やさしいひとですね。", de: "Was für ein netter Mensch." }
  ]},
  { id: "v867", word: "一人", reading: "ひとり", meaning: "eine Person / allein", pos: "Nomen", level: "easy", examples: [
    { jp: "一人で住んでいます。", reading: "ひとりですんでいます。", de: "Ich wohne allein." },
    { jp: "一人で行っても大丈夫です。", reading: "ひとりでいってもだいじょうぶです。", de: "Ich kann auch allein gehen." },
    { jp: "教室に学生が一人います。", reading: "きょうしつにがくせいがひとりいます。", de: "Im Klassenzimmer ist ein Schüler." }
  ]},
  { id: "v868", word: "一人で", reading: "ひとりで", meaning: "allein, selbständig", pos: "Adverb", level: "adv", examples: [
    { jp: "一人で旅行します。", reading: "ひとりでりょこうします。", de: "Ich reise allein." },
    { jp: "一人で全部しました。", reading: "ひとりでぜんぶしました。", de: "Ich habe alles allein gemacht." }
  ]},
  { id: "v869", word: "暇な", reading: "ひまな", meaning: "frei (Zeit habend)", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "今日は暇です。", reading: "きょうはひまです。", de: "Heute habe ich Zeit." },
    { jp: "暇な時に本を読みます。", reading: "ひまなときにほんをよみます。", de: "In der Freizeit lese ich." }
  ]},
  { id: "v870", word: "ひらがな", reading: "ひらがな", meaning: "Hiragana", pos: "Nomen", level: "easy", examples: [
    { jp: "ひらがなを覚えました。", reading: "ひらがなをおぼえました。", de: "Ich habe Hiragana gelernt." },
    { jp: "名前をひらがなで書きます。", reading: "なまえをひらがなでかきます。", de: "Ich schreibe den Namen in Hiragana." }
  ]},
  { id: "v871", word: "開く", reading: "ひらく", meaning: "öffnen, aufgehen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "本を開いてください。", reading: "ほんをひらいてください。", de: "Öffnen Sie bitte das Buch." },
    { jp: "店は十時に開きます。", reading: "みせはじゅうじにひらきます。", de: "Der Laden öffnet um zehn." }
  ]},
  { id: "v872", word: "ビル", reading: "ビル", meaning: "Gebäude, Hochhaus", pos: "Nomen", level: "adv", examples: [
    { jp: "高いビルが多いです。", reading: "たかいビルがおおいです。", de: "Es gibt viele hohe Gebäude." },
    { jp: "あのビルは銀行です。", reading: "あのビルはぎんこうです。", de: "Das Gebäude dort ist eine Bank." }
  ]},
  { id: "v873", word: "昼ごはん", reading: "ひるごはん", meaning: "Mittagessen (umgangssprachlich)", pos: "Nomen", level: "easy", examples: [
    { jp: "友達と昼ごはんを食べます。", reading: "ともだちとひるごはんをたべます。", de: "Ich esse mit einem Freund zu Mittag." },
    { jp: "昼ごはんはうどんでした。", reading: "ひるごはんはうどんでした。", de: "Zu Mittag gab es Udon." }
  ]},
  { id: "v874", word: "昼休み", reading: "ひるやすみ", meaning: "Mittagspause", pos: "Nomen", level: "adv", examples: [
    { jp: "昼休みは一時間です。", reading: "ひるやすみはいちじかんです。", de: "Die Mittagspause dauert eine Stunde." },
    { jp: "昼休みに散歩します。", reading: "ひるやすみにさんぽします。", de: "In der Mittagspause gehe ich spazieren." }
  ]},
  { id: "v875", word: "拾う", reading: "ひろう", meaning: "aufheben, auflesen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "道でお金を拾いました。", reading: "みちでおかねをひろいました。", de: "Ich habe auf der Straße Geld gefunden." },
    { jp: "ごみを拾ってください。", reading: "ごみをひろってください。", de: "Heben Sie bitte den Müll auf." }
  ]},
  { id: "v876", word: "貧乏な", reading: "びんぼうな", meaning: "arm", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "昔は貧乏でした。", reading: "むかしはびんぼうでした。", de: "Früher war ich arm." },
    { jp: "貧乏な学生でした。", reading: "びんぼうながくせいでした。", de: "Ich war ein armer Student." }
  ]},
  { id: "v877", word: "ファックス", reading: "ファックス", meaning: "Fax", pos: "Nomen", level: "adv", examples: [
    { jp: "書類をファックスで送ります。", reading: "しょるいをファックスでおくります。", de: "Ich schicke die Unterlagen per Fax." },
    { jp: "ファックスが届きました。", reading: "ファックスがとどきました。", de: "Ein Fax ist angekommen." }
  ]},
  { id: "v878", word: "夫婦", reading: "ふうふ", meaning: "Ehepaar", pos: "Nomen", level: "adv", examples: [
    { jp: "あの二人は夫婦です。", reading: "あのふたりはふうふです。", de: "Die beiden sind ein Ehepaar." },
    { jp: "夫婦で旅行します。", reading: "ふうふでりょこうします。", de: "Wir verreisen als Ehepaar." }
  ]},
  { id: "v879", word: "プール", reading: "プール", meaning: "Schwimmbad, Pool", pos: "Nomen", level: "easy", examples: [
    { jp: "夏にプールで泳ぎます。", reading: "なつにプールでおよぎます。", de: "Im Sommer schwimme ich im Pool." },
    { jp: "学校にプールがあります。", reading: "がっこうにプールがあります。", de: "Die Schule hat ein Schwimmbad." }
  ]},
  { id: "v880", word: "増える", reading: "ふえる", meaning: "zunehmen, mehr werden", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "外国人の観光客が増えました。", reading: "がいこくじんのかんこうきゃくがふえました。", de: "Die Zahl ausländischer Touristen ist gestiegen." },
    { jp: "仕事が増えて忙しいです。", reading: "しごとがふえていそがしいです。", de: "Es ist mehr Arbeit geworden, ich bin beschäftigt." }
  ]},
  { id: "v881", word: "複雑な", reading: "ふくざつな", meaning: "kompliziert", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "この問題は複雑です。", reading: "このもんだいはふくざつです。", de: "Dieses Problem ist kompliziert." },
    { jp: "複雑な気持ちです。", reading: "ふくざつなきもちです。", de: "Ich habe gemischte Gefühle." }
  ]},
  { id: "v882", word: "袋", reading: "ふくろ", meaning: "Tüte, Beutel", pos: "Nomen", level: "adv", examples: [
    { jp: "袋をください。", reading: "ふくろをください。", de: "Eine Tüte bitte." },
    { jp: "袋に果物を入れます。", reading: "ふくろにくだものをいれます。", de: "Ich lege Obst in die Tüte." }
  ]},
  { id: "v883", word: "婦人", reading: "ふじん", meaning: "Frau, Dame", pos: "Nomen", level: "adv", examples: [
    { jp: "婦人服の売り場は三階です。", reading: "ふじんふくのうりばはさんがいです。", de: "Die Damenabteilung ist im dritten Stock." },
    { jp: "上品な婦人です。", reading: "じょうひんなふじんです。", de: "Eine vornehme Dame." }
  ]},
  { id: "v884", word: "二人", reading: "ふたり", meaning: "zwei Personen", pos: "Nomen", level: "easy", examples: [
    { jp: "二人で映画を見ます。", reading: "ふたりでえいがをみます。", de: "Wir sehen zu zweit einen Film." },
    { jp: "子供が二人います。", reading: "こどもがふたりいます。", de: "Ich habe zwei Kinder." }
  ]},
  { id: "v886", word: "踏む", reading: "ふむ", meaning: "treten (auf etwas)", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "足を踏まないでください。", reading: "あしをふまないでください。", de: "Treten Sie mir bitte nicht auf den Fuß." },
    { jp: "ブレーキを踏みます。", reading: "ブレーキをふみます。", de: "Ich trete auf die Bremse." }
  ]},
  { id: "v887", word: "フランス語", reading: "フランスご", meaning: "Französisch", pos: "Nomen", level: "adv", examples: [
    { jp: "フランス語を少し話せます。", reading: "フランスごをすこしはなせます。", de: "Ich kann etwas Französisch." },
    { jp: "フランス語は難しいです。", reading: "フランスごはむずかしいです。", de: "Französisch ist schwierig." }
  ]},
  { id: "v888", word: "降る", reading: "ふる", meaning: "(Regen, Schnee) fallen", pos: "Verb (Godan, る)*", level: "easy", examples: [
    { jp: "雨が降っています。", reading: "あめがふっています。", de: "Es regnet." },
    { jp: "明日は雪が降ります。", reading: "あしたはゆきがふります。", de: "Morgen schneit es." }
  ]},
  { id: "v889", word: "フルーツ", reading: "フルーツ", meaning: "Obst, Früchte", pos: "Nomen", level: "easy", examples: [
    { jp: "朝にフルーツを食べます。", reading: "あさにフルーツをたべます。", de: "Morgens esse ich Obst." },
    { jp: "フルーツジュースが好きです。", reading: "フルーツジュースがすきです。", de: "Ich mag Fruchtsaft." }
  ]},
  { id: "v890", word: "プレゼント", reading: "プレゼント", meaning: "Geschenk", pos: "Nomen", level: "easy", examples: [
    { jp: "友達にプレゼントをあげます。", reading: "ともだちにプレゼントをあげます。", de: "Ich schenke meinem Freund etwas." },
    { jp: "誕生日のプレゼントをもらいました。", reading: "たんじょうびのプレゼントをもらいました。", de: "Ich habe ein Geburtstagsgeschenk bekommen." }
  ]},
  { id: "v891", word: "プロジェクト", reading: "プロジェクト", meaning: "Projekt", pos: "Nomen", level: "adv", examples: [
    { jp: "新しいプロジェクトが始まりました。", reading: "あたらしいプロジェクトがはじまりました。", de: "Ein neues Projekt hat begonnen." },
    { jp: "このプロジェクトは大切です。", reading: "このプロジェクトはたいせつです。", de: "Dieses Projekt ist wichtig." }
  ]},
  { id: "v892", word: "風呂場", reading: "ふろば", meaning: "Badezimmer", pos: "Nomen", level: "adv", examples: [
    { jp: "風呂場でシャワーを浴びます。", reading: "ふろばでシャワーをあびます。", de: "Ich dusche im Badezimmer." },
    { jp: "風呂場を掃除します。", reading: "ふろばをそうじします。", de: "Ich putze das Badezimmer." }
  ]},
  { id: "v893", word: "フロント", reading: "フロント", meaning: "Rezeption (Hotel)", pos: "Nomen", level: "adv", examples: [
    { jp: "フロントでかぎをもらいます。", reading: "フロントでかぎをもらいます。", de: "Ich hole den Schlüssel an der Rezeption." },
    { jp: "フロントに電話してください。", reading: "フロントにでんわしてください。", de: "Rufen Sie bitte die Rezeption an." }
  ]},
  { id: "v894", word: "文化", reading: "ぶんか", meaning: "Kultur", pos: "Nomen", level: "adv", examples: [
    { jp: "日本の文化に興味があります。", reading: "にほんのぶんかにきょうみがあります。", de: "Ich interessiere mich für japanische Kultur." },
    { jp: "国によって文化が違います。", reading: "くにによってぶんかがちがいます。", de: "Je nach Land ist die Kultur anders." }
  ]},
  { id: "v896", word: "ペット", reading: "ペット", meaning: "Haustier", pos: "Nomen", level: "adv", examples: [
    { jp: "ペットを飼っています。", reading: "ペットをかっています。", de: "Ich habe ein Haustier." },
    { jp: "このアパートはペットが飼えません。", reading: "このアパートはペットがかえません。", de: "In dieser Wohnung sind keine Haustiere erlaubt." }
  ]},
  { id: "v897", word: "別の", reading: "べつの", meaning: "ein anderer, andere(r/s)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "別の色はありますか。", reading: "べつのいろはありますか。", de: "Gibt es eine andere Farbe?" },
    { jp: "別の日にしましょう。", reading: "べつのひにしましょう。", de: "Machen wir es an einem anderen Tag." }
  ]},
  { id: "v898", word: "弁護士", reading: "べんごし", meaning: "Rechtsanwalt", pos: "Nomen", level: "adv", examples: [
    { jp: "兄は弁護士です。", reading: "あにはべんごしです。", de: "Mein Bruder ist Rechtsanwalt." },
    { jp: "弁護士に相談します。", reading: "べんごしにそうだんします。", de: "Ich berate mich mit einem Anwalt." }
  ]},
  { id: "v900", word: "ボート", reading: "ボート", meaning: "Boot", pos: "Nomen", level: "adv", examples: [
    { jp: "湖でボートに乗ります。", reading: "みずうみでボートにのります。", de: "Auf dem See fahre ich Boot." },
    { jp: "ボートを借ります。", reading: "ボートをかります。", de: "Ich leihe ein Boot." }
  ]},
  { id: "v901", word: "ボール", reading: "ボール", meaning: "Ball", pos: "Nomen", level: "adv", examples: [
    { jp: "公園でボールで遊びます。", reading: "こうえんでボールであそびます。", de: "Im Park spiele ich mit dem Ball." },
    { jp: "ボールを投げます。", reading: "ボールをなげます。", de: "Ich werfe den Ball." }
  ]},
  { id: "v902", word: "他", reading: "ほか", meaning: "andere, sonstige", pos: "Nomen", level: "adv", examples: [
    { jp: "他の店を見ます。", reading: "ほかのみせをみます。", de: "Ich schaue mir andere Läden an." },
    { jp: "他に質問はありますか。", reading: "ほかにしつもんはありますか。", de: "Gibt es noch andere Fragen?" }
  ]},
  { id: "v903", word: "他に", reading: "ほかに", meaning: "außerdem, zusätzlich", pos: "Adverb", level: "adv", examples: [
    { jp: "他に何がほしいですか。", reading: "ほかになにがほしいですか。", de: "Was möchten Sie sonst noch?" },
    { jp: "他に方法がありません。", reading: "ほかにほうほうがありません。", de: "Es gibt keine andere Möglichkeit." }
  ]},
  { id: "v904", word: "僕", reading: "ぼく", meaning: "ich (männlich, informell)", pos: "Nomen", level: "easy", examples: [
    { jp: "僕は学生です。", reading: "ぼくはがくせいです。", de: "Ich bin Student." },
    { jp: "僕もそう思います。", reading: "ぼくもそうおもいます。", de: "Ich denke auch so." }
  ]},
  { id: "v905", word: "欲しい", reading: "ほしい", meaning: "wollen, haben möchten", pos: "i-Adjektiv", level: "easy", examples: [
    { jp: "新しいかばんが欲しいです。", reading: "あたらしいかばんがほしいです。", de: "Ich hätte gern eine neue Tasche." },
    { jp: "何が欲しいですか。", reading: "なにがほしいですか。", de: "Was möchten Sie?" }
  ]},
  { id: "v906", word: "ポスト", reading: "ポスト", meaning: "Briefkasten", pos: "Nomen", level: "adv", examples: [
    { jp: "手紙をポストに入れます。", reading: "てがみをポストにいれます。", de: "Ich werfe den Brief in den Briefkasten." },
    { jp: "ポストは角にあります。", reading: "ポストはかどにあります。", de: "Der Briefkasten ist an der Ecke." }
  ]},
  { id: "v907", word: "ぼっちゃん", reading: "ぼっちゃん", meaning: "Sohn (eines anderen, höflich)", pos: "Nomen", level: "adv", examples: [
    { jp: "ぼっちゃんはお元気ですか。", reading: "ぼっちゃんはおげんきですか。", de: "Geht es Ihrem Sohn gut?" },
    { jp: "ぼっちゃんは何歳ですか。", reading: "ぼっちゃんはなんさいですか。", de: "Wie alt ist Ihr Sohn?" }
  ]},
  { id: "v908", word: "本当に", reading: "ほんとうに", meaning: "wirklich, echt", pos: "Adverb", level: "easy", examples: [
    { jp: "本当にありがとうございます。", reading: "ほんとうにありがとうございます。", de: "Vielen herzlichen Dank." },
    { jp: "本当においしいですね。", reading: "ほんとうにおいしいですね。", de: "Das ist wirklich lecker." }
  ]},
  { id: "v909", word: "本箱", reading: "ほんばこ", meaning: "Bücherregal", pos: "Nomen", level: "adv", examples: [
    { jp: "本を本箱に入れます。", reading: "ほんをほんばこにいれます。", de: "Ich stelle die Bücher ins Bücherregal." },
    { jp: "本箱がいっぱいです。", reading: "ほんばこがいっぱいです。", de: "Das Bücherregal ist voll." }
  ]},
  { id: "v910", word: "本屋", reading: "ほんや", meaning: "Buchladen", pos: "Nomen", level: "easy", examples: [
    { jp: "本屋で雑誌を買います。", reading: "ほんやでざっしをかいます。", de: "Ich kaufe eine Zeitschrift im Buchladen." },
    { jp: "駅前に大きい本屋があります。", reading: "えきまえにおおきいほんやがあります。", de: "Vor dem Bahnhof ist ein großer Buchladen." }
  ]},
  { id: "v911", word: "毎月", reading: "まいつき", meaning: "jeden Monat", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "毎月本を三冊読みます。", reading: "まいつきほんをさんさつよみます。", de: "Jeden Monat lese ich drei Bücher." },
    { jp: "毎月家賃を払います。", reading: "まいつきやちんをはらいます。", de: "Jeden Monat zahle ich Miete." }
  ]},
  { id: "v912", word: "毎度", reading: "まいど", meaning: "jedes Mal", pos: "Ausdruck", level: "adv", examples: [
    { jp: "毎度ありがとうございます。", reading: "まいどありがとうございます。", de: "Vielen Dank für Ihren Besuch (jedes Mal)." },
    { jp: "毎度お世話になります。", reading: "まいどおせわになります。", de: "Danke für Ihre stete Unterstützung." }
  ]},
  { id: "v913", word: "毎年", reading: "まいとし", meaning: "jedes Jahr", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "毎年日本へ行きます。", reading: "まいとしにほんへいきます。", de: "Jedes Jahr fahre ich nach Japan." },
    { jp: "毎年夏に海へ行きます。", reading: "まいとしなつにうみへいきます。", de: "Jedes Jahr im Sommer fahre ich ans Meer." }
  ]},
  { id: "v914", word: "前", reading: "まえ", meaning: "vor, vorne", pos: "Nomen", level: "easy", examples: [
    { jp: "駅の前で待っています。", reading: "えきのまえでまっています。", de: "Ich warte vor dem Bahnhof." },
    { jp: "食事の前に手を洗います。", reading: "しょくじのまえにてをあらいます。", de: "Vor dem Essen wasche ich die Hände." }
  ]},
  { id: "v915", word: "曲がる", reading: "まがる", meaning: "abbiegen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "次の角を右に曲がります。", reading: "つぎのかどをみぎにまがります。", de: "An der nächsten Ecke biege ich rechts ab." },
    { jp: "銀行の前で左に曲がってください。", reading: "ぎんこうのまえでひだりにまがってください。", de: "Biegen Sie vor der Bank links ab." }
  ]},
  { id: "v916", word: "孫", reading: "まご", meaning: "Enkel(kind)", pos: "Nomen", level: "adv", examples: [
    { jp: "祖母には孫が五人います。", reading: "そぼにはまごがごにんいます。", de: "Meine Großmutter hat fünf Enkel." },
    { jp: "孫の写真を見せてくれました。", reading: "まごのしゃしんをみせてくれました。", de: "Sie hat mir Fotos ihrer Enkel gezeigt." }
  ]},
  { id: "v917", word: "まず", reading: "まず", meaning: "zuerst, zunächst", pos: "Adverb", level: "adv", examples: [
    { jp: "まず手を洗いましょう。", reading: "まずてをあらいましょう。", de: "Waschen wir zuerst die Hände." },
    { jp: "まずこれを読んでください。", reading: "まずこれをよんでください。", de: "Lesen Sie bitte zuerst das." }
  ]},
  { id: "v918", word: "マスタード", reading: "マスタード", meaning: "Senf", pos: "Nomen", level: "adv", examples: [
    { jp: "ソーセージにマスタードをつけます。", reading: "ソーセージにマスタードをつけます。", de: "Ich gebe Senf an die Wurst." },
    { jp: "マスタードは少しからいです。", reading: "マスタードはすこしからいです。", de: "Senf ist etwas scharf." }
  ]},
  { id: "v919", word: "祭り", reading: "まつり", meaning: "Fest", pos: "Nomen", level: "easy", examples: [
    { jp: "夏に町で祭りがあります。", reading: "なつにまちでまつりがあります。", de: "Im Sommer gibt es ein Fest in der Stadt." },
    { jp: "祭りはとてもにぎやかでした。", reading: "まつりはとてもにぎやかでした。", de: "Das Fest war sehr lebhaft." }
  ]},
  { id: "v920", word: "窓口", reading: "まどぐち", meaning: "Schalter", pos: "Nomen", level: "adv", examples: [
    { jp: "切符は窓口で買います。", reading: "きっぷはまどぐちでかいます。", de: "Fahrkarten kauft man am Schalter." },
    { jp: "銀行の窓口で聞きました。", reading: "ぎんこうのまどぐちでききました。", de: "Ich habe am Bankschalter gefragt." }
  ]},
  { id: "v921", word: "マフラー", reading: "マフラー", meaning: "Schal", pos: "Nomen", level: "adv", examples: [
    { jp: "冬にマフラーをします。", reading: "ふゆにマフラーをします。", de: "Im Winter trage ich einen Schal." },
    { jp: "赤いマフラーをもらいました。", reading: "あかいマフラーをもらいました。", de: "Ich habe einen roten Schal bekommen." }
  ]},
  { id: "v922", word: "守る", reading: "まもる", meaning: "einhalten, schützen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "約束を守ります。", reading: "やくそくをまもります。", de: "Ich halte mein Versprechen." },
    { jp: "規則を守ってください。", reading: "きそくをまもってください。", de: "Halten Sie sich bitte an die Regeln." }
  ]},
  { id: "v923", word: "回る", reading: "まわる", meaning: "sich drehen, herumgehen", pos: "Verb (Godan, る)*", level: "adv", examples: [
    { jp: "町を回って観光しました。", reading: "まちをまわってかんこうしました。", de: "Ich bin durch die Stadt gezogen und habe sie besichtigt." },
    { jp: "地球は回っています。", reading: "ちきゅうはまわっています。", de: "Die Erde dreht sich." }
  ]},
  { id: "v924", word: "マンション", reading: "マンション", meaning: "Eigentumswohnung, Wohnblock", pos: "Nomen", level: "adv", examples: [
    { jp: "新しいマンションに住んでいます。", reading: "あたらしいマンションにすんでいます。", de: "Ich wohne in einer neuen Wohnung." },
    { jp: "このマンションは駅に近いです。", reading: "このマンションはえきにちかいです。", de: "Diese Wohnung ist nah am Bahnhof." }
  ]},
  { id: "v925", word: "真ん中", reading: "まんなか", meaning: "Mitte, Zentrum", pos: "Nomen", level: "adv", examples: [
    { jp: "部屋の真ん中にテーブルがあります。", reading: "へやのまんなかにテーブルがあります。", de: "In der Mitte des Zimmers steht ein Tisch." },
    { jp: "真ん中に座ってください。", reading: "まんなかにすわってください。", de: "Setzen Sie sich bitte in die Mitte." }
  ]},
  { id: "v926", word: "磨く", reading: "みがく", meaning: "putzen, polieren", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "毎晩歯を磨きます。", reading: "まいばんはをみがきます。", de: "Jeden Abend putze ich die Zähne." },
    { jp: "くつを磨きました。", reading: "くつをみがきました。", de: "Ich habe die Schuhe geputzt." }
  ]},
  { id: "v927", word: "右", reading: "みぎ", meaning: "rechts", pos: "Nomen", level: "easy", examples: [
    { jp: "右に曲がってください。", reading: "みぎにまがってください。", de: "Biegen Sie bitte rechts ab." },
    { jp: "右の手を使います。", reading: "みぎのてをつかいます。", de: "Ich benutze die rechte Hand." }
  ]},
  { id: "v928", word: "見せる", reading: "みせる", meaning: "zeigen", pos: "Verb (Ichidan)", level: "easy", examples: [
    { jp: "写真を見せてください。", reading: "しゃしんをみせてください。", de: "Zeigen Sie mir bitte das Foto." },
    { jp: "パスポートを見せました。", reading: "パスポートをみせました。", de: "Ich habe den Reisepass gezeigt." }
  ]},
  { id: "v929", word: "みそ", reading: "みそ", meaning: "Miso (Sojabohnenpaste)", pos: "Nomen", level: "adv", examples: [
    { jp: "みそでスープを作ります。", reading: "みそでスープをつくります。", de: "Ich mache eine Suppe mit Miso." },
    { jp: "このみそは少しからいです。", reading: "このみそはすこしからいです。", de: "Diese Miso ist etwas salzig." }
  ]},
  { id: "v930", word: "緑", reading: "みどり", meaning: "Grün", pos: "Nomen", level: "easy", examples: [
    { jp: "緑が好きです。", reading: "みどりがすきです。", de: "Ich mag Grün." },
    { jp: "山は緑がきれいです。", reading: "やまはみどりがきれいです。", de: "Die Berge sind schön grün." }
  ]},
  { id: "v931", word: "みなさま", reading: "みなさま", meaning: "alle (höflich), meine Damen und Herren", pos: "Ausdruck", level: "adv", examples: [
    { jp: "みなさま、こんにちは。", reading: "みなさま、こんにちは。", de: "Guten Tag, meine Damen und Herren." },
    { jp: "みなさまによろしくお伝えください。", reading: "みなさまによろしくおつたえください。", de: "Grüßen Sie bitte alle von mir." }
  ]},
  { id: "v932", word: "南", reading: "みなみ", meaning: "Süden", pos: "Nomen", level: "easy", examples: [
    { jp: "南の出口で会いましょう。", reading: "みなみのでぐちであいましょう。", de: "Treffen wir uns am Südausgang." },
    { jp: "南は暖かいです。", reading: "みなみはあたたかいです。", de: "Im Süden ist es warm." }
  ]},
  { id: "v933", word: "ミネラルウォーター", reading: "ミネラルウォーター", meaning: "Mineralwasser", pos: "Nomen", level: "adv", examples: [
    { jp: "ミネラルウォーターを買います。", reading: "ミネラルウォーターをかいます。", de: "Ich kaufe Mineralwasser." },
    { jp: "ミネラルウォーターを一本ください。", reading: "ミネラルウォーターをいっぽんください。", de: "Bitte eine Flasche Mineralwasser." }
  ]},
  { id: "v934", word: "ミュージカル", reading: "ミュージカル", meaning: "Musical", pos: "Nomen", level: "adv", examples: [
    { jp: "ミュージカルを見に行きます。", reading: "ミュージカルをみにいきます。", de: "Ich gehe in ein Musical." },
    { jp: "そのミュージカルは有名です。", reading: "そのミュージカルはゆうめいです。", de: "Dieses Musical ist berühmt." }
  ]},
  { id: "v935", word: "ミルク", reading: "ミルク", meaning: "Milch (Lehnwort, z.B. im Kaffee)", pos: "Nomen", level: "easy", examples: [
    { jp: "コーヒーにミルクを入れます。", reading: "コーヒーにミルクをいれます。", de: "Ich gebe Milch in den Kaffee." },
    { jp: "ミルクを飲みます。", reading: "ミルクをのみます。", de: "Ich trinke Milch." }
  ]},
  { id: "v936", word: "みんな", reading: "みんな", meaning: "alle, jeder", pos: "Nomen", level: "easy", examples: [
    { jp: "みんなで写真をとります。", reading: "みんなでしゃしんをとります。", de: "Wir machen alle zusammen ein Foto." },
    { jp: "みんな元気です。", reading: "みんなげんきです。", de: "Allen geht es gut." }
  ]},
  { id: "v937", word: "迎える", reading: "むかえる", meaning: "abholen, empfangen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "空港で友達を迎えます。", reading: "くうこうでともだちをむかえます。", de: "Ich hole meinen Freund am Flughafen ab." },
    { jp: "駅まで迎えに行きます。", reading: "えきまでむかえにいきます。", de: "Ich hole dich am Bahnhof ab." }
  ]},
  { id: "v938", word: "息子", reading: "むすこ", meaning: "Sohn (eigener)", pos: "Nomen", level: "easy", examples: [
    { jp: "息子は高校生です。", reading: "むすこはこうこうせいです。", de: "Mein Sohn ist Oberschüler." },
    { jp: "息子と公園へ行きます。", reading: "むすことこうえんへいきます。", de: "Ich gehe mit meinem Sohn in den Park." }
  ]},
  { id: "v939", word: "娘", reading: "むすめ", meaning: "Tochter (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "娘は大学生です。", reading: "むすめはだいがくせいです。", de: "Meine Tochter ist Studentin." },
    { jp: "娘に本を買いました。", reading: "むすめにほんをかいました。", de: "Ich habe meiner Tochter ein Buch gekauft." }
  ]},
  { id: "v940", word: "胸", reading: "むね", meaning: "Brust", pos: "Nomen", level: "adv", examples: [
    { jp: "胸が痛いです。", reading: "むねがいたいです。", de: "Meine Brust tut weh." },
    { jp: "胸に手を当てます。", reading: "むねにてをあてます。", de: "Ich lege die Hand auf die Brust." }
  ]},
  { id: "v941", word: "無理", reading: "むり", meaning: "unmöglich / zu viel des Guten", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "それは無理です。", reading: "それはむりです。", de: "Das ist unmöglich." },
    { jp: "無理をしないでください。", reading: "むりをしないでください。", de: "Überanstrengen Sie sich nicht." }
  ]},
  { id: "v942", word: "めい", reading: "めい", meaning: "Nichte", pos: "Nomen", level: "adv", examples: [
    { jp: "めいは五歳です。", reading: "めいはごさいです。", de: "Meine Nichte ist fünf." },
    { jp: "めいにプレゼントをあげます。", reading: "めいにプレゼントをあげます。", de: "Ich schenke meiner Nichte etwas." }
  ]},
  { id: "v943", word: "名刺", reading: "めいし", meaning: "Visitenkarte", pos: "Nomen", level: "adv", examples: [
    { jp: "名刺をください。", reading: "めいしをください。", de: "Ihre Visitenkarte, bitte." },
    { jp: "初めて会う人に名刺を渡します。", reading: "はじめてあうひとにめいしをわたします。", de: "Beim ersten Treffen überreicht man eine Visitenkarte." }
  ]},
  { id: "v944", word: "メニュー", reading: "メニュー", meaning: "Speisekarte, Menü", pos: "Nomen", level: "easy", examples: [
    { jp: "メニューを見せてください。", reading: "メニューをみせてください。", de: "Die Speisekarte, bitte." },
    { jp: "メニューに写真があります。", reading: "メニューにしゃしんがあります。", de: "In der Speisekarte sind Fotos." }
  ]},
  { id: "v945", word: "メロン", reading: "メロン", meaning: "Melone", pos: "Nomen", level: "adv", examples: [
    { jp: "メロンは甘いです。", reading: "メロンはあまいです。", de: "Melone ist süß." },
    { jp: "デザートにメロンを食べます。", reading: "デザートにメロンをたべます。", de: "Zum Nachtisch esse ich Melone." }
  ]},
  { id: "v946", word: "申し込み", reading: "もうしこみ", meaning: "Anmeldung, Bewerbung", pos: "Nomen", level: "adv", examples: [
    { jp: "申し込みは明日までです。", reading: "もうしこみはあしたまでです。", de: "Die Anmeldung geht bis morgen." },
    { jp: "申し込みの書類を書きます。", reading: "もうしこみのしょるいをかきます。", de: "Ich fülle das Anmeldeformular aus." }
  ]},
  { id: "v947", word: "申し込む", reading: "もうしこむ", meaning: "beantragen, sich anmelden", pos: "Verb (Godan, む)", level: "adv", examples: [
    { jp: "コースに申し込みます。", reading: "コースにもうしこみます。", de: "Ich melde mich für den Kurs an." },
    { jp: "インターネットで申し込みました。", reading: "インターネットでもうしこみました。", de: "Ich habe mich online angemeldet." }
  ]},
  { id: "v948", word: "申し訳", reading: "もうしわけ", meaning: "Entschuldigung (förmlich)", pos: "Ausdruck", level: "adv", examples: [
    { jp: "申し訳ありません。", reading: "もうしわけありません。", de: "Es tut mir sehr leid." },
    { jp: "遅れて申し訳ありませんでした。", reading: "おくれてもうしわけありませんでした。", de: "Entschuldigen Sie die Verspätung." }
  ]},
  { id: "v949", word: "もうすぐ", reading: "もうすぐ", meaning: "bald, gleich", pos: "Adverb", level: "adv", examples: [
    { jp: "もうすぐ電車が来ます。", reading: "もうすぐでんしゃがきます。", de: "Gleich kommt der Zug." },
    { jp: "もうすぐ夏休みです。", reading: "もうすぐなつやすみです。", de: "Bald sind Sommerferien." }
  ]},
  { id: "v950", word: "持ってくる", reading: "もってくる", meaning: "mitbringen, herbringen", pos: "Verb (unregelmäßig)", level: "adv", examples: [
    { jp: "傘を持ってきます。", reading: "かさをもってきます。", de: "Ich bringe einen Schirm mit." },
    { jp: "水を持ってきてください。", reading: "みずをもってきてください。", de: "Bringen Sie bitte Wasser." }
  ]},
  { id: "v951", word: "物", reading: "もの", meaning: "Ding, Sache", pos: "Nomen", level: "easy", examples: [
    { jp: "高い物は買えません。", reading: "たかいものはかえません。", de: "Teure Dinge kann ich nicht kaufen." },
    { jp: "好きな物を選んでください。", reading: "すきなものをえらんでください。", de: "Wählen Sie, was Sie mögen." }
  ]},
  { id: "v952", word: "もらう", reading: "もらう", meaning: "erhalten, bekommen", pos: "Verb (Godan, う)", level: "easy", examples: [
    { jp: "友達からプレゼントをもらいました。", reading: "ともだちからプレゼントをもらいました。", de: "Ich habe von einem Freund ein Geschenk bekommen." },
    { jp: "先生に手紙をもらいました。", reading: "せんせいにてがみをもらいました。", de: "Ich habe vom Lehrer einen Brief bekommen." }
  ]},
  { id: "v953", word: "八百屋", reading: "やおや", meaning: "Gemüsehändler", pos: "Nomen", level: "adv", examples: [
    { jp: "八百屋で野菜を買います。", reading: "やおやでやさいをかいます。", de: "Ich kaufe Gemüse beim Gemüsehändler." },
    { jp: "八百屋のトマトは新しいです。", reading: "やおやのトマトはあたらしいです。", de: "Die Tomaten beim Gemüsehändler sind frisch." }
  ]},
  { id: "v954", word: "焼く", reading: "やく", meaning: "braten, backen, grillen", pos: "Verb (Godan, く)", level: "adv", examples: [
    { jp: "魚を焼きます。", reading: "さかなをやきます。", de: "Ich brate Fisch." },
    { jp: "母がパンを焼きました。", reading: "ははがパンをやきました。", de: "Meine Mutter hat Brot gebacken." }
  ]},
  { id: "v955", word: "約束", reading: "やくそく", meaning: "Versprechen, Verabredung", pos: "Nomen", level: "easy", examples: [
    { jp: "友達と約束があります。", reading: "ともだちとやくそくがあります。", de: "Ich habe eine Verabredung mit einem Freund." },
    { jp: "約束を守ります。", reading: "やくそくをまもります。", de: "Ich halte mein Versprechen." }
  ]},
  { id: "v956", word: "やめる", reading: "やめる", meaning: "aufhören, kündigen", pos: "Verb (Ichidan)", level: "adv", examples: [
    { jp: "たばこをやめました。", reading: "たばこをやめました。", de: "Ich habe mit dem Rauchen aufgehört." },
    { jp: "来月、会社をやめます。", reading: "らいげつ、かいしゃをやめます。", de: "Nächsten Monat kündige ich bei der Firma." }
  ]},
  { id: "v957", word: "夕方", reading: "ゆうがた", meaning: "früher Abend, Abenddämmerung", pos: "Nomen", level: "adv", examples: [
    { jp: "夕方に家に帰ります。", reading: "ゆうがたにいえにかえります。", de: "Am frühen Abend gehe ich nach Hause." },
    { jp: "夕方から雨が降ります。", reading: "ゆうがたからあめがふります。", de: "Ab dem Abend regnet es." }
  ]},
  { id: "v958", word: "郵便", reading: "ゆうびん", meaning: "Post", pos: "Nomen", level: "adv", examples: [
    { jp: "郵便が届きました。", reading: "ゆうびんがとどきました。", de: "Die Post ist angekommen." },
    { jp: "郵便で荷物を送ります。", reading: "ゆうびんでにもつをおくります。", de: "Ich schicke das Paket per Post." }
  ]},
  { id: "v959", word: "ゆうべ", reading: "ゆうべ", meaning: "gestern Abend, letzte Nacht", pos: "Nomen/Adverb", level: "adv", examples: [
    { jp: "ゆうべはよく寝ました。", reading: "ゆうべはよくねました。", de: "Letzte Nacht habe ich gut geschlafen." },
    { jp: "ゆうべ映画を見ました。", reading: "ゆうべえいがをみました。", de: "Gestern Abend habe ich einen Film gesehen." }
  ]},
  { id: "v961", word: "雪", reading: "ゆき", meaning: "Schnee", pos: "Nomen", level: "easy", examples: [
    { jp: "雪が降っています。", reading: "ゆきがふっています。", de: "Es schneit." },
    { jp: "北海道は雪が多いです。", reading: "ほっかいどうはゆきがおおいです。", de: "In Hokkaidō gibt es viel Schnee." }
  ]},
  { id: "v962", word: "ゆで卵", reading: "ゆでたまご", meaning: "gekochtes Ei", pos: "Nomen", level: "adv", examples: [
    { jp: "朝ごはんにゆで卵を食べます。", reading: "あさごはんにゆでたまごをたべます。", de: "Zum Frühstück esse ich ein gekochtes Ei." },
    { jp: "ゆで卵を二つ作ります。", reading: "ゆでたまごをふたつつくります。", de: "Ich koche zwei Eier." }
  ]},
  { id: "v963", word: "良い", reading: "よい", meaning: "gut (förmlich)", pos: "i-Adjektiv", level: "adv", examples: [
    { jp: "良い天気ですね。", reading: "よいてんきですね。", de: "Schönes Wetter, nicht wahr?" },
    { jp: "良い一日を。", reading: "よいいちにちを。", de: "Einen schönen Tag." }
  ]},
  { id: "v964", word: "用事", reading: "ようじ", meaning: "Angelegenheit, Besorgung", pos: "Nomen", level: "adv", examples: [
    { jp: "今日は用事があります。", reading: "きょうはようじがあります。", de: "Heute habe ich etwas zu erledigen." },
    { jp: "用事で出かけます。", reading: "ようじででかけます。", de: "Ich gehe wegen einer Besorgung aus." }
  ]},
  { id: "v965", word: "予約", reading: "よやく", meaning: "Reservierung, Buchung", pos: "Nomen", level: "easy", examples: [
    { jp: "レストランを予約します。", reading: "レストランをよやくします。", de: "Ich reserviere einen Tisch im Restaurant." },
    { jp: "ホテルの予約をしました。", reading: "ホテルのよやくをしました。", de: "Ich habe das Hotel gebucht." }
  ]},
  { id: "v966", word: "よろこんで", reading: "よろこんで", meaning: "gerne, mit Vergnügen", pos: "Ausdruck", level: "adv", examples: [
    { jp: "よろこんで手伝います。", reading: "よろこんでてつだいます。", de: "Ich helfe gerne." },
    { jp: "よろこんで参加します。", reading: "よろこんでさんかします。", de: "Ich nehme gern teil." }
  ]},
  { id: "v967", word: "よろしく", reading: "よろしく", meaning: "freundliche Empfehlung / Bitte um Wohlwollen", pos: "Ausdruck", level: "easy", examples: [
    { jp: "どうぞよろしくお願いします。", reading: "どうぞよろしくおねがいします。", de: "Ich bitte um gute Zusammenarbeit." },
    { jp: "ご家族によろしく。", reading: "ごかぞくによろしく。", de: "Grüßen Sie Ihre Familie von mir." }
  ]},
  { id: "v968", word: "ラジオ", reading: "ラジオ", meaning: "Radio", pos: "Nomen", level: "adv", examples: [
    { jp: "朝、ラジオを聞きます。", reading: "あさ、ラジオをききます。", de: "Morgens höre ich Radio." },
    { jp: "ラジオで音楽を聞きます。", reading: "ラジオでおんがくをききます。", de: "Ich höre Musik im Radio." }
  ]},
  { id: "v969", word: "両親", reading: "りょうしん", meaning: "Eltern (eigene)", pos: "Nomen", level: "easy", examples: [
    { jp: "両親は田舎に住んでいます。", reading: "りょうしんはいなかにすんでいます。", de: "Meine Eltern wohnen auf dem Land." },
    { jp: "両親に電話します。", reading: "りょうしんにでんわします。", de: "Ich rufe meine Eltern an." }
  ]},
  { id: "v970", word: "旅館", reading: "りょかん", meaning: "Ryokan (jap. Gasthaus)", pos: "Nomen", level: "adv", examples: [
    { jp: "温泉の旅館に泊まります。", reading: "おんせんのりょかんにとまります。", de: "Ich übernachte in einem Onsen-Ryokan." },
    { jp: "旅館の料理はおいしかったです。", reading: "りょかんのりょうりはおいしかったです。", de: "Das Essen im Ryokan war lecker." }
  ]},
  { id: "v971", word: "旅行会社", reading: "りょこうがいしゃ", meaning: "Reisebüro", pos: "Nomen", level: "adv", examples: [
    { jp: "旅行会社で切符を買います。", reading: "りょこうがいしゃできっぷをかいます。", de: "Ich kaufe die Tickets im Reisebüro." },
    { jp: "旅行会社に相談しました。", reading: "りょこうがいしゃにそうだんしました。", de: "Ich habe mich im Reisebüro beraten lassen." }
  ]},
  { id: "v972", word: "留守", reading: "るす", meaning: "abwesend, nicht zu Hause", pos: "Nomen", level: "adv", examples: [
    { jp: "父は今留守です。", reading: "ちちはいまるすです。", de: "Mein Vater ist gerade nicht da." },
    { jp: "留守の間、猫を見てください。", reading: "るすのあいだ、ねこをみてください。", de: "Passen Sie bitte auf die Katze auf, während ich weg bin." }
  ]},
  { id: "v973", word: "レアな", reading: "レアな", meaning: "selten / medium (Fleisch)", pos: "na-Adjektiv", level: "adv", examples: [
    { jp: "レアな切手を集めています。", reading: "レアなきってをあつめています。", de: "Ich sammle seltene Briefmarken." },
    { jp: "ステーキはレアが好きです。", reading: "ステーキはレアがすきです。", de: "Ich mag mein Steak medium." }
  ]},
  { id: "v974", word: "歴史", reading: "れきし", meaning: "Geschichte", pos: "Nomen", level: "adv", examples: [
    { jp: "日本の歴史を勉強します。", reading: "にほんのれきしをべんきょうします。", de: "Ich lerne japanische Geschichte." },
    { jp: "この町には長い歴史があります。", reading: "このまちにはながいれきしがあります。", de: "Diese Stadt hat eine lange Geschichte." }
  ]},
  { id: "v975", word: "レシート", reading: "レシート", meaning: "Kassenbon, Quittung", pos: "Nomen", level: "adv", examples: [
    { jp: "レシートをください。", reading: "レシートをください。", de: "Den Kassenbon, bitte." },
    { jp: "レシートをもらいました。", reading: "レシートをもらいました。", de: "Ich habe den Bon bekommen." }
  ]},
  { id: "v976", word: "レッスン", reading: "レッスン", meaning: "Unterrichtsstunde, Kurs", pos: "Nomen", level: "adv", examples: [
    { jp: "ピアノのレッスンを受けます。", reading: "ピアノのレッスンをうけます。", de: "Ich nehme Klavierunterricht." },
    { jp: "今日はレッスンがあります。", reading: "きょうはレッスンがあります。", de: "Heute habe ich Unterricht." }
  ]},
  { id: "v977", word: "レポート", reading: "レポート", meaning: "Bericht, Referat", pos: "Nomen", level: "adv", examples: [
    { jp: "レポートを書きます。", reading: "レポートをかきます。", de: "Ich schreibe einen Bericht." },
    { jp: "レポートは金曜日までです。", reading: "レポートはきんようびまでです。", de: "Der Bericht ist bis Freitag fällig." }
  ]},
  { id: "v978", word: "練習", reading: "れんしゅう", meaning: "Übung", pos: "Nomen", level: "easy", examples: [
    { jp: "毎日漢字の練習をします。", reading: "まいにちかんじのれんしゅうをします。", de: "Jeden Tag übe ich Kanji." },
    { jp: "練習は大切です。", reading: "れんしゅうはたいせつです。", de: "Übung ist wichtig." }
  ]},
  { id: "v979", word: "練習する", reading: "れんしゅうする", meaning: "üben", pos: "Verb (する-Verb)", level: "easy", examples: [
    { jp: "ピアノを練習します。", reading: "ピアノをれんしゅうします。", de: "Ich übe Klavier." },
    { jp: "日本語を毎日練習しています。", reading: "にほんごをまいにちれんしゅうしています。", de: "Ich übe jeden Tag Japanisch." }
  ]},
  { id: "v980", word: "ロビー", reading: "ロビー", meaning: "Lobby, Vorhalle", pos: "Nomen", level: "adv", examples: [
    { jp: "ホテルのロビーで待ちます。", reading: "ホテルのロビーでまちます。", de: "Ich warte in der Hotellobby." },
    { jp: "ロビーにソファーがあります。", reading: "ロビーにソファーがあります。", de: "In der Lobby stehen Sofas." }
  ]},
  { id: "v981", word: "ワイン", reading: "ワイン", meaning: "Wein", pos: "Nomen", level: "adv", examples: [
    { jp: "赤ワインを飲みます。", reading: "あかワインをのみます。", de: "Ich trinke Rotwein." },
    { jp: "ワインを一本買いました。", reading: "ワインをいっぽんかいました。", de: "Ich habe eine Flasche Wein gekauft." }
  ]},
  { id: "v982", word: "わざわざ", reading: "わざわざ", meaning: "extra, eigens", pos: "Adverb", level: "adv", examples: [
    { jp: "わざわざ来てくれてありがとう。", reading: "わざわざきてくれてありがとう。", de: "Danke, dass du extra gekommen bist." },
    { jp: "わざわざ買いに行きました。", reading: "わざわざかいにいきました。", de: "Ich bin extra einkaufen gegangen." }
  ]},
  { id: "v983", word: "忘れ物", reading: "わすれもの", meaning: "vergessener Gegenstand, Fundsache", pos: "Nomen", level: "adv", examples: [
    { jp: "電車に忘れ物をしました。", reading: "でんしゃにわすれものをしました。", de: "Ich habe etwas im Zug vergessen." },
    { jp: "忘れ物はありませんか。", reading: "わすれものはありませんか。", de: "Haben Sie nichts vergessen?" }
  ]},
  { id: "v984", word: "私", reading: "わたし", meaning: "ich", pos: "Nomen", level: "easy", examples: [
    { jp: "私は学生です。", reading: "わたしはがくせいです。", de: "Ich bin Student." },
    { jp: "私の名前は田中です。", reading: "わたしのなまえはたなかです。", de: "Mein Name ist Tanaka." }
  ]},
  { id: "v985", word: "私たち", reading: "わたしたち", meaning: "wir", pos: "Nomen", level: "easy", examples: [
    { jp: "私たちは友達です。", reading: "わたしたちはともだちです。", de: "Wir sind Freunde." },
    { jp: "私たちは日本語を勉強しています。", reading: "わたしたちはにほんごをべんきょうしています。", de: "Wir lernen Japanisch." }
  ]},
  { id: "v986", word: "渡す", reading: "わたす", meaning: "überreichen, übergeben", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "先生に手紙を渡します。", reading: "せんせいにてがみをわたします。", de: "Ich übergebe dem Lehrer den Brief." },
    { jp: "お金を渡しました。", reading: "おかねをわたしました。", de: "Ich habe das Geld übergeben." }
  ]},
  { id: "v987", word: "笑う", reading: "わらう", meaning: "lachen", pos: "Verb (Godan, う)", level: "adv", examples: [
    { jp: "みんなで笑いました。", reading: "みんなでわらいました。", de: "Wir haben alle gelacht." },
    { jp: "彼女はよく笑います。", reading: "かのじょはよくわらいます。", de: "Sie lacht viel." }
  ]},
  { id: "v988", word: "会議", reading: "かいぎ", meaning: "Konferenz, Besprechung", pos: "Nomen", level: "adv", examples: [
    { jp: "午後、会議があります。", reading: "ごご、かいぎがあります。", de: "Am Nachmittag ist eine Besprechung." },
    { jp: "会議は三時に終わります。", reading: "かいぎはさんじにおわります。", de: "Die Besprechung endet um drei." }
  ]},
  { id: "v989", word: "会議室", reading: "かいぎしつ", meaning: "Konferenzraum", pos: "Nomen", level: "adv", examples: [
    { jp: "会議室は二階です。", reading: "かいぎしつはにかいです。", de: "Der Konferenzraum ist im ersten Stock." },
    { jp: "会議室を予約しました。", reading: "かいぎしつをよやくしました。", de: "Ich habe den Konferenzraum reserviert." }
  ]},
  { id: "v990", word: "出張", reading: "しゅっちょう", meaning: "Geschäftsreise", pos: "Nomen", level: "adv", examples: [
    { jp: "来週、大阪に出張します。", reading: "らいしゅう、おおさかにしゅっちょうします。", de: "Nächste Woche mache ich eine Geschäftsreise nach Ōsaka." },
    { jp: "父は出張が多いです。", reading: "ちちはしゅっちょうがおおいです。", de: "Mein Vater ist oft auf Geschäftsreise." }
  ]},
  { id: "v991", word: "大使館", reading: "たいしかん", meaning: "Botschaft", pos: "Nomen", level: "adv", examples: [
    { jp: "ビザを大使館で申し込みます。", reading: "ビザをたいしかんでもうしこみます。", de: "Ich beantrage das Visum in der Botschaft." },
    { jp: "ドイツ大使館は東京にあります。", reading: "ドイツたいしかんはとうきょうにあります。", de: "Die deutsche Botschaft ist in Tōkyō." }
  ]},
  { id: "v992", word: "現金", reading: "げんきん", meaning: "Bargeld", pos: "Nomen", level: "adv", examples: [
    { jp: "現金で払います。", reading: "げんきんではらいます。", de: "Ich bezahle bar." },
    { jp: "現金がありません。", reading: "げんきんがありません。", de: "Ich habe kein Bargeld." }
  ]},
  { id: "v993", word: "航空会社", reading: "こうくうがいしゃ", meaning: "Fluggesellschaft", pos: "Nomen", level: "adv", examples: [
    { jp: "この航空会社は安いです。", reading: "このこうくうがいしゃはやすいです。", de: "Diese Fluggesellschaft ist günstig." },
    { jp: "航空会社に電話しました。", reading: "こうくうがいしゃにでんわしました。", de: "Ich habe die Fluggesellschaft angerufen." }
  ]},
  { id: "v994", word: "残業", reading: "ざんぎょう", meaning: "Überstunden", pos: "Nomen", level: "adv", examples: [
    { jp: "今日は残業があります。", reading: "きょうはざんぎょうがあります。", de: "Heute mache ich Überstunden." },
    { jp: "毎日残業で疲れます。", reading: "まいにちざんぎょうでつかれます。", de: "Die täglichen Überstunden ermüden mich." }
  ]},
  { id: "v995", word: "支払い", reading: "しはらい", meaning: "Bezahlung, Zahlung", pos: "Nomen", level: "adv", examples: [
    { jp: "支払いはカードでできます。", reading: "しはらいはカードでできます。", de: "Die Bezahlung geht mit Karte." },
    { jp: "支払いは月末です。", reading: "しはらいはげつまつです。", de: "Die Zahlung ist zum Monatsende fällig." }
  ]},
  { id: "v996", word: "社員", reading: "しゃいん", meaning: "Firmenangestellter", pos: "Nomen", level: "adv", examples: [
    { jp: "この会社の社員は千人です。", reading: "このかいしゃのしゃいんはせんにんです。", de: "Diese Firma hat tausend Angestellte." },
    { jp: "彼は新しい社員です。", reading: "かれはあたらしいしゃいんです。", de: "Er ist ein neuer Angestellter." }
  ]},
  { id: "v997", word: "社長", reading: "しゃちょう", meaning: "Firmenchef, Geschäftsführer", pos: "Nomen", level: "adv", examples: [
    { jp: "社長に会いました。", reading: "しゃちょうにあいました。", de: "Ich habe den Chef getroffen." },
    { jp: "社長は今出張中です。", reading: "しゃちょうはいましゅっちょうちゅうです。", de: "Der Chef ist gerade auf Geschäftsreise." }
  ]},
  { id: "v998", word: "出席", reading: "しゅっせき", meaning: "Teilnahme, Anwesenheit", pos: "Nomen", level: "adv", examples: [
    { jp: "会議の出席をお願いします。", reading: "かいぎのしゅっせきをおねがいします。", de: "Bitte nehmen Sie an der Besprechung teil." },
    { jp: "出席の返事をしました。", reading: "しゅっせきのへんじをしました。", de: "Ich habe zugesagt (teilzunehmen)." }
  ]},
  { id: "v999", word: "出席する", reading: "しゅっせきする", meaning: "teilnehmen, anwesend sein", pos: "Verb (する-Verb)", level: "adv", examples: [
    { jp: "会議に出席します。", reading: "かいぎにしゅっせきします。", de: "Ich nehme an der Besprechung teil." },
    { jp: "結婚式に出席しました。", reading: "けっこんしきにしゅっせきしました。", de: "Ich habe an der Hochzeit teilgenommen." }
  ]},
  { id: "v1000", word: "書類", reading: "しょるい", meaning: "Unterlagen, Dokumente", pos: "Nomen", level: "adv", examples: [
    { jp: "書類にサインしてください。", reading: "しょるいにサインしてください。", de: "Unterschreiben Sie bitte die Unterlagen." },
    { jp: "大切な書類をなくしました。", reading: "たいせつなしょるいをなくしました。", de: "Ich habe wichtige Dokumente verloren." }
  ]},
  { id: "v1001", word: "大臣", reading: "だいじん", meaning: "Minister", pos: "Nomen", level: "adv", examples: [
    { jp: "彼は外務大臣です。", reading: "かれはがいむだいじんです。", de: "Er ist Außenminister." },
    { jp: "大臣がテレビに出ました。", reading: "だいじんがテレビにでました。", de: "Der Minister war im Fernsehen." }
  ]},
  { id: "v1002", word: "大統領", reading: "だいとうりょう", meaning: "Präsident", pos: "Nomen", level: "adv", examples: [
    { jp: "アメリカの大統領が来日します。", reading: "アメリカのだいとうりょうがらいにちします。", de: "Der US-Präsident besucht Japan." },
    { jp: "大統領のスピーチを聞きました。", reading: "だいとうりょうのスピーチをききました。", de: "Ich habe die Rede des Präsidenten gehört." }
  ]},
  { id: "v1003", word: "貿易", reading: "ぼうえき", meaning: "Handel, Außenhandel", pos: "Nomen", level: "adv", examples: [
    { jp: "日本は貿易が盛んです。", reading: "にほんはぼうえきがさかんです。", de: "Japan treibt viel Handel." },
    { jp: "彼は貿易の仕事をしています。", reading: "かれはぼうえきのしごとをしています。", de: "Er arbeitet im Handel." }
  ]},
  { id: "v1004", word: "下ろす", reading: "おろす", meaning: "(Geld) abheben / herunternehmen", pos: "Verb (Godan, す)", level: "adv", examples: [
    { jp: "銀行でお金を下ろします。", reading: "ぎんこうでおかねをおろします。", de: "Ich hebe bei der Bank Geld ab." },
    { jp: "棚から箱を下ろします。", reading: "たなからはこをおろします。", de: "Ich nehme die Schachtel vom Regal." }
  ]},
  { id: "v1005", word: "焼き物", reading: "やきもの", meaning: "Töpferwaren, Keramik; Gegrilltes (gegrilltes/gebratenes Gericht)", pos: "Nomen", level: "adv", examples: [
    { jp: "この町は焼き物で有名です。", reading: "このまちはやきものでゆうめいです。", de: "Diese Stadt ist für ihre Keramik berühmt." },
    { jp: "今夜は焼き物を食べます。", reading: "こんやはやきものをたべます。", de: "Heute Abend esse ich Gegrilltes." }
  ]},
  { id: "v1006", word: "陶芸", reading: "とうげい", meaning: "Töpferei, Keramik(kunst)", pos: "Nomen", level: "adv", examples: [
    { jp: "陶芸を習っています。", reading: "とうげいをならっています。", de: "Ich lerne Töpfern." },
    { jp: "陶芸は楽しい趣味です。", reading: "とうげいはたのしいしゅみです。", de: "Töpfern ist ein schönes Hobby." }
  ]},
  { id: "v1007", word: "陶芸家", reading: "とうげいか", meaning: "Töpfer, Keramiker", pos: "Nomen", level: "adv", examples: [
    { jp: "彼は有名な陶芸家です。", reading: "かれはゆうめいなとうげいかです。", de: "Er ist ein berühmter Keramiker." },
    { jp: "陶芸家になりたいです。", reading: "とうげいかになりたいです。", de: "Ich möchte Töpfer werden." }
  ]},
  { id: "v1008", word: "バツ", reading: "ばつ", meaning: "das Kreuz (✕), Zeichen für „falsch\"", pos: "Nomen", level: "adv", examples: [
    { jp: "答えにバツをつけました。", reading: "こたえにバツをつけました。", de: "Ich habe die Antwort mit einem Kreuz markiert." },
    { jp: "バツは間違いという意味です。", reading: "バツはまちがいといういみです。", de: "Ein Kreuz bedeutet „falsch\"." }
  ]},
  { id: "v1009", word: "丸", reading: "まる", meaning: "der Kreis (○), Zeichen für „richtig\"", pos: "Nomen", level: "adv", examples: [
    { jp: "正しい答えに丸をつけます。", reading: "ただしいこたえにまるをつけます。", de: "Ich mache einen Kreis bei der richtigen Antwort." },
    { jp: "先生が丸をくれました。", reading: "せんせいがまるをくれました。", de: "Der Lehrer hat mir einen Kreis gegeben." }
  ]},
  // Adverbien (Erweiterung v3.23.0)
  { id: "v1010", word: "はっきり", reading: "はっきり", meaning: "deutlich / klar", pos: "Adverb", level: "adv", examples: [
    { jp: "はっきり話してください。", reading: "はっきりはなしてください。", de: "Bitte sprechen Sie deutlich." },
    { jp: "空がはっきり見えます。", reading: "そらがはっきりみえます。", de: "Der Himmel ist klar zu sehen." }
  ]},
  { id: "v1011", word: "しっかり", reading: "しっかり", meaning: "fest / gründlich / ordentlich", pos: "Adverb", level: "adv", examples: [
    { jp: "しっかり勉強してください。", reading: "しっかりべんきょうしてください。", de: "Lern bitte gründlich." },
    { jp: "かばんをしっかり持ってください。", reading: "かばんをしっかりもってください。", de: "Halte die Tasche gut fest." }
  ]},
  { id: "v1012", word: "ちゃんと", reading: "ちゃんと", meaning: "ordentlich / richtig", pos: "Adverb", level: "adv", examples: [
    { jp: "ちゃんと食べてください。", reading: "ちゃんとたべてください。", de: "Iss bitte ordentlich." },
    { jp: "宿題をちゃんとしました。", reading: "しゅくだいをちゃんとしました。", de: "Ich habe die Hausaufgaben ordentlich gemacht." }
  ]},
  { id: "v1013", word: "きちんと", reading: "きちんと", meaning: "ordentlich / korrekt", pos: "Adverb", level: "adv", examples: [
    { jp: "きちんと座ってください。", reading: "きちんとすわってください。", de: "Setz dich bitte ordentlich hin." },
    { jp: "毎日きちんと朝ごはんを食べます。", reading: "まいにちきちんとあさごはんをたべます。", de: "Ich frühstücke jeden Tag ordentlich." }
  ]},
  { id: "v1014", word: "ずいぶん", reading: "ずいぶん", meaning: "ziemlich / beträchtlich (mehr als erwartet)", pos: "Adverb", level: "adv", examples: [
    { jp: "今日はずいぶん寒いです。", reading: "きょうはずいぶんさむいです。", de: "Heute ist es ziemlich kalt." },
    { jp: "ずいぶん遠いですね。", reading: "ずいぶんとおいですね。", de: "Das ist ganz schön weit, nicht wahr?" }
  ]},
  { id: "v1015", word: "やっと", reading: "やっと", meaning: "endlich / schließlich", pos: "Adverb", level: "easy", examples: [
    { jp: "やっと宿題が終わりました。", reading: "やっとしゅくだいがおわりました。", de: "Endlich sind die Hausaufgaben fertig." },
    { jp: "バスがやっと来ました。", reading: "バスがやっときました。", de: "Der Bus ist endlich gekommen." }
  ]},
  { id: "v1016", word: "もう一度", reading: "もういちど", meaning: "noch einmal", pos: "Adverb", level: "easy", examples: [
    { jp: "もう一度言ってください。", reading: "もういちどいってください。", de: "Bitte sagen Sie es noch einmal." },
    { jp: "もう一度やってみます。", reading: "もういちどやってみます。", de: "Ich versuche es noch einmal." }
  ]},
  { id: "v1017", word: "もう少し", reading: "もうすこし", meaning: "noch ein bisschen / etwas mehr", pos: "Adverb", level: "adv", examples: [
    { jp: "もう少し待ってください。", reading: "もうすこしまってください。", de: "Bitte warten Sie noch ein bisschen." },
    { jp: "もう少しで駅です。", reading: "もうすこしでえきです。", de: "Gleich sind wir am Bahnhof." }
  ]},
  { id: "v1018", word: "まだまだ", reading: "まだまだ", meaning: "noch lange (nicht) / bei Weitem", pos: "Adverb", level: "adv", examples: [
    { jp: "日本語はまだまだ下手です。", reading: "にほんごはまだまだへたです。", de: "Mein Japanisch ist noch lange nicht gut." },
    { jp: "夏はまだまだ暑いです。", reading: "なつはまだまだあついです。", de: "Im Sommer ist es noch lange heiß." }
  ]},
  { id: "v1019", word: "絶対", reading: "ぜったい", meaning: "absolut / unbedingt", pos: "Adverb", level: "adv", examples: [
    { jp: "絶対に行きます。", reading: "ぜったいにいきます。", de: "Ich gehe auf jeden Fall hin." },
    { jp: "これは絶対に大丈夫です。", reading: "これはぜったいにだいじょうぶです。", de: "Das ist ganz sicher in Ordnung." }
  ]},
  { id: "v1020", word: "必ず", reading: "かならず", meaning: "bestimmt / unbedingt", pos: "Adverb", level: "adv", examples: [
    { jp: "必ず電話します。", reading: "かならずでんわします。", de: "Ich rufe bestimmt an." },
    { jp: "明日は必ず来てください。", reading: "あしたはかならずきてください。", de: "Komm morgen unbedingt." }
  ]},
  { id: "v1021", word: "別に", reading: "べつに", meaning: "nicht besonders (mit Verneinung)", pos: "Adverb", level: "adv", examples: [
    { jp: "別に問題ありません。", reading: "べつにもんだいありません。", de: "Es gibt kein besonderes Problem." },
    { jp: "別に欲しくないです。", reading: "べつにほしくないです。", de: "Ich will es nicht besonders." }
  ]},
  { id: "v1022", word: "できるだけ", reading: "できるだけ", meaning: "so viel/gut wie möglich", pos: "Adverb", level: "adv", examples: [
    { jp: "できるだけ早く来てください。", reading: "できるだけはやくきてください。", de: "Kommen Sie bitte so früh wie möglich." },
    { jp: "できるだけ日本語で話します。", reading: "できるだけにほんごではなします。", de: "Ich spreche so viel wie möglich Japanisch." }
  ]},
  { id: "v1023", word: "なるべく", reading: "なるべく", meaning: "möglichst / nach Möglichkeit", pos: "Adverb", level: "adv", examples: [
    { jp: "なるべく歩いて行きます。", reading: "なるべくあるいていきます。", de: "Ich gehe möglichst zu Fuß." },
    { jp: "なるべく野菜を食べます。", reading: "なるべくやさいをたべます。", de: "Ich esse möglichst viel Gemüse." }
  ]},
  { id: "v1024", word: "急に", reading: "きゅうに", meaning: "plötzlich", pos: "Adverb", level: "adv", examples: [
    { jp: "急に雨が降りました。", reading: "きゅうにあめがふりました。", de: "Plötzlich hat es geregnet." },
    { jp: "彼は急に来ました。", reading: "かれはきゅうにきました。", de: "Er kam plötzlich." }
  ]},
  { id: "v1025", word: "なぜ", reading: "なぜ", meaning: "warum", pos: "Adverb", level: "easy", examples: [
    { jp: "なぜ泣いているのですか。", reading: "なぜないているのですか。", de: "Warum weinst du?" },
    { jp: "なぜ学校を休みましたか。", reading: "なぜがっこうをやすみましたか。", de: "Warum bist du der Schule ferngeblieben?" }
  ]},
  { id: "v1026", word: "こう", reading: "こう", meaning: "so / auf diese Weise (beim Sprecher)", pos: "Adverb", level: "adv", examples: [
    { jp: "こう書いてください。", reading: "こうかいてください。", de: "Bitte schreiben Sie es so." },
    { jp: "こうすると簡単です。", reading: "こうするとかんたんです。", de: "So ist es einfach." }
  ]},
  { id: "v1027", word: "そう", reading: "そう", meaning: "so / auf diese Weise (beim Gegenüber/erwähnt)", pos: "Adverb", level: "adv", examples: [
    { jp: "私もそう思います。", reading: "わたしもそうおもいます。", de: "Das denke ich auch." },
    { jp: "そうしましょう。", reading: "そうしましょう。", de: "Machen wir es so." }
  ]},
  { id: "v1028", word: "ああ", reading: "ああ", meaning: "so (auf jene Weise)", pos: "Adverb", level: "adv", examples: [
    { jp: "ああいう人が好きです。", reading: "ああいうひとがすきです。", de: "Ich mag solche Menschen." },
    { jp: "ああ書くと分かりやすいです。", reading: "ああかくとわかりやすいです。", de: "So geschrieben ist es leicht verständlich." }
  ]},
  { id: "v1029", word: "こんなに", reading: "こんなに", meaning: "so sehr (dieses Ausmaß hier)", pos: "Adverb", level: "adv", examples: [
    { jp: "こんなに寒い日は初めてです。", reading: "こんなにさむいひははじめてです。", de: "So einen kalten Tag habe ich noch nie erlebt." },
    { jp: "こんなにたくさん食べられません。", reading: "こんなにたくさんたべられません。", de: "So viel kann ich nicht essen." }
  ]},
  { id: "v1030", word: "そんなに", reading: "そんなに", meaning: "so sehr (oft verneint: nicht so sehr)", pos: "Adverb", level: "adv", examples: [
    { jp: "そんなに高くないです。", reading: "そんなにたかくないです。", de: "So teuer ist es nicht." },
    { jp: "そんなに急がないでください。", reading: "そんなにいそがないでください。", de: "Beeilen Sie sich nicht so." }
  ]},
  { id: "v1031", word: "あんなに", reading: "あんなに", meaning: "so (sehr, jenes)", pos: "Adverb", level: "adv", examples: [
    { jp: "あんなに楽しい日はなかったです。", reading: "あんなにたのしいひはなかったです。", de: "Einen so schönen Tag gab es nicht." },
    { jp: "あんなにたくさんの人を見ました。", reading: "あんなにたくさんのひとをみました。", de: "Ich habe so viele Menschen gesehen." }
  ]},
  { id: "v1032", word: "どんなに", reading: "どんなに", meaning: "wie sehr (auch)", pos: "Adverb", level: "adv", examples: [
    { jp: "どんなに高くても買います。", reading: "どんなにたかくてもかいます。", de: "Egal wie teuer, ich kaufe es." },
    { jp: "どんなに疲れても勉強します。", reading: "どんなにつかれてもべんきょうします。", de: "Egal wie müde, ich lerne." }
  ]},
  { id: "v1034", word: "一生懸命", reading: "いっしょうけんめい", meaning: "mit aller Kraft / eifrig", pos: "Adverb", level: "adv", examples: [
    { jp: "一生懸命勉強します。", reading: "いっしょうけんめいべんきょうします。", de: "Ich lerne mit aller Kraft." },
    { jp: "一生懸命働きました。", reading: "いっしょうけんめいはたらきました。", de: "Ich habe eifrig gearbeitet." }
  ]},
  { id: "v1035", word: "実は", reading: "じつは", meaning: "eigentlich / in Wahrheit", pos: "Adverb", level: "adv", examples: [
    { jp: "実は日本に行きたいです。", reading: "じつはにほんにいきたいです。", de: "Eigentlich möchte ich nach Japan." },
    { jp: "実はもう知っていました。", reading: "じつはもうしっていました。", de: "In Wahrheit wusste ich es schon." }
  ]},
  { id: "v1036", word: "最初に", reading: "さいしょに", meaning: "zuerst / am Anfang", pos: "Adverb", level: "easy", examples: [
    { jp: "最初に名前を書いてください。", reading: "さいしょになまえをかいてください。", de: "Schreiben Sie zuerst Ihren Namen." },
    { jp: "最初にこの本を読みました。", reading: "さいしょにこのほんをよみました。", de: "Zuerst habe ich dieses Buch gelesen." }
  ]},
  { id: "v1037", word: "最後に", reading: "さいごに", meaning: "zuletzt / am Ende", pos: "Adverb", level: "easy", examples: [
    { jp: "最後にお茶を飲みました。", reading: "さいごにおちゃをのみました。", de: "Zuletzt habe ich Tee getrunken." },
    { jp: "最後に質問があります。", reading: "さいごにしつもんがあります。", de: "Zum Schluss habe ich eine Frage." }
  ]},
  { id: "v1040", word: "いつか", reading: "いつか", meaning: "irgendwann / eines Tages", pos: "Adverb", level: "adv", examples: [
    { jp: "いつか日本に住みたいです。", reading: "いつかにほんにすみたいです。", de: "Eines Tages möchte ich in Japan leben." },
    { jp: "いつかまた会いましょう。", reading: "いつかまたあいましょう。", de: "Lass uns irgendwann wieder treffen." }
  ]},
  { id: "v1041", word: "いつでも", reading: "いつでも", meaning: "jederzeit / wann auch immer", pos: "Adverb", level: "adv", examples: [
    { jp: "いつでも電話してください。", reading: "いつでもでんわしてください。", de: "Rufen Sie jederzeit an." },
    { jp: "いつでも遊びに来てください。", reading: "いつでもあそびにきてください。", de: "Kommen Sie jederzeit zu Besuch." }
  ]},
  { id: "v1042", word: "このごろ", reading: "このごろ", meaning: "in letzter Zeit / dieser Tage", pos: "Adverb", level: "adv", examples: [
    { jp: "このごろ忙しいです。", reading: "このごろいそがしいです。", de: "In letzter Zeit bin ich beschäftigt." },
    { jp: "このごろ雨が多いです。", reading: "このごろあめがおおいです。", de: "In letzter Zeit regnet es oft." }
  ]},
  { id: "v1043", word: "たしかに", reading: "たしかに", meaning: "sicherlich / gewiss / tatsächlich", pos: "Adverb", level: "adv", examples: [
    { jp: "たしかにここに置きました。", reading: "たしかにここにおきました。", de: "Ich habe es sicher hier hingelegt." },
    { jp: "たしかに彼は親切です。", reading: "たしかにかれはしんせつです。", de: "Er ist tatsächlich freundlich." }
  ]},
  { id: "v1044", word: "どんどん", reading: "どんどん", meaning: "immer weiter / zügig / rasch", pos: "Adverb", level: "adv", examples: [
    { jp: "日本語がどんどん上手になります。", reading: "にほんごがどんどんじょうずになります。", de: "Mein Japanisch wird immer besser." },
    { jp: "どんどん食べてください。", reading: "どんどんたべてください。", de: "Greifen Sie kräftig zu." }
  ]}
];
