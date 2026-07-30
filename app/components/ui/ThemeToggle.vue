<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'default' | 'inverse' }>(), { tone: 'default' })
const { theme, toggle } = useThemeControls()
</script>

<template>
  <button
    type="button"
    class="grid h-9 w-9 place-items-center rounded-md border transition-colors duration-150"
    :class="tone === 'inverse'
      ? 'border-on-dark/20 text-on-dark-muted hover:bg-on-dark/10 hover:text-on-dark'
      : 'border-line text-fg-muted hover:border-line-strong hover:bg-surface-2 hover:text-fg'"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="theme === 'dark'"
    @click="toggle"
  >
    <UiIcon :name="theme === 'dark' ? 'light_mode' : 'dark_mode'" :size="18" />
  </button>
</template>
