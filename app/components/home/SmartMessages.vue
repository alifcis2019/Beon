<script setup lang="ts">
import { smartMessages } from '~/data/smartMessages'

const { t } = useI18n()

const smartMessagesWithKeys = computed(() => {
  const keys = ['empower_team', 'analyze_intent', 'instant_replies']
  return smartMessages.map((item, index) => ({
    ...item,
    key: keys[index]
  }))
})

// AI Typing Simulation
const typedText = ref('')
const fullText
  = 'Hello! I noticed you\'re interested in our premium plan. Would you like a demo?'
const isTyping = ref(false)

onMounted(() => {
  startTypingAnimation()
})

const startTypingAnimation = async () => {
  while (true) {
    isTyping.value = true
    typedText.value = ''
    await new Promise(resolve => setTimeout(resolve, 1000))

    for (let i = 0; i < fullText.length; i++) {
      typedText.value += fullText[i]
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    isTyping.value = false
    await new Promise(resolve => setTimeout(resolve, 3000))
  }
}
</script>

<template>
  <div
    class="py-24 sm:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative"
  >
    <!-- Background Glow -->
    <div
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"
    />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <!-- Left Column: Content -->
        <div class="flex flex-col gap-8">
          <div>
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
            >
              <UIcon
                name="i-heroicons-sparkles"
                class="w-4 h-4"
              />
              <span>AI-Powered Automation</span>
            </div>
            <h2
              class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              {{ $t("index.smart_messages.title") }}
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400"
              >
                {{ $t("index.smart_messages.subtitle") }}
              </span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ $t("index.smart_messages.description") }}
            </p>
          </div>

          <div class="grid gap-6">
            <div
              v-for="(card, index) in smartMessagesWithKeys"
              :key="index"
              class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300"
            >
              <div
                class="shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400"
              >
                <UIcon
                  :name="card.icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                >
                  {{ $t(`index.smart_messages.cards.${card.key}.title`) }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t(`index.smart_messages.cards.${card.key}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: AI Visual -->
        <div class="relative">
          <div
            class="relative bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-[4/5] sm:aspect-square flex flex-col"
          >
            <!-- Chat Header -->
            <div
              class="p-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur flex items-center gap-4"
            >
              <div class="relative">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-bold"
                >
                  AI
                </div>
                <div
                  class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"
                />
              </div>
              <div>
                <div class="font-semibold text-white">
                  BeOn Assistant
                </div>
                <div class="text-xs text-gray-400 flex items-center gap-1">
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                  />
                  Online
                </div>
              </div>
            </div>

            <!-- Chat Area -->
            <div class="flex-1 p-6 space-y-6 overflow-hidden relative">
              <!-- User Message -->
              <div class="flex gap-4 items-end">
                <div
                  class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300"
                >
                  U
                </div>
                <div
                  class="bg-gray-800 text-gray-200 p-4 rounded-2xl rounded-bl-none max-w-[80%]"
                >
                  Hi, I'm looking for a way to automate my customer support. Can
                  you help?
                </div>
              </div>

              <!-- AI Analysis Indicator -->
              <div
                v-if="isTyping"
                class="flex gap-2 items-center text-xs text-primary-400 ml-12 animate-pulse"
              >
                <UIcon
                  name="i-heroicons-cpu-chip"
                  class="w-4 h-4"
                />
                Analyzing intent...
              </div>

              <!-- AI Response -->
              <div class="flex gap-4 items-end flex-row-reverse">
                <div
                  class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white"
                >
                  AI
                </div>
                <div
                  class="bg-primary-600 text-white p-4 rounded-2xl rounded-br-none max-w-[90%] shadow-lg shadow-primary-900/20"
                >
                  <p class="leading-relaxed">
                    {{ typedText }}<span class="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Input Area Mockup -->
            <div class="p-4 border-t border-gray-800 bg-gray-900/50">
              <div
                class="h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center px-4 justify-between opacity-50"
              >
                <div class="h-2 w-32 bg-gray-700 rounded-full" />
                <UIcon
                  name="i-heroicons-paper-airplane"
                  class="w-5 h-5 text-gray-600"
                />
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div
            class="absolute -right-8 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce-slow"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"
              >
                <UIcon
                  name="i-heroicons-bolt"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <div class="text-sm font-bold text-gray-900 dark:text-white">
                  Instant Reply
                </div>
                <div class="text-xs text-gray-500">
                  0.2s response time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(5%);
  }
}
</style>
