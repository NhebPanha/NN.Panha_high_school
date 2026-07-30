<script setup lang="ts">
/** Interior-page masthead. Same rhythm on every marketing page. */
const props = defineProps<{
  eyebrow?: string
  title: string
  lede?: string
  image?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="relative isolate overflow-hidden border-b border-on-dark/10 bg-brand">
    <template v-if="props.image">
      <img
        :src="props.image" :alt="props.imageAlt || ''"
        class="absolute inset-0 -z-10 h-full w-full object-cover"
      >
      <div class="scrim-l absolute inset-0 -z-10" />
    </template>

    <UiContainer>
      <div class="max-w-3xl py-16 sm:py-20 lg:py-24">
        <p v-if="props.eyebrow" class="animate-fade-up text-eyebrow uppercase text-accent">{{ props.eyebrow }}</p>
        <h1 class="mt-4 animate-fade-up font-display text-display-1 text-balance text-on-dark [animation-delay:60ms]">
          {{ props.title }}
        </h1>
        <p v-if="props.lede" class="mt-5 max-w-2xl animate-fade-up text-lead text-pretty text-on-dark-muted [animation-delay:120ms]">
          {{ props.lede }}
        </p>
        <div class="mt-8 empty:hidden">
          <slot />
        </div>
      </div>
    </UiContainer>
  </section>
</template>
