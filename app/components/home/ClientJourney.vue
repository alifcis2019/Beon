<script setup lang="ts">
import { clientJourney } from '~/data/clientJourney'

const { t } = useI18n()

const clientJourneyWithKeys = computed(() => {
  return clientJourney.map(item => ({
    ...item,
    key: item.step.toString()
  }))
})
</script>

<template>
  <div
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Background Elements -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4"
        >
          {{ $t("index.client_journey.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A simple, transparent process to get you started with BeOn.
        </p>
      </div>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div
          class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"
        />

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          <div
            v-for="(item, index) in clientJourneyWithKeys"
            :key="item.step"
            class="relative group"
          >
            <!-- Step Number Circle -->
            <div class="relative z-10 flex justify-center mb-6">
              <div
                class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300 shadow-sm"
              >
                {{ item.step }}
              </div>
            </div>

            <!-- Card Content -->
            <div
              class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-10 h-full flex flex-col items-center text-center"
            >
              <div
                class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {{ $t(`index.client_journey.steps.${item.key}.title`) }}
              </h3>

              <ul class="space-y-2 text-left w-full">
                <li
                  v-for="(line, lIndex) in 3"
                  :key="lIndex"
                  class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <UIcon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-green-500 shrink-0 mt-0.5"
                  />
                  <span>
                    {{
                      $t(
                        `index.client_journey.steps.${item.key}.description.${lIndex + 1}`
                      )
                    }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
