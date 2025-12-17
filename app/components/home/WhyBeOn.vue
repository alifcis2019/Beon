<script setup lang="ts">
import { whyBeOn } from "~/data/whyBeOn";
</script>

<template>
  <div
    class="py-16 sm:py-24 bg-sky-50 dark:bg-slate-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6"
        >
          Why choose
          <span class="text-primary-600 dark:text-primary-400">BeOn ?</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We are considered the best provider of business communication services
          because we rely on the best technical engineers, and we work on
          developing systems that meet market needs and make it easier for
          companies to communicate with customers, so BeOn always remains at the
          forefront when it comes to customer communication services.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in whyBeOn"
          :key="index"
          class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
        >
          <div
            class="w-12 h-12 rounded-xl bg-sky-50 dark:bg-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <UIcon :name="card.icon" class="w-7 h-7" />
          </div>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {{ card.title }}
          </h3>

          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
