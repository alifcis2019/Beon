<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('signup.meta.title'),
  description: t('signup.meta.description'),
  ogTitle: t('signup.meta.ogTitle'),
  ogDescription: t('signup.meta.ogDescription'),
  twitterTitle: t('signup.meta.twitterTitle'),
  twitterDescription: t('signup.meta.twitterDescription')
})
</script>

<template>
  <UContainer class="py-12">
    <h1 class="text-3xl font-bold mb-4">
      {{ $t("signup.title") }}
    </h1>
    <p>{{ $t("signup.coming_soon") }}</p>
  </UContainer>
</template>
