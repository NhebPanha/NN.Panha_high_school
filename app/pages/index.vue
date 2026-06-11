<script setup lang="ts">
useHead({ title: 'Home' })

const { t } = useI18n({
  en: {
    heroTitle1: 'Empowering Minds,', heroTitle2: 'Shaping Futures',
    heroSub: 'Discover a community where innovation meets tradition, and every student is equipped with the tools to lead in a changing world.',
    enroll: 'Enroll Now', explore: 'Explore Programs',
    students: 'Students', teachers: 'Teachers', classrooms: 'Classrooms', gradRate: 'Graduation Rate',
    excellenceTitle: 'Academic Excellence', excellenceSub: "Programs tailored for tomorrow's leaders.",
    science: 'Science & STEM', arts: 'Creative Arts', humanities: 'Humanities',
    scienceBody: 'Cutting-edge laboratories and robotics programs preparing students for the technological frontier.',
    artsBody: 'From classical painting to digital media, nurture your creative voice in our state-of-the-art studios.',
    humanitiesBody: 'Exploring literature, history, and social sciences to develop critical thinking and global awareness.',
    exploreCurriculum: 'Explore Curriculum',
    upcomingEvents: 'Upcoming Events', voices: 'Voices of BFHS',
    event1: 'Annual Science Fair', event1d: 'Main Campus Hall • 09:00 AM',
    event2: 'Parent-Teacher Conference', event2d: 'Online / Zoom • 04:00 PM',
    event3: 'Winter Sports Gala', event3d: 'Athletic Complex • 02:00 PM',
    quote: '"The interdisciplinary approach at Bright Future allowed me to merge my passion for environmental science with community leadership. I feel truly prepared for university."',
    quoteName: 'Sarah Jenkins', quoteClass: 'Class of 2024',
    getInTouch: 'Get in Touch',
    contactSub: 'Have questions about admissions or our programs? Our team is here to help you navigate your journey.',
    address: '123 Academic Way, Education City, ED 56789',
    fullName: 'Full Name', email: 'Email Address', message: 'Message', send: 'Send Message',
    mainCampus: 'Main Campus', expandMap: 'Click to expand map',
  },
  km: {
    heroTitle1: 'ជំរុញគំនិត,', heroTitle2: 'កសាងអនាគត',
    heroSub: 'ស្វែងរកសហគមន៍ដែលនវានុវត្តន៍ជួបនឹងប្រពៃណី ហើយសិស្សគ្រប់រូបត្រូវបានបំពាក់នូវឧបករណ៍ដើម្បីដឹកនាំក្នុងពិភពលោកដែលកំពុងផ្លាស់ប្តូរ។',
    enroll: 'ចុះឈ្មោះឥឡូវនេះ', explore: 'ស្វែងយល់កម្មវិធី',
    students: 'សិស្ស', teachers: 'គ្រូបង្រៀន', classrooms: 'បន្ទប់រៀន', gradRate: 'អត្រាបញ្ចប់ការសិក្សា',
    excellenceTitle: 'ឧត្តមភាពសិក្សា', excellenceSub: 'កម្មវិធីរៀបចំសម្រាប់អ្នកដឹកនាំនាថ្ងៃអនាគត។',
    science: 'វិទ្យាសាស្ត្រ និង STEM', arts: 'សិល្បៈច្នៃប្រឌិត', humanities: 'មនុស្សសាស្ត្រ',
    scienceBody: 'មន្ទីរពិសោធន៍ទំនើប និងកម្មវិធីមនុស្សយន្ត រៀបចំសិស្សសម្រាប់ព្រំដែនបច្ចេកវិទ្យា។',
    artsBody: 'ចាប់ពីការគូរបុរាណរហូតដល់មេឌៀឌីជីថល បណ្តុះសំឡេងច្នៃប្រឌិតរបស់អ្នកនៅក្នុងស្ទូឌីយោទំនើប។',
    humanitiesBody: 'ស្វែងយល់អក្សរសាស្ត្រ ប្រវត្តិសាស្ត្រ និងសង្គមសាស្ត្រ ដើម្បីអភិវឌ្ឍការគិតបែបវិចារណញាណ និងការយល់ដឹងសកល។',
    exploreCurriculum: 'ស្វែងយល់កម្មវិធីសិក្សា',
    upcomingEvents: 'ព្រឹត្តិការណ៍ខាងមុខ', voices: 'សំឡេងនៃ BFHS',
    event1: 'ពិព័រណ៍វិទ្យាសាស្ត្រប្រចាំឆ្នាំ', event1d: 'សាលធំ • ៩:០០ ព្រឹក',
    event2: 'ការប្រជុំមាតាបិតា-គ្រូបង្រៀន', event2d: 'អនឡាញ / Zoom • ៤:០០ ល្ងាច',
    event3: 'ពិធីបុណ្យកីឡារដូវរងា', event3d: 'សង្កែកីឡា • ២:០០ រសៀល',
    quote: '"វិធីសាស្ត្រអន្តរវិញ្ញាសានៅ Bright Future បានអនុញ្ញាតឱ្យខ្ញុំបញ្ចូលចំណង់ចំណូលចិត្តផ្នែកវិទ្យាសាស្ត្របរិស្ថានជាមួយភាពជាអ្នកដឹកនាំសហគមន៍។ ខ្ញុំមានអារម្មណ៍ត្រៀមខ្លួនយ៉ាងពិតប្រាកដសម្រាប់សកលវិទ្យាល័យ។"',
    quoteName: 'សារ៉ា ជេនគីន', quoteClass: 'ជំនាន់ឆ្នាំ២០២៤',
    getInTouch: 'ទាក់ទងមកយើង',
    contactSub: 'មានសំណួរអំពីការចូលរៀន ឬកម្មវិធីរបស់យើងមែនទេ? ក្រុមការងាររបស់យើងនៅទីនេះដើម្បីជួយអ្នក។',
    address: '១២៣ ផ្លូវ Academic, ទីក្រុងអប់រំ, ED 56789',
    fullName: 'ឈ្មោះពេញ', email: 'អាសយដ្ឋានអ៊ីមែល', message: 'សារ', send: 'ផ្ញើសារ',
    mainCampus: 'សាខាមេ', expandMap: 'ចុចដើម្បីពង្រីកផែនទី',
  },
})

const stats = computed(() => [
  { icon: 'groups', value: '2,500+', label: t('students') },
  { icon: 'school', value: '150+', label: t('teachers') },
  { icon: 'meeting_room', value: '50+', label: t('classrooms') },
  { icon: 'verified', value: '98%', label: t('gradRate') },
])

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
  { month: 'Oct', day: '15', title: t('event1'), detail: t('event1d'), accent: true },
  { month: 'Oct', day: '22', title: t('event2'), detail: t('event2d'), accent: false },
  { month: 'Nov', day: '05', title: t('event3'), detail: t('event3d'), accent: true },
])

const heroImg = ref<HTMLImageElement | null>(null)
function onScroll() {
  if (heroImg.value) {
    heroImg.value.style.transform = `translateY(${window.pageYOffset * 0.4}px)`
  }
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          ref="heroImg"
          alt="Campus"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDPLpM5ZeGtka9_3slegAbQlTxCL8JeGynaeM_L3v4_4CitTYwBI1j-zVD7plhiOiDLIs8u3u5pJCb2_AFM3Q-XDn8cVBJuZWedx8xIy6wLozcqZSQ6UYh6XMu-IdsLD3LaU6LetMXaNi-WuHoWiEJq26-iNzrOVsv-upMo2mL5LGDBOlAxE7k4XrKCu51MF1SJF4DSbYVVxep0ECw2opBbMa5V-Jfi0qUHxCeErqBGgk13cR7IJ_1sSpbQKuuwdcPX7zDmNVn2g"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
      </div>
      <div class="relative z-10 text-center px-margin-mobile md:px-0">
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-md text-shadow-sm">
          {{ t('heroTitle1') }} <br /><span class="text-secondary-container">{{ t('heroTitle2') }}</span>
        </h1>
        <p class="text-white/90 text-body-lg max-w-2xl mx-auto mb-stack-lg">{{ t('heroSub') }}</p>
        <div class="flex flex-col md:flex-row gap-gutter justify-center">
          <NuxtLink to="/admissions" class="bg-primary text-white px-8 py-4 rounded-xl font-headline-sm hover:translate-y-[-2px] transition-transform shadow-lg">{{ t('enroll') }}</NuxtLink>
          <NuxtLink to="/academics" class="glass-effect text-primary-container px-8 py-4 rounded-xl font-headline-sm hover:bg-white/90 transition-all">{{ t('explore') }}</NuxtLink>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span class="material-symbols-outlined text-white text-4xl">keyboard_double_arrow_down</span>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white p-8 rounded-[2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform"
        >
          <div class="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-stack-md">
            <span class="material-symbols-outlined text-primary text-3xl">{{ stat.icon }}</span>
          </div>
          <h3 class="font-display-lg text-headline-md text-primary">{{ stat.value }}</h3>
          <p class="text-on-surface-variant font-label-md">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Programs -->
    <section class="py-24 bg-surface-container-low">
      <div class="px-margin-desktop max-w-container-max mx-auto">
        <div class="mb-stack-lg">
          <h2 class="font-display-lg text-headline-md md:text-display-lg text-primary mb-stack-sm">{{ t('excellenceTitle') }}</h2>
          <p class="text-on-surface-variant text-body-lg">{{ t('excellenceSub') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div
            v-for="program in programs"
            :key="program.title"
            class="group relative overflow-hidden rounded-[2rem] bg-white shadow-md border border-outline-variant/20"
          >
            <div class="h-64 overflow-hidden">
              <img :alt="program.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :src="program.img" />
            </div>
            <div class="p-8">
              <div class="flex justify-between items-start mb-stack-sm">
                <h3 class="font-headline-md text-primary">{{ program.title }}</h3>
                <span class="material-symbols-outlined text-secondary">{{ program.icon }}</span>
              </div>
              <p class="text-body-md text-on-surface-variant mb-stack-md">{{ program.body }}</p>
              <NuxtLink to="/academics" class="text-secondary font-label-md flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {{ t('exploreCurriculum') }} <span class="material-symbols-outlined">arrow_forward</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events and Testimonials -->
    <section class="py-24 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div class="flex flex-col lg:flex-row gap-gutter">
        <div class="lg:w-1/2">
          <h2 class="font-headline-md text-headline-md text-primary mb-stack-lg">{{ t('upcomingEvents') }}</h2>
          <div class="space-y-stack-md">
            <NuxtLink
              v-for="event in events"
              :key="event.title"
              to="/news"
              class="flex gap-stack-md p-stack-md rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group"
            >
              <div
                class="w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0"
                :class="event.accent ? 'bg-primary-container text-white' : 'bg-secondary-container text-primary'"
              >
                <span class="text-label-sm uppercase opacity-80">{{ event.month }}</span>
                <span class="font-bold text-headline-sm">{{ event.day }}</span>
              </div>
              <div>
                <h4 class="font-headline-sm text-on-surface group-hover:text-primary transition-colors">{{ event.title }}</h4>
                <p class="text-body-sm text-on-surface-variant">{{ event.detail }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <div class="lg:w-1/2">
          <h2 class="font-headline-md text-headline-md text-primary mb-stack-lg">{{ t('voices') }}</h2>
          <div class="glass-effect p-12 rounded-[2rem] relative">
            <div class="transition-opacity duration-300">
              <p class="text-body-lg text-primary italic mb-stack-lg">{{ t('quote') }}</p>
              <div class="flex items-center gap-stack-md">
                <img
                  alt="Student"
                  class="w-12 h-12 rounded-full border-2 border-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNs_STsgMUjnalkzypBBilq9Aw9_Uue_FoUzRmaEfwIXldvJ0W4sAWnabSFQEA5-jL-xK7P_LwC74C1w8pshPCGHU46K9GhIdpCh7PCyaSQokQg1Jqlt6wuaj7HRydgGQ5oHrdj5MeR8W3u0O-3BqCf3Vu4reCb0ldfVXXjcomzTd4d9_kjFiLYznR5jq8yyhVOPWGRHSaoyCJwZMefHbC_LemWO5vuNk-k7Sq1cokU3AuMHeKDpRdTa34ZoA-x74-1AgXUuguD40"
                />
                <div>
                  <h5 class="font-headline-sm text-primary">{{ t('quoteName') }}</h5>
                  <p class="text-label-sm text-on-surface-variant">{{ t('quoteClass') }}</p>
                </div>
              </div>
            </div>
            <div class="mt-stack-lg flex gap-stack-sm">
              <button class="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <button class="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-primary text-white">
      <div class="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div>
          <h2 class="font-display-lg text-headline-md md:text-display-lg mb-stack-md">{{ t('getInTouch') }}</h2>
          <p class="text-white/80 text-body-lg mb-stack-lg">{{ t('contactSub') }}</p>
          <div class="space-y-stack-md mb-stack-lg">
            <div class="flex items-center gap-stack-md">
              <span class="material-symbols-outlined text-secondary-container">location_on</span>
              <span class="text-body-md">{{ t('address') }}</span>
            </div>
            <div class="flex items-center gap-stack-md">
              <span class="material-symbols-outlined text-secondary-container">call</span>
              <span class="text-body-md">+1 (555) 000-1234</span>
            </div>
            <div class="flex items-center gap-stack-md">
              <span class="material-symbols-outlined text-secondary-container">mail</span>
              <span class="text-body-md">admissions@bfhs.edu</span>
            </div>
          </div>
          <form class="space-y-stack-sm max-w-md" @submit.prevent>
            <input class="w-full bg-white/10 border-0 rounded-xl px-4 py-3 placeholder:text-white/50 focus:ring-2 focus:ring-secondary-container transition-all" :placeholder="t('fullName')" type="text" />
            <input class="w-full bg-white/10 border-0 rounded-xl px-4 py-3 placeholder:text-white/50 focus:ring-2 focus:ring-secondary-container transition-all" :placeholder="t('email')" type="email" />
            <textarea class="w-full bg-white/10 border-0 rounded-xl px-4 py-3 placeholder:text-white/50 focus:ring-2 focus:ring-secondary-container transition-all" :placeholder="t('message')" rows="3"></textarea>
            <button class="w-full bg-secondary-container text-primary font-bold py-3 rounded-xl hover:opacity-90 transition-opacity" type="submit">{{ t('send') }}</button>
          </form>
        </div>
        <div class="h-[400px] lg:h-full rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div class="absolute inset-0 bg-surface-variant flex items-center justify-center">
            <img
              alt="Campus Map"
              class="w-full h-full object-cover grayscale opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt55uiT3WthK4XjV1Vf95Q0CGK5qOTTe6DdAcWJsI6VWfM_q4OjjGI4XmDlnMrUjoDT5saWsrcCP-qSVx2g0F_c8lAYE94UUuJTGyLtymU-m0i-Ec2GIindw7EjdkQESYqlorHdLrXvQZnlncH5fSmMOD2xyILDahFkLIrfGzvZChNfFxfsIFtS78wllo6fu_twNyaHrFOjplQBXEN3n4cNAzSAZp5u1a2y5DmmdZQhvOEi552Rh2vn_09tGVCv383w8reoE0M_Kk"
            />
            <div class="absolute glass-effect p-6 rounded-2xl text-primary text-center">
              <span class="material-symbols-outlined text-4xl mb-stack-sm" style="font-variation-settings: 'FILL' 1;">location_on</span>
              <p class="font-bold">{{ t('mainCampus') }}</p>
              <p class="text-body-sm">{{ t('expandMap') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
