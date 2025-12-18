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
        class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-[120px] animate-pulse"
      />
      <div
        class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"
      />

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-500/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8 transition-all duration-700"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            "
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
              />
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"
              />
            </span>
            Meta Official Partner
          </div>

          <h1
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Secure OTP,<br>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
            >Instantly Delivered.</span>
          </h1>

          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Guarantee delivery with our multi-channel OTP infrastructure. SMS,
            WhatsApp, and Voice failover ensures your users are verified in
            seconds, every time.
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
              to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
              target="_blank"
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-4 rounded-full shadow-lg shadow-primary-500/25 hover:scale-105 transition-transform font-bold"
            >
              Start Free Trial
              <template #trailing>
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-5 h-5"
                />
              </template>
            </UButton>
            <UButton
              to="#features"
              size="xl"
              color="gray"
              variant="ghost"
              class="px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
            >
              Learn More
            </UButton>
          </div>
        </div>

        <!-- 3D Visual -->
        <div
          class="relative perspective-1000"
          :style="{ transform: cardTransform }"
        >
          <div
            class="relative mx-auto w-[300px] h-[600px] bg-gray-100 dark:bg-gray-900 rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
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

              <!-- Notification -->
              <div class="mt-8 px-4">
                <div
                  class="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-gray-200 dark:border-white/10 shadow-lg animate-slide-in-down"
                >
                  <div class="flex items-start gap-3">
                    <div
                      class="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shrink-0"
                    >
                      <UIcon
                        name="i-simple-icons-whatsapp"
                        class="w-6 h-6 text-white"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-start">
                        <h4
                          class="text-sm font-semibold text-gray-900 dark:text-white"
                        >
                          BeOn Security
                        </h4>
                        <span class="text-xs text-gray-500 dark:text-gray-400">Now</span>
                      </div>
                      <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Your verification code is:
                        <span
                          class="text-gray-900 dark:text-white font-bold text-lg tracking-wider"
                        >8492</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Lock Screen Elements -->
              <div
                class="mt-auto mb-12 flex flex-col items-center text-gray-400 dark:text-white/50"
              >
                <UIcon
                  name="i-heroicons-lock-closed"
                  class="w-6 h-6 mb-2"
                />
                <span class="text-xs">Swipe up to unlock</span>
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              class="absolute -right-12 top-1/4 bg-white/80 dark:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl transform translate-z-20 animate-float"
            >
              <UIcon
                name="i-heroicons-shield-check"
                class="w-8 h-8 text-green-500 dark:text-green-400"
              />
            </div>
            <div
              class="absolute -left-8 bottom-1/3 bg-white/80 dark:bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl transform translate-z-30 animate-float-delayed"
            >
              <UIcon
                name="i-heroicons-bolt"
                class="w-8 h-8 text-yellow-500 dark:text-yellow-400"
              />
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
@keyframes slide-in-down {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-in-down {
  animation: slide-in-down 0.5s ease-out forwards 1s;
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
