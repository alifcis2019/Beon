<template>
  <div class="py-16 bg-gray-950 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-10">
      <p class="text-sm font-semibold text-gray-500 uppercase tracking-widest">
        Trusted by innovative companies worldwide
      </p>
    </div>

    <!-- Infinite Scroll Marquee -->
    <div class="relative flex overflow-hidden group">
      <div class="flex animate-marquee whitespace-nowrap group-hover:paused">
        <div
          v-for="i in 10"
          :key="i"
          class="mx-8 flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        >
          <!-- Placeholder Logos (using text for now, replaced with icons/svgs in real app) -->
          <div class="flex items-center gap-2 text-xl font-bold text-white">
            <UIcon name="i-heroicons-building-office-2" class="w-8 h-8" />
            <span>Company {{ i }}</span>
          </div>
        </div>
      </div>

      <div
        class="flex absolute top-0 animate-marquee2 whitespace-nowrap group-hover:paused"
      >
        <div
          v-for="i in 10"
          :key="i + 10"
          class="mx-8 flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
        >
          <div class="flex items-center gap-2 text-xl font-bold text-white">
            <UIcon name="i-heroicons-building-office-2" class="w-8 h-8" />
            <span>Company {{ i }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 25s linear infinite;
}
.animate-marquee2 {
  animation: marquee2 25s linear infinite;
}

.group-hover\:paused:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
