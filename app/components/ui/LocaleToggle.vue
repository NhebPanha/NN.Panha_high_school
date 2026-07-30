<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'default' | 'inverse' }>(), { tone: 'default' })
const { locale, toggle } = useLocaleControls()
</script>

<template>
  <button
    type="button"
    class="inline-flex h-9 items-center gap-1.5 rounded-md border px-2.5 text-label font-medium transition-colors duration-150"
    :class="tone === 'inverse'
      ? 'border-on-dark/20 text-on-dark-muted hover:bg-on-dark/10 hover:text-on-dark'
      : 'border-line text-fg-muted hover:border-line-strong hover:bg-surface-2 hover:text-fg'"
    :aria-label="locale === 'en' ? 'ប្ដូរទៅភាសាខ្មែរ' : 'Switch to English'"
    @click="toggle"
  >
    <UiIcon name="language" :size="16" />
    {{ locale === 'en' ? 'ខ្មែរ' : 'EN' }}
  </button>
</template>
