<script setup lang="ts">
import { clientJourney } from "~/data/clientJourney";
</script>

<template>
  <div
    class="py-16 sm:py-24 bg-gray-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Background Elements -->
    <div
      class="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1e293b/1e293b.png')] opacity-5 dark:opacity-10 bg-cover bg-center mix-blend-overlay"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50 dark:via-slate-900/50 dark:to-slate-900 pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="mb-12">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-left"
        >
          Your Client Journey with BeOn Step by Step
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in clientJourney"
          :key="item.step"
          class="relative group"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"
          />

          <div
            class="relative h-full bg-white dark:bg-slate-800/40 backdrop-blur-sm border border-gray-200 dark:border-slate-700/50 rounded-2xl p-8 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-colors duration-300 shadow-sm dark:shadow-none"
          >
            <!-- Step Badge -->
            <div
              class="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg mb-6 shadow-lg shadow-primary-900/20"
            >
              {{ item.step }}
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {{ item.title }}
            </h3>

            <ul class="space-y-2">
              <li
                v-for="(line, index) in item.description"
                :key="index"
                class="text-gray-600 dark:text-slate-300 text-sm leading-relaxed"
              >
                {{ line }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
