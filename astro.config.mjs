import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  site: "https://francoarossi.vercel.app/",
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@utils": "/src/utils",
        "@icons": "/src/icons",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@assets": "/src/assets",
      },
    },
  },
});
