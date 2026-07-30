<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string
  name: string
  size?: number
  square?: boolean
}>(), { size: 40 })

/** Deterministic tint so the same person keeps the same colour between renders. */
const TINTS = [
  'bg-brand-tint text-on-brand-tint',
  'bg-accent-tint text-on-accent-tint',
  'bg-info-tint text-on-info-tint',
  'bg-success-tint text-on-success-tint',
]

const initials = computed(() =>
  props.name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() ?? '').join(''),
)

const tint = computed(() => {
  const sum = [...props.name].reduce((n, c) => n + c.charCodeAt(0), 0)
  return TINTS[sum % TINTS.length]
})
</script>

<template>
  <span
    class="inline-grid shrink-0 place-items-center overflow-hidden border border-line font-medium"
    :class="[props.square ? 'rounded-lg' : 'rounded-full', !props.src && tint]"
    :style="{ width: `${props.size}px`, height: `${props.size}px`, fontSize: `${Math.round(props.size * 0.36)}px` }"
  >
    <img v-if="props.src" :src="props.src" :alt="props.name" class="h-full w-full object-cover">
    <template v-else>{{ initials }}</template>
  </span>
</template>
