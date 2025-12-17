<script setup lang="ts">
import { ref, onMounted } from "vue";

const brands = [
  {
    name: "Google",
    src: "https://placehold.co/150x60/4285F4/white?text=Google",
  },
  {
    name: "Microsoft",
    src: "https://placehold.co/150x60/00A4EF/white?text=Microsoft",
  },
  {
    name: "Amazon",
    src: "https://placehold.co/150x60/FF9900/white?text=Amazon",
  },
  {
    name: "Netflix",
    src: "https://placehold.co/150x60/E50914/white?text=Netflix",
  },
  {
    name: "Spotify",
    src: "https://placehold.co/150x60/1DB954/white?text=Spotify",
  },
  { name: "Tesla", src: "https://placehold.co/150x60/E82127/white?text=Tesla" },
  { name: "Adobe", src: "https://placehold.co/150x60/FF0000/white?text=Adobe" },
  { name: "Meta", src: "https://placehold.co/150x60/0668E1/white?text=Meta" },
  { name: "X", src: "https://placehold.co/150x60/000000/white?text=X" },
  {
    name: "GitHub",
    src: "https://placehold.co/150x60/181717/white?text=GitHub",
  },
  {
    name: "GitLab",
    src: "https://placehold.co/150x60/FC6D26/white?text=GitLab",
  },
  { name: "Slack", src: "https://placehold.co/150x60/4A154B/white?text=Slack" },
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <div
    class="py-16 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10">
      <p class="text-sm font-semibold text-gray-500 uppercase tracking-widest">
        Trusted by innovative companies worldwide
      </p>
    </div>

    <div class="relative group px-6">
      <!-- Gradient Masks for Smooth Fade -->
      <div
        class="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none"
      />
      <div
        class="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none"
      />

      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="brands"
        :ui="{
          item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start',
        }"
        class="overflow-hidden"
        arrows
        loop
        :auto-scroll="{ speed: 1 }"
      >
        <div class="flex flex-col items-center gap-3 group/item relative mx-4">
          <div
            class="relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md"
          >
            <img
              :src="item.src"
              :alt="item.name"
              class="h-12 sm:h-16 w-auto object-cover"
            />
          </div>
          <span
            class="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors"
          >
            {{ item.name }}
          </span>
        </div>
      </UCarousel>
    </div>
  </div>
</template>
