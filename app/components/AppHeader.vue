<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 20);

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Our Solutions",
    children: [
      {
        label: "Fast & Secure OTP Generation",
        to: "/solutions/otp",
        description: "Send secure one-time passwords instantly",
        icon: "i-heroicons-shield-check",
      },
      {
        label: "SMS Messages",
        to: "/solutions/sms",
        description: "Deliver marketing and transactional texts",
        icon: "i-heroicons-envelope",
      },
      {
        label: "WhatsApp Messaging",
        to: "#",
        description: "Engage customers through WhatsApp",
        icon: "i-simple-icons-whatsapp",
      },
    ],
  },
  {
    label: "Features",
    to: "#",
  },
  {
    label: "Contact us",
    to: "/contact",
  },
  {
    label: "Support",
    to: "#",
  },
  {
    label: "Blogs",
    to: "/blog",
  },
]);
</script>

<template>
  <UHeader
    mode="drawer"
    :class="[
      'max-w-7xl mx-auto rounded-xl  z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'top-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-gray-200 dark:border-gray-800'
        : 'top-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-sm border-transparent',
    ]"
    class="border"
  >
    <template #title>
      <AppLogo class="transition-transform duration-300 hover:scale-105" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        icon="i-emojione-flag-for-egypt"
        aria-label="Language"
        class="transition-transform hover:scale-110"
      />
      <UColorModeButton class="transition-transform hover:scale-110" />

      <UButton
        label="Login"
        color="neutral"
        variant="ghost"
        to="/login"
        class="hidden lg:flex transition-transform hover:scale-105"
      />

      <UButton
        label="Start Your Free Trial"
        color="primary"
        to="/signup"
        class="hidden lg:flex transition-transform hover:scale-105 shadow-md hover:shadow-lg"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <div class="mt-4 flex flex-col gap-2">
        <UButton
          label="Login"
          color="neutral"
          variant="ghost"
          to="/login"
          block
          class="justify-start"
        />
        <UButton
          label="Start Your Free Trial"
          color="primary"
          to="/signup"
          block
          class="justify-center"
        />
      </div>
    </template>
  </UHeader>
</template>
