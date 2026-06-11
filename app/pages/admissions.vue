<script setup lang="ts">
useHead({ title: 'Admissions' })

const { t } = useI18n({
  en: {
    // Hero
    heroHeading: 'Shape Your Future',
    heroSubheading: 'Join a community where innovation meets excellence. Our admissions process is designed to find students who are ready to lead and excel.',

    // Enrollment steps section
    enrollmentSectionHeading: 'Your Journey Starts Here',
    enrollmentSectionSubheading: 'A simple, transparent four-step process to enrollment.',

    // Step 1
    step1Title: 'Online Application',
    step1Desc: 'Complete the initial interest form and provide basic student details through our secure portal.',

    // Step 2
    step2Title: 'Document Review',
    step2Desc: 'Upload transcripts, recommendation letters, and identification for our admissions board to review.',

    // Step 3
    step3Title: 'Personal Interview',
    step3Desc: 'Meet with our faculty to discuss academic goals and see if BFHS is the right fit for your ambitions.',

    // Step 4
    step4Title: 'Final Enrollment',
    step4Desc: 'Receive your acceptance, pay the enrollment fee, and get your student orientation package.',

    // Requirements
    requirementsHeading: 'Requirements',
    req1Title: 'Official Transcripts',
    req1Desc: 'Past 3 years of academic performance records.',
    req2Title: 'Standardized Test Scores',
    req2Desc: 'Recent SAT, ACT, or equivalent international scores.',
    req3Title: 'Two Recommendation Letters',
    req3Desc: 'From a core subject teacher and a counselor.',
    req4Title: 'Personal Statement',
    req4Desc: 'A 500-word essay on your academic journey.',

    // Tuition table
    tuitionHeading: 'Tuition & Fees (2024-25)',
    tuitionColFeeDesc: 'Fee Description',
    tuitionColAmount: 'Amount (USD)',
    tuitionRow1: 'Application Fee (Non-refundable)',
    tuitionRow2: 'Annual Tuition (Standard)',
    tuitionRow3: 'Technology & Resource Fee',
    tuitionRow4: 'Extracurricular & Athletics',
    tuitionRowTotal: 'Total Estimated Annual Cost',
    tuitionNote: 'Note: Financial aid and scholarships are available for eligible candidates.',

    // Application form
    applyOnlineHeading: 'Apply Online',
    formLabelFirstName: 'Student First Name',
    formPlaceholderFirstName: 'John',
    formLabelLastName: 'Student Last Name',
    formPlaceholderLastName: 'Doe',
    formLabelEmail: 'Guardian Email Address',
    formPlaceholderEmail: 'guardian@example.com',
    formLabelGrade: 'Grade Applying For',
    gradeOption9: 'Grade 9',
    gradeOption10: 'Grade 10',
    gradeOption11: 'Grade 11',
    gradeOption12: 'Grade 12',
    formLabelComments: 'Additional Comments',
    formPlaceholderComments: "Tell us anything else you'd like us to know...",
    formSubmitButton: 'Submit Application',
    alertSubmitSuccess: 'Application submitted successfully!',

    // CTA sidebar
    enrollmentOpenBadge: 'ENROLLMENT OPEN',
    ctaHeading: 'Start Your Academic Excellence Journey.',
    ctaBody: 'Our application takes less than 10 minutes to complete. Start today and our admissions team will contact you within 48 hours for the next steps.',
    applicantStat: '1,200+ Applicants',
    applicantStatSub: 'Last year alone',

    // FAQ
    faqHeading: 'Frequently Asked Questions',
    faq0Question: 'When is the application deadline for 2025?',
    faq0Answer: 'The priority application deadline for the Fall 2025 semester is March 15th, 2025. Rolling admissions will continue thereafter until all seats are filled.',
    faq1Question: 'Are there academic scholarships available?',
    faq1Answer: 'Yes, Bright Future High School offers Merit Scholarships for top-performing students and Financial Need grants. Over 30% of our student body receives some form of financial assistance.',
    faq2Question: 'What is the average class size at BFHS?',
    faq2Answer: 'To maintain academic excellence, we maintain a student-to-teacher ratio of 12:1. The average class size is approximately 18 students.',
  },
  km: {
    // Hero
    heroHeading: 'កំណត់អនាគតរបស់អ្នក',
    heroSubheading: 'ចូលរួមក្នុងសហគមន៍ដែលការច្នៃប្រឌិតជួបនឹងភាពល្អឥតខ្ចោះ។ ដំណើរការចូលរៀនរបស់យើងត្រូវបានរចនាឡើងដើម្បីស្វែងរកសិស្សដែលត្រៀមខ្លួនដឹកនាំ និងលេចធ្លោ។',

    // Enrollment steps section
    enrollmentSectionHeading: 'ការធ្វើដំណើររបស់អ្នកចាប់ផ្ដើមនៅទីនេះ',
    enrollmentSectionSubheading: 'ដំណើរការចុះឈ្មោះចូលរៀនបួនជំហានដ៏សាមញ្ញ និងច្បាស់លាស់។',

    // Step 1
    step1Title: 'ដាក់ពាក្យសុំតាមអ៊ីនធឺណិត',
    step1Desc: 'បំពេញទម្រង់បែបបទចំណាប់អារម្មណ៍ដំបូង និងផ្ដល់ព័ត៌មានមូលដ្ឋានរបស់សិស្សតាមរយៈវិបផតថលដែលមានសុវត្ថិភាពរបស់យើង។',

    // Step 2
    step2Title: 'ពិនិត្យឯកសារ',
    step2Desc: 'បញ្ចូលវិញ្ញាបនបត្រ លិខិតណែនាំ និងឯកសារអត្តសញ្ញាណ ដើម្បីឱ្យក្រុមប្រឹក្សាចូលរៀនរបស់យើងធ្វើការពិនិត្យ។',

    // Step 3
    step3Title: 'សម្ភាសន៍ផ្ទាល់ខ្លួន',
    step3Desc: 'ជួបប្រជុំជាមួយគ្រូបង្រៀនរបស់យើងដើម្បីពិភាក្សាអំពីគោលដៅសិក្សា និងពិនិត្យមើលថាតើ BFHS សមស្របនឹងបំណងប្រាថ្នារបស់អ្នកដែរឬទេ។',

    // Step 4
    step4Title: 'ចុះឈ្មោះចូលរៀនជាស្ថាពរ',
    step4Desc: 'ទទួលការអនុម័ត បង់ថ្លៃចុះឈ្មោះ និងទទួលកញ្ចប់ណែនាំសិស្សថ្មីរបស់អ្នក។',

    // Requirements
    requirementsHeading: 'លក្ខខណ្ឌតម្រូវ',
    req1Title: 'វិញ្ញាបនបត្រផ្លូវការ',
    req1Desc: 'កំណត់ត្រាលទ្ធផលសិក្សា ៣ ឆ្នាំកន្លងមក។',
    req2Title: 'លទ្ធផលការប្រឡងស្ដង់ដារ',
    req2Desc: 'ពិន្ទុ SAT, ACT ឬសមមូលអន្តរជាតិ ថ្មីៗ។',
    req3Title: 'លិខិតណែនាំពីរ',
    req3Desc: 'ពីគ្រូបង្រៀនមុខវិជ្ជាចម្បង និងអ្នកប្រឹក្សាអប់រំ។',
    req4Title: 'សេចក្ដីថ្លែងការផ្ទាល់ខ្លួន',
    req4Desc: 'អត្ថបទ ៥០០ ពាក្យអំពីការធ្វើដំណើររបស់អ្នកផ្នែកសិក្សា។',

    // Tuition table
    tuitionHeading: 'ថ្លៃសិក្សា និងកម្រៃ (២០២៤-២៥)',
    tuitionColFeeDesc: 'ការពិពណ៌នាអំពីថ្លៃ',
    tuitionColAmount: 'ចំនួនទឹកប្រាក់ (USD)',
    tuitionRow1: 'ថ្លៃដាក់ពាក្យ (មិនអាចសង្វឹងវិញ)',
    tuitionRow2: 'ថ្លៃសិក្សាប្រចាំឆ្នាំ (ស្ដង់ដារ)',
    tuitionRow3: 'ថ្លៃបច្ចេកវិទ្យា និងធនធាន',
    tuitionRow4: 'សកម្មភាពក្រៅម៉ោងរៀន និងកីឡា',
    tuitionRowTotal: 'តម្លៃប៉ាន់ស្មានសរុបប្រចាំឆ្នាំ',
    tuitionNote: 'ចំណាំ: ជំនួយហិរញ្ញវត្ថុ និងអាហារូបករណ៍មានសម្រាប់បេក្ខជនដែលមានលក្ខណៈសម្បត្តិ។',

    // Application form
    applyOnlineHeading: 'ដាក់ពាក្យតាមអ៊ីនធឺណិត',
    formLabelFirstName: 'នាមខ្លួនរបស់សិស្ស',
    formPlaceholderFirstName: 'សុខា',
    formLabelLastName: 'នាមត្រកូលរបស់សិស្ស',
    formPlaceholderLastName: 'ចាន់',
    formLabelEmail: 'អ៊ីមែលរបស់អាណាព្យាបាល',
    formPlaceholderEmail: 'guardian@example.com',
    formLabelGrade: 'ថ្នាក់ដែលសុំចូលរៀន',
    gradeOption9: 'ថ្នាក់ទី ៩',
    gradeOption10: 'ថ្នាក់ទី ១០',
    gradeOption11: 'ថ្នាក់ទី ១១',
    gradeOption12: 'ថ្នាក់ទី ១២',
    formLabelComments: 'មតិយោបល់បន្ថែម',
    formPlaceholderComments: 'ប្រាប់យើងអំពីអ្វីផ្សេងទៀតដែលអ្នកចង់ឱ្យយើងដឹង...',
    formSubmitButton: 'ដាក់ពាក្យសុំ',
    alertSubmitSuccess: 'ពាក្យសុំត្រូវបានដាក់ជូនដោយជោគជ័យ!',

    // CTA sidebar
    enrollmentOpenBadge: 'ការចុះឈ្មោះបើកហើយ',
    ctaHeading: 'ចាប់ផ្ដើមដំណើរទៅរកភាពល្អឥតខ្ចោះផ្នែកសិក្សា។',
    ctaBody: 'ពាក្យសុំរបស់យើងចំណាយពេលតិចជាង ១០ នាទី។ ចាប់ផ្ដើមថ្ងៃនេះ ហើយក្រុមការងារចូលរៀនរបស់យើងនឹងទាក់ទងអ្នកក្នុងរយៈពេល ៤៨ ម៉ោង។',
    applicantStat: 'ជាង ១,២០០ នាក់ដាក់ពាក្យ',
    applicantStatSub: 'នៅឆ្នាំមុនតែម្នាក់ឯង',

    // FAQ
    faqHeading: 'សំណួរដែលសួរជាញឹកញាប់',
    faq0Question: 'តើកាលបរិច្ឆេទផុតកំណត់ដាក់ពាក្យសម្រាប់ឆ្នាំ ២០២៥ គឺនៅពេលណា?',
    faq0Answer: 'កាលបរិច្ឆេទផុតកំណត់ដាក់ពាក្យអាទិភាពសម្រាប់ឆ្នាំសិក្សា Fall 2025 គឺថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៥។ ការទទួលពាក្យបន្តទៀតរហូតដល់កន្លែងសិក្សាពេញ។',
    faq1Question: 'តើមានអាហារូបករណ៍សិក្សាទេ?',
    faq1Answer: 'បាទ/ចាស មហាវិទ្យាល័យ Bright Future High School ផ្ដល់អាហារូបករណ៍ Merit សម្រាប់សិស្សដែលសម្រេចបានសមិទ្ធិផលខ្ពស់ និងជំនួយហិរញ្ញវត្ថុ។ ជាង ៣០% នៃសិស្សរបស់យើងទទួលបានជំនួយហិរញ្ញវត្ថុក្នុងទម្រង់ណាមួយ។',
    faq2Question: 'តើទំហំថ្នាក់រៀនជាមធ្យមនៅ BFHS គឺប៉ុន្មាន?',
    faq2Answer: 'ដើម្បីរក្សាភាពល្អឥតខ្ចោះផ្នែកសិក្សា យើងរក្សាសមាមាត្រសិស្ស-គ្រូ ១២:១។ ទំហំថ្នាក់រៀនជាមធ្យមមានប្រហែល ១៨ នាក់។',
  },
})

// FAQ accordion state
const faqOpen = ref<number | null>(null)

function toggleFaq(index: number) {
  faqOpen.value = faqOpen.value === index ? null : index
}

// Application form submission
function handleApplicationSubmit() {
  alert(t('alertSubmitSuccess'))
}

// Reactive computed data arrays
const enrollmentSteps = computed(() => [
  { icon: 'edit_note', title: t('step1Title'), desc: t('step1Desc') },
  { icon: 'cloud_upload', title: t('step2Title'), desc: t('step2Desc') },
  { icon: 'groups', title: t('step3Title'), desc: t('step3Desc') },
  { icon: 'assignment_turned_in', title: t('step4Title'), desc: t('step4Desc') },
])

const requirements = computed(() => [
  { title: t('req1Title'), desc: t('req1Desc') },
  { title: t('req2Title'), desc: t('req2Desc') },
  { title: t('req3Title'), desc: t('req3Desc') },
  { title: t('req4Title'), desc: t('req4Desc') },
])

const tuitionRows = computed(() => [
  { label: t('tuitionRow1'), amount: '$150', total: false },
  { label: t('tuitionRow2'), amount: '$22,500', total: false },
  { label: t('tuitionRow3'), amount: '$1,200', total: false },
  { label: t('tuitionRow4'), amount: '$850', total: false },
  { label: t('tuitionRowTotal'), amount: '$24,700', total: true },
])

const faqs = computed(() => [
  { question: t('faq0Question'), answer: t('faq0Answer') },
  { question: t('faq1Question'), answer: t('faq1Answer') },
  { question: t('faq2Question'), answer: t('faq2Answer') },
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <header class="relative w-full h-[512px] flex items-center justify-center overflow-hidden mb-stack-lg">
      <div class="absolute inset-0 bg-primary-container z-0">
        <img
          class="w-full h-full object-cover opacity-40 mix-blend-overlay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8aGPN2n5Qomd3oeIfZEQZrli6H1C9voyhWnpMzGAn_o8RuhNaM1G6om1tH_F-9qrkgx62fq95KEHbYCHgW9-U1GtsD7S67QAB-yAnEVLWsACjhK2cAwBKPlpg02X5nYA6W3LU4ahyDfqXiSzAyexicK_QkNZ_Inq5CennjiC9_DrH6Fx6cfzwXBaceo0RXhF65iUi7IhoZ3BLICngEW5VqBTYBeWlVxA7K8XZV1Rh8JbE8Img5FlCM-GtGY6d7HGBDmgqMXHa2g"
          alt="A sunlit, wide-angle shot of a prestigious modern high school campus during golden hour"
        >
      </div>
      <div class="relative z-10 text-center px-margin-mobile">
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-sm">{{ t('heroHeading') }}</h1>
        <p class="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto">{{ t('heroSubheading') }}</p>
      </div>
    </header>

    <!-- Multi-step Enrollment Process -->
    <section class="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
      <div class="text-center mb-stack-lg">
        <h2 class="font-headline-md text-headline-md text-primary">{{ t('enrollmentSectionHeading') }}</h2>
        <p class="text-on-surface-variant mt-2">{{ t('enrollmentSectionSubheading') }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div
          v-for="(step, index) in enrollmentSteps"
          :key="index"
          class="glass-card p-stack-md rounded-[2rem] shadow-sm relative group hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-stack-md font-bold text-xl">{{ index + 1 }}</div>
          <span class="material-symbols-outlined text-secondary text-4xl mb-stack-sm">{{ step.icon }}</span>
          <h3 class="font-headline-sm text-headline-sm text-primary mb-stack-sm">{{ step.title }}</h3>
          <p class="text-body-sm text-on-surface-variant">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Requirements & Tuition Bento Grid -->
    <section class="bg-surface-container-low py-stack-lg">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <!-- Requirements Checklist -->
          <div class="lg:col-span-1 bg-white p-stack-md rounded-[2rem] shadow-sm">
            <h3 class="font-headline-md text-headline-md text-primary mb-stack-md">{{ t('requirementsHeading') }}</h3>
            <ul class="space-y-4">
              <li
                v-for="(req, index) in requirements"
                :key="index"
                class="flex items-start gap-stack-sm"
              >
                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <p class="font-bold text-on-surface">{{ req.title }}</p>
                  <p class="text-body-sm text-on-surface-variant">{{ req.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- Tuition Table -->
          <div class="lg:col-span-2 bg-white p-stack-md rounded-[2rem] shadow-sm flex flex-col">
            <h3 class="font-headline-md text-headline-md text-primary mb-stack-md">{{ t('tuitionHeading') }}</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="border-b border-outline-variant">
                    <th class="py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{{ t('tuitionColFeeDesc') }}</th>
                    <th class="py-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">{{ t('tuitionColAmount') }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-outline-variant/30">
                  <tr
                    v-for="(row, index) in tuitionRows"
                    :key="index"
                    :class="{ 'bg-surface-container-highest/20': row.total }"
                  >
                    <td class="py-4 font-medium" :class="row.total ? 'text-primary font-bold' : 'text-on-surface'">{{ row.label }}</td>
                    <td class="py-4 text-right" :class="row.total ? 'text-primary font-bold' : 'text-on-surface'">{{ row.amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-auto pt-stack-md text-body-sm text-on-surface-variant italic">{{ t('tuitionNote') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Online Application Form -->
    <section class="max-w-container-max mx-auto px-margin-desktop py-stack-lg" id="apply-now">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div class="order-2 lg:order-1">
          <div class="glass-card p-10 rounded-[2rem] shadow-lg border border-white">
            <h2 class="font-headline-md text-headline-md text-primary mb-stack-md">{{ t('applyOnlineHeading') }}</h2>
            <form class="space-y-stack-md" @submit.prevent="handleApplicationSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div class="flex flex-col gap-unit">
                  <label class="text-label-md text-on-surface-variant ml-2">{{ t('formLabelFirstName') }}</label>
                  <input class="bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all" :placeholder="t('formPlaceholderFirstName')" required type="text">
                </div>
                <div class="flex flex-col gap-unit">
                  <label class="text-label-md text-on-surface-variant ml-2">{{ t('formLabelLastName') }}</label>
                  <input class="bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all" :placeholder="t('formPlaceholderLastName')" required type="text">
                </div>
              </div>
              <div class="flex flex-col gap-unit">
                <label class="text-label-md text-on-surface-variant ml-2">{{ t('formLabelEmail') }}</label>
                <input class="bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all" :placeholder="t('formPlaceholderEmail')" required type="email">
              </div>
              <div class="flex flex-col gap-unit">
                <label class="text-label-md text-on-surface-variant ml-2">{{ t('formLabelGrade') }}</label>
                <select class="bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all">
                  <option>{{ t('gradeOption9') }}</option>
                  <option>{{ t('gradeOption10') }}</option>
                  <option>{{ t('gradeOption11') }}</option>
                  <option>{{ t('gradeOption12') }}</option>
                </select>
              </div>
              <div class="flex flex-col gap-unit">
                <label class="text-label-md text-on-surface-variant ml-2">{{ t('formLabelComments') }}</label>
                <textarea class="bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all" :placeholder="t('formPlaceholderComments')" rows="3"></textarea>
              </div>
              <button class="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-body-lg hover:bg-secondary transition-colors shadow-md" type="submit">{{ t('formSubmitButton') }}</button>
            </form>
          </div>
        </div>
        <div class="order-1 lg:order-2 space-y-stack-md">
          <span class="bg-secondary/10 text-secondary px-4 py-1 rounded-full font-bold text-label-sm">{{ t('enrollmentOpenBadge') }}</span>
          <h2 class="font-display-lg text-headline-md md:text-display-lg text-primary leading-tight">{{ t('ctaHeading') }}</h2>
          <p class="text-body-lg text-on-surface-variant">{{ t('ctaBody') }}</p>
          <div class="flex gap-stack-md">
            <div class="flex -space-x-3 overflow-hidden">
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6aeRPTJ264M_w0NCA3gRkT_ipgO0xxA2k3oP-s9V2ZeEMHDKMLB6a82LFS1FFdmZwpRtd6aWgI5zoLLuDmpoHbFz3zIN2MwJWQSmelN2e-KoEPI4PJhYVP1N_4QBAMQ4l8uSnsJohfsIzfJ3F1-YapDx-4RpN3AlJzPOMhbXp17IX8dIj7pbEVFIp-3Q3uPY8k2vVWSUjT9COk2pqFmBt6DsFTnt6QkzJL44x0aD6h7NbGdJYvQx1RXtNEIJohiiRTmYHqqhoyTQ"
                alt="Smiling young female student"
              >
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc6iYIuKWNPbMHtmFjuT0M-LPai0SltP0RIDwLUSQH9GIW-2rgsTlEbMuERDt_28KY-eTu-z8cQgiyh06CKujnYf8DPwMJZZ84rLQ8Zz1ejb2OuJ3DJ7UaoTNXfpdwHmpOqOZ3-Gafepo70v_LJ0gtIGDMt-U9nIFgaIxOJr3UzOsyvCqiyzGo38zHSQMH4NZfLLReMgKDYvdT4w5h2eymck8gxOAb1yZaZfBDt0Xz5-GTaavBhrMAl02p3vJmffBHEBBnOj9Fmh8"
                alt="Diverse group of high school students laughing together"
              >
              <img
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBL-0u3587nHsUpGZ7mAZn5mmirvECxFtcBvUUkYeFPkVa6duhPpf-06KBnQsuz8l7t5sPQCwX5WNCs-QkxuP2BkgVCZ9faYgb3yHMAOlI_JbIAFrgN057sKv_6ji36gNYkTmrMf7MfPD_77eKMdpIxStXVqDPzQzAyjssoUlh5_X5X_HM9UsMFAwrkGdE13A7A2-Y_-8wRw6OTJaJpQEah6YU5-I76Y89jyUEYJA66QHH5ag1fjQzdy1p2FkGc8RmsOWcKeTyZEo"
                alt="Confident male student holding a laptop"
              >
            </div>
            <div class="text-sm font-medium text-on-surface-variant">
              <span class="text-primary font-bold block">{{ t('applicantStat') }}</span>
              {{ t('applicantStatSub') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-surface-container-high py-stack-lg">
      <div class="max-w-3xl mx-auto px-margin-desktop">
        <div class="text-center mb-stack-lg">
          <h2 class="font-headline-md text-headline-md text-primary">{{ t('faqHeading') }}</h2>
        </div>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-sm cursor-pointer"
            :class="{ 'active': faqOpen === index }"
            @click="toggleFaq(index)"
          >
            <div class="flex justify-between items-center">
              <h4 class="font-bold text-on-surface">{{ faq.question }}</h4>
              <span
                class="material-symbols-outlined transition-transform"
                :class="{ 'rotate-180': faqOpen === index }"
              >expand_more</span>
            </div>
            <div v-show="faqOpen === index" class="mt-4 text-on-surface-variant">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
