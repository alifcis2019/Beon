<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Our Solutions",
    children: [
      {
        label: "Solution 1",
        to: "#",
        description: "Description for solution 1",
      },
      {
        label: "Solution 2",
        to: "#",
        description: "Description for solution 2",
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
    class="max-w-7xl mx-auto border rounded-xl top-4 dark:bg-gray-900 shadow-lg"
  >
    <template #title>
      <AppLogo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        icon="i-emojione-flag-for-egypt"
        aria-label="Language"
      />
      <UColorModeButton />

      <UButton
        label="Login"
        color="neutral"
        variant="ghost"
        to="/login"
        class="hidden lg:flex"
      />

      <UButton
        label="Start Your Free Trial"
        color="primary"
        to="/signup"
        class="hidden lg:flex"
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
