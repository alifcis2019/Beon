<script setup lang="ts">
import { services } from "~/data/services";

interface ServiceItem {
  label: string;
  title: string;
  features: string[];
  link: string;
  image: string;
  slot: string;
}
</script>

<template>
  <div class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          Get to know BeOn services
        </h2>
      </div>

      <UTabs :items="services as ServiceItem[]" class="w-full">
        <template #service="{ item }">
          <div
            class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
          >
            <!-- Content Column -->
            <div class="flex flex-col gap-8">
              <h3
                class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                {{ item.title }}
              </h3>

              <ul class="space-y-4">
                <li
                  v-for="(feature, index) in item.features"
                  :key="index"
                  class="flex gap-3 items-start"
                >
                  <UIcon
                    name="i-heroicons-check-circle-20-solid"
                    class="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                  />
                  <span
                    class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                    >{{ feature }}</span
                  >
                </li>
              </ul>

              <div class="mt-2">
                <UButton
                  size="xl"
                  color="primary"
                  variant="solid"
                  label="Learn More"
                  :to="item.link"
                />
              </div>
            </div>

            <!-- Image Column -->
            <div
              class="relative h-full rounded-xl overflow-hidden group rounded-lg"
            >
              <img
                :src="item.image"
                :alt="item.label"
                class="absolute inset-0 w-full h-full rounded-lg object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>
