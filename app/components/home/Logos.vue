<script setup lang="ts">
const { data: response } = await useFetch<{
  status: boolean
  message: string
  data: any[]
}>('https://v3.admin.beon.chat/api/logos')

const brands = computed(() => response.value?.data || [])

// Duplicate brands for seamless loop (aggressively to ensure coverage)
const marqueeBrands = computed(() => {
  const list = brands.value
  if (!list.length) return []
  return Array(10).fill(list).flat()
})
</script>

<template>
  <div
    class="py-12 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden border-y border-gray-100 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
      <h2
        class="text-lg sm:text-xl font-semibold leading-8 text-gray-600 dark:text-gray-300"
      >
        {{ $t("index.logos.trusted_by") }}
        <span class="text-primary-600 dark:text-primary-400 font-bold">{{
          $t("index.logos.brand_count")
        }}</span>
      </h2>
    </div>

    <!-- Force LTR for the marquee to ensure consistent scrolling direction -->
    <div
      class="relative w-full overflow-hidden"
      dir="ltr"
    >
      <!-- Gradient Masks -->
      <div
        class="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"
      />
      <div
        class="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"
      />

      <!-- Marquee Container -->
      <div class="flex w-max animate-marquee hover:pause">
        <div
          v-for="(item, index) in marqueeBrands"
          :key="`${item.id}-${index}`"
          class="flex flex-col items-center justify-center gap-3 mx-8 sm:mx-12 group cursor-pointer"
        >
          <div
            class="relative transition-all duration-300 group-hover:scale-110  group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
          >
            <img
              :src="item.logo"
              :alt="item.name"
              class="h-10 sm:h-24 w-auto object-contain"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 300s linear infinite;
}

.hover\:pause:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Adjust based on duplication factor */
  }
}
</style>
