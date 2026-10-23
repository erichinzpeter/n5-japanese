// Deck „Verben im Satz“: Lückensätze für Muster, die auf て-, た-, ない- oder Wörterbuchform
// aufbauen (siehe compare.js). {…} = Muster-Lücke (beide Stufen), {{…}} = Verbform (nur Stufe 2),
// {{Stamm^Endung}} = Stufe 1 fragt die Endung, Stufe 2 die ganze Form.
// jp und reading tragen dieselben Lücken in derselben Reihenfolge.
const VERB_SENTENCES = [
  // ===== 〜たほうがいい / 〜ないほうがいい (Rat) =====
  { id: "verb01", pattern: "hougaii", de: "Du solltest lieber Medizin nehmen.", lines: [{ jp: "薬を{{飲んだ}}{ほうがいい}です。", reading: "くすりを{{のんだ}}{ほうがいい}です。" }] },
  { id: "verb02", pattern: "hougaii", de: "Du solltest lieber früh schlafen gehen.", lines: [{ jp: "早く{{寝た}}{ほうがいい}ですよ。", reading: "はやく{{ねた}}{ほうがいい}ですよ。" }] },
  { id: "verb03", pattern: "hougaii", de: "Du solltest dich lieber ein bisschen ausruhen.", lines: [{ jp: "少し{{休んだ}}{ほうがいい}です。", reading: "すこし{{やすんだ}}{ほうがいい}です。" }] },
  { id: "verb04", pattern: "hougaii", de: "Du solltest lieber einen Schirm mitnehmen.", lines: [{ jp: "傘を{{持っていった|持って行った}}{ほうがいい}ですよ。", reading: "かさを{{もっていった|もっていった}}{ほうがいい}ですよ。" }] },
  { id: "verb05", pattern: "hougaii", de: "Du solltest lieber viel Gemüse essen.", lines: [{ jp: "野菜をたくさん{{食べた}}{ほうがいい}です。", reading: "やさいをたくさん{{たべた}}{ほうがいい}です。" }] },
  { id: "verb06", pattern: "hougaii", de: "Du solltest lieber keinen Kaffee trinken.", lines: [{ jp: "コーヒーを{{飲まない}}{ほうがいい}です。", reading: "コーヒーを{{のまない}}{ほうがいい}です。" }] },
  { id: "verb07", pattern: "hougaii", de: "Heute solltest du lieber nicht ausgehen.", lines: [{ jp: "今日は{{出かけない}}{ほうがいい}ですよ。", reading: "きょうは{{でかけない}}{ほうがいい}ですよ。" }] },
  { id: "verb08", pattern: "hougaii", de: "Du solltest lieber nicht rauchen.", lines: [{ jp: "タバコを{{吸わない}}{ほうがいい}です。", reading: "タバコを{{すわない}}{ほうがいい}です。" }] },
  { id: "verb09", pattern: "hougaii", de: "Abends solltest du lieber nichts Süßes essen.", lines: [{ jp: "夜は甘いものを{{食べない}}{ほうがいい}です。", reading: "よるはあまいものを{{たべない}}{ほうがいい}です。" }] },
  { id: "verb10", pattern: "hougaii", de: "Wenn du Fieber hast, solltest du lieber nicht duschen.", lines: [{ jp: "熱があるときは、シャワーを{{浴びない}}{ほうがいい}です。", reading: "ねつがあるときは、シャワーを{{あびない}}{ほうがいい}です。" }] },

  // ===== 〜たことがあります (Erfahrung) =====
  { id: "verb11", pattern: "koto", de: "Warst du schon einmal in Japan?", lines: [{ jp: "日本へ{{行った}}{ことがあります}か。", reading: "にほんへ{{いった}}{ことがあります}か。" }] },
  { id: "verb12", pattern: "koto", de: "Ich habe schon einmal japanisches Essen gegessen.", lines: [{ jp: "日本の料理を{{食べた}}{ことがあります}。", reading: "にほんのりょうりを{{たべた}}{ことがあります}。" }] },
  { id: "verb13", pattern: "koto", de: "Ich habe schon einmal einen japanischen Film gesehen.", lines: [{ jp: "日本の映画を{{見た}}{ことがあります}。", reading: "にほんのえいがを{{みた}}{ことがあります}。" }] },
  { id: "verb14", pattern: "koto", de: "Ich bin noch nie mit dem Flugzeug gereist.", lines: [{ jp: "一度も飛行機に{{乗った}}{ことがありません}。", reading: "いちどもひこうきに{{のった}}{ことがありません}。" }] },
  { id: "verb15", pattern: "koto", de: "Ich habe schon einmal einen Brief auf Japanisch geschrieben.", lines: [{ jp: "日本語で手紙を{{書いた}}{ことがあります}。", reading: "にほんごでてがみを{{かいた}}{ことがあります}。" }] },
  { id: "verb16", pattern: "koto", de: "Diese Person habe ich noch nie getroffen.", lines: [{ jp: "その人に{{会った}}{ことがありません}。", reading: "そのひとに{{あった}}{ことがありません}。" }] },

  // ===== 〜たり〜たりします (Aufzählung) =====
  { id: "verb17", pattern: "tari", de: "Sonntags putze ich das Zimmer, koche und so weiter.", lines: [{ jp: "日曜日は部屋を掃除{{し^たり}}、料理{{し^たり}}します。", reading: "にちようびはへやをそうじ{{し^たり}}、りょうり{{し^たり}}します。" }] },
  { id: "verb18", pattern: "tari", de: "Am Wochenende sehe ich Filme, gehe einkaufen und so weiter.", lines: [{ jp: "週末は映画を{{見^たり}}、買い物を{{し^たり}}します。", reading: "しゅうまつはえいがを{{み^たり}}、かいものを{{し^たり}}します。" }] },
  { id: "verb19", pattern: "tari", de: "An freien Tagen lese ich Bücher, höre Musik und so weiter.", lines: [{ jp: "休みの日は本を{{読^んだり}}、音楽を{{聞^いたり}}します。", reading: "やすみのひはほんを{{よ^んだり}}、おんがくを{{き^いたり}}します。" }] },
  { id: "verb20", pattern: "tari", de: "Auf der Party haben wir gesungen, getrunken und so weiter.", lines: [{ jp: "パーティーで{{歌^ったり}}、{{飲^んだり}}しました。", reading: "パーティーで{{うた^ったり}}、{{の^んだり}}しました。" }] },
  { id: "verb21", pattern: "tari", de: "Im Park sind wir gerannt, haben gespielt und so weiter.", lines: [{ jp: "公園で{{走^ったり}}、{{遊^んだり}}しました。", reading: "こうえんで{{はし^ったり}}、{{あそ^んだり}}しました。" }] },

  // ===== 〜たばかりです (gerade eben) =====
  { id: "verb22", pattern: "bakari", de: "Ich bin gerade eben aufgestanden.", lines: [{ jp: "今{{起きた}}{ばかり}です。", reading: "いま{{おきた}}{ばかり}です。" }] },
  { id: "verb23", pattern: "bakari", de: "Ich habe gerade eben gegessen.", lines: [{ jp: "さっきご飯を{{食べた}}{ばかり}です。", reading: "さっきごはんを{{たべた}}{ばかり}です。" }] },
  { id: "verb24", pattern: "bakari", de: "Ich bin gerade erst nach Japan gekommen.", lines: [{ jp: "日本に{{来た}}{ばかり}です。", reading: "にほんに{{きた}}{ばかり}です。" }] },
  { id: "verb25", pattern: "bakari", de: "Dieses Auto habe ich erst letzten Monat gekauft.", lines: [{ jp: "この車は先月{{買った}}{ばかり}です。", reading: "このくるまはせんげつ{{かった}}{ばかり}です。" }] },

  // ===== 前に / てから / 後で (Reihenfolge) =====
  { id: "verb26", pattern: "order", de: "Bevor ich schlafen gehe, putze ich mir die Zähne.", lines: [{ jp: "{{寝る}}{前に}、歯を磨きます。", reading: "{{ねる}}{まえに}、はをみがきます。" }] },
  { id: "verb27", pattern: "order", de: "Bevor ich esse, wasche ich mir die Hände.", lines: [{ jp: "ご飯を{{食べる}}{前に}、手を洗います。", reading: "ごはんを{{たべる}}{まえに}、てをあらいます。" }] },
  { id: "verb28", pattern: "order", de: "Ich mache erst die Hausaufgaben, dann spiele ich.", lines: [{ jp: "宿題を{{して}}{から}、遊びます。", reading: "しゅくだいを{{して}}{から}、あそびます。" }] },
  { id: "verb29", pattern: "order", de: "Ich dusche erst und gehe dann aus dem Haus.", lines: [{ jp: "シャワーを{{浴びて}}{から}、出かけます。", reading: "シャワーを{{あびて}}{から}、でかけます。" }] },
  { id: "verb30", pattern: "order", de: "Lass uns etwas trinken gehen, nachdem die Arbeit zu Ende ist.", lines: [{ jp: "仕事が{{終わった}}{後で}、飲みに行きましょう。", reading: "しごとが{{おわった}}{あとで}、のみにいきましょう。" }] },
  { id: "verb31", pattern: "order", de: "Nachdem wir den Film gesehen hatten, haben wir gegessen.", lines: [{ jp: "映画を{{見た}}{後で}、ご飯を食べました。", reading: "えいがを{{みた}}{あとで}、ごはんをたべました。" }] },

  // ===== 〜ています (gerade dabei / Zustand) =====
  { id: "verb32", pattern: "teiru", de: "Ich lese gerade ein Buch.", lines: [{ jp: "今、本を{{読んで}}{います}。", reading: "いま、ほんを{{よんで}}{います}。" }] },
  { id: "verb33", pattern: "teiru", de: "Meine Mutter kocht gerade.", lines: [{ jp: "母は今、料理を{{して}}{います}。", reading: "はははいま、りょうりを{{して}}{います}。" }] },
  { id: "verb34", pattern: "teiru", de: "Mein jüngerer Bruder schläft gerade in seinem Zimmer.", lines: [{ jp: "弟は部屋で{{寝て}}{います}。", reading: "おとうとはへやで{{ねて}}{います}。" }] },
  { id: "verb35", pattern: "teiru", de: "Die Kinder spielen gerade im Park.", lines: [{ jp: "子供が公園で{{遊んで}}{います}。", reading: "こどもがこうえんで{{あそんで}}{います}。" }] },
  { id: "verb36", pattern: "teiru", de: "Meine ältere Schwester arbeitet bei einer Bank.", lines: [{ jp: "姉は銀行で{{働いて}}{います}。", reading: "あねはぎんこうで{{はたらいて}}{います}。" }] },
  { id: "verb37", pattern: "teiru", de: "Herr Tanaka wohnt in Tokio.", lines: [{ jp: "田中さんは東京に{{住んで}}{います}。", reading: "たなかさんはとうきょうに{{すんで}}{います}。" }] },

  // ===== 〜てもいいです / 〜てはいけません (Erlaubnis / Verbot) =====
  { id: "verb38", pattern: "temoii", de: "Darf ich hier Fotos machen?", lines: [{ jp: "ここで写真を{{撮って}}{もいいですか}。", reading: "ここでしゃしんを{{とって}}{もいいですか}。" }] },
  { id: "verb39", pattern: "temoii", de: "Darf ich das Fenster öffnen?", lines: [{ jp: "窓を{{開けて}}{もいいですか}。", reading: "まどを{{あけて}}{もいいですか}。" }] },
  { id: "verb40", pattern: "temoii", de: "Darf ich mir dieses Buch ausleihen?", lines: [{ jp: "この本を{{借りて}}{もいいですか}。", reading: "このほんを{{かりて}}{もいいですか}。" }] },
  { id: "verb41", pattern: "temoii", de: "Du darfst jetzt nach Hause gehen.", lines: [{ jp: "もう{{帰って}}{もいいです}よ。", reading: "もう{{かえって}}{もいいです}よ。" }] },
  { id: "verb42", pattern: "temoii", de: "Hier darf man nicht rauchen.", lines: [{ jp: "ここでタバコを{{吸って}}{はいけません}。", reading: "ここでタバコを{{すって}}{はいけません}。" }] },
  { id: "verb43", pattern: "temoii", de: "Im Klassenzimmer darf man nicht essen.", lines: [{ jp: "教室で{{食べて}}{はいけません}。", reading: "きょうしつで{{たべて}}{はいけません}。" }] },
  { id: "verb44", pattern: "temoii", de: "In diesem Fluss darf man nicht schwimmen.", lines: [{ jp: "この川で{{泳いで}}{はいけません}。", reading: "このかわで{{およいで}}{はいけません}。" }] },

  // ===== 〜ないでください (Bitte nicht) =====
  { id: "verb45", pattern: "naide", de: "Bitte machen Sie hier keine Fotos.", lines: [{ jp: "ここで写真を{{撮らない}}{でください}。", reading: "ここでしゃしんを{{とらない}}{でください}。" }] },
  { id: "verb46", pattern: "naide", de: "Bitte schalten Sie das Licht nicht aus.", lines: [{ jp: "電気を{{消さない}}{でください}。", reading: "でんきを{{けさない}}{でください}。" }] },
  { id: "verb47", pattern: "naide", de: "Bitte unterhalten Sie sich in der Bibliothek nicht.", lines: [{ jp: "図書館で{{話さない}}{でください}。", reading: "としょかんで{{はなさない}}{でください}。" }] },
  { id: "verb48", pattern: "naide", de: "Bitte betreten Sie dieses Zimmer nicht.", lines: [{ jp: "この部屋に{{入らない}}{でください}。", reading: "このへやに{{はいらない}}{でください}。" }] },
  { id: "verb49", pattern: "naide", de: "Bitte öffnen Sie das Fenster nicht.", lines: [{ jp: "窓を{{開けない}}{でください}。", reading: "まどを{{あけない}}{でください}。" }] },
  { id: "verb50", pattern: "naide", de: "Bitte vergessen Sie die Hausaufgaben nicht.", lines: [{ jp: "宿題を{{忘れない}}{でください}。", reading: "しゅくだいを{{わすれない}}{でください}。" }] },
  // ===== Kleidung: 着る / はく / かぶる / かける (+ 脱ぐ) =====
  { id: "verb51", pattern: "kleidung", de: "Weil es kalt ist, ziehe ich einen Pullover an.", lines: [{ jp: "寒いので、{{セーター}}を{着ます}。", reading: "さむいので、{{セーター}}を{きます}。" }] },
  { id: "verb52", pattern: "kleidung", de: "Bitte ziehen Sie einen Mantel an.", lines: [{ jp: "{{コート}}を{着て}ください。", reading: "{{コート}}を{きて}ください。" }] },
  { id: "verb53", pattern: "kleidung", de: "Herr Tanaka trägt ein weißes Hemd.", lines: [{ jp: "田中さんは白い{{シャツ}}を{着て}います。", reading: "たなかさんはしろい{{シャツ}}を{きて}います。" }] },
  { id: "verb54", pattern: "kleidung", de: "Ich habe die neuen Schuhe angezogen.", lines: [{ jp: "新しい{{靴}}を{はきました|履きました}。", reading: "あたらしい{{くつ}}を{はきました|はきました}。" }] },
  { id: "verb55", pattern: "kleidung", de: "Meine jüngere Schwester trägt einen roten Rock.", lines: [{ jp: "妹は赤い{{スカート}}を{はいて|履いて}います。", reading: "いもうとはあかい{{スカート}}を{はいて|はいて}います。" }] },
  { id: "verb56", pattern: "kleidung", de: "Morgens ziehe ich eine Hose an.", lines: [{ jp: "朝、{{ズボン}}を{はきます|履きます}。", reading: "あさ、{{ズボン}}を{はきます|はきます}。" }] },
  { id: "verb57", pattern: "kleidung", de: "Im Sommer setze ich einen Hut auf.", lines: [{ jp: "夏は{{帽子}}を{かぶります}。", reading: "なつは{{ぼうし}}を{かぶります}。" }] },
  { id: "verb58", pattern: "kleidung", de: "Die Person, die den Hut trägt, ist Frau Yamada.", lines: [{ jp: "{{帽子}}を{かぶって}いる人は山田さんです。", reading: "{{ぼうし}}を{かぶって}いるひとはやまださんです。" }] },
  { id: "verb59", pattern: "kleidung", de: "Beim Lesen setze ich eine Brille auf.", lines: [{ jp: "本を読むときは、{{眼鏡}}を{かけます}。", reading: "ほんをよむときは、{{めがね}}を{かけます}。" }] },
  { id: "verb60", pattern: "kleidung", de: "Mein Vater trägt eine Brille.", lines: [{ jp: "父は{{眼鏡}}を{かけて}います。", reading: "ちちは{{めがね}}を{かけて}います。" }] },
  { id: "verb61", pattern: "kleidung", de: "Sie trägt eine schwarze Hose und ein blaues Hemd.", lines: [{ jp: "黒い{{ズボン}}を{はいて|履いて}、青い{{シャツ}}を{着て}います。", reading: "くろい{{ズボン}}を{はいて|はいて}、あおい{{シャツ}}を{きて}います。" }] },
  { id: "verb62", pattern: "kleidung", de: "Wenn man das Haus betritt, zieht man die Schuhe aus.", lines: [{ jp: "家に入るときは、{{靴}}を{脱ぎます}。", reading: "いえにはいるときは、{{くつ}}を{ぬぎます}。" }] },
];

if (typeof module !== 'undefined' && module.exports) module.exports = VERB_SENTENCES;
