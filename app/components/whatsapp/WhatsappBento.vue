<template>
  <div class="py-24 bg-gray-900 relative overflow-hidden">
    <!-- Background Gradient -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Everything you need to scale
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Powerful features designed to help you reach, engage, and convert more
          customers on WhatsApp.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <!-- Card 1: Rich Media (Large) -->
        <div
          class="md:col-span-2 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-[#25D366]/50 transition-colors"
        >
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4"
            >
              <UIcon name="i-heroicons-photo" class="w-6 h-6 text-blue-400" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">
              Rich Media Support
            </h3>
            <p class="text-gray-400 max-w-sm">
              Send images, videos, PDFs, and documents directly in the chat.
              Increase engagement with visual content.
            </p>
          </div>
          <!-- Visual Decoration -->
          <div
            class="absolute right-[-20px] bottom-[-20px] w-64 h-48 bg-gray-900 rounded-xl border border-gray-700 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80"
              class="w-full h-full object-cover opacity-60"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Card 2: Green Tick (Tall) -->
        <div
          class="md:col-span-1 md:row-span-2 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-[#25D366]/50 transition-colors flex flex-col items-center text-center"
        >
          <div
            class="w-24 h-24 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
          >
            <UIcon
              name="i-heroicons-check-badge-solid"
              class="w-16 h-16 text-[#25D366]"
            />
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">
            Get Verified <br />
            <span class="text-[#25D366]">Green Tick</span>
          </h3>
          <p class="text-gray-400 mb-8">
            Build trust with the official WhatsApp Business verification badge.
            We help you get verified faster.
          </p>
          <div
            class="mt-auto w-full bg-[#202c33] p-4 rounded-xl border border-gray-700 text-left"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-white p-1">
                <img src="/logo.svg" class="w-full h-full object-contain" />
              </div>
              <div>
                <div class="text-white font-medium flex items-center gap-1">
                  BeOn
                  <UIcon
                    name="i-heroicons-check-badge-solid"
                    class="w-4 h-4 text-[#25D366]"
                  />
                </div>
                <div class="text-xs text-gray-400">Official Business</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Broadcasts -->
        <div
          class="md:col-span-1 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-[#25D366]/50 transition-colors"
        >
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4"
            >
              <UIcon
                name="i-heroicons-megaphone"
                class="w-6 h-6 text-purple-400"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">
              Unlimited Broadcasts
            </h3>
            <p class="text-gray-400 text-sm">
              Reach thousands of opted-in users instantly without the risk of
              getting blocked.
            </p>
          </div>
        </div>

        <!-- Card 4: Analytics -->
        <div
          class="md:col-span-1 row-span-1 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden group hover:border-[#25D366]/50 transition-colors"
        >
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4"
            >
              <UIcon
                name="i-heroicons-chart-bar"
                class="w-6 h-6 text-orange-400"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">
              Real-time Analytics
            </h3>
            <p class="text-gray-400 text-sm">
              Track delivery rates, open rates, and response times in real-time.
            </p>
          </div>
          <!-- Mini Chart Visual -->
          <div
            class="absolute bottom-0 left-0 w-full h-16 flex items-end gap-1 px-8 pb-8 opacity-50"
          >
            <div class="w-1/5 bg-orange-500/50 h-[40%] rounded-t-sm"></div>
            <div class="w-1/5 bg-orange-500/50 h-[70%] rounded-t-sm"></div>
            <div class="w-1/5 bg-orange-500/50 h-[50%] rounded-t-sm"></div>
            <div class="w-1/5 bg-orange-500/50 h-[90%] rounded-t-sm"></div>
            <div class="w-1/5 bg-orange-500/50 h-[60%] rounded-t-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed
</script>
