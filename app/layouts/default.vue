<template>
  <div>
    <AppHeader
      class="fixed top-2 z-50 end-[50%] translate-x-1/2 w-[95%] sm:w-[90%] mx-auto flex items-center justify-center"
    />

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
