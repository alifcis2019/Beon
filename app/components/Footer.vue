<script setup lang="ts">
const footerLinks = [
  { label: "Home", to: "/" },

  { label: "Contact us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
];

const socialLinks = [
  { icon: "i-simple-icons-facebook", to: "#", label: "Facebook" },
  { icon: "i-simple-icons-linkedin", to: "#", label: "LinkedIn" },
  { icon: "i-simple-icons-instagram", to: "#", label: "Instagram" },
  { icon: "i-simple-icons-youtube", to: "#", label: "YouTube" },
];
</script>

<template>
  <footer
    class="bg-white dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300"
  >
    <!-- App Download Section -->
    <div class="relative pt-20 pb-0 sm:pt-24 lg:pt-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="max-w-2xl">
            <h2
              class="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Track your stats,<br />
              manage campaigns, send messages<br />
              <span class="text-primary-600 dark:text-primary-500"
                >— all from the app.</span
              >
            </h2>
            <p
              class="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
            >
              With the BeOn app, you have everything you need at your fingertips
              — from tracking detailed performance metrics, managing and
              scheduling marketing campaigns, to sending messages across
              multiple channels — anytime, anywhere.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton
                to="#"
                color="gray"
                variant="solid"
                size="xl"
                class="bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 h-auto"
              >
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-simple-icons-googleplay"
                    class="w-8 h-8 text-green-600 dark:text-green-500"
                  />
                  <div class="flex flex-col items-start">
                    <span
                      class="text-xs text-gray-500 dark:text-gray-400 uppercase"
                      >Get it on</span
                    >
                    <span class="text-lg font-bold">Google Play</span>
                  </div>
                </div>
              </UButton>
              <UButton
                to="#"
                color="gray"
                variant="solid"
                size="xl"
                class="bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 h-auto"
              >
                <div class="flex items-center gap-3">
                  <UIcon
                    name="i-simple-icons-apple"
                    class="w-8 h-8 text-gray-900 dark:text-white"
                  />
                  <div class="flex flex-col items-start">
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >Download on the</span
                    >
                    <span class="text-lg font-bold">App Store</span>
                  </div>
                </div>
              </UButton>
            </div>
          </div>

          <!-- Phone Mockup -->
          <img
            src="/images/footer/appScreen.webp"
            alt="App Screenshot"
            class="w-full aspect-square object-contain opacity-80"
          />
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div
      class="relative py-24 sm:py-32 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0f172a]/50"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2
          class="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center gap-3 text-gray-900 dark:text-white"
        >
          Start connecting smarter, join BeOn now.
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl shadow-lg shadow-primary-500/30"
          >
            <UIcon name="i-heroicons-rocket-launch" />
          </span>
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            to="#"
            label="Talk to Sales"
            color="gray"
            variant="outline"
            size="xl"
            class="px-8 py-3 rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white"
          />
          <UButton
            to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
            target="_blank"
            label="Start Your Free Trial"
            color="primary"
            variant="solid"
            size="xl"
            class="px-8 py-3 rounded-full shadow-lg shadow-primary-500/30"
          />
        </div>
      </div>

      <!-- Glow Effect -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"
      ></div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#020817]"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <!-- Logo & Socials -->
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <!-- Simple Logo Placeholder -->
              <span class="text-2xl font-bold text-gray-900 dark:text-white"
                >Be<span class="text-primary-600 dark:text-primary-500"
                  >on</span
                ></span
              >
            </div>
            <div class="flex items-center gap-4">
              <UButton
                v-for="social in socialLinks"
                :key="social.label"
                :to="social.to"
                :icon="social.icon"
                color="gray"
                variant="ghost"
                class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                :aria-label="social.label"
              />
            </div>
          </div>

          <!-- Links -->
          <nav class="flex flex-wrap justify-center gap-6">
            <NuxtLink
              v-for="link in footerLinks"
              :key="link.label"
              :to="link.to"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <div
          class="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800/50 pt-8"
        >
          <div class="flex items-center gap-2">
            <UIcon name="i-simple-icons-meta" class="w-4 h-4" />
            <span>Meta Business Partners</span>
          </div>
          <p>
            Copyright © {{ new Date().getFullYear() }} Unlimited Software. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
