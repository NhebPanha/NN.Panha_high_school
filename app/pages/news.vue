<script setup lang="ts">
useHead({ title: 'News & Events' })

const { t } = useI18n({
  en: {
    // Categories
    catAll: 'All Updates',
    catAcademic: 'Academic News',
    catAthletics: 'Athletics',
    catArts: 'Arts & Culture',
    // Hero
    featuredBadge: 'Featured Announcement',
    heroTitle: 'State-of-the-Art Science Wing Opening This Fall',
    heroExcerpt: 'Redefining STEM education with five new specialized labs, advanced robotics centers, and sustainable architecture.',
    readFullStory: 'Read Full Story',
    viewGallery: 'View Gallery',
    // Search
    searchPlaceholder: 'Search news and events...',
    // Card 1 – Sports
    card1Category: 'Athletics',
    card1Date: 'Oct 24, 2024',
    card1Title: 'Varsity Basketball Regional Finals Announced',
    card1Excerpt: 'The Falcons are headed to the championships after a historic season. Join us this Saturday at the Grand Arena.',
    card1Cta: 'Get Tickets',
    card1AltText: 'Sports News',
    // Card 2 – Gala
    card2Title: 'Annual Founder\'s Day Gala: Tickets Now Available',
    card2Excerpt: 'Celebrating 75 years of academic excellence and community impact. An evening of music, dinner, and legacy.',
    card2AlumniCount: 'Join 200+ Alumni',
    // Card 3 – Academic
    card3Category: 'Academics',
    card3Date: 'Oct 22, 2024',
    card3Title: 'National Merit Scholarship Semifinalists',
    card3Excerpt: 'We are proud to announce that twelve BFHS seniors have been named semifinalists in the 2024 scholarship program.',
    card3AltText: 'Student Merit',
    // Card 4 – Robotics
    card4Title: 'Robotics Team Wins "Innovation Award"',
    card4Excerpt: 'Our \'Circuit Breakers\' team took home top honors at the Regional STEM Expo for their autonomous environmental drone project.',
    card4NextMatch: 'Next Match: Nov 12',
    // Card 5 – Arts
    card5Category: 'Arts & Culture',
    card5Date: 'Oct 18, 2024',
    card5Title: 'Winter Production: "The Glass Menagerie"',
    card5Excerpt: 'Auditions are now open for the senior theatre production. All students are encouraged to participate in crew and cast.',
    card5Cta: 'Audition Details',
    card5AltText: 'Theatre News',
    // Card 6 – Community
    card6Heading: 'Service Saturday',
    card6Sub: 'Community Outreach',
    card6Quote: '"Giving back to the city that supports our growth. Join us this Saturday for the local park restoration project."',
    card6Cta: 'Sign Up to Volunteer',
    // Calendar header
    calendarTitle: 'Academic Calendar',
    calendarSubtitle: 'November 2024 - Important dates and school events',
    calendarMonth: 'November 2024',
    // Day names
    daySun: 'SUN',
    dayMon: 'MON',
    dayTue: 'TUE',
    dayWed: 'WED',
    dayThu: 'THU',
    dayFri: 'FRI',
    daySat: 'SAT',
    // Calendar event chips
    eventPepRally: 'Pep Rally',
    eventMidterm: 'Midterm Exams',
    eventVetsDay: "Vet's Day (No School)",
    eventFallConcert: 'Fall Concert',
    // Legend
    legendActivity: 'School Activity',
    legendDeadline: 'Academic Deadline',
    legendHoliday: 'Public Holiday',
    legendSpecial: 'Special Event',
  },
  km: {
    // Categories
    catAll: 'ការអាប់ដេតទាំងអស់',
    catAcademic: 'ព័ត៌មានសិក្សា',
    catAthletics: 'កីឡា',
    catArts: 'សិល្បៈ និងវប្បធម៌',
    // Hero
    featuredBadge: 'សេចក្តីប្រកាសពិសេស',
    heroTitle: 'ការបើកមហាស្ថានវិទ្យាសាស្ត្រទំនើបនៅរដូវស្លឹកឈើជ្រុះ',
    heroExcerpt: 'កំណត់ឡើងវិញនូវការអប់រំ STEM ជាមួយមន្ទីរពិសោធន៍ពិសេស ៥ ផ្ទះ មជ្ឈមណ្ឌលរូបយន្ត និងស្ថាបត្យកម្មប្រើប្រាស់ថាមពលកកើតឡើងវិញ។',
    readFullStory: 'អានអត្ថបទពេញ',
    viewGallery: 'មើលវិចិត្រសាល',
    // Search
    searchPlaceholder: 'ស្វែងរកព័ត៌មាន និងព្រឹត្តិការណ៍...',
    // Card 1 – Sports
    card1Category: 'កីឡា',
    card1Date: '២៤ តុលា ២០២៤',
    card1Title: 'ប្រកាសពីផ្សារណាត់វគ្គផ្តាច់ព្រ័ត្របាល់បោះថ្នាក់ខេត្ត',
    card1Excerpt: 'ក្រុម Falcons បានឈានដល់ការប្រកួតជើងឯកបន្ទាប់ពីរដូវប្រកួតប្រវត្តិសាស្ត្រ។ ចូលរួមជាមួយយើងខ្ញុំនៅថ្ងៃសៅរ៍នេះនៅ Grand Arena។',
    card1Cta: 'ទិញសំបុត្រ',
    card1AltText: 'ព័ត៌មានកីឡា',
    // Card 2 – Gala
    card2Title: 'ពិធីជប់លៀងប្រចាំឆ្នាំ Founder\'s Day: សំបុត្រមានលក់ហើយ',
    card2Excerpt: 'ប្រារព្ធខួបអាយុ ៧៥ ឆ្នាំនៃភាពល្អឥតខ្ចោះខាងសិក្សា និងឥទ្ធិពលសហគម។ ពេលល្ងាចនៃភ្លេង អាហារ និងមរតក។',
    card2AlumniCount: 'ចូលរួមជាមួយអ្នកបញ្ចប់ការសិក្សាជាង ២០០+ នាក់',
    // Card 3 – Academic
    card3Category: 'សិក្សា',
    card3Date: '២២ តុលា ២០២៤',
    card3Title: 'អ្នកស្ម័គ្រចិត្តអាហារូបករណ៍ National Merit',
    card3Excerpt: 'យើងមានមោទនភាពប្រកាសថា និស្សិតថ្នាក់ ១២ ​នាក់នៃ BFHS ត្រូវបានជ្រើសរើសជាអ្នកស្ម័គ្រចិត្តក្នុងកម្មវិធីអាហារូបករណ៍ឆ្នាំ ២០២៤។',
    card3AltText: 'ការបញ្ចប់ការសិក្សារបស់សិស្ស',
    // Card 4 – Robotics
    card4Title: 'ក្រុមរូបយន្តឈ្នះរង្វាន់ "ឧត្តមភាពនវានុវត្តន៍"',
    card4Excerpt: 'ក្រុម "Circuit Breakers" របស់យើងបានទទួលរង្វាន់ទីមួយនៅ Regional STEM Expo សម្រាប់គម្រោងជំនាន់ស្វ័យប្រវត្តិបង្ហោះការស្ទង់មើលបរិស្ថាន។',
    card4NextMatch: 'ប្រកួតបន្ទាប់: ១២ វិច្ឆិកា',
    // Card 5 – Arts
    card5Category: 'សិល្បៈ និងវប្បធម៌',
    card5Date: '១៨ តុលា ២០២៤',
    card5Title: 'ការសម្តែងរដូវរងា: "The Glass Menagerie"',
    card5Excerpt: 'ការប្រឡងតួបើកហើយសម្រាប់ការសម្តែងរបស់ក្រុមថ្នាក់ទី ១២។ សូមលើកទឹកចិត្តសិស្សទាំងអស់ឱ្យចូលរួមក្នុងក្រុមហ្វឹកហ្វឺន និងតួ។',
    card5Cta: 'ព័ត៌មានការប្រឡង',
    card5AltText: 'ព័ត៌មានរោងល្ខោន',
    // Card 6 – Community
    card6Heading: 'ថ្ងៃសៅរ៍បម្រើសង្គម',
    card6Sub: 'ការប្រព្រឹត្តិចំពោះសហគម',
    card6Quote: '"ការស្វែងរកការចូលរួមជួយដល់ក្រុងដែលគាំទ្រការរីកចម្រើនរបស់យើង។ ចូលរួមជាមួយយើងនៅថ្ងៃសៅរ៍នេះក្នុងគម្រោងស្ដារឡើងវិញនូវសួនសាធារណៈ។"',
    card6Cta: 'ចុះឈ្មោះធ្វើជាអ្នកស្ម័គ្រចិត្ត',
    // Calendar header
    calendarTitle: 'ប្រតិទិនសិក្សា',
    calendarSubtitle: 'វិច្ឆិកា ២០២៤ - កាលបរិច្ឆេទសំខាន់ និងព្រឹត្តិការណ៍សាលា',
    calendarMonth: 'វិច្ឆិកា ២០២៤',
    // Day names
    daySun: 'អាទិត្យ',
    dayMon: 'ច័ន្ទ',
    dayTue: 'អង្គារ',
    dayWed: 'ពុធ',
    dayThu: 'ព្រហស្បតិ៍',
    dayFri: 'សុក្រ',
    daySat: 'សៅរ៍',
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

// Category ids are stable; only the displayed label is translated
const categoryIds = ['all', 'academic', 'athletics', 'arts'] as const
type CategoryId = typeof categoryIds[number]

const categoryLabels = computed<Record<CategoryId, string>>(() => ({
  all: t('catAll'),
  academic: t('catAcademic'),
  athletics: t('catAthletics'),
  arts: t('catArts'),
}))

const categories = computed(() =>
  categoryIds.map(id => ({ id, label: categoryLabels.value[id] }))
)

const activeCategory = ref<CategoryId>('all')

function setCategory(id: CategoryId) {
  activeCategory.value = id
}
</script>

<template>
  <div>
    <main class="pt-24">
      <!-- Featured Hero Section -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-md group">
          <img
            :alt="t('card1AltText')"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb56ot56JgA0e2_58F45IwSglxx6OcOaAWz9OsJ6BZavrqheoBml9WTOdw3xp9JKQtlYEHK6QRCLZPO183y6uOk01JRx5NgwKry4cYA_b1GLBSqjvT2WVlWshdSaYrBdpjs0xzEkQH0liFpDBZx93CU3p88tbqyFNm96RO-7_F-iqObci4ojDGYnYFVDbRLwf5KrtsrRjm9mCcTDQuxZ6HkRq_O3uYBgzd_RRRyjHvQFA83c2Iw4tnN7pB5BU_E2JFaUgptkK2UXg"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12">
            <span class="bg-secondary text-white px-4 py-1 rounded-full text-label-sm w-fit mb-4">{{ t('featuredBadge') }}</span>
            <h1 class="font-display-lg text-display-lg text-white max-w-3xl mb-4 leading-tight">{{ t('heroTitle') }}</h1>
            <p class="text-surface-variant text-body-lg max-w-2xl mb-8">{{ t('heroExcerpt') }}</p>
            <div class="flex gap-4">
              <button class="bg-white text-primary px-8 py-3 rounded-xl font-label-md hover:bg-surface-container-high transition-colors active:scale-95">{{ t('readFullStory') }}</button>
              <button class="glass-effect text-white px-8 py-3 rounded-xl font-label-md hover:bg-white/20 transition-colors active:scale-95">{{ t('viewGallery') }}</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Search & Filter Bar -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
          <div class="flex gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              :class="activeCategory === cat.id
                ? 'bg-primary text-white px-4 py-2 rounded-lg text-label-md'
                : 'text-on-surface-variant hover:bg-surface-container-high px-4 py-2 rounded-lg text-label-md transition-colors'"
              @click="setCategory(cat.id)"
            >{{ cat.label }}</button>
          </div>
          <div class="relative w-full md:w-80">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input
              class="w-full pl-10 pr-4 py-2 bg-white border-none rounded-xl focus:ring-2 focus:ring-secondary text-body-sm shadow-sm"
              :placeholder="t('searchPlaceholder')"
              type="text"
            >
          </div>
        </div>
      </section>

      <!-- News Masonry Grid -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="masonry-grid">

          <!-- Item 1: Sports -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <img
              :alt="t('card1AltText')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7XG3JPcUSmcmc2bFi7FegvJxJCYQYapU7_PX19qrIRfSzyphrU57mYJ8kJ8M5Tdnhsqqo2XQ36mvLLFI7WTYI9HqI0n8eldfmnyUAfJ5Z48z-T22U0OqB_biVgeELD0XI-sSluy35__W6VJhtqkigT-_mhikVx4azYWUQ4qmK7hPvSRYf8yFhfaAUeX1pAZkNPTW9-lwuoUDYl2e-M_V3AFcSnKWg_zjw3TmQLGX_Opvm66TXgMKsXnaTNFNqqnUmie-mCauL4k"
            >
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">{{ t('card1Category') }}</span>
                <span class="text-on-surface-variant text-label-sm">{{ t('card1Date') }}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">{{ t('card1Title') }}</h3>
              <p class="text-on-surface-variant text-body-sm mb-4">{{ t('card1Excerpt') }}</p>
              <a class="flex items-center text-primary font-label-md gap-2 hover:translate-x-1 transition-transform" href="#">{{ t('card1Cta') }} <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>

          <!-- Item 2: Celebration (Calendar Highlight) -->
          <div class="masonry-item bg-primary text-white rounded-[2rem] p-8 shadow-md">
            <span class="material-symbols-outlined text-4xl mb-6">celebration</span>
            <h3 class="font-headline-md text-headline-md mb-4 leading-snug">{{ t('card2Title') }}</h3>
            <p class="text-surface-variant text-body-md mb-8">{{ t('card2Excerpt') }}</p>
            <div class="flex items-center gap-4">
              <div class="flex -space-x-3">
                <img
                  class="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4eW_n5tVv-pg0BtOAL4oZ0R29NFSKO1ky8C3w4XMl6HwGG2KIa2wv8663xUUsByFLCsR2nr4mwV4idKvydvl3Dbm12mdKUU0ThW45pnKUhlTjKk-Y5n0xby88_qhnEGrekDI_o-TN_CxKWk7Fa0cu2xNKV94hi0c7Wl6Xv1IybT-IIbMVlahkJR5PtJrvDyNgy0GiiKYYl67R2wTp832sVMwTVfkbti6MOiIKT2yUurtUHfYg-vAkB_TbBtCZO2-ZmSgDMPmiKhg"
                  alt=""
                >
                <img
                  class="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAneXRKO9V60Y1fx3gmxD-InhBqFtpRyEsBv5O0MhCxKsig0agJY1qquRfxUYv7f_31TLGucOmh-SSrpxd58oG1hEGW4aKG5Bb5Wd5jt_7dUz1V5dudTD95ZRuysaEzmnaDmHf_zTxbO7C6hDmnt8sM3T3nzjIyj_xz26IBepEbVPb14LoTfBKvsado6bRtMJteSbLexd7Z2zO5BrPPvoFwOy5sz3zQQTyBxdkdpyvuif15OFmVTR0vjqDXbB4ZpNCaNAH5I4LDWTY"
                  alt=""
                >
                <div class="w-10 h-10 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-label-sm">+40</div>
              </div>
              <span class="text-label-sm">{{ t('card2AlumniCount') }}</span>
            </div>
          </div>

          <!-- Item 3: Academic -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">{{ t('card3Category') }}</span>
                <span class="text-on-surface-variant text-label-sm">{{ t('card3Date') }}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">{{ t('card3Title') }}</h3>
              <p class="text-on-surface-variant text-body-sm">{{ t('card3Excerpt') }}</p>
            </div>
            <img
              :alt="t('card3AltText')"
              class="w-full h-56 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgo3ljRNHXw8jdkqWTeg_V6OsInv5vr-LM0Kqw0JyxHeQfSpmpDSGugQDMfAnz2h9VJb5s1uJ0YX9AnzlWFJIMhxDhnlCJB8uFcyDQQJbpb2ZrOqDcrvMlWOc0A75Zbx1savE-MVlyNzY1hy0zLpW_2ml27A0gVYFAmld95BgC-3hic_ipW_e0_KCo8jisdX_fsoOq-lZF8cGg3SLXRNbtPwF9T2CVYiuO2CiW-zlub_qx0Uoeh2q0j7FLxC2vPNs6lAUAJlX1yO0"
            >
          </div>

          <!-- Item 4: Competition -->
          <div class="masonry-item bg-surface-container-high rounded-[2rem] p-6 border border-white/50 group">
            <div class="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span class="material-symbols-outlined text-primary">robot</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm mb-2">{{ t('card4Title') }}</h3>
            <p class="text-on-surface-variant text-body-sm mb-6">{{ t('card4Excerpt') }}</p>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-outline">event</span>
              <span class="text-label-sm text-on-surface-variant">{{ t('card4NextMatch') }}</span>
            </div>
          </div>

          <!-- Item 5: Arts -->
          <div class="masonry-item bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10 group">
            <img
              :alt="t('card5AltText')"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZl1PsJ0Qzg5crZH8ELb7Rrse_31OD2-WhigKCtXnGjRh6-Tr6TnB5w0Xl2f4grL3sMIovhAWHlogJlyiviPvhm_O4ifeoFQ8eUPV6AfWOIgXqSv5xPcZiITMSaTEW6ZnhHejXQvV7t_O4yF2OdylluuSC-OFCmOh5v0yAvdzHv3A1uY7Y26O83A5qerS8Q9LO4Q3izlMxvDfbbRaQCAPdgUJ0d63Z3UB5divfJoNKrY9YhU8FC4IVAsZMfdnlnhXYt1qsSaPrmO8"
            >
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <span class="text-secondary font-label-md">{{ t('card5Category') }}</span>
                <span class="text-on-surface-variant text-label-sm">{{ t('card5Date') }}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">{{ t('card5Title') }}</h3>
              <p class="text-on-surface-variant text-body-sm mb-4">{{ t('card5Excerpt') }}</p>
              <button class="text-primary font-label-md border-b border-primary/20 pb-0.5 active:scale-95">{{ t('card5Cta') }}</button>
            </div>
          </div>

          <!-- Item 6: Community -->
          <div class="masonry-item bg-white rounded-[2rem] p-6 border border-outline-variant/10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span class="material-symbols-outlined text-secondary">volunteer_activism</span>
              </div>
              <div>
                <h4 class="font-label-md text-primary">{{ t('card6Heading') }}</h4>
                <p class="text-label-sm text-on-surface-variant">{{ t('card6Sub') }}</p>
              </div>
            </div>
            <p class="text-body-sm text-on-surface-variant mb-6 italic">{{ t('card6Quote') }}</p>
            <button class="w-full py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-label-md hover:bg-surface-container-high transition-colors active:scale-95">{{ t('card6Cta') }}</button>
          </div>

        </div>
      </section>

      <!-- Monthly Calendar View -->
      <section class="px-margin-desktop mb-stack-lg max-w-container-max mx-auto">
        <div class="bg-white rounded-[2rem] shadow-md overflow-hidden border border-outline-variant/10">
          <div class="bg-primary p-8 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 class="font-display-lg text-headline-md text-white">{{ t('calendarTitle') }}</h2>
              <p class="text-surface-variant text-body-sm">{{ t('calendarSubtitle') }}</p>
            </div>
            <div class="flex gap-4 mt-6 md:mt-0">
              <button class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors active:scale-95">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <span class="text-white font-label-md self-center">{{ t('calendarMonth') }}</span>
              <button class="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors active:scale-95">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="p-4 md:p-8">
            <div class="grid grid-cols-7 gap-px bg-outline-variant/20 border border-outline-variant/20 rounded-xl overflow-hidden">
              <!-- Header -->
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('daySun') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('dayMon') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('dayTue') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('dayWed') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('dayThu') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('dayFri') }}</div>
              <div class="bg-surface-container-low p-4 text-center text-label-sm text-on-surface-variant">{{ t('daySat') }}</div>
              <!-- Days (October overflow) -->
              <div class="bg-white h-32 p-3 opacity-30">27</div>
              <div class="bg-white h-32 p-3 opacity-30">28</div>
              <div class="bg-white h-32 p-3 opacity-30">29</div>
              <div class="bg-white h-32 p-3 opacity-30">30</div>
              <div class="bg-white h-32 p-3 opacity-30">31</div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">1</span>
                <div class="mt-2 text-[10px] bg-secondary-container/30 text-secondary p-1 rounded">{{ t('eventPepRally') }}</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">2</span>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">3</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">4</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">5</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">{{ t('eventMidterm') }}</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">6</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">{{ t('eventMidterm') }}</div>
              </div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">7</span>
                <div class="mt-2 text-[10px] bg-error-container text-on-error-container p-1 rounded">{{ t('eventMidterm') }}</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">8</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">9</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">10</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">11</span>
                <div class="mt-2 text-[10px] bg-primary text-white p-1 rounded">{{ t('eventVetsDay') }}</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">12</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">13</span></div>
              <div class="bg-white h-32 p-3">
                <span class="text-label-md">14</span>
                <div class="mt-2 text-[10px] bg-secondary text-white p-1 rounded">{{ t('eventFallConcert') }}</div>
              </div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">15</span></div>
              <div class="bg-white h-32 p-3"><span class="text-label-md">16</span></div>
            </div>
          </div>
          <div class="px-8 pb-8 flex flex-wrap gap-4">
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-secondary-container"></span> {{ t('legendActivity') }}</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-error-container"></span> {{ t('legendDeadline') }}</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-primary"></span> {{ t('legendHoliday') }}</div>
            <div class="flex items-center gap-2 text-label-sm"><span class="w-3 h-3 rounded-full bg-secondary"></span> {{ t('legendSpecial') }}</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.masonry-grid {
  column-count: 1;
  column-gap: 24px;
}
@media (min-width: 768px) {
  .masonry-grid {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 24px;
}
</style>
