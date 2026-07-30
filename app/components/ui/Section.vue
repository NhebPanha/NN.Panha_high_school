<script setup lang="ts">
type Tone = 'default' | 'muted' | 'brand'

const props = withDefaults(defineProps<{
  tone?: Tone
  narrow?: boolean
  /** Tighter vertical rhythm for stacked sections that read as one block. */
  compact?: boolean
  id?: string
}>(), { tone: 'default' })

const TONES: Record<Tone, string> = {
  default: 'bg-bg',
  muted: 'bg-surface-2',
  brand: 'bg-brand text-on-dark',
}
</script>

<template>
  <section
    :id="props.id"
    :class="[TONES[props.tone], props.compact ? 'py-12 sm:py-14' : 'py-16 sm:py-20 lg:py-section']"
  >
    <UiContainer :narrow="props.narrow">
      <slot />
    </UiContainer>
  </section>
</template>
