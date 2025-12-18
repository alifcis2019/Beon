<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth }
  = useMouseInElement(target)

const cardTransform = computed(() => {
  if (isOutside.value) return ''
  const MAX_ROTATION = 15
  const rX = (
    MAX_ROTATION / 2
    - (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION
    - MAX_ROTATION / 2
  ).toFixed(2)
  return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

const isVisible = ref(false)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    ref="target"
    class="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-gray-900 min-h-[90vh] flex items-center transition-colors duration-300"
  >
    <!-- Dynamic Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
      />
      <div
        class="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-1000"
      />

      <!-- Dot Pattern -->
      <div
        class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]"
      />
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            "
          >
            <UIcon
              name="i-heroicons-globe-alt"
              class="w-4 h-4"
            />
            Global SMS Coverage
          </div>

          <h1
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Reach Everyone,<br>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >Everywhere.</span>
          </h1>

          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            The most reliable bulk SMS platform for marketing and transactional
            messages. Direct carrier connections ensure 99.9% delivery rates
            worldwide.
          </p>

          <div
            class="flex flex-wrap gap-4 transition-all duration-700 delay-300"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            <UButton
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:scale-105 transition-transform font-bold"
            >
              Start Campaign
              <template #trailing>
                <UIcon
                  name="i-heroicons-paper-airplane"
                  class="w-5 h-5"
                />
              </template>
            </UButton>
            <UButton
              size="xl"
              color="gray"
              variant="ghost"
              class="px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
            >
              View Pricing
            </UButton>
          </div>
        </div>

        <!-- 3D Visual -->
        <div
          class="relative perspective-1000"
          :style="{ transform: cardTransform }"
        >
          <div
            class="relative mx-auto w-[320px] h-[640px] bg-gray-100 dark:bg-gray-900 rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0 rotate-y-[-12deg]'
                : 'opacity-0 translate-y-20'
            "
          >
            <!-- Screen Content -->
            <div
              class="absolute inset-0 bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden flex flex-col"
            >
              <!-- Status Bar -->
              <div
                class="h-14 flex justify-between items-center px-6 text-gray-900 dark:text-white"
              >
                <span class="text-sm font-medium">9:41</span>
                <div class="flex gap-2">
                  <UIcon
                    name="i-heroicons-signal"
                    class="w-4 h-4"
                  />
                  <UIcon
                    name="i-heroicons-wifi"
                    class="w-4 h-4"
                  />
                  <UIcon
                    name="i-heroicons-battery-100"
                    class="w-4 h-4"
                  />
                </div>
              </div>

              <!-- Messages App -->
              <div class="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
                <!-- App Header -->
                <div
                  class="px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shadow-sm z-10"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs"
                    >
                      B
                    </div>
                    <div>
                      <div
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        BeOn Store
                      </div>
                      <div class="text-[10px] text-gray-500">
                        Official Business Account
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Message List -->
                <div class="flex-1 p-4 space-y-6 overflow-hidden">
                  <div
                    class="flex flex-col gap-1 animate-slide-up-fade"
                    style="animation-delay: 1.2s"
                  >
                    <div
                      class="self-start bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tl-none p-3 max-w-[85%]"
                    >
                      <p class="text-sm text-gray-800 dark:text-gray-200">
                        🔥 <span class="font-bold">Flash Sale Alert!</span><br>
                        Get 50% OFF everything for the next 2 hours only!
                      </p>
                    </div>
                    <span class="text-[10px] text-gray-400 ml-2">10:00 AM</span>
                  </div>

                  <div
                    class="flex flex-col gap-1 animate-slide-up-fade"
                    style="animation-delay: 2.5s"
                  >
                    <div
                      class="self-start bg-gray-200 dark:bg-gray-800 rounded-2xl rounded-tl-none p-3 max-w-[85%]"
                    >
                      <p class="text-sm text-gray-800 dark:text-gray-200">
                        📦 <span class="font-bold">Order Update</span><br>
                        Your package has been shipped! Track it here:
                        <span class="text-blue-500 underline">beon.link/x8j29</span>
                      </p>
                    </div>
                    <span class="text-[10px] text-gray-400 ml-2">2:30 PM</span>
                  </div>
                </div>

                <!-- Input Area -->
                <div
                  class="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
                >
                  <div
                    class="h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-4 text-gray-400 text-sm"
                  >
                    Text message
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              class="absolute -right-16 top-1/3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transform translate-z-20 animate-float"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"
                >
                  <UIcon
                    name="i-heroicons-chart-bar"
                    class="w-6 h-6"
                  />
                </div>
                <div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white">
                    99.9%
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Delivery Rate
                  </div>
                </div>
              </div>
            </div>

            <div
              class="absolute -left-12 bottom-1/4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transform translate-z-30 animate-float-delayed"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400"
                >
                  <UIcon
                    name="i-heroicons-users"
                    class="w-6 h-6"
                  />
                </div>
                <div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white">
                    10k+
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Contacts Reached
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
.transform-style-3d {
  transform-style: preserve-3d;
}
.translate-z-20 {
  transform: translateZ(40px);
}
.translate-z-30 {
  transform: translateZ(60px);
}
@keyframes slide-up-fade {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-up-fade {
  animation: slide-up-fade 0.5s ease-out forwards;
  opacity: 0;
}
@keyframes float {
  0%,
  100% {
    transform: translateZ(40px) translateY(0);
  }
  50% {
    transform: translateZ(40px) translateY(-10px);
  }
}
@keyframes float-delayed {
  0%,
  100% {
    transform: translateZ(60px) translateY(0);
  }
  50% {
    transform: translateZ(60px) translateY(-10px);
  }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite 1s;
}
</style>
