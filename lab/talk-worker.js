// WebLLM im Web Worker: das Modell rechnet hier, die Seite (talk.js) bleibt
// bedienbar. Version muss zu WEBLLM_URL in talk.js passen.
import { WebWorkerMLCEngineHandler } from 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.85/+esm';

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = msg => handler.onmessage(msg);
