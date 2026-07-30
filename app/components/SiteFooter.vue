<script setup lang="ts">
const { t } = useI18n({
  en: {
    tagline: 'A college-preparatory school shaping rigorous thinkers and principled citizens since 1992.',
    explore: 'Explore', community: 'Community', contact: 'Contact',
    about: 'About', academics: 'Academics', admissions: 'Admissions',
    studentLife: 'Student Life', news: 'News & Events', portal: 'Portal login',
    privacy: 'Privacy policy', terms: 'Terms of service', accessibility: 'Accessibility',
    address: '123 Academic Way, Education City, ED 56789',
    hours: 'Mon–Fri · 08:00–16:30',
    newsletter: 'School newsletter',
    newsletterNote: 'Term dates, results and campus news — once a month.',
    emailPlaceholder: 'you@example.com', subscribe: 'Subscribe',
    subscribed: 'Thanks — please check your inbox to confirm.',
    copyright: '© 2024 Bright Future High School.',
    accredited: 'Accredited · Est. 1992',
  },
  km: {
    tagline: 'សាលារៀនត្រៀមចូលសាកលវិទ្យាល័យ ដែលបណ្ដុះអ្នកគិតបែបវិចារណញាណ និងពលរដ្ឋប្រកបដោយគោលការណ៍ តាំងពីឆ្នាំ ១៩៩២។',
    explore: 'ស្វែងរក', community: 'សហគមន៍', contact: 'ទំនាក់ទំនង',
    about: 'អំពីយើង', academics: 'ការសិក្សា', admissions: 'ការចូលរៀន',
    studentLife: 'ជីវិតសិស្ស', news: 'ព័ត៌មាន', portal: 'ចូលគណនី',
    privacy: 'គោលការណ៍ឯកជនភាព', terms: 'លក្ខខណ្ឌប្រើប្រាស់', accessibility: 'ភាពងាយស្រួលប្រើ',
    address: '១២៣ ផ្លូវ Academic, ទីក្រុងអប់រំ, ED 56789',
    hours: 'ច័ន្ទ–សុក្រ · ០៨:០០–១៦:៣០',
    newsletter: 'ព្រឹត្តិបត្រព័ត៌មានសាលា',
    newsletterNote: 'កាលបរិច្ឆេទឆមាស លទ្ធផល និងព័ត៌មានសាលា — ម្ដងក្នុងមួយខែ។',
    emailPlaceholder: 'you@example.com', subscribe: 'ជាវ',
    subscribed: 'អរគុណ — សូមពិនិត្យប្រអប់សំបុត្ររបស់អ្នក។',
    copyright: '© ២០២៤ វិទ្យាល័យអនាគតភ្លឺស្វាង។',
    accredited: 'ទទួលស្គាល់ · បង្កើតឆ្នាំ ១៩៩២',
  },
})

const columns = computed(() => [
  {
    heading: t('explore'),
    links: [
      { label: t('about'), to: '/about' },
      { label: t('academics'), to: '/academics' },
      { label: t('admissions'), to: '/admissions' },
    ],
  },
  {
    heading: t('community'),
    links: [
      { label: t('studentLife'), to: '/student-life' },
      { label: t('news'), to: '/news' },
      { label: t('portal'), to: '/portal/login' },
    ],
  },
])

const socials = [
  { icon: 'public', label: 'Website' },
  { icon: 'group', label: 'Facebook' },
  { icon: 'photo_camera', label: 'Instagram' },
  { icon: 'smart_display', label: 'YouTube' },
]

const email = ref('')
const subscribed = ref(false)
function subscribe() {
  subscribed.value = true
  email.value = ''
}
</script>

<template>
  <footer class="bg-brand text-on-dark-muted">
    <UiContainer>
      <div class="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div class="flex flex-col gap-5 lg:col-span-4">
          <BrandMark tone="inverse" />
          <p class="max-w-sm text-copy-sm leading-relaxed">{{ t('tagline') }}</p>
          <div class="flex gap-2">
            <button
              v-for="s in socials"
              :key="s.label"
              type="button"
              class="grid h-9 w-9 place-items-center rounded-md border border-on-dark/15 text-on-dark-muted transition-colors hover:bg-on-dark/10 hover:text-on-dark"
              :aria-label="s.label"
            >
              <UiIcon :name="s.icon" :size="17" />
            </button>
          </div>
        </div>

        <div v-for="col in columns" :key="col.heading" class="lg:col-span-2">
          <h2 class="mb-4 text-eyebrow uppercase text-on-dark/50">{{ col.heading }}</h2>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.to">
              <NuxtLink :to="link.to" class="text-copy-sm transition-colors hover:text-on-dark">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4">
          <h2 class="mb-4 text-eyebrow uppercase text-on-dark/50">{{ t('newsletter') }}</h2>
          <p class="mb-4 text-copy-sm">{{ t('newsletterNote') }}</p>
          <form class="flex gap-2" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              required
              :placeholder="t('emailPlaceholder')"
              :aria-label="t('newsletter')"
              class="h-10 w-full rounded-md border border-on-dark/20 bg-on-dark/10 px-3 text-copy-sm text-on-dark placeholder:text-on-dark/45 focus:border-on-dark/50"
            >
            <UiButton type="submit" variant="inverse">{{ t('subscribe') }}</UiButton>
          </form>
          <p v-if="subscribed" class="mt-2 text-label-sm text-on-dark">{{ t('subscribed') }}</p>

          <dl class="mt-8 flex flex-col gap-2 text-copy-sm">
            <div class="flex items-start gap-2.5">
              <UiIcon name="location_on" :size="16" class="mt-0.5 text-on-dark/50" />
              <dd>{{ t('address') }}</dd>
            </div>
            <div class="flex items-start gap-2.5">
              <UiIcon name="schedule" :size="16" class="mt-0.5 text-on-dark/50" />
              <dd>{{ t('hours') }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-on-dark/10 py-6 text-label-sm sm:flex-row">
        <p>{{ t('copyright') }} <span class="text-on-dark/40">· {{ t('accredited') }}</span></p>
        <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li><a href="#" class="transition-colors hover:text-on-dark">{{ t('privacy') }}</a></li>
          <li><a href="#" class="transition-colors hover:text-on-dark">{{ t('terms') }}</a></li>
          <li><a href="#" class="transition-colors hover:text-on-dark">{{ t('accessibility') }}</a></li>
        </ul>
      </div>
    </UiContainer>
  </footer>
</template>
