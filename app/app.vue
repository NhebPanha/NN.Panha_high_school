<script setup lang="ts">
const theme = useTheme()
const locale = useLocale()

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    class: () => (theme.value === 'dark' ? 'dark' : ''),
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
