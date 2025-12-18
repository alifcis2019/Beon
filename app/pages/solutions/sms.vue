<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <NuxtErrorBoundary>
      <SmsHero />

      <SmsFeature
        title="Drive Sales with Targeted SMS Marketing"
        :features="[
          'Send personalized promotional offers to thousands of customers instantly.',
          'Schedule campaigns for optimal delivery times.',
          'Track click-through rates and conversions with detailed analytics.',
        ]"
        image-side="right"
        type="marketing"
      />

      <SmsFeature
        title="Keep Customers Informed with Real-time Alerts"
        :features="[
          'Send instant order confirmations, shipping updates, and appointment reminders.',
          'Ensure critical notifications reach your users immediately.',
          'Reliable delivery for transactional messages via direct carrier routes.',
        ]"
        image-side="left"
        type="transactional"
      />

      <SmsIntegration />

      <SmsVideo />

      <template #error="{ error }">
        <div
          class="flex flex-col items-center justify-center min-h-[50vh] gap-4"
        >
          <p class="text-red-500 font-medium">
            Something went wrong loading this section.
          </p>
          <UButton color="neutral" @click="(error as any).value = null">
            Try again
          </UButton>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import SmsHero from "~/components/sms/SmsHero.vue";
import SmsFeature from "~/components/sms/SmsFeature.vue";
import SmsIntegration from "~/components/sms/SmsIntegration.vue";
import SmsVideo from "~/components/sms/SmsVideo.vue";

useSeoMeta({
  title: "SMS Solutions - BeOn",
  description: "Reliable Bulk SMS for marketing and notifications.",
  ogTitle: "SMS Solutions - BeOn",
  ogDescription: "Reliable Bulk SMS for marketing and notifications.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});
</script>
