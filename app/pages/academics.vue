<script setup lang="ts">
useHead({ title: 'Academics' })

const { t } = useI18n({
  en: {
    // Hero
    heroAlt: 'A sun-drenched, modern architectural high school courtyard',
    heroHeading: 'Cultivating Excellence Through Rigorous Academics',
    heroBody: 'Our curriculum is designed to challenge students, foster critical thinking, and prepare the leaders of tomorrow with a technology-driven global perspective.',
    heroEyebrow: 'Curriculum 2024–2025',

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

    // Framework strip
    frameworkLabel: 'How we teach',
    seminar: 'Seminar-style classes', seminarNote: 'Average 18 students per section.',
    advisory: 'Faculty advisory', advisoryNote: 'Every student keeps one adviser for four years.',
    capstone: 'Senior capstone', capstoneNote: 'A year-long independent research project.',
  },
  km: {
    // Hero
    heroAlt: 'ស្ងួត​ដោយ​ព្រះអាទិត្យ​ ទីធ្លា​សាលារៀន​ទំនើប​ស្ថាបត្យកម្ម',
    heroHeading: 'ការចម្រើនភាពល្អឥតខ្ចោះតាមរយៈការសិក្សាឧត្តមភាព',
    heroBody: 'កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើងដើម្បីប្រឈមមុខនឹងសិស្ស លើកទឹកចិត្តការគិតរិះរក និងរៀបចំអ្នកដឹកនាំនៃថ្ងៃស្អែកដោយទស្សនៈសកលដែលជំរុញដោយបច្ចេកវិទ្យា។',
    heroEyebrow: 'កម្មវិធីសិក្សា ២០២៤–២០២៥',

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

    // Framework strip
    frameworkLabel: 'របៀបដែលយើងបង្រៀន',
    seminar: 'ថ្នាក់បែបសិក្ខាសាលា', seminarNote: 'ជាមធ្យម ១៨ នាក់ក្នុងមួយថ្នាក់។',
    advisory: 'គ្រូប្រឹក្សាផ្ទាល់ខ្លួន', advisoryNote: 'សិស្សម្នាក់មានគ្រូប្រឹក្សាតែមួយពេញ ៤ ឆ្នាំ។',
    capstone: 'គម្រោងបញ្ចប់ថ្នាក់ទី១២', capstoneNote: 'គម្រោងស្រាវជ្រាវឯករាជ្យរយៈពេលមួយឆ្នាំ។',
  },
})

const programs = computed(() => [
  { icon: 'science', title: t('scienceTitle'), desc: t('scienceDesc'), items: [t('scienceItem1'), t('scienceItem2')] },
  { icon: 'calculate', title: t('mathTitle'), desc: t('mathDesc'), items: [t('mathItem1'), t('mathItem2')] },
  { icon: 'auto_stories', title: t('langArtsTitle'), desc: t('langArtsDesc'), items: [t('langArtsItem1'), t('langArtsItem2')] },
  { icon: 'public', title: t('socialStudiesTitle'), desc: t('socialStudiesDesc'), items: [t('socialStudiesItem1'), t('socialStudiesItem2')] },
  { icon: 'computer', title: t('techTitle'), desc: t('techDesc'), items: [t('techItem1'), t('techItem2')] },
])

const framework = computed(() => [
  { icon: 'forum', title: t('seminar'), note: t('seminarNote') },
  { icon: 'diversity_3', title: t('advisory'), note: t('advisoryNote') },
  { icon: 'workspace_premium', title: t('capstone'), note: t('capstoneNote') },
])

const calendarEvents = computed(() => [
  { day: '12', month: t('calEvent1Month'), title: t('calEvent1Title'), desc: t('calEvent1Desc'), active: true },
  { day: '25', month: t('calEvent2Month'), title: t('calEvent2Title'), desc: t('calEvent2Desc'), active: false },
  { day: '04', month: t('calEvent3Month'), title: t('calEvent3Title'), desc: t('calEvent3Desc'), active: false },
])
</script>

<template>
  <div>
    <PageHeader
      :eyebrow="t('heroEyebrow')"
      :title="t('heroHeading')"
      :lede="t('heroBody')"
      :image-alt="t('heroAlt')"
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuC8kxBNqmc5uMtZQyoiWeZsDQ0pYQLR3puv0fLmncKUHXfSfgZc5S9gSHlAelhNUvgt86CvGYtfED9w--f88AaEFhgElYuyfzZf2wYbbQ00qBjuNKZ76sBfDmNI48rvDSfcawDsvQ6a3FFC8yMLYnwNrepBr6Ae4UKKqXntDPP1M6wJAgjN3WslQYkG8u5RhbBTRBC_nBK0d4O8VEkVy-4qDd7Ry0J2KmMFr3pk3Y9YV4UW5QtdUkU4hI4HyrXO3pUf7RFnMk4zofw"
    />

    <!-- ── Teaching framework strip ─────────────────────────────────────── -->
    <section class="border-b border-line bg-surface">
      <UiContainer>
        <div class="grid gap-8 py-10 md:grid-cols-3 md:gap-6">
          <div v-for="f in framework" :key="f.title" class="flex gap-4">
            <UiIcon :name="f.icon" :size="22" class="mt-0.5 text-accent" />
            <div>
              <p class="text-copy font-medium text-fg">{{ f.title }}</p>
              <p class="mt-1 text-copy-sm text-fg-muted">{{ f.note }}</p>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- ── Programs ─────────────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead
        :eyebrow="t('programsSectionHeading')"
        :title="t('programsSectionSubheading')"
        size="display"
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="program in programs"
          :key="program.icon"
          class="group flex flex-col rounded-xl border border-line bg-surface p-7 shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
        >
          <span class="grid h-11 w-11 place-items-center rounded-md bg-brand-tint text-on-brand-tint">
            <UiIcon :name="program.icon" :size="21" />
          </span>
          <h3 class="mt-5 font-display text-title-3 text-fg">{{ program.title }}</h3>
          <p class="mt-2.5 text-copy-sm text-fg-muted">{{ program.desc }}</p>

          <ul class="mt-5 flex flex-col gap-2 border-t border-line pt-5">
            <li v-for="item in program.items" :key="item" class="flex items-center gap-2 text-label text-fg">
              <UiIcon name="check_small" :size="18" class="text-accent" />{{ item }}
            </li>
          </ul>

          <a
            href="#curriculum-guide"
            class="mt-6 inline-flex items-center gap-1.5 text-label font-medium text-fg-muted transition-colors group-hover:text-accent"
          >
            {{ t('viewCurriculum') }}
            <UiIcon name="arrow_forward" :size="16" class="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </article>

        <!-- Feature tile -->
        <article class="group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-xl border border-line">
          <img
            class="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXJOrPRYi8PNsjAsnm48fo7WPIEUVUWjPP_SSAh-t6K4DNgU-Xi50B0S9NHW_VVhKZL6L8aKfh7UUsvbE9nQ9RdO5lzNNys23hfx04efj1aC_97k3-fxU4FJo_-HJoDHKGBKESx9SEtklsYkQL6Zg8gYFvaANA4YURvRZO3rkYOGbGBs1o4q9pt4Y1HjIDJbr5uZxEZS3kFaV-ywFvS4pPsDMOCy4-8kBzLm7xnEfK0lZ7bu3xuDO7JiPdqXCVJX_zqMJ4Ho9h8M4"
            :alt="t('aiHubImageAlt')"
            loading="lazy"
          >
          <div class="scrim-b absolute inset-0 -z-10" />
          <div class="p-7">
            <UiBadge tone="inverse">{{ t('newProgramBadge') }}</UiBadge>
            <h3 class="mt-4 font-display text-title-2 text-on-dark">{{ t('aiHubTitle') }}</h3>
            <p class="mt-2 text-copy-sm text-on-dark-muted">{{ t('aiHubDesc') }}</p>
          </div>
        </article>
      </div>
    </UiSection>

    <!-- ── Guide + calendar ─────────────────────────────────────────────── -->
    <UiSection tone="muted" id="curriculum-guide">
      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <div class="flex h-full flex-col gap-8 rounded-xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
            <div class="flex-1">
              <h2 class="font-display text-title-1 text-fg">{{ t('curriculumGuideHeading') }}</h2>
              <p class="mt-3 text-copy text-fg-muted">{{ t('curriculumGuideBody') }}</p>
              <UiButton class="mt-7" size="lg" icon="download">{{ t('downloadBtn') }}</UiButton>
            </div>

            <!-- Catalogue spine mock -->
            <div class="mx-auto w-40 shrink-0 sm:mx-0">
              <div class="flex aspect-[3/4] flex-col items-center justify-center rounded-lg border-l-4 border-accent bg-brand p-5 text-center shadow-lift">
                <span class="font-display text-title-3 text-on-dark">BFHS</span>
                <span class="my-3 h-px w-10 bg-accent" />
                <span class="text-eyebrow uppercase text-on-dark/70">{{ t('academicCatalog') }}</span>
                <span class="mt-3 text-[10px] leading-snug text-on-dark/45">{{ t('catalogTagline') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="flex h-full flex-col rounded-xl border border-line bg-surface p-8">
            <div class="mb-6 flex items-center justify-between">
              <h2 class="font-display text-title-3 text-fg">{{ t('calendarHeading') }}</h2>
              <div class="flex gap-1">
                <button type="button" class="grid h-8 w-8 place-items-center rounded text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg" aria-label="Previous month">
                  <UiIcon name="chevron_left" :size="18" />
                </button>
                <button type="button" class="grid h-8 w-8 place-items-center rounded text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg" aria-label="Next month">
                  <UiIcon name="chevron_right" :size="18" />
                </button>
              </div>
            </div>

            <ul class="flex-1 divide-y divide-line border-y border-line">
              <li v-for="event in calendarEvents" :key="event.day + event.month" class="group flex gap-4 py-4">
                <time
                  class="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md border transition-colors"
                  :class="event.active
                    ? 'border-accent/30 bg-accent-tint text-on-accent-tint'
                    : 'border-line bg-surface-2 text-fg-muted'"
                >
                  <span class="text-label font-semibold tabular-nums leading-none">{{ event.day }}</span>
                  <span class="mt-1 text-[10px] uppercase leading-none">{{ event.month }}</span>
                </time>
                <div>
                  <p class="text-copy-sm font-medium text-fg">{{ event.title }}</p>
                  <p class="mt-0.5 text-copy-sm text-fg-muted">{{ event.desc }}</p>
                </div>
              </li>
            </ul>

            <UiButton to="/news" variant="ghost" block class="mt-5" icon-trailing="arrow_forward">
              {{ t('viewFullCalendar') }}
            </UiButton>
          </div>
        </div>
      </div>
    </UiSection>
  </div>
</template>
