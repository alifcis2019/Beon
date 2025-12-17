<template>
  <div>
    <OtpHero />

    <OtpFeature
      title="Features of the SMS activation message"
      :features="[
        'The most economical option to send OTP within Egypt without additional costs to the message price.',
        'Send OTP in your company name if you have a commercial register and tax card.',
        'Or use public sender as an alternative to obtaining official documents.',
      ]"
      image-side="right"
      type="sms"
    />

    <OtpFeature
      title="Features of the WhatsApp activation message"
      :features="[
        'The best option to send international and local OTP messages.',
        'Activate the service officially via Meta to ensure your number is never blocked.',
        'Send OTP under your business name without the need for official documents through BeOn engineers using cloud WhatsApp activation.',
      ]"
      image-side="left"
      type="whatsapp"
    />

    <OtpIntegration />

    <OtpVideo />
  </div>
</template>

<script setup lang="ts">
import OtpHero from "~/components/otp/OtpHero.vue";

definePageMeta({
  title: "OTP Solutions - BeOn",
  description: "Secure and instant OTP delivery via SMS and WhatsApp.",
});
</script>
