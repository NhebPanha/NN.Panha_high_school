<script setup lang="ts">
useHead({ title: 'About Us' })

const { t } = useI18n({
  en: {
    // Hero
    ourLegacy: 'Our Legacy',
    heroHeading: 'Shaping Minds Since 1992.',
    heroBody: 'Bright Future High School was founded on the principle that every student possesses unique potential. For over three decades, we have been at the forefront of educational excellence, blending rigorous academics with emotional intelligence to prepare the leaders of tomorrow.',
    missionHeading: 'Our Mission',
    missionStatement: '"To inspire a lifelong love of learning and empower students with the knowledge and character required to excel in a global society."',
    schoolBuildingAlt: 'School Building',

    // Principal
    principalPortraitAlt: 'Principal Portrait',
    principalMessageHeading: 'A Message from Dr. Julian Vance',
    principalQuote: '"Education is not merely the delivery of content, but the ignition of curiosity. At Bright Future, we believe in a holistic approach where academic rigor meets personal development. Our faculty is dedicated to mentoring each student, ensuring they find their voice and their purpose. I invite you to join our community where innovation is celebrated and integrity is the cornerstone of everything we do."',
    principalTitle: 'Principal & Executive Director',

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
  },
  km: {
    // Hero
    ourLegacy: 'កេរដំណែលរបស់យើង',
    heroHeading: 'រៀបចំចិត្តខួរក្បាលតាំងពីឆ្នាំ ១៩៩២។',
    heroBody: 'សាលាមធ្យមសិក្សា Bright Future ត្រូវបានបង្កើតឡើងដោយផ្អែកលើគោលការណ៍ថា សិស្សានុសិស្សរៀងរាល់នាក់សុទ្ធតែមានសក្តានុពលពិសេសជាខ្លួន។ ក្នុងរយៈពេលជាងបីទសវត្ស យើងបានឈរជាប់នៅជួរមុខនៃភាពល្អឯករបស់ការអប់រំ ដោយផ្សំភាពម៉ឺងម៉ាត់ខាងសិក្សាជាមួយប្រាជ្ញាអារម្មណ៍ ដើម្បីបណ្ដុះបណ្ដាលអ្នកដឹកនាំនៃអនាគត។',
    missionHeading: 'បេសកកម្មរបស់យើង',
    missionStatement: '«ដើម្បីបំផុសឆន្ទៈស្រឡាញ់ការសិក្សាពេញមួយជីវិត និងផ្តល់អំណាចដល់សិស្សតាមរយៈចំណេះដឹង និងចរិតលក្ខណៈដែលត្រូវការដើម្បីរីកចម្រើននៅក្នុងសង្គមពិភពលោក។»',
    schoolBuildingAlt: 'អគារសាលារៀន',

    // Principal
    principalPortraitAlt: 'រូបថតនាយកសាលា',
    principalMessageHeading: 'សារពី Dr. Julian Vance',
    principalQuote: '«ការអប់រំមិនមែនគ្រាន់តែជាការផ្ដល់មាតិកា ប៉ុន្តែជាការបំភ្លឺឱ្យចេះចង់ដឹងចង់សិក្សា។ នៅ Bright Future យើងជឿលើវិធីសាស្ត្រដ៏ជ្រុលជ្រប ដែលភាពម៉ឺងម៉ាត់ខាងសិក្សាជួបជាមួយការអភិវឌ្ឍន៍ផ្ទាល់ខ្លួន។ គ្រូអាចារ្យរបស់យើងប្ដេជ្ញាណែនាំសិស្សម្នាក់ៗ ដើម្បីឱ្យពួកគេរកឃើញសំឡេង និងគោលបំណងរបស់ខ្លួន។ ខ្ញុំអញ្ជើញអ្នកឱ្យចូលរួមក្នុងសហគមន៍របស់យើង ដែលនវានុវត្ដន៍ត្រូវបានប្រារព្ធ និងសុចរិតភាពជាគ្រឹះនៃអ្វីៗទាំងអស់ដែលយើងធ្វើ។»',
    principalTitle: 'នាយកសាលា និងនាយកប្រតិបត្តិ',

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
  },
})
</script>

<template>
  <div>
    <!-- Hero Section: History & Mission -->
    <section class="px-margin-desktop py-stack-lg max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
      <div class="space-y-stack-md">
        <span class="font-label-md text-label-md text-secondary uppercase tracking-widest">{{ t('ourLegacy') }}</span>
        <h1 class="font-display-lg text-display-lg text-primary leading-tight">{{ t('heroHeading') }}</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">{{ t('heroBody') }}</p>
        <div class="p-6 bg-surface-container-low rounded-xl border border-outline-variant/20">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-2">{{ t('missionHeading') }}</h3>
          <p class="font-body-md text-body-md text-on-surface-variant italic">{{ t('missionStatement') }}</p>
        </div>
      </div>
      <div class="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img :alt="t('schoolBuildingAlt')" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMp9LDvCYXsTwMabcAj-RGu80v1wwonpIdkZUczQc0c8aA3QUWZAQogcTLDuWi7_UBwhnbLSs2UXhZhuXT5xGwCT_I8-x2oMwRtPaGhGRkN52DJPuPiKOHhz8BUY8k_dbCw6a5fjTl8lJW-xSiUaY_4hfwTYWgOHTSE4dAj4_84s75M87G3ZZMTRh96EEFae4bmVaNePhsqDJQpUBjshubKWcoWjTCHyq8Db_RuBVIFmwvCBm3UtrPw5sz_vbCklutUNV1opJmV9A">
      </div>
    </section>

    <!-- Principal's Message -->
    <section class="bg-primary text-on-primary py-24 px-margin-desktop">
      <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div class="relative group">
          <div class="absolute -inset-4 bg-secondary/20 rounded-3xl blur-xl group-hover:bg-secondary/40 transition duration-500"></div>
          <img :alt="t('principalPortraitAlt')" class="relative rounded-2xl w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MkbYVvaR4-M9mu1dXbRLlmTkFirSsTbjso0vUNo7DF7IMRcOP6K6CcE2g8GwslL8_baVvNcOXApqTha7njPp1LoIrZIk6thIjzYNaa4gYOUNJeeL96ItK9nC-mu1qoRzIL_HBWGGG-W4dLJTsc5OIKH8VjLrc17FtcnspAcfnPz_KcpIfDPFoLR4JWQNa31Qkb1XS3NmulxEfkYoXOXcAflRXiZ7F5XruwQMUzy3MFubUUL9eP7as_nIFfuVzR9iRRqUP1JuK7Q">
        </div>
        <div class="md:col-span-2 space-y-stack-md">
          <span class="material-symbols-outlined text-secondary text-5xl">format_quote</span>
          <h2 class="font-headline-md text-headline-md font-bold">{{ t('principalMessageHeading') }}</h2>
          <p class="font-body-lg text-body-lg text-surface-variant leading-relaxed">
            {{ t('principalQuote') }}
          </p>
          <div class="pt-4">
            <p class="font-display-lg text-headline-sm">Dr. Julian Vance</p>
            <p class="font-label-md text-label-md text-secondary">{{ t('principalTitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Bento Grid -->
    <section class="px-margin-desktop py-24 max-w-container-max mx-auto">
      <div class="text-center mb-16 space-y-2">
        <h2 class="font-display-lg text-display-lg text-primary">{{ t('coreValuesHeading') }}</h2>
        <p class="text-on-surface-variant max-w-2xl mx-auto">{{ t('coreValuesSubheading') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <!-- Excellence -->
        <div class="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container">
            <span class="material-symbols-outlined">auto_awesome</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary">{{ t('excellenceHeading') }}</h3>
          <p class="text-on-surface-variant">{{ t('excellenceBody') }}</p>
        </div>
        <!-- Integrity -->
        <div class="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow bg-surface-container-low">
          <div class="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container">
            <span class="material-symbols-outlined">verified_user</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary">{{ t('integrityHeading') }}</h3>
          <p class="text-on-surface-variant">{{ t('integrityBody') }}</p>
        </div>
        <!-- Innovation -->
        <div class="glass-card p-8 rounded-3xl border border-outline-variant/30 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center text-on-tertiary-fixed">
            <span class="material-symbols-outlined">lightbulb</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary">{{ t('innovationHeading') }}</h3>
          <p class="text-on-surface-variant">{{ t('innovationBody') }}</p>
        </div>
      </div>
    </section>

    <!-- Faculty Grid -->
    <section class="bg-surface-container-lowest py-24 px-margin-desktop">
      <div class="max-w-container-max mx-auto">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="font-display-lg text-display-lg text-primary">{{ t('facultyHeading') }}</h2>
            <p class="text-on-surface-variant">{{ t('facultySubheading') }}</p>
          </div>
          <button class="hidden md:block text-primary font-semibold border-b-2 border-primary pb-1">{{ t('viewAllFaculty') }}</button>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          <!-- Faculty member 1 -->
          <div class="group">
            <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img alt="Sarah Jenkins" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWYWuqmafA-AJBYszhnP5BGr48OyFQBkIQTRNucgZBQM5fIK4_usq3btoME1yNpD2IlOs0NKPpgP8zMu-HLSKFVITnqH4nocZSYU6AreTtcGKodjFLceOxvVOuuMknofIZ5T2Ex0L7O7tgFNw9kEcMbSLYeWMHYEbON7mpuhxYz30dRefeHUUJXWUphFBB8DX0agWRN2tdJ9qKnaZlnvykQR0hNuOiB_v-81wWZ3DBvWGvyjDKmZc5tI6gU9GZ3af3OqwrNI0Kvo">
            </div>
            <h4 class="font-headline-sm text-headline-sm text-primary">Dr. Sarah Jenkins</h4>
            <p class="text-on-surface-variant text-label-md uppercase tracking-wider">{{ t('sarahJenkinsRole') }}</p>
          </div>
          <!-- Faculty member 2 -->
          <div class="group">
            <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img alt="Marcus Thorne" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmwEG_aIrPbRBvlVVKxtk2R2PD3zdaz_aDfJao3V4SS5Xwl2noZoUMRPlTNCX743Ot_2wa3PWhIriWMB4Rv0X66elFD4RuANArRYjUOpw_3r9wbHMeUeLngCNiD8DNb4SmzsIWj4ANGctWSsu_qK4Z6-aiKLhBD2g9bpaByG6wSnRwRl7GVwZ0zHoVUFhk-rYzVyGeJ8ZbrTGeWv988iw6vjaSHm3af4GG8YFBb5yDi7zHukR-GrBIwthJwMCRP2oQGXivd3l2EAU">
            </div>
            <h4 class="font-headline-sm text-headline-sm text-primary">Mr. Marcus Thorne</h4>
            <p class="text-on-surface-variant text-label-md uppercase tracking-wider">{{ t('marcusThorneRole') }}</p>
          </div>
          <!-- Faculty member 3 -->
          <div class="group">
            <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img alt="Elena Rodriguez" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvZGeKB5rlnmT8l-ZpoQZBjOLcoSBptO5RVDZzbNkiAogXiuyh9oRLXztOcIzfv2IvV0_UIkDSrGqJN3YC_Jj3iKukdfguxRbX98_Opb8F9-FPmGs1n916N0-U0EoIQumU2WtCVdwwKPNA1AzKjy3ViaLqoEeMTQ4th6qH_fMtZRJjL5RcVl9piw7MzoY1h_B-6-XuYS0_V76aQmD5YW2of_s4rQ3ebzqCussEMk3oeyZRDDaKgZE68U8o66IyAm1jShQd3dpdDGU">
            </div>
            <h4 class="font-headline-sm text-headline-sm text-primary">Ms. Elena Rodriguez</h4>
            <p class="text-on-surface-variant text-label-md uppercase tracking-wider">{{ t('elenaRodriguezRole') }}</p>
          </div>
          <!-- Faculty member 4 -->
          <div class="group">
            <div class="aspect-square rounded-2xl overflow-hidden mb-4 relative">
              <img alt="David Chen" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA54Q_OAh04yEqDA8Dn6e4PRDRaE8b5I5UFNqI9_88wT7-jt-H5hZ6hdhAwtvK3atuz-qSKFTyUqnZyxvccKd2xnkLNFjFKcb0IzKnvAcYjdEVFKKPpevTrLzdd7DYq88UT4yZkuoYT0fXpLAub-Zz7AyuDPVSXGpsM-jclj77zBBLGosUGi5MV-lo3Fv4Bx2wW5jUlhD582nyDKdgQyvhLLcceu5ywyPKVxg9zDW2Vvu3LhH4WZsyujmlc6GWz9ixXS9cy4zbwDmc">
            </div>
            <h4 class="font-headline-sm text-headline-sm text-primary">Mr. David Chen</h4>
            <p class="text-on-surface-variant text-label-md uppercase tracking-wider">{{ t('davidChenRole') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Gallery -->
    <section class="px-margin-desktop py-24 max-w-container-max mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-display-lg text-display-lg text-primary">{{ t('campusHeading') }}</h2>
        <p class="text-on-surface-variant">{{ t('campusSubheading') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter h-[600px]">
        <div class="md:col-span-2 relative group rounded-3xl overflow-hidden">
          <img :alt="t('scienceLabAlt')" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC35Uyj-FSQ743JWg3pJMgr9HBscXuUtkToHI0fiWNG65lH5RLj9eCUSPZvQhzdh-KmAqQjBv3iP5GrpzjSJMWSh3NYfz9D3h4-2bb-4nvvvGyierpU7cNNNbnNVAXVaINqFHlQ6SLPxYJtaLoUv6kB2SH3F_wJGihh0j3UPcy0-AEXuZnNSP9h4k1mT6cDkQ9HwVhv9MicloP4z3W0GppsaqqTFx5PCAjlSfkUpSOR0Ih9g__FsN33BfBjgdLHspXt1jPpFRwyzug">
          <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h4 class="text-2xl font-bold">{{ t('quantumWingHeading') }}</h4>
            <p class="text-sm opacity-80 uppercase tracking-widest">{{ t('quantumWingSubheading') }}</p>
          </div>
        </div>
        <div class="grid grid-rows-2 gap-gutter">
          <div class="relative group rounded-3xl overflow-hidden">
            <img :alt="t('libraryAlt')" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkeubaW0QwhaiARfLoNE8ZSCi8irTN1ck6SneSNyfAS_WyiRbRJClOOkwjeXaXz7JnNT_5-cDQZUDkbT8w-Xz-5i6dhlXYbwylt8I5kft5HbdvdoMYoNk2cxjFPKLXip2xwRWwZti46kFJYSecraaoR7pQzYwANGPoTNW9R3s6kLAxpRLQZ_uHnvujfheWgLriNoyiGLqOpwp6v6HcMVrzBsbydwtsmYF4RcnthFC20_ifuaAWHxtGI-olWZ39YB2MuxsH6g1zAMc">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="text-white font-bold border-2 border-white px-6 py-2 rounded-full">{{ t('exploreLibrary') }}</span>
            </div>
          </div>
          <div class="relative group rounded-3xl overflow-hidden">
            <img :alt="t('sportsComplexAlt')" class="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm98f9EmTAYusaV0c5xiBU-0KqfERBXEB_WTcFw8JUq9Ibj4u3-dm6239Tlxrm52VWlSMru7auQbBX-dnc5jV4BmZfF3mtJnWROrAbAs4ceVKHolpLU4t24Mf7tWMXZ1rl-baAoCxMd5VIreGkYWZjA1xfjxz4051yCphLNVsSbu-DR0TYx6XPRu44Ao_Mk7goo2gOOga9iHnVKLGc0oHxMetzDfU2F39ar7qEf7G26HycaSWHvBIy38bOJfQ6tFXdgebDPmxs8pI">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="text-white font-bold border-2 border-white px-6 py-2 rounded-full">{{ t('viewComplex') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
