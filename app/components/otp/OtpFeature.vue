<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  title: string
  features: string[]
  imageSide: 'left' | 'right'
  type: 'sms' | 'whatsapp'
}>()

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.2 }
)
</script>

<template>
  <section
    ref="target"
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content Side -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-1' : 'lg:order-2',
            'transition-all duration-1000 ease-out',
            isVisible
              ? 'opacity-100 translate-x-0'
              : imageSide === 'right'
                ? 'opacity-0 -translate-x-12'
                : 'opacity-0 translate-x-12'
          ]"
        >
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-blue-900/20 border border-gray-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-sm"
          >
            <UIcon
              :name="
                type === 'sms'
                  ? 'i-heroicons-chat-bubble-left-right'
                  : 'i-simple-icons-whatsapp'
              "
              class="w-4 h-4"
            />
            <span>{{
              type === "sms" ? "SMS Gateway" : "WhatsApp Business API"
            }}</span>
          </div>

          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8"
          >
            {{ title }}
          </h2>

          <div class="space-y-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex gap-4 p-4 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-primary-100 dark:hover:border-primary-900/50 shadow-sm hover:shadow-md"
              :style="{ transitionDelay: `${index * 100}ms` }"
              :class="
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              "
            >
              <div
                class="shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400"
              >
                <UIcon
                  name="i-heroicons-check"
                  class="w-6 h-6"
                />
              </div>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ feature }}
              </p>
            </div>
          </div>
        </div>

        <!-- Visual Side -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-2' : 'lg:order-1',
            'relative perspective-1000'
          ]"
        >
          <div
            class="relative aspect-square rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-2xl transition-all duration-1000 delay-300"
            :class="
              isVisible
                ? 'opacity-100 rotate-y-0 scale-100'
                : 'opacity-0 rotate-y-12 scale-95'
            "
          >
            <!-- Abstract UI Mockup -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col"
            >
              <!-- Header -->
              <div class="flex items-center justify-between mb-8">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-400" />
                  <div class="w-3 h-3 rounded-full bg-yellow-400" />
                  <div class="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div
                  class="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"
                />
              </div>

              <!-- Chat/Message UI -->
              <div class="flex-1 space-y-4">
                <div class="flex gap-3">
                  <div
                    class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0"
                  />
                  <div
                    class="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-600 max-w-[80%]"
                  >
                    <div
                      class="h-2 w-32 bg-gray-100 dark:bg-gray-600 rounded-full mb-2"
                    />
                    <div
                      class="h-2 w-24 bg-gray-100 dark:bg-gray-600 rounded-full"
                    />
                  </div>
                </div>

                <div class="flex gap-3 flex-row-reverse">
                  <div
                    class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 shrink-0 flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-user"
                      class="w-4 h-4 text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div
                    class="bg-primary-500 text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%]"
                  >
                    <p class="text-sm font-medium">
                      Your verification code is: 5921
                    </p>
                  </div>
                </div>

                <!-- Animated Success Badge -->
                <div
                  class="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce-slow"
                >
                  <div
                    class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"
                  >
                    <UIcon
                      name="i-heroicons-check-badge"
                      class="w-6 h-6"
                    />
                  </div>
                  <div>
                    <div
                      class="text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Delivered
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">
                      0.8s latency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-0 {
  transform: rotateY(0deg);
}
.rotate-y-12 {
  transform: rotateY(12deg);
}
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
