/* import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";


export default defineConfig({
  integrations: [
    storyblok({
      accessToken:  process.env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        ticket: "storyblok/Ticket",
        tickets_overview: "storyblok/TicketsOverview",
      },
    }),
  ],
}); */


import { defineConfig } from "astro/config";
import { storyblok } from "@storyblok/astro";

export default defineConfig({
  integrations: [
    storyblok({
      accessToken:  process.env.STORYBLOK_TOKEN,
    }),
  ],
});
