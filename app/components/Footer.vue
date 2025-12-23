<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const footerLinks = [
  { label: t("layout.footer.home"), to: localePath("/") },
  { label: t("layout.footer.contact"), to: localePath("/contact") },
  {
    label: t("layout.footer.privacy_policy"),
    to: localePath("/privacy-policy"),
  },
  {
    label: t("layout.footer.terms_conditions"),
    to: localePath("/terms-conditions"),
  },
];

const socialLinks = [
  {
    icon: "i-simple-icons-facebook",
    to: "https://www.facebook.com/Beonjustintime",
    label: "Facebook",
  },
  {
    icon: "i-simple-icons-linkedin",
    to: "https://www.linkedin.com/company/beonchat/posts/?feedView=all",
    label: "LinkedIn",
  },
  { icon: "i-simple-icons-instagram", to: "#", label: "Instagram" },
  {
    icon: "i-simple-icons-youtube",
    to: "https://www.youtube.com/@BeOn-UN",
    label: "YouTube",
  },
];

const email = ref("");
const subscribe = () => {
  // Handle subscription
  email.value = "";
};

const currentYear = new Date().getFullYear();
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
            {{ t("layout.footer.cta.title") }}<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
              >{{ t("layout.footer.cta.title_highlight") }}</span
            >
          </h2>
          <p
            class="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
          >
            {{ t("layout.footer.cta.description") }}
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <UButton
              :to="$localePath('/book-demo')"
              size="xl"
              color="primary"
              variant="solid"
              class="rounded-full px-8 py-4 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
            >
              {{ t("layout.footer.cta.start_trial") }}
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </template>
            </UButton>
            <UButton
              to="https://api.whatsapp.com/send/?phone=201155888086&text&type=phone_number&app_absent=0"
              target="_blank"
              size="xl"
              color="neutral"
              variant="ghost"
              class="rounded-full px-8 py-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 font-semibold w-full sm:w-auto"
            >
              {{ t("layout.footer.cta.contact_sales") }}
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
            {{ t("layout.footer.brand.description") }}
          </p>

          <!-- Newsletter -->
          <div class="max-w-sm">
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3"
            >
              {{ t("layout.footer.newsletter.title") }}
            </h4>
            <div class="flex gap-2">
              <UInput
                v-model="email"
                :placeholder="t('layout.footer.newsletter.placeholder')"
                color="neutral"
                variant="outline"
                class="flex-1 bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
                :ui="{ rounded: 'rounded-lg' }"
              />
              <UButton
                color="primary"
                variant="solid"
                :label="t('layout.footer.newsletter.button')"
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
              {{ t("layout.footer.product.title") }}
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  :to="localePath('/solutions/whatsapp')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.product.whatsapp_api") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/solutions/sms')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.product.sms_marketing") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/solutions/otp')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.product.otp_service") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.product.pricing") }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-6"
            >
              {{ t("layout.footer.company.title") }}
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.company.about") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/blog')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.company.blog") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.company.careers") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.company.contact") }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-6"
            >
              {{ t("layout.footer.legal.title") }}
            </h3>
            <ul class="space-y-4">
              <li>
                <NuxtLink
                  :to="localePath('/privacy-policy')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.legal.privacy") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/terms-conditions')"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.legal.terms") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="#"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >{{ t("layout.footer.legal.security") }}</NuxtLink
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
          <a
            href="#"
            class="opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              :alt="t('layout.footer.app_download.google_play_alt')"
              class="h-10"
              loading="lazy"
            />
          </a>
          <a
            href="#"
            class="opacity-70 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtImg
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              :alt="t('layout.footer.app_download.app_store_alt')"
              class="h-10"
              loading="lazy"
            />
          </a>
        </div>
        <div class="flex gap-4">
          <UButton
            v-for="social in socialLinks"
            :key="social.label"
            :to="social.to"
            :icon="social.icon"
            color="neutral"
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
          {{ t("layout.footer.copyright", { year: currentYear }) }}
        </p>
        <div class="flex items-center gap-2">
          <UIcon name="i-simple-icons-meta" class="w-4 h-4" />
          <span>{{ t("layout.footer.meta_partner") }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
