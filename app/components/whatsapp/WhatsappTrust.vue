<script setup lang="ts">
const { locale } = useI18n();
const carouselRef = ref();
const intervalId = ref<NodeJS.Timeout | null>(null);

const { data: response } = useFetch<{
  status: boolean;
  message: string;
  data: unknown[];
}>("https://v3.admin.beon.chat/api/logos", {
  lazy: true,
  server: false,
});

const brands = computed(() => response.value?.data || []);

const uiBrands = computed(() => {
  if (locale.value === "ar") {
    return [...brands.value].reverse();
  }
  return brands.value;
});

onMounted(() => {
  intervalId.value = setInterval(() => {
    if (!carouselRef.value) return;

    if (locale.value === "ar") {
      carouselRef.value.prev();
    } else {
      carouselRef.value.next();
    }
  }, 3000);
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
});
</script>

<template>
  <div
    class="py-12 sm:py-16 bg-white dark:bg-gray-900 overflow-hidden border-y border-gray-100 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10">
      <h2
        class="text-lg sm:text-xl font-semibold leading-8 text-gray-600 dark:text-gray-300"
      >
        {{ $t("index.logos.trusted_by") }}
        <span class="text-primary-600 dark:text-primary-400 font-bold">{{
          $t("index.logos.brand_count")
        }}</span>
      </h2>
    </div>

    <div class="relative group px-6">
      <!-- Gradient Masks for Smooth Fade -->
      <div
        class="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"
      />
      <div
        class="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"
      />

      <UCarousel
        v-if="uiBrands.length > 0"
        ref="carouselRef"
        v-slot="{ item }"
        :items="uiBrands"
        :ui="{
          item: 'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 snap-start',
        }"
        class="overflow-hidden"
        arrows
        loop
        dir="ltr"
        :auto-scroll="{ speed: 1 }"
      >
        <div class="flex flex-col items-center gap-3 group/item relative mx-4">
          <div
            class="relative overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-md"
          >
            <NuxtImg
              :src="item.logo"
              :alt="item.name"
              class="h-24 sm:h-24 w-auto object-cover"
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
