<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead({ title: 'Parent Portal' })

const { t } = useI18n({
  en: {
    audience: 'Parent',
    title: "Alex's progress", subtitle: 'Semester 2 · 2024 · Grade 11-A',
    search: 'Search resources, teachers, invoices…',
    navDashboard: 'Dashboard', navChild: 'My child', navAttendance: 'Attendance',
    navGrades: 'Grades', navSchedule: 'Schedule', navFees: 'Fees & payments',
    navMessages: 'Messages', navSettings: 'Settings',
    payFees: 'Pay fees', messageTeacher: 'Message a teacher',

    attendance: 'Attendance', gpa: 'Current GPA', assignments: 'Open assignments', absences: 'Absences (term)',

    snapshotTitle: 'Academic snapshot', reportCard: 'View report card',
    math: 'Advanced Mathematics', mathTeacher: 'Teacher: Dr. Aris Thorne', mathNote: 'Excellent improvement',
    physics: 'Molecular Physics', physicsTeacher: 'Teacher: Prof. Elena Glass', physicsNote: 'Strong lab performance',
    noteLabel: 'Latest teacher note · History',
    noteBody: "Alex's recent essay on Renaissance Economics showed exceptional critical thinking. Encouraged him to join the Debate Society.",
    noteAuthor: 'Mr. Henderson',

    balanceTitle: 'Account balance', dueLabel: 'Next payment due: 15 Oct 2024', payNow: 'Pay outstanding fees',
    historyTitle: 'Payment history', downloadStatement: 'Download full statement',
    fee1: 'Term 1 tuition', fee2: 'Laboratory fees', fee3: 'Sports kit',

    facultyTitle: 'Faculty connect',
    counseling: 'Counseling Office', counselingSub: 'Session availability for next week…',
    mentor: 'Ms. Sarah Jenkins', mentorSub: 'Class mentor',
    composeMessage: 'Compose new message',

    bulletinsTitle: 'School bulletins', viewAll: 'View all announcements',
    b1Time: 'Today, 09:00 AM', b1Title: 'Annual Science Fair schedule',
    b1Body: 'Detailed itinerary for the upcoming Science Fair is now available for download.',
    b2Time: 'Yesterday', b2Title: 'Parent-teacher meeting',
    b2Body: 'Booking slots for the end-of-term meetings are now open in the portal.',
    b3Time: '1 Oct 2024', b3Title: 'Spring break dates',
    b3Body: 'The school will remain closed from April 12th to April 19th.',
  },
  km: {
    audience: 'មាតាបិតា',
    title: 'វឌ្ឍនភាពរបស់ Alex', subtitle: 'ឆមាសទី ២ · ២០២៤ · ថ្នាក់ ១១-ក',
    search: 'ស្វែងរកធនធាន គ្រូ វិក្កយបត្រ…',
    navDashboard: 'ផ្ទាំងគ្រប់គ្រង', navChild: 'កូនរបស់ខ្ញុំ', navAttendance: 'វត្តមាន',
    navGrades: 'ពិន្ទុ', navSchedule: 'កាលវិភាគ', navFees: 'ថ្លៃ និងការទូទាត់',
    navMessages: 'សារ', navSettings: 'ការកំណត់',
    payFees: 'បង់ថ្លៃ', messageTeacher: 'ផ្ញើសារទៅគ្រូ',

    attendance: 'វត្តមាន', gpa: 'ពិន្ទុមធ្យមបច្ចុប្បន្ន', assignments: 'កិច្ចការមិនទាន់រួច', absences: 'អវត្តមាន (ឆមាស)',

    snapshotTitle: 'ទិដ្ឋភាពសិក្សា', reportCard: 'មើលសន្លឹកពិន្ទុ',
    math: 'គណិតវិទ្យាកម្រិតខ្ពស់', mathTeacher: 'គ្រូ៖ Dr. Aris Thorne', mathNote: 'មានការរីកចម្រើនល្អ',
    physics: 'រូបវិទ្យាម៉ូលេគុល', physicsTeacher: 'គ្រូ៖ Prof. Elena Glass', physicsNote: 'លទ្ធផលពិសោធន៍ល្អ',
    noteLabel: 'កំណត់ចំណាំចុងក្រោយពីគ្រូ · ប្រវត្តិសាស្ត្រ',
    noteBody: 'អត្ថបទថ្មីៗរបស់ Alex អំពីសេដ្ឋកិច្ចសម័យ Renaissance បង្ហាញការគិតបែបវិចារណញាណដ៏ល្អ។ បានលើកទឹកចិត្តឱ្យចូលរួមក្លឹបជជែកដេញដោល។',
    noteAuthor: 'Mr. Henderson',

    balanceTitle: 'សមតុល្យគណនី', dueLabel: 'ការទូទាត់បន្ទាប់៖ ១៥ តុលា ២០២៤', payNow: 'បង់ថ្លៃដែលនៅសល់',
    historyTitle: 'ប្រវត្តិការទូទាត់', downloadStatement: 'ទាញយករបាយការណ៍ពេញ',
    fee1: 'ថ្លៃសិក្សាឆមាស ១', fee2: 'ថ្លៃមន្ទីរពិសោធន៍', fee3: 'ឧបករណ៍កីឡា',

    facultyTitle: 'ទំនាក់ទំនងជាមួយគ្រូ',
    counseling: 'ការិយាល័យប្រឹក្សា', counselingSub: 'ពេលវេលាទំនេរសម្រាប់សប្ដាហ៍ក្រោយ…',
    mentor: 'Ms. Sarah Jenkins', mentorSub: 'គ្រូទទួលបន្ទុកថ្នាក់',
    composeMessage: 'សរសេរសារថ្មី',

    bulletinsTitle: 'ដំណឹងសាលា', viewAll: 'មើលសេចក្ដីប្រកាសទាំងអស់',
    b1Time: 'ថ្ងៃនេះ ០៩:០០ ព្រឹក', b1Title: 'កាលវិភាគពិព័រណ៍វិទ្យាសាស្ត្រ',
    b1Body: 'កម្មវិធីលម្អិតសម្រាប់ពិព័រណ៍វិទ្យាសាស្ត្រអាចទាញយកបានហើយ។',
    b2Time: 'ម្សិលមិញ', b2Title: 'ការជួបជាមួយគ្រូ',
    b2Body: 'ការកក់ពេលវេលាសម្រាប់ការជួបចុងឆមាសបើកហើយក្នុងផតថល។',
    b3Time: '១ តុលា ២០២៤', b3Title: 'កាលបរិច្ឆេទវិស្សមកាល',
    b3Body: 'សាលានឹងបិទចាប់ពីថ្ងៃទី ១២ ដល់ ១៩ មេសា។',
  },
})

const nav = computed(() => [
  { label: t('navDashboard'), icon: 'grid_view', to: '/portal/parent' },
  { label: t('navChild'), icon: 'child_care' },
  { label: t('navAttendance'), icon: 'event_available' },
  { label: t('navGrades'), icon: 'grade' },
  { label: t('navSchedule'), icon: 'calendar_month' },
  { label: t('navFees'), icon: 'payments', badge: '1' },
  { label: t('navMessages'), icon: 'mail' },
  { label: t('navSettings'), icon: 'settings' },
])

const kpis = computed(() => [
  { icon: 'event_available', value: '96%', label: t('attendance'), delta: '+1.2%', deltaTone: 'success' as const },
  { icon: 'grade', value: '3.8', label: t('gpa'), delta: '+0.1', deltaTone: 'success' as const },
  { icon: 'assignment', value: '3', label: t('assignments'), delta: '2 due soon', deltaTone: 'neutral' as const },
  { icon: 'event_busy', value: '2', label: t('absences'), delta: 'excused', deltaTone: 'neutral' as const },
])

const subjects = computed(() => [
  { icon: 'functions', title: t('math'), teacher: t('mathTeacher'), grade: 'A-', note: t('mathNote') },
  { icon: 'science', title: t('physics'), teacher: t('physicsTeacher'), grade: 'B+', note: t('physicsNote') },
])

const payments = computed(() => [
  { label: t('fee1'), amount: '$4,500' },
  { label: t('fee2'), amount: '$200' },
  { label: t('fee3'), amount: '$150' },
])

const bulletins = computed(() => [
  { time: t('b1Time'), title: t('b1Title'), body: t('b1Body'), fresh: true },
  { time: t('b2Time'), title: t('b2Title'), body: t('b2Body'), fresh: false },
  { time: t('b3Time'), title: t('b3Title'), body: t('b3Body'), fresh: false },
])
</script>

<template>
  <PortalShell
    :audience="t('audience')"
    :nav="nav"
    :title="t('title')"
    :subtitle="t('subtitle')"
    :search-placeholder="t('search')"
  >
    <template #actions>
      <UiButton variant="outline" icon="mail">{{ t('messageTeacher') }}</UiButton>
      <UiButton icon="credit_card">{{ t('payFees') }}</UiButton>
    </template>

    <!-- KPI strip -->
    <div class="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="kpi in kpis" :key="kpi.label" class="bg-surface p-5">
        <UiStat
          :icon="kpi.icon" :value="kpi.value" :label="kpi.label"
          :delta="kpi.delta" :delta-tone="kpi.deltaTone"
        />
      </div>
    </div>

    <div class="mt-5 grid gap-5 xl:grid-cols-12">
      <div class="flex flex-col gap-5 xl:col-span-8">
        <!-- Academic snapshot -->
        <UiCard :padded="false">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5">
            <h2 class="flex items-center gap-2.5 font-display text-title-3 text-fg">
              <UiIcon name="grade" :size="19" class="text-accent" />{{ t('snapshotTitle') }}
            </h2>
            <UiButton variant="ghost" size="sm" icon-trailing="arrow_forward">{{ t('reportCard') }}</UiButton>
          </div>

          <ul class="divide-y divide-line">
            <li
              v-for="subject in subjects" :key="subject.title"
              class="flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-surface-2"
            >
              <div class="flex items-center gap-4">
                <span class="grid h-11 w-11 place-items-center rounded-md bg-brand-tint text-on-brand-tint">
                  <UiIcon :name="subject.icon" :size="20" />
                </span>
                <div>
                  <p class="text-copy font-medium text-fg">{{ subject.title }}</p>
                  <p class="mt-0.5 text-label-sm text-fg-muted">{{ subject.teacher }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="font-display text-title-2 text-fg">{{ subject.grade }}</p>
                <p class="mt-0.5 text-label-sm text-success">{{ subject.note }}</p>
              </div>
            </li>
          </ul>

          <figure class="m-6 rounded-lg border-l-2 border-accent bg-accent-tint/50 p-5">
            <figcaption class="flex items-center gap-2 text-eyebrow uppercase text-on-accent-tint">
              <UiIcon name="chat_bubble" :size="14" />{{ t('noteLabel') }}
            </figcaption>
            <blockquote class="mt-3 text-copy-sm italic text-fg">{{ t('noteBody') }}</blockquote>
            <p class="mt-3 text-label-sm text-fg-muted">— {{ t('noteAuthor') }}</p>
          </figure>
        </UiCard>

        <!-- Fees -->
        <div class="grid gap-5 md:grid-cols-2">
          <UiCard tone="brand" padded="lg" class="flex flex-col justify-between">
            <div>
              <h2 class="font-display text-title-3 text-on-dark">{{ t('balanceTitle') }}</h2>
              <p class="mt-4 font-display text-[2.75rem] leading-none tracking-tight tabular-nums text-on-dark">$1,240.00</p>
              <p class="mt-3 flex items-center gap-1.5 text-copy-sm text-on-dark-muted">
                <UiIcon name="schedule" :size="16" class="text-accent" />{{ t('dueLabel') }}
              </p>
            </div>
            <UiButton variant="inverse" block class="mt-8" icon="credit_card">{{ t('payNow') }}</UiButton>
          </UiCard>

          <UiCard padded="lg" class="flex flex-col">
            <h2 class="font-display text-title-3 text-fg">{{ t('historyTitle') }}</h2>
            <ul class="mt-5 flex-1 divide-y divide-line border-y border-line">
              <li v-for="p in payments" :key="p.label" class="flex items-center justify-between gap-3 py-3">
                <span class="text-copy-sm text-fg-muted">{{ p.label }}</span>
                <span class="text-copy-sm font-medium tabular-nums text-fg">{{ p.amount }}</span>
              </li>
            </ul>
            <UiButton variant="ghost" size="sm" block class="mt-4" icon="download">{{ t('downloadStatement') }}</UiButton>
          </UiCard>
        </div>
      </div>

      <!-- Right column -->
      <div class="flex flex-col gap-5 xl:col-span-4">
        <UiCard padded="lg">
          <h2 class="flex items-center gap-2.5 font-display text-title-3 text-fg">
            <UiIcon name="mail" :size="19" class="text-accent" />{{ t('facultyTitle') }}
          </h2>

          <ul class="mt-5 flex flex-col gap-2">
            <li>
              <button type="button" class="flex w-full items-center gap-3.5 rounded-lg border border-line p-3 text-left transition-colors hover:border-line-strong hover:bg-surface-2">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-info-tint text-on-info-tint">
                  <UiIcon name="person_search" :size="19" />
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block text-copy-sm font-medium text-fg">{{ t('counseling') }}</span>
                  <span class="block truncate text-label-sm text-fg-muted">{{ t('counselingSub') }}</span>
                </span>
                <span class="h-2 w-2 shrink-0 rounded-full bg-accent" />
              </button>
            </li>
            <li>
              <button type="button" class="flex w-full items-center gap-3.5 rounded-lg border border-transparent p-3 text-left transition-colors hover:border-line hover:bg-surface-2">
                <UiAvatar
                  :name="t('mentor')" :size="44"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANY82zATsINqZtP8FzGGr9k6eQa4lWzFZkeK7pv89VnL44sDl2ZegTXRqPagbGqiyozz5gTwjLTOfr6ydOlhUAogyQnudzqzoJ0V2AiAKMSzFkN5C4L8HFtFCV7rNG0Y-UN662Syvq0dofNnfX5U6yN7umrcLgkeNVsVKi2RkVq3thlvZK9aMfCNSNQs1MeAK4OQ0MgSmfl8Iq4zT7kS1aTSxdbOXBUnNFT3cltBPKcWUXnx0NvuqK2a7_6dwq_LmhRKCX7x131_o"
                />
                <span class="min-w-0 flex-1">
                  <span class="block text-copy-sm font-medium text-fg">{{ t('mentor') }}</span>
                  <span class="block text-label-sm text-fg-muted">{{ t('mentorSub') }}</span>
                </span>
                <UiIcon name="chevron_right" :size="18" class="shrink-0 text-fg-subtle" />
              </button>
            </li>
          </ul>

          <UiButton variant="outline" block class="mt-5" icon="edit_square">{{ t('composeMessage') }}</UiButton>
        </UiCard>

        <UiCard padded="lg" class="flex flex-1 flex-col">
          <h2 class="flex items-center gap-2.5 font-display text-title-3 text-fg">
            <UiIcon name="campaign" :size="19" class="text-accent" />{{ t('bulletinsTitle') }}
          </h2>

          <ol class="mt-6 flex-1 border-l border-line pl-5">
            <li v-for="b in bulletins" :key="b.title" class="relative pb-7 last:pb-0">
              <span
                class="absolute -left-[1.6rem] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-surface"
                :class="b.fresh ? 'bg-accent' : 'bg-line-strong'"
              />
              <p class="text-eyebrow uppercase" :class="b.fresh ? 'text-accent' : 'text-fg-subtle'">{{ b.time }}</p>
              <p class="mt-1.5 text-copy-sm font-medium text-fg">{{ b.title }}</p>
              <p class="mt-1 text-label-sm text-fg-muted">{{ b.body }}</p>
            </li>
          </ol>

          <UiButton variant="ghost" size="sm" block class="mt-4" icon-trailing="arrow_forward">{{ t('viewAll') }}</UiButton>
        </UiCard>
      </div>
    </div>
  </PortalShell>
</template>
