<template>
  <section
    class="relative overflow-hidden bg-white dark:bg-gray-900 min-h-[90vh] flex items-center"
  >
    <!-- Background Gradients -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 opacity-0 animate-fade-in"
            :class="{ 'opacity-100 translate-y-0': isVisible }"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
            <span>Reliable SMS Marketing</span>
          </div>

          <h1
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight opacity-0 translate-y-8 transition-all duration-700 delay-100"
            :class="{ 'opacity-100 translate-y-0': isVisible }"
          >
            Connect with customers via
            <span class="text-blue-500">reliable SMS campaigns</span>
          </h1>

          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg opacity-0 translate-y-8 transition-all duration-700 delay-200"
            :class="{ 'opacity-100 translate-y-0': isVisible }"
          >
            Reach your audience instantly with high-delivery SMS. Perfect for
            marketing offers, alerts, and transactional messages.
          </p>

          <div
            class="flex flex-wrap gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-300"
            :class="{ 'opacity-100 translate-y-0': isVisible }"
          >
            <UButton
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 text-white"
            >
              Start Campaign
            </UButton>
            <UButton
              size="xl"
              color="gray"
              variant="ghost"
              class="px-8 py-4 text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              View Pricing <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </div>
        </div>

        <!-- Visual -->
        <div
          class="relative lg:h-[800px] flex items-center justify-center opacity-0 scale-95 transition-all duration-1000 delay-500"
          :class="{ 'opacity-100 scale-100': isVisible }"
        >
          <!-- Phone Mockup -->
          <PhoneMockup class="relative z-10">
            <div class="bg-white h-full flex flex-col">
              <!-- Header -->
              <div
                class="bg-gray-100 px-4 py-3 border-b flex items-center gap-3"
              >
                <div
                  class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs"
                >
                  B
                </div>
                <div class="flex-1">
                  <div class="text-gray-900 font-semibold text-sm">BeOn</div>
                  <div class="text-xs text-gray-500">Text Message</div>
                </div>
              </div>
              <!-- Messages -->
              <div class="flex-1 p-4 space-y-4 bg-gray-50">
                <div class="flex flex-col items-start max-w-[85%]">
                  <div class="bg-gray-200 rounded-2xl rounded-tl-none p-3">
                    <p class="text-gray-800 text-sm">
                      🔥 Flash Sale! Get 50% OFF on all plans for the next 24
                      hours. Use code: FLASH50
                    </p>
                  </div>
                  <span class="text-[10px] text-gray-400 mt-1 ml-1"
                    >10:30 AM</span
                  >
                </div>
                <div class="flex flex-col items-start max-w-[85%]">
                  <div class="bg-gray-200 rounded-2xl rounded-tl-none p-3">
                    <p class="text-gray-800 text-sm">
                      Your order #12345 has been shipped! Track it here:
                      beon.chat/track/12345
                    </p>
                  </div>
                  <span class="text-[10px] text-gray-400 mt-1 ml-1"
                    >2:15 PM</span
                  >
                </div>
              </div>
              <!-- Input -->
              <div class="p-3 border-t bg-white">
                <div
                  class="h-10 border rounded-full flex items-center px-4 text-gray-400 text-sm"
                >
                  Text message
                </div>
              </div>
            </div>
          </PhoneMockup>

          <!-- Floating Elements -->
          <div
            class="absolute -right-4 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl animate-bounce z-20"
            style="animation-duration: 3s"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 text-green-600"
                />
              </div>
              <div>
                <div class="text-sm font-bold text-gray-900 dark:text-white">
                  98% Open Rate
                </div>
                <div class="text-xs text-gray-500">Last Campaign</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PhoneMockup from "~/components/otp/PhoneMockup.vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>
