<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  title: string
  features: string[]
  imageSide: 'left' | 'right'
  type: 'marketing' | 'transactional'
}>()

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)
</script>

<template>
  <section
    ref="target"
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-1' : 'lg:order-2',
            'transition-all duration-1000 ease-out',
            isVisible
              ? 'opacity-100 translate-x-0'
              : imageSide === 'right'
                ? 'opacity-0 -translate-x-12'
                : 'opacity-0 translate-x-12'
          ]"
        >
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-blue-900/20 border border-gray-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-sm"
          >
            <UIcon
              :name="
                type === 'marketing'
                  ? 'i-heroicons-megaphone'
                  : 'i-heroicons-bolt'
              "
              class="w-4 h-4"
            />
            <span>{{
              type === "marketing" ? "Bulk Marketing" : "Transactional Alerts"
            }}</span>
          </div>

          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8"
          >
            {{ title }}
          </h2>

          <div class="space-y-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex gap-4 p-4 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50 shadow-sm hover:shadow-md"
              :style="{ transitionDelay: `${index * 100}ms` }"
              :class="
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              "
            >
              <div
                class="shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"
              >
                <UIcon
                  name="i-heroicons-check"
                  class="w-6 h-6"
                />
              </div>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ feature }}
              </p>
            </div>
          </div>
        </div>

        <!-- Visual Side -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-2' : 'lg:order-1',
            'relative perspective-1000'
          ]"
        >
          <div
            class="relative aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-2xl transition-all duration-1000 delay-300"
            :class="
              isVisible
                ? 'opacity-100 rotate-y-0 scale-100'
                : 'opacity-0 rotate-y-12 scale-95'
            "
          >
            <!-- Abstract UI Mockup -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col"
            >
              <!-- Marketing Analytics UI -->
              <template v-if="type === 'marketing'">
                <div class="flex items-center justify-between mb-8">
                  <div
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Campaign Performance
                  </div>
                  <div class="flex gap-1">
                    <div
                      class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
                    />
                    <div
                      class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
                    />
                  </div>
                </div>

                <!-- Chart Area -->
                <div class="flex items-end gap-2 h-32 mb-8 px-4">
                  <div
                    class="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[40%]"
                  />
                  <div
                    class="w-full bg-blue-200 dark:bg-blue-900/40 rounded-t-lg h-[60%]"
                  />
                  <div
                    class="w-full bg-blue-300 dark:bg-blue-900/60 rounded-t-lg h-[30%]"
                  />
                  <div
                    class="w-full bg-blue-400 dark:bg-blue-800/80 rounded-t-lg h-[80%]"
                  />
                  <div
                    class="w-full bg-blue-500 dark:bg-blue-600 rounded-t-lg h-[50%]"
                  />
                  <div
                    class="w-full bg-blue-600 dark:bg-blue-500 rounded-t-lg h-[90%]"
                  />
                </div>

                <!-- Stats Cards -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                    <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Sent
                    </div>
                    <div
                      class="text-lg font-bold text-gray-900 dark:text-white"
                    >
                      24.5k
                    </div>
                  </div>
                  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <div class="text-xs text-blue-600 dark:text-blue-400 mb-1">
                      Clicks
                    </div>
                    <div
                      class="text-lg font-bold text-blue-700 dark:text-blue-300"
                    >
                      12.8%
                    </div>
                  </div>
                </div>
              </template>

              <!-- Transactional Alert UI -->
              <template v-else>
                <div class="flex items-center justify-between mb-8">
                  <div
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    System Alerts
                  </div>
                  <div
                    class="h-2 w-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-[10px] flex items-center justify-center px-2 font-bold"
                  >
                    LIVE
                  </div>
                </div>

                <div class="space-y-4">
                  <div
                    class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0"
                    >
                      <UIcon
                        name="i-heroicons-check"
                        class="w-5 h-5"
                      />
                    </div>
                    <div>
                      <div
                        class="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"
                      />
                      <div
                        class="h-2 w-32 bg-gray-100 dark:bg-gray-600/50 rounded-full"
                      />
                    </div>
                  </div>

                  <div
                    class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center opacity-75"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0"
                    >
                      <UIcon
                        name="i-heroicons-check"
                        class="w-5 h-5"
                      />
                    </div>
                    <div>
                      <div
                        class="h-2 w-20 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"
                      />
                      <div
                        class="h-2 w-28 bg-gray-100 dark:bg-gray-600/50 rounded-full"
                      />
                    </div>
                  </div>

                  <div
                    class="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-center opacity-50"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0"
                    >
                      <UIcon
                        name="i-heroicons-check"
                        class="w-5 h-5"
                      />
                    </div>
                    <div>
                      <div
                        class="h-2 w-24 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"
                      />
                      <div
                        class="h-2 w-16 bg-gray-100 dark:bg-gray-600/50 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-0 {
  transform: rotateY(0deg);
}
.rotate-y-12 {
  transform: rotateY(12deg);
}
</style>
