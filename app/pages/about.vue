<script setup lang="ts">
useHead({ title: 'About Us' })

const { t } = useI18n({
  en: {
    // Hero
    ourLegacy: 'Our Legacy',
    heroHeading: 'Shaping Minds Since 1992.',
    heroBody: 'Bright Future High School was founded on the principle that every student possesses unique potential. For over three decades, we have been at the forefront of educational excellence, blending rigorous academics with emotional intelligence to prepare the leaders of tomorrow.',
    missionHeading: 'Our Mission',
    missionStatement: 'To inspire a lifelong love of learning and empower students with the knowledge and character required to excel in a global society.',
    schoolBuildingAlt: 'School Building',

    // Principal
    principalPortraitAlt: 'Principal Portrait',
    principalMessageHeading: 'A Message from Dr. Julian Vance',
    principalQuote: 'Education is not merely the delivery of content, but the ignition of curiosity. At Bright Future, we believe in a holistic approach where academic rigor meets personal development. Our faculty is dedicated to mentoring each student, ensuring they find their voice and their purpose. I invite you to join our community where innovation is celebrated and integrity is the cornerstone of everything we do.',
    principalTitle: 'Principal & Executive Director',
    fromTheHead: 'From the head of school',

    // Values
    coreValuesHeading: 'Our Core Values',
    coreValuesSubheading: 'The pillars that define our culture and drive our pursuit of greatness every day.',
    excellenceHeading: 'Excellence',
    excellenceBody: 'We pursue the highest standards in everything we do, from academic research to athletic performance, fostering a culture of continuous improvement.',
    integrityHeading: 'Integrity',
    integrityBody: 'Honesty and ethical behavior are the foundation of our community. We teach our students the value of character and accountability.',
    innovationHeading: 'Innovation',
    innovationBody: 'We embrace new ideas and technology, encouraging our students to think outside the box and solve complex global challenges.',

    // Faculty
    facultyHeading: 'Our Distinguished Faculty',
    facultySubheading: 'Expert educators committed to academic mastery.',
    viewAllFaculty: 'View All Faculty',
    sarahJenkinsRole: 'Head of Sciences',
    marcusThorneRole: 'Department of Humanities',
    elenaRodriguezRole: 'Mathematics & AI Lead',
    davidChenRole: 'Director of Athletics',

    // Facilities
    campusHeading: 'World-Class Campus',
    campusSubheading: 'Discover the spaces where innovation and learning collide.',
    scienceLabAlt: 'Science Lab',
    quantumWingHeading: 'Quantum Science Wing',
    quantumWingSubheading: 'Research & Exploration',
    libraryAlt: 'Library',
    exploreLibrary: 'Explore Library',
    sportsComplexAlt: 'Sports Complex',
    viewComplex: 'View Complex',

    // Milestones
    milestonesLabel: 'By the numbers',
    yearsLabel: 'Years of teaching',
    alumniLabel: 'Alumni worldwide',
    ratioLabel: 'Student–teacher ratio',
    universityLabel: 'University placement',
  },
  km: {
    // Hero
    ourLegacy: 'កេរដំណែលរបស់យើង',
    heroHeading: 'រៀបចំចិត្តខួរក្បាលតាំងពីឆ្នាំ ១៩៩២។',
    heroBody: 'សាលាមធ្យមសិក្សា Bright Future ត្រូវបានបង្កើតឡើងដោយផ្អែកលើគោលការណ៍ថា សិស្សានុសិស្សរៀងរាល់នាក់សុទ្ធតែមានសក្តានុពលពិសេសជាខ្លួន។ ក្នុងរយៈពេលជាងបីទសវត្ស យើងបានឈរជាប់នៅជួរមុខនៃភាពល្អឯករបស់ការអប់រំ ដោយផ្សំភាពម៉ឺងម៉ាត់ខាងសិក្សាជាមួយប្រាជ្ញាអារម្មណ៍ ដើម្បីបណ្ដុះបណ្ដាលអ្នកដឹកនាំនៃអនាគត។',
    missionHeading: 'បេសកកម្មរបស់យើង',
    missionStatement: 'ដើម្បីបំផុសឆន្ទៈស្រឡាញ់ការសិក្សាពេញមួយជីវិត និងផ្តល់អំណាចដល់សិស្សតាមរយៈចំណេះដឹង និងចរិតលក្ខណៈដែលត្រូវការដើម្បីរីកចម្រើននៅក្នុងសង្គមពិភពលោក។',
    schoolBuildingAlt: 'អគារសាលារៀន',

    // Principal
    principalPortraitAlt: 'រូបថតនាយកសាលា',
    principalMessageHeading: 'សារពី Dr. Julian Vance',
    principalQuote: 'ការអប់រំមិនមែនគ្រាន់តែជាការផ្ដល់មាតិកា ប៉ុន្តែជាការបំភ្លឺឱ្យចេះចង់ដឹងចង់សិក្សា។ នៅ Bright Future យើងជឿលើវិធីសាស្ត្រដ៏ជ្រុលជ្រប ដែលភាពម៉ឺងម៉ាត់ខាងសិក្សាជួបជាមួយការអភិវឌ្ឍន៍ផ្ទាល់ខ្លួន។ គ្រូអាចារ្យរបស់យើងប្ដេជ្ញាណែនាំសិស្សម្នាក់ៗ ដើម្បីឱ្យពួកគេរកឃើញសំឡេង និងគោលបំណងរបស់ខ្លួន។ ខ្ញុំអញ្ជើញអ្នកឱ្យចូលរួមក្នុងសហគមន៍របស់យើង ដែលនវានុវត្ដន៍ត្រូវបានប្រារព្ធ និងសុចរិតភាពជាគ្រឹះនៃអ្វីៗទាំងអស់ដែលយើងធ្វើ។',
    principalTitle: 'នាយកសាលា និងនាយកប្រតិបត្តិ',
    fromTheHead: 'សារពីនាយកសាលា',

    // Values
    coreValuesHeading: 'គុណតម្លៃស្នូលរបស់យើង',
    coreValuesSubheading: 'សសរស្ដម្ភដែលកំណត់វប្បធម៌របស់យើង និងជំរុញការស្វែងរកភាពអស្ចារ្យរៀងរាល់ថ្ងៃ។',
    excellenceHeading: 'ភាពល្អឯក',
    excellenceBody: 'យើងស្វែងរកស្ដង់ដារខ្ពស់ជាងគេក្នុងគ្រប់ការងាររបស់យើង ចាប់ពីការស្រាវជ្រាវសិក្សារហូតដល់សមិទ្ធផលកីឡា ដោយជំរុញវប្បធម៌នៃការប្រសើរឡើងជានិច្ច។',
    integrityHeading: 'សុចរិតភាព',
    integrityBody: 'ភាពស្មោះត្រង់ និងឥរិយាបថប្រកបដោយក្រមសីលធម៌ជាមូលដ្ឋានគ្រឹះនៃសហគមន៍របស់យើង។ យើងបង្រៀនសិស្សរបស់យើងពីតម្លៃនៃចរិតលក្ខណៈ និងការទទួលខុសត្រូវ។',
    innovationHeading: 'នវានុវត្ដន៍',
    innovationBody: 'យើងស្វាគមន៍គំនិតថ្មី និងបច្ចេកវិទ្យា ដោយលើកទឹកចិត្តឱ្យសិស្សគិតក្រៅក្របពុម្ព និងដោះស្រាយបញ្ហាប្រឈមពិបាកៗលំដាប់ពិភពលោក។',

    // Faculty
    facultyHeading: 'គ្រូអាចារ្យឆ្នើមរបស់យើង',
    facultySubheading: 'អ្នកអប់រំជំនាញប្ដេជ្ញាចំពោះភាពជំនាញខ្ពស់ខាងសិក្សា។',
    viewAllFaculty: 'មើលគ្រូទាំងអស់',
    sarahJenkinsRole: 'ប្រធានផ្នែកវិទ្យាសាស្ត្រ',
    marcusThorneRole: 'នាយកដ្ឋានមនុស្សសាស្ត្រ',
    elenaRodriguezRole: 'ប្រធានគណិតវិទ្យា និង AI',
    davidChenRole: 'នាយកផ្នែកកីឡា',

    // Facilities
    campusHeading: 'បរិវេណសិក្សាកំរិតពិភពលោក',
    campusSubheading: 'ស្វែងយល់ពីទំហំដែលនវានុវត្ដន៍ និងការសិក្សាមកជួបគ្នា។',
    scienceLabAlt: 'មន្ទីរពិសោធន៍វិទ្យាសាស្ត្រ',
    quantumWingHeading: 'ស្លាបវិទ្យាសាស្ត្រ Quantum',
    quantumWingSubheading: 'ការស្រាវជ្រាវ និងការស្ដុបសម្ដែង',
    libraryAlt: 'បណ្ណាល័យ',
    exploreLibrary: 'រុករកបណ្ណាល័យ',
    sportsComplexAlt: 'មជ្ឈមណ្ឌលកីឡា',
    viewComplex: 'មើលមជ្ឈមណ្ឌល',

    // Milestones
    milestonesLabel: 'តាមតួលេខ',
    yearsLabel: 'ឆ្នាំនៃការបង្រៀន',
    alumniLabel: 'អតីតសិស្សទូទាំងពិភពលោក',
    ratioLabel: 'សមាមាត្រ សិស្ស–គ្រូ',
    universityLabel: 'ការចូលរៀនសកលវិទ្យាល័យ',
  },
})

const values = computed(() => [
  { n: '01', icon: 'auto_awesome', title: t('excellenceHeading'), body: t('excellenceBody') },
  { n: '02', icon: 'verified_user', title: t('integrityHeading'), body: t('integrityBody') },
  { n: '03', icon: 'lightbulb', title: t('innovationHeading'), body: t('innovationBody') },
])

const milestones = computed(() => [
  { value: '32', label: t('yearsLabel') },
  { value: '11,400', label: t('alumniLabel') },
  { value: '12 : 1', label: t('ratioLabel') },
  { value: '98%', label: t('universityLabel') },
])

const faculty = computed(() => [
  {
    name: 'Dr. Sarah Jenkins', role: t('sarahJenkinsRole'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmWYWuqmafA-AJBYszhnP5BGr48OyFQBkIQTRNucgZBQM5fIK4_usq3btoME1yNpD2IlOs0NKPpgP8zMu-HLSKFVITnqH4nocZSYU6AreTtcGKodjFLceOxvVOuuMknofIZ5T2Ex0L7O7tgFNw9kEcMbSLYeWMHYEbON7mpuhxYz30dRefeHUUJXWUphFBB8DX0agWRN2tdJ9qKnaZlnvykQR0hNuOiB_v-81wWZ3DBvWGvyjDKmZc5tI6gU9GZ3af3OqwrNI0Kvo',
  },
  {
    name: 'Mr. Marcus Thorne', role: t('marcusThorneRole'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmwEG_aIrPbRBvlVVKxtk2R2PD3zdaz_aDfJao3V4SS5Xwl2noZoUMRPlTNCX743Ot_2wa3PWhIriWMB4Rv0X66elFD4RuANArRYjUOpw_3r9wbHMeUeLngCNiD8DNb4SmzsIWj4ANGctWSsu_qK4Z6-aiKLhBD2g9bpaByG6wSnRwRl7GVwZ0zHoVUFhk-rYzVyGeJ8ZbrTGeWv988iw6vjaSHm3af4GG8YFBb5yDi7zHukR-GrBIwthJwMCRP2oQGXivd3l2EAU',
  },
  {
    name: 'Ms. Elena Rodriguez', role: t('elenaRodriguezRole'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvZGeKB5rlnmT8l-ZpoQZBjOLcoSBptO5RVDZzbNkiAogXiuyh9oRLXztOcIzfv2IvV0_UIkDSrGqJN3YC_Jj3iKukdfguxRbX98_Opb8F9-FPmGs1n916N0-U0EoIQumU2WtCVdwwKPNA1AzKjy3ViaLqoEeMTQ4th6qH_fMtZRJjL5RcVl9piw7MzoY1h_B-6-XuYS0_V76aQmD5YW2of_s4rQ3ebzqCussEMk3oeyZRDDaKgZE68U8o66IyAm1jShQd3dpdDGU',
  },
  {
    name: 'Mr. David Chen', role: t('davidChenRole'),
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA54Q_OAh04yEqDA8Dn6e4PRDRaE8b5I5UFNqI9_88wT7-jt-H5hZ6hdhAwtvK3atuz-qSKFTyUqnZyxvccKd2xnkLNFjFKcb0IzKnvAcYjdEVFKKPpevTrLzdd7DYq88UT4yZkuoYT0fXpLAub-Zz7AyuDPVSXGpsM-jclj77zBBLGosUGi5MV-lo3Fv4Bx2wW5jUlhD582nyDKdgQyvhLLcceu5ywyPKVxg9zDW2Vvu3LhH4WZsyujmlc6GWz9ixXS9cy4zbwDmc',
  },
])
</script>

<template>
  <div>
    <PageHeader :eyebrow="t('ourLegacy')" :title="t('heroHeading')" :lede="t('heroBody')" />

    <!-- ── Mission + campus image ───────────────────────────────────────── -->
    <UiSection>
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <p class="text-eyebrow uppercase text-accent">{{ t('missionHeading') }}</p>
          <blockquote class="mt-5 border-l-2 border-accent pl-6 font-display text-title-1 leading-snug text-balance text-fg">
            {{ t('missionStatement') }}
          </blockquote>

          <dl class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8">
            <div v-for="m in milestones" :key="m.label">
              <dd class="font-display text-title-1 tabular-nums text-fg">{{ m.value }}</dd>
              <dt class="mt-1 text-label text-fg-muted">{{ m.label }}</dt>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-7">
          <div class="overflow-hidden rounded-xl border border-line bg-surface-3">
            <img
              :alt="t('schoolBuildingAlt')" loading="lazy"
              class="aspect-[4/3] w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMp9LDvCYXsTwMabcAj-RGu80v1wwonpIdkZUczQc0c8aA3QUWZAQogcTLDuWi7_UBwhnbLSs2UXhZhuXT5xGwCT_I8-x2oMwRtPaGhGRkN52DJPuPiKOHhz8BUY8k_dbCw6a5fjTl8lJW-xSiUaY_4hfwTYWgOHTSE4dAj4_84s75M87G3ZZMTRh96EEFae4bmVaNePhsqDJQpUBjshubKWcoWjTCHyq8Db_RuBVIFmwvCBm3UtrPw5sz_vbCklutUNV1opJmV9A"
            >
          </div>
        </div>
      </div>
    </UiSection>

    <!-- ── Head of school ───────────────────────────────────────────────── -->
    <UiSection tone="brand">
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <img
            :alt="t('principalPortraitAlt')" loading="lazy"
            class="aspect-[4/5] w-full rounded-xl border border-on-dark/15 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MkbYVvaR4-M9mu1dXbRLlmTkFirSsTbjso0vUNo7DF7IMRcOP6K6CcE2g8GwslL8_baVvNcOXApqTha7njPp1LoIrZIk6thIjzYNaa4gYOUNJeeL96ItK9nC-mu1qoRzIL_HBWGGG-W4dLJTsc5OIKH8VjLrc17FtcnspAcfnPz_KcpIfDPFoLR4JWQNa31Qkb1XS3NmulxEfkYoXOXcAflRXiZ7F5XruwQMUzy3MFubUUL9eP7as_nIFfuVzR9iRRqUP1JuK7Q"
          >
        </div>

        <figure class="flex flex-col justify-center lg:col-span-8">
          <p class="text-eyebrow uppercase text-accent">{{ t('fromTheHead') }}</p>
          <h2 class="mt-4 font-display text-title-1 text-on-dark">{{ t('principalMessageHeading') }}</h2>
          <blockquote class="mt-6 text-lead leading-relaxed text-pretty text-on-dark-muted">
            {{ t('principalQuote') }}
          </blockquote>
          <figcaption class="mt-8 border-t border-on-dark/15 pt-6">
            <p class="font-display text-title-4 text-on-dark">Dr. Julian Vance</p>
            <p class="mt-1 text-label text-accent">{{ t('principalTitle') }}</p>
          </figcaption>
        </figure>
      </div>
    </UiSection>

    <!-- ── Values ───────────────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead
        :eyebrow="t('coreValuesHeading')"
        :title="t('coreValuesSubheading')"
        size="display"
      />

      <div class="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
        <article v-for="v in values" :key="v.title" class="flex flex-col gap-4 bg-surface p-8">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-md bg-accent-tint text-on-accent-tint">
              <UiIcon :name="v.icon" :size="20" />
            </span>
            <span class="font-display text-title-4 tabular-nums text-fg-subtle">{{ v.n }}</span>
          </div>
          <h3 class="font-display text-title-3 text-fg">{{ v.title }}</h3>
          <p class="text-copy-sm text-fg-muted">{{ v.body }}</p>
        </article>
      </div>
    </UiSection>

    <!-- ── Faculty ──────────────────────────────────────────────────────── -->
    <UiSection tone="muted">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <UiSectionHead :eyebrow="t('facultyHeading')" :title="t('facultySubheading')" size="display" />
        <UiButton variant="outline" icon-trailing="arrow_forward" class="shrink-0">{{ t('viewAllFaculty') }}</UiButton>
      </div>

      <ul class="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        <li v-for="person in faculty" :key="person.name" class="group">
          <div class="overflow-hidden rounded-xl border border-line bg-surface-3">
            <img
              :alt="person.name" :src="person.img" loading="lazy"
              class="aspect-square w-full object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            >
          </div>
          <h3 class="mt-4 font-display text-title-4 text-fg">{{ person.name }}</h3>
          <p class="mt-1 text-label-sm uppercase tracking-wide text-fg-muted">{{ person.role }}</p>
        </li>
      </ul>
    </UiSection>

    <!-- ── Campus ───────────────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead :eyebrow="t('campusHeading')" :title="t('campusSubheading')" size="display" />

      <div class="mt-12 grid gap-6 md:grid-cols-3 md:grid-rows-2 lg:h-[560px]">
        <figure class="group relative overflow-hidden rounded-xl border border-line md:col-span-2 md:row-span-2">
          <img
            :alt="t('scienceLabAlt')" loading="lazy"
            class="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC35Uyj-FSQ743JWg3pJMgr9HBscXuUtkToHI0fiWNG65lH5RLj9eCUSPZvQhzdh-KmAqQjBv3iP5GrpzjSJMWSh3NYfz9D3h4-2bb-4nvvvGyierpU7cNNNbnNVAXVaINqFHlQ6SLPxYJtaLoUv6kB2SH3F_wJGihh0j3UPcy0-AEXuZnNSP9h4k1mT6cDkQ9HwVhv9MicloP4z3W0GppsaqqTFx5PCAjlSfkUpSOR0Ih9g__FsN33BfBjgdLHspXt1jPpFRwyzug"
          >
          <div class="scrim-b absolute inset-x-0 bottom-0 h-2/5" />
          <figcaption class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p class="text-eyebrow uppercase text-on-dark/70">{{ t('quantumWingSubheading') }}</p>
            <p class="mt-2 font-display text-title-2 text-on-dark">{{ t('quantumWingHeading') }}</p>
          </figcaption>
        </figure>

        <figure
          v-for="tile in [
            { alt: t('libraryAlt'), cta: t('exploreLibrary'), src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkeubaW0QwhaiARfLoNE8ZSCi8irTN1ck6SneSNyfAS_WyiRbRJClOOkwjeXaXz7JnNT_5-cDQZUDkbT8w-Xz-5i6dhlXYbwylt8I5kft5HbdvdoMYoNk2cxjFPKLXip2xwRWwZti46kFJYSecraaoR7pQzYwANGPoTNW9R3s6kLAxpRLQZ_uHnvujfheWgLriNoyiGLqOpwp6v6HcMVrzBsbydwtsmYF4RcnthFC20_ifuaAWHxtGI-olWZ39YB2MuxsH6g1zAMc' },
            { alt: t('sportsComplexAlt'), cta: t('viewComplex'), src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm98f9EmTAYusaV0c5xiBU-0KqfERBXEB_WTcFw8JUq9Ibj4u3-dm6239Tlxrm52VWlSMru7auQbBX-dnc5jV4BmZfF3mtJnWROrAbAs4ceVKHolpLU4t24Mf7tWMXZ1rl-baAoCxMd5VIreGkYWZjA1xfjxz4051yCphLNVsSbu-DR0TYx6XPRu44Ao_Mk7goo2gOOga9iHnVKLGc0oHxMetzDfU2F39ar7qEf7G26HycaSWHvBIy38bOJfQ6tFXdgebDPmxs8pI' },
          ]"
          :key="tile.alt"
          class="group relative overflow-hidden rounded-xl border border-line"
        >
          <img
            :alt="tile.alt" :src="tile.src" loading="lazy"
            class="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
          >
          <div class="scrim-b absolute inset-x-0 bottom-0 h-1/2" />
          <figcaption class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
            <span class="font-display text-title-4 text-on-dark">{{ tile.alt }}</span>
            <span class="inline-flex items-center gap-1 text-label text-on-dark/80 transition-transform duration-200 group-hover:translate-x-0.5">
              {{ tile.cta }}<UiIcon name="arrow_outward" :size="15" />
            </span>
          </figcaption>
        </figure>
      </div>
    </UiSection>
  </div>
</template>
