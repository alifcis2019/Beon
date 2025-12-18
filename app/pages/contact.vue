```
<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("contact.meta.title"),
  description: () => t("contact.meta.description"),
  ogTitle: () => t("contact.meta.title"),
  ogDescription: () => t("contact.meta.description"),
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});

const form = ref({
  name: "",
  email: "",
  phone: "",
});

const onSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", form.value);
};

const features = computed(() => [
  {
    icon: "i-heroicons-chat-bubble-left-right",
    text: t("contact.features.sms"),
  },
  {
    icon: "i-heroicons-paper-airplane",
    text: t("contact.features.campaigns"),
  },
  {
    icon: "i-heroicons-users",
    text: t("contact.features.channels"),
  },
  {
    icon: "i-heroicons-chart-bar",
    text: t("contact.features.analytics"),
  },
]);

onErrorCaptured((err) => {
  console.error("Contact page error:", err);
});
</script>

<template>
  <NuxtErrorBoundary>
    <div
      class="bg-white dark:bg-[#0a1014] min-h-screen py-12 lg:py-24 flex items-center justify-center transition-colors duration-300 relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"
        />
        <div
          class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"
        />
      </div>

      <UContainer class="w-full relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <!-- Left Column: Content -->
          <div class="space-y-8">
            <!-- Meta Partner Badge -->
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium animate-fade-in-up"
            >
              <UIcon name="i-simple-icons-meta" class="w-4 h-4" />
              <span class="text-sm">{{ $t("contact.meta_partner") }}</span>
            </div>

            <!-- Headline -->
            <div class="animate-fade-in-up delay-100">
              <h1
                class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                {{ $t("contact.headline") }} <br />
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  >{{ $t("contact.subheadline") }}</span
                >
              </h1>
              <p
                class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg"
              >
                {{ $t("contact.description") }}
              </p>
            </div>

            <!-- Feature List -->
            <div class="space-y-6 animate-fade-in-up delay-200">
              <div
                v-for="(feature, index) in features"
                :key="index"
                class="flex items-center gap-4 group"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <UIcon
                    :name="feature.icon"
                    class="w-5 h-5 text-gray-900 dark:text-white"
                  />
                </div>
                <span class="font-medium text-gray-700 dark:text-gray-300">{{
                  feature.text
                }}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Form -->
          <div
            class="bg-white dark:bg-[#111b21] rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-[#2a3942] animate-fade-in-up delay-300 hover:shadow-blue-500/5 transition-all duration-500"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {{ $t("contact.form.title") }}
            </h2>

            <form class="space-y-6" @submit.prevent="onSubmit">
              <div class="grid grid-cols-1 gap-6">
                <UFormField
                  :label="$t('contact.form.name')"
                  name="name"
                  class="w-full"
                  :ui="{
                    label: {
                      base: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
                    },
                  }"
                >
                  <template #label>
                    <div class="flex items-center gap-2">
                      <UIcon
                        name="i-heroicons-user"
                        class="w-4 h-4 text-blue-500 dark:text-blue-400"
                      />
                      <span>{{ $t("contact.form.name") }}</span>
                    </div>
                  </template>
                  <UInput
                    v-model="form.name"
                    :placeholder="$t('contact.form.name_placeholder')"
                    size="xl"
                    class="w-full"
                    :ui="{
                      base: 'bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200',
                      placeholder:
                        'placeholder-gray-400 dark:placeholder-gray-500',
                    }"
                  />
                </UFormField>

                <UFormField
                  :label="$t('contact.form.phone')"
                  name="phone"
                  :ui="{
                    label: {
                      base: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
                    },
                  }"
                >
                  <template #label>
                    <span class="flex items-center gap-2">
                      <UIcon
                        name="i-heroicons-phone"
                        class="w-4 h-4 text-blue-500 dark:text-blue-400"
                      />
                      <span>{{ $t("contact.form.phone") }}</span>
                    </span>
                  </template>
                  <UInput
                    v-model="form.phone"
                    type="tel"
                    :placeholder="$t('contact.form.phone_placeholder')"
                    size="xl"
                    class="w-full"
                    :ui="{
                      base: 'bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200',
                      placeholder:
                        'placeholder-gray-400 dark:placeholder-gray-500',
                    }"
                  />
                </UFormField>
              </div>

              <UFormField
                :label="$t('contact.form.email')"
                name="email"
                :ui="{
                  label: {
                    base: 'text-gray-700 dark:text-gray-300 font-medium mb-2',
                  },
                }"
              >
                <template #label>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-4 h-4 text-blue-500 dark:text-blue-400"
                    />
                    <span>{{ $t("contact.form.email") }}</span>
                  </div>
                </template>
                <UInput
                  v-model="form.email"
                  type="email"
                  :placeholder="$t('contact.form.email_placeholder')"
                  size="xl"
                  class="w-full"
                  :ui="{
                    base: 'bg-gray-50 dark:bg-[#202c33] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-[#2a3942] focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-xl transition-all duration-200',
                    placeholder:
                      'placeholder-gray-400 dark:placeholder-gray-500',
                  }"
                />
              </UFormField>

              <UButton
                type="submit"
                block
                size="xl"
                color="primary"
                class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-xl mt-4 transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
              >
                {{ $t("contact.form.submit") }}
              </UButton>
            </form>
          </div>
        </div>
      </UContainer>
    </div>

    <template #error="{ error }">
      <div
        class="flex flex-col items-center justify-center min-h-[50vh] space-y-4"
      >
        <h2 class="text-xl font-bold text-red-500">Something went wrong</h2>
        <p class="text-gray-600 dark:text-gray-400 text-center max-w-md">
          {{
            error.message === "10"
              ? "An unexpected error occurred. Please try refreshing the page."
              : error.message
          }}
        </p>
        <details
          v-if="error.stack"
          class="text-xs text-gray-400 max-w-lg overflow-auto"
        >
          <summary>Error Details</summary>
          <pre>{{ error.stack }}</pre>
        </details>
        <UButton color="gray" variant="ghost" @click="error.value = null">
          Try again
        </UButton>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```
