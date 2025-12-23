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

  /**
   * ❌ شيلنا تحميل السكربت من هنا
   * عشان ما يتحملش أثناء SSR
   */

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://beon.chat/',
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
    /**
     * ✅ تفعيل الضغط لتحسين الأداء
     */
    compressPublicAssets: true,

    prerender: {
      routes: ['/'],
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
    strategy: 'prefix'
  },

  /**
   * ✅ Icons will be loaded on-demand for better performance
   * Instead of bundling all icon collections in the server bundle
   */

  /**
   * ✅ Removed aggressive prefetch/preload disabling
   * Nuxt's smart prefetching will handle resource hints automatically
   */
})
