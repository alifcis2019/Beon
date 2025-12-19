<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth }
  = useMouseInElement(target)

const cardTransform = computed(() => {
  if (isOutside.value) return ''
  const MAX_ROTATION = 20
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
    class="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-[#0a1014] min-h-[95vh] flex items-center transition-colors duration-300"
  >
    <!-- Dynamic Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Glowing Orbs -->
      <div
        class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-green-200/40 dark:bg-[#25D366]/10 rounded-full blur-[120px] animate-pulse"
      />
      <div
        class="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-200/40 dark:bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-1000"
      />

      <!-- Hexagon Pattern -->
      <div
        class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-[0.03] dark:opacity-[0.03] invert dark:invert-0"
      />

      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div
          v-for="n in 20"
          :key="n"
          class="absolute w-1 h-1 bg-green-500 dark:bg-[#25D366] rounded-full animate-float-random opacity-20"
          :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }"
        />
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-[#25D366]/10 border border-green-100 dark:border-[#25D366]/20 text-green-600 dark:text-[#25D366] text-sm font-medium mb-8 transition-all duration-700 backdrop-blur-md"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            "
          >
            <UIcon
              name="i-simple-icons-whatsapp"
              class="w-4 h-4"
            />
            Official Business Solution Provider
          </div>

          <h1
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transition-all duration-700 delay-100"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Automate.<br>
            Engage.<br>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-[#25D366] dark:to-emerald-400"
            >Scale on WhatsApp.</span>
          </h1>

          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            "
          >
            Transform your customer communication with the world's most popular
            messaging app. Build chatbots, send broadcasts, and drive sales—all
            on autopilot.
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
              class="px-8 py-4 rounded-full shadow-lg shadow-green-500/20 dark:shadow-[#25D366]/20 hover:scale-105 transition-transform font-bold bg-green-600 dark:bg-[#25D366] hover:bg-green-500 dark:hover:bg-[#1ebc57] text-white border-none"
            >
              Start Free Trial
              <template #trailing>
                <UIcon
                  name="i-heroicons-rocket-launch"
                  class="w-5 h-5"
                />
              </template>
            </UButton>
            <UButton
              size="xl"
              color="neutral"
              variant="ghost"
              class="px-8 py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white"
            >
              Book Demo
            </UButton>
          </div>
        </div>

        <!-- 3D Visual -->
        <div
          class="relative perspective-1000"
          :style="{ transform: cardTransform }"
        >
          <div
            class="relative mx-auto w-[340px] h-[680px] bg-gray-100 dark:bg-[#111b21] rounded-[3.5rem] border-[10px] border-white dark:border-[#2a3942] shadow-2xl transition-all duration-1000 delay-500 transform-style-3d"
            :class="
              isVisible
                ? 'opacity-100 translate-y-0 rotate-y-[-12deg]'
                : 'opacity-0 translate-y-20'
            "
          >
            <!-- Screen Content -->
            <div
              class="absolute inset-0 bg-[#e5ddd5] dark:bg-[#0b141a] rounded-[3rem] overflow-hidden flex flex-col"
            >
              <!-- Status Bar -->
              <div
                class="h-14 flex justify-between items-center px-6 text-gray-800 dark:text-gray-400 bg-[#f0f2f5] dark:bg-[#202c33]"
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

              <!-- Chat Header -->
              <div
                class="px-4 py-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-3 shadow-md z-10"
              >
                <UIcon
                  name="i-heroicons-chevron-left"
                  class="text-gray-600 dark:text-gray-400 w-6 h-6"
                />
                <div
                  class="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center"
                >
                  <NuxtImg
                    src="/logoDark.svg"
                    alt="Logo"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="flex-1">
                  <div
                    class="text-gray-900 dark:text-white font-medium flex items-center gap-1"
                  >
                    BeOn
                    <UIcon
                      name="i-heroicons-check-badge-solid"
                      class="text-green-500 dark:text-[#25D366] w-4 h-4"
                    />
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Official Business Account
                  </div>
                </div>
              </div>

              <!-- Chat Area -->
              <div
                class="flex-1 p-4 overflow-hidden relative bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-50 dark:bg-opacity-5"
              >
                <div class="space-y-4 mt-4">
                  <!-- Bot Message -->
                  <div
                    class="flex flex-col gap-1 animate-slide-in-left"
                    style="animation-delay: 1s"
                  >
                    <div
                      class="self-start bg-white dark:bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm"
                    >
                      <p class="text-gray-900 dark:text-gray-100 text-sm">
                        Hello! 👋 Welcome to BeOn. How can we help you scale
                        your business today?
                      </p>
                      <div
                        class="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1"
                      >
                        10:00 AM
                      </div>
                    </div>
                  </div>

                  <!-- User Reply -->
                  <div
                    class="flex flex-col gap-1 items-end animate-slide-in-right"
                    style="animation-delay: 2.5s"
                  >
                    <div
                      class="bg-[#d9fdd3] dark:bg-[#005c4b] p-3 rounded-lg rounded-tr-none max-w-[85%] shadow-sm"
                    >
                      <p class="text-gray-900 dark:text-white text-sm">
                        I want to automate my customer support. 🤖
                      </p>
                      <div
                        class="text-[10px] text-gray-500 dark:text-white/70 text-right mt-1 flex items-center justify-end gap-1"
                      >
                        10:01 AM
                        <UIcon
                          name="i-heroicons-check-badge"
                          class="w-3 h-3 text-[#53bdeb]"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Bot Response with Buttons -->
                  <div
                    class="flex flex-col gap-1 animate-slide-in-left"
                    style="animation-delay: 4s"
                  >
                    <div
                      class="self-start bg-white dark:bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm"
                    >
                      <p class="text-gray-900 dark:text-gray-100 text-sm mb-3">
                        Great choice! Our AI chatbots can handle 80% of queries
                        instantly. Would you like a demo?
                      </p>
                      <div class="space-y-2">
                        <button
                          class="w-full py-2 px-4 bg-gray-50 dark:bg-[#2a3942] hover:bg-gray-100 dark:hover:bg-[#354550] text-blue-500 dark:text-[#00a884] text-sm font-medium rounded transition-colors"
                        >
                          Yes, show me! 🚀
                        </button>
                        <button
                          class="w-full py-2 px-4 bg-gray-50 dark:bg-[#2a3942] hover:bg-gray-100 dark:hover:bg-[#354550] text-blue-500 dark:text-[#00a884] text-sm font-medium rounded transition-colors"
                        >
                          View Pricing
                        </button>
                      </div>
                      <div
                        class="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1"
                      >
                        10:01 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Input Area -->
              <div
                class="p-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-2"
              >
                <UIcon
                  name="i-heroicons-plus"
                  class="text-gray-500 dark:text-gray-400 w-6 h-6"
                />
                <div
                  class="flex-1 bg-white dark:bg-[#2a3942] rounded-lg h-10 px-4 flex items-center text-gray-400 text-sm"
                >
                  Type a message...
                </div>
                <UIcon
                  name="i-heroicons-microphone"
                  class="text-gray-500 dark:text-gray-400 w-6 h-6"
                />
              </div>
            </div>

            <!-- Floating Elements -->
            <div
              class="absolute -right-16 top-1/4 bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-[#2a3942] shadow-xl transform translate-z-40 animate-float"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-green-100 dark:bg-[#25D366]/20 flex items-center justify-center text-green-600 dark:text-[#25D366]"
                >
                  <UIcon
                    name="i-heroicons-chat-bubble-left-right"
                    class="w-6 h-6"
                  />
                </div>
                <div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white">
                    24/7
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Automated Support
                  </div>
                </div>
              </div>
            </div>

            <div
              class="absolute -left-12 bottom-1/3 bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 dark:border-[#2a3942] shadow-xl transform translate-z-60 animate-float-delayed"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400"
                >
                  <UIcon
                    name="i-heroicons-bolt"
                    class="w-6 h-6"
                  />
                </div>
                <div>
                  <div class="text-sm font-bold text-gray-900 dark:text-white">
                    Instant
                  </div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">
                    Response Time
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
.translate-z-40 {
  transform: translateZ(40px);
}
.translate-z-60 {
  transform: translateZ(60px);
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in-left {
  animation: slide-in-left 0.5s ease-out forwards;
  opacity: 0;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out forwards;
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
@keyframes float-random {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  50% {
    transform: translate(-5px, 15px);
  }
  75% {
    transform: translate(-15px, -5px);
  }
}
.animate-float-random {
  animation: float-random 10s ease-in-out infinite;
}
</style>
