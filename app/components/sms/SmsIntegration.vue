<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)

const steps = [
  {
    id: 1,
    title: 'Get API Credentials',
    description:
      'Create an account and generate your secure API key in seconds.',
    icon: 'i-heroicons-key'
  },
  {
    id: 2,
    title: 'Connect via REST',
    description:
      'Use our simple REST API to send messages from any application.',
    icon: 'i-heroicons-server-stack'
  },
  {
    id: 3,
    title: 'Scale Instantly',
    description:
      'Send millions of messages with high throughput and reliability.',
    icon: 'i-heroicons-rocket-launch'
  }
]
</script>

<template>
  <section
    ref="target"
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Background Elements -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Steps Side -->
        <div class="order-2 lg:order-1">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12"
          >
            Developer-friendly API,<br>
            <span class="text-blue-600 dark:text-blue-400">built for scale.</span>
          </h2>

          <div class="space-y-8">
            <div
              v-for="(step, index) in steps"
              :key="step.id"
              class="flex gap-6 relative group"
            >
              <!-- Connector Line -->
              <div
                v-if="index !== steps.length - 1"
                class="absolute left-6 top-12 bottom-[-32px] w-px bg-gray-200 dark:bg-gray-800 group-hover:bg-blue-500/50 transition-colors duration-300"
              />

              <div class="relative">
                <div
                  class="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300"
                >
                  <UIcon
                    :name="step.icon"
                    class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500"
                  />
                </div>
              </div>

              <div class="pb-8">
                <h3
                  class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors"
                >
                  {{ step.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Code Editor Side -->
        <div class="order-1 lg:order-2">
          <div
            class="relative rounded-xl bg-[#1e1e1e] shadow-2xl border border-gray-800 overflow-hidden transform transition-all duration-1000"
            :class="
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-12 opacity-0'
            "
          >
            <!-- Window Controls -->
            <div
              class="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#333]"
            >
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div class="w-3 h-3 rounded-full bg-[#27c93f]" />
              <div class="ml-4 text-xs text-gray-500 font-mono">
                send-campaign.py
              </div>
            </div>

            <!-- Code Content -->
            <div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div class="text-gray-400">
                # Initialize BeOn Client
              </div>
              <div class="flex">
                <span class="text-[#569cd6]">import</span>
                <span class="text-[#d4d4d4] ml-2">beon</span>
              </div>
              <br>
              <div class="text-gray-400">
                # Send Bulk SMS Campaign
              </div>
              <div class="flex">
                <span class="text-[#9cdcfe]">response</span>
                <span class="text-[#d4d4d4] mx-2">=</span>
                <span class="text-[#9cdcfe]">beon</span>
                <span class="text-[#d4d4d4]">.</span>
                <span class="text-[#dcdcaa]">send_sms</span>
                <span class="text-[#d4d4d4]">(</span>
              </div>
              <div class="pl-4 flex">
                <span class="text-[#9cdcfe]">to</span>
                <span class="text-[#d4d4d4]">=</span>
                <span class="text-[#ce9178] ml-2">['+201234567890', '+201098765432']</span>
                <span class="text-[#d4d4d4]">,</span>
              </div>
              <div class="pl-4 flex">
                <span class="text-[#9cdcfe]">sender_id</span>
                <span class="text-[#d4d4d4]">=</span>
                <span class="text-[#ce9178] ml-2">'BeOnStore'</span>
                <span class="text-[#d4d4d4]">,</span>
              </div>
              <div class="pl-4 flex">
                <span class="text-[#9cdcfe]">message</span>
                <span class="text-[#d4d4d4]">=</span>
                <span class="text-[#ce9178] ml-2">'Flash Sale! 50% OFF today.'</span>
              </div>
              <div class="text-[#d4d4d4]">
                )
              </div>
              <br>
              <div class="flex items-center gap-2 text-[#6a9955]">
                <span># Output: { "status": "queued", "count": 2 }</span>
                <span class="w-2 h-4 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
