<script setup lang="ts">
/** Thin wrapper over Material Symbols so sizing and optical weight stay uniform. */
const props = withDefaults(defineProps<{
  name: string
  size?: number
  filled?: boolean
}>(), { size: 20, filled: false })
</script>

<template>
  <span
    class="material-symbols-outlined shrink-0 select-none"
    :class="props.filled && 'icon-filled'"
    :style="{ fontSize: `${props.size}px`, width: `${props.size}px`, height: `${props.size}px` }"
    aria-hidden="true"
  >{{ props.name }}</span>
</template>
