<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

interface Message {
  text: string
  isUser: boolean
  time: string
}

interface Option {
  label: string
  response: string
  reply: string
  celebrate?: boolean
}

const scenarios = [
  {
    title: 'E-commerce Support',
    description: 'Handle order tracking and returns automatically.',
    icon: 'i-heroicons-shopping-bag',
    initialMessage: 'Hi! Welcome to BeOn Store. How can I help you today?',
    options: [
      {
        label: 'Track Order 📦',
        response: 'I\'d like to track my order #12345.',
        reply:
          'Checking... 🔍\nYour order #12345 is out for delivery! It should arrive by 5 PM today.',
        celebrate: true
      },
      {
        label: 'Return Policy ↩️',
        response: 'What is your return policy?',
        reply:
          'You can return any item within 30 days for a full refund. Would you like to start a return?'
      }
    ]
  },
  {
    title: 'Appointment Booking',
    description: 'Schedule meetings without human intervention.',
    icon: 'i-heroicons-calendar',
    initialMessage:
      'Hello! I\'m the BeOn Assistant. Would you like to book a demo?',
    options: [
      {
        label: 'Book Demo 📅',
        response: 'Yes, I\'d like to book a demo.',
        reply:
          'Great! Please select a time slot:\n1. Tomorrow 10 AM\n2. Tomorrow 2 PM',
        celebrate: true
      },
      {
        label: 'Talk to Human 👤',
        response: 'Can I speak to a representative?',
        reply:
          'Sure. I\'m connecting you with an agent now. Wait time is approx 2 mins.'
      }
    ]
  }
]

const activeScenario = ref(0)
const currentMessages = ref<Message[]>([])
const isTyping = ref(false)
const showOptions = ref(true)
const chatContainer = ref<HTMLElement | null>(null)

const currentOptions = computed(() => scenarios[activeScenario.value].options)

watch(
  activeScenario,
  () => {
    currentMessages.value = []
    showOptions.value = false
    isTyping.value = true

    setTimeout(() => {
      isTyping.value = false
      addMessage(scenarios[activeScenario.value].initialMessage, false)
      showOptions.value = true
    }, 1000)
  },
  { immediate: true }
)

const addMessage = (text: string, isUser: boolean) => {
  const now = new Date()
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })
  currentMessages.value.push({ text, isUser, time })
  scrollToBottom()
}

const handleOptionClick = (option: Option) => {
  showOptions.value = false
  addMessage(option.response, true)

  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    addMessage(option.reply, false)
    scrollToBottom()

    if (option.celebrate) {
      triggerConfetti()
    }

    setTimeout(() => {
      showOptions.value = true
      scrollToBottom()
    }, 3000)
  }, 1500)
}

const triggerConfetti = async () => {
  const confetti = (await import('canvas-confetti')).default
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })
}

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  })
}
</script>

<template>
  <section
    class="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Experience Automated Conversations
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Try our interactive demo below. See how BeOn's chatbots handle
          customer queries instantly, 24/7.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Controls -->
        <div class="space-y-6">
          <div
            v-for="(scenario, index) in scenarios"
            :key="index"
            class="p-6 rounded-2xl border transition-all duration-300 cursor-pointer group"
            :class="[
              activeScenario === index
                ? 'bg-white dark:bg-gray-800 border-[#25D366] shadow-lg shadow-[#25D366]/10 ring-1 ring-[#25D366]'
                : 'bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
            ]"
            @click="activeScenario = index"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                :class="
                  activeScenario === index
                    ? 'bg-[#25D366] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                "
              >
                <UIcon
                  :name="scenario.icon"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h3
                  class="text-xl font-semibold text-gray-900 dark:text-white mb-1"
                >
                  {{ scenario.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  {{ scenario.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Phone -->
        <div class="relative flex justify-center perspective-1000">
          <div
            class="w-[360px] h-[720px] bg-gray-100 dark:bg-[#111b21] rounded-[3.5rem] border-[12px] border-white dark:border-[#2a3942] shadow-2xl overflow-hidden relative transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500"
          >
            <!-- Header -->
            <div
              class="bg-[#f0f2f5] dark:bg-[#202c33] px-4 py-4 flex items-center gap-3 shadow-md z-10 absolute top-0 w-full"
            >
              <UIcon
                name="i-heroicons-chevron-left"
                class="text-blue-500 dark:text-[#00a884] w-6 h-6"
              />
              <div
                class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1"
              >
                <NuxtImg
                  src="/logoDark.svg"
                  alt="Logo"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="flex-1">
                <div class="text-gray-900 dark:text-white font-medium">
                  BeOn Support
                </div>
                <div
                  class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"
                >
                  <span
                    v-if="isTyping"
                    class="text-green-600 dark:text-[#25D366]"
                  >typing...</span>
                  <span v-else>Online</span>
                </div>
              </div>
            </div>

            <!-- Chat Area -->
            <div
              ref="chatContainer"
              class="h-full pt-24 pb-24 px-4 overflow-y-auto bg-[#e5ddd5] dark:bg-[#0b141a] scrollbar-hide"
              style="
                background-image: url(&quot;https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png&quot;);
                background-opacity: 0.05;
              "
            >
              <div class="space-y-4">
                <TransitionGroup name="message">
                  <div
                    v-for="(msg, i) in currentMessages"
                    :key="i"
                    class="flex flex-col"
                    :class="msg.isUser ? 'items-end' : 'items-start'"
                  >
                    <div
                      class="max-w-[85%] p-3 rounded-xl shadow-sm text-sm relative"
                      :class="[
                        msg.isUser
                          ? 'bg-[#d9fdd3] dark:bg-[#005c4b] text-gray-900 dark:text-white rounded-tr-none'
                          : 'bg-white dark:bg-[#202c33] text-gray-900 dark:text-gray-100 rounded-tl-none'
                      ]"
                    >
                      <p class="whitespace-pre-line leading-relaxed">
                        {{ msg.text }}
                      </p>
                      <div
                        class="text-[10px] text-right mt-1 opacity-70 flex items-center justify-end gap-1"
                      >
                        {{ msg.time }}
                        <UIcon
                          v-if="msg.isUser"
                          name="i-heroicons-check-badge"
                          class="w-3 h-3 text-blue-500 dark:text-[#53bdeb]"
                        />
                      </div>
                    </div>
                  </div>
                </TransitionGroup>

                <!-- Typing Indicator -->
                <div
                  v-if="isTyping"
                  class="flex items-start"
                >
                  <div
                    class="bg-white dark:bg-[#202c33] p-4 rounded-xl rounded-tl-none shadow-sm"
                  >
                    <div class="flex gap-1.5">
                      <div
                        class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
                      />
                      <div
                        class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"
                      />
                      <div
                        class="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Area -->
            <div
              class="absolute bottom-0 w-full bg-[#f0f2f5] dark:bg-[#202c33] p-3 flex items-center gap-2 z-10"
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

            <!-- Options Overlay -->
            <div
              v-if="showOptions && !isTyping"
              class="absolute bottom-20 left-0 w-full px-4 pb-4 z-20"
            >
              <div class="flex flex-col gap-2">
                <button
                  v-for="option in currentOptions"
                  :key="option.label"
                  class="bg-white/90 dark:bg-[#202c33]/90 backdrop-blur-md text-blue-600 dark:text-[#00a884] font-semibold py-3 rounded-xl shadow-lg border border-gray-200 dark:border-[#2a3942] hover:bg-gray-50 dark:hover:bg-[#2a3942] transition-all transform hover:scale-[1.02] active:scale-95"
                  @click="handleOptionClick(option)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.perspective-1000 {
  perspective: 1000px;
}
</style>
