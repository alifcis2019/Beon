<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";

const isVisible = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(containerRef);

// Clean 3D Tilt Logic
const cardTransform = computed(() => {
  if (isOutside.value) return "";
  const MAX_ROTATION = 5;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2);
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2);
  return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

// Live Animations
const messages = ref([
  {
    id: 1,
    text: "Can I integrate BeOn with my existing Shopify store?",
    time: "11:12 PM",
    isUser: true,
    isSystem: false,
  },
  {
    id: 2,
    text: "Workflow Started: Shopify Integration Support",
    isSystem: true,
    type: "workflow-start",
  },
]);

const typingText = ref("");
const fullResponse =
  "Yes! BeOn integrates seamlessly with Shopify. You can sync orders, automate abandoned cart recovery, and send shipping updates automatically. Would you like to see a demo?";
const isTyping = ref(false);

const startSimulation = () => {
  isTyping.value = true;
  let i = 0;
  typingText.value = "";

  const type = () => {
    if (i < fullResponse.length) {
      typingText.value += fullResponse.charAt(i);
      i++;
      setTimeout(type, 30 + Math.random() * 40);
    } else {
      isTyping.value = false;
      setTimeout(() => {
        messages.value.push({
          id: 3,
          text: fullResponse,
          time: "11:13 PM",
          isUser: false,
          isSystem: false,
        });
        typingText.value = "";

        // Add workflow ended message
        setTimeout(() => {
          messages.value.push({
            id: 4,
            text: "Workflow ended: Shopify Integration Support",
            isSystem: true,
            type: "workflow-end",
          });

          // Restart loop
          setTimeout(() => {
            messages.value = [messages.value[0]];
            setTimeout(startSimulation, 1000);
          }, 5000);
        }, 1000);
      }, 500);
    }
  };
  type();
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    setTimeout(startSimulation, 2000);
  }, 500);
});
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-[1200px] mx-auto perspective-1000 group"
  >
    <!-- Main Dashboard Container -->
    <div
      class="relative w-full aspect-[16/9] bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 ease-out transform-style-3d overflow-hidden flex"
      :class="[
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
      ]"
      :style="{
        transform: isVisible
          ? isOutside
            ? 'perspective(1000px) rotateX(1deg) rotateY(-1deg)'
            : cardTransform
          : '',
      }"
    >
      <!-- Sidebar 1: Navigation Icons -->
      <div
        class="w-16 bg-white dark:bg-[#0f172a] border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 gap-6 z-20"
      >
        <div
          class="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-lg"
        >
          B
        </div>
        <div class="flex flex-col gap-4 w-full px-2">
          <div
            class="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex justify-center cursor-pointer"
          >
            <UIcon name="i-heroicons-inbox" class="w-6 h-6" />
          </div>
          <div
            class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors"
          >
            <UIcon name="i-heroicons-users" class="w-6 h-6" />
          </div>
          <div
            class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors"
          >
            <UIcon name="i-heroicons-chart-bar" class="w-6 h-6" />
          </div>
          <div
            class="p-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-center cursor-pointer transition-colors"
          >
            <UIcon name="i-heroicons-cog-6-tooth" class="w-6 h-6" />
          </div>
        </div>
      </div>

      <!-- Sidebar 2: Conversation List -->
      <div
        class="w-80 bg-white dark:bg-[#0f172a] border-r border-gray-200 dark:border-gray-800 flex flex-col z-10 hidden md:flex"
      >
        <!-- Header -->
        <div
          class="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4"
        >
          <div class="font-semibold text-gray-900 dark:text-white">
            All Inboxes
          </div>
          <UIcon
            name="i-heroicons-funnel"
            class="w-5 h-5 text-gray-400 cursor-pointer"
          />
        </div>
        <!-- Search -->
        <div class="p-4 border-b border-gray-200 dark:border-gray-800">
          <div
            class="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-gray-500"
          >
            <UIcon name="i-heroicons-magnifying-glass" class="w-4 h-4" />
            <span>Search conversations...</span>
          </div>
        </div>
        <!-- List -->
        <div class="flex-1 overflow-hidden relative">
          <div class="absolute inset-0 overflow-y-auto">
            <div class="p-2 space-y-1">
              <div
                class="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30 cursor-pointer"
              >
                <div class="relative shrink-0">
                  <div
                    class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 font-bold"
                  >
                    SM
                  </div>
                  <div
                    class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center"
                  >
                    <UIcon
                      name="i-simple-icons-whatsapp"
                      class="w-3 h-3 text-green-500"
                    />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <div
                      class="font-medium text-gray-900 dark:text-white text-sm truncate"
                    >
                      Seif Mostafa
                    </div>
                    <div class="text-[10px] text-gray-400">11:12 PM</div>
                  </div>
                  <div class="text-xs text-gray-500 truncate mt-1">
                    Can I integrate BeOn with...
                  </div>
                  <div class="flex gap-1 mt-2">
                    <span
                      class="text-[10px] px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded"
                      >Pending</span
                    >
                  </div>
                </div>
              </div>

              <!-- Other Items -->
              <div
                v-for="i in 4"
                :key="i"
                class="flex gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg cursor-pointer transition-colors opacity-60"
              >
                <div class="relative shrink-0">
                  <div
                    class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 font-bold"
                  >
                    U{{ i }}
                  </div>
                  <div
                    class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center"
                  >
                    <UIcon
                      name="i-simple-icons-whatsapp"
                      class="w-3 h-3 text-green-500"
                    />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <div
                      class="font-medium text-gray-900 dark:text-white text-sm"
                    >
                      User {{ i }}
                    </div>
                    <div class="text-[10px] text-gray-400">Yesterday</div>
                  </div>
                  <div
                    class="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded mt-2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Chat Area -->
      <div class="flex-1 flex flex-col bg-white dark:bg-[#0f172a] relative">
        <!-- Chat Header -->
        <div
          class="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 bg-white dark:bg-[#0f172a] z-10"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 font-bold text-xs"
            >
              SM
            </div>
            <div>
              <div
                class="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2"
              >
                Seif Mostafa
                <UIcon
                  name="i-simple-icons-whatsapp"
                  class="w-3 h-3 text-green-500"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div
              class="px-3 py-1.5 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <UIcon
                name="i-heroicons-document-text"
                class="w-3 h-3 text-orange-500"
              />
              Select Stage
              <UIcon name="i-heroicons-chevron-right" class="w-3 h-3" />
            </div>
            <div
              class="px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-medium flex items-center gap-2 shadow-sm"
            >
              <UIcon name="i-heroicons-clock" class="w-3 h-3" />
              Pending
            </div>
          </div>
        </div>

        <!-- Messages Area -->
        <div
          class="flex-1 bg-gray-50 dark:bg-[#0b1120] p-6 overflow-hidden relative flex flex-col"
        >
          <div class="flex-1 space-y-6">
            <TransitionGroup name="message">
              <div v-for="msg in messages" :key="msg.id" class="w-full">
                <!-- System Message -->
                <div v-if="msg.isSystem" class="flex justify-center my-4">
                  <div
                    class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 px-4 py-1.5 rounded-full text-xs text-yellow-700 dark:text-yellow-400 flex items-center gap-2 shadow-sm"
                  >
                    <UIcon name="i-heroicons-cpu-chip" class="w-3 h-3" />
                    {{ msg.text }}
                  </div>
                </div>

                <!-- User Message (Left) -->
                <div v-else-if="msg.isUser" class="flex justify-start">
                  <div class="max-w-[70%]">
                    <div
                      class="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200 leading-relaxed"
                    >
                      {{ msg.text }}
                    </div>
                    <div class="text-[10px] text-gray-400 mt-1 ml-1">
                      {{ msg.time }}
                    </div>
                  </div>
                </div>

                <!-- Agent Message (Right) -->
                <div v-else class="flex justify-end">
                  <div class="max-w-[70%]">
                    <div
                      class="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white leading-relaxed"
                    >
                      {{ msg.text }}
                    </div>
                    <div
                      class="text-[10px] text-gray-400 mt-1 text-right flex items-center justify-end gap-1"
                    >
                      {{ msg.time }}
                      <UIcon name="i-heroicons-check" class="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>

            <!-- Typing Indicator -->
            <div v-if="isTyping" class="flex justify-end">
              <div
                class="bg-blue-600/10 dark:bg-blue-900/20 p-4 rounded-2xl rounded-tr-none max-w-[70%]"
              >
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  {{ typingText
                  }}<span
                    class="inline-block w-1.5 h-4 bg-blue-600 ml-1 animate-pulse align-middle"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div
          class="p-4 bg-white dark:bg-[#0f172a] border-t border-gray-200 dark:border-gray-800"
        >
          <div
            class="flex flex-col gap-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 focus-within:ring-2 ring-blue-500/20 transition-all"
          >
            <div
              class="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2 mb-1"
            >
              <div
                class="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded cursor-pointer"
              >
                Reply
              </div>
              <div
                class="px-3 py-1 text-gray-400 text-xs font-medium cursor-pointer hover:text-gray-600"
              >
                Private Note
              </div>
            </div>
            <div
              class="h-12 text-sm text-gray-400 px-2 italic flex items-center"
            >
              Type your message here...
            </div>
            <div class="flex justify-between items-center pt-1 px-1">
              <div class="flex gap-2 text-gray-400">
                <UIcon
                  name="i-heroicons-paper-clip"
                  class="w-4 h-4 hover:text-gray-600 cursor-pointer"
                />
                <UIcon
                  name="i-heroicons-face-smile"
                  class="w-4 h-4 hover:text-gray-600 cursor-pointer"
                />
                <UIcon
                  name="i-heroicons-microphone"
                  class="w-4 h-4 hover:text-gray-600 cursor-pointer"
                />
              </div>
              <div
                class="bg-blue-600 text-white px-4 py-1.5 rounded text-xs font-medium flex items-center gap-2 shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <UIcon name="i-heroicons-paper-airplane" class="w-3 h-3" />
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Feature Highlights (Cool Things) -->

    <!-- AI Workflow Card -->
    <div
      class="absolute -right-16 top-32 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-300 z-30 max-w-[200px]"
      :class="
        isVisible
          ? 'opacity-100 translate-x-0 rotate-y-12'
          : 'opacity-0 translate-x-10'
      "
      style="transform: translateZ(60px) rotateY(-10deg)"
    >
      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600"
        >
          <UIcon name="i-heroicons-bolt" class="w-5 h-5" />
        </div>
        <div class="text-sm font-bold text-gray-900 dark:text-white">
          AI Workflows
        </div>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        Automatically detect intent and trigger workflows without human
        intervention.
      </p>
    </div>

    <!-- Smart Inbox Card -->
    <div
      class="absolute -left-12 bottom-40 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-500 z-30 max-w-[220px]"
      :class="
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      "
      style="transform: translateZ(80px) rotateY(10deg)"
    >
      <div class="flex items-center gap-3 mb-2">
        <div
          class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600"
        >
          <UIcon name="i-heroicons-inbox-stack" class="w-5 h-5" />
        </div>
        <div class="text-sm font-bold text-gray-900 dark:text-white">
          Unified Inbox
        </div>
      </div>
      <div class="flex gap-2 mt-2">
        <UIcon name="i-simple-icons-whatsapp" class="w-4 h-4 text-green-500" />
        <UIcon name="i-simple-icons-messenger" class="w-4 h-4 text-blue-500" />
        <UIcon name="i-simple-icons-instagram" class="w-4 h-4 text-pink-500" />
        <UIcon name="i-simple-icons-telegram" class="w-4 h-4 text-sky-500" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.message-enter-active,
.message-leave-active {
  transition: all 0.5s ease;
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
