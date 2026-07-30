<script setup lang="ts">
/** Eyebrow → title → lede. The one heading pattern used across the whole site. */
const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  lede?: string
  align?: 'start' | 'center'
  tone?: 'default' | 'inverse'
  as?: 'h1' | 'h2' | 'h3'
  size?: 'display' | 'title'
}>(), { align: 'start', tone: 'default', as: 'h2', size: 'title' })
</script>

<template>
  <div
    class="flex flex-col gap-3"
    :class="props.align === 'center' ? 'items-center text-center' : 'items-start'"
  >
    <p
      v-if="props.eyebrow"
      class="text-eyebrow uppercase"
      :class="props.tone === 'inverse' ? 'text-on-dark/70' : 'text-accent'"
    >{{ props.eyebrow }}</p>

    <component
      :is="props.as"
      class="font-display text-balance"
      :class="[
        props.size === 'display' ? 'text-display-2' : 'text-title-1',
        props.tone === 'inverse' ? 'text-on-dark' : 'text-fg',
      ]"
    >{{ props.title }}</component>

    <p
      v-if="props.lede"
      class="text-lead max-w-prose text-pretty"
      :class="props.tone === 'inverse' ? 'text-on-dark-muted' : 'text-fg-muted'"
    >{{ props.lede }}</p>

    <slot />
  </div>
</template>
