<script setup lang="ts">
const { locale, locales } = useI18n()

const currentLocale = computed(() => {
  return (locales.value as any[]).find(l => l.code === locale.value)
})

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => currentLocale.value?.dir || 'ltr')
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Beon` : 'Beon'
  }
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
