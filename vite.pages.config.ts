import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const pagesRoot = resolve(projectRoot, "pages-html");

export default defineConfig({
  root: pagesRoot,
  base: "/minjerribah-screen-media-network/",
  publicDir: resolve(projectRoot, "public"),
  define: {
    "process.env.NEXT_PUBLIC_SITE_BASE_PATH": JSON.stringify(
      "/minjerribah-screen-media-network",
    ),
  },
  plugins: [react()],
  build: {
    outDir: resolve(projectRoot, "pages-dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(pagesRoot, "index.html"),
        network: resolve(pagesRoot, "network/index.html"),
        places: resolve(pagesRoot, "places/index.html"),
        funding: resolve(pagesRoot, "funding/index.html"),
        join: resolve(pagesRoot, "join/index.html"),
        sources: resolve(pagesRoot, "sources/index.html"),
      },
    },
  },
});
