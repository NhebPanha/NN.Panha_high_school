<script setup lang="ts">
const route = useRoute()
const { isAuthenticated, user, logout } = useAuth()

const { t } = useI18n({
  en: {
    home: 'Home', about: 'About', academics: 'Academics', studentLife: 'Student Life',
    admissions: 'Admissions', news: 'News & Events',
    portalLogin: 'Portal login', dashboard: 'Dashboard', logout: 'Log out',
    apply: 'Apply now', menu: 'Menu', close: 'Close menu',
    callUs: '+1 (555) 000-1234', emailUs: 'admissions@bfhs.edu',
    signedInAs: 'Signed in as',
  },
  km: {
    home: 'ទំព័រដើម', about: 'អំពីយើង', academics: 'ការសិក្សា', studentLife: 'ជីវិតសិស្ស',
    admissions: 'ការចូលរៀន', news: 'ព័ត៌មាន និងព្រឹត្តិការណ៍',
    portalLogin: 'ចូលគណនី', dashboard: 'ផ្ទាំងគ្រប់គ្រង', logout: 'ចាកចេញ',
    apply: 'ដាក់ពាក្យឥឡូវ', menu: 'ម៉ឺនុយ', close: 'បិទម៉ឺនុយ',
    callUs: '+1 (555) 000-1234', emailUs: 'admissions@bfhs.edu',
    signedInAs: 'បានចូលគណនីជា',
  },
})

const links = computed(() => [
  { label: t('home'), to: '/' },
  { label: t('about'), to: '/about' },
  { label: t('academics'), to: '/academics' },
  { label: t('studentLife'), to: '/student-life' },
  { label: t('admissions'), to: '/admissions' },
  { label: t('news'), to: '/news' },
])

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

const myDashboard = computed(() => (user.value ? dashboardFor(user.value.role) : '/portal/login'))

const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

async function onLogout() {
  mobileOpen.value = false
  await logout()
  navigateTo('/')
}

// Route change closes the drawer; body scroll lock while it is open.
watch(() => route.fullPath, () => { mobileOpen.value = false })
watch(mobileOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 z-50">
    <!-- Utility strip: contact + preferences, hidden once the user starts reading. -->
    <div
      class="hidden overflow-hidden border-b border-on-dark/10 bg-brand text-on-dark-muted transition-[max-height,opacity] duration-300 ease-out lg:block"
      :class="scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'"
    >
      <UiContainer>
        <div class="flex h-10 items-center justify-between text-label-sm">
          <div class="flex items-center gap-6">
            <a class="inline-flex items-center gap-1.5 transition-colors hover:text-on-dark" href="tel:+15550001234">
              <UiIcon name="call" :size="14" />{{ t('callUs') }}
            </a>
            <a class="inline-flex items-center gap-1.5 transition-colors hover:text-on-dark" href="mailto:admissions@bfhs.edu">
              <UiIcon name="mail" :size="14" />{{ t('emailUs') }}
            </a>
          </div>
          <div class="flex items-center gap-2">
            <UiLocaleToggle tone="inverse" />
            <UiThemeToggle tone="inverse" />
          </div>
        </div>
      </UiContainer>
    </div>

    <!-- Main bar -->
    <div
      class="border-b bg-bg/85 backdrop-blur-md transition-[border-color,box-shadow] duration-200"
      :class="scrolled ? 'border-line shadow-hair' : 'border-transparent'"
    >
      <UiContainer>
        <div class="flex items-center justify-between gap-6 py-3">
          <BrandMark />

          <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="relative rounded px-3 py-2 text-label transition-colors duration-150"
              :class="isActive(link.to) ? 'text-fg' : 'text-fg-muted hover:text-fg'"
              :aria-current="isActive(link.to) ? 'page' : undefined"
            >
              {{ link.label }}
              <span
                class="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-200 ease-out"
                :class="isActive(link.to) ? 'scale-x-100' : 'scale-x-0'"
              />
            </NuxtLink>
          </nav>

          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 lg:hidden">
              <UiLocaleToggle />
              <UiThemeToggle />
            </div>

            <template v-if="isAuthenticated">
              <UiButton :to="myDashboard" variant="outline" size="md" icon="grid_view" class="hidden sm:inline-flex">
                {{ t('dashboard') }}
              </UiButton>
              <UiButton variant="ghost" size="md" icon="logout" class="hidden sm:inline-flex" @click="onLogout">
                <span class="sr-only">{{ t('logout') }}</span>
              </UiButton>
            </template>
            <template v-else>
              <UiButton to="/portal/login" variant="ghost" size="md" class="hidden lg:inline-flex">
                {{ t('portalLogin') }}
              </UiButton>
              <UiButton to="/admissions" variant="primary" size="md" class="hidden sm:inline-flex">
                {{ t('apply') }}
              </UiButton>
            </template>

            <button
              type="button"
              class="grid h-9 w-9 place-items-center rounded-md border border-line text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
              :aria-label="mobileOpen ? t('close') : t('menu')"
              :aria-expanded="mobileOpen"
              @click="mobileOpen = !mobileOpen"
            >
              <UiIcon :name="mobileOpen ? 'close' : 'menu'" :size="20" />
            </button>
          </div>
        </div>
      </UiContainer>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg lg:hidden"
      >
        <UiContainer>
          <nav class="flex flex-col py-3" aria-label="Primary mobile">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="flex items-center justify-between border-b border-line py-3.5 text-copy transition-colors"
              :class="isActive(link.to) ? 'font-medium text-fg' : 'text-fg-muted'"
            >
              {{ link.label }}
              <UiIcon v-if="isActive(link.to)" name="arrow_forward" :size="16" class="text-accent" />
            </NuxtLink>
          </nav>

          <div class="flex flex-col gap-2 pb-5">
            <template v-if="isAuthenticated">
              <p v-if="user" class="text-label-sm text-fg-subtle">{{ t('signedInAs') }} {{ user.name }}</p>
              <UiButton :to="myDashboard" variant="primary" block icon="grid_view">{{ t('dashboard') }}</UiButton>
              <UiButton variant="subtle" block icon="logout" @click="onLogout">{{ t('logout') }}</UiButton>
            </template>
            <template v-else>
              <UiButton to="/admissions" variant="primary" block>{{ t('apply') }}</UiButton>
              <UiButton to="/portal/login" variant="outline" block>{{ t('portalLogin') }}</UiButton>
            </template>
          </div>
        </UiContainer>
      </div>
    </Transition>
  </header>
</template>
