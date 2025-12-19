<script setup lang="ts">
const posts = [
  {
    title: "The Future of Customer Communication",
    description:
      "Discover how AI and automation are reshaping the way businesses interact with their customers in 2024 and beyond.",
    date: "Dec 12, 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Product Manager",
    },
    category: "Trends",
    slug: "future-of-customer-communication",
    readTime: "5 min read",
  },
  {
    title: "Mastering WhatsApp Business API",
    description:
      "A comprehensive guide to leveraging the WhatsApp Business API to scale your sales and support operations effectively.",
    date: "Dec 10, 2024",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    author: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?u=michael",
      role: "Tech Lead",
    },
    category: "Tutorials",
    slug: "mastering-whatsapp-business-api",
    readTime: "8 min read",
  },
  {
    title: "Why Multi-Channel Support Matters",
    description:
      "Learn why being present on multiple channels like WhatsApp, SMS, and Email is crucial for modern customer satisfaction.",
    date: "Dec 08, 2024",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/150?u=emily",
      role: "Customer Success",
    },
    category: "Strategy",
    slug: "why-multi-channel-support-matters",
    readTime: "6 min read",
  },
  {
    title: "Automating Your Sales Funnel",
    description:
      "Step-by-step strategies to automate your sales process using BeOn flows and increase your conversion rates.",
    date: "Dec 05, 2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    author: {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/150?u=david",
      role: "Sales Director",
    },
    category: "Automation",
    slug: "automating-your-sales-funnel",
    readTime: "7 min read",
  },
  {
    title: "5 Tips for Better SMS Campaigns",
    description:
      "Maximize your ROI with these proven tips for crafting high-converting SMS marketing campaigns.",
    date: "Dec 01, 2024",
    image:
      "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1974&auto=format&fit=crop",
    author: {
      name: "Lisa Anderson",
      avatar: "https://i.pravatar.cc/150?u=lisa",
      role: "Marketing Specialist",
    },
    category: "Marketing",
    slug: "5-tips-for-better-sms-campaigns",
    readTime: "4 min read",
  },
  {
    title: "Understanding Chatbot Analytics",
    description:
      "How to read and interpret your chatbot analytics to continuously improve your automated customer interactions.",
    date: "Nov 28, 2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "James Taylor",
      avatar: "https://i.pravatar.cc/150?u=james",
      role: "Data Analyst",
    },
    category: "Analytics",
    slug: "understanding-chatbot-analytics",
    readTime: "5 min read",
  },
];

const featuredPost = posts[0];
const recentPosts = posts.slice(1);

useSeoMeta({
  title: "Blog - BeOn",
  description: "Latest news, updates, and insights from the BeOn team.",
  ogTitle: "Blog - BeOn",
  ogDescription: "Latest news, updates, and insights from the BeOn team.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300"
  >
    <!-- Hero Section (Featured Post) -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 pointer-events-none">
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent"
        />
        <div
          class="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse"
        />
      </div>

      <UContainer>
        <div class="text-center mb-16">
          <h1
            class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            The
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400"
              >BeOn Blog</span
            >
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, strategies, and updates to help you scale your customer
            communication.
          </p>
        </div>

        <!-- Featured Post Card -->
        <div
          class="group relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-primary-500/10"
        >
          <div class="grid md:grid-cols-2 gap-0">
            <div class="relative h-[400px] md:h-auto overflow-hidden">
              <div
                class="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
                v-if="!featuredPost.image"
              />
              <NuxtImg
                :src="featuredPost.image"
                :alt="featuredPost.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"
              />
            </div>
            <div class="p-8 md:p-12 flex flex-col justify-center relative">
              <div class="flex items-center gap-3 mb-6">
                <span
                  class="px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 uppercase tracking-wider"
                >
                  {{ featuredPost.category }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{
                  featuredPost.readTime
                }}</span>
              </div>

              <h2
                class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              >
                <NuxtLink :to="`/blog/${featuredPost.slug}`">
                  {{ featuredPost.title }}
                </NuxtLink>
              </h2>

              <p
                class="text-lg text-gray-600 dark:text-gray-400 mb-8 line-clamp-3"
              >
                {{ featuredPost.description }}
              </p>

              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center gap-3">
                  <UAvatar
                    :src="featuredPost.author.avatar"
                    :alt="featuredPost.author.name"
                    size="sm"
                  />
                  <div>
                    <div
                      class="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {{ featuredPost.author.name }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ featuredPost.date }}
                    </div>
                  </div>
                </div>
                <UButton
                  :to="`/blog/${featuredPost.slug}`"
                  variant="ghost"
                  color="gray"
                  class="group/btn"
                >
                  Read Article
                  <template #trailing>
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Recent Posts Grid -->
    <section
      class="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800"
    >
      <UContainer>
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Articles
          </h2>
          <div class="flex gap-2">
            <UButton variant="ghost" color="gray" icon="i-heroicons-funnel" />
            <div class="relative">
              <input
                type="text"
                placeholder="Search..."
                class="pl-9 pr-4 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 ring-primary-500 outline-none transition-all w-48 focus:w-64"
              />
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(post, index) in recentPosts"
            :key="post.slug"
            class="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="relative aspect-[16/10] overflow-hidden">
              <NuxtImg
                :src="post.image"
                :alt="post.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-gray-900/90 backdrop-blur text-gray-900 dark:text-white shadow-sm"
                >
                  {{ post.category }}
                </span>
              </div>
            </div>

            <div class="p-6 flex flex-col flex-1">
              <div
                class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3"
              >
                <time>{{ post.date }}</time>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <h3
                class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2"
              >
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h3>

              <p
                class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1"
              >
                {{ post.description }}
              </p>

              <div
                class="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800"
              >
                <UAvatar
                  :src="post.author.avatar"
                  :alt="post.author.name"
                  size="xs"
                />
                <span
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >{{ post.author.name }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-16 flex justify-center">
          <div class="flex gap-2">
            <UButton
              variant="outline"
              color="gray"
              icon="i-heroicons-arrow-left"
              disabled
            />
            <UButton variant="solid" color="primary">1</UButton>
            <UButton variant="ghost" color="gray">2</UButton>
            <UButton variant="ghost" color="gray">3</UButton>
            <UButton
              variant="outline"
              color="gray"
              icon="i-heroicons-arrow-right"
            />
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
/* Custom Scrollbar for this page if needed */
</style>
