<script setup lang="ts">
definePageMeta({ layout: 'portal', middleware: 'auth' })
useHead({ title: 'Admin Dashboard' })

const { t } = useI18n({
  en: {
    audience: 'Administrator',
    title: 'Academic analytics',
    subtitle: "Overview of Bright Future High School's performance and operations.",
    search: 'Search school records…',
    navDashboard: 'Dashboard', navUsers: 'Users', navAdmissions: 'Admissions',
    navFinance: 'Finance', navAttendance: 'Attendance', navReports: 'Reports',
    navTours: 'Campus tours', navSettings: 'Settings',
    exportReport: 'Export report', newEntry: 'New entry',

    kpiStudents: 'Total students', kpiStaff: 'Active staff',
    kpiAttendance: 'Daily attendance', kpiRevenue: 'Revenue (MTD)',
    ofCapacity: 'of capacity',

    trendsTitle: 'Financial trends', trendsSub: 'Income against target, year to date.',
    income: 'Income', expense: 'Expense',

    toursTitle: 'Campus tours', slotsAvailable: '12 slots available',
    tour1: 'Science Wing Tour', tour1Time: 'Tomorrow, 10:00 AM',
    tour2: 'Athletic Center Prep', tour2Time: 'Wed, 2:30 PM',
    manageCalendar: 'Manage calendar',

    usersTitle: 'User management',
    filterAll: 'All users', filterStudents: 'Students', filterTeachers: 'Teachers', filterStaff: 'Staff',
    colUser: 'User', colRole: 'Role', colStatus: 'Status', colJoined: 'Joined', colActions: 'Actions',
    roleStudent: 'Student', roleFaculty: 'Faculty', roleAdmin: 'Admin staff',
    statusActive: 'Active', statusLeave: 'On leave',
    showing: 'Showing 1–3 of 1,245 users', prev: 'Previous', next: 'Next',
  },
  km: {
    audience: 'អ្នកគ្រប់គ្រង',
    title: 'ការវិភាគសិក្សា',
    subtitle: 'ទិដ្ឋភាពទូទៅនៃលទ្ធផល និងប្រតិបត្តិការរបស់វិទ្យាល័យអនាគតភ្លឺស្វាង។',
    search: 'ស្វែងរកកំណត់ត្រាសាលា…',
    navDashboard: 'ផ្ទាំងគ្រប់គ្រង', navUsers: 'អ្នកប្រើប្រាស់', navAdmissions: 'ការចូលរៀន',
    navFinance: 'ហិរញ្ញវត្ថុ', navAttendance: 'វត្តមាន', navReports: 'របាយការណ៍',
    navTours: 'ដំណើរទស្សនា', navSettings: 'ការកំណត់',
    exportReport: 'នាំចេញរបាយការណ៍', newEntry: 'បញ្ចូលថ្មី',

    kpiStudents: 'សិស្សសរុប', kpiStaff: 'បុគ្គលិកសកម្ម',
    kpiAttendance: 'វត្តមានប្រចាំថ្ងៃ', kpiRevenue: 'ចំណូល (ខែនេះ)',
    ofCapacity: 'នៃសមត្ថភាព',

    trendsTitle: 'និន្នាការហិរញ្ញវត្ថុ', trendsSub: 'ចំណូលធៀបនឹងគោលដៅ ចាប់ពីដើមឆ្នាំ។',
    income: 'ចំណូល', expense: 'ចំណាយ',

    toursTitle: 'ដំណើរទស្សនាបរិវេណ', slotsAvailable: 'នៅទំនេរ ១២ កន្លែង',
    tour1: 'ទស្សនាមហាស្ថានវិទ្យាសាស្ត្រ', tour1Time: 'ថ្ងៃស្អែក ១០:០០ ព្រឹក',
    tour2: 'រៀបចំមជ្ឈមណ្ឌលកីឡា', tour2Time: 'ថ្ងៃពុធ ២:៣០ រសៀល',
    manageCalendar: 'គ្រប់គ្រងប្រតិទិន',

    usersTitle: 'គ្រប់គ្រងអ្នកប្រើប្រាស់',
    filterAll: 'ទាំងអស់', filterStudents: 'សិស្ស', filterTeachers: 'គ្រូ', filterStaff: 'បុគ្គលិក',
    colUser: 'អ្នកប្រើប្រាស់', colRole: 'តួនាទី', colStatus: 'ស្ថានភាព', colJoined: 'ចូលរួម', colActions: 'សកម្មភាព',
    roleStudent: 'សិស្ស', roleFaculty: 'គ្រូបង្រៀន', roleAdmin: 'បុគ្គលិករដ្ឋបាល',
    statusActive: 'សកម្ម', statusLeave: 'ឈប់សម្រាក',
    showing: 'បង្ហាញ ១–៣ ក្នុងចំណោម ១,២៤៥ នាក់', prev: 'មុន', next: 'បន្ទាប់',
  },
})

const nav = computed(() => [
  { label: t('navDashboard'), icon: 'grid_view', to: '/admin' },
  { label: t('navUsers'), icon: 'group' },
  { label: t('navAdmissions'), icon: 'how_to_reg', badge: 12 },
  { label: t('navFinance'), icon: 'payments' },
  { label: t('navAttendance'), icon: 'event_available' },
  { label: t('navReports'), icon: 'monitoring' },
  { label: t('navTours'), icon: 'tour' },
  { label: t('navSettings'), icon: 'settings' },
])

const kpis = computed(() => [
  { icon: 'school', value: '2,482', label: t('kpiStudents'), delta: '+4.2%', deltaTone: 'success' as const, progress: 75 },
  { icon: 'groups', value: '156', label: t('kpiStaff'), delta: '-1.2%', deltaTone: 'danger' as const, progress: 66 },
  { icon: 'check_circle', value: '94.8%', label: t('kpiAttendance'), delta: '+2.1%', deltaTone: 'success' as const, progress: 95 },
  { icon: 'payments', value: '$420.5k', label: t('kpiRevenue'), delta: '+12.5%', deltaTone: 'success' as const, progress: 50 },
])

/* Monthly income, indexed 0–100 against target. */
const months = [
  { label: 'Jan', value: 40 }, { label: 'Feb', value: 55 }, { label: 'Mar', value: 45 },
  { label: 'Apr', value: 70 }, { label: 'May', value: 65 }, { label: 'Jun', value: 85 },
  { label: 'Jul', value: 95 },
]
const chartReady = ref(false)
onMounted(() => requestAnimationFrame(() => { chartReady.value = true }))

const series = ref<'income' | 'expense'>('income')

const tours = computed(() => [
  { title: t('tour1'), time: t('tour1Time') },
  { title: t('tour2'), time: t('tour2Time') },
])

const users = computed(() => [
  { name: 'Julian Smith', email: 'julian.s@bfhs.edu', role: t('roleStudent'), roleTone: 'brand' as const, status: t('statusActive'), active: true, joined: 'Sept 2023' },
  { name: 'Laura Mendez', email: 'l.mendez@bfhs.edu', role: t('roleFaculty'), roleTone: 'accent' as const, status: t('statusActive'), active: true, joined: 'Aug 2021' },
  { name: 'Robert Taylor', email: 'r.taylor@bfhs.edu', role: t('roleAdmin'), roleTone: 'neutral' as const, status: t('statusLeave'), active: false, joined: 'Jan 2022' },
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
      <UiButton variant="outline" icon="download">{{ t('exportReport') }}</UiButton>
      <UiButton icon="add">{{ t('newEntry') }}</UiButton>
    </template>

    <!-- KPIs -->
    <div class="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="kpi in kpis" :key="kpi.label" class="bg-surface p-5">
        <UiStat
          :icon="kpi.icon" :value="kpi.value" :label="kpi.label"
          :delta="kpi.delta" :delta-tone="kpi.deltaTone"
        />
        <div class="mt-4 h-1 overflow-hidden rounded-full bg-surface-3">
          <div
            class="h-full rounded-full bg-accent transition-[width] duration-700 ease-out"
            :style="{ width: chartReady ? `${kpi.progress}%` : '0%' }"
          />
        </div>
      </div>
    </div>

    <div class="mt-5 grid gap-5 lg:grid-cols-12">
      <!-- Financial trends -->
      <UiCard padded="lg" class="lg:col-span-8">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 class="font-display text-title-2 text-fg">{{ t('trendsTitle') }}</h2>
            <p class="mt-1 text-copy-sm text-fg-muted">{{ t('trendsSub') }}</p>
          </div>
          <div class="inline-flex rounded-md border border-line bg-surface-2 p-0.5" role="group">
            <button
              v-for="s in (['income', 'expense'] as const)" :key="s"
              type="button"
              class="rounded px-3 py-1.5 text-label transition-colors"
              :class="series === s ? 'bg-surface text-fg shadow-hair' : 'text-fg-muted hover:text-fg'"
              :aria-pressed="series === s"
              @click="series = s"
            >{{ s === 'income' ? t('income') : t('expense') }}</button>
          </div>
        </div>

        <div class="relative mt-8 h-64">
          <!-- Gridlines -->
          <div class="pointer-events-none absolute inset-0 flex flex-col justify-between" aria-hidden="true">
            <span v-for="n in 5" :key="n" class="h-px w-full bg-line" />
          </div>

          <div class="relative flex h-full items-end gap-2 sm:gap-4">
            <div v-for="(m, i) in months" :key="m.label" class="group flex h-full flex-1 flex-col justify-end">
              <div
                class="w-full rounded-t-md bg-brand-tint transition-[height,background-color] duration-700 ease-out group-hover:bg-accent"
                :style="{ height: chartReady ? `${m.value}%` : '0%', transitionDelay: `${i * 60}ms` }"
              />
            </div>
          </div>
        </div>

        <div class="mt-3 flex gap-2 border-t border-line pt-3 sm:gap-4">
          <span v-for="m in months" :key="m.label" class="flex-1 text-center text-label-sm text-fg-subtle">{{ m.label }}</span>
        </div>
      </UiCard>

      <!-- Campus tours -->
      <UiCard padded="lg" class="flex flex-col lg:col-span-4">
        <h2 class="font-display text-title-3 text-fg">{{ t('toursTitle') }}</h2>

        <div class="relative mt-5 overflow-hidden rounded-lg border border-line">
          <img
            alt="" loading="lazy" class="h-32 w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpi0q0ESCfuPmdAAJszM4wEFkEyK2wZRRCDcShHJMkt4SSpx-khBDogmg8-yErYaGgGl48BNF4_N0IJ43M2SdxPueOoIA1uOiOYCpLw4-NQJ0Q5N-ABietJmWfb0RlnfZ0C95CfsQgtgn9HZidwxr2aRTaAkbubgzIRox8gsLA1-0lvl56RbqihTB7XFeEd697pd_cmGJnkK8rHYTbL0wfr_-ZsutI5fWUkggbuxbV94_TXZeDwRDn7l_jcrclNWfbT7dltw2C-w"
          >
          <div class="scrim-b absolute inset-0" />
          <p class="absolute bottom-3 left-3 flex items-center gap-1.5 text-label-sm font-medium text-on-dark">
            <UiIcon name="visibility" :size="15" />{{ t('slotsAvailable') }}
          </p>
        </div>

        <ul class="mt-4 flex-1 space-y-2">
          <li v-for="tour in tours" :key="tour.title">
            <button
              type="button"
              class="flex w-full items-center justify-between gap-3 rounded-lg border border-line bg-surface-2 p-3.5 text-left transition-colors hover:border-line-strong hover:bg-surface-3"
            >
              <span>
                <span class="block text-copy-sm font-medium text-fg">{{ tour.title }}</span>
                <span class="mt-0.5 block text-label-sm text-fg-muted">{{ tour.time }}</span>
              </span>
              <UiIcon name="chevron_right" :size="18" class="text-fg-subtle" />
            </button>
          </li>
        </ul>

        <UiButton block class="mt-5" icon="calendar_month">{{ t('manageCalendar') }}</UiButton>
      </UiCard>

      <!-- Users -->
      <UiCard :padded="false" class="overflow-hidden lg:col-span-12">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-5">
          <h2 class="font-display text-title-3 text-fg">{{ t('usersTitle') }}</h2>
          <label class="inline-flex items-center gap-2">
            <span class="sr-only">{{ t('filterAll') }}</span>
            <UiIcon name="filter_list" :size="18" class="text-fg-subtle" />
            <select class="h-9 rounded-md border border-line bg-surface-2 px-3 text-label text-fg focus:border-accent">
              <option>{{ t('filterAll') }}</option>
              <option>{{ t('filterStudents') }}</option>
              <option>{{ t('filterTeachers') }}</option>
              <option>{{ t('filterStaff') }}</option>
            </select>
          </label>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr class="border-b border-line bg-surface-2">
                <th scope="col" class="px-6 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colUser') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colRole') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colStatus') }}</th>
                <th scope="col" class="px-4 py-3 text-eyebrow uppercase text-fg-subtle">{{ t('colJoined') }}</th>
                <th scope="col" class="px-6 py-3 text-right text-eyebrow uppercase text-fg-subtle">{{ t('colActions') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-line">
              <tr v-for="user in users" :key="user.email" class="transition-colors hover:bg-surface-2">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <UiAvatar :name="user.name" :size="36" />
                    <div>
                      <p class="text-copy-sm font-medium text-fg">{{ user.name }}</p>
                      <p class="text-label-sm text-fg-subtle">{{ user.email }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4"><UiBadge :tone="user.roleTone">{{ user.role }}</UiBadge></td>
                <td class="px-4 py-4">
                  <UiBadge :tone="user.active ? 'success' : 'neutral'" dot>{{ user.status }}</UiBadge>
                </td>
                <td class="px-4 py-4 text-copy-sm text-fg-muted">{{ user.joined }}</td>
                <td class="px-6 py-4 text-right">
                  <button
                    type="button"
                    class="grid h-8 w-8 place-items-center rounded text-fg-subtle transition-colors hover:bg-surface-3 hover:text-fg"
                    :aria-label="`${t('colActions')} — ${user.name}`"
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
    </div>
  </PortalShell>
</template>
