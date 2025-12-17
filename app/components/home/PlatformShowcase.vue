<script setup lang="ts">
const features = [
  {
    title: 'Personalize Every Experience',
    description:
      'Inspire confident decisions with memorable, personal experiences for brand love, loyalty and advocacy.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    align: 'left'
  },
  {
    title: 'All-In-One Platform that Unifies',
    description:
      'Bring together people, processes, and technology to deliver unified customer experiences.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
    align: 'right'
  },
  {
    title: 'Truly CleverAI™',
    description:
      'Insightful, empathetic and prescriptive intelligence that empowers businesses to make smarter, faster decisions.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    align: 'left'
  },
  {
    title: 'Purpose-built for your business!',
    description:
      'Solutions for your business model which deliver value that matter to you.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    align: 'right'
  }
]

const industries = [
  {
    label: 'E-Commerce',
    icon: 'i-heroicons-shopping-bag',
    title: '5x Boost in Retention with Advanced User Insights',
    description:
      'Understand your customers better to keep them coming back. Our platform provides deep insights into user behavior.',
    stat: '5x',
    statLabel: 'Boost in Retention',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    label: 'Subscriptions',
    icon: 'i-heroicons-arrow-path',
    title: '60% Increase in CTRs using ‘Best time’',
    description:
      'Send messages when your users are most likely to engage. AI-powered optimization ensures your campaigns hit the mark.',
    stat: '60%',
    statLabel: 'Increase in CTRs',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop'
  },
  {
    label: 'Financial Services',
    icon: 'i-heroicons-banknotes',
    title: '45% Reduction in support tickets',
    description:
      'Proactively address user needs and reduce friction. Solve problems before they become support tickets.',
    stat: '45%',
    statLabel: 'Reduction in tickets',
    image:
      'https://images.unsplash.com/photo-1565514020179-0c2235c8235a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    label: 'Gaming',
    icon: 'i-heroicons-puzzle-piece',
    title: '40% Uplift in CTRs of push notifications',
    description:
      'Keep players in the game with timely, relevant notifications. Boost engagement and session times.',
    stat: '40%',
    statLabel: 'Uplift in CTRs',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop'
  }
]

const selectedIndustryIndex = ref(0)
const selectedIndustry = computed(
  () => industries[selectedIndustryIndex.value]
)
</script>

<template>
  <section class="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
    <!-- Main Header -->
    <div class="container mx-auto px-4 mb-24 text-center">
      <div class="inline-block mb-4">
        <span
          class="px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase"
        >
          Why Choose Us
        </span>
      </div>
      <h2
        class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
      >
        Understand Customers <br>
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
        >
          for Life
        </span>
      </h2>
      <p
        class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        Engage customers for life with the industry’s only platform that
        limitlessly analyzes data from every source, all at once.
      </p>
    </div>

    <!-- Feature Pillars -->
    <div class="container mx-auto px-4 mb-32 space-y-24">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        :class="feature.align === 'right' ? 'lg:flex-row-reverse' : ''"
      >
        <!-- Text -->
        <div class="flex-1 space-y-6">
          <h3
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {{ feature.title }}
          </h3>
          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ feature.description }}
          </p>
          <div>
            <UButton
              variant="link"
              color="primary"
              class="p-0 text-lg font-medium hover:underline"
              trailing-icon="i-heroicons-arrow-right"
            >
              Know more
            </UButton>
          </div>
        </div>

        <!-- Image -->
        <div class="flex-1 w-full">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div
              class="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"
            />
            <img
              :src="feature.image"
              :alt="feature.title"
              class="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Industry Solutions Section -->
    <div class="bg-gray-50 dark:bg-gray-900/50 py-24 -mx-4 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Your Industry. <span class="text-primary-500">Our Solutions.</span>
          </h2>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <!-- Navigation (Tabs) -->
          <div class="lg:col-span-4 space-y-2">
            <button
              v-for="(item, index) in industries"
              :key="item.label"
              class="w-full text-left px-6 py-5 rounded-xl transition-all duration-300 group border border-transparent"
              :class="[
                selectedIndustryIndex === index
                  ? 'bg-white dark:bg-gray-800 shadow-lg border-gray-100 dark:border-gray-700 scale-[1.02]'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400'
              ]"
              @click="selectedIndustryIndex = index"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div
                    class="p-2 rounded-lg transition-colors duration-300"
                    :class="
                      selectedIndustryIndex === index
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                    "
                  >
                    <UIcon
                      :name="item.icon"
                      class="w-6 h-6"
                    />
                  </div>
                  <span
                    class="font-semibold text-lg"
                    :class="
                      selectedIndustryIndex === index
                        ? 'text-gray-900 dark:text-white'
                        : ''
                    "
                  >
                    {{ item.label }}
                  </span>
                </div>
                <UIcon
                  name="i-heroicons-chevron-right"
                  class="w-5 h-5 transition-transform duration-300"
                  :class="[
                    selectedIndustryIndex === index
                      ? 'text-primary-500 translate-x-1'
                      : 'text-gray-400 opacity-0 group-hover:opacity-100'
                  ]"
                />
              </div>
            </button>
          </div>

          <!-- Content Area -->
          <div class="lg:col-span-8">
            <div
              class="bg-white dark:bg-gray-800 rounded-2xl p-1 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden min-h-[500px] relative group"
            >
              <Transition
                mode="out-in"
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4"
              >
                <div
                  :key="selectedIndustryIndex"
                  class="grid md:grid-cols-2 h-full"
                >
                  <!-- Text Content -->
                  <div
                    class="p-8 md:p-10 flex flex-col justify-center h-full relative z-10"
                  >
                    <div class="mb-6">
                      <span
                        class="inline-block px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
                      >
                        {{ selectedIndustry.label }} Success Story
                      </span>
                      <h3
                        class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                      >
                        {{ selectedIndustry.title }}
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                      >
                        {{ selectedIndustry.description }}
                      </p>
                    </div>

                    <div class="flex items-end gap-4 mb-8">
                      <span
                        class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
                      >
                        {{ selectedIndustry.stat }}
                      </span>
                      <span
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider"
                      >
                        {{ selectedIndustry.statLabel }}
                      </span>
                    </div>

                    <div>
                      <UButton
                        size="lg"
                        color="primary"
                        variant="solid"
                        trailing-icon="i-heroicons-arrow-right"
                        class="rounded-full px-8"
                      >
                        Learn more
                      </UButton>
                    </div>
                  </div>

                  <!-- Image/Visual -->
                  <div class="relative h-64 md:h-auto overflow-hidden">
                    <div
                      class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 to-transparent z-10"
                    />
                    <img
                      :src="selectedIndustry.image"
                      :alt="selectedIndustry.label"
                      class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    >
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
