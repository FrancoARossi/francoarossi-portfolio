import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: "https://francoarossi.vercel.app/",
});