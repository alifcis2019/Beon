<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const containerRef = ref(null)
const { elementX, elementY } = useMouseInElement(containerRef)
const activeCard = ref<number | null>(null)

// Spotlight Effect
const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(600px circle at ${elementX.value}px ${elementY.value}px, rgba(37, 211, 102, 0.05), transparent 40%)`
  }
})

const cards = [
  {
    title: 'Rich Media Support',
    description:
      'Send images, videos, PDFs, and documents directly in the chat. Increase engagement with visual content.',
    icon: 'i-heroicons-photo',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Green Tick Verification',
    description:
      'Build trust with the official WhatsApp Business verification badge. We help you get verified faster.',
    icon: 'i-heroicons-check-badge',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    isVertical: true
  },
  {
    title: 'Unlimited Broadcasts',
    description:
      'Reach thousands of opted-in users instantly without the risk of getting blocked.',
    icon: 'i-heroicons-megaphone',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    colSpan: 'md:col-span-1',
    rowSpan: 'row-span-1'
  },
  {
    title: 'Real-time Analytics',
    description:
      'Track delivery rates, open rates, and response times in real-time.',
    icon: 'i-heroicons-chart-bar',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    colSpan: 'md:col-span-1',
    rowSpan: 'row-span-1'
  }
]
</script>

<template>
  <section
    ref="containerRef"
    class="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Background Gradient -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Everything you need to <span class="text-[#25D366]">scale</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Powerful features designed to help you reach, engage, and convert more
          customers on WhatsApp.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="[
            card.colSpan,
            card.rowSpan,
            'relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#25D366]/10 group'
          ]"
          @mouseenter="activeCard = index"
          @mouseleave="activeCard = null"
        >
          <!-- Spotlight -->
          <div
            class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="spotlightStyle"
          />

          <div class="relative z-10 p-8 h-full flex flex-col">
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              :class="card.bg"
            >
              <UIcon
                :name="card.icon"
                class="w-6 h-6"
                :class="card.color"
              />
            </div>

            <!-- Content -->
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#25D366] transition-colors"
            >
              {{ card.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ card.description }}
            </p>

            <!-- Visuals -->
            <div
              v-if="card.image"
              class="absolute right-0 bottom-0 w-1/2 h-full mask-image-gradient"
            >
              <NuxtImg
                :src="card.image"
                class="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110"
              />
            </div>

            <div
              v-if="card.isVertical"
              class="mt-auto flex justify-center pt-8"
            >
              <div class="relative">
                <div
                  class="absolute inset-0 bg-[#25D366] blur-xl opacity-20 animate-pulse"
                />
                <UIcon
                  name="i-heroicons-check-badge-solid"
                  class="w-24 h-24 text-[#25D366] relative z-10 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              v-if="card.title === 'Unlimited Broadcasts'"
              class="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            >
              <UIcon
                name="i-heroicons-paper-airplane"
                class="w-40 h-40 text-purple-500 transform rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            <div
              v-if="card.title === 'Real-time Analytics'"
              class="absolute bottom-0 left-0 w-full h-24 flex items-end gap-1 px-8 pb-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            >
              <div
                class="w-1/5 bg-orange-500 h-[40%] rounded-t-sm transition-all duration-500 group-hover:h-[60%]"
              />
              <div
                class="w-1/5 bg-orange-500 h-[70%] rounded-t-sm transition-all duration-500 group-hover:h-[90%] delay-75"
              />
              <div
                class="w-1/5 bg-orange-500 h-[50%] rounded-t-sm transition-all duration-500 group-hover:h-[70%] delay-150"
              />
              <div
                class="w-1/5 bg-orange-500 h-[90%] rounded-t-sm transition-all duration-500 group-hover:h-[100%] delay-200"
              />
              <div
                class="w-1/5 bg-orange-500 h-[60%] rounded-t-sm transition-all duration-500 group-hover:h-[80%] delay-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mask-image-gradient {
  mask-image: linear-gradient(to left, black, transparent);
}
</style>
