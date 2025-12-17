<template>
  <div class="py-24 bg-gray-900 relative overflow-hidden" ref="containerRef">
    <!-- Background Gradient -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Everything you need to scale
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Powerful features designed to help you reach, engage, and convert more
          customers on WhatsApp.
        </p>
      </div>

      <!-- Bento Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        @mousemove="handleMouseMove"
      >
        <!-- Card 1: Rich Media (Large) -->
        <div
          class="md:col-span-2 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10"
          :style="cardStyle(0)"
          @mouseenter="activeCard = 0"
          @mouseleave="activeCard = null"
        >
          <!-- Spotlight Border -->
          <div
            class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="spotlightStyle"
          ></div>

          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon name="i-heroicons-photo" class="w-6 h-6 text-blue-400" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">
              Rich Media Support
            </h3>
            <p class="text-gray-400 max-w-sm">
              Send images, videos, PDFs, and documents directly in the chat.
              Increase engagement with visual content.
            </p>
          </div>
          <!-- Visual Decoration -->
          <div
            class="absolute right-[-20px] bottom-[-20px] w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 transform rotate-[-5deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
              class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Card 2: Green Tick (Tall) -->
        <div
          class="md:col-span-1 md:row-span-2 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10 flex flex-col items-center text-center"
          :style="cardStyle(1)"
          @mouseenter="activeCard = 1"
          @mouseleave="activeCard = null"
        >
          <!-- Spotlight Border -->
          <div
            class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="spotlightStyle"
          ></div>

          <div
            class="w-24 h-24 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative"
          >
            <div
              class="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-0 group-hover:opacity-100"
            ></div>
            <UIcon
              name="i-heroicons-check-badge-solid"
              class="w-16 h-16 text-[#25D366] relative z-10"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">
            Get Verified <br />
            <span class="text-[#25D366]">Green Tick</span>
          </h3>
          <p class="text-gray-400 mb-8">
            Build trust with the official WhatsApp Business verification badge.
            We help you get verified faster.
          </p>
          <div
            class="mt-auto w-full bg-[#202c33] p-4 rounded-xl border border-gray-700 text-left group-hover:border-[#25D366]/30 transition-colors duration-300"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-white p-1">
                <img src="/logo.svg" class="w-full h-full object-contain" />
              </div>
              <div>
                <div class="text-white font-medium flex items-center gap-1">
                  BeOn
                  <UIcon
                    name="i-heroicons-check-badge-solid"
                    class="w-4 h-4 text-[#25D366]"
                  />
                </div>
                <div class="text-xs text-gray-400">Official Business</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Broadcasts -->
        <div
          class="md:col-span-1 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10"
          :style="cardStyle(2)"
          @mouseenter="activeCard = 2"
          @mouseleave="activeCard = null"
        >
          <!-- Spotlight Border -->
          <div
            class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="spotlightStyle"
          ></div>

          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon
                name="i-heroicons-megaphone"
                class="w-6 h-6 text-purple-400"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">
              Unlimited Broadcasts
            </h3>
            <p class="text-gray-400 text-sm">
              Reach thousands of opted-in users instantly without the risk of
              getting blocked.
            </p>
          </div>
          <!-- Visual Decoration -->
          <div
            class="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          >
            <UIcon
              name="i-heroicons-paper-airplane"
              class="w-32 h-32 text-purple-500 transform rotate-45"
            />
          </div>
        </div>

        <!-- Card 4: Analytics -->
        <div
          class="md:col-span-1 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10"
          :style="cardStyle(3)"
          @mouseenter="activeCard = 3"
          @mouseleave="activeCard = null"
        >
          <!-- Spotlight Border -->
          <div
            class="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="spotlightStyle"
          ></div>

          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-6 h-6 text-orange-400"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">
              Real-time Analytics
            </h3>
            <p class="text-gray-400 text-sm">
              Track delivery rates, open rates, and response times in real-time.
            </p>
          </div>
          <!-- Mini Chart Visual -->
          <div
            class="absolute bottom-0 left-0 w-full h-16 flex items-end gap-1 px-8 pb-8 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
          >
            <div
              class="w-1/5 bg-orange-500/50 h-[40%] rounded-t-sm transition-all duration-500 group-hover:h-[60%]"
            ></div>
            <div
              class="w-1/5 bg-orange-500/50 h-[70%] rounded-t-sm transition-all duration-500 group-hover:h-[90%] delay-75"
            ></div>
            <div
              class="w-1/5 bg-orange-500/50 h-[50%] rounded-t-sm transition-all duration-500 group-hover:h-[70%] delay-150"
            ></div>
            <div
              class="w-1/5 bg-orange-500/50 h-[90%] rounded-t-sm transition-all duration-500 group-hover:h-[100%] delay-200"
            ></div>
            <div
              class="w-1/5 bg-orange-500/50 h-[60%] rounded-t-sm transition-all duration-500 group-hover:h-[80%] delay-300"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

const containerRef = ref(null);
const { elementX, elementY } = useMouseInElement(containerRef);
const activeCard = ref<number | null>(null);

// Spotlight Effect
const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(600px circle at ${elementX.value}px ${elementY.value}px, rgba(37, 211, 102, 0.1), transparent 40%)`,
    border: "1px solid rgba(37, 211, 102, 0.3)",
  };
});

// 3D Tilt Effect (Simplified)
const cardStyle = (index: number) => {
  if (activeCard.value !== index) return {};

  // Calculate tilt based on mouse position relative to container (simplified for demo)
  // For a real per-card tilt, we'd need useMouseInElement for each card.
  // Here we'll just do a subtle scale up for now to keep it performant and clean.
  return {
    transform: "scale(1.02)",
    zIndex: 10,
  };
};

const handleMouseMove = (e: MouseEvent) => {
  // Logic handled by useMouseInElement
};
</script>
