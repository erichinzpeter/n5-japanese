// Vergleiche-Deck: Lückensätze für より / のほうが, 一番 und どちら (siehe compare.js).
// {…} = Muster-Lücke, {{…}} = Adjektiv-Lücke (Grundform, nur Stufe 2), | = gleichwertige Antwort.
// jp und reading tragen dieselben Lücken in derselben Reihenfolge.
const COMPARISONS = [
  // ===== より / のほうが =====
  { id: "cmp01", pattern: "yori", de: "Der Zug ist schneller als der Bus.", lines: [{ jp: "電車はバス{より}{{速い}}です。", reading: "でんしゃはバス{より}{{はやい}}です。" }] },
  { id: "cmp02", pattern: "yori", de: "Heute ist es kälter als gestern.", lines: [{ jp: "今日は昨日{より}{{寒い}}です。", reading: "きょうはきのう{より}{{さむい}}です。" }] },
  { id: "cmp03", pattern: "yori", de: "Tokio ist größer als Osaka.", lines: [{ jp: "東京は大阪{より}{{大きい|広い}}です。", reading: "とうきょうはおおさか{より}{{おおきい|ひろい}}です。" }] },
  { id: "cmp04", pattern: "yori", de: "Dieser Laden ist billiger als der dort drüben.", lines: [{ jp: "この店はあの店{より}{{安い}}です。", reading: "このみせはあのみせ{より}{{やすい}}です。" }] },
  { id: "cmp05", pattern: "yori", de: "Mein älterer Bruder ist größer als ich.", lines: [{ jp: "兄は私{より}背が{{高い}}です。", reading: "あにはわたし{より}せが{{たかい}}です。" }] },
  { id: "cmp06", pattern: "yori", de: "Japanisch ist schwieriger als Englisch.", lines: [{ jp: "日本語は英語{より}{{難しい}}です。", reading: "にほんごはえいご{より}{{むずかしい}}です。" }] },
  { id: "cmp07", pattern: "yori", de: "Der Sommer ist heißer als der Winter.", lines: [{ jp: "夏は冬{より}{{暑い}}です。", reading: "なつはふゆ{より}{{あつい}}です。" }] },
  { id: "cmp08", pattern: "yori", de: "Diese Tasche ist schwerer als die dort drüben.", lines: [{ jp: "このかばんはあのかばん{より}{{重い}}です。", reading: "このかばんはあのかばん{より}{{おもい}}です。" }] },
  { id: "cmp09", pattern: "yori", de: "Ich mag Tee lieber als Kaffee.", lines: [{ jp: "コーヒー{より}お茶{のほうが}{{好き}}です。", reading: "コーヒー{より}おちゃ{のほうが}{{すき}}です。" }] },
  { id: "cmp10", pattern: "yori", de: "Der Zug ist praktischer als der Bus.", lines: [{ jp: "バス{より}電車{のほうが}{{便利}}です。", reading: "バス{より}でんしゃ{のほうが}{{べんり}}です。" }] },
  { id: "cmp11", pattern: "yori", de: "Ich mag Fisch lieber als Fleisch.", lines: [{ jp: "肉{より}魚{のほうが}{{好き}}です。", reading: "にく{より}さかな{のほうが}{{すき}}です。" }] },
  { id: "cmp12", pattern: "yori", de: "Das Zimmer dort ist geräumiger als dieses.", lines: [{ jp: "この部屋{より}あの部屋{のほうが}{{広い}}です。", reading: "このへや{より}あのへや{のほうが}{{ひろい}}です。" }] },
  { id: "cmp13", pattern: "yori", de: "Im Herbst ist es kühler als im Frühling.", lines: [{ jp: "春{より}秋{のほうが}{{涼しい}}です。", reading: "はる{より}あき{のほうが}{{すずしい}}です。" }] },
  { id: "cmp14", pattern: "yori", de: "Das Auto ist schneller als das Fahrrad.", lines: [{ jp: "自転車{より}車{のほうが}{{速い}}です。", reading: "じてんしゃ{より}くるま{のほうが}{{はやい}}です。" }] },
  { id: "cmp15", pattern: "yori", de: "Kanji sind schwieriger als Hiragana.", lines: [{ jp: "ひらがな{より}漢字{のほうが}{{難しい}}です。", reading: "ひらがな{より}かんじ{のほうが}{{むずかしい}}です。" }] },

  // ===== 一番 =====
  { id: "cmp16", pattern: "ichiban", de: "Von allen Früchten mag ich Äpfel am liebsten.", lines: [{ jp: "果物{の中で}りんごが{一番}{{好き}}です。", reading: "くだもの{のなかで}りんごが{いちばん}{{すき}}です。" }] },
  { id: "cmp17", pattern: "ichiban", de: "In meiner Familie ist mein Vater am größten.", lines: [{ jp: "家族{の中で}父が{一番}背が{{高い}}です。", reading: "かぞく{のなかで}ちちが{いちばん}せが{{たかい}}です。" }] },
  { id: "cmp18", pattern: "ichiban", de: "In der Klasse ist Herr Tanaka am jüngsten.", lines: [{ jp: "クラス{の中で}田中さんが{一番}{{若い}}です。", reading: "クラス{のなかで}たなかさんが{いちばん}{{わかい}}です。" }] },
  { id: "cmp19", pattern: "ichiban", de: "Im ganzen Jahr ist der August am heißesten.", lines: [{ jp: "一年{の中で}八月が{一番}{{暑い}}です。", reading: "いちねん{のなかで}はちがつが{いちばん}{{あつい}}です。" }] },
  { id: "cmp20", pattern: "ichiban", de: "Von diesen dreien ist das hier am billigsten.", lines: [{ jp: "この三つ{の中で}これが{一番}{{安い}}です。", reading: "このみっつ{のなかで}これが{いちばん}{{やすい}}です。" }] },
  { id: "cmp21", pattern: "ichiban", de: "Von allen Sportarten mag ich Tennis am liebsten.", lines: [{ jp: "スポーツ{の中で}テニスが{一番}{{好き}}です。", reading: "スポーツ{のなかで}テニスが{いちばん}{{すき}}です。" }] },
  { id: "cmp22", pattern: "ichiban", de: "Tokio ist die größte Stadt Japans.", lines: [{ jp: "東京は日本で{一番}{{大きい|広い}}町です。", reading: "とうきょうはにほんで{いちばん}{{おおきい|ひろい}}まちです。" }] },
  { id: "cmp23", pattern: "ichiban", de: "Am Tag habe ich morgens am meisten zu tun.", lines: [{ jp: "一日{の中で}朝が{一番}{{忙しい}}です。", reading: "いちにち{のなかで}あさが{いちばん}{{いそがしい}}です。" }] },
  { id: "cmp24", pattern: "ichiban", de: "Der Berg dort ist der höchste in Japan.", lines: [{ jp: "あの山は日本で{一番}{{高い}}山です。", reading: "あのやまはにほんで{いちばん}{{たかい}}やまです。" }] },
  { id: "cmp25", pattern: "ichiban", de: "In der Klasse spricht Frau Yamada am besten Japanisch.", lines: [{ jp: "クラス{の中で}山田さんが{一番}日本語が{{上手}}です。", reading: "クラス{のなかで}やまださんが{いちばん}にほんごが{{じょうず}}です。" }] },
  { id: "cmp26", pattern: "ichiban", de: "In dieser Stadt ist dieser Park am ruhigsten.", lines: [{ jp: "この町{の中で}この公園が{一番}{{静か}}です。", reading: "このまち{のなかで}このこうえんが{いちばん}{{しずか}}です。" }] },
  { id: "cmp27", pattern: "ichiban", de: "Von allen Getränken mag ich Tee am liebsten.", lines: [{ jp: "飲み物{の中で}お茶が{一番}{{好き}}です。", reading: "のみもの{のなかで}おちゃが{いちばん}{{すき}}です。" }] },

  // ===== どちら =====
  { id: "cmp28", pattern: "dochira", de: "A: Bus oder Zug – was ist schneller? B: Der Zug ist schneller.", lines: [
    { jp: "A: バスと電車、{どちら|どっち}が{{速い}}ですか。", reading: "A: バスとでんしゃ、{どちら|どっち}が{{はやい}}ですか。" },
    { jp: "B: 電車{のほうが}{{速い}}です。", reading: "B: でんしゃ{のほうが}{{はやい}}です。" }] },
  { id: "cmp29", pattern: "dochira", de: "A: Kaffee oder schwarzer Tee – was magst du lieber? B: Lieber schwarzen Tee.", lines: [
    { jp: "A: コーヒーと紅茶、{どちら|どっち}が{{好き}}ですか。", reading: "A: コーヒーとこうちゃ、{どちら|どっち}が{{すき}}ですか。" },
    { jp: "B: 紅茶{のほうが}{{好き}}です。", reading: "B: こうちゃ{のほうが}{{すき}}です。" }] },
  { id: "cmp30", pattern: "dochira", de: "A: Tokio oder Osaka – was ist größer? B: Tokio ist größer.", lines: [
    { jp: "A: 東京と大阪、{どちら|どっち}が{{大きい|広い}}ですか。", reading: "A: とうきょうとおおさか、{どちら|どっち}が{{おおきい|ひろい}}ですか。" },
    { jp: "B: 東京{のほうが}{{大きい|広い}}です。", reading: "B: とうきょう{のほうが}{{おおきい|ひろい}}です。" }] },
  { id: "cmp31", pattern: "dochira", de: "A: Sommer oder Winter – was magst du lieber? B: Lieber den Winter.", lines: [
    { jp: "A: 夏と冬、{どちら|どっち}が{{好き}}ですか。", reading: "A: なつとふゆ、{どちら|どっち}が{{すき}}ですか。" },
    { jp: "B: 冬{のほうが}{{好き}}です。", reading: "B: ふゆ{のほうが}{{すき}}です。" }] },
  { id: "cmp32", pattern: "dochira", de: "A: Dieses Buch oder das dort – welches ist interessanter? B: Dieses.", lines: [
    { jp: "A: この本とあの本、{どちら|どっち}が{{面白い}}ですか。", reading: "A: このほんとあのほん、{どちら|どっち}が{{おもしろい}}ですか。" },
    { jp: "B: この本{のほうが}{{面白い}}です。", reading: "B: このほん{のほうが}{{おもしろい}}です。" }] },
  { id: "cmp33", pattern: "dochira", de: "A: Englisch oder Japanisch – was ist schwieriger? B: Japanisch.", lines: [
    { jp: "A: 英語と日本語、{どちら|どっち}が{{難しい}}ですか。", reading: "A: えいごとにほんご、{どちら|どっち}が{{むずかしい}}ですか。" },
    { jp: "B: 日本語{のほうが}{{難しい}}です。", reading: "B: にほんご{のほうが}{{むずかしい}}です。" }] },
  { id: "cmp34", pattern: "dochira", de: "A: Hunde oder Katzen – was magst du lieber? B: Lieber Katzen.", lines: [
    { jp: "A: 犬と猫、{どちら|どっち}が{{好き}}ですか。", reading: "A: いぬとねこ、{どちら|どっち}が{{すき}}ですか。" },
    { jp: "B: 猫{のほうが}{{好き}}です。", reading: "B: ねこ{のほうが}{{すき}}です。" }] },
  { id: "cmp35", pattern: "dochira", de: "A: Frau Yamada oder Herr Tanaka – wer ist größer? B: Frau Yamada.", lines: [
    { jp: "A: 山田さんと田中さん、{どちら|どっち}が背が{{高い}}ですか。", reading: "A: やまださんとたなかさん、{どちら|どっち}がせが{{たかい}}ですか。" },
    { jp: "B: 山田さん{のほうが}{{高い}}です。", reading: "B: やまださん{のほうが}{{たかい}}です。" }] },
  { id: "cmp36", pattern: "dochira", de: "A: Fleisch oder Fisch – was ist billiger? B: Fisch ist billiger.", lines: [
    { jp: "A: 肉と魚、{どちら|どっち}が{{安い}}ですか。", reading: "A: にくとさかな、{どちら|どっち}が{{やすい}}ですか。" },
    { jp: "B: 魚{のほうが}{{安い}}です。", reading: "B: さかな{のほうが}{{やすい}}です。" }] },
  { id: "cmp37", pattern: "dochira", de: "A: Heute oder morgen – wann hast du eher Zeit? B: Morgen.", lines: [
    { jp: "A: 今日と明日、{どちら|どっち}が{{暇}}ですか。", reading: "A: きょうとあした、{どちら|どっち}が{{ひま}}ですか。" },
    { jp: "B: 明日{のほうが}{{暇}}です。", reading: "B: あした{のほうが}{{ひま}}です。" }] },
  { id: "cmp38", pattern: "dochira", de: "A: Fahrrad oder Auto – was ist praktischer? B: Das Auto.", lines: [
    { jp: "A: 自転車と車、{どちら|どっち}が{{便利}}ですか。", reading: "A: じてんしゃとくるま、{どちら|どっち}が{{べんり}}ですか。" },
    { jp: "B: 車{のほうが}{{便利}}です。", reading: "B: くるま{のほうが}{{べんり}}です。" }] },
  { id: "cmp39", pattern: "dochira", de: "A: Dieses Zimmer oder das dort – welches ist ruhiger? B: Das dort.", lines: [
    { jp: "A: この部屋とあの部屋、{どちら|どっち}が{{静か}}ですか。", reading: "A: このへやとあのへや、{どちら|どっち}が{{しずか}}ですか。" },
    { jp: "B: あの部屋{のほうが}{{静か}}です。", reading: "B: あのへや{のほうが}{{しずか}}です。" }] },
  { id: "cmp40", pattern: "dochira", de: "A: Kann Herr Tanaka besser singen oder kochen? B: Kochen.", lines: [
    { jp: "A: 田中さんは歌と料理、{どちら|どっち}が{{上手}}ですか。", reading: "A: たなかさんはうたとりょうり、{どちら|どっち}が{{じょうず}}ですか。" },
    { jp: "B: 料理{のほうが}{{上手}}です。", reading: "B: りょうり{のほうが}{{じょうず}}です。" }] },
];

if (typeof module !== 'undefined' && module.exports) module.exports = COMPARISONS;
