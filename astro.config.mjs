// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["picsum.photos", "fastly.picsum.photos"],
  },
  vite: {
    plugins: [visualizer({ gzipSize: true })],
  },
});
