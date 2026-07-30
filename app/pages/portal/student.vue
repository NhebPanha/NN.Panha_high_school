<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead({ title: 'Student Portal' })

const { t } = useI18n({
  en: {
    audience: 'Student',
    title: 'Dashboard', subtitle: 'Semester 2 · 2024–25 · Grade 11-A',
    search: 'Search classes, assignments…',
    navDashboard: 'Dashboard', navProfile: 'Profile', navAttendance: 'Attendance',
    navGrades: 'Grades', navSchedule: 'Schedule', navAssignments: 'Assignments',
    navResources: 'Resources', navSettings: 'Settings',
    downloadReport: 'Report card', submitWork: 'Submit work',

    gpa: 'GPA', rank: 'Class rank', credits: 'Credits earned',
    activeStudent: 'Active student',
    attendance: 'Attendance', present: 'present', attendanceNote: '2 days missed this semester',
    todaySchedule: "Today's schedule", viewWeek: 'View full week',
    math: 'Advanced Mathematics', mathRoom: 'Room 302 · Dr. Aris',
    history: 'World History', historyRoom: 'Room 105 · Ms. Vance',
    physics: 'Physics Lab', physicsRoom: 'Lab B · Mr. Sterling',
    now: 'Now', next: 'Next',

    assignments: 'Recent assignments', markAll: 'Mark all done',
    critical: 'Critical', upcoming: 'Upcoming', draft: 'Draft',
    a1: 'Calculus: Integral Calculus Practice', a1meta: 'Math · Unit 4', a1due: 'Due in 2h',
    a2: 'French Revolution Essay', a2meta: 'History · Term 2', a2due: 'Due in 2 days',
    a3: 'Newtonian Dynamics Lab Report', a3meta: 'Physics · Module 2', a3due: 'Due in 4 days',
    submitNew: 'Submit new',

    examResults: 'Semester exam results',
    colSubject: 'Subject', colScore: 'Score', colGrade: 'Grade', colStatus: 'Status',
    cs: 'Computer Science II', chem: 'Organic Chemistry', econ: 'Macroeconomics',
    excelled: 'Excelled', passed: 'Passed',

    notifications: 'Notifications', clearAll: 'Clear all',
    n1: 'Annual Sports Day rescheduled', n1time: '2 hours ago',
    n2: 'Library fine of $5.00 overdue', n2time: 'Yesterday',
    n3: 'Club registrations are now open', n3time: '2 days ago',

    assistant: 'Portal assistant', openAssistant: 'Open portal assistant',
    chat1: 'Hello! How can I help you with your studies today?',
    chat2: 'When is my next assignment due?',
    chat3: 'Your Integral Calculus Practice is due in 2 hours. Would you like me to open the resource page?',
    chatPlaceholder: 'Type a message…', send: 'Send',
  },
  km: {
    audience: 'សិស្ស',
    title: 'ផ្ទាំងគ្រប់គ្រង', subtitle: 'ឆមាសទី ២ · ២០២៤–២៥ · ថ្នាក់ ១១-ក',
    search: 'ស្វែងរកថ្នាក់ កិច្ចការ…',
    navDashboard: 'ផ្ទាំងគ្រប់គ្រង', navProfile: 'ប្រវត្តិរូប', navAttendance: 'វត្តមាន',
    navGrades: 'ពិន្ទុ', navSchedule: 'កាលវិភាគ', navAssignments: 'កិច្ចការ',
    navResources: 'ធនធាន', navSettings: 'ការកំណត់',
    downloadReport: 'សន្លឹកពិន្ទុ', submitWork: 'ដាក់ស្នើកិច្ចការ',

    gpa: 'ពិន្ទុមធ្យម', rank: 'ចំណាត់ថ្នាក់', credits: 'ឥណទានទទួលបាន',
    activeStudent: 'សិស្សសកម្ម',
    attendance: 'វត្តមាន', present: 'មានវត្តមាន', attendanceNote: 'អវត្តមាន ២ ថ្ងៃក្នុងឆមាសនេះ',
    todaySchedule: 'កាលវិភាគថ្ងៃនេះ', viewWeek: 'មើលពេញសប្ដាហ៍',
    math: 'គណិតវិទ្យាកម្រិតខ្ពស់', mathRoom: 'បន្ទប់ ៣០២ · Dr. Aris',
    history: 'ប្រវត្តិសាស្ត្រពិភពលោក', historyRoom: 'បន្ទប់ ១០៥ · Ms. Vance',
    physics: 'មន្ទីរពិសោធន៍រូបវិទ្យា', physicsRoom: 'Lab B · Mr. Sterling',
    now: 'ឥឡូវ', next: 'បន្ទាប់',

    assignments: 'កិច្ចការថ្មីៗ', markAll: 'សម្គាល់ថារួចរាល់',
    critical: 'បន្ទាន់', upcoming: 'ខាងមុខ', draft: 'ព្រាង',
    a1: 'Calculus: លំហាត់អាំងតេក្រាល', a1meta: 'គណិត · ជំពូក ៤', a1due: 'ផុតកំណត់ក្នុង ២ ម៉ោង',
    a2: 'អត្ថបទបដិវត្តន៍បារាំង', a2meta: 'ប្រវត្តិសាស្ត្រ · ឆមាស ២', a2due: 'ផុតកំណត់ក្នុង ២ ថ្ងៃ',
    a3: 'របាយការណ៍ពិសោធន៍ Newtonian', a3meta: 'រូបវិទ្យា · ម៉ូឌុល ២', a3due: 'ផុតកំណត់ក្នុង ៤ ថ្ងៃ',
    submitNew: 'ដាក់ស្នើថ្មី',

    examResults: 'លទ្ធផលប្រឡងឆមាស',
    colSubject: 'មុខវិជ្ជា', colScore: 'ពិន្ទុ', colGrade: 'និទ្ទេស', colStatus: 'ស្ថានភាព',
    cs: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ II', chem: 'គីមីសរីរាង្គ', econ: 'ម៉ាក្រូសេដ្ឋកិច្ច',
    excelled: 'ពូកែ', passed: 'ជាប់',

    notifications: 'ការជូនដំណឹង', clearAll: 'សម្អាតទាំងអស់',
    n1: 'ថ្ងៃកីឡាប្រចាំឆ្នាំត្រូវបានផ្លាស់ប្ដូរ', n1time: '២ ម៉ោងមុន',
    n2: 'ប្រាក់ពិន័យបណ្ណាល័យ $៥.០០ ហួសកំណត់', n2time: 'ម្សិលមិញ',
    n3: 'ការចុះឈ្មោះក្លឹបបើកហើយ', n3time: '២ ថ្ងៃមុន',

    assistant: 'ជំនួយការផតថល', openAssistant: 'បើកជំនួយការផតថល',
    chat1: 'សួស្ដី! តើខ្ញុំអាចជួយអ្វីខ្លះថ្ងៃនេះ?',
    chat2: 'តើកិច្ចការបន្ទាប់ផុតកំណត់នៅពេលណា?',
    chat3: 'លំហាត់អាំងតេក្រាលរបស់អ្នកផុតកំណត់ក្នុង ២ ម៉ោង។ តើចង់ឱ្យខ្ញុំបើកទំព័រធនធានទេ?',
    chatPlaceholder: 'សរសេរសារ…', send: 'ផ្ញើ',
  },
})

const nav = computed(() => [
  { label: t('navDashboard'), icon: 'grid_view', to: '/portal/student' },
  { label: t('navProfile'), icon: 'person' },
  { label: t('navAttendance'), icon: 'event_available' },
  { label: t('navGrades'), icon: 'grade' },
  { label: t('navSchedule'), icon: 'calendar_month' },
  { label: t('navAssignments'), icon: 'assignment', badge: 3 },
  { label: t('navResources'), icon: 'folder' },
  { label: t('navSettings'), icon: 'settings' },
])

/* Attendance ring — animate the stroke in once mounted. */
const ATTENDANCE = 94
const RADIUS = 66
const CIRC = 2 * Math.PI * RADIUS
const dashOffset = ref(CIRC)
onMounted(() => {
  requestAnimationFrame(() => { dashOffset.value = CIRC * (1 - ATTENDANCE / 100) })
})

const schedule = computed(() => [
  { time: '08:30', meridiem: 'AM', title: t('math'), room: t('mathRoom'), state: 'now' },
  { time: '10:15', meridiem: 'AM', title: t('history'), room: t('historyRoom'), state: 'next' },
  { time: '01:00', meridiem: 'PM', title: t('physics'), room: t('physicsRoom'), state: 'later' },
])

const assignments = computed(() => [
  { title: t('a1'), meta: t('a1meta'), due: t('a1due'), tag: t('critical'), tone: 'danger' as const },
  { title: t('a2'), meta: t('a2meta'), due: t('a2due'), tag: t('upcoming'), tone: 'neutral' as const },
  { title: t('a3'), meta: t('a3meta'), due: t('a3due'), tag: t('draft'), tone: 'info' as const },
])

const results = computed(() => [
  { subject: t('cs'), score: '98 / 100', grade: 'A+', status: t('excelled'), tone: 'success' as const },
  { subject: t('chem'), score: '82 / 100', grade: 'B', status: t('passed'), tone: 'neutral' as const },
  { subject: t('econ'), score: '91 / 100', grade: 'A', status: t('excelled'), tone: 'success' as const },
])

const notifications = computed(() => [
  { icon: 'campaign', text: t('n1'), time: t('n1time'), tone: 'info' },
  { icon: 'error', text: t('n2'), time: t('n2time'), tone: 'warning' },
  { icon: 'groups', text: t('n3'), time: t('n3time'), tone: 'neutral' },
])

const NOTE_TONES: Record<string, string> = {
  info: 'border-l-info bg-info-tint/40 text-info',
  warning: 'border-l-warning bg-warning-tint/40 text-warning',
  neutral: 'border-l-line-strong bg-surface-2 text-fg-subtle',
}

const chatOpen = ref(false)
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
      <UiButton variant="outline" icon="download">{{ t('downloadReport') }}</UiButton>
      <UiButton icon="upload_file">{{ t('submitWork') }}</UiButton>
    </template>

    <div class="grid gap-5 lg:grid-cols-12">
      <!-- Profile summary -->
      <UiCard padded="lg" class="lg:col-span-8">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
          <UiAvatar
            name="Alex Sterling" :size="96" square
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4rSeKjbp132qCpqbaR1sd9uMiHN2zdW4M77dj0YnygUpaTgDRQtqnWxtEiOjbTZcJkkCA6cPcOa7G-f_Uw2MRQotvRRKXzLLfOreGVzrdR7KX_ZcU2xp-EPxk18afXhOjwC1Kpizq9KP0hY7Ds7IxjfKmD2ehtQnQ-hwprA-ErmOj3B6GI1mpzye5yiX6hb61OxWV7No9k9mNKQ6BOhLs7Plm1Y8_jM5hXNRcPs74pB1rgBbDwIfUTuCmo8tPZCZnbLFWmqhR9y4"
          />

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="font-display text-title-2 text-fg">Alex Sterling</h2>
              <UiBadge tone="success" dot>{{ t('activeStudent') }}</UiBadge>
            </div>
            <p class="mt-1 text-copy-sm text-fg-muted">Class of 2025 · Grade 11-A · ID 2024-0421</p>

            <dl class="mt-6 grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-surface-2">
              <div class="px-4 py-3.5">
                <dt class="text-label-sm text-fg-muted">{{ t('gpa') }}</dt>
                <dd class="mt-1 font-display text-title-2 tabular-nums text-fg">3.85</dd>
              </div>
              <div class="px-4 py-3.5">
                <dt class="text-label-sm text-fg-muted">{{ t('rank') }}</dt>
                <dd class="mt-1 font-display text-title-2 tabular-nums text-fg">12/140</dd>
              </div>
              <div class="px-4 py-3.5">
                <dt class="text-label-sm text-fg-muted">{{ t('credits') }}</dt>
                <dd class="mt-1 font-display text-title-2 tabular-nums text-fg">42</dd>
              </div>
            </dl>
          </div>
        </div>
      </UiCard>

      <!-- Attendance -->
      <UiCard padded="lg" class="lg:col-span-4">
        <h2 class="font-display text-title-3 text-fg">{{ t('attendance') }}</h2>
        <div class="mt-5 flex flex-col items-center">
          <div class="relative h-40 w-40">
            <svg viewBox="0 0 160 160" class="h-full w-full -rotate-90">
              <circle cx="80" cy="80" :r="RADIUS" fill="none" stroke="rgb(var(--c-surface-3))" stroke-width="12" />
              <circle
                cx="80" cy="80" :r="RADIUS" fill="none"
                stroke="rgb(var(--c-accent))" stroke-width="12" stroke-linecap="round"
                :stroke-dasharray="CIRC" :stroke-dashoffset="dashOffset"
                style="transition: stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)"
              />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="font-display text-metric tabular-nums text-fg">{{ ATTENDANCE }}%</span>
              <span class="text-label-sm text-fg-muted">{{ t('present') }}</span>
            </div>
          </div>
          <p class="mt-4 text-copy-sm text-fg-muted">{{ t('attendanceNote') }}</p>
        </div>
      </UiCard>

      <!-- Schedule -->
      <UiCard padded="lg" class="lg:col-span-5">
        <div class="flex items-center justify-between">
          <h2 class="font-display text-title-3 text-fg">{{ t('todaySchedule') }}</h2>
          <UiIcon name="calendar_today" :size="18" class="text-fg-subtle" />
        </div>

        <ul class="mt-5 divide-y divide-line border-y border-line">
          <li v-for="slot in schedule" :key="slot.title" class="flex items-center gap-4 py-4">
            <div class="w-14 shrink-0 text-right">
              <p class="text-label font-semibold tabular-nums text-fg">{{ slot.time }}</p>
              <p class="text-label-sm text-fg-subtle">{{ slot.meridiem }}</p>
            </div>
            <span
              class="h-10 w-0.5 shrink-0 rounded-full"
              :class="slot.state === 'now' ? 'bg-accent' : slot.state === 'next' ? 'bg-line-strong' : 'bg-line'"
            />
            <div class="min-w-0 flex-1">
              <p class="truncate text-copy-sm font-medium text-fg">{{ slot.title }}</p>
              <p class="mt-0.5 text-label-sm text-fg-muted">{{ slot.room }}</p>
            </div>
            <UiBadge v-if="slot.state === 'now'" tone="accent">{{ t('now') }}</UiBadge>
            <UiBadge v-else-if="slot.state === 'next'" tone="neutral">{{ t('next') }}</UiBadge>
          </li>
        </ul>

        <UiButton variant="ghost" block class="mt-4" icon-trailing="arrow_forward">{{ t('viewWeek') }}</UiButton>
      </UiCard>

      <!-- Assignments -->
      <UiCard padded="lg" class="lg:col-span-7">
        <div class="flex items-center justify-between gap-3">
          <h2 class="font-display text-title-3 text-fg">{{ t('assignments') }}</h2>
          <UiButton variant="ghost" size="sm" icon="done_all">{{ t('markAll') }}</UiButton>
        </div>

        <ul class="mt-5 grid gap-3 sm:grid-cols-2">
          <li
            v-for="a in assignments" :key="a.title"
            class="rounded-lg border border-line bg-surface-2 p-4 transition-colors hover:border-line-strong"
          >
            <div class="flex items-start justify-between gap-2">
              <UiBadge :tone="a.tone">{{ a.tag }}</UiBadge>
              <span class="text-label-sm text-fg-subtle">{{ a.due }}</span>
            </div>
            <p class="mt-3 line-clamp-2 text-copy-sm font-medium text-fg">{{ a.title }}</p>
            <p class="mt-1 text-label-sm text-fg-muted">{{ a.meta }}</p>
          </li>

          <li>
            <button
              type="button"
              class="flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-line-strong p-4 text-fg-muted transition-colors hover:border-accent hover:bg-accent-tint hover:text-on-accent-tint"
            >
              <UiIcon name="add_circle" :size="22" />
              <span class="text-label font-medium">{{ t('submitNew') }}</span>
            </button>
          </li>
        </ul>
      </UiCard>

      <!-- Exam results -->
      <UiCard :padded="false" class="overflow-hidden lg:col-span-8">
        <h2 class="border-b border-line px-6 py-5 font-display text-title-3 text-fg">{{ t('examResults') }}</h2>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr class="border-b border-line bg-surface-2">
                <th scope="col" class="px-6 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colSubject') }}</th>
                <th scope="col" class="px-4 py-3 text-center text-eyebrow uppercase text-fg-subtle">{{ t('colScore') }}</th>
                <th scope="col" class="px-4 py-3 text-center text-eyebrow uppercase text-fg-subtle">{{ t('colGrade') }}</th>
                <th scope="col" class="px-6 py-3 text-right text-eyebrow uppercase text-fg-subtle">{{ t('colStatus') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-line">
              <tr v-for="r in results" :key="r.subject" class="transition-colors hover:bg-surface-2">
                <td class="px-6 py-4 text-copy-sm font-medium text-fg">{{ r.subject }}</td>
                <td class="px-4 py-4 text-center text-copy-sm tabular-nums text-fg-muted">{{ r.score }}</td>
                <td class="px-4 py-4 text-center font-display text-title-4 text-fg">{{ r.grade }}</td>
                <td class="px-6 py-4 text-right"><UiBadge :tone="r.tone">{{ r.status }}</UiBadge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiCard>

      <!-- Notifications -->
      <UiCard padded="lg" class="flex flex-col lg:col-span-4">
        <h2 class="font-display text-title-3 text-fg">{{ t('notifications') }}</h2>
        <ul class="mt-5 flex flex-1 flex-col gap-3">
          <li
            v-for="n in notifications" :key="n.text"
            class="flex gap-3 rounded-r-md border-l-2 p-3"
            :class="NOTE_TONES[n.tone]"
          >
            <UiIcon :name="n.icon" :size="18" class="mt-0.5" />
            <div class="min-w-0">
              <p class="text-copy-sm font-medium text-fg">{{ n.text }}</p>
              <p class="mt-0.5 text-label-sm text-fg-subtle">{{ n.time }}</p>
            </div>
          </li>
        </ul>
        <UiButton variant="ghost" size="sm" block class="mt-4" icon="delete">{{ t('clearAll') }}</UiButton>
      </UiCard>
    </div>

    <!-- ── Assistant ────────────────────────────────────────────────────── -->
    <div class="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <Transition
        enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 translate-y-2"
        leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 translate-y-2"
      >
        <div
          v-if="chatOpen"
          class="flex w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-pop"
        >
          <div class="flex items-center justify-between gap-2 border-b border-line bg-brand px-4 py-3">
            <span class="flex items-center gap-2 text-label font-medium text-on-dark">
              <UiIcon name="auto_awesome" :size="17" class="text-accent" />{{ t('assistant') }}
            </span>
            <button
              type="button"
              class="grid h-7 w-7 place-items-center rounded text-on-dark-muted hover:bg-on-dark/10 hover:text-on-dark"
              aria-label="Close"
              @click="chatOpen = false"
            >
              <UiIcon name="close" :size="17" />
            </button>
          </div>

          <div class="thin-scrollbar flex h-64 flex-col gap-3 overflow-y-auto bg-surface-2 p-4">
            <div class="flex gap-2">
              <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint text-on-brand-tint">
                <UiIcon name="smart_toy" :size="15" />
              </span>
              <p class="max-w-[80%] rounded-lg rounded-tl-sm border border-line bg-surface px-3 py-2 text-label-sm text-fg">{{ t('chat1') }}</p>
            </div>
            <div class="flex flex-row-reverse gap-2">
              <UiAvatar name="Alex Sterling" :size="28" />
              <p class="max-w-[80%] rounded-lg rounded-tr-sm bg-brand px-3 py-2 text-label-sm text-on-brand">{{ t('chat2') }}</p>
            </div>
            <div class="flex gap-2">
              <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint text-on-brand-tint">
                <UiIcon name="smart_toy" :size="15" />
              </span>
              <p class="max-w-[80%] rounded-lg rounded-tl-sm border border-line bg-surface px-3 py-2 text-label-sm text-fg">{{ t('chat3') }}</p>
            </div>
          </div>

          <form class="flex gap-2 border-t border-line bg-surface p-3" @submit.prevent>
            <input
              type="text" :placeholder="t('chatPlaceholder')" :aria-label="t('chatPlaceholder')"
              class="h-9 w-full rounded-md border border-line bg-surface-2 px-3 text-label-sm text-fg placeholder:text-fg-subtle focus:border-accent"
            >
            <UiButton type="submit" size="sm" icon="send"><span class="sr-only">{{ t('send') }}</span></UiButton>
          </form>
        </div>
      </Transition>

      <button
        type="button"
        class="grid h-14 w-14 place-items-center rounded-full bg-brand text-on-brand shadow-pop transition-transform duration-200 hover:scale-105 active:scale-95"
        :aria-label="t('openAssistant')"
        :aria-expanded="chatOpen"
        @click="chatOpen = !chatOpen"
      >
        <UiIcon :name="chatOpen ? 'close' : 'smart_toy'" :size="22" />
      </button>
    </div>
  </PortalShell>
</template>
