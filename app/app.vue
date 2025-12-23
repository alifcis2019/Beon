<script setup lang="ts">
const { locale, locales } = useI18n();

const currentLocale = computed(() => {
  return (locales.value as any[]).find((l) => l.code === locale.value);
});

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => currentLocale.value?.dir || "ltr"),
  },
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
    // Resource hints for better performance
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    { rel: "dns-prefetch", href: "https://images.unsplash.com" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Beon` : "Beon";
  },
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
