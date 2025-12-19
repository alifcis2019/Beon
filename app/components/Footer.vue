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

const email = ref("");
const subscribe = () => {
  // Handle subscription
  email.value = "";
};
</script>

<template>
  <footer
    class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300"
  >
    <!-- Background Gradients -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-primary-500/10 dark:bg-primary-900/20 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-3xl"
      />
    </div>

    <!-- CTA Section -->
    <div class="relative border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <h2
            class="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white"
          >
            Ready to transform your<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
              >customer communication?</span
            >
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
          >
            Join thousands of businesses using BeOn to connect with their
            customers on WhatsApp, SMS, and more.
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <UButton
              to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
              target="_blank"
              size="xl"
              color="primary"
              variant="solid"
              class="rounded-full px-8 py-4 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
            >
              Start Free Trial
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </template>
            </UButton>
            <UButton
              to="/contact"
              size="xl"
              color="gray"
              variant="ghost"
              class="rounded-full px-8 py-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 font-semibold w-full sm:w-auto"
            >
              Contact Sales
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <!-- Brand & Newsletter -->
        <div class="lg:col-span-5 space-y-8">
          <div class="flex items-center gap-2">
            <span class="text-3xl font-bold text-gray-900 dark:text-white"
              >Be<span class="text-primary-600 dark:text-primary-500"
                >on</span
              ></span
            >
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
            The all-in-one platform for WhatsApp marketing, automation, and
            customer support. Empower your team to do more with less.
          </p>

          <!-- Newsletter -->
          <div class="max-w-sm">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3"
            >
              Subscribe to our newsletter
            </h4>
            <div class="flex gap-2">
              <UInput
                v-model="email"
                placeholder="Enter your email"
                color="gray"
                variant="outline"
                class="flex-1 bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
                :ui="{ rounded: 'rounded-lg' }"
              />
              <UButton
                color="primary"
                variant="solid"
                label="Subscribe"
                class="rounded-lg"
                @click="subscribe"
              />
            </div>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <!-- Product -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-6"
            >
              Product
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  to="/solutions/whatsapp"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >WhatsApp API</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/solutions/sms"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >SMS Marketing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/solutions/otp"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >OTP Service</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Pricing</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-6"
            >
              Company
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >About Us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Careers</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-6"
            >
              Legal
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  to="/privacy-policy"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/terms-conditions"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Terms of Service</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >Security</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- App Download Badges (Integrated) -->
      <div
        class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div class="flex gap-4">
          <a href="#" class="opacity-70 hover:opacity-100 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              class="h-10"
            />
          </a>
          <a href="#" class="opacity-70 hover:opacity-100 transition-opacity">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              class="h-10"
            />
          </a>
        </div>
        <div class="flex gap-4">
          <UButton
            v-for="social in socialLinks"
            :key="social.label"
            :to="social.to"
            :icon="social.icon"
            color="gray"
            variant="ghost"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            :aria-label="social.label"
          />
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-8 text-center md:text-left text-xs text-gray-500 dark:text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p>
          Copyright © {{ new Date().getFullYear() }} Unlimited Software. All
          Rights Reserved.
        </p>
        <div class="flex items-center gap-2">
          <UIcon name="i-simple-icons-meta" class="w-4 h-4" />
          <span>Meta Business Partner</span>
        </div>
      </div>
    </div>
  </footer>
</template>
