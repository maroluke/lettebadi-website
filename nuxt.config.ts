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
    public: {
      calApiUrl: process.env.CAL_API_URL || "https://api.cal.com/v2",
    },
  },
});
