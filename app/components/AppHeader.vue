<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Product",
    to: "#",
    children: [
      {
        label: "Features",
        to: "#",
        description: "Explore our powerful features",
      },
      {
        label: "Integrations",
        to: "#",
        description: "Connect with your favorite tools",
      },
    ],
  },
  {
    label: "Industries",
    to: "#",
    children: [
      {
        label: "SaaS",
        to: "#",
        description: "Solutions for software companies",
      },
      {
        label: "E-commerce",
        to: "#",
        description: "Boost your online store",
      },
    ],
  },
  {
    label: "Resources",
    to: "#",
    children: [
      {
        label: "Blog",
        to: "#",
        description: "Latest news and updates",
      },
      {
        label: "Documentation",
        to: "#",
        description: "Learn how to use our platform",
      },
    ],
  },
  {
    label: "Pricing",
    to: "#",
  },
  {
    label: "Why Us",
    to: "#",
  },
]);
</script>

<template>
  <UHeader mode="drawer">
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UButton
        color="neutral"
        variant="ghost"
        icon="i-heroicons-globe-alt"
        aria-label="Language"
      />

      <UButton label="Login" color="neutral" variant="ghost" to="/login" />

      <UButton
        label="Talk to Sales"
        color="neutral"
        variant="outline"
        to="/contact"
      />

      <UButton label="Start Free Trial" color="primary" to="/signup" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
