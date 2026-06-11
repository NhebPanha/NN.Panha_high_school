<script setup lang="ts">
const { theme, toggle: toggleTheme } = useThemeControls()
const { locale, toggle: toggleLocale } = useLocaleControls()
const { isAuthenticated, user, logout } = useAuth()

const { t } = useI18n({
  en: {
    home: 'Home', about: 'About', academics: 'Academics', studentLife: 'Student Life',
    admissions: 'Admissions', news: 'News', portalLogin: 'Portal Login',
    dashboard: 'Dashboard', logout: 'Log out',
    school: 'Bright Future High School',
  },
  km: {
    home: 'ទំព័រដើម', about: 'អំពីយើង', academics: 'ការសិក្សា', studentLife: 'ជីវិតសិស្ស',
    admissions: 'ការចូលរៀន', news: 'ព័ត៌មាន', portalLogin: 'ចូលគណនី',
    dashboard: 'ផ្ទាំងគ្រប់គ្រង', logout: 'ចាកចេញ',
    school: 'វិទ្យាល័យអនាគតភ្លឺស្វាង',
  },
})

const myDashboard = computed(() => (user.value ? dashboardFor(user.value.role) : '/portal/login'))

async function onLogout() {
  mobileOpen.value = false
  await logout()
  navigateTo('/')
}

const links = computed(() => [
  { label: t('home'), to: '/' },
  { label: t('about'), to: '/about' },
  { label: t('academics'), to: '/academics' },
  { label: t('studentLife'), to: '/student-life' },
  { label: t('admissions'), to: '/admissions' },
  { label: t('news'), to: '/news' },
])

const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 transition-all duration-200"
    :class="scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'"
  >
    <div class="max-w-container-max mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop">
      <NuxtLink to="/" class="font-display-lg text-headline-sm font-bold text-primary">
        {{ t('school') }}
      </NuxtLink>
      <nav class="hidden md:flex items-center gap-gutter">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
          active-class="!text-secondary font-semibold border-b-2 border-secondary"
          :exact-active-class="link.to === '/' ? '!text-secondary font-semibold border-b-2 border-secondary' : ''"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-stack-sm">
        <!-- Language toggle -->
        <button
          class="h-9 px-3 rounded-lg border border-outline-variant/40 text-label-md text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
          :aria-label="locale === 'en' ? 'Switch to Khmer' : 'Switch to English'"
          @click="toggleLocale"
        >
          {{ locale === 'en' ? 'ខ្មែរ' : 'EN' }}
        </button>
        <!-- Theme toggle -->
        <button
          class="h-9 w-9 flex items-center justify-center rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span class="material-symbols-outlined text-[20px]">{{ theme === 'dark' ? 'light_mode' : 'dark_mode' }}</span>
        </button>
        <template v-if="isAuthenticated">
          <NuxtLink
            :to="myDashboard"
            class="hidden sm:inline-flex items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-lg font-label-md hover:opacity-90 transition-all"
          >
            <span class="material-symbols-outlined text-[18px]">dashboard</span>{{ t('dashboard') }}
          </NuxtLink>
          <button
            class="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-error hover:border-error transition-colors"
            :aria-label="t('logout')"
            @click="onLogout"
          >
            <span class="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </template>
        <NuxtLink
          v-else
          to="/portal/login"
          class="hidden sm:inline-block bg-primary text-white px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all"
        >
          {{ t('portalLogin') }}
        </NuxtLink>
        <button
          class="md:hidden text-primary"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <nav
      v-show="mobileOpen"
      class="md:hidden flex flex-col gap-stack-sm px-margin-mobile pt-stack-md pb-stack-sm border-t border-outline-variant/20 mt-2 max-w-container-max mx-auto"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="py-2 text-body-md text-on-surface-variant hover:text-primary"
        active-class="text-secondary font-semibold"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
      <NuxtLink
        v-if="isAuthenticated"
        :to="myDashboard"
        class="mt-stack-sm bg-primary text-white px-6 py-2 rounded-lg font-label-md text-center"
        @click="mobileOpen = false"
      >
        {{ t('dashboard') }}
      </NuxtLink>
      <button
        v-if="isAuthenticated"
        class="bg-surface-container text-error px-6 py-2 rounded-lg font-label-md text-center"
        @click="onLogout"
      >
        {{ t('logout') }}
      </button>
      <NuxtLink
        v-else
        to="/portal/login"
        class="mt-stack-sm bg-primary text-white px-6 py-2 rounded-lg font-label-md text-center"
        @click="mobileOpen = false"
      >
        {{ t('portalLogin') }}
      </NuxtLink>
    </nav>
  </header>
</template>
