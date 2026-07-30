<script setup lang="ts">
useHead({ title: 'Home' })

const { t } = useI18n({
  en: {
    eyebrow: 'Established 1992 · Grades 9–12',
    heroTitle1: 'Empowering minds,', heroTitle2: 'shaping futures.',
    heroSub: 'Discover a community where innovation meets tradition, and every student is equipped with the tools to lead in a changing world.',
    enroll: 'Begin your application', explore: 'Explore programs',
    students: 'Students', teachers: 'Teachers', classrooms: 'Classrooms', gradRate: 'Graduation Rate',
    creed: 'Our promise',
    creedBody: 'We teach students to think rigorously, act with integrity, and carry both into the world. Small classes, expert faculty, and a curriculum that refuses to choose between depth and breadth.',
    excellenceTitle: 'Academic excellence', excellenceSub: "Programs tailored for tomorrow's leaders.",
    science: 'Science & STEM', arts: 'Creative Arts', humanities: 'Humanities',
    scienceBody: 'Cutting-edge laboratories and robotics programs preparing students for the technological frontier.',
    artsBody: 'From classical painting to digital media, nurture your creative voice in our state-of-the-art studios.',
    humanitiesBody: 'Exploring literature, history, and social sciences to develop critical thinking and global awareness.',
    exploreCurriculum: 'Explore curriculum',
    upcomingEvents: 'Upcoming events', allEvents: 'View the full calendar',
    voices: 'Voices of BFHS',
    event1: 'Annual Science Fair', event1d: 'Main Campus Hall · 09:00 AM',
    event2: 'Parent-Teacher Conference', event2d: 'Online / Zoom · 04:00 PM',
    event3: 'Winter Sports Gala', event3d: 'Athletic Complex · 02:00 PM',
    quote: 'The interdisciplinary approach at Bright Future allowed me to merge my passion for environmental science with community leadership. I feel truly prepared for university.',
    quoteName: 'Sarah Jenkins', quoteClass: 'Class of 2024',
    getInTouch: 'Get in touch',
    contactSub: 'Have questions about admissions or our programs? Our team is here to help you navigate your journey.',
    address: '123 Academic Way, Education City, ED 56789',
    fullName: 'Full name', email: 'Email address', message: 'Message', send: 'Send message',
    sending: 'Sending…', sent: 'Thanks! We will be in touch shortly.', sendError: 'Something went wrong. Please try again.',
    visit: 'Visit campus', visitSub: 'Tours run every Tuesday and Thursday at 10:00.',
  },
  km: {
    eyebrow: 'បង្កើតឆ្នាំ ១៩៩២ · ថ្នាក់ទី ៩–១២',
    heroTitle1: 'ជំរុញគំនិត,', heroTitle2: 'កសាងអនាគត។',
    heroSub: 'ស្វែងរកសហគមន៍ដែលនវានុវត្តន៍ជួបនឹងប្រពៃណី ហើយសិស្សគ្រប់រូបត្រូវបានបំពាក់នូវឧបករណ៍ដើម្បីដឹកនាំក្នុងពិភពលោកដែលកំពុងផ្លាស់ប្តូរ។',
    enroll: 'ចាប់ផ្ដើមដាក់ពាក្យ', explore: 'ស្វែងយល់កម្មវិធី',
    students: 'សិស្ស', teachers: 'គ្រូបង្រៀន', classrooms: 'បន្ទប់រៀន', gradRate: 'អត្រាបញ្ចប់ការសិក្សា',
    creed: 'ការសន្យារបស់យើង',
    creedBody: 'យើងបង្រៀនសិស្សឱ្យគិតយ៉ាងម៉ត់ចត់ ប្រព្រឹត្តដោយសុចរិតភាព និងនាំយកទាំងពីរនេះទៅកាន់ពិភពលោក។ ថ្នាក់តូច គ្រូជំនាញ និងកម្មវិធីសិក្សាដែលមិនសម្រុះសម្រួលរវាងជម្រៅ និងទំហំ។',
    excellenceTitle: 'ឧត្តមភាពសិក្សា', excellenceSub: 'កម្មវិធីរៀបចំសម្រាប់អ្នកដឹកនាំនាថ្ងៃអនាគត។',
    science: 'វិទ្យាសាស្ត្រ និង STEM', arts: 'សិល្បៈច្នៃប្រឌិត', humanities: 'មនុស្សសាស្ត្រ',
    scienceBody: 'មន្ទីរពិសោធន៍ទំនើប និងកម្មវិធីមនុស្សយន្ត រៀបចំសិស្សសម្រាប់ព្រំដែនបច្ចេកវិទ្យា។',
    artsBody: 'ចាប់ពីការគូរបុរាណរហូតដល់មេឌៀឌីជីថល បណ្តុះសំឡេងច្នៃប្រឌិតរបស់អ្នកនៅក្នុងស្ទូឌីយោទំនើប។',
    humanitiesBody: 'ស្វែងយល់អក្សរសាស្ត្រ ប្រវត្តិសាស្ត្រ និងសង្គមសាស្ត្រ ដើម្បីអភិវឌ្ឍការគិតបែបវិចារណញាណ និងការយល់ដឹងសកល។',
    exploreCurriculum: 'ស្វែងយល់កម្មវិធីសិក្សា',
    upcomingEvents: 'ព្រឹត្តិការណ៍ខាងមុខ', allEvents: 'មើលប្រតិទិនពេញ',
    voices: 'សំឡេងនៃ BFHS',
    event1: 'ពិព័រណ៍វិទ្យាសាស្ត្រប្រចាំឆ្នាំ', event1d: 'សាលធំ · ៩:០០ ព្រឹក',
    event2: 'ការប្រជុំមាតាបិតា-គ្រូបង្រៀន', event2d: 'អនឡាញ / Zoom · ៤:០០ ល្ងាច',
    event3: 'ពិធីបុណ្យកីឡារដូវរងា', event3d: 'សង្កែកីឡា · ២:០០ រសៀល',
    quote: 'វិធីសាស្ត្រអន្តរវិញ្ញាសានៅ Bright Future បានអនុញ្ញាតឱ្យខ្ញុំបញ្ចូលចំណង់ចំណូលចិត្តផ្នែកវិទ្យាសាស្ត្របរិស្ថានជាមួយភាពជាអ្នកដឹកនាំសហគមន៍។ ខ្ញុំមានអារម្មណ៍ត្រៀមខ្លួនយ៉ាងពិតប្រាកដសម្រាប់សកលវិទ្យាល័យ។',
    quoteName: 'សារ៉ា ជេនគីន', quoteClass: 'ជំនាន់ឆ្នាំ២០២៤',
    getInTouch: 'ទាក់ទងមកយើង',
    contactSub: 'មានសំណួរអំពីការចូលរៀន ឬកម្មវិធីរបស់យើងមែនទេ? ក្រុមការងាររបស់យើងនៅទីនេះដើម្បីជួយអ្នក។',
    address: '១២៣ ផ្លូវ Academic, ទីក្រុងអប់រំ, ED 56789',
    fullName: 'ឈ្មោះពេញ', email: 'អាសយដ្ឋានអ៊ីមែល', message: 'សារ', send: 'ផ្ញើសារ',
    sending: 'កំពុងផ្ញើ…', sent: 'អរគុណ! យើងនឹងទាក់ទងអ្នកក្នុងពេលឆាប់ៗ។', sendError: 'មានបញ្ហាបានកើតឡើង។ សូមព្យាយាមម្ដងទៀត។',
    visit: 'ទស្សនាបរិវេណសាលា', visitSub: 'ដំណើរទស្សនាមានរៀងរាល់ថ្ងៃអង្គារ និងព្រហស្បតិ៍ ម៉ោង ១០:០០។',
  },
})

interface Stat { key?: string; icon: string; value: string; label: string }
const staticStats = computed<Stat[]>(() => [
  { icon: 'groups', value: '2,500+', label: t('students') },
  { icon: 'school', value: '150+', label: t('teachers') },
  { icon: 'meeting_room', value: '50+', label: t('classrooms') },
  { icon: 'verified', value: '98%', label: t('gradRate') },
])
// Live from GET /home/stats when the backend is up; bundled content otherwise.
const { data: apiStats } = useContent<Stat[] | null>('home-stats', '/home/stats', null)
const stats = computed<Stat[]>(() => (apiStats.value?.length ? apiStats.value : staticStats.value))

const programs = computed(() => [
  {
    title: t('science'), icon: 'biotech', body: t('scienceBody'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmh8RkA3A52KjmSXzv8pYxmsrFPMRlmOor0jG_APUYAGA1jAZJskpuRSWUjIHJflNPniVXNTslydg-ACiTVRklN9og8mUVuNMkh2blvY-uqthCy17MRIIPoWjbbnp0Ra-mrez4NJ-2Ep_DnkzMt7XQ9X9ZYh3YLEc4LAyNmZlw2nqJ5MzcR77h5IMhRfPYz7Tp7GseiK7jmTjCq8ous9R-4VByfAvRhF_jdBahLt-jWkReE1QgBK8M3MU0QW2jZjNqC4OSfcQHld8',
  },
  {
    title: t('arts'), icon: 'palette', body: t('artsBody'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhgLXLAfcClVA-jsh7fY2LTKxoM1rmPFVxM5ZbMVN5htbjMF90QoS6_pFdclIe6qpGVR2ogfKXogLcWQjSaLYNkq3G9kOgL_X23azHSNQX-KOlGMc60IU76ZAkFEvEKtTGSRZG3Jj4IjjRyei9g0zN66EL8Rfd8Iiq3qvHBJK1ONjq2EAbVvbu18TecWv7SUnlmwxkkH_NVFzqrfzFDz5vIYNwA5ejZQijQoN1EkjFLTzNVAPms7tnJDCMMzT7XJfyEZEzuMhTlA',
  },
  {
    title: t('humanities'), icon: 'menu_book', body: t('humanitiesBody'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4cd2ezSk6lhvHm4rXjleVago5hw9_NZ-qR36bKHsZQphY1vULTza_5mRZQCL3ONJcM-cW3iqjhq1tpoUOJnIfxV3OJgiLKvlnsVbSmTmWnczULnGl1HaeeQli6pAvVLfGD5DZecsUFC1i1A0I6DOC3Byuiykf8Y7XQ7YKqaQSYUA3vPS_jNLEVrtlc36R9Tg-f1Y2mVqHOBEPq8IqkVq4szCbium4_sCm9slmm-tQZVgRncM7AQIpLQAvbYehX0Io0BBhh9uMzyM',
  },
])

const events = computed(() => [
  { month: 'Oct', day: '15', title: t('event1'), detail: t('event1d') },
  { month: 'Oct', day: '22', title: t('event2'), detail: t('event2d') },
  { month: 'Nov', day: '05', title: t('event3'), detail: t('event3d') },
])

// Contact form → POST /contact
const api = useApi()
const contact = reactive({ fullName: '', email: '', message: '' })
const contactState = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submitContact() {
  contactState.value = 'sending'
  try {
    await api('/contact', { method: 'POST', body: { ...contact } })
    contactState.value = 'sent'
    contact.fullName = contact.email = contact.message = ''
  } catch {
    contactState.value = 'error'
  }
}

// Restrained parallax: the image is oversized so the transform never exposes an edge.
const heroImg = ref<HTMLImageElement | null>(null)
let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    if (heroImg.value) heroImg.value.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`
    ticking = false
  })
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div>
    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <section class="relative isolate overflow-hidden bg-brand">
      <div class="absolute inset-0 -z-10">
        <img
          ref="heroImg"
          alt=""
          class="h-[115%] w-full object-cover will-change-transform"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDPLpM5ZeGtka9_3slegAbQlTxCL8JeGynaeM_L3v4_4CitTYwBI1j-zVD7plhiOiDLIs8u3u5pJCb2_AFM3Q-XDn8cVBJuZWedx8xIy6wLozcqZSQ6UYh6XMu-IdsLD3LaU6LetMXaNi-WuHoWiEJq26-iNzrOVsv-upMo2mL5LGDBOlAxE7k4XrKCu51MF1SJF4DSbYVVxep0ECw2opBbMa5V-Jfi0qUHxCeErqBGgk13cR7IJ_1sSpbQKuuwdcPX7zDmNVn2g"
        >
        <div class="scrim-l absolute inset-0" />
      </div>

      <UiContainer>
        <div class="flex min-h-[560px] max-w-2xl flex-col justify-center py-24 lg:min-h-[680px] lg:py-32">
          <p class="animate-fade-up text-eyebrow uppercase text-on-dark/70">{{ t('eyebrow') }}</p>
          <h1 class="mt-5 animate-fade-up font-display text-display-1 text-balance text-on-dark [animation-delay:60ms]">
            {{ t('heroTitle1') }}<br>
            <span class="text-accent">{{ t('heroTitle2') }}</span>
          </h1>
          <p class="mt-6 max-w-xl animate-fade-up text-lead text-pretty text-on-dark-muted [animation-delay:120ms]">
            {{ t('heroSub') }}
          </p>
          <div class="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row [animation-delay:180ms]">
            <UiButton to="/admissions" variant="inverse" size="lg" icon-trailing="arrow_forward">{{ t('enroll') }}</UiButton>
            <UiButton
              to="/academics" size="lg"
              class="border border-on-dark/25 text-on-dark hover:bg-on-dark/10"
              variant="ghost"
            >{{ t('explore') }}</UiButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ── Stat band: hairline-divided, no boxes ────────────────────────── -->
    <section class="border-b border-line bg-surface">
      <UiContainer>
        <dl class="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="flex flex-col gap-1 border-line px-2 py-8 lg:px-8"
            :class="[i < 2 && 'border-b lg:border-b-0', i % 2 === 1 && 'border-l lg:border-l-0']"
          >
            <UiIcon :name="stat.icon" :size="20" class="mb-2 text-accent" />
            <dt class="order-2 text-label text-fg-muted">{{ stat.label }}</dt>
            <dd class="font-display text-metric tabular-nums text-fg">{{ stat.value }}</dd>
          </div>
        </dl>
      </UiContainer>
    </section>

    <!-- ── Positioning statement ────────────────────────────────────────── -->
    <UiSection compact>
      <div class="grid gap-8 lg:grid-cols-12">
        <p class="text-eyebrow uppercase text-accent lg:col-span-3">{{ t('creed') }}</p>
        <p class="font-display text-title-1 text-balance text-fg lg:col-span-9">{{ t('creedBody') }}</p>
      </div>
    </UiSection>

    <!-- ── Programs ─────────────────────────────────────────────────────── -->
    <UiSection tone="muted">
      <UiSectionHead
        :eyebrow="t('excellenceTitle')"
        :title="t('excellenceSub')"
        size="display"
      />

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="program in programs"
          :key="program.title"
          class="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
        >
          <div class="aspect-[16/10] overflow-hidden bg-surface-3">
            <img
              :alt="program.title" :src="program.img" loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            >
          </div>
          <div class="flex flex-1 flex-col p-6">
            <div class="mb-3 flex items-center gap-2.5">
              <UiIcon :name="program.icon" :size="18" class="text-accent" />
              <h3 class="font-display text-title-3 text-fg">{{ program.title }}</h3>
            </div>
            <p class="flex-1 text-copy-sm text-fg-muted">{{ program.body }}</p>
            <NuxtLink
              to="/academics"
              class="mt-6 inline-flex items-center gap-1.5 text-label font-medium text-fg transition-colors group-hover:text-accent"
            >
              {{ t('exploreCurriculum') }}
              <UiIcon name="arrow_forward" :size="16" class="transition-transform duration-200 group-hover:translate-x-0.5" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </UiSection>

    <!-- ── Events + testimonial ─────────────────────────────────────────── -->
    <UiSection>
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <div class="flex items-end justify-between gap-4">
            <h2 class="font-display text-title-1 text-fg">{{ t('upcomingEvents') }}</h2>
            <NuxtLink to="/news" class="shrink-0 text-label text-fg-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
              {{ t('allEvents') }}
            </NuxtLink>
          </div>

          <ul class="mt-6 divide-y divide-line border-y border-line">
            <li v-for="event in events" :key="event.title">
              <NuxtLink to="/news" class="group flex items-center gap-5 py-5 transition-colors">
                <time class="flex w-14 shrink-0 flex-col items-center rounded-md border border-line bg-surface py-2 leading-none">
                  <span class="text-eyebrow uppercase text-accent">{{ event.month }}</span>
                  <span class="mt-1 font-display text-title-3 tabular-nums text-fg">{{ event.day }}</span>
                </time>
                <div class="min-w-0 flex-1">
                  <h3 class="text-copy font-medium text-fg transition-colors group-hover:text-accent">{{ event.title }}</h3>
                  <p class="mt-0.5 text-copy-sm text-fg-muted">{{ event.detail }}</p>
                </div>
                <UiIcon
                  name="arrow_outward" :size="18"
                  class="text-fg-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-6">
          <h2 class="font-display text-title-1 text-fg">{{ t('voices') }}</h2>
          <figure class="mt-6 rounded-xl border border-line bg-surface-2 p-8 sm:p-10">
            <UiIcon name="format_quote" :size="32" class="text-accent" :filled="true" />
            <blockquote class="mt-4 font-display text-title-3 leading-relaxed text-pretty text-fg">
              {{ t('quote') }}
            </blockquote>
            <figcaption class="mt-8 flex items-center gap-3 border-t border-line pt-6">
              <UiAvatar
                :name="t('quoteName')"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNs_STsgMUjnalkzypBBilq9Aw9_Uue_FoUzRmaEfwIXldvJ0W4sAWnabSFQEA5-jL-xK7P_LwC74C1w8pshPCGHU46K9GhIdpCh7PCyaSQokQg1Jqlt6wuaj7HRydgGQ5oHrdj5MeR8W3u0O-3BqCf3Vu4reCb0ldfVXXjcomzTd4d9_kjFiLYznR5jq8yyhVOPWGRHSaoyCJwZMefHbC_LemWO5vuNk-k7Sq1cokU3AuMHeKDpRdTa34ZoA-x74-1AgXUuguD40"
                :size="44"
              />
              <div>
                <p class="text-label font-medium text-fg">{{ t('quoteName') }}</p>
                <p class="text-label-sm text-fg-muted">{{ t('quoteClass') }}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </UiSection>

    <!-- ── Contact ──────────────────────────────────────────────────────── -->
    <UiSection tone="brand" id="contact">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <UiSectionHead
            :eyebrow="t('visit')"
            :title="t('getInTouch')"
            :lede="t('contactSub')"
            tone="inverse"
            size="display"
          />

          <dl class="mt-10 flex flex-col gap-4 border-t border-on-dark/15 pt-8">
            <div class="flex items-start gap-3">
              <UiIcon name="location_on" :size="18" class="mt-0.5 text-accent" />
              <dd class="text-copy-sm text-on-dark-muted">{{ t('address') }}</dd>
            </div>
            <div class="flex items-start gap-3">
              <UiIcon name="call" :size="18" class="mt-0.5 text-accent" />
              <dd class="text-copy-sm text-on-dark-muted">+1 (555) 000-1234</dd>
            </div>
            <div class="flex items-start gap-3">
              <UiIcon name="mail" :size="18" class="mt-0.5 text-accent" />
              <dd class="text-copy-sm text-on-dark-muted">admissions@bfhs.edu</dd>
            </div>
            <div class="flex items-start gap-3">
              <UiIcon name="tour" :size="18" class="mt-0.5 text-accent" />
              <dd class="text-copy-sm text-on-dark-muted">{{ t('visitSub') }}</dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-7">
          <form class="rounded-xl border border-on-dark/15 bg-on-dark/[0.04] p-6 sm:p-8" @submit.prevent="submitContact">
            <div class="grid gap-5 sm:grid-cols-2">
              <UiField v-model="contact.fullName" :label="t('fullName')" tone="inverse" required autocomplete="name" />
              <UiField v-model="contact.email" :label="t('email')" type="email" tone="inverse" required autocomplete="email" />
            </div>
            <div class="mt-5">
              <UiField v-model="contact.message" :label="t('message')" as="textarea" :rows="5" tone="inverse" required />
            </div>

            <p v-if="contactState === 'sent'" class="mt-5 flex items-center gap-2 rounded-md bg-success/15 px-3 py-2.5 text-copy-sm text-on-dark">
              <UiIcon name="check_circle" :size="18" />{{ t('sent') }}
            </p>
            <p v-else-if="contactState === 'error'" class="mt-5 flex items-center gap-2 rounded-md bg-danger/20 px-3 py-2.5 text-copy-sm text-on-dark">
              <UiIcon name="error" :size="18" />{{ t('sendError') }}
            </p>

            <UiButton
              type="submit" variant="inverse" size="lg" class="mt-6"
              :loading="contactState === 'sending'"
            >
              {{ contactState === 'sending' ? t('sending') : t('send') }}
            </UiButton>
          </form>
        </div>
      </div>
    </UiSection>
  </div>
</template>
