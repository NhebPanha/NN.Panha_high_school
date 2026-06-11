<script setup lang="ts">
import { onMounted, computed } from 'vue'

useHead({ title: 'Academics' })

const { t } = useI18n({
  en: {
    // Hero
    heroAlt: 'A sun-drenched, modern architectural high school courtyard',
    heroHeading: 'Cultivating Excellence Through Rigorous Academics',
    heroBody: 'Our curriculum is designed to challenge students, foster critical thinking, and prepare the leaders of tomorrow with a technology-driven global perspective.',

    // Programs section
    programsSectionHeading: 'Our Academic Programs',
    programsSectionSubheading: 'Comprehensive learning paths tailored for diverse student ambitions.',

    // Science card
    scienceTitle: 'Science',
    scienceDesc: 'Inquiry-based exploration of biology, chemistry, and physics using state-of-the-art laboratory facilities.',
    scienceItem1: 'Advanced Placement Biology',
    scienceItem2: 'Robotics & Mechanics',

    // Mathematics card
    mathTitle: 'Mathematics',
    mathDesc: 'From foundational algebra to advanced calculus, fostering logical reasoning and problem-solving mastery.',
    mathItem1: 'Statistics & Probability',
    mathItem2: 'Honors Calculus III',

    // Language Arts card
    langArtsTitle: 'Language Arts',
    langArtsDesc: 'Mastery of communication, critical analysis of literature, and creative expression through writing.',
    langArtsItem1: 'World Literature',
    langArtsItem2: 'Creative Writing Lab',

    // Social Studies card
    socialStudiesTitle: 'Social Studies',
    socialStudiesDesc: 'Global perspectives on history, geography, and civic responsibility in a modern connected world.',
    socialStudiesItem1: 'Global Economics',
    socialStudiesItem2: 'Political Philosophy',

    // Technology card
    techTitle: 'Technology',
    techDesc: 'Cutting-edge technical training in software development, AI foundations, and digital design.',
    techItem1: 'Python Programming',
    techItem2: 'UX/UI Design Principles',

    // Shared
    viewCurriculum: 'View Curriculum',

    // Bento feature card
    newProgramBadge: 'New Program',
    aiHubTitle: 'AI Integration Hub',
    aiHubDesc: 'Exploring the ethical and practical applications of machine learning across all disciplines.',
    aiHubImageAlt: 'High-tech laboratory equipment in a school science lab',

    // Curriculum download
    curriculumGuideHeading: 'Complete Curriculum Guide',
    curriculumGuideBody: 'Download our detailed academic roadmap for the 2024-2025 academic year, including elective descriptions and credit requirements.',
    downloadBtn: 'Download PDF (4.2 MB)',
    academicCatalog: 'Academic Catalog',
    catalogTagline: 'Empowering future leaders through innovative learning and community engagement.',

    // Calendar
    calendarHeading: 'Academic Calendar',
    calEvent1Title: 'Mid-term Examinations',
    calEvent1Desc: 'General academic block week. No extracurricular activities.',
    calEvent1Month: 'Oct',
    calEvent2Title: 'Parent-Teacher Symposium',
    calEvent2Desc: 'Digital portal review and one-on-one faculty sessions.',
    calEvent2Month: 'Oct',
    calEvent3Title: 'Science & Tech Expo',
    calEvent3Desc: 'Annual showcase of student innovation projects.',
    calEvent3Month: 'Nov',
    viewFullCalendar: 'View Full Year Calendar',
  },
  km: {
    // Hero
    heroAlt: 'ស្ងួត​ដោយ​ព្រះអាទិត្យ​ ទីធ្លា​សាលារៀន​ទំនើប​ស្ថាបត្យកម្ម',
    heroHeading: 'ការចម្រើនភាពល្អឥតខ្ចោះតាមរយៈការសិក្សាឧត្តមភាព',
    heroBody: 'កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើងដើម្បីប្រឈមមុខនឹងសិស្ស លើកទឹកចិត្តការគិតរិះរក និងរៀបចំអ្នកដឹកនាំនៃថ្ងៃស្អែកដោយទស្សនៈសកលដែលជំរុញដោយបច្ចេកវិទ្យា។',

    // Programs section
    programsSectionHeading: 'កម្មវិធីសិក្សារបស់យើង',
    programsSectionSubheading: 'គន្លងសិក្សាដ៏ស្ម័គ្រស្មារតីដែលសំដៅទៅតាមបំណងប្រាថ្នារបស់សិស្សនីមួយៗ។',

    // Science card
    scienceTitle: 'វិទ្យាសាស្ត្រ',
    scienceDesc: 'ការស្វែងរកផ្អែកលើការសាកសួរក្នុងជីវវិទ្យា គីមីវិទ្យា និងរូបវិទ្យា ដោយប្រើប្រាស់សម្ភារៈបន្ទប់ពិសោធន៍ទំនើបបំផុត។',
    scienceItem1: 'ជីវវិទ្យាកម្រិតខ្ពស់',
    scienceItem2: 'រ៉ូបូទិច និងមេកានិច',

    // Mathematics card
    mathTitle: 'គណិតវិទ្យា',
    mathDesc: 'ចាប់ពីអាល់ហ្សែបមូលដ្ឋានរហូតដល់Calculusខ្ពស់ ដែលជំរុញការគិតឡូជីខល និងជំនាញដោះស្រាយបញ្ហា។',
    mathItem1: 'ស្ថិតិ និងប្រូបាប',
    mathItem2: 'Calculus III កម្រិតកិត្តិយស',

    // Language Arts card
    langArtsTitle: 'សិល្បៈភាសា',
    langArtsDesc: 'ជំនាញទំនាក់ទំនង ការវិភាគអក្សរសិល្ប៍ និងការបញ្ចេញមតិតាមរយៈការសរសេរ។',
    langArtsItem1: 'អក្សរសិល្ប៍ពិភពលោក',
    langArtsItem2: 'មន្ទីរពិសោធន៍និពន្ធច្នៃប្រឌិត',

    // Social Studies card
    socialStudiesTitle: 'សង្គមវិទ្យា',
    socialStudiesDesc: 'ទស្សនៈសកលលើប្រវត្តិសាស្ត្រ ភូមិសាស្ត្រ និងការទទួលខុសត្រូវពលរដ្ឋក្នុងពិភពភ្ជាប់ទំនាក់ទំនងទំនើប។',
    socialStudiesItem1: 'សេដ្ឋកិច្ចសកល',
    socialStudiesItem2: 'ទស្សនវិជ្ជានយោបាយ',

    // Technology card
    techTitle: 'បច្ចេកវិទ្យា',
    techDesc: 'ការបណ្តុះបណ្តាលបច្ចេកទេសទំនើបក្នុងការអភិវឌ្ឍន៍កម្មវិធី មូលដ្ឋាន AI និងការរចនាឌីជីថល។',
    techItem1: 'ការសរសេរកូដ Python',
    techItem2: 'គោលការណ៍រចនា UX/UI',

    // Shared
    viewCurriculum: 'មើលកម្មវិធីសិក្សា',

    // Bento feature card
    newProgramBadge: 'កម្មវិធីថ្មី',
    aiHubTitle: 'មជ្ឈមណ្ឌលបញ្ចូល AI',
    aiHubDesc: 'ស្វែងរកការអនុវត្តអេតទិក និងជាក់ស្តែងនៃការរៀនម៉ាស៊ីនក្នុងគ្រប់វិស័យ។',
    aiHubImageAlt: 'ឧបករណ៍ពិសោធន៍ទំនើបក្នុងបន្ទប់វិទ្យាសាស្ត្រ',

    // Curriculum download
    curriculumGuideHeading: 'មគ្គុទ្ទេសក៍កម្មវិធីសិក្សាពេញលេញ',
    curriculumGuideBody: 'ទាញយកផែនទីវិស័យសិក្សាលម្អិតសម្រាប់ឆ្នាំសិក្សា ២០២៤-២០២៥ រួមមានការពិពណ៌នាមុខវិជ្ជាជ្រើសរើស និងតម្រូវការឥណទាន។',
    downloadBtn: 'ទាញយក PDF (4.2 MB)',
    academicCatalog: 'កាតាឡុកសិក្សា',
    catalogTagline: 'ពង្រឹងអ្នកដឹកនាំនៃអនាគតតាមរយៈការរៀនសូត្រច្នៃប្រឌិត និងការចូលរួមក្នុងសហគមន៍។',

    // Calendar
    calendarHeading: 'ប្រតិទិនសិក្សា',
    calEvent1Title: 'ការប្រឡងពាក់កណ្តាលឆមាស',
    calEvent1Desc: 'សប្តាហ៍ប្លុកសិក្សាទូទៅ។ គ្មានសកម្មភាពក្រៅកម្មវិធីសិក្សា។',
    calEvent1Month: 'តុលា',
    calEvent2Title: 'សិម្មនាឆ្លើយឆ្លងឪពុកម្តាយ-គ្រូ',
    calEvent2Desc: 'ការពិនិត្យផតថលឌីជីថល និងវគ្គបុគ្គលជាមួយគ្រូ។',
    calEvent2Month: 'តុលា',
    calEvent3Title: 'ពិព័រណ៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា',
    calEvent3Desc: 'ការតាំងបង្ហាញប្រចាំឆ្នាំនៃគម្រោងច្នៃប្រឌិតរបស់សិស្ស។',
    calEvent3Month: 'វិច្ឆិកា',
    viewFullCalendar: 'មើលប្រតិទិនពេញមួយឆ្នាំ',
  },
})

const programs = computed(() => [
  {
    icon: 'science',
    title: t('scienceTitle'),
    desc: t('scienceDesc'),
    items: [t('scienceItem1'), t('scienceItem2')],
  },
  {
    icon: 'calculate',
    title: t('mathTitle'),
    desc: t('mathDesc'),
    items: [t('mathItem1'), t('mathItem2')],
  },
  {
    icon: 'auto_stories',
    title: t('langArtsTitle'),
    desc: t('langArtsDesc'),
    items: [t('langArtsItem1'), t('langArtsItem2')],
  },
  {
    icon: 'public',
    title: t('socialStudiesTitle'),
    desc: t('socialStudiesDesc'),
    items: [t('socialStudiesItem1'), t('socialStudiesItem2')],
  },
  {
    icon: 'computer',
    title: t('techTitle'),
    desc: t('techDesc'),
    items: [t('techItem1'), t('techItem2')],
  },
])

const calendarEvents = computed(() => [
  {
    day: '12',
    month: t('calEvent1Month'),
    title: t('calEvent1Title'),
    desc: t('calEvent1Desc'),
    active: true,
  },
  {
    day: '25',
    month: t('calEvent2Month'),
    title: t('calEvent2Title'),
    desc: t('calEvent2Desc'),
    active: false,
  },
  {
    day: '04',
    month: t('calEvent3Month'),
    title: t('calEvent3Title'),
    desc: t('calEvent3Desc'),
    active: false,
  },
])

onMounted(() => {
  document.querySelectorAll<HTMLElement>('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  })
})
</script>

<template>
  <div>
    <main class="pt-24 pb-20">
      <!-- Hero Section -->
      <section class="px-margin-desktop max-w-container-max mx-auto mb-16">
        <div class="relative h-[400px] rounded-[2rem] overflow-hidden flex items-center p-12">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8kxBNqmc5uMtZQyoiWeZsDQ0pYQLR3puv0fLmncKUHXfSfgZc5S9gSHlAelhNUvgt86CvGYtfED9w--f88AaEFhgElYuyfzZf2wYbbQ00qBjuNKZ76sBfDmNI48rvDSfcawDsvQ6a3FFC8yMLYnwNrepBr6Ae4UKKqXntDPP1M6wJAgjN3WslQYkG8u5RhbBTRBC_nBK0d4O8VEkVy-4qDd7Ry0J2KmMFr3pk3Y9YV4UW5QtdUkU4hI4HyrXO3pUf7RFnMk4zofw"
            :alt="t('heroAlt')"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div class="relative z-10 max-w-2xl">
            <h1 class="font-display-lg text-display-lg text-white mb-4">{{ t('heroHeading') }}</h1>
            <p class="font-body-lg text-body-lg text-white/90">{{ t('heroBody') }}</p>
          </div>
        </div>
      </section>

      <!-- Program Overview Grid -->
      <section class="px-margin-desktop max-w-container-max mx-auto mb-20">
        <div class="flex items-center justify-between mb-10">
          <div>
            <h2 class="font-headline-md text-headline-md text-primary mb-2">{{ t('programsSectionHeading') }}</h2>
            <p class="text-on-surface-variant">{{ t('programsSectionSubheading') }}</p>
          </div>
          <div class="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <!-- Program cards (reactive) -->
          <div
            v-for="program in programs"
            :key="program.icon"
            class="glass-card p-8 rounded-[2rem] hover:translate-y-[-4px] transition-transform duration-300"
          >
            <div class="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary mb-6">
              <span class="material-symbols-outlined">{{ program.icon }}</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-primary mb-3">{{ program.title }}</h3>
            <p class="text-on-surface-variant text-body-sm mb-6">{{ program.desc }}</p>
            <ul class="space-y-2 mb-8">
              <li
                v-for="item in program.items"
                :key="item"
                class="flex items-center text-label-md text-on-surface"
              >
                <span class="material-symbols-outlined text-secondary mr-2 text-[18px]">check_circle</span> {{ item }}
              </li>
            </ul>
            <a class="text-secondary font-semibold hover:underline flex items-center gap-2" href="#">{{ t('viewCurriculum') }} <span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>
          </div>

          <!-- Bento Style Feature Card -->
          <div class="relative rounded-[2rem] overflow-hidden p-8 flex flex-col justify-end min-h-[320px] bg-primary group">
            <img
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXJOrPRYi8PNsjAsnm48fo7WPIEUVUWjPP_SSAh-t6K4DNgU-Xi50B0S9NHW_VVhKZL6L8aKfh7UUsvbE9nQ9RdO5lzNNys23hfx04efj1aC_97k3-fxU4FJo_-HJoDHKGBKESx9SEtklsYkQL6Zg8gYFvaANA4YURvRZO3rkYOGbGBs1o4q9pt4Y1HjIDJbr5uZxEZS3kFaV-ywFvS4pPsDMOCy4-8kBzLm7xnEfK0lZ7bu3xuDO7JiPdqXCVJX_zqMJ4Ho9h8M4"
              :alt="t('aiHubImageAlt')"
            >
            <div class="relative z-10">
              <span class="px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full mb-4 inline-block uppercase tracking-widest">{{ t('newProgramBadge') }}</span>
              <h3 class="font-headline-sm text-headline-sm text-white mb-2">{{ t('aiHubTitle') }}</h3>
              <p class="text-white/80 text-body-sm">{{ t('aiHubDesc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Curriculum Overview & Calendar Widget -->
      <section class="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <!-- Curriculum Download -->
        <div class="lg:col-span-7 bg-surface-container-low rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
          <div class="flex-1">
            <h2 class="font-headline-md text-headline-md text-primary mb-4">{{ t('curriculumGuideHeading') }}</h2>
            <p class="text-on-surface-variant text-body-md mb-8">{{ t('curriculumGuideBody') }}</p>
            <button class="bg-primary text-white px-8 py-4 rounded-xl font-label-md flex items-center gap-3 hover:shadow-lg transition-shadow">
              <span class="material-symbols-outlined">download</span>
              {{ t('downloadBtn') }}
            </button>
          </div>
          <div class="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div class="absolute inset-0 bg-secondary flex items-center justify-center p-6 text-center text-white">
              <div>
                <div class="font-display-lg text-headline-sm mb-2">BFHS</div>
                <div class="h-1 w-12 bg-white mx-auto mb-4"></div>
                <div class="font-label-md uppercase tracking-widest">{{ t('academicCatalog') }}</div>
                <div class="mt-4 text-[10px] opacity-70">{{ t('catalogTagline') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Calendar Widget -->
        <div class="lg:col-span-5 glass-card rounded-[2rem] p-8">
          <div class="flex items-center justify-between mb-8">
            <h3 class="font-headline-sm text-headline-sm text-primary">{{ t('calendarHeading') }}</h3>
            <div class="flex gap-2">
              <button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors">
                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button class="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors">
                <span class="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="space-y-6">
            <div
              v-for="event in calendarEvents"
              :key="event.day + event.month"
              class="flex gap-4 items-start group cursor-pointer"
            >
              <div
                class="flex flex-col items-center justify-center w-14 h-14 rounded-2xl shrink-0 transition-colors duration-300"
                :class="event.active
                  ? 'bg-secondary-container/20 text-secondary border border-secondary/10 group-hover:bg-secondary group-hover:text-white'
                  : 'bg-surface-container-high text-on-surface-variant border border-outline-variant/10 group-hover:bg-secondary group-hover:text-white'"
              >
                <span class="text-label-md font-bold">{{ event.day }}</span>
                <span class="text-[10px] uppercase font-bold">{{ event.month }}</span>
              </div>
              <div>
                <h4 class="font-label-md text-on-surface">{{ event.title }}</h4>
                <p class="text-body-sm text-on-surface-variant">{{ event.desc }}</p>
              </div>
            </div>
            <button class="w-full py-4 text-center text-label-md text-secondary border border-dashed border-secondary/30 rounded-2xl hover:bg-secondary/5 transition-colors">
              {{ t('viewFullCalendar') }}
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(26, 54, 93, 0.05);
}

.text-gradient {
  background: linear-gradient(135deg, #002045 0%, #1960a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
