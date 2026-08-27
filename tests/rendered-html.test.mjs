import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/", hostname = "localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://${hostname}${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("redirects www to the canonical Twiddl domain", async () => {
  const response = await render("/support?from=www", "www.twiddl.app");

  assert.equal(response.status, 308);
  assert.equal(
    response.headers.get("location"),
    "https://twiddl.app/support?from=www",
  );
});

test("renders Twiddl's finished homepage and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Twiddl — Chromatic tuner for iPhone and Android<\/title>/i);
  assert.match(html, /Open it\./);
  assert.match(html, /Play\. Tune\./);
  assert.match(html, /Download free on the App Store/);
  assert.match(html, /Android closed test/);
  assert.match(
    html,
    /href="https:\/\/apps\.apple\.com\/app\/twiddl-chromatic-tuner\/id6800441300"/,
  );
  assert.match(html, /name="apple-itunes-app" content="app-id=6800441300"/i);
  assert.doesNotMatch(html, /Coming soon to the App Store/i);
  assert.match(html, /No audio uploads/);
  assert.match(html, /Open it\. You’re already tuning/);
  assert.match(html, /no start button, account prompt, ad, or upgrade pitch/i);
  assert.match(html, /I built the tuner I wanted to use/);
  assert.match(html, /This tuner is free, and it will stay free/);
  assert.match(html, /Quieter notes, easier to hear/);
  assert.match(html, /https:\/\/barbunzel\.com/);
  assert.match(html, /href="\/changelog"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/support"/);
  assert.match(html, /property="og:image" content="https:\/\/twiddl\.app\/og\.png"/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the public changelog with clear release states", async () => {
  const response = await render("/changelog");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Changelog — Twiddl<\/title>/i);
  assert.match(html, /0\.1\.1/);
  assert.match(html, /live on iPhone/i);
  assert.match(html, /Google Play closed testing/i);
  assert.match(html, /Android beta/);
  assert.match(html, /Closed test/);
  assert.match(html, /0\.1\.0 · iPhone/);
  assert.match(html, /Released/);
});

test("renders public privacy and support information", async () => {
  const [privacyResponse, supportResponse] = await Promise.all([
    render("/privacy"),
    render("/support"),
  ]);

  assert.equal(privacyResponse.status, 200);
  assert.equal(supportResponse.status, 200);

  const [privacy, support] = await Promise.all([
    privacyResponse.text(),
    supportResponse.text(),
  ]);

  assert.match(privacy, /Twiddl does not collect personal data/);
  assert.match(privacy, /app for iPhone and Android/);
  assert.match(privacy, /never recorded, saved, uploaded, or transmitted/);
  assert.match(privacy, /href="\/support"/);
  assert.doesNotMatch(privacy, /hello@twiddl\.app/);
  assert.match(support, /No note appears/);
  assert.match(support, /unplugged electric guitar or bass/i);
  assert.match(support, /Microphone access is off/);
  assert.match(support, /On Android/);
  assert.doesNotMatch(support, />hello@twiddl\.app</);
  assert.match(support, /mailto:hello@twiddl\.app/);
  assert.match(support, /Email Twiddl Support/);
});

test("ships the brand and social assets", async () => {
  const paths = [
    "../public/twiddl-icon.png",
    "../public/twiddl-in-tune.jpg",
    "../public/twiddl-flat.jpg",
    "../public/og.png",
  ];

  await Promise.all(paths.map((path) => access(new URL(path, import.meta.url))));

  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.match(packageJson, /"name": "twiddl-site"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("uses reliable document navigation for internal links", async () => {
  const sourcePaths = [
    "../app/page.tsx",
    "../app/privacy/page.tsx",
    "../app/changelog/page.tsx",
    "../app/site-chrome.tsx",
  ];

  const sources = await Promise.all(
    sourcePaths.map((path) => readFile(new URL(path, import.meta.url), "utf8")),
  );

  for (const source of sources) {
    assert.doesNotMatch(source, /from ["']next\/link["']/);
  }
});
