<script setup lang="ts">
/**
 * The single chrome for every portal dashboard: rail, top bar, content well and
 * footer. Pages supply only their nav set, heading and body — previously each
 * of the four dashboards hand-rolled its own copy of all of this.
 */
export interface PortalNavItem {
  label: string
  icon: string
  to?: string
  badge?: string | number
}

const props = withDefaults(defineProps<{
  /** Role label shown under the crest, e.g. "Student". */
  audience: string
  nav: PortalNavItem[]
  title: string
  subtitle?: string
  searchPlaceholder?: string
  /** Constrain the content well; dashboards with wide tables can opt out. */
  narrow?: boolean
}>(), { narrow: false })

const route = useRoute()
const { user, logout } = useAuth()

const { t } = useI18n({
  en: {
    openNav: 'Open navigation', closeNav: 'Close navigation',
    search: 'Search', notifications: 'Notifications', account: 'Account',
    logout: 'Log out', backToSite: 'Back to website', help: 'Help desk',
    helpTitle: 'Need a hand?', helpBody: 'IT support covers portal access, devices and password resets.',
    signedInAs: 'Signed in as', preferences: 'Preferences',
    copyright: '© 2024 Bright Future High School.',
    privacy: 'Privacy', accessibility: 'Accessibility', support: 'Support',
  },
  km: {
    openNav: 'បើកម៉ឺនុយ', closeNav: 'បិទម៉ឺនុយ',
    search: 'ស្វែងរក', notifications: 'ការជូនដំណឹង', account: 'គណនី',
    logout: 'ចាកចេញ', backToSite: 'ត្រឡប់ទៅគេហទំព័រ', help: 'ជំនួយបច្ចេកទេស',
    helpTitle: 'ត្រូវការជំនួយ?', helpBody: 'ផ្នែក IT ជួយរឿងការចូលប្រើ ឧបករណ៍ និងការកំណត់ពាក្យសម្ងាត់ឡើងវិញ។',
    signedInAs: 'បានចូលគណនីជា', preferences: 'ចំណូលចិត្ត',
    copyright: '© ២០២៤ វិទ្យាល័យអនាគតភ្លឺស្វាង។',
    privacy: 'ឯកជនភាព', accessibility: 'ភាពងាយស្រួលប្រើ', support: 'ជំនួយ',
  },
})

const navOpen = ref(false)
const accountOpen = ref(false)
const query = ref('')

const displayName = computed(() => user.value?.name ?? props.audience)
const isActive = (item: PortalNavItem) => !!item.to && route.path === item.to

async function onLogout() {
  await logout()
  navigateTo('/')
}

watch(() => route.fullPath, () => { navOpen.value = false; accountOpen.value = false })
watch(navOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>

<template>
  <div class="min-h-dvh bg-bg text-fg">
    <!-- ── Rail ───────────────────────────────────────────────────────────── -->
    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col border-r border-line bg-surface transition-transform duration-300 ease-out lg:translate-x-0"
      :class="navOpen ? 'translate-x-0 shadow-pop' : '-translate-x-full'"
    >
      <div class="flex h-16 items-center justify-between gap-2 border-b border-line px-5">
        <BrandMark :subtitle="props.audience" />
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded text-fg-muted hover:bg-surface-2 hover:text-fg lg:hidden"
          :aria-label="t('closeNav')"
          @click="navOpen = false"
        >
          <UiIcon name="close" :size="18" />
        </button>
      </div>

      <nav class="thin-scrollbar flex-1 overflow-y-auto px-3 py-4" aria-label="Portal">
        <ul class="flex flex-col gap-0.5">
          <li v-for="item in props.nav" :key="item.label">
            <component
              :is="item.to ? resolveComponent('NuxtLink') : 'a'"
              :to="item.to"
              :href="item.to ? undefined : '#'"
              class="group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-label transition-colors duration-150"
              :class="isActive(item)
                ? 'bg-brand-tint font-medium text-on-brand-tint'
                : 'text-fg-muted hover:bg-surface-2 hover:text-fg'"
              :aria-current="isActive(item) ? 'page' : undefined"
            >
              <span
                class="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-accent transition-opacity"
                :class="isActive(item) ? 'opacity-100' : 'opacity-0'"
              />
              <UiIcon :name="item.icon" :size="19" :filled="isActive(item)" />
              <span class="flex-1 truncate">{{ item.label }}</span>
              <UiBadge v-if="item.badge" tone="accent">{{ item.badge }}</UiBadge>
            </component>
          </li>
        </ul>
      </nav>

      <div class="border-t border-line p-3">
        <div class="rounded-lg border border-line bg-surface-2 p-4">
          <p class="text-label font-medium text-fg">{{ t('helpTitle') }}</p>
          <p class="mt-1 text-label-sm leading-relaxed text-fg-muted">{{ t('helpBody') }}</p>
          <UiButton variant="outline" size="sm" block class="mt-3" icon="support_agent">{{ t('help') }}</UiButton>
        </div>
        <NuxtLink
          to="/"
          class="mt-3 flex items-center gap-2 rounded-md px-3 py-2 text-label-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
        >
          <UiIcon name="arrow_back" :size="16" />{{ t('backToSite') }}
        </NuxtLink>
      </div>
    </aside>

    <div
      v-if="navOpen"
      class="fixed inset-0 z-40 bg-overlay/50 backdrop-blur-[2px] lg:hidden"
      @click="navOpen = false"
    />

    <!-- ── Main column ───────────────────────────────────────────────────── -->
    <div class="flex min-h-dvh flex-col lg:pl-[272px]">
      <header class="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md">
        <div class="flex h-16 items-center gap-3 px-page sm:px-6 lg:px-8">
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-md border border-line text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
            :aria-label="t('openNav')"
            @click="navOpen = true"
          >
            <UiIcon name="menu" :size="20" />
          </button>

          <div class="relative hidden max-w-sm flex-1 md:block">
            <UiIcon name="search" :size="18" class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle" />
            <input
              v-model="query"
              type="search"
              :placeholder="props.searchPlaceholder || t('search')"
              :aria-label="t('search')"
              class="h-9 w-full rounded-md border border-line bg-surface-2 pl-9 pr-3 text-copy-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:bg-surface"
            >
          </div>

          <div class="ml-auto flex items-center gap-2">
            <UiLocaleToggle />
            <UiThemeToggle />

            <button
              type="button"
              class="relative grid h-9 w-9 place-items-center rounded-md border border-line text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
              :aria-label="t('notifications')"
            >
              <UiIcon name="notifications" :size="18" />
              <span class="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-danger ring-2 ring-bg" />
            </button>

            <!-- Account menu -->
            <div class="relative">
              <button
                type="button"
                class="flex items-center gap-2 rounded-md border border-line py-1 pl-1 pr-2 transition-colors hover:bg-surface-2"
                :aria-label="t('account')"
                :aria-expanded="accountOpen"
                @click="accountOpen = !accountOpen"
              >
                <UiAvatar :name="displayName" :size="28" square />
                <span class="hidden text-label text-fg sm:block">{{ displayName }}</span>
                <UiIcon name="expand_more" :size="16" class="text-fg-subtle" />
              </button>

              <Transition
                enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 scale-95"
                leave-active-class="transition duration-100 ease-in" leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-if="accountOpen"
                  class="absolute right-0 top-full z-50 mt-2 w-60 origin-top-right rounded-lg border border-line bg-surface p-1.5 shadow-pop"
                >
                  <div class="border-b border-line px-3 py-2.5">
                    <p class="text-label-sm text-fg-subtle">{{ t('signedInAs') }}</p>
                    <p class="truncate text-label font-medium text-fg">{{ displayName }}</p>
                    <p class="mt-0.5 text-label-sm text-fg-muted">{{ props.audience }}</p>
                  </div>
                  <NuxtLink to="/" class="mt-1.5 flex items-center gap-2.5 rounded px-3 py-2 text-label text-fg-muted hover:bg-surface-2 hover:text-fg">
                    <UiIcon name="home" :size="17" />{{ t('backToSite') }}
                  </NuxtLink>
                  <button
                    type="button"
                    class="flex w-full items-center gap-2.5 rounded px-3 py-2 text-label text-danger hover:bg-danger-tint"
                    @click="onLogout"
                  >
                    <UiIcon name="logout" :size="17" />{{ t('logout') }}
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </header>

      <!-- Click-away for the account menu without trapping page clicks. -->
      <div v-if="accountOpen" class="fixed inset-0 z-20" @click="accountOpen = false" />

      <main class="flex-1 px-page py-6 sm:px-6 lg:px-8 lg:py-8">
        <div :class="props.narrow ? 'mx-auto max-w-4xl' : 'mx-auto max-w-[1400px]'">
          <div class="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 class="font-display text-title-1 text-fg">{{ props.title }}</h1>
              <p v-if="props.subtitle" class="mt-1.5 text-copy-sm text-fg-muted">{{ props.subtitle }}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <slot name="actions" />
            </div>
          </div>

          <slot />
        </div>
      </main>

      <footer class="border-t border-line px-page py-5 sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 text-label-sm text-fg-subtle sm:flex-row">
          <p>{{ t('copyright') }}</p>
          <ul class="flex items-center gap-5">
            <li><a href="#" class="transition-colors hover:text-fg">{{ t('privacy') }}</a></li>
            <li><a href="#" class="transition-colors hover:text-fg">{{ t('accessibility') }}</a></li>
            <li><a href="#" class="transition-colors hover:text-fg">{{ t('support') }}</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>
