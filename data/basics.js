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
    id: "b043",
    word: "優しい",
    reading: "やさしい",
    meaning: "sanft / freundlich",
    pos: "Adjektiv-i",
    examples: [
      { jp: "彼はとても優しい人です。", reading: "かれはとてもやさしいひとです。", de: "Er ist ein sehr freundlicher Mensch." },
      { jp: "この問題はやさしいです。", reading: "このもんだいはやさしいです。", de: "Diese Aufgabe ist einfach." }
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

  // ── ADJEKTIVE (na-Form) ──────────────────────────────────────────────────

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
  }

];
