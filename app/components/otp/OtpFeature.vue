<template>
  <div ref="target" class="py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center"
      >
        <!-- Text Content -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-1' : 'lg:order-2',
            'lg:pr-8',
            'lg:pt-4',
            'transition-all duration-1000 ease-out',
            isVisible
              ? 'opacity-100 translate-x-0'
              : imageSide === 'right'
                ? 'opacity-0 -translate-x-12'
                : 'opacity-0 translate-x-12',
          ]"
        >
          <div class="lg:max-w-lg">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-10"
            >
              {{ title }}
            </h2>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300"
            >
              <div
                v-for="(feature, index) in features"
                :key="index"
                class="relative pl-9 transition-all duration-700 ease-out"
                :style="{ transitionDelay: `${index * 100 + 300}ms` }"
                :class="
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4'
                "
              >
                <dt class="inline font-semibold text-gray-900 dark:text-white">
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="absolute left-1 top-1 h-5 w-5 text-blue-500"
                  />
                </dt>
                <dd class="inline">{{ feature }}</dd>
              </div>
            </dl>
            <div
              class="mt-10 transition-all duration-700 delay-500 ease-out"
              :class="
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              "
            >
              <UButton size="xl" color="primary" variant="solid" class="px-8"
                >Subscribe now</UButton
              >
            </div>
          </div>
        </div>

        <!-- Image/Phone Content -->
        <div
          :class="[
            imageSide === 'right' ? 'lg:order-2' : 'lg:order-1',
            'flex justify-center',
            'transition-all duration-1000 delay-300 ease-out',
            isVisible
              ? 'opacity-100 translate-x-0'
              : imageSide === 'right'
                ? 'opacity-0 translate-x-12'
                : 'opacity-0 -translate-x-12',
          ]"
        >
          <div class="relative">
            <!-- Background Circle Decoration -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-100 dark:bg-gray-800 rounded-full -z-10 transition-all duration-1000 delay-500"
              :class="
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              "
            ></div>

            <OtpPhoneMockup>
              <!-- SMS Content -->
              <div v-if="type === 'sms'" class="bg-white h-full flex flex-col">
                <div class="h-12 flex justify-between items-center px-6 pt-2">
                  <span class="text-xs font-semibold">9:41</span>
                  <div class="flex gap-1.5">
                    <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                    <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                    <UIcon name="i-heroicons-battery-50" class="w-4 h-4" />
                  </div>
                </div>
                <div
                  class="px-4 py-2 flex items-center gap-2 border-b border-gray-100"
                >
                  <UIcon
                    name="i-heroicons-chevron-left"
                    class="w-6 h-6 text-blue-500"
                  />
                  <div class="flex-1 text-center">
                    <div class="text-xs text-gray-500">BeOn OTP</div>
                  </div>
                  <div class="w-6"></div>
                </div>
                <div class="flex-1 p-4 bg-gray-50">
                  <div class="text-center text-[10px] text-gray-400 mb-4">
                    Today 11:40 PM
                  </div>
                  <div
                    class="bg-gray-200 rounded-2xl rounded-tl-none p-4 max-w-[85%] mb-2"
                  >
                    <p class="text-sm text-gray-900">
                      Your one time passcode is
                      <span class="font-bold">505050</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- WhatsApp Content -->
              <div
                v-else
                class="bg-[#EFE7DE] h-full flex flex-col bg-opacity-50"
                style="
                  background-image: url(&quot;https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png&quot;);
                "
              >
                <div class="h-12 flex justify-between items-center px-6 pt-2">
                  <span class="text-xs font-semibold">9:41</span>
                  <div class="flex gap-1.5">
                    <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                    <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                    <UIcon name="i-heroicons-battery-50" class="w-4 h-4" />
                  </div>
                </div>
                <div
                  class="px-4 py-2 flex items-center gap-2 bg-[#F6F6F6] border-b border-gray-200"
                >
                  <UIcon
                    name="i-heroicons-chevron-left"
                    class="w-6 h-6 text-blue-500"
                  />
                  <div
                    class="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200"
                  >
                    <img src="/logo.svg" class="w-5 h-5 object-contain" />
                  </div>
                  <div class="flex-1">
                    <div class="text-sm font-semibold">BeOn</div>
                    <div class="text-[10px] text-gray-500">
                      tap here for contact info
                    </div>
                  </div>
                  <div class="flex gap-3 text-blue-500">
                    <UIcon name="i-heroicons-video-camera" class="w-6 h-6" />
                    <UIcon name="i-heroicons-phone" class="w-6 h-6" />
                  </div>
                </div>
                <div class="flex-1 p-4">
                  <div class="flex justify-center mb-4">
                    <span
                      class="bg-[#DDDEDD] text-gray-600 text-[10px] px-2 py-1 rounded-lg shadow-sm"
                      >Today</span
                    >
                  </div>
                  <div
                    class="bg-white rounded-lg p-3 max-w-[85%] shadow-sm ml-0 relative"
                  >
                    <div
                      class="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"
                    ></div>
                    <p class="text-sm text-gray-900">
                      Your one time passcode is
                      <span class="font-bold">505050</span>
                    </p>
                    <div class="text-[10px] text-gray-400 text-right mt-1">
                      11:40
                    </div>
                  </div>
                </div>
              </div>
            </OtpPhoneMockup>

            <div
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <div
                :class="[
                  'p-3 rounded-2xl shadow-lg',
                  type === 'sms' ? 'bg-[#4CA6F8]' : 'bg-[#25D366]',
                ]"
              >
                <UIcon
                  v-if="type === 'sms'"
                  name="i-heroicons-chat-bubble-left-right-solid"
                  class="w-8 h-8 text-white"
                />
                <UIcon
                  v-else
                  name="i-simple-icons-whatsapp"
                  class="w-8 h-8 text-white"
                />
              </div>
              <span class="font-semibold text-gray-900 dark:text-white">{{
                type === "sms" ? "SMS OTP" : "WhatsApp OTP"
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

defineProps<{
  title: string;
  features: string[];
  imageSide: "left" | "right";
  type: "sms" | "whatsapp";
}>();

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
