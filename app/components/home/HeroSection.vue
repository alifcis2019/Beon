<script setup lang="ts">
const features = [
  {
    title: "Communication Tools",
    icon: "i-heroicons-chat-bubble-left-right",
    position: "top",
  },
  {
    title: "Customer Management CRM",
    icon: "i-heroicons-users",
    position: "bottom-left",
  },
  {
    title: "Communication Team Management",
    icon: "i-heroicons-user-group",
    position: "bottom-right",
  },
];

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="relative overflow-hidden py-24">
    <!-- Modern Gradient Backgrounds - Softer and more subtle -->
    <div
      class="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
      :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
    />
    <div
      class="absolute top-0 -right-48 w-[800px] h-[800px] bg-indigo-50/40 dark:bg-indigo-900/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ease-out"
      :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <!-- Top Banner -->
      <div
        class="mb-6 flex justify-center transition-all duration-700 delay-100 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        <div
          class="rounded-full p-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 text-sm font-medium text-gray-600 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 flex items-center gap-2"
        >
          <UIcon name="i-simple-icons-meta" class="text-blue-500 w-5 h-5" />
          <span class="text-xs sm:text-sm"
            >Meta Provider & SMS Integration</span
          >
          <UButton
            to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
            target="_blank"
            color="primary"
            variant="solid"
            size="xs"
            class="px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
          >
            Try now <UIcon name="i-heroicons-arrow-right" class="w-3 h-3" />
          </UButton>
        </div>
      </div>

      <!-- Heading -->
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8 transition-all duration-700 delay-200 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        Do without any other<br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        >
          communication tools
        </span>
      </h1>

      <!-- CTA Section -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        "
      >
        <UButton
          to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
          target="_blank"
          label="Subscribe now"
          color="neutral"
          variant="solid"
          size="xl"
          class="shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95"
        />
        <span class="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-4">
          All customer communication tools in one smart platform
        </span>
        <UButton
          label="Try Free Trial"
          color="primary"
          size="xl"
          class="shadow-lg shadow-blue-500/20 w-full sm:w-auto transform transition-transform hover:scale-105 active:scale-95"
        />
      </div>

      <!-- Central Visual - Adjusted spacing and positioning for mobile -->
      <div
        class="relative h-[350px] sm:h-[450px] w-full max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-500 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        "
      >
        <!-- Center Logo -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div
            class="w-20 h-20 sm:w-28 sm:h-28 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl shadow-blue-900/5 dark:shadow-black/20 ring-1 ring-gray-100 dark:ring-gray-700"
          >
            <div class="scale-75">
              <AppLogo />
            </div>
          </div>
        </div>

        <!-- Orbit Circles -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-gray-200/60 dark:border-gray-700/60 transition-all duration-1000 delay-700"
            :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
          ></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full border border-gray-200/60 dark:border-gray-700/60 transition-all duration-1000 delay-600"
            :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'"
          ></div>
        </div>

        <!-- Nodes -->
        <!-- Top Node -->
        <div
          class="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group transition-all duration-700 delay-700"
          :class="
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          "
        >
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300"
          >
            <UIcon
              name="i-heroicons-chat-bubble-left-right"
              class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
            />
          </div>
          <span
            class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center"
          >
            Communication Tools
          </span>
        </div>

        <!-- Bottom Left Node -->
        <div
          class="absolute bottom-12 left-8 sm:bottom-16 sm:left-24 flex flex-col items-center gap-2 group transition-all duration-700 delay-800"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 translate-x-8'
          "
        >
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300"
          >
            <UIcon
              name="i-heroicons-users"
              class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
            />
          </div>
          <span
            class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center"
          >
            Customer Management CRM
          </span>
        </div>

        <!-- Bottom Right Node -->
        <div
          class="absolute bottom-12 right-8 sm:bottom-16 sm:right-24 flex flex-col items-center gap-2 group transition-all duration-700 delay-900"
          :class="
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 -translate-x-8'
          "
        >
          <div
            class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center border border-blue-100 dark:border-gray-700 backdrop-blur-sm shadow-lg shadow-blue-900/5 dark:shadow-black/20 transition-transform hover:scale-105 duration-300"
          >
            <UIcon
              name="i-heroicons-user-group"
              class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400"
            />
          </div>
          <span
            class="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 max-w-[100px] sm:max-w-[120px] bg-white/50 dark:bg-gray-900/50 px-2 py-1 rounded-lg backdrop-blur-sm text-center"
          >
            Communication Team Management
          </span>
        </div>

        <!-- Connecting Dots/Lines (Decorative) -->
        <div
          class="absolute top-[28%] left-[28%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-[28%] right-[28%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-75"
        ></div>
        <div
          class="absolute bottom-[25%] left-[50%] w-2.5 h-2.5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-150"
        ></div>
      </div>
    </div>
  </div>
</template>
