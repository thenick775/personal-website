// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://nicholas-vancise.dev",
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
