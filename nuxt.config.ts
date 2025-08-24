// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/']
    }
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  app: {
    baseURL: '/test-nuxt/',
    buildAssetsDir: 'assets'
  }
})