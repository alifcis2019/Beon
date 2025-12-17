<template>
  <div ref="target" class="py-24 sm:py-32 bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4 transition-all duration-700 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          Seamless Integration
        </h2>
        <p
          class="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl transition-all duration-700 delay-100 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          — with your existing stack.
        </p>
      </div>

      <div class="mx-auto max-w-2xl lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="flex flex-col items-center text-center transition-all duration-700 ease-out"
            :style="{ transitionDelay: `${index * 200 + 200}ms` }"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            <!-- Illustration Placeholder -->
            <div class="mb-6 h-48 w-full flex items-center justify-center">
              <div class="relative w-48 h-48">
                <!-- Simple SVG illustrations for each step -->
                <svg
                  v-if="step.id === 1"
                  viewBox="0 0 200 200"
                  class="w-full h-full text-blue-500"
                  fill="currentColor"
                >
                  <!-- Abstract Account/Key -->
                  <rect
                    x="60"
                    y="50"
                    width="80"
                    height="100"
                    rx="8"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <circle cx="100" cy="90" r="15" fill="#3B82F6" />
                  <rect
                    x="80"
                    y="115"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#93C5FD"
                  />
                </svg>
                <svg
                  v-else-if="step.id === 2"
                  viewBox="0 0 200 200"
                  class="w-full h-full text-blue-500"
                  fill="currentColor"
                >
                  <!-- Abstract API/Connection -->
                  <circle
                    cx="60"
                    cy="100"
                    r="20"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <circle
                    cx="140"
                    cy="100"
                    r="20"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path
                    d="M80 100 L120 100"
                    stroke="#3B82F6"
                    stroke-width="2"
                    stroke-dasharray="4 4"
                  />
                  <path
                    d="M100 80 L100 120"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                </svg>
                <svg
                  v-else
                  viewBox="0 0 200 200"
                  class="w-full h-full text-blue-500"
                  fill="currentColor"
                >
                  <!-- Abstract Blast/Send -->
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path d="M100 60 L100 40" stroke="#3B82F6" stroke-width="2" />
                  <path
                    d="M100 140 L100 160"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path
                    d="M140 100 L160 100"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path d="M60 100 L40 100" stroke="#3B82F6" stroke-width="2" />
                  <circle cx="100" cy="100" r="10" fill="#3B82F6" />
                </svg>
              </div>
            </div>

            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white"
            >
              <span
                class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold"
              >
                {{ step.id }}
              </span>
              {{ step.name }}
            </dt>
          </div>
        </dl>

        <div class="mt-16 max-w-2xl mx-auto">
          <ul class="space-y-4 text-left">
            <li
              class="flex gap-x-3 transition-all duration-700 delay-700 ease-out"
              :class="
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              "
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="mt-1 h-5 w-5 flex-none text-blue-500"
              />
              <span class="text-gray-600 dark:text-gray-300"
                >High throughput for bulk campaigns.</span
              >
            </li>
            <li
              class="flex gap-x-3 transition-all duration-700 delay-800 ease-out"
              :class="
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              "
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="mt-1 h-5 w-5 flex-none text-blue-500"
              />
              <span class="text-gray-600 dark:text-gray-300"
                >Detailed delivery reports and analytics.</span
              >
            </li>
            <li
              class="flex gap-x-3 transition-all duration-700 delay-900 ease-out"
              :class="
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              "
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="mt-1 h-5 w-5 flex-none text-blue-500"
              />
              <span class="text-gray-600 dark:text-gray-300"
                >Global coverage with direct carrier connections.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const steps = [
  { id: 1, name: "Sign up and get your API key." },
  { id: 2, name: "Connect via REST API or SMPP." },
  { id: 3, name: "Start sending bulk campaigns instantly." },
];

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
