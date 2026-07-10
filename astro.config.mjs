// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  // TODO: set to real domain
  site: "https://thenick775.github.io",
  base: "/personal-website-v3/",
  vite: {
    plugins: [visualizer({ gzipSize: true })],
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    playformCompress({
      CSS: false,
    }),
  ],
});
