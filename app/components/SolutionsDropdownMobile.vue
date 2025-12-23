<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const isOpen = ref(false)

const solutions = computed(() => [
  {
    label: t('layout.header.solutions.otp.label'),
    to: localePath('/solutions/otp'),
    description: t('layout.header.solutions.otp.description'),
    icon: 'i-heroicons-shield-check',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-500/10'
  },
  {
    label: t('layout.header.solutions.sms.label'),
    to: localePath('/solutions/sms'),
    description: t('layout.header.solutions.sms.description'),
    icon: 'i-heroicons-envelope',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-500/10'
  },
  {
    label: t('layout.header.solutions.whatsapp.label'),
    to: localePath('/solutions/whatsapp'),
    description: t('layout.header.solutions.whatsapp.description'),
    icon: 'i-simple-icons-whatsapp',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-500/10'
  }
])
</script>

<template>
  <div class="w-full">
    <!-- Trigger Button -->
    <button
      class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="isOpen = !isOpen"
    >
      <span>{{ t("layout.header.solutions.label") }}</span>
      <UIcon
        name="i-heroicons-chevron-down"
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Expandable Solutions List -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="isOpen"
        class="overflow-hidden"
      >
        <div class="mt-2 space-y-1 pl-2">
          <NuxtLink
            v-for="(solution, index) in solutions"
            :key="index"
            :to="solution.to"
            class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
          >
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              :class="solution.bgColor"
            >
              <UIcon
                :name="solution.icon"
                class="w-4 h-4"
                :class="solution.color"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <h3
                class="text-sm font-semibold text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ solution.label }}
              </h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                {{ solution.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>
