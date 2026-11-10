import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // Keep Astro 5 HTML whitespace handling. Astro 7 defaults to JSX rules.
  compressHTML: true,
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://francoarossi.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": "/src/components",
        "@utils": "/src/utils",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@assets": "/src/assets",
        "@": "",
      },
    },
  },
});
