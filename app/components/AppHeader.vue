<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t } = useI18n();

const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 20);

const localePath = useLocalePath();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("layout.header.home"),
    to: localePath("/"),
  },
  {
    label: t("layout.header.contact"),
    to: localePath("/contact"),
  },
  {
    label: t("layout.header.blogs"),
    to: localePath("/blog"),
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

    <div class="hidden lg:flex items-center gap-1">
      <UNavigationMenu :items="items.slice(0, 1)" />
      <SolutionsDropdown />
      <UNavigationMenu :items="items.slice(1)" />
    </div>

    <template #right>
      <LanguageSwitcher />
      <UColorModeButton class="transition-transform hover:scale-110" />

      <UButton
        color="neutral"
        variant="ghost"
        to="https://app.beon.chat/login"
        target="_blank"
        class="hidden lg:flex transition-transform hover:scale-105"
      >
        {{ t("layout.header.login") }}
      </UButton>
      <UButton
        color="primary"
        :to="$localePath('/book-demo')"
        class="hidden lg:flex transition-transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        {{ t("layout.header.start_trial") }}
      </UButton>
    </template>

    <template #body>
      <div class="-mx-2.5 space-y-1">
        <!-- Home Link -->
        <UNavigationMenu :items="items.slice(0, 1)" orientation="vertical" />

        <!-- Solutions Dropdown Mobile -->
        <SolutionsDropdownMobile />

        <!-- Contact & Blogs Links -->
        <UNavigationMenu :items="items.slice(1)" orientation="vertical" />
      </div>

      <div class="mt-4 flex flex-col gap-2">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://app.beon.chat/login"
          target="_blank"
          block
          class="justify-start"
        />
        <UButton
          label="Start Your Free Trial"
          color="primary"
          :to="$localePath('/book-demo')"
          block
          class="justify-center"
        />
      </div>
    </template>
  </UHeader>
</template>
