<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
import HeroDashboardMockup from "./HeroDashboardMockup.vue";

const isVisible = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const { elementX, elementY } = useMouseInElement(containerRef);

// Subtle Spotlight Effect (Cleaner)
const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(800px circle at ${elementX.value}px ${elementY.value}px, rgba(var(--color-primary-500), 0.05), transparent 40%)`,
  };
});

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div
    ref="containerRef"
    class="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen flex flex-col justify-center"
  >
    <!-- Dynamic Background (Clean & Sharp) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Sharp Gradient Orbs -->
      <div
        class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] animate-pulse"
      />
      <div
        class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[80px] animate-pulse delay-1000"
      />

      <!-- Dot Pattern (High Contrast) -->
      <div
        class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-70"
      />

      <!-- Interactive Spotlight -->
      <div
        class="absolute inset-0 pointer-events-none transition-opacity duration-500"
        :style="spotlightStyle"
      />
    </div>

    <div
      class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10"
    >
      <!-- Top Badge -->
      <div
        class="mb-10 flex justify-center transition-all duration-700 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        "
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-semibold shadow-sm hover:scale-105 transition-transform cursor-default"
        >
          <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
          <span>{{ $t("index.hero.meta_provider") }}</span>
        </div>
      </div>

      <!-- Main Headline -->
      <h1
        class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 transition-all duration-700 delay-100 ease-out max-w-5xl mx-auto leading-[1.1]"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ $t("index.hero.headline_1") }}
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        >
          {{ $t("index.hero.headline_2") }}
        </span>
      </h1>

      <!-- Subheadline -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out leading-relaxed"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        {{ $t("index.hero.description") }}
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 transition-all duration-700 delay-300 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        <UButton
          to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
          target="_blank"
          size="xl"
          color="primary"
          variant="solid"
          class="rounded-full px-10 py-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 font-bold text-lg w-full sm:w-auto"
        >
          {{ $t("index.hero.try_now") }}
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </template>
        </UButton>

        <UButton
          to="#"
          size="xl"
          color="gray"
          variant="ghost"
          class="rounded-full px-10 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 font-bold text-lg w-full sm:w-auto"
        >
          <template #leading>
            <UIcon name="i-heroicons-play-circle" class="w-6 h-6" />
          </template>
          {{ $t("index.hero.watch_demo") || "Watch Demo" }}
        </UButton>
      </div>

      <!-- 3D Dashboard Visual -->
      <div
        class="relative transition-all duration-1000 delay-500 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        "
      >
        <HeroDashboardMockup />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Removed complex animations for a cleaner look */
</style>
