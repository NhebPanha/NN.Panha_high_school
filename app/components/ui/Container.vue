<script setup lang="ts">
withDefaults(defineProps<{ narrow?: boolean }>(), { narrow: false })
</script>

<template>
  <div class="mx-auto w-full px-page sm:px-8 lg:px-page-lg" :class="narrow ? 'max-w-4xl' : 'max-w-container'">
    <slot />
  </div>
</template>
