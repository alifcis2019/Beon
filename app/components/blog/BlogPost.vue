<script setup lang="ts">
defineProps<{
  post: {
    title: string
    description: string
    date: string
    image: string
    author: {
      name: string
      avatar: string
      role: string
    }
    category: string
    slug: string
  }
}>()
</script>

<template>
  <NuxtLink
    :to="`/blog/${post.slug}`"
    class="group flex flex-col gap-4"
  >
    <div
      class="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
    >
      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        format="webp"
        width="600"
        height="338"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>

    <div class="flex flex-col gap-2">
      <div
        class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400"
      >
        <span class="font-medium text-blue-600 dark:text-blue-400">{{
          post.category
        }}</span>
        <span>•</span>
        <time>{{ post.date }}</time>
      </div>

      <h3
        class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      >
        {{ post.title }}
      </h3>

      <p class="text-gray-600 dark:text-gray-400 line-clamp-2">
        {{ post.description }}
      </p>

      <div class="mt-2 flex items-center gap-3">
        <UAvatar
          :src="post.author.avatar"
          :alt="post.author.name"
          size="xs"
        />
        <div class="text-sm">
          <p class="font-medium text-gray-900 dark:text-white">
            {{ post.author.name }}
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-xs">
            {{ post.author.role }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
