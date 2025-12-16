<script setup lang="ts">
import HeroSection from "~/components/home/HeroSection.vue";
import Logos from "~/components/home/Logos.vue";
import Services from "~/components/home/Services.vue";

useSeoMeta({
  title: "Home",
  description:
    "Streamline your customer communication with our comprehensive SaaS platform. Integrate chat, CRM, and team management in one place.",
  ogTitle: "Home",
  ogDescription:
    "Streamline your customer communication with our comprehensive SaaS platform. Integrate chat, CRM, and team management in one place.",
  ogImage: "https://beon.saas/og-image.png", // Placeholder
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <HeroSection />
    <Logos />
    <Services />
  </div>
</template>
