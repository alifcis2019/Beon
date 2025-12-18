<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  setLocale(newLocale)
}

const buttonIcon = computed(() => {
  // If current is 'en', show Egypt flag (to switch to Arabic)
  // If current is 'ar', show US flag (to switch to English)
  return locale.value === 'en' ? 'i-circle-flags-eg' : 'i-circle-flags-us'
})
</script>

<template>
  <UButton
    color="primary"
    :label="locale == 'en' ? 'ar' : 'en'"
    class="capitalize cursor-pointer p-1"
    size="xl"
    :ui="{ rounded: 'rounded-full' }"
    @click="toggleLanguage"
  />
</template>
