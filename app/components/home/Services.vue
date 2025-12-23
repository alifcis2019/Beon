<script setup lang="ts">
import { services } from "~/data/services";

const { t } = useI18n();
const localePath = useLocalePath();

// Define grid spans for bento layout
const getGridClass = (index: number) => {
  const classes = [
    "md:col-span-8", // WhatsApp
    "md:col-span-4", // SMS
    "md:col-span-4", // OTP
    "md:col-span-4", // Live Chat
    "md:col-span-4", // CRM
  ];
  return classes[index] || "md:col-span-4";
};

const servicesWithKeys = computed(() => {
  const keys = ["whatsapp", "sms", "otp", "live_chat", "crm"];
  return services.map((service, index) => ({
    ...service,
    key: keys[index],
    gridClass: getGridClass(index),
  }));
});
</script>

<template>
  <div
    class="py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
  >
    <!-- Decorative Background -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"
      />
      <div
        class="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4"
        >
          {{ $t("index.services.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Everything you need to communicate with your customers, all in one
          place.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div
          v-for="(item, index) in servicesWithKeys"
          :key="item.key"
          :class="[
            item.gridClass,
            'group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1',
          ]"
        >
          <div class="h-full flex flex-col relative">
            <!-- Image/Visual Area -->
            <div
              class="relative h-48 sm:h-64 overflow-hidden transition-all duration-500 group-hover:h-32"
              :class="{ 'sm:h-80 group-hover:sm:h-48': index === 0 }"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"
              />
              <img
                :src="item.image"
                :alt="$t(`index.services.items.${item.key}.label`)"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute bottom-4 left-4 z-20">
                <div
                  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-3"
                >
                  <UIcon
                    :name="
                      index === 0
                        ? 'i-simple-icons-whatsapp'
                        : 'i-heroicons-chat-bubble-left-right'
                    "
                    class="w-5 h-5"
                  />
                </div>
                <h3 class="text-2xl font-bold text-white">
                  {{ $t(`index.services.items.${item.key}.label`) }}
                </h3>
              </div>
            </div>

            <!-- Content Area -->
            <div
              class="p-6 flex-1 flex flex-col bg-white dark:bg-gray-900 relative z-20"
            >
              <p
                class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300"
              >
                {{ $t(`index.services.items.${item.key}.title`) }}
              </p>

              <!-- Features List (Revealed on Hover) -->
              <div
                class="space-y-2 mb-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 ease-out overflow-hidden"
              >
                <div
                  v-for="(feature, fIndex) in 3"
                  :key="fIndex"
                  class="flex items-start gap-2"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="w-4 h-4 text-primary-500 mt-1 shrink-0"
                  />
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{
                      $t(
                        `index.services.items.${item.key}.features.${fIndex + 1}`,
                      )
                    }}
                  </span>
                </div>
              </div>

              <div class="mt-auto">
                <UButton
                  :to="localePath(item.link)"
                  variant="ghost"
                  color="primary"
                  class="group-hover:translate-x-2 transition-transform p-0"
                >
                  {{ $t("index.services.learn_more") }}
                  <template #trailing>
                    <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
