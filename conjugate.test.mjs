// One-off test (no framework per project rules): the conjugation engine must
// produce correct Japanese forms for each verb group and adjective class.
import { readFileSync } from 'node:fs';
const conjugate = new Function(
  readFileSync(new URL('./conjugate.js', import.meta.url), 'utf8') + '; return conjugate;'
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

console.log(failures === 0 ? 'PASS conjugate' : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
