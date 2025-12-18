<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t('layout.header.home'),
    to: '/'
  },
  {
    label: t('layout.header.solutions.label'),
    children: [
      {
        label: t('layout.header.solutions.otp.label'),
        to: '/solutions/otp',
        description: t('layout.header.solutions.otp.description'),
        icon: 'i-heroicons-shield-check'
      },
      {
        label: t('layout.header.solutions.sms.label'),
        to: '/solutions/sms',
        description: t('layout.header.solutions.sms.description'),
        icon: 'i-heroicons-envelope'
      },
      {
        label: t('layout.header.solutions.whatsapp.label'),
        to: '/solutions/whatsapp',
        description: t('layout.header.solutions.whatsapp.description'),
        icon: 'i-simple-icons-whatsapp'
      }
    ]
  },

  {
    label: t('layout.header.contact'),
    to: '/contact'
  },
  {
    label: t('layout.header.support'),
    to: '#'
  },
  {
    label: t('layout.header.blogs'),
    to: '/blog'
  }
])
</script>

<template>
  <UHeader
    mode="drawer"
    :class="[
      'max-w-7xl mx-auto rounded-xl  z-50 transition-all duration-300 ease-in-out',
      isScrolled
        ? 'top-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-gray-200 dark:border-gray-800'
        : 'top-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-sm border-transparent'
    ]"
    class="border"
  >
    <template #title>
      <AppLogo class="transition-transform duration-300 hover:scale-105" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <LanguageSwitcher />
      <UColorModeButton class="transition-transform hover:scale-110" />

      <UButton
        label="Login"
        color="neutral"
        variant="ghost"
        to="https://app.beon.chat/login"
        target="_blank"
        class="hidden lg:flex transition-transform hover:scale-105"
      />

      <UButton
        label="Start Your Free Trial"
        color="primary"
        to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
        target="_blank"
        class="hidden lg:flex transition-transform hover:scale-105 shadow-md hover:shadow-lg"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <div class="mt-4 flex flex-col gap-2">
        <UButton
          label="Login"
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
          to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
          target="_blank"
          block
          class="justify-center"
        />
      </div>
    </template>
  </UHeader>
</template>
