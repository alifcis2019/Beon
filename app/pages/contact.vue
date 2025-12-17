```
<script setup lang="ts">
useSeoMeta({
  title: "Contact Us - BeOn",
  description: "Get in touch with our sales or support team.",
  ogTitle: "Contact Us - BeOn",
  ogDescription: "Get in touch with our sales or support team.",
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

const features = [
  {
    icon: "i-heroicons-chat-bubble-left-right",
    text: "Send Bulk SMS with high deliverability",
  },
  {
    icon: "i-heroicons-paper-airplane",
    text: "Launch targeted and personalized campaigns",
  },
  {
    icon: "i-heroicons-users",
    text: "Reach customers across multiple channels",
  },
  {
    icon: "i-heroicons-chart-bar",
    text: "Track performance with real-time analytics",
  },
];
</script>

<template>
  <div
    class="bg-gray-50 dark:bg-[#0B1120] min-h-screen py-12 lg:py-24 flex items-center justify-center transition-colors duration-300"
  >
    <UContainer class="w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Left Column: Content -->
        <div class="space-y-8">
          <!-- Meta Partner Badge -->
          <div
            class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold animate-fade-in-up"
          >
            <UIcon name="i-simple-icons-meta" class="w-6 h-6" />
            <span>Meta Business Partners</span>
          </div>

          <!-- Headline -->
          <div class="animate-fade-in-up delay-100">
            <h1
              class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Start Your Free Trial 🚀 <br />
              <span class="text-blue-600 dark:text-blue-500"
                >— No commitments. Just results.</span
              >
            </h1>
            <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Take the first step towards engaging your audience through
              powerful, data-driven advertising campaigns. Register and discover
              how easy it is to connect, convert, and grow. — all from one
              platform.
            </p>
          </div>

          <!-- Feature List -->
          <div class="space-y-5 animate-fade-in-up delay-200">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-center gap-3 text-gray-700 dark:text-gray-300"
            >
              <UIcon
                :name="feature.icon"
                class="w-5 h-5 text-blue-500 flex-shrink-0"
              />
              <span class="font-medium">{{ feature.text }}</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div
          class="bg-white dark:bg-[#111827] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 animate-fade-in-up delay-300 hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Contact Us Now
          </h2>

          <form class="space-y-5" @submit.prevent="onSubmit">
            <div class="grid grid-cols-1 gap-5">
              <UFormGroup
                label="Name"
                name="name"
                class="w-full"
                :ui="{
                  label: {
                    base: 'text-gray-700 dark:text-gray-300 font-medium mb-1.5',
                  },
                }"
              >
                <template #label>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-user"
                      class="w-4 h-4 text-blue-500"
                    />
                    <span>Name</span>
                  </div>
                </template>
                <UInput
                  v-model="form.name"
                  placeholder="Add your name"
                  size="lg"
                  class="dark:bg-gray-900/50 w-full"
                  :ui="{
                    base: 'bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200',
                  }"
                />
              </UFormGroup>

              <UFormGroup
                label="Phone Number"
                name="phone"
                :ui="{
                  label: {
                    base: 'text-gray-700 dark:text-gray-300 font-medium mb-1.5',
                  },
                }"
              >
                <template #label>
                  <div class="flex items-center gap-2">
                    <UIcon
                      name="i-heroicons-phone"
                      class="w-4 h-4 text-blue-500"
                    />
                    <span>Phone Number</span>
                  </div>
                </template>
                <UInput
                  v-model="form.phone"
                  type="tel"
                  placeholder="Add phone number"
                  size="lg"
                  class="dark:bg-gray-900/50 w-full"
                  :ui="{
                    base: 'bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200',
                  }"
                />
              </UFormGroup>
            </div>

            <UFormGroup
              label="Email"
              name="email"
              :ui="{
                label: {
                  base: 'text-gray-700 dark:text-gray-300 font-medium mb-1.5',
                },
              }"
            >
              <template #label>
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="w-4 h-4 text-blue-500"
                  />
                  <span>Email</span>
                </div>
              </template>
              <UInput
                v-model="form.email"
                type="email"
                placeholder="example@email.com"
                size="lg"
                class="dark:bg-gray-900/50 w-full"
                :ui="{
                  base: 'bg-gray-50 dark:bg-[#1F2937] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all duration-200',
                }"
              />
            </UFormGroup>

            <UButton
              type="submit"
              block
              size="xl"
              color="primary"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 mt-2 transition-transform duration-200 hover:scale-[1.02]"
            >
              Request
            </UButton>
          </form>
        </div>
      </div>
    </UContainer>
  </div>
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
