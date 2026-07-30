<script setup lang="ts">
type Tone = 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'inverse'

const props = withDefaults(defineProps<{
  tone?: Tone
  dot?: boolean
  icon?: string
}>(), { tone: 'neutral' })

const TONES: Record<Tone, string> = {
  neutral: 'bg-surface-2 text-fg-muted border-line',
  brand: 'bg-brand-tint text-on-brand-tint border-brand/15',
  accent: 'bg-accent-tint text-on-accent-tint border-accent/20',
  success: 'bg-success-tint text-on-success-tint border-success/20',
  warning: 'bg-warning-tint text-on-warning-tint border-warning/20',
  danger: 'bg-danger-tint text-on-danger-tint border-danger/20',
  info: 'bg-info-tint text-on-info-tint border-info/20',
  inverse: 'bg-on-dark/12 text-on-dark border-on-dark/20 backdrop-blur-sm',
}

const DOTS: Record<Tone, string> = {
  neutral: 'bg-fg-subtle', brand: 'bg-brand', accent: 'bg-accent', success: 'bg-success',
  warning: 'bg-warning', danger: 'bg-danger', info: 'bg-info', inverse: 'bg-on-dark',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-label-sm font-medium"
    :class="TONES[props.tone]"
  >
    <span v-if="props.dot" class="h-1.5 w-1.5 rounded-full" :class="DOTS[props.tone]" />
    <UiIcon v-if="props.icon" :name="props.icon" :size="14" />
    <slot />
  </span>
</template>
