// @ts-check
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // adapter: node({ mode: "standalone" }),
  adapter: vercel({}),
  integrations: [react(), tailwind(), alpinejs()],
});
