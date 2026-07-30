<script setup lang="ts">
useHead({ title: 'Admissions' })

const { t } = useI18n({
  en: {
    // Hero
    heroHeading: 'Shape Your Future',
    heroSubheading: 'Join a community where innovation meets excellence. Our admissions process is designed to find students who are ready to lead and excel.',
    heroEyebrow: 'Admissions · Fall 2025',
    heroCta: 'Start your application',
    heroSecondary: 'Tuition & fees',

    // Enrollment steps section
    enrollmentSectionHeading: 'Your Journey Starts Here',
    enrollmentSectionSubheading: 'A simple, transparent four-step process to enrollment.',

    step1Title: 'Online Application',
    step1Desc: 'Complete the initial interest form and provide basic student details through our secure portal.',
    step2Title: 'Document Review',
    step2Desc: 'Upload transcripts, recommendation letters, and identification for our admissions board to review.',
    step3Title: 'Personal Interview',
    step3Desc: 'Meet with our faculty to discuss academic goals and see if BFHS is the right fit for your ambitions.',
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
    formSubmitting: 'Submitting…',
    formSubmitError: 'Submission failed. Please try again.',
    referenceLabel: 'Your reference:',

    // CTA sidebar
    enrollmentOpenBadge: 'Enrollment open',
    ctaHeading: 'Start Your Academic Excellence Journey.',
    ctaBody: 'Our application takes less than 10 minutes to complete. Start today and our admissions team will contact you within 48 hours for the next steps.',
    applicantStat: '1,200+ Applicants',
    applicantStatSub: 'Last year alone',
    deadline: 'Priority deadline', deadlineValue: '15 March 2025',
    aidLabel: 'Receive financial aid', aidValue: '30% of students',

    // FAQ
    faqHeading: 'Frequently Asked Questions',
    faqLede: 'Still deciding? These are the questions families ask us most.',
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
    heroEyebrow: 'ការចូលរៀន · Fall 2025',
    heroCta: 'ចាប់ផ្ដើមដាក់ពាក្យ',
    heroSecondary: 'ថ្លៃសិក្សា',

    // Enrollment steps section
    enrollmentSectionHeading: 'ការធ្វើដំណើររបស់អ្នកចាប់ផ្ដើមនៅទីនេះ',
    enrollmentSectionSubheading: 'ដំណើរការចុះឈ្មោះចូលរៀនបួនជំហានដ៏សាមញ្ញ និងច្បាស់លាស់។',

    step1Title: 'ដាក់ពាក្យសុំតាមអ៊ីនធឺណិត',
    step1Desc: 'បំពេញទម្រង់បែបបទចំណាប់អារម្មណ៍ដំបូង និងផ្ដល់ព័ត៌មានមូលដ្ឋានរបស់សិស្សតាមរយៈវិបផតថលដែលមានសុវត្ថិភាពរបស់យើង។',
    step2Title: 'ពិនិត្យឯកសារ',
    step2Desc: 'បញ្ចូលវិញ្ញាបនបត្រ លិខិតណែនាំ និងឯកសារអត្តសញ្ញាណ ដើម្បីឱ្យក្រុមប្រឹក្សាចូលរៀនរបស់យើងធ្វើការពិនិត្យ។',
    step3Title: 'សម្ភាសន៍ផ្ទាល់ខ្លួន',
    step3Desc: 'ជួបប្រជុំជាមួយគ្រូបង្រៀនរបស់យើងដើម្បីពិភាក្សាអំពីគោលដៅសិក្សា និងពិនិត្យមើលថាតើ BFHS សមស្របនឹងបំណងប្រាថ្នារបស់អ្នកដែរឬទេ។',
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
    formSubmitting: 'កំពុងដាក់ស្នើ…',
    formSubmitError: 'ការដាក់ស្នើបរាជ័យ។ សូមព្យាយាមម្ដងទៀត។',
    referenceLabel: 'លេខយោងរបស់អ្នក៖',

    // CTA sidebar
    enrollmentOpenBadge: 'ការចុះឈ្មោះបើកហើយ',
    ctaHeading: 'ចាប់ផ្ដើមដំណើរទៅរកភាពល្អឥតខ្ចោះផ្នែកសិក្សា។',
    ctaBody: 'ពាក្យសុំរបស់យើងចំណាយពេលតិចជាង ១០ នាទី។ ចាប់ផ្ដើមថ្ងៃនេះ ហើយក្រុមការងារចូលរៀនរបស់យើងនឹងទាក់ទងអ្នកក្នុងរយៈពេល ៤៨ ម៉ោង។',
    applicantStat: 'ជាង ១,២០០ នាក់ដាក់ពាក្យ',
    applicantStatSub: 'នៅឆ្នាំមុនតែម្នាក់ឯង',
    deadline: 'កាលកំណត់អាទិភាព', deadlineValue: '១៥ មីនា ២០២៥',
    aidLabel: 'ទទួលជំនួយហិរញ្ញវត្ថុ', aidValue: '៣០% នៃសិស្ស',

    // FAQ
    faqHeading: 'សំណួរដែលសួរជាញឹកញាប់',
    faqLede: 'នៅសម្រេចចិត្តមិនទាន់? នេះជាសំណួរដែលគ្រួសារសួរយើងញឹកញាប់បំផុត។',
    faq0Question: 'តើកាលបរិច្ឆេទផុតកំណត់ដាក់ពាក្យសម្រាប់ឆ្នាំ ២០២៥ គឺនៅពេលណា?',
    faq0Answer: 'កាលបរិច្ឆេទផុតកំណត់ដាក់ពាក្យអាទិភាពសម្រាប់ឆ្នាំសិក្សា Fall 2025 គឺថ្ងៃទី ១៥ ខែមីនា ឆ្នាំ ២០២៥។ ការទទួលពាក្យបន្តទៀតរហូតដល់កន្លែងសិក្សាពេញ។',
    faq1Question: 'តើមានអាហារូបករណ៍សិក្សាទេ?',
    faq1Answer: 'បាទ/ចាស មហាវិទ្យាល័យ Bright Future High School ផ្ដល់អាហារូបករណ៍ Merit សម្រាប់សិស្សដែលសម្រេចបានសមិទ្ធិផលខ្ពស់ និងជំនួយហិរញ្ញវត្ថុ។ ជាង ៣០% នៃសិស្សរបស់យើងទទួលបានជំនួយហិរញ្ញវត្ថុក្នុងទម្រង់ណាមួយ។',
    faq2Question: 'តើទំហំថ្នាក់រៀនជាមធ្យមនៅ BFHS គឺប៉ុន្មាន?',
    faq2Answer: 'ដើម្បីរក្សាភាពល្អឥតខ្ចោះផ្នែកសិក្សា យើងរក្សាសមាមាត្រសិស្ស-គ្រូ ១២:១។ ទំហំថ្នាក់រៀនជាមធ្យមមានប្រហែល ១៨ នាក់។',
  },
})

// FAQ accordion state
const faqOpen = ref<number | null>(0)
function toggleFaq(index: number) {
  faqOpen.value = faqOpen.value === index ? null : index
}

// Application form → POST /admissions/applications
const api = useApi()
const application = reactive({ firstName: '', lastName: '', email: '', grade: '9', message: '' })
const applyState = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const applyReference = ref('')

async function handleApplicationSubmit() {
  applyState.value = 'sending'
  try {
    const res = await api<{ reference?: string }>('/admissions/applications', {
      method: 'POST',
      body: {
        studentName: `${application.firstName} ${application.lastName}`.trim(),
        gradeApplyingFor: Number(application.grade),
        email: application.email,
        message: application.message,
      },
    })
    applyReference.value = res?.reference || ''
    applyState.value = 'sent'
  } catch {
    applyState.value = 'error'
  }
}

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

const grades = computed(() => [
  { value: '9', label: t('gradeOption9') },
  { value: '10', label: t('gradeOption10') },
  { value: '11', label: t('gradeOption11') },
  { value: '12', label: t('gradeOption12') },
])

const faqs = computed(() => [
  { question: t('faq0Question'), answer: t('faq0Answer') },
  { question: t('faq1Question'), answer: t('faq1Answer') },
  { question: t('faq2Question'), answer: t('faq2Answer') },
])
</script>

<template>
  <div>
    <PageHeader
      :eyebrow="t('heroEyebrow')"
      :title="t('heroHeading')"
      :lede="t('heroSubheading')"
      image-alt="A sunlit modern high school campus during golden hour"
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuC-8aGPN2n5Qomd3oeIfZEQZrli6H1C9voyhWnpMzGAn_o8RuhNaM1G6om1tH_F-9qrkgx62fq95KEHbYCHgW9-U1GtsD7S67QAB-yAnEVLWsACjhK2cAwBKPlpg02X5nYA6W3LU4ahyDfqXiSzAyexicK_QkNZ_Inq5CennjiC9_DrH6Fx6cfzwXBaceo0RXhF65iUi7IhoZ3BLICngEW5VqBTYBeWlVxA7K8XZV1Rh8JbE8Img5FlCM-GtGY6d7HGBDmgqMXHa2g"
    >
      <div class="flex flex-col gap-3 sm:flex-row">
        <UiButton href="#apply-now" variant="inverse" size="lg" icon-trailing="arrow_downward">{{ t('heroCta') }}</UiButton>
        <UiButton href="#tuition" variant="ghost" size="lg" class="border border-on-dark/25 text-on-dark hover:bg-on-dark/10">
          {{ t('heroSecondary') }}
        </UiButton>
      </div>
    </PageHeader>

    <!-- ── Process ──────────────────────────────────────────────────────── -->
    <UiSection>
      <UiSectionHead
        :eyebrow="t('enrollmentSectionHeading')"
        :title="t('enrollmentSectionSubheading')"
        size="display"
      />

      <ol class="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, index) in enrollmentSteps" :key="step.title" class="flex flex-col gap-4 bg-surface p-7">
          <div class="flex items-center justify-between">
            <span class="grid h-10 w-10 place-items-center rounded-md bg-brand text-on-brand">
              <UiIcon :name="step.icon" :size="19" />
            </span>
            <span class="font-display text-title-2 tabular-nums text-line-strong">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <h3 class="font-display text-title-4 text-fg">{{ step.title }}</h3>
          <p class="text-copy-sm text-fg-muted">{{ step.desc }}</p>
        </li>
      </ol>
    </UiSection>

    <!-- ── Requirements + tuition ───────────────────────────────────────── -->
    <UiSection tone="muted" id="tuition">
      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <div class="h-full rounded-xl border border-line bg-surface p-8">
            <h2 class="font-display text-title-2 text-fg">{{ t('requirementsHeading') }}</h2>
            <ul class="mt-6 divide-y divide-line border-t border-line">
              <li v-for="req in requirements" :key="req.title" class="flex items-start gap-3 py-4">
                <UiIcon name="check_circle" :size="19" :filled="true" class="mt-0.5 text-accent" />
                <div>
                  <p class="text-copy-sm font-medium text-fg">{{ req.title }}</p>
                  <p class="mt-0.5 text-copy-sm text-fg-muted">{{ req.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="flex h-full flex-col rounded-xl border border-line bg-surface p-8">
            <h2 class="font-display text-title-2 text-fg">{{ t('tuitionHeading') }}</h2>

            <div class="mt-6 overflow-x-auto">
              <table class="w-full border-collapse text-left">
                <caption class="sr-only">{{ t('tuitionHeading') }}</caption>
                <thead>
                  <tr class="border-b border-line-strong">
                    <th scope="col" class="pb-3 text-eyebrow uppercase text-fg-subtle">{{ t('tuitionColFeeDesc') }}</th>
                    <th scope="col" class="pb-3 text-right text-eyebrow uppercase text-fg-subtle">{{ t('tuitionColAmount') }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-line">
                  <tr v-for="row in tuitionRows" :key="row.label" :class="row.total && 'bg-accent-tint/50'">
                    <td class="py-3.5 text-copy-sm" :class="row.total ? 'font-semibold text-fg' : 'text-fg-muted'">
                      {{ row.label }}
                    </td>
                    <td class="py-3.5 text-right tabular-nums" :class="row.total ? 'font-display text-title-4 text-fg' : 'text-copy-sm text-fg'">
                      {{ row.amount }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="mt-auto pt-6 text-copy-sm text-fg-subtle">{{ t('tuitionNote') }}</p>
          </div>
        </div>
      </div>
    </UiSection>

    <!-- ── Application ──────────────────────────────────────────────────── -->
    <UiSection id="apply-now">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <UiBadge tone="accent" dot>{{ t('enrollmentOpenBadge') }}</UiBadge>
          <h2 class="mt-5 font-display text-display-2 text-balance text-fg">{{ t('ctaHeading') }}</h2>
          <p class="mt-5 text-lead text-pretty text-fg-muted">{{ t('ctaBody') }}</p>

          <dl class="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
            <div>
              <dt class="text-label text-fg-muted">{{ t('deadline') }}</dt>
              <dd class="mt-1 font-display text-title-3 text-fg">{{ t('deadlineValue') }}</dd>
            </div>
            <div>
              <dt class="text-label text-fg-muted">{{ t('aidLabel') }}</dt>
              <dd class="mt-1 font-display text-title-3 text-fg">{{ t('aidValue') }}</dd>
            </div>
          </dl>

          <div class="mt-8 flex items-center gap-4">
            <div class="flex -space-x-2">
              <img
                v-for="(src, i) in [
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aeRPTJ264M_w0NCA3gRkT_ipgO0xxA2k3oP-s9V2ZeEMHDKMLB6a82LFS1FFdmZwpRtd6aWgI5zoLLuDmpoHbFz3zIN2MwJWQSmelN2e-KoEPI4PJhYVP1N_4QBAMQ4l8uSnsJohfsIzfJ3F1-YapDx-4RpN3AlJzPOMhbXp17IX8dIj7pbEVFIp-3Q3uPY8k2vVWSUjT9COk2pqFmBt6DsFTnt6QkzJL44x0aD6h7NbGdJYvQx1RXtNEIJohiiRTmYHqqhoyTQ',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBc6iYIuKWNPbMHtmFjuT0M-LPai0SltP0RIDwLUSQH9GIW-2rgsTlEbMuERDt_28KY-eTu-z8cQgiyh06CKujnYf8DPwMJZZ84rLQ8Zz1ejb2OuJ3DJ7UaoTNXfpdwHmpOqOZ3-Gafepo70v_LJ0gtIGDMt-U9nIFgaIxOJr3UzOsyvCqiyzGo38zHSQMH4NZfLLReMgKDYvdT4w5h2eymck8gxOAb1yZaZfBDt0Xz5-GTaavBhrMAl02p3vJmffBHEBBnOj9Fmh8',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDBL-0u3587nHsUpGZ7mAZn5mmirvECxFtcBvUUkYeFPkVa6duhPpf-06KBnQsuz8l7t5sPQCwX5WNCs-QkxuP2BkgVCZ9faYgb3yHMAOlI_JbIAFrgN057sKv_6ji36gNYkTmrMf7MfPD_77eKMdpIxStXVqDPzQzAyjssoUlh5_X5X_HM9UsMFAwrkGdE13A7A2-Y_-8wRw6OTJaJpQEah6YU5-I76Y89jyUEYJA66QHH5ag1fjQzdy1p2FkGc8RmsOWcKeTyZEo',
                ]"
                :key="i" :src="src" alt="" loading="lazy"
                class="h-9 w-9 rounded-full border-2 border-bg object-cover"
              >
            </div>
            <p class="text-copy-sm text-fg-muted">
              <span class="block font-medium text-fg">{{ t('applicantStat') }}</span>
              {{ t('applicantStatSub') }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-7">
          <form class="rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8" @submit.prevent="handleApplicationSubmit">
            <h2 class="font-display text-title-2 text-fg">{{ t('applyOnlineHeading') }}</h2>

            <div class="mt-7 grid gap-5 sm:grid-cols-2">
              <UiField
                v-model="application.firstName" :label="t('formLabelFirstName')"
                :placeholder="t('formPlaceholderFirstName')" required autocomplete="given-name"
              />
              <UiField
                v-model="application.lastName" :label="t('formLabelLastName')"
                :placeholder="t('formPlaceholderLastName')" required autocomplete="family-name"
              />
            </div>

            <div class="mt-5 grid gap-5 sm:grid-cols-2">
              <UiField
                v-model="application.email" :label="t('formLabelEmail')" type="email"
                :placeholder="t('formPlaceholderEmail')" required autocomplete="email"
              />
              <UiField v-model="application.grade" :label="t('formLabelGrade')" as="select">
                <option v-for="g in grades" :key="g.value" :value="g.value">{{ g.label }}</option>
              </UiField>
            </div>

            <div class="mt-5">
              <UiField
                v-model="application.message" :label="t('formLabelComments')" as="textarea" :rows="4"
                :placeholder="t('formPlaceholderComments')"
              />
            </div>

            <div
              v-if="applyState === 'sent'"
              class="mt-6 flex gap-3 rounded-md border border-success/25 bg-success-tint p-4 text-on-success-tint"
              role="status"
            >
              <UiIcon name="check_circle" :size="20" :filled="true" class="mt-0.5" />
              <div>
                <p class="text-copy-sm font-medium">{{ t('alertSubmitSuccess') }}</p>
                <p v-if="applyReference" class="mt-0.5 text-copy-sm">{{ t('referenceLabel') }} <span class="font-mono">{{ applyReference }}</span></p>
              </div>
            </div>
            <p
              v-else-if="applyState === 'error'"
              class="mt-6 flex items-center gap-2.5 rounded-md border border-danger/25 bg-danger-tint p-4 text-copy-sm text-on-danger-tint"
              role="alert"
            >
              <UiIcon name="error" :size="20" />{{ t('formSubmitError') }}
            </p>

            <UiButton type="submit" size="lg" block class="mt-7" :loading="applyState === 'sending'">
              {{ applyState === 'sending' ? t('formSubmitting') : t('formSubmitButton') }}
            </UiButton>
          </form>
        </div>
      </div>
    </UiSection>

    <!-- ── FAQ ──────────────────────────────────────────────────────────── -->
    <UiSection tone="muted" narrow>
      <UiSectionHead :eyebrow="t('faqHeading')" :title="t('faqLede')" align="center" size="display" />

      <div class="mx-auto mt-10 max-w-3xl divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
        <div v-for="(faq, index) in faqs" :key="index">
          <h3>
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-2"
              :aria-expanded="faqOpen === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="text-copy font-medium text-fg">{{ faq.question }}</span>
              <UiIcon
                name="expand_more" :size="20"
                class="shrink-0 text-fg-subtle transition-transform duration-200"
                :class="faqOpen === index && 'rotate-180'"
              />
            </button>
          </h3>
          <div v-show="faqOpen === index" :id="`faq-panel-${index}`" class="px-6 pb-5 text-copy-sm text-fg-muted">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </UiSection>
  </div>
</template>
