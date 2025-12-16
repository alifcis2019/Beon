// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://beon.saas', // Placeholder, should be env var or actual domain
    name: 'Beon SaaS',
  },

  ui: {
    theme: {
      colors: ['primary', 'error', 'warning', 'success', 'info'],
      transitions: true,
      defaultVariants: {
        color: 'neutral',
        size: 'sm'
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
