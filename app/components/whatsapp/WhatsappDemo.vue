<template>
  <section class="py-24 bg-gray-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Experience Automated Conversations
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Try our interactive demo below. See how BeOn's chatbots handle
          customer queries instantly, 24/7.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Controls / Context -->
        <div class="space-y-8">
          <div
            v-for="(scenario, index) in scenarios"
            :key="index"
            class="p-6 rounded-2xl border border-gray-800 bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer group"
            @click="activeScenario = index"
            :class="{ 'ring-2 ring-[#25D366]': activeScenario === index }"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-[#25D366] transition-colors"
              >
                <UIcon :name="scenario.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">
                  {{ scenario.title }}
                </h3>
                <p class="text-gray-400 text-sm">
                  {{ scenario.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Phone -->
        <div class="relative flex justify-center">
          <div
            class="w-[350px] h-[700px] bg-gray-950 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden relative"
          >
            <!-- Header -->
            <div
              class="bg-[#202c33] px-4 py-3 flex items-center gap-3 shadow-md z-10 absolute top-0 w-full"
            >
              <UIcon
                name="i-heroicons-chevron-left"
                class="text-[#00a884] w-6 h-6"
              />
              <div
                class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1"
              >
                <NuxtImg
                  src="/logo.svg"
                  alt="BeOn Logo"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div class="flex-1">
                <div class="text-gray-100 font-medium">BeOn Support</div>
                <div class="text-xs text-gray-400">
                  {{ isTyping ? "typing..." : "Online" }}
                </div>
              </div>
            </div>

            <!-- Chat Area -->
            <div
              class="h-full pt-20 pb-20 px-4 overflow-y-auto bg-[#0b141a] scrollbar-hide"
              ref="chatContainer"
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
                      class="max-w-[85%] p-3 rounded-lg shadow-sm text-sm relative"
                      :class="[
                        msg.isUser
                          ? 'bg-[#005c4b] text-white rounded-tr-none'
                          : 'bg-[#202c33] text-gray-100 rounded-tl-none',
                      ]"
                    >
                      <p class="whitespace-pre-line">{{ msg.text }}</p>
                      <div
                        class="text-[10px] text-right mt-1 opacity-70 flex items-center justify-end gap-1"
                      >
                        {{ msg.time }}
                        <UIcon
                          v-if="msg.isUser"
                          name="i-heroicons-check-badge"
                          class="w-3 h-3 text-[#53bdeb]"
                        />
                      </div>
                    </div>
                  </div>
                </TransitionGroup>

                <!-- Typing Indicator -->
                <div v-if="isTyping" class="flex items-start">
                  <div
                    class="bg-[#202c33] p-3 rounded-lg rounded-tl-none shadow-sm"
                  >
                    <div class="flex gap-1">
                      <div
                        class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      ></div>
                      <div
                        class="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"
                      ></div>
                      <div
                        class="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Area (Fake) -->
            <div
              class="absolute bottom-0 w-full bg-[#202c33] p-3 flex items-center gap-2"
            >
              <UIcon name="i-heroicons-plus" class="text-gray-400 w-6 h-6" />
              <div
                class="flex-1 bg-[#2a3942] rounded-lg h-10 px-4 flex items-center text-gray-400 text-sm"
              >
                Type a message...
              </div>
              <UIcon
                name="i-heroicons-microphone"
                class="text-gray-400 w-6 h-6"
              />
            </div>

            <!-- Interactive Options Overlay -->
            <div
              v-if="showOptions && !isTyping"
              class="absolute bottom-20 left-0 w-full px-4 pb-4"
            >
              <div class="flex flex-col gap-2">
                <button
                  v-for="option in currentOptions"
                  :key="option.label"
                  @click="handleOptionClick(option)"
                  class="bg-white/90 backdrop-blur text-[#00a884] font-semibold py-2 rounded-lg shadow-lg hover:bg-white transition-colors transform hover:scale-105 active:scale-95"
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

<script setup lang="ts">
interface Message {
  text: string;
  isUser: boolean;
  time: string;
}

interface Option {
  label: string;
  response: string;
  reply: string;
  celebrate?: boolean;
}

const scenarios = [
  {
    title: "E-commerce Support",
    description: "Handle order tracking and returns automatically.",
    icon: "i-heroicons-shopping-bag",
    initialMessage: "Hi! Welcome to BeOn Store. How can I help you today?",
    options: [
      {
        label: "Track Order 📦",
        response: "I'd like to track my order #12345.",
        reply:
          "Checking... 🔍\nYour order #12345 is out for delivery! It should arrive by 5 PM today.",
        celebrate: true,
      },
      {
        label: "Return Policy ↩️",
        response: "What is your return policy?",
        reply:
          "You can return any item within 30 days for a full refund. Would you like to start a return?",
      },
    ],
  },
  {
    title: "Appointment Booking",
    description: "Schedule meetings without human intervention.",
    icon: "i-heroicons-calendar",
    initialMessage:
      "Hello! I'm the BeOn Assistant. Would you like to book a demo?",
    options: [
      {
        label: "Book Demo 📅",
        response: "Yes, I'd like to book a demo.",
        reply:
          "Great! Please select a time slot:\n1. Tomorrow 10 AM\n2. Tomorrow 2 PM",
        celebrate: true,
      },
      {
        label: "Talk to Human 👤",
        response: "Can I speak to a representative?",
        reply:
          "Sure. I'm connecting you with an agent now. Wait time is approx 2 mins.",
      },
    ],
  },
];

const activeScenario = ref(0);
const currentMessages = ref<Message[]>([]);
const isTyping = ref(false);
const showOptions = ref(true);
const chatContainer = ref<HTMLElement | null>(null);

const currentOptions = computed(() => scenarios[activeScenario.value].options);

// Reset chat when scenario changes
watch(
  activeScenario,
  () => {
    currentMessages.value = [];
    showOptions.value = false;
    isTyping.value = true;

    setTimeout(() => {
      isTyping.value = false;
      addMessage(scenarios[activeScenario.value].initialMessage, false);
      showOptions.value = true;
    }, 1000);
  },
  { immediate: true },
);

const addMessage = (text: string, isUser: boolean) => {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  currentMessages.value.push({ text, isUser, time });
  scrollToBottom();
};

const handleOptionClick = (option: Option) => {
  showOptions.value = false;
  addMessage(option.response, true);

  isTyping.value = true;
  setTimeout(() => {
    isTyping.value = false;
    addMessage(option.reply, false);
    scrollToBottom();

    if (option.celebrate) {
      triggerConfetti();
    }

    // Reset options after a delay for demo purposes
    setTimeout(() => {
      showOptions.value = true;
      scrollToBottom();
    }, 3000);
  }, 1500);
};

const triggerConfetti = async () => {
  const confetti = (await import("canvas-confetti")).default;
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
