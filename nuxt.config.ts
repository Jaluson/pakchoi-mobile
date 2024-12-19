// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    baseURL: '/pakchoi-mobile'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vant/nuxt'],
  runtimeConfig: {
    public: {
      pk: '123',
      baseURI: process.env.BASE_URI || 'http://localhost:3000',
    }
  }
})
