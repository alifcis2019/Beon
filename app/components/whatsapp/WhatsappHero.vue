<template>
  <section
    class="relative overflow-hidden min-h-[90vh] flex items-center bg-gray-900"
    ref="heroRef"
  >
    <!-- Mouse Spotlight -->
    <div
      class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
      :style="{
        background: `radial-gradient(600px circle at ${elementX}px ${elementY}px, rgba(37, 211, 102, 0.15), transparent 40%)`,
      }"
    ></div>

    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#25D366]/20 rounded-full blur-[120px] animate-pulse"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"
      ></div>
      <div
        class="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[100px]"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <UIcon name="i-simple-icons-whatsapp" class="w-4 h-4" />
            <span>Official WhatsApp Business Partner</span>
          </div>

          <h1
            class="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 leading-tight min-h-[160px] sm:min-h-[220px]"
          >
            Unlock the Power of <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-emerald-400"
            >
              {{ displayedText }}
              <span class="animate-blink text-white">|</span>
            </span>
          </h1>

          <p class="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
            Transform customer communication with the world's most popular
            messaging app. Automate, engage, and sell directly on WhatsApp.
          </p>

          <div class="flex flex-wrap gap-4">
            <UButton
              size="xl"
              color="primary"
              variant="solid"
              class="px-8 py-4 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none ring-0 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Free Trial
            </UButton>
            <UButton
              size="xl"
              color="gray"
              variant="ghost"
              class="px-8 py-4 text-lg text-white hover:bg-white/10 transition-all duration-300"
            >
              Book Demo <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </div>
        </div>

        <!-- Parallax Phone Visual -->
        <div class="relative lg:h-[800px] flex items-center justify-center">
          <div
            ref="phoneRef"
            class="relative w-[320px] h-[650px] transition-transform duration-100 ease-out"
            :style="parallaxStyle"
          >
            <!-- Phone Frame -->
            <div
              class="absolute inset-0 bg-gray-950 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden"
            >
              <!-- Screen Content -->
              <div class="w-full h-full bg-[#0b141a] relative flex flex-col">
                <!-- Header -->
                <div
                  class="bg-[#202c33] px-4 py-3 flex items-center gap-3 shadow-md z-10"
                >
                  <UIcon
                    name="i-heroicons-chevron-left"
                    class="text-[#00a884] w-6 h-6"
                  />
                  <div
                    class="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1"
                  >
                    <NuxtImg
                      src="/logo.svg"
                      alt="BeOn Logo"
                      class="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div class="flex-1">
                    <div
                      class="text-gray-100 font-medium flex items-center gap-1"
                    >
                      BeOn
                      <UIcon
                        name="i-heroicons-check-badge-solid"
                        class="text-[#25D366] w-4 h-4"
                      />
                    </div>
                    <div class="text-xs text-gray-400">
                      Official Business Account
                    </div>
                  </div>
                </div>

                <!-- Chat Area -->
                <div
                  class="flex-1 p-4 overflow-hidden relative"
                  style="
                    background-image: url(&quot;https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png&quot;);
                    opacity: 0.9;
                  "
                >
                  <div class="space-y-4 mt-4">
                    <!-- Message 1 -->
                    <div
                      class="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up"
                    >
                      <p class="text-gray-100 text-sm">
                        Hello! 👋 Welcome to BeOn. How can we help you today?
                      </p>
                      <div class="text-[10px] text-gray-400 text-right mt-1">
                        10:00 AM
                      </div>
                    </div>

                    <!-- Message 2 (Rich Media) -->
                    <div
                      class="bg-[#202c33] p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up delay-300"
                    >
                      <div
                        class="h-32 bg-gray-700 rounded-md mb-2 overflow-hidden relative group"
                      >
                        <NuxtImg
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80"
                          alt="Video Thumbnail"
                          class="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div
                          class="absolute inset-0 bg-black/20 flex items-center justify-center"
                        >
                          <UIcon
                            name="i-heroicons-play-circle"
                            class="w-12 h-12 text-white/80"
                          />
                        </div>
                      </div>
                      <p class="text-gray-100 text-sm px-1">
                        Check out our latest features video! 🚀
                      </p>
                      <div class="text-[10px] text-gray-400 text-right mt-1">
                        10:01 AM
                      </div>
                    </div>

                    <!-- Message 3 (Buttons) -->
                    <div
                      class="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm animate-fade-in-up delay-500"
                    >
                      <p class="text-gray-100 text-sm mb-3">
                        Choose an option:
                      </p>
                      <div class="space-y-2">
                        <button
                          class="w-full py-2 px-4 bg-[#2a3942] hover:bg-[#354550] text-[#00a884] text-sm font-medium rounded transition-colors"
                        >
                          View Pricing
                        </button>
                        <button
                          class="w-full py-2 px-4 bg-[#2a3942] hover:bg-[#354550] text-[#00a884] text-sm font-medium rounded transition-colors"
                        >
                          Talk to Sales
                        </button>
                      </div>
                      <div class="text-[10px] text-gray-400 text-right mt-1">
                        10:01 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Elements (3D Effect) -->
            <div
              class="absolute -right-12 top-20 bg-[#25D366] p-4 rounded-2xl shadow-xl animate-bounce-slow z-20 hover:scale-110 transition-transform duration-300"
            >
              <UIcon
                name="i-heroicons-chat-bubble-left-ellipsis-solid"
                class="w-8 h-8 text-white"
              />
            </div>
            <div
              class="absolute -left-8 bottom-32 bg-white p-3 rounded-xl shadow-xl animate-bounce-slow delay-700 z-20 hover:scale-110 transition-transform duration-300"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                ></div>
                <span class="text-xs font-bold text-gray-900">Online 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMouse, useWindowSize, useElementBounding } from "@vueuse/core";

const heroRef = ref(null);
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const { x: elementX, y: elementY } = useElementBounding(heroRef);

// Parallax Effect
const parallaxStyle = computed(() => {
  const moveX = (x.value - width.value / 2) / 50;
  const moveY = (y.value - height.value / 2) / 50;
  return {
    transform: `rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(50px)`,
    transformStyle: "preserve-3d",
  };
});

// Typing Effect
const words = ["2 Billion Users", "Automation", "Sales", "Support"];
const displayedText = ref("");
const currentWordIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = ref(100);

const type = () => {
  const currentWord = words[currentWordIndex.value];
  if (!currentWord) return; // Fix lint error

  if (isDeleting.value) {
    displayedText.value = currentWord.substring(
      0,
      displayedText.value.length - 1,
    );
    typingSpeed.value = 50;
  } else {
    displayedText.value = currentWord.substring(
      0,
      displayedText.value.length + 1,
    );
    typingSpeed.value = 150;
  }

  if (!isDeleting.value && displayedText.value === currentWord) {
    isDeleting.value = true;
    typingSpeed.value = 2000; // Pause at end
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
    typingSpeed.value = 500; // Pause before new word
  }

  setTimeout(type, typingSpeed.value);
};

onMounted(() => {
  type();
});
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(10px);
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
