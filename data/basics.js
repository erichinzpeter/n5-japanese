'use strict';

const BASICS = [

  // ── KONNEKTOREN & FUNKTIONSWÖRTER ────────────────────────────────────────

  {
    id: "b001",
    word: "と",
    reading: "と",
    meaning: "und (zwischen Nomen)",
    pos: "Partikel",
    examples: [
      { jp: "パンとバターを買いました。", reading: "パンとバターをかいました。", de: "Ich habe Brot und Butter gekauft." },
      { jp: "犬と猫が好きです。", reading: "いぬとねこがすきです。", de: "Ich mag Hunde und Katzen." }
    ]
  },
  {
    id: "b002",
    word: "そして",
    reading: "そして",
    meaning: "und / und dann / außerdem",
    pos: "Konjunktion",
    examples: [
      { jp: "ご飯を食べました。そして、散歩しました。", reading: "ごはんをたべました。そして、さんぽしました。", de: "Ich habe gegessen. Und dann bin ich spazieren gegangen." },
      { jp: "彼は背が高い。そして、かっこいい。", reading: "かれはせがたかい。そして、かっこいい。", de: "Er ist groß. Und außerdem attraktiv." }
    ]
  },
  {
    id: "b003",
    word: "でも",
    reading: "でも",
    meaning: "aber / jedoch",
    pos: "Konjunktion",
    examples: [
      { jp: "行きたいです。でも、忙しいです。", reading: "いきたいです。でも、いそがしいです。", de: "Ich möchte gehen. Aber ich bin beschäftigt." },
      { jp: "高いです。でも、買います。", reading: "たかいです。でも、かいます。", de: "Es ist teuer. Aber ich kaufe es trotzdem." }
    ]
  },
  {
    id: "b004",
    word: "しかし",
    reading: "しかし",
    meaning: "jedoch / allerdings (formell)",
    pos: "Konjunktion",
    examples: [
      { jp: "彼は来ると言った。しかし、来なかった。", reading: "かれはくるといった。しかし、こなかった。", de: "Er sagte, er kommt. Jedoch kam er nicht." },
      { jp: "天気はいい。しかし、寒い。", reading: "てんきはいい。しかし、さむい。", de: "Das Wetter ist schön. Allerdings ist es kalt." }
    ]
  },
  {
    id: "b005",
    word: "または",
    reading: "または",
    meaning: "oder / beziehungsweise",
    pos: "Konjunktion",
    examples: [
      { jp: "コーヒーまたは紅茶はいかがですか。", reading: "コーヒーまたはこうちゃはいかがですか。", de: "Möchten Sie Kaffee oder Tee?" },
      { jp: "電話またはメールでご連絡ください。", reading: "でんわまたはメールでごれんらくください。", de: "Bitte kontaktieren Sie uns per Telefon oder E-Mail." }
    ]
  },
  {
    id: "b006",
    word: "か",
    reading: "か",
    meaning: "oder (umgangssprachlich zwischen Nomen)",
    pos: "Partikel",
    examples: [
      { jp: "バスか電車で行きます。", reading: "バスかでんしゃでいきます。", de: "Ich fahre mit dem Bus oder der Bahn." },
      { jp: "お茶かジュースを飲みますか。", reading: "おちゃかジュースをのみますか。", de: "Trinken Sie Tee oder Saft?" }
    ]
  },
  {
    id: "b007",
    word: "も",
    reading: "も",
    meaning: "auch / ebenfalls",
    pos: "Partikel",
    examples: [
      { jp: "私も行きます。", reading: "わたしもいきます。", de: "Ich gehe auch." },
      { jp: "これも美味しいです。", reading: "これもおいしいです。", de: "Das ist auch lecker." }
    ]
  },
  {
    id: "b008",
    word: "だけ",
    reading: "だけ",
    meaning: "nur / lediglich",
    pos: "Partikel",
    examples: [
      { jp: "少しだけ食べます。", reading: "すこしだけたべます。", de: "Ich esse nur ein bisschen." },
      { jp: "一人だけ知っています。", reading: "ひとりだけしっています。", de: "Nur eine Person weiß es." }
    ]
  },
  {
    id: "b009",
    word: "まだ",
    reading: "まだ",
    meaning: "noch / noch nicht",
    pos: "Adverb",
    examples: [
      { jp: "まだ食べています。", reading: "まだたべています。", de: "Ich esse noch." },
      { jp: "まだわかりません。", de: "Ich verstehe es noch nicht." }
    ]
  },
  {
    id: "b010",
    word: "もう",
    reading: "もう",
    meaning: "schon / bereits / nicht mehr",
    pos: "Adverb",
    examples: [
      { jp: "もう食べました。", reading: "もうたべました。", de: "Ich habe schon gegessen." },
      { jp: "もう行きません。", reading: "もういきません。", de: "Ich gehe nicht mehr hin." }
    ]
  },
  {
    id: "b011",
    word: "いつも",
    reading: "いつも",
    meaning: "immer / stets / gewöhnlich",
    pos: "Adverb",
    examples: [
      { jp: "いつもここで勉強します。", reading: "いつもここでべんきょうします。", de: "Ich lerne immer hier." },
      { jp: "彼はいつも早いです。", reading: "かれはいつもはやいです。", de: "Er ist immer früh." }
    ]
  },
  {
    id: "b012",
    word: "ときどき",
    reading: "ときどき",
    meaning: "manchmal / gelegentlich",
    pos: "Adverb",
    examples: [
      { jp: "ときどき映画を見ます。", reading: "ときどきえいがをみます。", de: "Ich schaue manchmal Filme." },
      { jp: "ときどき雨が降ります。", reading: "ときどきあめがふります。", de: "Manchmal regnet es." }
    ]
  },
  {
    id: "b013",
    word: "ぜんぜん",
    reading: "ぜんぜん",
    meaning: "überhaupt nicht / gar nicht",
    pos: "Adverb",
    examples: [
      { jp: "ぜんぜんわかりません。", de: "Ich verstehe das überhaupt nicht." },
      { jp: "ぜんぜん疲れていません。", reading: "ぜんぜんつかれていません。", de: "Ich bin gar nicht müde." }
    ]
  },
  {
    id: "b014",
    word: "たぶん",
    reading: "たぶん",
    meaning: "vielleicht / wahrscheinlich",
    pos: "Adverb",
    examples: [
      { jp: "たぶん雨が降ります。", reading: "たぶんあめがふります。", de: "Es wird wahrscheinlich regnen." },
      { jp: "たぶん行けます。", reading: "たぶんいけます。", de: "Ich kann vielleicht kommen." }
    ]
  },
  {
    id: "b015",
    word: "もちろん",
    reading: "もちろん",
    meaning: "natürlich / selbstverständlich",
    pos: "Adverb",
    examples: [
      { jp: "もちろんです！", de: "Natürlich!" },
      { jp: "もちろん手伝います。", reading: "もちろんてつだいます。", de: "Ich helfe natürlich." }
    ]
  },
  {
    id: "b016",
    word: "とても",
    reading: "とても",
    meaning: "sehr / wirklich",
    pos: "Adverb",
    examples: [
      { jp: "とても美味しいです。", reading: "とてもおいしいです。", de: "Es ist sehr lecker." },
      { jp: "とても大切なことです。", reading: "とてもたいせつなことです。", de: "Das ist eine sehr wichtige Sache." }
    ]
  },
  {
    id: "b017",
    word: "だから",
    reading: "だから",
    meaning: "deshalb / deswegen / daher",
    pos: "Konjunktion",
    examples: [
      { jp: "雨です。だから、傘を持ちました。", reading: "あめです。だから、かさをもちました。", de: "Es regnet. Deshalb habe ich einen Schirm mitgenommen." },
      { jp: "疲れています。だから、休みます。", reading: "つかれています。だから、やすみます。", de: "Ich bin müde. Daher mache ich eine Pause." }
    ]
  },
  {
    id: "b018",
    word: "それから",
    reading: "それから",
    meaning: "danach / dann / und dann",
    pos: "Konjunktion",
    examples: [
      { jp: "まずシャワーを浴びます。それから、寝ます。", reading: "まずシャワーをあびます。それから、ねます。", de: "Zuerst dusche ich. Dann gehe ich schlafen." },
      { jp: "駅に行って、それからバスに乗ります。", reading: "えきにいって、それからバスにのります。", de: "Ich gehe zum Bahnhof und nehme dann den Bus." }
    ]
  },
  {
    id: "b019",
    word: "おなじ",
    reading: "おなじ",
    meaning: "das Gleiche / gleich / identisch",
    pos: "Adjektiv (na)",
    examples: [
      { jp: "二人はおなじ学校に通っています。", reading: "ふたりはおなじがっこうにかよっています。", de: "Die beiden gehen auf dieselbe Schule." },
      { jp: "おなじ色のシャツを持っています。", reading: "おなじいろのシャツをもっています。", de: "Ich habe ein Hemd in der gleichen Farbe." }
    ]
  },
  {
    id: "b020",
    word: "ちがう",
    reading: "ちがう",
    meaning: "unterschiedlich / anders / verschieden",
    pos: "Verb (Gruppe 1) / Adjektiv",
    examples: [
      { jp: "私の意見とちがいます。", reading: "わたしのいけんとちがいます。", de: "Das unterscheidet sich von meiner Meinung." },
      { jp: "この二つはちがいます。", reading: "このふたつはちがいます。", de: "Diese beiden sind verschieden." }
    ]
  },
  {
    id: "b021",
    word: "ほんとうに",
    reading: "ほんとうに",
    meaning: "wirklich / tatsächlich / wahrhaftig",
    pos: "Adverb",
    examples: [
      { jp: "ほんとうにありがとうございます。", de: "Vielen herzlichen Dank." },
      { jp: "ほんとうに美しいですね。", reading: "ほんとうにうつくしいですね。", de: "Das ist wirklich schön." }
    ]
  },
  {
    id: "b022",
    word: "いっしょに",
    reading: "いっしょに",
    meaning: "zusammen / gemeinsam",
    pos: "Adverb",
    examples: [
      { jp: "いっしょに行きましょう。", reading: "いっしょにいきましょう。", de: "Lass uns zusammen gehen." },
      { jp: "いっしょに食べませんか。", reading: "いっしょにたべませんか。", de: "Sollen wir zusammen essen?" }
    ]
  },
  {
    id: "b023",
    word: "ひとりで",
    reading: "ひとりで",
    meaning: "allein / selbst / ohne Hilfe",
    pos: "Adverb",
    examples: [
      { jp: "ひとりで旅行しました。", reading: "ひとりでりょこうしました。", de: "Ich habe allein gereist." },
      { jp: "ひとりでできます。", de: "Ich kann es selbst machen." }
    ]
  },
  {
    id: "b024",
    word: "まず",
    reading: "まず",
    meaning: "zunächst / zuerst / als Erstes",
    pos: "Adverb",
    examples: [
      { jp: "まず、名前を書いてください。", reading: "まず、なまえをかいてください。", de: "Schreiben Sie zunächst Ihren Namen." },
      { jp: "まず手を洗います。", reading: "まずてをあらいます。", de: "Zuerst wasche ich meine Hände." }
    ]
  },
  {
    id: "b025",
    word: "じゃあ",
    reading: "じゃあ",
    meaning: "also dann / na dann / gut dann",
    pos: "Konjunktion (umgangssprachlich)",
    examples: [
      { jp: "じゃあ、また明日。", reading: "じゃあ、またあした。", de: "Also dann, bis morgen." },
      { jp: "じゃあ、始めましょうか。", reading: "じゃあ、はじめましょうか。", de: "Na dann, sollen wir anfangen?" }
    ]
  },

  // ── ADJEKTIVE (i-Form) ───────────────────────────────────────────────────

  {
    id: "b026",
    word: "大きい",
    reading: "おおきい",
    meaning: "groß",
    pos: "Adjektiv-i",
    examples: [
      { jp: "この建物はとても大きいです。", reading: "このたてものはとてもおおきいです。", de: "Dieses Gebäude ist sehr groß." },
      { jp: "大きい犬が公園にいます。", reading: "おおきいいぬがこうえんにいます。", de: "Im Park ist ein großer Hund." }
    ]
  },
  {
    id: "b027",
    word: "小さい",
    reading: "ちいさい",
    meaning: "klein",
    pos: "Adjektiv-i",
    examples: [
      { jp: "小さい猫を飼っています。", reading: "ちいさいねこをかっています。", de: "Ich halte eine kleine Katze." },
      { jp: "このケーキは少し小さいですね。", reading: "このケーキはすこしちいさいですね。", de: "Dieses Stück Kuchen ist etwas klein, oder?" }
    ]
  },
  {
    id: "b028",
    word: "いい／良い",
    reading: "いい／よい",
    meaning: "gut / prima / schön",
    pos: "Adjektiv-i",
    examples: [
      { jp: "今日はいい天気ですね。", reading: "きょうはいいてんきですね。", de: "Das Wetter ist heute schön, oder?" },
      { jp: "それはいい考えです。", reading: "それはいいかんがえです。", de: "Das ist eine gute Idee." }
    ]
  },
  {
    id: "b029",
    word: "悪い",
    reading: "わるい",
    meaning: "schlecht / böse",
    pos: "Adjektiv-i",
    examples: [
      { jp: "今日は気分が悪いです。", reading: "きょうはきぶんがわるいです。", de: "Ich fühle mich heute schlecht." },
      { jp: "悪い夢を見ました。", reading: "わるいゆめをみました。", de: "Ich hatte einen schlechten Traum." }
    ]
  },
  {
    id: "b030",
    word: "新しい",
    reading: "あたらしい",
    meaning: "neu",
    pos: "Adjektiv-i",
    examples: [
      { jp: "新しい車を買いました。", reading: "あたらしいくるまをかいました。", de: "Ich habe ein neues Auto gekauft." },
      { jp: "新しい友達ができました。", reading: "あたらしいともだちができました。", de: "Ich habe einen neuen Freund gefunden." }
    ]
  },
  {
    id: "b031",
    word: "古い",
    reading: "ふるい",
    meaning: "alt (Dinge) / veraltet",
    pos: "Adjektiv-i",
    examples: [
      { jp: "古い映画が好きです。", reading: "ふるいえいががすきです。", de: "Ich mag alte Filme." },
      { jp: "この建物はとても古いです。", reading: "このたてものはとてもふるいです。", de: "Dieses Gebäude ist sehr alt." }
    ]
  },
  {
    id: "b032",
    word: "暑い",
    reading: "あつい",
    meaning: "heiß (Wetter / Luft)",
    pos: "Adjektiv-i",
    examples: [
      { jp: "今日は暑いですね。", reading: "きょうはあついですね。", de: "Es ist heute heiß, oder?" },
      { jp: "夏はとても暑いです。", reading: "なつはとてもあついです。", de: "Im Sommer ist es sehr heiß." }
    ]
  },
  {
    id: "b033",
    word: "寒い",
    reading: "さむい",
    meaning: "kalt (Wetter / Raumtemperatur)",
    pos: "Adjektiv-i",
    examples: [
      { jp: "冬はとても寒いです。", reading: "ふゆはとてもさむいです。", de: "Im Winter ist es sehr kalt." },
      { jp: "今日は寒いから、コートを着ます。", reading: "きょうはさむいから、コートをきます。", de: "Heute ist es kalt, daher ziehe ich einen Mantel an." }
    ]
  },
  {
    id: "b034",
    word: "冷たい",
    reading: "つめたい",
    meaning: "kalt (Dinge, Berührung) / herzlos",
    pos: "Adjektiv-i",
    examples: [
      { jp: "冷たい水をください。", reading: "つめたいみずをください。", de: "Geben Sie mir bitte kaltes Wasser." },
      { jp: "手が冷たいですね。", reading: "てがつめたいですね。", de: "Deine Hände sind kalt, oder?" }
    ]
  },
  {
    id: "b035",
    word: "速い／早い",
    reading: "はやい",
    meaning: "schnell / früh",
    pos: "Adjektiv-i",
    examples: [
      { jp: "この電車はとても速いです。", reading: "このでんしゃはとてもはやいです。", de: "Dieser Zug ist sehr schnell." },
      { jp: "今日は早く起きました。", reading: "きょうははやくおきました。", de: "Heute bin ich früh aufgestanden." }
    ]
  },
  {
    id: "b036",
    word: "遅い",
    reading: "おそい",
    meaning: "langsam / spät",
    pos: "Adjektiv-i",
    examples: [
      { jp: "もう遅いから、帰りましょう。", reading: "もうおそいから、かえりましょう。", de: "Es ist schon spät, lass uns nach Hause gehen." },
      { jp: "この電車は少し遅いです。", reading: "このでんしゃはすこしおそいです。", de: "Dieser Zug ist etwas langsam." }
    ]
  },
  {
    id: "b037",
    word: "高い",
    reading: "たかい",
    meaning: "teuer / hoch",
    pos: "Adjektiv-i",
    examples: [
      { jp: "この店は少し高いですね。", reading: "このみせはすこしたかいですね。", de: "Dieses Geschäft ist etwas teuer, oder?" },
      { jp: "あの山はとても高いです。", reading: "あのやまはとてもたかいです。", de: "Jener Berg ist sehr hoch." }
    ]
  },
  {
    id: "b038",
    word: "安い",
    reading: "やすい",
    meaning: "günstig / billig",
    pos: "Adjektiv-i",
    examples: [
      { jp: "このスーパーは安いです。", reading: "このスーパーはやすいです。", de: "Dieser Supermarkt ist günstig." },
      { jp: "安くて美味しいお店を知っています。", reading: "やすくておいしいおみせをしっています。", de: "Ich kenne ein Restaurant, das günstig und lecker ist." }
    ]
  },
  {
    id: "b039",
    word: "面白い",
    reading: "おもしろい",
    meaning: "interessant / lustig / amüsant",
    pos: "Adjektiv-i",
    examples: [
      { jp: "この本はとても面白いです。", reading: "このほんはとてもおもしろいです。", de: "Dieses Buch ist sehr interessant." },
      { jp: "面白い映画を見ました。", reading: "おもしろいえいがをみました。", de: "Ich habe einen amüsanten Film gesehen." }
    ]
  },
  {
    id: "b040",
    word: "つまらない",
    reading: "つまらない",
    meaning: "langweilig / uninteressant",
    pos: "Adjektiv-i",
    examples: [
      { jp: "この授業はつまらないです。", reading: "このじゅぎょうはつまらないです。", de: "Diese Unterrichtsstunde ist langweilig." },
      { jp: "つまらない本は読みません。", reading: "つまらないほんはよみません。", de: "Langweilige Bücher lese ich nicht." }
    ]
  },
  {
    id: "b041",
    word: "美味しい",
    reading: "おいしい",
    meaning: "lecker / köstlich",
    pos: "Adjektiv-i",
    examples: [
      { jp: "このラーメンは美味しいですね！", reading: "このラーメンはおいしいですね！", de: "Diese Ramen ist wirklich lecker!" },
      { jp: "お母さんの料理はいつも美味しいです。", reading: "おかあさんのりょうりはいつもおいしいです。", de: "Das Essen meiner Mutter ist immer köstlich." }
    ]
  },
  {
    id: "b042",
    word: "難しい",
    reading: "むずかしい",
    meaning: "schwierig / kompliziert",
    pos: "Adjektiv-i",
    examples: [
      { jp: "日本語は難しいですが、楽しいです。", reading: "にほんごはむずかしいですが、たのしいです。", de: "Japanisch ist schwierig, aber macht Spaß." },
      { jp: "この問題はとても難しいです。", reading: "このもんだいはとてもむずかしいです。", de: "Dieses Problem ist sehr schwierig." }
    ]
  },
  {
    id: "b043",
    word: "優しい",
    reading: "やさしい",
    meaning: "einfach / sanft / freundlich",
    pos: "Adjektiv-i",
    examples: [
      { jp: "彼はとても優しい人です。", reading: "かれはとてもやさしいひとです。", de: "Er ist ein sehr freundlicher Mensch." },
      { jp: "この問題はやさしいです。", reading: "このもんだいはやさしいです。", de: "Diese Aufgabe ist einfach." }
    ]
  },
  {
    id: "b044",
    word: "若い",
    reading: "わかい",
    meaning: "jung",
    pos: "Adjektiv-i",
    examples: [
      { jp: "彼はまだ若いです。", reading: "かれはまだわかいです。", de: "Er ist noch jung." },
      { jp: "若い頃、よく旅行しました。", reading: "わかいころ、よくりょこうしました。", de: "Als ich jung war, bin ich oft gereist." }
    ]
  },
  {
    id: "b045",
    word: "かわいい",
    reading: "かわいい",
    meaning: "süß / niedlich / entzückend",
    pos: "Adjektiv-i",
    examples: [
      { jp: "かわいい犬ですね！", reading: "かわいいいぬですね！", de: "Was für ein süßer Hund!" },
      { jp: "この服はかわいいと思います。", reading: "このふくはかわいいとおもいます。", de: "Ich finde dieses Kleid niedlich." }
    ]
  },
  {
    id: "b046",
    word: "嬉しい",
    reading: "うれしい",
    meaning: "glücklich / erfreut / froh",
    pos: "Adjektiv-i",
    examples: [
      { jp: "プレゼントをもらって嬉しいです。", reading: "プレゼントをもらってうれしいです。", de: "Ich freue mich, ein Geschenk bekommen zu haben." },
      { jp: "会えて嬉しいです。", reading: "あえてうれしいです。", de: "Ich freue mich, Sie zu treffen." }
    ]
  },

  // ── ADJEKTIVE (na-Form) ──────────────────────────────────────────────────

  {
    id: "b047",
    word: "きれい",
    reading: "きれい",
    meaning: "schön / sauber / ordentlich",
    pos: "Adjektiv-na",
    examples: [
      { jp: "この花はきれいですね。", reading: "このはなはきれいですね。", de: "Diese Blume ist schön, oder?" },
      { jp: "部屋をきれいにしてください。", reading: "へやをきれいにしてください。", de: "Bitte mach das Zimmer sauber." }
    ]
  },
  {
    id: "b048",
    word: "静か",
    reading: "しずか",
    meaning: "ruhig / still / leise",
    pos: "Adjektiv-na",
    examples: [
      { jp: "図書館はとても静かです。", reading: "としょかんはとてもしずかです。", de: "Die Bibliothek ist sehr ruhig." },
      { jp: "静かな場所で勉強したいです。", reading: "しずかなばしょでべんきょうしたいです。", de: "Ich möchte an einem ruhigen Ort lernen." }
    ]
  },
  {
    id: "b049",
    word: "元気",
    reading: "げんき",
    meaning: "gesund / fit / munter",
    pos: "Adjektiv-na",
    examples: [
      { jp: "お元気ですか？", reading: "おげんきですか？", de: "Wie geht es Ihnen?" },
      { jp: "最近あまり元気じゃないです。", reading: "さいきんあまりげんきじゃないです。", de: "Ich bin in letzter Zeit nicht besonders fit." }
    ]
  },
  {
    id: "b050",
    word: "便利",
    reading: "べんり",
    meaning: "praktisch / nützlich / bequem",
    pos: "Adjektiv-na",
    examples: [
      { jp: "このアプリはとても便利です。", reading: "このアプリはとてもべんりです。", de: "Diese App ist sehr praktisch." },
      { jp: "駅の近くは便利ですね。", reading: "えきのちかくはべんりですね。", de: "In der Nähe einer Station ist es praktisch, oder?" }
    ]
  },
  {
    id: "b051",
    word: "簡単",
    reading: "かんたん",
    meaning: "einfach / unkompliziert",
    pos: "Adjektiv-na",
    examples: [
      { jp: "このレシピは簡単です。", reading: "このレシピはかんたんです。", de: "Dieses Rezept ist einfach." },
      { jp: "簡単な質問をしてもいいですか。", reading: "かんたんなしつもんをしてもいいですか。", de: "Darf ich eine einfache Frage stellen?" }
    ]
  },
  {
    id: "b052",
    word: "好き",
    reading: "すき",
    meaning: "mögen / gern haben",
    pos: "Adjektiv-na",
    examples: [
      { jp: "日本語が好きです。", reading: "にほんごがすきです。", de: "Ich mag Japanisch." },
      { jp: "どんな食べ物が好きですか。", reading: "どんなたべものがすきですか。", de: "Was für Essen magst du?" }
    ]
  },
  {
    id: "b053",
    word: "嫌い",
    reading: "きらい",
    meaning: "nicht mögen / hassen",
    pos: "Adjektiv-na",
    examples: [
      { jp: "ゴキブリが嫌いです。", reading: "ゴキブリがきらいです。", de: "Ich mag keine Kakerlaken." },
      { jp: "嫌いな食べ物はありますか。", reading: "きらいなたべものはありますか。", de: "Gibt es Essen, das du nicht magst?" }
    ]
  },
  {
    id: "b054",
    word: "有名",
    reading: "ゆうめい",
    meaning: "berühmt / bekannt",
    pos: "Adjektiv-na",
    examples: [
      { jp: "富士山は世界で有名です。", reading: "ふじさんはせかいでゆうめいです。", de: "Der Fuji ist weltweit berühmt." },
      { jp: "有名な俳優を見ました。", reading: "ゆうめいなはいゆうをみました。", de: "Ich habe einen berühmten Schauspieler gesehen." }
    ]
  },
  {
    id: "b055",
    word: "大切",
    reading: "たいせつ",
    meaning: "wichtig / wertvoll / kostbar",
    pos: "Adjektiv-na",
    examples: [
      { jp: "健康はとても大切です。", reading: "けんこうはとてもたいせつです。", de: "Gesundheit ist sehr wichtig." },
      { jp: "大切なものをなくしました。", reading: "たいせつなものをなくしました。", de: "Ich habe etwas Wichtiges verloren." }
    ]
  },
  {
    id: "b056",
    word: "大丈夫",
    reading: "だいじょうぶ",
    meaning: "okay / in Ordnung / kein Problem",
    pos: "Adjektiv-na",
    examples: [
      { jp: "大丈夫ですか？", reading: "だいじょうぶですか？", de: "Sind Sie okay?" },
      { jp: "大丈夫です、心配しないでください。", reading: "だいじょうぶです、しんぱいしないでください。", de: "Alles okay, machen Sie sich keine Sorgen." }
    ]
  }

];
