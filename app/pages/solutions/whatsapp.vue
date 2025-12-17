<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <WhatsappHero />
    <WhatsappTrust />
    <WhatsappBento />
    <WhatsappDemo />
  </div>
</template>

<script setup lang="ts">
import WhatsappHero from "~/components/whatsapp/WhatsappHero.vue";
import WhatsappDemo from "~/components/whatsapp/WhatsappDemo.vue";
import WhatsappBento from "~/components/whatsapp/WhatsappBento.vue";
import WhatsappTrust from "~/components/whatsapp/WhatsappTrust.vue";

definePageMeta({
  title: "WhatsApp Business API - BeOn",
  description:
    "Automate customer communication with the official WhatsApp Business API.",
});
</script>
