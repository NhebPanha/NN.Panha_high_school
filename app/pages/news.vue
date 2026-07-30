<script setup lang="ts">
useHead({ title: 'News & Events' })

const { t } = useI18n({
  en: {
    // Categories
    catAll: 'All updates',
    catAcademic: 'Academic',
    catAthletics: 'Athletics',
    catArts: 'Arts & Culture',
    catCommunity: 'Community',
    // Hero
    pageEyebrow: 'Newsroom',
    featuredBadge: 'Featured announcement',
    heroTitle: 'State-of-the-Art Science Wing Opening This Fall',
    heroExcerpt: 'Redefining STEM education with five new specialized labs, advanced robotics centers, and sustainable architecture.',
    readFullStory: 'Read full story',
    viewGallery: 'View gallery',
    // Search
    searchPlaceholder: 'Search news and events…',
    resultCount: 'stories',
    noResults: 'No stories match that search yet.',
    clearFilters: 'Clear filters',
    // Card 1 – Sports
    card1Date: 'Oct 24, 2024',
    card1Title: 'Varsity Basketball Regional Finals Announced',
    card1Excerpt: 'The Falcons are headed to the championships after a historic season. Join us this Saturday at the Grand Arena.',
    card1Cta: 'Get tickets',
    card1AltText: 'Sports News',
    // Card 2 – Gala
    card2Date: 'Oct 23, 2024',
    card2Title: "Annual Founder's Day Gala: Tickets Now Available",
    card2Excerpt: 'Celebrating 75 years of academic excellence and community impact. An evening of music, dinner, and legacy.',
    card2AlumniCount: 'Join 200+ alumni',
    // Card 3 – Academic
    card3Date: 'Oct 22, 2024',
    card3Title: 'National Merit Scholarship Semifinalists',
    card3Excerpt: 'We are proud to announce that twelve BFHS seniors have been named semifinalists in the 2024 scholarship program.',
    card3AltText: 'Student Merit',
    // Card 4 – Robotics
    card4Date: 'Oct 20, 2024',
    card4Title: 'Robotics Team Wins "Innovation Award"',
    card4Excerpt: "Our 'Circuit Breakers' team took home top honors at the Regional STEM Expo for their autonomous environmental drone project.",
    card4NextMatch: 'Next match: Nov 12',
    // Card 5 – Arts
    card5Date: 'Oct 18, 2024',
    card5Title: 'Winter Production: "The Glass Menagerie"',
    card5Excerpt: 'Auditions are now open for the senior theatre production. All students are encouraged to participate in crew and cast.',
    card5Cta: 'Audition details',
    card5AltText: 'Theatre News',
    // Card 6 – Community
    card6Date: 'Oct 15, 2024',
    card6Heading: 'Service Saturday',
    card6Sub: 'Community outreach',
    card6Quote: 'Giving back to the city that supports our growth. Join us this Saturday for the local park restoration project.',
    card6Cta: 'Sign up to volunteer',
    // Calendar
    calendarTitle: 'Academic Calendar',
    calendarSubtitle: 'Important dates and school events',
    calendarMonth: 'November 2024',
    // Day names
    daySun: 'Sun', dayMon: 'Mon', dayTue: 'Tue', dayWed: 'Wed', dayThu: 'Thu', dayFri: 'Fri', daySat: 'Sat',
    // Calendar event chips
    eventPepRally: 'Pep Rally',
    eventMidterm: 'Midterm Exams',
    eventVetsDay: "Vet's Day (No School)",
    eventFallConcert: 'Fall Concert',
    // Legend
    legendActivity: 'School activity',
    legendDeadline: 'Academic deadline',
    legendHoliday: 'Public holiday',
    legendSpecial: 'Special event',
  },
  km: {
    // Categories
    catAll: 'ការអាប់ដេតទាំងអស់',
    catAcademic: 'ព័ត៌មានសិក្សា',
    catAthletics: 'កីឡា',
    catArts: 'សិល្បៈ និងវប្បធម៌',
    catCommunity: 'សហគមន៍',
    // Hero
    pageEyebrow: 'បន្ទប់ព័ត៌មាន',
    featuredBadge: 'សេចក្តីប្រកាសពិសេស',
    heroTitle: 'ការបើកមហាស្ថានវិទ្យាសាស្ត្រទំនើបនៅរដូវស្លឹកឈើជ្រុះ',
    heroExcerpt: 'កំណត់ឡើងវិញនូវការអប់រំ STEM ជាមួយមន្ទីរពិសោធន៍ពិសេស ៥ ផ្ទះ មជ្ឈមណ្ឌលរូបយន្ត និងស្ថាបត្យកម្មប្រើប្រាស់ថាមពលកកើតឡើងវិញ។',
    readFullStory: 'អានអត្ថបទពេញ',
    viewGallery: 'មើលវិចិត្រសាល',
    // Search
    searchPlaceholder: 'ស្វែងរកព័ត៌មាន និងព្រឹត្តិការណ៍...',
    resultCount: 'អត្ថបទ',
    noResults: 'មិនមានអត្ថបទត្រូវនឹងការស្វែងរកនេះទេ។',
    clearFilters: 'សម្អាតតម្រង',
    // Card 1 – Sports
    card1Date: '២៤ តុលា ២០២៤',
    card1Title: 'ប្រកាសពីផ្សារណាត់វគ្គផ្តាច់ព្រ័ត្របាល់បោះថ្នាក់ខេត្ត',
    card1Excerpt: 'ក្រុម Falcons បានឈានដល់ការប្រកួតជើងឯកបន្ទាប់ពីរដូវប្រកួតប្រវត្តិសាស្ត្រ។ ចូលរួមជាមួយយើងខ្ញុំនៅថ្ងៃសៅរ៍នេះនៅ Grand Arena។',
    card1Cta: 'ទិញសំបុត្រ',
    card1AltText: 'ព័ត៌មានកីឡា',
    // Card 2 – Gala
    card2Date: '២៣ តុលា ២០២៤',
    card2Title: "ពិធីជប់លៀងប្រចាំឆ្នាំ Founder's Day: សំបុត្រមានលក់ហើយ",
    card2Excerpt: 'ប្រារព្ធខួបអាយុ ៧៥ ឆ្នាំនៃភាពល្អឥតខ្ចោះខាងសិក្សា និងឥទ្ធិពលសហគម។ ពេលល្ងាចនៃភ្លេង អាហារ និងមរតក។',
    card2AlumniCount: 'ចូលរួមជាមួយអតីតសិស្សជាង ២០០ នាក់',
    // Card 3 – Academic
    card3Date: '២២ តុលា ២០២៤',
    card3Title: 'អ្នកស្ម័គ្រចិត្តអាហារូបករណ៍ National Merit',
    card3Excerpt: 'យើងមានមោទនភាពប្រកាសថា និស្សិតថ្នាក់ ១២ ​នាក់នៃ BFHS ត្រូវបានជ្រើសរើសជាអ្នកស្ម័គ្រចិត្តក្នុងកម្មវិធីអាហារូបករណ៍ឆ្នាំ ២០២៤។',
    card3AltText: 'ការបញ្ចប់ការសិក្សារបស់សិស្ស',
    // Card 4 – Robotics
    card4Date: '២០ តុលា ២០២៤',
    card4Title: 'ក្រុមរូបយន្តឈ្នះរង្វាន់ "ឧត្តមភាពនវានុវត្តន៍"',
    card4Excerpt: 'ក្រុម "Circuit Breakers" របស់យើងបានទទួលរង្វាន់ទីមួយនៅ Regional STEM Expo សម្រាប់គម្រោងជំនាន់ស្វ័យប្រវត្តិបង្ហោះការស្ទង់មើលបរិស្ថាន។',
    card4NextMatch: 'ប្រកួតបន្ទាប់: ១២ វិច្ឆិកា',
    // Card 5 – Arts
    card5Date: '១៨ តុលា ២០២៤',
    card5Title: 'ការសម្តែងរដូវរងា: "The Glass Menagerie"',
    card5Excerpt: 'ការប្រឡងតួបើកហើយសម្រាប់ការសម្តែងរបស់ក្រុមថ្នាក់ទី ១២។ សូមលើកទឹកចិត្តសិស្សទាំងអស់ឱ្យចូលរួមក្នុងក្រុមហ្វឹកហ្វឺន និងតួ។',
    card5Cta: 'ព័ត៌មានការប្រឡង',
    card5AltText: 'ព័ត៌មានរោងល្ខោន',
    // Card 6 – Community
    card6Date: '១៥ តុលា ២០២៤',
    card6Heading: 'ថ្ងៃសៅរ៍បម្រើសង្គម',
    card6Sub: 'ការប្រព្រឹត្តិចំពោះសហគម',
    card6Quote: 'ការស្វែងរកការចូលរួមជួយដល់ក្រុងដែលគាំទ្រការរីកចម្រើនរបស់យើង។ ចូលរួមជាមួយយើងនៅថ្ងៃសៅរ៍នេះក្នុងគម្រោងស្ដារឡើងវិញនូវសួនសាធារណៈ។',
    card6Cta: 'ចុះឈ្មោះធ្វើជាអ្នកស្ម័គ្រចិត្ត',
    // Calendar
    calendarTitle: 'ប្រតិទិនសិក្សា',
    calendarSubtitle: 'កាលបរិច្ឆេទសំខាន់ និងព្រឹត្តិការណ៍សាលា',
    calendarMonth: 'វិច្ឆិកា ២០២៤',
    // Day names
    daySun: 'អាទិត្យ', dayMon: 'ច័ន្ទ', dayTue: 'អង្គារ', dayWed: 'ពុធ', dayThu: 'ព្រហស្បតិ៍', dayFri: 'សុក្រ', daySat: 'សៅរ៍',
    // Calendar event chips
    eventPepRally: 'ការជម្រុញកីឡា',
    eventMidterm: 'ប្រឡងពាក់កណ្តាលឆមាស',
    eventVetsDay: 'ថ្ងៃយោធា (គ្មានថ្នាក់រៀន)',
    eventFallConcert: 'កុងស៊ែររដូវស្លឹកឈើជ្រុះ',
    // Legend
    legendActivity: 'សកម្មភាពសាលា',
    legendDeadline: 'កាលកំណត់សិក្សា',
    legendHoliday: 'ថ្ងៃឈប់សម្រាកសាធារណៈ',
    legendSpecial: 'ព្រឹត្តិការណ៍ពិសេស',
  },
})

/* ── Stories ─────────────────────────────────────────────────────────────── */

const categoryIds = ['all', 'academic', 'athletics', 'arts', 'community'] as const
type CategoryId = typeof categoryIds[number]

const categoryLabels = computed<Record<CategoryId, string>>(() => ({
  all: t('catAll'),
  academic: t('catAcademic'),
  athletics: t('catAthletics'),
  arts: t('catArts'),
  community: t('catCommunity'),
}))

const activeCategory = ref<CategoryId>('all')
const query = ref('')

interface Story {
  id: string
  category: Exclude<CategoryId, 'all'>
  date: string
  title: string
  excerpt: string
  image?: string
  imageAlt?: string
  icon?: string
  cta?: string
  meta?: string
  avatars?: string[]
}

const stories = computed<Story[]>(() => [
  {
    id: 'basketball', category: 'athletics', date: t('card1Date'),
    title: t('card1Title'), excerpt: t('card1Excerpt'), cta: t('card1Cta'),
    imageAlt: t('card1AltText'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT7XG3JPcUSmcmc2bFi7FegvJxJCYQYapU7_PX19qrIRfSzyphrU57mYJ8kJ8M5Tdnhsqqo2XQ36mvLLFI7WTYI9HqI0n8eldfmnyUAfJ5Z48z-T22U0OqB_biVgeELD0XI-sSluy35__W6VJhtqkigT-_mhikVx4azYWUQ4qmK7hPvSRYf8yFhfaAUeX1pAZkNPTW9-lwuoUDYl2e-M_V3AFcSnKWg_zjw3TmQLGX_Opvm66TXgMKsXnaTNFNqqnUmie-mCauL4k',
  },
  {
    id: 'gala', category: 'arts', date: t('card2Date'),
    title: t('card2Title'), excerpt: t('card2Excerpt'), icon: 'celebration',
    meta: t('card2AlumniCount'),
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4eW_n5tVv-pg0BtOAL4oZ0R29NFSKO1ky8C3w4XMl6HwGG2KIa2wv8663xUUsByFLCsR2nr4mwV4idKvydvl3Dbm12mdKUU0ThW45pnKUhlTjKk-Y5n0xby88_qhnEGrekDI_o-TN_CxKWk7Fa0cu2xNKV94hi0c7Wl6Xv1IybT-IIbMVlahkJR5PtJrvDyNgy0GiiKYYl67R2wTp832sVMwTVfkbti6MOiIKT2yUurtUHfYg-vAkB_TbBtCZO2-ZmSgDMPmiKhg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAneXRKO9V60Y1fx3gmxD-InhBqFtpRyEsBv5O0MhCxKsig0agJY1qquRfxUYv7f_31TLGucOmh-SSrpxd58oG1hEGW4aKG5Bb5Wd5jt_7dUz1V5dudTD95ZRuysaEzmnaDmHf_zTxbO7C6hDmnt8sM3T3nzjIyj_xz26IBepEbVPb14LoTfBKvsado6bRtMJteSbLexd7Z2zO5BrPPvoFwOy5sz3zQQTyBxdkdpyvuif15OFmVTR0vjqDXbB4ZpNCaNAH5I4LDWTY',
    ],
  },
  {
    id: 'merit', category: 'academic', date: t('card3Date'),
    title: t('card3Title'), excerpt: t('card3Excerpt'), imageAlt: t('card3AltText'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgo3ljRNHXw8jdkqWTeg_V6OsInv5vr-LM0Kqw0JyxHeQfSpmpDSGugQDMfAnz2h9VJb5s1uJ0YX9AnzlWFJIMhxDhnlCJB8uFcyDQQJbpb2ZrOqDcrvMlWOc0A75Zbx1savE-MVlyNzY1hy0zLpW_2ml27A0gVYFAmld95BgC-3hic_ipW_e0_KCo8jisdX_fsoOq-lZF8cGg3SLXRNbtPwF9T2CVYiuO2CiW-zlub_qx0Uoeh2q0j7FLxC2vPNs6lAUAJlX1yO0',
  },
  {
    id: 'robotics', category: 'academic', date: t('card4Date'),
    title: t('card4Title'), excerpt: t('card4Excerpt'), icon: 'precision_manufacturing',
    meta: t('card4NextMatch'),
  },
  {
    id: 'theatre', category: 'arts', date: t('card5Date'),
    title: t('card5Title'), excerpt: t('card5Excerpt'), cta: t('card5Cta'), imageAlt: t('card5AltText'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZl1PsJ0Qzg5crZH8ELb7Rrse_31OD2-WhigKCtXnGjRh6-Tr6TnB5w0Xl2f4grL3sMIovhAWHlogJlyiviPvhm_O4ifeoFQ8eUPV6AfWOIgXqSv5xPcZiITMSaTEW6ZnhHejXQvV7t_O4yF2OdylluuSC-OFCmOh5v0yAvdzHv3A1uY7Y26O83A5qerS8Q9LO4Q3izlMxvDfbbRaQCAPdgUJ0d63Z3UB5divfJoNKrY9YhU8FC4IVAsZMfdnlnhXYt1qsSaPrmO8',
  },
  {
    id: 'service', category: 'community', date: t('card6Date'),
    title: t('card6Heading'), excerpt: t('card6Quote'), icon: 'volunteer_activism',
    cta: t('card6Cta'), meta: t('card6Sub'),
  },
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return stories.value.filter((s) => {
    const byCategory = activeCategory.value === 'all' || s.category === activeCategory.value
    const byQuery = !q || `${s.title} ${s.excerpt}`.toLowerCase().includes(q)
    return byCategory && byQuery
  })
})

function clearFilters() {
  activeCategory.value = 'all'
  query.value = ''
}

/* ── Calendar (November 2024 — the 1st falls on a Friday) ─────────────────── */

type EventTone = 'activity' | 'deadline' | 'holiday' | 'special'

const EVENT_TONES: Record<EventTone, string> = {
  activity: 'bg-info-tint text-on-info-tint',
  deadline: 'bg-danger-tint text-on-danger-tint',
  holiday: 'bg-brand text-on-brand',
  special: 'bg-accent-tint text-on-accent-tint',
}

const dayNames = computed(() => [t('daySun'), t('dayMon'), t('dayTue'), t('dayWed'), t('dayThu'), t('dayFri'), t('daySat')])

const calendarDays = computed(() => {
  const events: Record<number, { label: string; tone: EventTone }> = {
    1: { label: t('eventPepRally'), tone: 'activity' },
    5: { label: t('eventMidterm'), tone: 'deadline' },
    6: { label: t('eventMidterm'), tone: 'deadline' },
    7: { label: t('eventMidterm'), tone: 'deadline' },
    11: { label: t('eventVetsDay'), tone: 'holiday' },
    14: { label: t('eventFallConcert'), tone: 'special' },
  }
  const leading = [27, 28, 29, 30, 31].map(n => ({ n, outside: true, event: undefined as typeof events[number] | undefined }))
  const current = Array.from({ length: 30 }, (_, i) => ({ n: i + 1, outside: false, event: events[i + 1] }))
  const cells = [...leading, ...current]
  // Pad the final week so the grid stays rectangular.
  const trailing = Array.from({ length: (7 - (cells.length % 7)) % 7 }, (_, i) => ({ n: i + 1, outside: true, event: undefined }))
  return [...cells, ...trailing]
})

const legend = computed(() => [
  { tone: 'activity' as EventTone, label: t('legendActivity') },
  { tone: 'deadline' as EventTone, label: t('legendDeadline') },
  { tone: 'holiday' as EventTone, label: t('legendHoliday') },
  { tone: 'special' as EventTone, label: t('legendSpecial') },
])
</script>

<template>
  <div>
    <!-- ── Featured ─────────────────────────────────────────────────────── -->
    <section class="relative isolate overflow-hidden border-b border-on-dark/10 bg-brand">
      <img
        class="absolute inset-0 -z-10 h-full w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb56ot56JgA0e2_58F45IwSglxx6OcOaAWz9OsJ6BZavrqheoBml9WTOdw3xp9JKQtlYEHK6QRCLZPO183y6uOk01JRx5NgwKry4cYA_b1GLBSqjvT2WVlWshdSaYrBdpjs0xzEkQH0liFpDBZx93CU3p88tbqyFNm96RO-7_F-iqObci4ojDGYnYFVDbRLwf5KrtsrRjm9mCcTDQuxZ6HkRq_O3uYBgzd_RRRyjHvQFA83c2Iw4tnN7pB5BU_E2JFaUgptkK2UXg"
        alt=""
      >
      <div class="scrim-l absolute inset-0 -z-10" />

      <UiContainer>
        <div class="max-w-3xl py-20 lg:py-28">
          <div class="flex flex-wrap items-center gap-3">
            <p class="text-eyebrow uppercase text-accent">{{ t('pageEyebrow') }}</p>
            <UiBadge tone="inverse">{{ t('featuredBadge') }}</UiBadge>
          </div>
          <h1 class="mt-5 font-display text-display-1 text-balance text-on-dark">{{ t('heroTitle') }}</h1>
          <p class="mt-5 max-w-2xl text-lead text-pretty text-on-dark-muted">{{ t('heroExcerpt') }}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <UiButton variant="inverse" size="lg" icon-trailing="arrow_forward">{{ t('readFullStory') }}</UiButton>
            <UiButton variant="ghost" size="lg" icon="photo_library" class="border border-on-dark/25 text-on-dark hover:bg-on-dark/10">
              {{ t('viewGallery') }}
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ── Filter bar ───────────────────────────────────────────────────── -->
    <div class="sticky top-16 z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <UiContainer>
        <div class="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div class="hide-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1" role="tablist" aria-label="Story categories">
            <button
              v-for="id in categoryIds"
              :key="id"
              type="button"
              role="tab"
              :aria-selected="activeCategory === id"
              class="shrink-0 rounded-md px-3.5 py-2 text-label transition-colors duration-150"
              :class="activeCategory === id
                ? 'bg-brand text-on-brand'
                : 'text-fg-muted hover:bg-surface-2 hover:text-fg'"
              @click="activeCategory = id"
            >{{ categoryLabels[id] }}</button>
          </div>

          <div class="relative w-full lg:w-80">
            <UiIcon name="search" :size="18" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle" />
            <input
              v-model="query"
              type="search"
              :placeholder="t('searchPlaceholder')"
              :aria-label="t('searchPlaceholder')"
              class="h-10 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-copy-sm text-fg placeholder:text-fg-subtle focus:border-accent"
            >
          </div>
        </div>
      </UiContainer>
    </div>

    <!-- ── Story grid ───────────────────────────────────────────────────── -->
    <UiSection compact>
      <p class="mb-6 text-label text-fg-subtle" aria-live="polite">
        {{ filtered.length }} {{ t('resultCount') }}
      </p>

      <div v-if="filtered.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="story in filtered"
          :key="story.id"
          class="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
        >
          <div v-if="story.image" class="aspect-[16/10] overflow-hidden bg-surface-3">
            <img
              :src="story.image" :alt="story.imageAlt || ''" loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            >
          </div>

          <div class="flex flex-1 flex-col p-6">
            <div class="flex items-center justify-between gap-3">
              <UiBadge :tone="story.category === 'athletics' ? 'info' : story.category === 'arts' ? 'accent' : story.category === 'community' ? 'success' : 'brand'">
                {{ categoryLabels[story.category] }}
              </UiBadge>
              <time class="text-label-sm text-fg-subtle">{{ story.date }}</time>
            </div>

            <UiIcon v-if="story.icon && !story.image" :name="story.icon" :size="26" class="mt-5 text-accent" />

            <h2 class="mt-4 font-display text-title-3 text-fg transition-colors group-hover:text-accent">{{ story.title }}</h2>
            <p class="mt-2.5 flex-1 text-copy-sm text-fg-muted">{{ story.excerpt }}</p>

            <div class="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
              <div v-if="story.avatars" class="flex items-center gap-2.5">
                <div class="flex -space-x-2">
                  <img
                    v-for="(src, i) in story.avatars" :key="i" :src="src" alt="" loading="lazy"
                    class="h-7 w-7 rounded-full border-2 border-surface object-cover"
                  >
                  <span class="grid h-7 w-7 place-items-center rounded-full border-2 border-surface bg-accent text-[10px] font-semibold text-on-accent">+40</span>
                </div>
                <span class="text-label-sm text-fg-muted">{{ story.meta }}</span>
              </div>
              <span v-else-if="story.meta" class="text-label-sm text-fg-muted">{{ story.meta }}</span>
              <span v-else />

              <a
                v-if="story.cta"
                href="#"
                class="inline-flex shrink-0 items-center gap-1.5 text-label font-medium text-fg transition-colors group-hover:text-accent"
              >
                {{ story.cta }}
                <UiIcon name="arrow_forward" :size="15" class="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="rounded-xl border border-dashed border-line-strong px-6 py-16 text-center">
        <UiIcon name="search_off" :size="28" class="mx-auto text-fg-subtle" />
        <p class="mt-3 text-copy text-fg-muted">{{ t('noResults') }}</p>
        <UiButton variant="outline" size="sm" class="mt-5" @click="clearFilters">{{ t('clearFilters') }}</UiButton>
      </div>
    </UiSection>

    <!-- ── Calendar ─────────────────────────────────────────────────────── -->
    <UiSection tone="muted" compact>
      <div class="overflow-hidden rounded-xl border border-line bg-surface">
        <div class="flex flex-col gap-4 border-b border-line bg-brand px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h2 class="font-display text-title-2 text-on-dark">{{ t('calendarTitle') }}</h2>
            <p class="mt-1 text-copy-sm text-on-dark-muted">{{ t('calendarSubtitle') }}</p>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" class="grid h-9 w-9 place-items-center rounded-md border border-on-dark/20 text-on-dark-muted transition-colors hover:bg-on-dark/10 hover:text-on-dark" aria-label="Previous month">
              <UiIcon name="chevron_left" :size="18" />
            </button>
            <span class="min-w-[9rem] text-center text-label font-medium text-on-dark">{{ t('calendarMonth') }}</span>
            <button type="button" class="grid h-9 w-9 place-items-center rounded-md border border-on-dark/20 text-on-dark-muted transition-colors hover:bg-on-dark/10 hover:text-on-dark" aria-label="Next month">
              <UiIcon name="chevron_right" :size="18" />
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <div class="min-w-[640px] p-4 sm:p-6">
            <div class="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-line bg-line">
              <div
                v-for="day in dayNames" :key="day"
                class="bg-surface-2 py-2.5 text-center text-eyebrow uppercase text-fg-subtle"
              >{{ day }}</div>

              <div
                v-for="(cell, i) in calendarDays" :key="i"
                class="min-h-[92px] bg-surface p-2"
                :class="cell.outside && 'bg-surface-2/60'"
              >
                <span class="text-label-sm tabular-nums" :class="cell.outside ? 'text-fg-subtle/50' : 'text-fg-muted'">
                  {{ cell.n }}
                </span>
                <p
                  v-if="cell.event"
                  class="mt-1.5 truncate rounded px-1.5 py-1 text-[11px] font-medium leading-tight"
                  :class="EVENT_TONES[cell.event.tone]"
                  :title="cell.event.label"
                >{{ cell.event.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <ul class="flex flex-wrap gap-x-6 gap-y-2 border-t border-line px-6 py-4 sm:px-8">
          <li v-for="l in legend" :key="l.label" class="flex items-center gap-2 text-label-sm text-fg-muted">
            <span class="h-2.5 w-2.5 rounded-sm" :class="EVENT_TONES[l.tone]" />{{ l.label }}
          </li>
        </ul>
      </div>
    </UiSection>
  </div>
</template>
