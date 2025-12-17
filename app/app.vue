<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Beon` : "Beon";
  },
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
