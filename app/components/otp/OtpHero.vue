<template>
  <section
    class="relative overflow-hidden py-24 sm:py-32 bg-gray-50 dark:bg-gray-900"
  >
    <!-- Modern Gradient Backgrounds -->
    <div
      class="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
      :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
    />
    <div
      class="absolute top-0 -right-48 w-[800px] h-[800px] bg-indigo-50/40 dark:bg-indigo-900/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ease-out"
      :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
    />

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <div
          class="flex justify-center mb-6 transition-all duration-700 delay-100 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          <UBadge variant="subtle" size="md" class="rounded-full px-4 py-1.5">
            <span class="flex items-center gap-2">
              <UIcon name="i-simple-icons-meta" class="w-4 h-4 text-blue-500" />
              Meta Provider & SMS Integration
              <span
                class="text-primary-500 font-medium cursor-pointer hover:underline"
                >Try now →</span
              >
            </span>
          </UBadge>
        </div>
        <h1
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6 transition-all duration-700 delay-200 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          OTP message reaches your customers instantly
        </h1>
        <p
          class="text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10 transition-all duration-700 delay-300 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          With BeOn, connect your system with the easiest API integration and
          start activating your customers immediately.
        </p>
        <div
          class="flex items-center justify-center gap-x-6 transition-all duration-700 delay-400 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          "
        >
          <UButton size="xl" color="white" variant="solid" class="px-8"
            >Subscribe now</UButton
          >
          <UButton size="xl" color="primary" variant="solid" class="px-8"
            >Try Free Trial</UButton
          >
        </div>
      </div>

      <div class="mt-16 flow-root sm:mt-24">
        <div
          class="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transition-all duration-1000 delay-500 ease-out"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          "
        >
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-8"
          >
            <!-- SMS Phone -->
            <div class="relative">
              <PhoneMockup>
                <div class="bg-white h-full flex flex-col">
                  <!-- Status Bar -->
                  <div class="h-12 flex justify-between items-center px-6 pt-2">
                    <span class="text-xs font-semibold">9:41</span>
                    <div class="flex gap-1.5">
                      <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                      <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                      <UIcon name="i-heroicons-battery-50" class="w-4 h-4" />
                    </div>
                  </div>

                  <!-- App Header -->
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

                  <!-- Messages -->
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
              </PhoneMockup>
              <div
                class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <div class="bg-[#4CA6F8] p-3 rounded-2xl shadow-lg">
                  <UIcon
                    name="i-heroicons-chat-bubble-left-right-solid"
                    class="w-8 h-8 text-white"
                  />
                </div>
                <span class="font-semibold text-gray-900 dark:text-white"
                  >SMS OTP</span
                >
              </div>
            </div>

            <!-- WhatsApp Phone -->
            <div class="relative">
              <PhoneMockup>
                <div
                  class="bg-[#EFE7DE] h-full flex flex-col bg-opacity-50"
                  style="
                    background-image: url(&quot;https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png&quot;);
                  "
                >
                  <!-- Status Bar -->
                  <div class="h-12 flex justify-between items-center px-6 pt-2">
                    <span class="text-xs font-semibold">9:41</span>
                    <div class="flex gap-1.5">
                      <UIcon name="i-heroicons-signal" class="w-4 h-4" />
                      <UIcon name="i-heroicons-wifi" class="w-4 h-4" />
                      <UIcon name="i-heroicons-battery-50" class="w-4 h-4" />
                    </div>
                  </div>

                  <!-- App Header -->
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
                      <NuxtImg
                        src="/logo.svg"
                        class="w-5 h-5 object-contain"
                        loading="lazy"
                        alt="BeOn Logo"
                      />
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

                  <!-- Messages -->
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
              </PhoneMockup>
              <div
                class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <div class="bg-[#25D366] p-3 rounded-2xl shadow-lg">
                  <UIcon
                    name="i-simple-icons-whatsapp"
                    class="w-8 h-8 text-white"
                  />
                </div>
                <span class="font-semibold text-gray-900 dark:text-white"
                  >WhatsApp OTP</span
                >
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
