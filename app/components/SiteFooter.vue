<script setup lang="ts">
const { t } = useI18n({
  en: {
    tagline: 'Excellence in education, shaping the global citizens of tomorrow through innovation and character development.',
    quickLinks: 'Quick Links', privacy: 'Privacy Policy', terms: 'Terms of Service',
    accessibility: 'Accessibility', contact: 'Contact Us',
    followUs: 'Follow Us', copyright: '© 2024 Bright Future High School. Excellence in Education.',
  },
  km: {
    tagline: 'ឧត្តមភាពក្នុងការអប់រំ បង្កើតពលរដ្ឋពិភពលោកនាថ្ងៃអនាគត តាមរយៈនវានុវត្តន៍ និងការអភិវឌ្ឍបុគ្គលិកលក្ខណៈ។',
    quickLinks: 'តំណភ្ជាប់រហ័ស', privacy: 'គោលការណ៍ឯកជនភាព', terms: 'លក្ខខណ្ឌប្រើប្រាស់',
    accessibility: 'ភាពងាយស្រួលប្រើ', contact: 'ទាក់ទងយើង',
    followUs: 'តាមដានយើង', copyright: '© ២០២៤ វិទ្យាល័យអនាគតភ្លឺស្វាង។ ឧត្តមភាពក្នុងការអប់រំ។',
  },
})

const quickLinks = computed(() => [
  { label: t('privacy'), to: '#' },
  { label: t('terms'), to: '#' },
  { label: t('accessibility'), to: '#' },
  { label: t('contact'), to: '#' },
])
</script>

<template>
  <footer class="w-full py-stack-lg px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter bg-primary border-t border-white/10">
    <div class="flex flex-col gap-stack-md">
      <div class="font-display-lg text-headline-md text-white">BFHS</div>
      <p class="text-surface-variant/80 font-body-sm">{{ t('tagline') }}</p>
    </div>
    <div class="flex flex-col gap-stack-md">
      <h4 class="text-white font-bold">{{ t('quickLinks') }}</h4>
      <div class="grid grid-cols-2 gap-stack-sm">
        <a
          v-for="link in quickLinks"
          :key="link.label"
          class="text-surface-variant/80 hover:text-white font-body-sm transition-opacity"
          :href="link.to"
        >{{ link.label }}</a>
      </div>
    </div>
    <div class="flex flex-col gap-stack-md md:items-end">
      <h4 class="text-white font-bold">{{ t('followUs') }}</h4>
      <div class="flex gap-stack-md">
        <span class="material-symbols-outlined text-white cursor-pointer hover:text-secondary-container transition-colors">thumb_up</span>
        <span class="material-symbols-outlined text-white cursor-pointer hover:text-secondary-container transition-colors">share</span>
        <span class="material-symbols-outlined text-white cursor-pointer hover:text-secondary-container transition-colors">public</span>
      </div>
      <div class="text-surface-variant/80 font-body-sm mt-stack-md">{{ t('copyright') }}</div>
    </div>
  </footer>
</template>
