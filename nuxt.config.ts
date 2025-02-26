export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "shadcn-nuxt"],
  css: ["~/assets/css/main.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/shadcn/ui",
  },
  runtimeConfig: {
    calApiKey: process.env.CAL_API_KEY,
    infomaniakApiKey: process.env.INFOMANIAK_API_KEY,
    public: {
      calApiUrl: process.env.CAL_API_URL || "https://api.cal.com/v2",
    },
  },
  app: {
    head: {
      title: "Lettebadi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Lettebadi - Eine der beliebtesten Badeanstalten der Stadt",
        },
        { property: "og:title", content: "Lettebadi" },
        {
          property: "og:description",
          content: "Lettebadi - Eine der beliebtesten Badeanstalten der Stadt",
        },
        { property: "og:image", content: "/media/event-type-1.jpg" },
        { property: "og:url", content: "https://www.lettebadi.ch" },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
