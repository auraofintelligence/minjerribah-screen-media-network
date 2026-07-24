import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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

const routes = [
  ["/", "index.html", "Stories, skills, screens"],
  ["/network", "network/index.html", "Make stories. Check them."],
  ["/places", "places/index.html", "One street. Several horizons."],
  ["/funding", "funding/index.html", "Turn a big vision into visible"],
  ["/join", "join/index.html", "Bring one real piece."],
  ["/sources", "sources/index.html", "Keep official facts"],
];

test("server-renders every public route with honest project language", async () => {
  for (const [path, , expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(expected, "i"), path);
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
  }
});

test("ships a separate real multi-page GitHub Pages build", async () => {
  for (const [, relative] of routes) {
    const html = await readFile(new URL(`../pages-dist/${relative}`, import.meta.url), "utf8");
    assert.match(html, /minjerribah-screen-media-network\/assets\//i);
    assert.doesNotMatch(html, /codex-preview|site-creator-vinext-starter/i);
  }
});

test("removes starter-only assets and keeps reduced-motion support", async () => {
  const [css, packageJson, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /focus-visible/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /Minjerribah Screen & Media Network/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
  await assert.rejects(access(new URL("../public/favicon.svg", import.meta.url)));
});
