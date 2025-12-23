<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("index.meta.title"),
  description: () => t("index.meta.description"),
  ogTitle: () => t("index.meta.title"),
  ogDescription: () => t("index.meta.description"),
  ogImage: "https://beon.chat/og-image.png", // Placeholder
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <!-- Critical above-the-fold content -->
    <HomeHeroSection />

    <!-- Below-the-fold components with lazy loading for better performance -->
    <LazyHomeLogos />
    <LazyHomeServices />
    <LazyHomeClientJourney />
    <LazyHomeSmartMessages />
    <LazyHomeWhyBeOn />
  </div>
</template>
