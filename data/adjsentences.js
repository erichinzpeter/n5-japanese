// Deck „Adjektive im Satz“: Lückensätze für 〜くて/〜で, 〜く/〜に und 〜くなる/〜になる (siehe compare.js).
// {{Stamm^Endung}} = Lücke: Stufe 1 fragt nur die Endung, Stufe 2 die ganze Form.
// jp und reading tragen dieselben Lücken in derselben Reihenfolge.
const ADJ_SENTENCES = [
  // ===== 〜くて / 〜で (verbinden) =====
  { id: "adj01", pattern: "kute", de: "Dieses Zimmer ist geräumig und hell.", lines: [{ jp: "この部屋は{{広^くて}}明るいです。", reading: "このへやは{{ひろ^くて}}あかるいです。" }] },
  { id: "adj02", pattern: "kute", de: "Dieser Laden ist billig und lecker.", lines: [{ jp: "この店は{{安^くて}}おいしいです。", reading: "このみせは{{やす^くて}}おいしいです。" }] },
  { id: "adj03", pattern: "kute", de: "Osaka ist lebhaft und macht Spaß.", lines: [{ jp: "大阪は{{にぎやか^で}}楽しいです。", reading: "おおさかは{{にぎやか^で}}たのしいです。" }] },
  { id: "adj04", pattern: "kute", de: "Diese Tasche ist leicht und praktisch.", lines: [{ jp: "このかばんは{{軽^くて}}便利です。", reading: "このかばんは{{かる^くて}}べんりです。" }] },
  { id: "adj05", pattern: "kute", de: "Herr Tanaka ist hilfsbereit und ein lustiger Mensch.", lines: [{ jp: "田中さんは{{親切^で}}面白い人です。", reading: "たなかさんは{{しんせつ^で}}おもしろいひとです。" }] },
  { id: "adj06", pattern: "kute", de: "Heute ist es kalt, und der Wind ist stark.", lines: [{ jp: "今日は{{寒^くて}}、風が強いです。", reading: "きょうは{{さむ^くて}}、かぜがつよいです。" }] },
  { id: "adj07", pattern: "kute", de: "Dieser Park ist ruhig und schön.", lines: [{ jp: "この公園は{{静か^で}}きれいです。", reading: "このこうえんは{{しずか^で}}きれいです。" }] },
  { id: "adj08", pattern: "kute", de: "Der Film war lang und langweilig.", lines: [{ jp: "あの映画は{{長^くて}}つまらなかったです。", reading: "あのえいがは{{なが^くて}}つまらなかったです。" }] },
  { id: "adj09", pattern: "kute", de: "Heute ist das Wetter gut, und es ist warm.", lines: [{ jp: "今日は天気が{{よ^くて}}、暖かいです。", reading: "きょうはてんきが{{よ^くて}}、あたたかいです。" }] },
  { id: "adj10", pattern: "kute", de: "Frau Yamada ist Ärztin und sehr beschäftigt.", lines: [{ jp: "山田さんは{{医者^で}}、とても忙しいです。", reading: "やまださんは{{いしゃ^で}}、とてもいそがしいです。" }] },
  { id: "adj11", pattern: "kute", de: "Mein älterer Bruder ist groß und nett.", lines: [{ jp: "兄は背が{{高^くて}}、優しいです。", reading: "あにはせが{{たか^くて}}、やさしいです。" }] },
  { id: "adj12", pattern: "kute", de: "Dieser Apfel ist groß und süß.", lines: [{ jp: "このりんごは{{大き^くて}}甘いです。", reading: "このりんごは{{おおき^くて}}あまいです。" }] },
  { id: "adj13", pattern: "kute", de: "Diese Stadt ist berühmt, und es gibt viele Leute.", lines: [{ jp: "この町は{{有名^で}}、人が多いです。", reading: "このまちは{{ゆうめい^で}}、ひとがおおいです。" }] },
  { id: "adj14", pattern: "kute", de: "Kanji sind schwierig und interessant.", lines: [{ jp: "漢字は{{難し^くて}}面白いです。", reading: "かんじは{{むずかし^くて}}おもしろいです。" }] },

  // ===== 〜く / 〜に (Adverb vor einem Verb) =====
  { id: "adj15", pattern: "adverb", de: "Bitte schreiben Sie den Namen groß.", lines: [{ jp: "名前を{{大き^く}}書いてください。", reading: "なまえを{{おおき^く}}かいてください。" }] },
  { id: "adj16", pattern: "adverb", de: "Ich stehe jeden Morgen früh auf.", lines: [{ jp: "毎朝{{早^く}}起きます。", reading: "まいあさ{{はや^く}}おきます。" }] },
  { id: "adj17", pattern: "adverb", de: "Bitte seien Sie in der Bibliothek leise.", lines: [{ jp: "図書館では{{静か^に}}してください。", reading: "としょかんでは{{しずか^に}}してください。" }] },
  { id: "adj18", pattern: "adverb", de: "Ich habe das Zimmer sauber geputzt.", lines: [{ jp: "部屋を{{きれい^に}}掃除しました。", reading: "へやを{{きれい^に}}そうじしました。" }] },
  { id: "adj19", pattern: "adverb", de: "Meine Mutter kocht geschickt.", lines: [{ jp: "母は料理を{{上手^に}}作ります。", reading: "はははりょうりを{{じょうず^に}}つくります。" }] },
  { id: "adj20", pattern: "adverb", de: "Wir haben alle zusammen fröhlich gesungen.", lines: [{ jp: "みんなで{{楽し^く}}歌いました。", reading: "みんなで{{たのし^く}}うたいました。" }] },
  { id: "adj21", pattern: "adverb", de: "Die Kinder spielen munter.", lines: [{ jp: "子供が{{元気^に}}遊んでいます。", reading: "こどもが{{げんき^に}}あそんでいます。" }] },
  { id: "adj22", pattern: "adverb", de: "Ich schneide das Gemüse klein.", lines: [{ jp: "野菜を{{小さ^く}}切ります。", reading: "やさいを{{ちいさ^く}}きります。" }] },
  { id: "adj23", pattern: "adverb", de: "Die Lehrerin unterrichtet sanft und lieb.", lines: [{ jp: "先生は{{優し^く}}教えます。", reading: "せんせいは{{やさし^く}}おしえます。" }] },
  { id: "adj24", pattern: "adverb", de: "Abends gehe ich spät schlafen.", lines: [{ jp: "夜は{{遅^く}}寝ます。", reading: "よるは{{おそ^く}}ねます。" }] },
  { id: "adj25", pattern: "adverb", de: "Ich habe das Zimmer warm gemacht (geheizt).", lines: [{ jp: "部屋を{{暖か^く}}しました。", reading: "へやを{{あたたか^く}}しました。" }] },
  { id: "adj26", pattern: "adverb", de: "Lass uns die Hände sauber waschen.", lines: [{ jp: "手を{{きれい^に}}洗いましょう。", reading: "てを{{きれい^に}}あらいましょう。" }] },
  { id: "adj27", pattern: "adverb", de: "Bitte fest drücken.", lines: [{ jp: "{{強^く}}押してください。", reading: "{{つよ^く}}おしてください。" }] },

  // ===== 〜くなる / 〜になる (werden) =====
  { id: "adj28", pattern: "naru", de: "Es ist allmählich kalt geworden.", lines: [{ jp: "だんだん{{寒^く}}なりました。", reading: "だんだん{{さむ^く}}なりました。" }] },
  { id: "adj29", pattern: "naru", de: "Die Stadt ist sauber geworden.", lines: [{ jp: "町が{{きれい^に}}なりました。", reading: "まちが{{きれい^に}}なりました。" }] },
  { id: "adj30", pattern: "naru", de: "Der Himmel ist dunkel geworden.", lines: [{ jp: "空が{{暗^く}}なりました。", reading: "そらが{{くら^く}}なりました。" }] },
  { id: "adj31", pattern: "naru", de: "Mein jüngerer Bruder ist Arzt geworden.", lines: [{ jp: "弟は{{医者^に}}なりました。", reading: "おとうとは{{いしゃ^に}}なりました。" }] },
  { id: "adj32", pattern: "naru", de: "Ich bin in Japanisch geschickter geworden.", lines: [{ jp: "日本語が{{上手^に}}なりました。", reading: "にほんごが{{じょうず^に}}なりました。" }] },
  { id: "adj33", pattern: "naru", de: "Das Zimmer ist hell geworden.", lines: [{ jp: "部屋が{{明る^く}}なりました。", reading: "へやが{{あかる^く}}なりました。" }] },
  { id: "adj34", pattern: "naru", de: "Das Kind ist groß geworden.", lines: [{ jp: "子供は{{大き^く}}なりました。", reading: "こどもは{{おおき^く}}なりました。" }] },
  { id: "adj35", pattern: "naru", de: "Ich habe Medizin genommen und bin wieder fit geworden.", lines: [{ jp: "薬を飲んで、{{元気^に}}なりました。", reading: "くすりをのんで、{{げんき^に}}なりました。" }] },
  { id: "adj36", pattern: "naru", de: "Es ist schon Nacht geworden.", lines: [{ jp: "もう{{夜^に}}なりました。", reading: "もう{{よる^に}}なりました。" }] },
  { id: "adj37", pattern: "naru", de: "Äpfel sind teuer geworden.", lines: [{ jp: "りんごが{{高^く}}なりました。", reading: "りんごが{{たか^く}}なりました。" }] },
  { id: "adj38", pattern: "naru", de: "Diese Stadt ist berühmt geworden.", lines: [{ jp: "この町は{{有名^に}}なりました。", reading: "このまちは{{ゆうめい^に}}なりました。" }] },
  { id: "adj39", pattern: "naru", de: "Nächstes Jahr werde ich Student an der Uni.", lines: [{ jp: "来年、{{大学生^に}}なります。", reading: "らいねん、{{だいがくせい^に}}なります。" }] },
  { id: "adj40", pattern: "naru", de: "Das Wetter ist gut geworden.", lines: [{ jp: "天気が{{よ^く}}なりました。", reading: "てんきが{{よ^く}}なりました。" }] },
];

if (typeof module !== 'undefined' && module.exports) module.exports = ADJ_SENTENCES;
