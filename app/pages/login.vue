<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('login.meta.title'),
  description: t('login.meta.description'),
  ogTitle: t('login.meta.ogTitle'),
  ogDescription: t('login.meta.ogDescription'),
  twitterTitle: t('login.meta.twitterTitle'),
  twitterDescription: t('login.meta.twitterDescription')
})
</script>

<template>
  <UContainer class="py-12">
    <h1 class="text-3xl font-bold mb-4">
      {{ $t("login.title") }}
    </h1>
    <p>{{ $t("login.coming_soon") }}</p>
  </UContainer>
</template>
