<script setup lang="ts">
type Tone = 'surface' | 'raised' | 'brand' | 'accent' | 'outline'

const props = withDefaults(defineProps<{
  tone?: Tone
  /** Adds a hover lift. Only use where the whole card is a link/target. */
  interactive?: boolean
  padded?: boolean | 'sm' | 'lg'
  to?: string
}>(), { tone: 'surface', padded: true })

const TONES: Record<Tone, string> = {
  surface: 'bg-surface border border-line text-fg shadow-card',
  raised: 'bg-surface-2 border border-line text-fg',
  outline: 'bg-transparent border border-line text-fg',
  brand: 'bg-brand border border-brand text-on-dark',
  accent: 'bg-accent-tint border border-accent/25 text-on-accent-tint',
}

const PAD = { sm: 'p-4', true: 'p-5 sm:p-6', lg: 'p-6 sm:p-8' } as const

const classes = computed(() => [
  'relative rounded-xl',
  TONES[props.tone],
  props.padded && PAD[String(props.padded) as keyof typeof PAD],
  props.interactive &&
    'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lift hover:border-line-strong',
])
</script>

<template>
  <component :is="props.to ? resolveComponent('NuxtLink') : 'div'" :to="props.to" :class="classes">
    <slot />
  </component>
</template>
