<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
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
