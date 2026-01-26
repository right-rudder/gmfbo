// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://growmyfbo.com",
  integrations: [
    react(),
    sitemap({
      // Generate sitemap for all routes
      filter: (page) =>
        !page.includes("contact-confirmation") &&
        !page.includes("/404") &&
        !page.includes("/500"),
      // Serialize to handle different priorities for different routes
      serialize: (item) => {
        if (item.url.includes("/blog/")) {
          item.changefreq = "monthly";
          item.priority = 0.6;
        } else if (item.url === "https://growmyfbo.com/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        } else if (item.url.includes("/flight-crew/")) {
          item.priority = 0.8;
          item.changefreq = "monthly";
        } else {
          // Default values for other pages
          item.changefreq = "weekly";
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
