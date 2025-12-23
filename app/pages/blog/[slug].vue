<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const localePath = useLocalePath();

// Simulating fetching data based on slug
// In a real app, this would be an API call or Nuxt Content query
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
    content: `
      <p>The landscape of customer communication is undergoing a seismic shift. As we move further into 2024, the integration of Artificial Intelligence (AI) and automation tools is no longer a luxury but a necessity for businesses aiming to stay competitive.</p>

      <h2>The Rise of AI-Powered Interactions</h2>
      <p>Gone are the days of static FAQs and long wait times. AI-driven chatbots and virtual assistants are now capable of handling complex queries with human-like nuance. This not only improves customer satisfaction but also frees up human agents to tackle more critical issues.</p>

      <h2>Personalization at Scale</h2>
      <p>One of the most significant advantages of modern communication tools is the ability to personalize interactions at scale. By analyzing customer data, businesses can tailor messages, offers, and support solutions to individual needs, fostering a deeper sense of loyalty.</p>

      <h2>Omnichannel is the New Standard</h2>
      <p>Customers expect to reach you wherever they are—be it WhatsApp, Instagram, SMS, or Email. A unified platform that consolidates these channels into a single dashboard is essential for maintaining context and providing a seamless experience.</p>

      <h2>Conclusion</h2>
      <p>Embracing these technologies is key to building lasting relationships with your customers. The future is automated, personalized, and omnipresent.</p>
    `,
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
    content: `
      <p>WhatsApp is the world's most popular messaging app, and for businesses, it represents a massive opportunity. The WhatsApp Business API unlocks features that go far beyond the standard app, allowing for automation, integration, and scale.</p>

      <h2>Why Use the API?</h2>
      <p>Unlike the standard business app, the API allows you to connect WhatsApp to your CRM, automate responses with bots, and send bulk notifications (templates) to thousands of opted-in customers instantly.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Automated Messages:</strong> Set up welcome messages, away messages, and quick replies.</li>
        <li><strong>Interactive Buttons:</strong> Use list messages and reply buttons to guide customers through flows.</li>
        <li><strong>Green Tick Verification:</strong> Build trust with an official business account badge.</li>
      </ul>

      <h2>Getting Started</h2>
      <p>To get started, you'll need a Business Solution Provider (BSP) or direct access through Meta. Once verified, you can start building templates and designing your conversational flows.</p>
    `,
  },
  // Fallback for other slugs to avoid 404 in this demo
  {
    title: "Sample Blog Post",
    description:
      "This is a generic placeholder for any other blog post slug you might click on.",
    date: "Dec 01, 2024",
    image:
      "https://images.unsplash.com/photo-1499750310159-52f8fdebafd3?q=80&w=1978&auto=format&fit=crop",
    author: {
      name: "BeOn Team",
      avatar: "https://beon.chat/favicon.ico",
      role: "Editor",
    },
    category: "General",
    slug: "sample",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  },
];

const post = computed(() => {
  return posts.find((p) => p.slug === slug) || posts[posts.length - 1];
});

useSeoMeta({
  title: () => `${post.value?.title} - BeOn Blog`,
  description: () => post.value?.description,
  ogTitle: () => `${post.value?.title} - BeOn Blog`,
  ogDescription: () => post.value?.description,
  ogImage: () => post.value?.image,
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: computed(() => {
        if (!post.value) return "";
        return JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.value.title,
          description: post.value.description,
          image: post.value.image,
          datePublished: post.value.date,
          author: {
            "@type": "Person",
            name: post.value.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: "BeOn",
            logo: {
              "@type": "ImageObject",
              url: "https://beon.chat/logo.png",
            },
          },
        });
      }),
    },
  ],
});
</script>

<template>
  <div class="bg-white dark:bg-gray-950 min-h-screen py-12 lg:py-24">
    <UContainer class="">
      <!-- Back Button -->
      <NuxtLink
        :to="localePath('/blog')"
        class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
      >
        <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
        Back to Blog
      </NuxtLink>

      <div v-if="post">
        <!-- Article Header -->
        <div class="space-y-6 text-center mb-12 animate-fade-in-up">
          <div
            class="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400"
          >
            <span class="font-medium text-blue-600 dark:text-blue-400">{{
              post.category
            }}</span>
            <span>•</span>
            <time>{{ post.date }}</time>
          </div>

          <h1
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {{ post.title }}
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ post.description }}
          </p>

          <div class="flex items-center justify-center gap-3 pt-4">
            <UAvatar
              :src="post.author.avatar"
              :alt="post.author.name"
              size="sm"
            />
            <div class="text-left">
              <p class="font-medium text-gray-900 dark:text-white">
                {{ post.author.name }}
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-xs">
                {{ post.author.role }}
              </p>
            </div>
          </div>
        </div>

        <!-- Featured Image -->
        <div
          class="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-xl animate-fade-in-up delay-100"
        >
          <NuxtImg
            :src="post.image"
            :alt="post.title"
            class="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            format="webp"
            width="1200"
            height="675"
          />
        </div>

        <!-- Content -->
        <article
          class="prose prose-lg dark:prose-invert max-w-none mx-auto animate-fade-in-up delay-200"
          v-html="post.content"
        />

        <!-- Share / Footer -->
        <div
          class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center"
        >
          <p class="text-gray-500 dark:text-gray-400 font-medium">
            Share this article
          </p>
          <div class="flex gap-4">
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-twitter"
              to="#"
              target="_blank"
            />
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-linkedin"
              to="#"
              target="_blank"
            />
            <UButton
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-facebook"
              to="#"
              target="_blank"
            />
          </div>
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
