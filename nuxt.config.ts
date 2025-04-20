// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt", "@nuxt/image", "nuxt-vuefire"],
  vuefire: {
    auth: { enabled: true, sessionCookie: true },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
  },
  nitro: {
    firebase: {
      nodeVersion: "20",
      gen: 2,
    },
    preset: "firebase",
    replace: {
      [`functions.https.onRequest`]: `functions.region('europe-west2').https.onRequest`,
    },
  },
  image: {
    q: 50,
    alias: {
      unsplash: "https://images.unsplash.com",
    },
    dir: "assets/images",
    provider: "unsplash",
    unsplash: {
      modifiers: {
        q: 50,
        w: 1920,
        auto: "format",
        fit: "crop",
        fm: "webp",
        ixlib: "rb-4.0.3",
        ixid: "M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  },

  compatibilityDate: "2025-04-18",
});
