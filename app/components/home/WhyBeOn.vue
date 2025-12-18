<script setup lang="ts">
import { whyBeOn } from '~/data/whyBeOn'

const { t } = useI18n()
const sectionRef = ref(null)
const isVisible = ref(false)

const whyBeOnWithKeys = computed(() => {
  const keys = ['competitive_prices', 'ease_of_use', 'customer_service']
  return whyBeOn.map((item, index) => ({
    ...item,
    key: keys[index]
  }))
})

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 }
)
</script>

<template>
  <div
    ref="sectionRef"
    class="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Background Blobs -->
    <div
      class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
    />
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6"
        >
          {{ $t("index.why_beon.title") }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400"
          >
            {{ $t("index.why_beon.brand_name") }}
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ $t("index.why_beon.description") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in whyBeOnWithKeys"
          :key="index"
          class="group bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 transition-all duration-500 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
          :class="[
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
          >
            <UIcon
              :name="card.icon"
              class="w-8 h-8"
            />
          </div>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t(`index.why_beon.cards.${card.key}.title`) }}
          </h3>

          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ $t(`index.why_beon.cards.${card.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
