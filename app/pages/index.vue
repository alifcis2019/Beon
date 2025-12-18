<script setup lang="ts">
import PlatformShowcase from '~/components/home/PlatformShowcase.vue'

const { t } = useI18n()

useSeoMeta({
  title: () => t('index.meta.title'),
  description: () => t('index.meta.description'),
  ogTitle: () => t('index.meta.title'),
  ogDescription: () => t('index.meta.description'),
  ogImage: 'https://beon.chat/og-image.png', // Placeholder
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <HomeHeroSection />
    <HomeLogos />
    <HomeServices />
    <HomeClientJourney />
    <HomeSmartMessages />
    <HomeWhyBeOn />
  </div>
</template>
