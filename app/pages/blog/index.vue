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
  },
];

useSeoMeta({
  title: "Blog - BeOn",
  description: "Latest news, updates, and insights from the BeOn team.",
  ogTitle: "Blog - BeOn",
  ogDescription: "Latest news, updates, and insights from the BeOn team.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "BeOn Blog",
        description: "Latest news, updates, and insights from the BeOn team.",
        url: "https://beon.chat/blog",
        publisher: {
          "@type": "Organization",
          name: "BeOn",
          logo: {
            "@type": "ImageObject",
            url: "https://beon.chat/logo.png",
          },
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          url: `https://beon.chat/blog/${post.slug}`,
          image: post.image,
        })),
      }),
    },
  ],
});
useSeoMeta({
  title: "Blog - BeOn",
  description: "Latest news, updates, and insights from the BeOn team.",
  ogTitle: "Blog - BeOn",
  ogDescription: "Latest news, updates, and insights from the BeOn team.",
  ogImage: "https://beon.chat/og-image.png",
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "BeOn Blog",
        description: "Latest news, updates, and insights from the BeOn team.",
        url: "https://beon.chat/blog",
        publisher: {
          "@type": "Organization",
          name: "BeOn",
          logo: {
            "@type": "ImageObject",
            url: "https://beon.chat/logo.png",
          },
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          url: `https://beon.chat/blog/${post.slug}`,
          image: post.image,
        })),
      }),
    },
  ],
});

</script>

<template>
  <div class="bg-white dark:bg-gray-950 min-h-screen py-16 lg:py-24">
    <UContainer>
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Blog
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Insights, updates, and guides to help you master customer
          communication and grow your business with BeOn.
        </p>
      </div>

      <!-- Blog Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogPost
          v-for="(post, index) in posts"
          :key="post.slug"
          :post="post"
          class="animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        />
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
