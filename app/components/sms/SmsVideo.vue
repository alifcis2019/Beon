<template>
  <div ref="target" class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transition-all duration-1000 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        "
      >
        <div class="relative overflow-hidden rounded-lg shadow-2xl">
          <!-- Laptop Mockup Container -->
          <div
            class="aspect-[16/9] bg-gray-900 relative flex items-center justify-center group cursor-pointer"
          >
            <!-- Background Image Placeholder -->
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="SMS Dashboard Preview"
              class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
            />

            <!-- Play Button -->
            <div
              class="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon
                name="i-heroicons-play-solid"
                class="w-10 h-10 text-blue-600 ml-1"
              />
            </div>

            <!-- Overlay Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);
const isVisible = ref(false);

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true;
    }
  },
  { threshold: 0.3 },
);
</script>
