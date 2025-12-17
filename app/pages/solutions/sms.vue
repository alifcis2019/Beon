<template>
  <div>
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
