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
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      script: [
        {
          'src': 'https://app.beon.chat/widget.js',
          'tagPosition': 'bodyClose',
          'data-api-key': 'df73436fd31e7c4a42d187e049f746b5',
          'async': true,
          'defer': true
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://beon.chat/', // Placeholder, should be env var or actual domain
    name: 'Beon'
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
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.ts' },
      { code: 'ar', name: 'Arabic', file: 'ar.ts', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '../locales',
    strategy: 'prefix_except_default'
  },

  icon: {
    serverBundle: {
      collections: ['circle-flags', 'lucide', 'simple-icons', 'heroicons']
    }
  }
})
