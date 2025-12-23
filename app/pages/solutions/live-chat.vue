<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <NuxtErrorBoundary>
      <!-- Hero Section -->
      <div
        class="relative overflow-hidden py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center">
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6"
            >
              <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="w-10 h-10 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6"
            >
              {{ $t("index.services.items.live_chat.label") }}
            </h1>
            <p
              class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
            >
              {{ $t("index.services.items.live_chat.title") }}
            </p>
            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <UButton
                to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
                target="_blank"
                color="primary"
                size="xl"
                class="shadow-lg shadow-blue-500/20"
              >
                {{ $t("index.hero.try_now") }}
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </UButton>
              <UButton
                :to="$localePath('/contact')"
                color="neutral"
                variant="outline"
                size="xl"
              >
                Contact Sales
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="py-24 bg-white dark:bg-gray-950">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(feature, index) in 3"
              :key="index"
              class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4"
              />
              <p class="text-gray-700 dark:text-gray-300">
                {{ $t(`index.services.items.live_chat.features.${index + 1}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <HomeLogos />

      <template #error="{ error }">
        <div
          class="flex flex-col items-center justify-center min-h-[50vh] gap-4"
        >
          <p class="text-red-500 font-medium">
            Something went wrong loading this section.
          </p>
          <UButton color="gray" @click="error.value = null">
            Try again
          </UButton>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: "Live Chat - BeOn",
  description:
    "Conversation management made easier with live chat. Collect all your customer conversations in one organized inbox.",
  ogTitle: "Live Chat - BeOn",
  ogDescription:
    "Conversation management made easier with live chat. Collect all your customer conversations in one organized inbox.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});
</script>
