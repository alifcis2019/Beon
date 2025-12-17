<script setup lang="ts">
import { smartMessages } from "~/data/smartMessages";
</script>

<template>
  <div
    class="py-16 sm:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <!-- Left Column: Text Content -->
        <div class="flex flex-col gap-6">
          <h2
            class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Smart Messages Powered by Artificial Intelligence
            <span class="text-primary-600 dark:text-primary-400"
              >(AI-Message)</span
            >
          </h2>

          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            You've got a new team member!
          </h3>

          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Your AI employee handles many tasks — supporting your team with
            intelligent responses and helping them understand and analyze
            customer conversations. Receive more chats, with less effort, and
            greater intelligence...
          </p>
        </div>

        <!-- Right Column: Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div
            v-for="(card, index) in smartMessages"
            :key="index"
            class="relative group"
            :class="{ 'sm:mt-8': index === 1, 'sm:mt-16': index === 2 }"
          >
            <div
              class="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"
            />

            <div
              class="relative h-full bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div
                class="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 shadow-sm"
              >
                <UIcon :name="card.icon" class="w-7 h-7" />
              </div>

              <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {{ card.title }}
              </h4>

              <p
                class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
