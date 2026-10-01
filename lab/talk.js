'use strict';

// Sprechtraining (Prototyp). Hören: SpeechRecognition (ja-JP). Sprechen:
// speechSynthesis. Bewerten: ein kleines Sprachmodell, das im Browser läuft —
// WebLLM über WebGPU, oder Chromes eingebautes Gemini Nano. Kein Server, kein Key.
// Prompt und Auswertung stehen in talk-core.js.

const $ = id => document.getElementById(id);

const WEBLLM_URL = 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm';

// `base` + Quantisierung ergibt die WebLLM-model_id. q4f16 braucht die
// WebGPU-Erweiterung shader-f16 (fehlt u. a. auf vielen Handys) — dann q4f32.
const MODELS = [
  { key: 'qwen08', base: 'Qwen3.5-0.8B',      label: 'Qwen 3.5 · 0.8B — Mini',       hint: 'Kleinster Download (ca. 0,5 GB), braucht am wenigsten Speicher. Für iPhones, auf denen 2B abstürzt. Korrigiert spürbar schwächer.' },
  { key: 'qwen2b', base: 'Qwen3.5-2B',        label: 'Qwen 3.5 · 2B — Handy',        hint: 'Einmaliger Download ca. 1 GB. Korrekturen mittelmäßig. Auf dem iPhone (Safari) stürzt die Seite damit beim Antworten ab — zu wenig Speicher.' },
  { key: 'qwen4b', base: 'Qwen3.5-4B',        label: 'Qwen 3.5 · 4B — Laptop',       hint: 'Einmaliger Download ca. 2–4 GB. Deutlich besser, braucht aber einen Laptop/Desktop mit guter Grafik.' },
  { key: 'gemma',  base: 'gemma-2-2b-jpn-it', label: 'Gemma 2 · 2B Japanisch',       hint: 'Einmaliger Download ca. 1,5–2 GB. Auf Japanisch trainiert — zum Vergleich mit Qwen.' },
];
const OTHER = [
  { key: 'chrome', label: 'Chrome-KI (Gemini Nano)', hint: 'In Chrome eingebaut, läuft lokal. Nur Chrome auf Desktop, und nur wenn Chrome sie für Webseiten freigibt.' },
  { key: 'none',   label: 'Ohne KI (nur Fragen & Sprechen)', hint: 'Kein Download. Du hörst Fragen und antwortest, bekommst aber keine Korrektur.' },
];

// Prompt + Antwort brauchen ~1500 Tokens; die Voreinstellung (4096) reserviert
// KV-Cache für mehr als doppelt so viel. Auf dem iPhone zählt jedes MB:
// Safari beendet den Tab, sobald GPU-Puffer + Seite sein Limit überschreiten.
// Diagnose: ?ctx=1024 kleiner, ?json=0 ohne JSON-Grammatik (spart deren Speicher).
const PARAMS = new URLSearchParams(location.search);
const CONTEXT_WINDOW = parseInt(PARAMS.get('ctx'), 10) || 2048;
const USE_JSON_GRAMMAR = PARAMS.get('json') !== '0';

// Absturz-Erkennung: Safari lädt einen Tab, der zu viel Speicher braucht, einfach
// neu. Steht dieses Flag beim Start noch da, ist die Seite mitten in einer
// KI-Antwort gestorben.
const INFLIGHT_KEY = 'n5-talk-inflight';

const state = {
  engine: null,       // { label, ask(messages) → Promise<string|object> } | null
  questions: [],      // Startfragen der Runde (Fallback, wenn keine KI)
  current: null,      // { ja, kana, tr }
  history: [],        // { question, answer } für den Prompt-Kontext
  results: [],        // { question, answer, fb }
  rounds: 5,
  lang: 'de',
  busy: false,
  round: 0,           // verwirft KI-Antworten aus einer abgebrochenen Runde
  mock: new URLSearchParams(location.search).get('engine') === 'mock',
};

// ---------- Debug (?dev=1) ----------
// Handys haben keine Konsole: mit ?dev=1 steht ein Ereignisprotokoll auf dem
// Bildschirm (Mikrofon, Sprachausgabe, KI, Hänger der Seite), das sich per
// Knopf kopieren lässt. Es überlebt einen Neustart der Seite (sessionStorage) —
// stürzt der Tab wegen Speichermangels ab, sieht man danach, was zuletzt lief.

const DEV = new URLSearchParams(location.search).get('dev') === '1';
const DEV_KEY = 'n5-talk-devlog';
const devLines = [];
const devT0 = performance.now();

function devLog(msg) {
  if (!DEV) return;
  const t = ((performance.now() - devT0) / 1000).toFixed(2).padStart(7);
  devLines.push(`${t}s ${msg}`);
  if (devLines.length > 400) devLines.splice(0, devLines.length - 400);
  try { sessionStorage.setItem(DEV_KEY, devLines.join('\n')); } catch (e) { /* voll/blockiert */ }
  const pre = $('dev-text');
  if (pre) { pre.textContent = devLines.join('\n'); pre.scrollTop = pre.scrollHeight; }
}

function initDev() {
  if (!DEV) return;
  let previous = '';
  try { previous = sessionStorage.getItem(DEV_KEY) || ''; } catch (e) { /* egal */ }
  if (previous) devLines.push('── vorheriger Seitenaufruf ──', ...previous.split('\n').slice(-60), '── neu geladen ──');

  const box = document.createElement('div');
  box.id = 'dev-box';
  const bar = document.createElement('div');
  bar.className = 'dev-bar';
  const title = document.createElement('b');
  title.textContent = 'Debug';
  const copy = document.createElement('button');
  copy.textContent = 'Kopieren';
  copy.onclick = () => {
    const text = devLines.join('\n');
    const done = () => { copy.textContent = 'Kopiert ✓'; };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => selectLog());
    else selectLog();
  };
  const clear = document.createElement('button');
  clear.textContent = 'Leeren';
  clear.onclick = () => { devLines.length = 0; devLog('geleert'); };
  const hide = document.createElement('button');
  hide.textContent = '▾';
  hide.onclick = () => { box.classList.toggle('min'); hide.textContent = box.classList.contains('min') ? '▴' : '▾'; };
  bar.append(title, copy, clear, hide);
  const pre = document.createElement('pre');
  pre.id = 'dev-text';
  box.append(bar, pre);
  document.body.append(box);
  document.body.classList.add('dev');

  devLog(`UA ${navigator.userAgent}`);
  devLog(`RAM ${navigator.deviceMemory ?? '?'} GB · Kerne ${navigator.hardwareConcurrency ?? '?'} · standalone ${matchMedia('(display-mode: standalone)').matches}`);

  // Wächter: feuert ein 250-ms-Intervall deutlich zu spät, war die Seite
  // blockiert (lange Rechnung im Main-Thread, GPU-Sync, Speicherdruck).
  let last = performance.now();
  setInterval(() => {
    const now = performance.now();
    if (now - last > 1000 && !document.hidden) devLog(`⚠ Seite hing ${Math.round(now - last - 250)} ms`);
    last = now;
  }, 250);
  addEventListener('error', e => devLog(`✖ JS-Fehler: ${e.message}`));
  addEventListener('unhandledrejection', e => devLog(`✖ Promise: ${(e.reason && e.reason.message) || e.reason}`));
  document.addEventListener('visibilitychange', () => devLog(`Seite ${document.visibilityState}`));
}

function selectLog() {
  const range = document.createRange();
  range.selectNodeContents($('dev-text'));
  getSelection().removeAllRanges();
  getSelection().addRange(range);
}

// ---------- Einstellungen (nur Komfort, darf fehlen) ----------

const SETTINGS_KEY = 'n5-talk-settings';
function loadSettings() {
  try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {}; } catch (e) { return {}; }
}
function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) { /* privat/blockiert */ }
}

// ---------- Sprachausgabe ----------

// Stimme wählbar: iOS listet auch Stimmen, die nicht heruntergeladen sind —
// die „sprechen" lautlos (start/end feuern trotzdem). Voreinstellung wie in
// app.js: die erste japanische Stimme. „auto" setzt keine Stimme, nur lang.
let jaVoices = [];
let jaVoice = null;
let voiceChoice = null;   // voiceURI | 'auto' | null (= erste)

function pickJaVoice() {
  const synth = window.speechSynthesis;
  if (!synth) return null;
  jaVoices = synth.getVoices().filter(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('ja'));
  jaVoice = voiceChoice === 'auto' ? null
    : jaVoices.find(v => v.voiceURI === voiceChoice) || jaVoices[0] || null;
  return jaVoice;
}

function renderVoiceSelect() {
  const sel = $('voice');
  if (!sel) return;
  const opts = jaVoices.map(v => new Option(`${v.name}${v.localService ? '' : ' (online)'}`, v.voiceURI));
  opts.push(new Option('Automatisch (Browser entscheidet)', 'auto'));
  sel.replaceChildren(...opts);
  sel.value = voiceChoice === 'auto' ? 'auto' : (jaVoice ? jaVoice.voiceURI : 'auto');
}

if (window.speechSynthesis) {
  pickJaVoice();
  window.speechSynthesis.onvoiceschanged = () => {
    pickJaVoice();
    renderVoiceSelect();
    renderChecks();
    devLog(`tts: Stimmen ${jaVoices.map(v => `${v.name}${v.localService ? '' : '☁'}${v.default ? '★' : ''}`).join(', ') || 'keine'}`);
  };
}

// iOS legt eine Seite ohne <audio> in die Audio-Kategorie „ambient", die der
// Stumm-Modus stummschaltet — die Stimme „spricht" dann (start/end feuern),
// aber man hört nichts. Eine stumme Schleife hebt die Seite in „playback",
// genau wie in app.js. Muss im Tipp starten (Autoplay-Regeln).
const IS_IOS = /iP(hone|ad|od)/.test(navigator.platform) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let silentLoop = null;

function unlockAudioSession() {
  if (!IS_IOS) return;
  if (!silentLoop) {
    silentLoop = new Audio('../assets/silence.wav');
    silentLoop.loop = true;
  }
  if (silentLoop.paused) {
    silentLoop.play().then(
      () => devLog('audio: Stumm-Schleife läuft (playback)'),
      e => devLog(`audio: Stumm-Schleife blockiert (${e.name})`));
  }
}

let speakTimer = null;
let ttsWatch = null;
const pinnedUtts = new Set();   // Safari/Chrome sammeln Utterances sonst vor dem Ende ein

function stopSpeaking() {
  clearTimeout(speakTimer);
  clearTimeout(ttsWatch);
  speakTimer = ttsWatch = null;
  const synth = window.speechSynthesis;
  if (!synth) return;
  // Nur wenn wirklich etwas läuft: cancel() direkt vor speak() verschluckt auf
  // manchen Geräten die nächste Ausgabe (siehe app.js).
  if (!synth.speaking && !synth.pending && !synth.paused) return;
  synth.resume();   // Android: cancel() leert keine pausierte Queue
  synth.cancel();
}

function speak(texts) {
  const synth = window.speechSynthesis;
  if (!synth) return;
  stopSpeaking();
  const list = [].concat(texts).filter(Boolean);
  if (!list.length) return;
  // Kurz nach cancel() sprechen, nicht im selben Tick (app.js: ttsdefer 60).
  speakTimer = setTimeout(() => {
    speakTimer = null;
    list.forEach((text, i) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      if (jaVoice) u.voice = jaVoice;
      u.rate = 0.9;
      pinnedUtts.add(u);
      u.onstart = () => devLog(`tts: start "${text.slice(0, 20)}" (${jaVoice ? jaVoice.name : 'auto'})`);
      u.onend   = () => { pinnedUtts.delete(u); devLog('tts: end'); if (i === list.length - 1) clearTimeout(ttsWatch); };
      u.onerror = e => { pinnedUtts.delete(u); devLog(`tts: Fehler ${e.error}`); };
      synth.speak(u);
    });
    // Hängt die Ausgabe (iOS nach gestörter Audio-Session), blockiert sie sonst
    // das Mikrofon. Großzügig: ~0,4 s pro Zeichen + 4 s.
    const chars = list.join('').length;
    ttsWatch = setTimeout(() => {
      if (synth.speaking || synth.pending) { devLog('tts: hängt → cancel'); synth.cancel(); }
    }, chars * 400 + 4000);
  }, 60);
}

// ---------- Spracherkennung ----------

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
let listening = false;

const REC_ERRORS = {
  'not-allowed':         'Mikrofon-Zugriff verweigert. In den Browser-Einstellungen erlauben.',
  'service-not-allowed': 'Spracherkennung ist in diesem Browser gesperrt (iPhone: Siri/Diktieren aktivieren).',
  'no-speech':           'Nichts gehört — nochmal 🎤 antippen.',
  'audio-capture':       'Kein Mikrofon gefunden.',
  'network':             'Die Spracherkennung braucht Internet.',
  'language-not-supported': 'Japanische Spracherkennung wird hier nicht unterstützt.',
};

let recTimer = null;

function resetMic() {
  clearTimeout(recTimer);
  recTimer = null;
  rec = null;
  listening = false;
  $('mic').classList.remove('listening');
  $('mic').setAttribute('aria-label', 'Sprechen');
  updateSend();
}

// Ordentlich beenden und auf `end` warten. abort() mitten in der Erkennung
// hinterlässt auf iOS eine kaputte Audio-Session: danach lief die Stimme
// endlos ohne Ton und das Mikro hörte nichts mehr (?dev=1-Protokoll).
function finishMic() {
  if (!rec) return Promise.resolve();
  const r = rec;
  return new Promise(resolve => {
    const done = () => { clearTimeout(t); resolve(); };
    const t = setTimeout(() => { devLog('mic: end bleibt aus → abort'); if (rec === r) abortMic(); resolve(); }, 1500);
    r.addEventListener('end', done, { once: true });
    devLog('mic: stop (senden)');
    try { r.stop(); } catch (e) { done(); }
  });
}

// Sofort aus, ohne auf die Erkennung zu warten — nur als letzter Ausweg.
function abortMic() {
  if (!rec) return;
  const r = rec;
  resetMic();
  try { r.abort(); } catch (e) { /* schon beendet */ }
}

// Die Erkennung darf den Knopf nie festhalten: kommt sie nicht in Gang, hört
// sie nicht auf oder reagiert sie nicht auf Stopp, räumen Timer auf.
const MIC_START_TIMEOUT = 10000;  // bis audiostart; deckt die erste Berechtigungsfrage ab
const MIC_MAX_LISTEN    = 20000;  // iOS beendet bei Stille nicht immer von selbst
const MIC_STOP_TIMEOUT  = 2000;   // stop() ohne end → abort()
const MIC_SILENCE       = 2500;   // so lange nichts Neues erkannt → fertig (iOS stoppt nie selbst)

function toggleMic() {
  if (listening) {
    devLog('mic: stop (getippt)');
    const r = rec;
    try { r.stop(); } catch (e) { /* schon beendet */ }
    clearTimeout(recTimer);
    recTimer = setTimeout(() => {
      if (rec !== r) return;
      devLog('mic: stop ohne end → abort');
      abortMic();
      setStatus('Die Spracherkennung hing und wurde abgebrochen.');
    }, MIC_STOP_TIMEOUT);
    return;
  }
  if (!Recognition || state.busy) return;
  unlockAudioSession();
  stopSpeaking();   // räumt auch eine noch verzögerte Ausgabe weg

  const r = new Recognition();
  rec = r;
  r.lang = 'ja-JP';
  r.interimResults = true;
  r.continuous = false;
  r.maxAlternatives = 1;

  for (const ev of ['start', 'soundstart', 'speechstart', 'speechend', 'soundend', 'audioend', 'nomatch']) {
    r.addEventListener(ev, () => devLog(`mic: ${ev}`));
  }
  r.addEventListener('audiostart', () => {
    devLog('mic: audiostart');
    if (rec !== r) return;
    setStatus('Ich höre zu … (nochmal antippen zum Beenden)');
    clearTimeout(recTimer);
    recTimer = setTimeout(() => {
      if (rec !== r) return;
      devLog('mic: Höchstdauer → stop');
      try { r.stop(); } catch (e) { /* schon beendet */ }
    }, MIC_MAX_LISTEN);
  });

  const before = $('answer').value.trim();
  r.onresult = e => {
    if (rec !== r) return;
    const heard = Array.from(e.results).map(x => x[0].transcript).join('');
    devLog(`mic: result "${heard}" final=${e.results[e.results.length - 1].isFinal}`);
    $('answer').value = before ? `${before} ${heard}` : heard;
    updateSend();
    // Nach einer Sprechpause selbst beenden; ein neuer Tipp hängt Text an.
    clearTimeout(recTimer);
    recTimer = setTimeout(() => {
      if (rec !== r) return;
      devLog('mic: Pause → stop');
      try { r.stop(); } catch (err) { /* schon beendet */ }
      recTimer = setTimeout(() => { if (rec === r) { devLog('mic: stop ohne end → abort'); abortMic(); } }, MIC_STOP_TIMEOUT);
    }, MIC_SILENCE);
  };
  r.onerror = e => {
    devLog(`mic: error ${e.error} ${e.message || ''}`);
    if (rec !== r) return;
    setStatus(REC_ERRORS[e.error] || `Spracherkennung: ${e.error}`);
  };
  r.onend = () => {
    devLog('mic: end');
    if (rec !== r) return;
    resetMic();
    unlockAudioSession();   // die Erkennung kann die Stumm-Schleife pausiert haben
    if ($('answer').value.trim()) setStatus('Passt das? Dann senden — oder 🎤 zum Weitersprechen.');
  };

  try {
    devLog('mic: start()');
    r.start();
  } catch (e) {
    devLog(`mic: start() warf ${e.message}`);
    resetMic();
    setStatus(`Mikrofon startet nicht: ${e.message}`);
    return;
  }
  listening = true;
  $('mic').classList.add('listening');
  $('mic').setAttribute('aria-label', 'Aufnahme beenden');
  setStatus('Starte Mikrofon …');
  recTimer = setTimeout(() => {
    if (rec !== r) return;
    devLog('mic: kein audiostart → abort');
    abortMic();
    setStatus('Das Mikrofon startet nicht. Antwort bitte tippen — oder Seite neu laden.');
  }, MIC_START_TIMEOUT);
}

// ---------- KI-Engines ----------

async function webgpuInfo() {
  if (!navigator.gpu) return { ok: false };
  try {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return { ok: false };
    const info = adapter.info || {};
    devLog(`gpu: ${info.vendor || '?'} ${info.architecture || ''} f16=${adapter.features.has('shader-f16')} maxBuffer=${Math.round(adapter.limits.maxBufferSize / 2 ** 20)} MB`);
    return { ok: true, f16: adapter.features.has('shader-f16') };
  } catch (e) {
    return { ok: false };
  }
}

async function createWebLLM(model, onProgress) {
  const gpu = await webgpuInfo();
  if (!gpu.ok) throw new Error('Dieser Browser hat kein WebGPU. Probier Chrome (Desktop/Android) oder Safari ab iOS 26.');
  const modelId = `${model.base}-${gpu.f16 ? 'q4f16_1' : 'q4f32_1'}-MLC`;
  onProgress(0, 'Lade KI-Bibliothek …');
  const webllm = await import(WEBLLM_URL);
  try { await navigator.storage?.persist?.(); } catch (e) { /* nur ein Wunsch an den Browser */ }
  devLog(`ki: lade ${modelId} · Kontext ${CONTEXT_WINDOW} · JSON-Grammatik ${USE_JSON_GRAMMAR ? 'an' : 'aus'}`);
  const engine = await loadEngine(webllm, modelId, onProgress);
  devLog('ki: geladen');
  // Qwen3.x denkt sonst erst hunderte Tokens lang nach, bevor es antwortet.
  const noThinking = /^Qwen3/.test(model.base) ? { extra_body: { enable_thinking: false } } : {};
  const schema = JSON.stringify(talkCore.FEEDBACK_SCHEMA);

  // Gestreamt, damit man sieht, dass etwas passiert — und damit das Protokoll
  // zeigt, ob ein Absturz vor dem ersten Token (Prefill) oder danach kommt.
  async function generate(req, onToken) {
    const stream = await engine.chat.completions.create({ ...req, stream: true });
    let text = '';
    let n = 0;
    for await (const chunk of stream) {
      const delta = chunk.choices[0] && chunk.choices[0].delta.content;
      if (!delta) continue;
      text += delta;
      n++;
      if (n === 1) devLog('ki: erstes Token');
      onToken(n);
    }
    devLog(`ki: ${n} Tokens`);
    return text;
  }

  return {
    label: modelId,
    async ask(messages, onToken = () => {}) {
      const req = { messages, temperature: 0.2, max_tokens: 500, ...noThinking };
      if (!USE_JSON_GRAMMAR) return generate(req, onToken);
      try {
        return await generate({ ...req, response_format: { type: 'json_object', schema } }, onToken);
      } catch (e) {
        // Grammatik-Zwang nicht verfügbar → frei generieren, extractJson fängt es auf.
        devLog(`ki: JSON-Modus fehlgeschlagen (${e.message}) → ohne`);
        return generate(req, onToken);
      }
    },
  };
}

// Im Worker rechnet die KI neben der Oberfläche statt auf ihr: Mikrofon, Knöpfe
// und Sprachausgabe bleiben bedienbar, auch während das Modell lädt oder denkt.
// Lässt sich der Worker gar nicht starten, läuft WebLLM im Main-Thread.
async function loadEngine(webllm, modelId, onProgress) {
  let lastPct = -1;
  const cfg = {
    initProgressCallback: r => {
      onProgress(r.progress, r.text);
      const pct = Math.floor((r.progress || 0) * 10);
      if (pct !== lastPct) { lastPct = pct; devLog(`ki: ${r.text}`); }
    },
  };
  const chatOpts = { context_window_size: CONTEXT_WINDOW };
  let worker;
  try {
    worker = new Worker(new URL('talk-worker.js', location.href), { type: 'module' });
  } catch (e) {
    devLog(`ki: kein Worker (${e.message}) → Main-Thread`);
    return webllm.CreateMLCEngine(modelId, cfg, chatOpts);
  }
  let workerBroken = false;
  const broken = new Promise((_, reject) => worker.addEventListener('error', e => {
    workerBroken = true;
    reject(new Error(e.message || 'Worker-Skript lädt nicht'));
  }, { once: true }));
  try {
    const engine = await Promise.race([webllm.CreateWebWorkerMLCEngine(worker, modelId, cfg, chatOpts), broken]);
    devLog('ki: läuft im Worker');
    return engine;
  } catch (e) {
    if (!workerBroken) throw e;
    devLog(`ki: Worker kaputt (${e.message}) → Main-Thread`);
    worker.terminate();
    return webllm.CreateMLCEngine(modelId, cfg, chatOpts);
  }
}

async function createChromeAI(lang, onProgress) {
  const LM = self.LanguageModel;
  if (!LM) throw new Error('Chrome-KI ist hier nicht verfügbar (nur aktuelles Chrome auf Desktop).');
  const opts = langs => ({
    expectedInputs:  [{ type: 'text', languages: ['en', 'ja'] }],
    expectedOutputs: [{ type: 'text', languages: langs }],
  });
  let o = opts(lang === 'de' ? ['ja', 'en', 'de'] : ['ja', 'en']);
  let avail = await LM.availability(o);
  if (avail === 'unavailable' && lang === 'de') { o = opts(['ja', 'en']); avail = await LM.availability(o); }
  if (avail === 'unavailable') throw new Error('Chrome meldet: Gemini Nano ist auf diesem Gerät nicht verfügbar.');
  onProgress(0, avail === 'available' ? 'Starte Gemini Nano …' : 'Lade Gemini Nano (einmalig) …');
  const warm = await LM.create({
    ...o,
    monitor(m) { m.addEventListener('downloadprogress', e => onProgress(e.loaded, 'Lade Gemini Nano …')); },
  });
  warm.destroy();
  return {
    label: 'Gemini Nano (Chrome)',
    async ask(messages) {
      // Pro Runde eine frische Session: der Kontext steckt schon im Prompt.
      const session = await LM.create({ ...o, initialPrompts: [messages[0]] });
      try {
        return await session.prompt(messages[1].content, { responseConstraint: talkCore.FEEDBACK_SCHEMA });
      } finally {
        session.destroy();
      }
    },
  };
}

// ?engine=mock — gestellte Antworten, um die Oberfläche ohne Modell zu testen.
function createMock() {
  let n = 0;
  return {
    label: 'Mock (Test)',
    ask: messages => new Promise(resolve => setTimeout(() => {
      const answer = messages[1].content.split("Learner's answer: ")[1] || '';
      const wrong = n++ % 2 === 0;
      resolve(JSON.stringify({
        correct: !wrong,
        corrected: wrong ? 'きのう友だちと映画を見ました。' : answer,
        corrected_reading: wrong ? 'きのうともだちとえいがをみました。' : '',
        explanation: wrong ? 'Es geht um gestern, also Vergangenheit: 見ます → 見ました.' : '',
        reply: 'いいですね！どんな映画を見ましたか。',
        reply_reading: 'いいですね！どんなえいがをみましたか。',
        reply_translation: 'Schön! Was für einen Film hast du gesehen?',
      }));
    }, 400)),
  };
}

async function deleteCachedModels() {
  const btn = $('clear-cache');
  btn.disabled = true;
  btn.textContent = 'Lösche …';
  try {
    const webllm = await import(WEBLLM_URL);
    for (const m of MODELS) {
      for (const q of ['q4f16_1', 'q4f32_1']) {
        try { await webllm.deleteModelAllInfoInCache(`${m.base}-${q}-MLC`); } catch (e) { /* nie geladen */ }
      }
    }
    btn.textContent = 'Gelöscht ✓';
  } catch (e) {
    btn.textContent = `Löschen fehlgeschlagen: ${e.message}`;
  }
}

// ---------- Setup ----------

const checkState = { gpu: null };

function renderChecks() {
  const hasChrome = !!self.LanguageModel;
  const items = [
    [!!Recognition, 'Spracherkennung', Recognition ? 'Japanisch per Mikrofon' : 'Fehlt — du kannst die Antwort aber tippen. Chrome oder Safari nutzen.'],
    [jaVoices.length > 0, 'Japanische Stimme', jaVoices.length ? `${jaVoices.length} verfügbar · ${jaVoice ? jaVoice.name : 'automatisch'} — unten testen` : (window.speechSynthesis ? 'Keine japanische Stimme installiert' : 'Keine Sprachausgabe')],
    [checkState.gpu === null ? null : checkState.gpu.ok, 'WebGPU (für Qwen/Gemma)',
      checkState.gpu === null ? 'prüfe …' : checkState.gpu.ok ? (checkState.gpu.f16 ? 'vorhanden' : 'vorhanden (ohne f16, größerer Download)') : 'Fehlt — dann nur Chrome-KI oder ohne KI'],
    [hasChrome, 'Chrome-KI (Gemini Nano)', hasChrome ? 'API vorhanden' : 'nicht verfügbar'],
  ];
  const ul = $('checks');
  ul.replaceChildren(...items.map(([ok, name, detail]) => {
    const li = document.createElement('li');
    const mark = document.createElement('span');
    mark.className = `mark ${ok ? 'ok' : ok === false ? 'no' : ''}`;
    mark.textContent = ok ? '✓' : ok === false ? '✗' : '…';
    const text = document.createElement('div');
    text.textContent = name;
    const small = document.createElement('small');
    small.textContent = detail;
    text.append(small);
    li.append(mark, text);
    return li;
  }));
}

function renderEngineSelect(saved) {
  const sel = $('engine');
  const opts = [...MODELS, ...OTHER];
  if (state.mock) opts.unshift({ key: 'mock', label: 'Mock (Test, kein Modell)', hint: 'Gestellte Antworten zum Testen der Oberfläche.' });
  sel.replaceChildren(...opts.map(o => new Option(o.label, o.key)));
  sel.value = state.mock ? 'mock'
    : opts.some(o => o.key === saved.engine) ? saved.engine
    : IS_IOS ? 'qwen08' : 'qwen2b';
  const hint = () => { $('engine-hint').textContent = opts.find(o => o.key === sel.value).hint; };
  sel.onchange = hint;
  hint();
}

function setupError(msg) {
  const el = $('setup-error');
  el.textContent = msg;
  el.classList.toggle('hidden', !msg);
}

async function start() {
  const key = $('engine').value;
  state.lang = $('lang').value;
  state.rounds = parseInt($('rounds').value, 10);
  saveSettings({ engine: key, lang: state.lang, rounds: state.rounds, voice: voiceChoice });
  setupError('');

  // Innerhalb der Tipp-Geste: Audio-Session und Stimme aufwärmen (Autoplay-Regeln).
  unlockAudioSession();
  if (window.speechSynthesis) {
    const warm = new SpeechSynthesisUtterance('');
    warm.volume = 0;
    window.speechSynthesis.speak(warm);
  }

  const needsLoad = !state.engine || state.engineKey !== key || state.engineLang !== state.lang;
  if (needsLoad) {
    $('start').disabled = true;
    $('load').classList.remove('hidden');
    const onProgress = (p, text) => {
      $('load-bar').style.width = `${Math.round((p || 0) * 100)}%`;
      $('load-text').textContent = text || '';
    };
    try {
      const model = MODELS.find(m => m.key === key);
      state.engine = key === 'none' ? null
        : key === 'mock' ? createMock()
        : key === 'chrome' ? await createChromeAI(state.lang, onProgress)
        : await createWebLLM(model, onProgress);
      state.engineKey = key;
      state.engineLang = state.lang;
    } catch (e) {
      console.error(e);
      state.engine = null;
      state.engineKey = null;
      const msg = String(e && e.message || e);
      setupError(/memory|OOM|device.*lost|allocate/i.test(msg)
        ? `Nicht genug Speicher für dieses Modell. Probier ein kleineres. (${msg})`
        : /fetch|Cache|network/i.test(msg)
          ? `Download fehlgeschlagen — Internetverbindung prüfen und nochmal starten. (${msg})`
          : msg);
      return;
    } finally {
      $('start').disabled = false;
      $('load').classList.add('hidden');
    }
  }
  startRound();
}

// ---------- Gespräch ----------

function show(id) {
  for (const s of ['screen-setup', 'screen-chat', 'screen-summary']) $(s).classList.toggle('hidden', s !== id);
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function speakBtn(texts) {
  const b = el('button', 'speak', '🔊');
  b.setAttribute('aria-label', 'Vorlesen');
  b.onclick = () => { unlockAudioSession(); speak(texts); };
  return b;
}

function addToLog(node) {
  $('log').append(node);
  node.scrollIntoView({ behavior: 'smooth', block: 'end' });
  return node;
}

function addTutor({ ja, kana, tr }) {
  const bubble = el('div', 'bubble tutor');
  const row = el('div', 'row');
  const body = el('div');
  body.append(el('div', 'jp', ja));
  if (kana && kana !== ja) body.append(el('div', 'kana', kana));
  if (tr) {
    const t = el('div', 'tr blur', tr);
    t.title = 'Antippen für Übersetzung';
    t.onclick = () => t.classList.remove('blur');
    body.append(t);
  }
  row.append(body, speakBtn(ja));
  bubble.append(row);
  return addToLog(bubble);
}

function addFeedback(fb) {
  const card = el('div', `feedback ${fb.correct ? 'good' : 'bad'}`);
  if (fb.correct) {
    card.append(el('div', 'verdict', '✓ Richtig!'));
    return addToLog(card);
  }
  card.append(el('div', 'verdict', '✗ Besser so:'));
  const row = el('div', 'row');
  const body = el('div');
  body.append(el('div', 'jp', fb.corrected));
  if (fb.correctedReading && fb.correctedReading !== fb.corrected) body.append(el('div', 'kana', fb.correctedReading));
  if (fb.explanation) body.append(el('div', 'why', fb.explanation));
  row.append(body, speakBtn(fb.corrected));
  card.append(row);
  return addToLog(card);
}

function setStatus(text) { $('status').textContent = text || ''; }

function updateSend() {
  $('send').disabled = state.busy || !$('answer').value.trim();
  $('mic').disabled = state.busy || !Recognition;
  $('skip').disabled = state.busy;
}

function setBusy(b) {
  state.busy = b;
  $('answer').disabled = b;
  updateSend();
}

function updateCount() {
  $('count').textContent = `Frage ${Math.min(state.results.length + 1, state.rounds)} / ${state.rounds}`;
}

function translationOf(q) { return state.lang === 'en' ? q.en : q.de; }

function ask(q) {
  state.current = q;
  addTutor(q);
  updateCount();
  speak(q.ja);
}

function nextListQuestion() {
  const used = new Set(state.results.map(r => r.question).concat(state.current ? [state.current.ja] : []));
  let q = state.questions.find(x => !used.has(x.ja));
  if (!q) q = talkCore.pickQuestions(1)[0];
  return { ja: q.ja, kana: q.kana, tr: translationOf(q) };
}

function startRound() {
  state.round++;
  state.questions = talkCore.pickQuestions(talkCore.QUESTIONS.length);
  state.history = [];
  state.results = [];
  state.current = null;
  $('log').replaceChildren();
  $('answer').value = '';
  $('engine-label').textContent = state.engine ? `KI: ${state.engine.label}` : 'Ohne KI';
  setStatus(Recognition ? '🎤 antippen und antworten.' : 'Spracherkennung fehlt — Antwort bitte tippen.');
  setBusy(false);
  show('screen-chat');
  ask(nextListQuestion());
}

async function send() {
  if (state.busy) return;
  if (rec) {
    setBusy(true);
    await finishMic();
    setBusy(false);
  }
  const answer = $('answer').value.trim();
  if (!answer) return;
  if (!talkCore.hasJapanese(answer)) {
    setStatus('Bitte auf Japanisch antworten — per 🎤 oder mit der japanischen Tastatur.');
    return;
  }
  stopSpeaking();
  $('answer').value = '';
  addToLog(el('div', 'bubble user', answer));
  const question = state.current.ja;
  const last = state.results.length + 1 >= state.rounds;

  if (!state.engine) {
    state.results.push({ question, answer, fb: null });
    state.history.push({ question, answer });
    return last ? finishRound() : ask(nextListQuestion());
  }

  setBusy(true);
  const round = state.round;
  const thinking = addToLog(el('div', 'thinking', 'denkt nach …'));
  const t0 = performance.now();
  let tokens = 0;
  const tick = () => {
    thinking.textContent = `denkt nach … ${Math.round((performance.now() - t0) / 1000)} s${tokens ? ` · ${tokens} Tokens` : ''}`;
  };
  const timer = setInterval(tick, 1000);

  let fb = null;
  let err = null;
  try {
    const messages = talkCore.buildMessages({ question, answer, history: state.history, lang: state.lang });
    devLog(`ki: frage "${answer}"`);
    try { sessionStorage.setItem(INFLIGHT_KEY, state.engineKey); } catch (e) { /* egal */ }
    const out = await state.engine.ask(messages, n => { tokens = n; });
    const raw = typeof out === 'string' ? out : JSON.stringify(out);
    devLog(`ki: ${((performance.now() - t0) / 1000).toFixed(1)} s → ${raw.slice(0, 400)}`);
    fb = talkCore.parseFeedback(out, answer);
    if (!fb) console.warn('Unbrauchbare KI-Ausgabe:', out);
  } catch (e) {
    console.error(e);
    devLog(`ki: Fehler ${e.message}`);
    err = e;
  } finally {
    try { sessionStorage.removeItem(INFLIGHT_KEY); } catch (e) { /* egal */ }
    clearInterval(timer);
    thinking.remove();
    setBusy(false);
  }
  // Während des Nachdenkens beendet (oder neue Runde) → Ergebnis verwerfen.
  if (round !== state.round || $('screen-chat').classList.contains('hidden')) return;

  if (!fb) {
    // Antwort zurück ins Feld, damit man sie einfach nochmal senden kann.
    $('answer').value = answer;
    $('log').lastChild.remove();
    updateSend();
    setStatus(err ? `KI-Fehler: ${err.message}` : 'Die KI hat Unsinn geantwortet — bitte nochmal senden.');
    return;
  }

  addFeedback(fb);
  state.results.push({ question, answer, fb });
  state.history.push({ question, answer: fb.corrected });
  setStatus(`${((performance.now() - t0) / 1000).toFixed(1)} s`);

  if (last) {
    if (!fb.correct) speak(fb.corrected);
    return finishRound();
  }
  const next = fb.reply
    ? { ja: fb.reply, kana: fb.replyReading, tr: fb.replyTranslation }
    : nextListQuestion();
  state.current = next;
  addTutor(next);
  updateCount();
  // Erst die Korrektur hören, dann die Antwort der KI.
  speak([fb.correct ? null : fb.corrected, next.ja]);
}

function skip() {
  if (state.busy) return;
  stopSpeaking();
  addToLog(el('div', 'note', '— andere Frage —'));
  ask(nextListQuestion());
}

function finishRound() {
  addToLog(el('div', 'note', 'Runde fertig'));
  setBusy(true);
  setTimeout(renderSummary, 1200);
}

function renderSummary() {
  const graded = state.results.filter(r => r.fb);
  const good = graded.filter(r => r.fb.correct).length;
  $('score').textContent = graded.length ? `${good} / ${graded.length} ohne Fehler` : `${state.results.length} Antworten`;
  $('sum-sub').textContent = graded.length ? 'Deine Antworten und die Korrekturen:' : 'Ohne KI gibt es keine Bewertung — hier deine Antworten:';
  const list = $('sum-list');
  list.replaceChildren(...state.results.map(r => {
    const item = el('div', 'sum-item');
    item.append(el('div', 'q', r.question));
    const wrong = r.fb && !r.fb.correct;
    item.append(el('div', `a ${wrong ? 'bad' : ''}`, r.answer));
    if (wrong) {
      const row = el('div', 'row');
      const body = el('div');
      body.append(el('div', 'c', r.fb.corrected));
      if (r.fb.explanation) body.append(el('div', 'tr', r.fb.explanation));
      row.append(body, speakBtn(r.fb.corrected));
      item.append(row);
    }
    return item;
  }));
  show('screen-summary');
}

// ---------- Verdrahtung ----------

function init() {
  initDev();
  const saved = loadSettings();
  renderEngineSelect(saved);
  voiceChoice = saved.voice || null;
  pickJaVoice();
  renderVoiceSelect();
  $('voice').onchange = () => {
    voiceChoice = $('voice').value;
    pickJaVoice();
    saveSettings({ ...loadSettings(), voice: voiceChoice });
    renderChecks();
  };
  $('voice-test').onclick = () => {
    unlockAudioSession();
    speak('こんにちは。今日はいい天気ですね。');
  };
  if (saved.lang) $('lang').value = saved.lang;
  if (saved.rounds) $('rounds').value = String(saved.rounds);
  renderChecks();
  let crashed = null;
  try { crashed = sessionStorage.getItem(INFLIGHT_KEY); sessionStorage.removeItem(INFLIGHT_KEY); } catch (e) { /* egal */ }
  if (crashed) {
    devLog(`⚠ letzter Aufruf ist beim Antworten abgestürzt (${crashed})`);
    const smaller = { qwen4b: 'qwen2b', gemma: 'qwen08', qwen2b: 'qwen08' }[crashed];
    if (smaller) $('engine').value = smaller;
    $('engine').onchange();
    setupError(smaller
      ? `Die Seite ist beim Antworten abgestürzt — vermutlich reicht der Speicher für dieses Modell nicht. Ich habe ein kleineres ausgewählt.`
      : `Die Seite ist beim Antworten abgestürzt — vermutlich zu wenig Speicher. Probier „Ohne KI" oder ein anderes Gerät.`);
  }
  webgpuInfo().then(info => { checkState.gpu = info; renderChecks(); });

  // Aus dem Hintergrund zurück: iOS hat die Stumm-Schleife pausiert.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && silentLoop) unlockAudioSession();
  });
  $('start').onclick = start;
  $('clear-cache').onclick = deleteCachedModels;
  $('mic').onclick = toggleMic;
  $('send').onclick = send;
  $('skip').onclick = skip;
  $('answer').oninput = updateSend;
  $('answer').onkeydown = e => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); }
  };
  $('quit').onclick = async () => {
    await finishMic();
    stopSpeaking();
    state.results.length ? renderSummary() : show('screen-setup');
  };
  $('again').onclick = startRound;
  $('to-setup').onclick = () => show('screen-setup');
}

init();
