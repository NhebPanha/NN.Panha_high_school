<script setup lang="ts">
const props = withDefaults(defineProps<{
  value: string
  label: string
  icon?: string
  delta?: string
  deltaTone?: 'success' | 'danger' | 'neutral'
  tone?: 'default' | 'inverse'
}>(), { tone: 'default', deltaTone: 'neutral' })

const DELTA = {
  success: 'text-success',
  danger: 'text-danger',
  neutral: 'text-fg-subtle',
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-start justify-between gap-3">
      <span
        v-if="props.icon"
        class="grid h-9 w-9 place-items-center rounded-md"
        :class="props.tone === 'inverse' ? 'bg-on-dark/12 text-on-dark' : 'bg-brand-tint text-on-brand-tint'"
      >
        <UiIcon :name="props.icon" :size="18" />
      </span>
      <span
        v-if="props.delta"
        class="text-label-sm font-medium tabular-nums"
        :class="props.tone === 'inverse' ? 'text-on-dark-muted' : DELTA[props.deltaTone]"
      >{{ props.delta }}</span>
    </div>

    <p
      class="font-display text-metric tabular-nums"
      :class="props.tone === 'inverse' ? 'text-on-dark' : 'text-fg'"
    >{{ props.value }}</p>

    <p
      class="text-label"
      :class="props.tone === 'inverse' ? 'text-on-dark-muted' : 'text-fg-muted'"
    >{{ props.label }}</p>
  </div>
</template>
