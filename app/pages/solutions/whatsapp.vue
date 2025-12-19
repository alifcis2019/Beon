<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <NuxtErrorBoundary>
      <WhatsappHero />
      <HomeLogos />
      <WhatsappBento />
      <WhatsappDemo />

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
import WhatsappHero from "~/components/whatsapp/WhatsappHero.vue";
import WhatsappDemo from "~/components/whatsapp/WhatsappDemo.vue";
import WhatsappBento from "~/components/whatsapp/WhatsappBento.vue";
import WhatsappTrust from "~/components/whatsapp/WhatsappTrust.vue";
import type LogosVue from "~/components/home/Logos.vue";

useSeoMeta({
  title: "WhatsApp Business API - BeOn",
  description:
    "Automate customer communication with the official WhatsApp Business API.",
  ogTitle: "WhatsApp Business API - BeOn",
  ogDescription:
    "Automate customer communication with the official WhatsApp Business API.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});
</script>
