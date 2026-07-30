<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead({ title: 'Teacher Portal' })

const { t } = useI18n({
  en: {
    audience: 'Academic staff',
    title: 'Class overview', subtitle: 'Grade 12 Physics · Advanced Physics Dept.',
    search: 'Search students, courses or records…',
    navDashboard: 'Dashboard', navProfile: 'Profile', navAttendance: 'Attendance',
    navGrades: 'Gradebook', navSchedule: 'Schedule', navAssignments: 'Assignments',
    navMessages: 'Messages', navSettings: 'Settings',
    exportCsv: 'Export CSV', newAssignment: 'New assignment',

    analyticsTitle: 'Class performance', analyticsSub: 'Engagement and grade distribution this week.',
    weekly: 'Weekly view', monthly: 'Monthly view',
    classAverage: 'Class average', averageDelta: '+2.4% from mid-term', fullReport: 'View full report',

    rosterTitle: 'Student list & quick grades',
    rosterSub: 'Manage students and update assignment scores instantly.',
    colStudent: 'Student', colStatus: 'Status', colAverage: 'Avg. grade', colLast: 'Last score', colAction: 'Action',
    onTrack: 'On track', atRisk: 'At risk', excelled: 'Excelled',
    showing: 'Showing 4 of 28 students', prev: 'Previous', next: 'Next',
    saved: 'Saved',

    inboxTitle: 'Parent inbox', compose: 'Compose new',
    msg1Name: 'Mrs. Linda Smith', msg1Time: '10:45 AM', msg1Subject: 'Question regarding the lab',
    msg1Body: 'Hi Professor, Jordan was wondering if the final report for the mechanics lab is due this Friday or next?',
    msg2Name: 'Mr. David Miller', msg2Time: 'Yesterday', msg2Subject: 'Meeting request for next week',
    msg2Body: "We'd like to schedule a quick call to discuss Sarah's recent exam results and how we can support her.",
    msg3Name: 'You', msg3Time: '2 days ago', msg3Subject: 'RE: Attendance check-in',
    msg3Body: "Thank you for letting me know. I've marked Leo's absence as excused for the dental appointment.",

    coursesTitle: 'Assigned courses', manageAll: 'Manage all',
    course1: 'AP Physics C', course1Sub: 'Mechanics & Electromagnetism', course1Count: '28 students',
    course2: 'Honors Physics', course2Sub: 'Core Principles & Application', course2Count: '24 students',
    course3: 'Astrophysics Lab', course3Sub: 'Observational Research elective', course3Count: '14 students',

    quickActions: 'Quick actions', broadcast: 'Broadcast message', enroll: 'Enroll student',
  },
  km: {
    audience: 'បុគ្គលិកសិក្សា',
    title: 'ទិដ្ឋភាពថ្នាក់', subtitle: 'រូបវិទ្យាថ្នាក់ទី ១២ · ផ្នែករូបវិទ្យាកម្រិតខ្ពស់',
    search: 'ស្វែងរកសិស្ស មុខវិជ្ជា ឬកំណត់ត្រា…',
    navDashboard: 'ផ្ទាំងគ្រប់គ្រង', navProfile: 'ប្រវត្តិរូប', navAttendance: 'វត្តមាន',
    navGrades: 'សៀវភៅពិន្ទុ', navSchedule: 'កាលវិភាគ', navAssignments: 'កិច្ចការ',
    navMessages: 'សារ', navSettings: 'ការកំណត់',
    exportCsv: 'នាំចេញ CSV', newAssignment: 'កិច្ចការថ្មី',

    analyticsTitle: 'លទ្ធផលថ្នាក់', analyticsSub: 'ការចូលរួម និងការបែងចែកពិន្ទុសប្ដាហ៍នេះ។',
    weekly: 'តាមសប្ដាហ៍', monthly: 'តាមខែ',
    classAverage: 'មធ្យមភាគថ្នាក់', averageDelta: '+២.៤% ធៀបនឹងពាក់កណ្ដាលឆមាស', fullReport: 'មើលរបាយការណ៍ពេញ',

    rosterTitle: 'បញ្ជីសិស្ស និងពិន្ទុរហ័ស',
    rosterSub: 'គ្រប់គ្រងសិស្ស និងធ្វើបច្ចុប្បន្នភាពពិន្ទុភ្លាមៗ។',
    colStudent: 'សិស្ស', colStatus: 'ស្ថានភាព', colAverage: 'ពិន្ទុមធ្យម', colLast: 'ពិន្ទុចុងក្រោយ', colAction: 'សកម្មភាព',
    onTrack: 'ដំណើរល្អ', atRisk: 'ប្រឈម', excelled: 'ពូកែ',
    showing: 'បង្ហាញ ៤ ក្នុងចំណោម ២៨ នាក់', prev: 'មុន', next: 'បន្ទាប់',
    saved: 'បានរក្សាទុក',

    inboxTitle: 'សារពីមាតាបិតា', compose: 'សរសេរសារថ្មី',
    msg1Name: 'Mrs. Linda Smith', msg1Time: '១០:៤៥ ព្រឹក', msg1Subject: 'សំណួរអំពីមន្ទីរពិសោធន៍',
    msg1Body: 'ជម្រាបសួរលោកគ្រូ តើរបាយការណ៍ចុងក្រោយសម្រាប់មន្ទីរពិសោធន៍មេកានិចផុតកំណត់ថ្ងៃសុក្រនេះ ឬសប្ដាហ៍ក្រោយ?',
    msg2Name: 'Mr. David Miller', msg2Time: 'ម្សិលមិញ', msg2Subject: 'សំណើប្រជុំសប្ដាហ៍ក្រោយ',
    msg2Body: 'យើងចង់កំណត់ពេលហៅទូរស័ព្ទខ្លីដើម្បីពិភាក្សាអំពីលទ្ធផលប្រឡងរបស់ Sarah។',
    msg3Name: 'អ្នក', msg3Time: '២ ថ្ងៃមុន', msg3Subject: 'ឆ្លើយតប៖ ការត្រួតពិនិត្យវត្តមាន',
    msg3Body: 'អរគុណដែលបានជូនដំណឹង។ ខ្ញុំបានសម្គាល់អវត្តមានរបស់ Leo ថាមានការអនុញ្ញាត។',

    coursesTitle: 'មុខវិជ្ជាទទួលបន្ទុក', manageAll: 'គ្រប់គ្រងទាំងអស់',
    course1: 'AP Physics C', course1Sub: 'មេកានិច និងអេឡិចត្រូម៉ាញ៉េទិច', course1Count: 'សិស្ស ២៨ នាក់',
    course2: 'Honors Physics', course2Sub: 'គោលការណ៍ស្នូល និងការអនុវត្ត', course2Count: 'សិស្ស ២៤ នាក់',
    course3: 'Astrophysics Lab', course3Sub: 'មុខវិជ្ជាជ្រើសរើសស្រាវជ្រាវ', course3Count: 'សិស្ស ១៤ នាក់',

    quickActions: 'សកម្មភាពរហ័ស', broadcast: 'ផ្សាយសារ', enroll: 'ចុះឈ្មោះសិស្ស',
  },
})

const nav = computed(() => [
  { label: t('navDashboard'), icon: 'grid_view', to: '/portal/teacher' },
  { label: t('navProfile'), icon: 'person' },
  { label: t('navAttendance'), icon: 'event_available' },
  { label: t('navGrades'), icon: 'grade' },
  { label: t('navSchedule'), icon: 'calendar_month' },
  { label: t('navAssignments'), icon: 'assignment' },
  { label: t('navMessages'), icon: 'mail', badge: 3 },
  { label: t('navSettings'), icon: 'settings' },
])

/* Weekly engagement chart — values are percentages, bars animate in on mount. */
const chart = [
  { day: 'Mon', value: 78 }, { day: 'Tue', value: 92 }, { day: 'Wed', value: 65 },
  { day: 'Thu', value: 82 }, { day: 'Fri', value: 79 }, { day: 'Sat', value: 95 },
]
const chartReady = ref(false)
onMounted(() => requestAnimationFrame(() => { chartReady.value = true }))

/* Roster with inline score editing. */
const roster = reactive([
  { name: 'Alex Whittaker', id: '2024-0421', status: 'onTrack', average: 92, score: '95' },
  { name: 'Sarah Miller', id: '2024-0392', status: 'atRisk', average: 68, score: '72' },
  { name: 'Jordan Smith', id: '2024-0511', status: 'onTrack', average: 88, score: '84' },
  { name: 'Leo Chang', id: '2024-0445', status: 'excelled', average: 96, score: '98' },
])

const STATUS: Record<string, { tone: 'success' | 'warning' | 'info'; key: 'onTrack' | 'atRisk' | 'excelled' }> = {
  onTrack: { tone: 'success', key: 'onTrack' },
  atRisk: { tone: 'warning', key: 'atRisk' },
  excelled: { tone: 'info', key: 'excelled' },
}

// Transient "saved" confirmation per row.
const savedRows = ref<Set<number>>(new Set())
function onGradeChange(index: number) {
  savedRows.value = new Set([...savedRows.value, index])
  setTimeout(() => {
    const next = new Set(savedRows.value)
    next.delete(index)
    savedRows.value = next
  }, 2000)
}

const messages = computed(() => [
  { name: t('msg1Name'), time: t('msg1Time'), subject: t('msg1Subject'), body: t('msg1Body'), unread: true },
  { name: t('msg2Name'), time: t('msg2Time'), subject: t('msg2Subject'), body: t('msg2Body'), unread: true },
  { name: t('msg3Name'), time: t('msg3Time'), subject: t('msg3Subject'), body: t('msg3Body'), unread: false },
])

const courses = computed(() => [
  { icon: 'rocket_launch', title: t('course1'), sub: t('course1Sub'), count: t('course1Count'), members: ['Jamie Doe', 'Ann Lee'], extra: '+26' },
  { icon: 'science', title: t('course2'), sub: t('course2Sub'), count: t('course2Count'), members: ['Mia Sun', 'Rob Kay'], extra: '+22' },
  { icon: 'biotech', title: t('course3'), sub: t('course3Sub'), count: t('course3Count'), members: ['Tom Cole', 'Bea Lin'], extra: '+12' },
])

const quickOpen = ref(false)
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
      <UiButton variant="outline" icon="download">{{ t('exportCsv') }}</UiButton>
      <UiButton icon="add">{{ t('newAssignment') }}</UiButton>
    </template>

    <div class="grid gap-5 lg:grid-cols-12">
      <!-- Performance chart -->
      <UiCard padded="lg" class="lg:col-span-8">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 class="font-display text-title-2 text-fg">{{ t('analyticsTitle') }}</h2>
            <p class="mt-1 text-copy-sm text-fg-muted">{{ t('analyticsSub') }}</p>
          </div>
          <select
            class="h-9 rounded-md border border-line bg-surface-2 px-3 text-label text-fg focus:border-accent"
            :aria-label="t('analyticsTitle')"
          >
            <option>{{ t('weekly') }}</option>
            <option>{{ t('monthly') }}</option>
          </select>
        </div>

        <div class="mt-8 flex h-56 items-end gap-3 sm:gap-5">
          <div v-for="(bar, i) in chart" :key="bar.day" class="group flex h-full flex-1 flex-col justify-end">
            <p class="mb-2 text-center text-label-sm font-medium tabular-nums text-fg-subtle opacity-0 transition-opacity group-hover:opacity-100">
              {{ bar.value }}%
            </p>
            <div
              class="w-full rounded-t-md transition-[height] duration-700 ease-out"
              :class="bar.value >= 90 ? 'bg-accent' : 'bg-brand-tint group-hover:bg-brand/25'"
              :style="{ height: chartReady ? `${bar.value}%` : '0%', transitionDelay: `${i * 60}ms` }"
            />
          </div>
        </div>
        <div class="mt-3 flex gap-3 border-t border-line pt-3 sm:gap-5">
          <span v-for="bar in chart" :key="bar.day" class="flex-1 text-center text-label-sm text-fg-subtle">{{ bar.day }}</span>
        </div>
      </UiCard>

      <!-- Class average -->
      <UiCard tone="brand" padded="lg" class="flex flex-col justify-between lg:col-span-4">
        <div>
          <UiIcon name="auto_graph" :size="26" class="text-accent" />
          <h2 class="mt-5 font-display text-title-3 text-on-dark">{{ t('classAverage') }}</h2>
          <p class="mt-3 font-display text-[3rem] leading-none tracking-tight tabular-nums text-on-dark">84.5%</p>
          <p class="mt-2 flex items-center gap-1 text-copy-sm text-on-dark-muted">
            <UiIcon name="trending_up" :size="16" class="text-accent" />{{ t('averageDelta') }}
          </p>
        </div>
        <UiButton variant="inverse" block class="mt-8">{{ t('fullReport') }}</UiButton>
      </UiCard>

      <!-- Roster -->
      <UiCard :padded="false" class="overflow-hidden lg:col-span-8">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5">
          <div>
            <h2 class="font-display text-title-3 text-fg">{{ t('rosterTitle') }}</h2>
            <p class="mt-1 text-copy-sm text-fg-muted">{{ t('rosterSub') }}</p>
          </div>
          <UiButton variant="outline" size="sm" icon="filter_list">
            <span class="sr-only">Filter</span>
          </UiButton>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr class="border-b border-line bg-surface-2">
                <th scope="col" class="px-6 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colStudent') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colStatus') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colAverage') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colLast') }}</th>
                <th scope="col" class="px-6 py-3 text-right text-eyebrow uppercase text-fg-subtle">{{ t('colAction') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-line">
              <tr v-for="(student, i) in roster" :key="student.id" class="transition-colors hover:bg-surface-2">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <UiAvatar :name="student.name" :size="34" />
                    <div>
                      <p class="text-copy-sm font-medium text-fg">{{ student.name }}</p>
                      <p class="text-label-sm text-fg-subtle">ID: {{ student.id }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4">
                  <UiBadge :tone="STATUS[student.status].tone" dot>{{ t(STATUS[student.status].key) }}</UiBadge>
                </td>
                <td class="px-4 py-4 text-copy-sm tabular-nums text-fg">{{ student.average }}%</td>
                <td class="px-4 py-4">
                  <div class="flex items-center gap-2">
                    <input
                      v-model="student.score"
                      type="text" inputmode="numeric"
                      :aria-label="`${t('colLast')} — ${student.name}`"
                      class="h-9 w-16 rounded-md border bg-surface px-2 text-center text-copy-sm tabular-nums text-fg transition-colors focus:border-accent"
                      :class="savedRows.has(i) ? 'border-success bg-success-tint' : 'border-line'"
                      @change="onGradeChange(i)"
                    >
                    <span
                      class="text-label-sm text-success transition-opacity"
                      :class="savedRows.has(i) ? 'opacity-100' : 'opacity-0'"
                    >{{ t('saved') }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-right">
                  <button
                    type="button"
                    class="grid h-8 w-8 place-items-center rounded text-fg-subtle transition-colors hover:bg-surface-3 hover:text-fg"
                    :aria-label="`${t('colAction')} — ${student.name}`"
                  >
                    <UiIcon name="more_vert" :size="18" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between gap-3 border-t border-line px-6 py-4">
          <p class="text-label-sm text-fg-muted">{{ t('showing') }}</p>
          <div class="flex gap-2">
            <UiButton variant="outline" size="sm" icon="chevron_left">{{ t('prev') }}</UiButton>
            <UiButton size="sm" icon-trailing="chevron_right">{{ t('next') }}</UiButton>
          </div>
        </div>
      </UiCard>

      <!-- Inbox -->
      <UiCard padded="lg" class="flex flex-col lg:col-span-4">
        <div class="flex items-center gap-3">
          <span class="grid h-9 w-9 place-items-center rounded-md bg-accent-tint text-on-accent-tint">
            <UiIcon name="forum" :size="18" />
          </span>
          <h2 class="font-display text-title-3 text-fg">{{ t('inboxTitle') }}</h2>
          <UiBadge tone="danger" class="ml-auto">3</UiBadge>
        </div>

        <ul class="thin-scrollbar mt-5 flex max-h-[26rem] flex-1 flex-col gap-2 overflow-y-auto pr-1">
          <li v-for="msg in messages" :key="msg.subject">
            <button
              type="button"
              class="w-full rounded-lg border p-4 text-left transition-colors"
              :class="msg.unread
                ? 'border-line bg-surface hover:border-line-strong hover:bg-surface-2'
                : 'border-transparent bg-surface-2 hover:bg-surface-3'"
            >
              <div class="flex items-center justify-between gap-2">
                <span class="flex items-center gap-2 text-label font-medium text-fg">
                  <span v-if="msg.unread" class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {{ msg.name }}
                </span>
                <span class="shrink-0 text-label-sm text-fg-subtle">{{ msg.time }}</span>
              </div>
              <p class="mt-1.5 truncate text-copy-sm font-medium text-fg">{{ msg.subject }}</p>
              <p class="mt-1 line-clamp-2 text-label-sm text-fg-muted">{{ msg.body }}</p>
            </button>
          </li>
        </ul>

        <UiButton block class="mt-5" icon="edit_square">{{ t('compose') }}</UiButton>
      </UiCard>

      <!-- Courses -->
      <section class="lg:col-span-12">
        <div class="mb-4 flex items-center gap-4">
          <h2 class="font-display text-title-3 text-fg">{{ t('coursesTitle') }}</h2>
          <span class="h-px flex-1 bg-line" />
          <UiButton variant="ghost" size="sm" icon-trailing="arrow_forward">{{ t('manageAll') }}</UiButton>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <UiCard v-for="course in courses" :key="course.title" interactive>
            <span class="grid h-11 w-11 place-items-center rounded-md bg-brand text-on-brand">
              <UiIcon :name="course.icon" :size="20" />
            </span>
            <h3 class="mt-5 font-display text-title-4 text-fg">{{ course.title }}</h3>
            <p class="mt-1 text-copy-sm text-fg-muted">{{ course.sub }}</p>

            <div class="mt-5 flex items-center justify-between border-t border-line pt-4">
              <div class="flex -space-x-2">
                <UiAvatar v-for="m in course.members" :key="m" :name="m" :size="26" class="!border-2 !border-surface" />
                <span class="grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-surface bg-surface-3 text-[10px] font-semibold text-fg-muted">
                  {{ course.extra }}
                </span>
              </div>
              <span class="text-label-sm font-medium text-fg-muted">{{ course.count }}</span>
            </div>
          </UiCard>
        </div>
      </section>
    </div>

    <!-- ── Quick actions ────────────────────────────────────────────────── -->
    <div class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <Transition
        enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 translate-y-2"
        leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 translate-y-2"
      >
        <div v-if="quickOpen" class="flex flex-col items-end gap-2">
          <UiButton
            v-for="action in [
              { icon: 'assignment_add', label: t('newAssignment') },
              { icon: 'campaign', label: t('broadcast') },
              { icon: 'person_add', label: t('enroll') },
            ]"
            :key="action.label"
            variant="subtle" :icon="action.icon" class="shadow-lift"
          >{{ action.label }}</UiButton>
        </div>
      </Transition>

      <button
        type="button"
        class="grid h-14 w-14 place-items-center rounded-full bg-accent text-on-accent shadow-pop transition-transform duration-200 hover:scale-105 active:scale-95"
        :aria-label="t('quickActions')"
        :aria-expanded="quickOpen"
        @click="quickOpen = !quickOpen"
      >
        <UiIcon :name="quickOpen ? 'close' : 'add'" :size="24" />
      </button>
    </div>
  </PortalShell>
</template>
