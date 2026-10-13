const title = 'Luvhere — Privacy-first dating'
const description = 'Meet verified people for who they are. Luvhere hides photos and names until you both like each other, so connections start with personality.'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  runtimeConfig: {
    public: {
      siteUrl: 'https://luvhere.app',
      appStoreUrl: '',
      playStoreUrl: '',
      supportEmail: 'support@luvhere.app',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: description },
        { name: 'theme-color', content: '#0B070D' },
        { name: 'color-scheme', content: 'dark' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/app-icon-512.png' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Poppins', provider: 'google', weights: [600] },
    ],
  },

  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/robots.txt'] },
  },
})
