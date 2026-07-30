<script setup lang="ts">
const props = withDefaults(defineProps<{
  tone?: 'default' | 'inverse'
  /** Hide the wordmark and show only the crest (used in condensed rails). */
  compact?: boolean
  subtitle?: string
  to?: string
}>(), { tone: 'default', to: '/' })

const { t } = useI18n({
  en: { name: 'Bright Future', suffix: 'High School' },
  km: { name: 'អនាគតភ្លឺស្វាង', suffix: 'វិទ្យាល័យ' },
})
</script>

<template>
  <NuxtLink :to="props.to" class="group inline-flex items-center gap-3">
    <!-- Crest: a wordless monogram keeps the lockup stable across both scripts. -->
    <span
      class="grid h-9 w-9 shrink-0 place-items-center rounded-md font-display text-[15px] font-semibold tracking-tight transition-colors duration-200"
      :class="props.tone === 'inverse'
        ? 'bg-on-dark text-brand'
        : 'bg-brand text-on-brand group-hover:bg-accent group-hover:text-on-accent'"
    >BF</span>

    <span v-if="!props.compact" class="flex flex-col leading-none">
      <span
        class="font-display text-[17px] font-semibold tracking-tight"
        :class="props.tone === 'inverse' ? 'text-on-dark' : 'text-fg'"
      >{{ t('name') }}</span>
      <span
        class="mt-1 text-eyebrow uppercase"
        :class="props.tone === 'inverse' ? 'text-on-dark/60' : 'text-fg-subtle'"
      >{{ props.subtitle || t('suffix') }}</span>
    </span>
  </NuxtLink>
</template>
