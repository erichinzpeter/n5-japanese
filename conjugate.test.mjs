// One-off test (no framework per project rules): the conjugation engine must
// produce correct Japanese forms for each verb group and adjective class.
import { readFileSync } from 'node:fs';
const { conjugate, masuForm } = new Function(
  readFileSync(new URL('./conjugate.js', import.meta.url), 'utf8') + '; return { conjugate, masuForm };'
)();

let failures = 0;
const eq = (label, got, want) => { if (got !== want) { failures++; console.log(`FAIL ${label}: got "${got}" want "${want}"`); } };
const form = (res, label) => res.forms.find(f => f.label === label)?.word;
const formR = (res, label) => res.forms.find(f => f.label === label)?.reading;

let r = conjugate('食べる', 'たべる', 'Verb (Ichidan)');
eq('taberu masu', form(r,'ます-Form'),'食べます');
eq('taberu te', form(r,'て-Form'),'食べて');
eq('taberu ta', form(r,'た-Form'),'食べた');
eq('taberu nai', form(r,'ない-Form'),'食べない');

eq('kau te', form(conjugate('買う','かう','Verb (Godan, う)'),'て-Form'),'買って');
eq('kau nai', form(conjugate('買う','かう','Verb (Godan, う)'),'ない-Form'),'買わない');
eq('kaku te', form(conjugate('書く','かく','Verb (Godan, く)'),'て-Form'),'書いて');
eq('hanasu te', form(conjugate('話す','はなす','Verb (Godan, す)'),'て-Form'),'話して');
eq('nomu te', form(conjugate('飲む','のむ','Verb (Godan, む)'),'て-Form'),'飲んで');
eq('oyogu te', form(conjugate('泳ぐ','およぐ','Verb (Godan, ぐ)'),'て-Form'),'泳いで');
eq('iku te', form(conjugate('行く','いく','Verb (Godan, く)'),'て-Form'),'行って');
eq('iku nai', form(conjugate('行く','いく','Verb (Godan, く)'),'ない-Form'),'行かない');

eq('suru te', form(conjugate('する','する','Verb (unregelmäßig)'),'て-Form'),'して');
eq('benkyou te', form(conjugate('勉強する','べんきょうする','Verb (する-Verb)'),'て-Form'),'勉強して');
eq('kuru nai word', form(conjugate('来る','くる','Verb (unregelmäßig)'),'ない-Form'),'来ない');
eq('kuru nai reading', formR(conjugate('来る','くる','Verb (unregelmäßig)'),'ない-Form'),'こない');
eq('kuru te reading', formR(conjugate('来る','くる','Verb (unregelmäßig)'),'て-Form'),'きて');

r = conjugate('大きい','おおきい','i-Adjektiv');
eq('ookii neg', form(r,'Verneinung'),'大きくない');
eq('ookii past', form(r,'Vergangenheit'),'大きかった');
eq('ookii adv', form(r,'Adverb'),'大きく');
eq('ii neg', form(conjugate('いい','いい','i-Adjektiv (unregelmäßig)'),'Verneinung'),'よくない');
// Display-pair entry (v131 in the data): both spellings still conjugate on the よ-stem.
r = conjugate('いい / 良い','いい / よい','i-Adjektiv (unregelmäßig)');
eq('ii-pair neg word', form(r,'Verneinung'),'よくない');
eq('ii-pair neg reading', formR(r,'Verneinung'),'よくない');

r = conjugate('静か','しずか','na-Adjektiv');
eq('shizuka neg', form(r,'Verneinung'),'静かじゃない');
eq('shizuka te', form(r,'て-Form'),'静かで');
eq('shizuka adverb', form(r,'Adverb'),'静かに');
eq('shizuka adverb reading', r.forms.find(x => x.label === 'Adverb').reading,'しずかに');
eq('anzen adverb', form(conjugate('安全な','あんぜんな','na-Adjektiv'),'Adverb'),'安全に');

if (conjugate('本','ほん','Nomen') !== null) { failures++; console.log('FAIL noun should be null'); }

// Euphonic edge cases (own additions).
eq('matsu te', form(conjugate('待つ','まつ','Verb (Godan, つ)'),'て-Form'),'待って');
eq('matsu ta', form(conjugate('待つ','まつ','Verb (Godan, つ)'),'た-Form'),'待った');
eq('asobu te', form(conjugate('遊ぶ','あそぶ','Verb (Godan, ぶ)'),'て-Form'),'遊んで');
eq('asobu ta', form(conjugate('遊ぶ','あそぶ','Verb (Godan, ぶ)'),'た-Form'),'遊んだ');
eq('oyogu ta', form(conjugate('泳ぐ','およぐ','Verb (Godan, ぐ)'),'た-Form'),'泳いだ');
eq('benkyou masu', form(conjugate('勉強する','べんきょうする','Verb (する-Verb)'),'ます-Form'),'勉強します');
eq('benkyou nai reading', formR(conjugate('勉強する','べんきょうする','Verb (する-Verb)'),'ない-Form'),'べんきょうしない');
eq('kau masu reading', formR(conjugate('買う','かう','Verb (Godan, う)'),'ます-Form'),'かいます');

// masuForm: der Helper, den der ます-Modus des Verben-Decks nutzt.
const masu = (w, r, p) => masuForm({ word: w, reading: r, pos: p });
eq('masuForm ichidan word',    masu('食べる', 'たべる', 'Verb (Ichidan)')?.word,          '食べます');
eq('masuForm ichidan reading', masu('食べる', 'たべる', 'Verb (Ichidan)')?.reading,       'たべます');
eq('masuForm godan u',         masu('買う', 'かう', 'Verb (Godan, う)')?.word,            '買います');
eq('masuForm godan tsu',       masu('待つ', 'まつ', 'Verb (Godan, つ)')?.reading,         'まちます');
eq('masuForm godan ku',        masu('書く', 'かく', 'Verb (Godan, く)')?.word,            '書きます');
eq('masuForm suru-verb',       masu('勉強する', 'べんきょうする', 'Verb (する-Verb)')?.word, '勉強します');
eq('masuForm kuru word',       masu('来る', 'くる', 'Verb (unregelmäßig)')?.word,          '来ます');
eq('masuForm kuru reading',    masu('来る', 'くる', 'Verb (unregelmäßig)')?.reading,       'きます');
if (masu('本', 'ほん', 'Nomen') !== null) { failures++; console.log('FAIL masuForm noun should be null'); }
if (masu('大きい', 'おおきい', 'i-Adjektiv') !== null) { failures++; console.log('FAIL masuForm i-adj should be null'); }
if (masu('静か', 'しずか', 'na-Adjektiv') !== null) { failures++; console.log('FAIL masuForm na-adj should be null'); }

// ある verneint ohne Stamm.
eq('aru nai', form(conjugate('ある', 'ある', 'Verb (Godan, る)*'), 'ない-Form'), 'ない');

// 来る-Komposita: nur das くる am Ende wird konjugiert.
r = conjugate('持ってくる', 'もってくる', 'Verb (unregelmäßig)');
eq('mottekuru masu word',    form(r, 'ます-Form'), '持ってきます');
eq('mottekuru masu reading', formR(r, 'ます-Form'), 'もってきます');
eq('mottekuru nai reading',  formR(r, 'ない-Form'), 'もってこない');

// na-Adjektiv, das mit な gespeichert ist.
r = conjugate('安全な', 'あんぜんな', 'na-Adjektiv');
eq('anzen grund', form(r, 'Grundform'), '安全');
eq('anzen nai',   form(r, 'Verneinung'), '安全じゃない');

// Alternative pos-Schreibweise aus data/basics.js.
eq('yasashii nai', form(conjugate('優しい', 'やさしい', 'Adjektiv-i'), 'Verneinung'), '優しくない');
eq('taisetsu nai', form(conjugate('大切', 'たいせつ', 'Adjektiv-na'), 'Verneinung'), '大切じゃない');

// Zwei Schreibweisen in einem Eintrag.
r = conjugate('速い／早い', 'はやい', 'Adjektiv-i');
eq('hayai nai word',    form(r, 'Verneinung'), '速くない／早くない');
eq('hayai nai reading', formR(r, 'Verneinung'), 'はやくない');
r = conjugate('いい／良い', 'いい／よい', 'Adjektiv-i');
eq('ii nai word',       form(r, 'Verneinung'), 'よくない');
eq('ii grund reading',  formR(r, 'Grundform'), 'いい／よい');

// ています-Form (Verlaufsform): て-Form + います, auch bei 行く, 来る und する.
eq('taberu teimasu',  form(conjugate('食べる','たべる','Verb (Ichidan)'),'ています-Form'),'食べています');
eq('nomu teimasu',    form(conjugate('飲む','のむ','Verb (Godan, む)'),'ています-Form'),'飲んでいます');
eq('iku teimasu',     form(conjugate('行く','いく','Verb (Godan, く)'),'ています-Form'),'行っています');
eq('kuru teimasu',    formR(conjugate('来る','くる','Verb (unregelmäßig)'),'ています-Form'),'きています');
eq('benkyou teimasu', form(conjugate('勉強する','べんきょうする','Verb (する-Verb)'),'ています-Form'),'勉強しています');
// ある hat keine Verlaufsform (あっています heißt etwas anderes).
eq('aru teimasu', form(conjugate('ある','ある','Verb (Godan, る)*'),'ています-Form'), undefined);
eq('iru teimasu', form(conjugate('いる','いる','Verb (Ichidan)'),'ています-Form'), undefined);

console.log(failures === 0 ? 'PASS conjugate' : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
