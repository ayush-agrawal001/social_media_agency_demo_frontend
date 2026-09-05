import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished Cinemoon site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Cinemoon Studios \| Video Production &amp; Brand Storytelling<\/title>/i);
  assert.match(html, /Films that/);
  assert.match(html, /make people/);
  assert.match(html, /Shawarmawala/);
  assert.match(html, /House of Vision/);
  assert.match(html, /info@cinemoonstudios\.com/);
  assert.match(html, /\+91 77738 39884/);
  assert.match(html, /shawarmawala-poster\.jpg/);
  assert.match(html, /aria-label="Play Shawarmawala Brand Story"/);
  assert.doesNotMatch(html, /codex-preview|Building your site|SkeletonPreview/i);
});

test("preserves the primary content and interaction destinations", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  for (const anchor of ["about", "house-of-vision", "featured-story", "work", "services", "contact"]) {
    assert.match(page, new RegExp(`id=["']${anchor}["']`));
  }

  assert.match(page, /https:\/\/www\.youtube\.com\/watch\?v=2tEyh64lmk8/);
  assert.match(page, /https:\/\/www\.instagram\.com\/cinemoon\.studios/);
  assert.match(layout, /Cinemoon Studios \| Video Production & Brand Storytelling/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", projectRoot)));
});
