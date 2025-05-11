import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  site: "https://francoarossi.vercel.app/",
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@utils": "/src/utils",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@assets": "/src/assets",
        "@": ""
      }
    }
  }
});