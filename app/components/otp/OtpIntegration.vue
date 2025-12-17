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
          Be On offers you the best solution
        </h2>
        <p
          class="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl transition-all duration-700 delay-100 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          — to integrate with your system.
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
                  <!-- Abstract Phone/Login -->
                  <rect
                    x="60"
                    y="40"
                    width="80"
                    height="140"
                    rx="10"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <rect
                    x="70"
                    y="60"
                    width="60"
                    height="60"
                    rx="4"
                    fill="white"
                    stroke="#93C5FD"
                    stroke-width="2"
                  />
                  <circle cx="100" cy="160" r="5" fill="#3B82F6" />
                </svg>
                <svg
                  v-else-if="step.id === 2"
                  viewBox="0 0 200 200"
                  class="w-full h-full text-blue-500"
                  fill="currentColor"
                >
                  <!-- Abstract API/Settings -->
                  <rect
                    x="40"
                    y="50"
                    width="120"
                    height="100"
                    rx="4"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path
                    d="M60 90 L90 90"
                    stroke="#3B82F6"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M60 110 L110 110"
                    stroke="#3B82F6"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="140"
                    cy="130"
                    r="20"
                    fill="white"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path
                    d="M130 130 L150 130 M140 120 L140 140"
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
                  <!-- Abstract Send/Success -->
                  <rect
                    x="60"
                    y="40"
                    width="80"
                    height="140"
                    rx="10"
                    fill="#EBF5FF"
                    stroke="#3B82F6"
                    stroke-width="2"
                  />
                  <path
                    d="M80 100 L95 115 L120 85"
                    fill="none"
                    stroke="#10B981"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="130"
                    cy="60"
                    r="15"
                    fill="#10B981"
                    opacity="0.2"
                  />
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
                >Excellent technical support to help solve any issues.</span
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
                >Easy-to-use dashboard with statistical reports to support your
                decisions.</span
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
                >Smooth API integration compatible with any software
                system.</span
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
  { id: 1, name: "Create an account and copy your token." },
  { id: 2, name: "Add the token to your system's integration." },
  { id: 3, name: "You're now ready to send OTP instantly." },
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
