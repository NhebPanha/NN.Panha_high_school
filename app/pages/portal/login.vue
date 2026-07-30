<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useHead({ title: 'Portal Login' })

const route = useRoute()
const { login, demoLogin, isAuthenticated, user } = useAuth()

const { t } = useI18n({
  en: {
    welcome: 'Welcome back',
    subtitle: 'Sign in to the Bright Future portal.',
    email: 'Email address',
    password: 'Password',
    signIn: 'Sign in',
    signingIn: 'Signing in…',
    forgot: 'Forgot password?',
    demoTitle: 'Or explore a demo portal',
    demoNote: 'No backend required — opens a sample dashboard.',
    student: 'Student', teacher: 'Teacher', parent: 'Parent', admin: 'Admin',
    errorCreds: 'Invalid email or password.',
    errorNet: 'Could not reach the server. Try a demo portal below.',
    back: 'Back to website',
    asideQuote: 'One portal for grades, attendance, fees and every conversation between home and school.',
    asideStat1: 'Families onboard', asideStat1Value: '2,480',
    asideStat2: 'Uptime this term', asideStat2Value: '99.9%',
    secure: 'Protected by school-issued credentials',
  },
  km: {
    welcome: 'សូមស្វាគមន៍ការត្រឡប់មកវិញ',
    subtitle: 'ចូលគណនីផតថល Bright Future។',
    email: 'អាសយដ្ឋានអ៊ីមែល',
    password: 'ពាក្យសម្ងាត់',
    signIn: 'ចូលគណនី',
    signingIn: 'កំពុងចូល…',
    forgot: 'ភ្លេចពាក្យសម្ងាត់?',
    demoTitle: 'ឬសាកល្បងផតថលគំរូ',
    demoNote: 'មិនត្រូវការ backend — បើកផ្ទាំងគ្រប់គ្រងគំរូ។',
    student: 'សិស្ស', teacher: 'គ្រូ', parent: 'មាតាបិតា', admin: 'អ្នកគ្រប់គ្រង',
    errorCreds: 'អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ។',
    errorNet: 'មិនអាចភ្ជាប់ទៅម៉ាស៊ីនមេបានទេ។ សាកល្បងផតថលគំរូខាងក្រោម។',
    back: 'ត្រឡប់ទៅគេហទំព័រ',
    asideQuote: 'ផតថលតែមួយសម្រាប់ពិន្ទុ វត្តមាន ថ្លៃសិក្សា និងរាល់ការសន្ទនារវាងផ្ទះ និងសាលា។',
    asideStat1: 'គ្រួសារបានចុះឈ្មោះ', asideStat1Value: '២,៤៨០',
    asideStat2: 'ដំណើរការឆមាសនេះ', asideStat2Value: '៩៩.៩%',
    secure: 'ការពារដោយព័ត៌មានសម្ងាត់ចេញដោយសាលា',
  },
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const redirectTarget = computed(() => (route.query.redirect as string) || '')

function go(signedIn: { role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN' }) {
  navigateTo(redirectTarget.value || dashboardFor(signedIn.role))
}

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    go(await login(email.value, password.value))
  } catch (e: any) {
    error.value = e?.response?.status === 401 || e?.status === 401 ? t('errorCreds') : t('errorNet')
  } finally {
    loading.value = false
  }
}

function onDemo(role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') {
  go(demoLogin(role))
}

// Already signed in → bounce to dashboard.
onMounted(() => {
  if (isAuthenticated.value && user.value) go(user.value)
})

const demos = computed(() => [
  { role: 'STUDENT' as const, label: t('student'), icon: 'school' },
  { role: 'TEACHER' as const, label: t('teacher'), icon: 'co_present' },
  { role: 'PARENT' as const, label: t('parent'), icon: 'family_restroom' },
  { role: 'ADMIN' as const, label: t('admin'), icon: 'admin_panel_settings' },
])
</script>

<template>
  <div class="grid min-h-dvh bg-bg lg:grid-cols-2">
    <!-- ── Brand panel ──────────────────────────────────────────────────── -->
    <aside class="relative hidden flex-col justify-between overflow-hidden bg-brand p-12 lg:flex">
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <BrandMark tone="inverse" />

      <div class="relative max-w-md">
        <UiIcon name="format_quote" :size="36" :filled="true" class="text-accent" />
        <blockquote class="mt-5 font-display text-title-1 leading-snug text-balance text-on-dark">
          {{ t('asideQuote') }}
        </blockquote>

        <dl class="mt-12 grid grid-cols-2 gap-8 border-t border-on-dark/15 pt-8">
          <div>
            <dd class="font-display text-title-1 tabular-nums text-on-dark">{{ t('asideStat1Value') }}</dd>
            <dt class="mt-1 text-label text-on-dark-muted">{{ t('asideStat1') }}</dt>
          </div>
          <div>
            <dd class="font-display text-title-1 tabular-nums text-on-dark">{{ t('asideStat2Value') }}</dd>
            <dt class="mt-1 text-label text-on-dark-muted">{{ t('asideStat2') }}</dt>
          </div>
        </dl>
      </div>

      <p class="relative flex items-center gap-2 text-label-sm text-on-dark/50">
        <UiIcon name="lock" :size="15" />{{ t('secure') }}
      </p>
    </aside>

    <!-- ── Form ─────────────────────────────────────────────────────────── -->
    <main class="flex flex-col px-page py-8 sm:px-8 lg:px-16 lg:py-12">
      <div class="flex items-center justify-between gap-3">
        <BrandMark class="lg:invisible" />
        <div class="flex items-center gap-2">
          <UiLocaleToggle />
          <UiThemeToggle />
        </div>
      </div>

      <div class="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
        <h1 class="font-display text-display-2 text-fg">{{ t('welcome') }}</h1>
        <p class="mt-2 text-copy text-fg-muted">{{ t('subtitle') }}</p>

        <form class="mt-9 flex flex-col gap-5" @submit.prevent="onSubmit">
          <UiField
            v-model="email" :label="t('email')" type="email" required
            autocomplete="email" placeholder="you@bfhs.edu" icon="mail"
          />

          <div class="relative">
            <UiField
              v-model="password" :label="t('password')" :type="showPassword ? 'text' : 'password'"
              required autocomplete="current-password" placeholder="••••••••" icon="lock"
            />
            <button
              type="button"
              class="absolute right-2 top-8 grid h-8 w-8 place-items-center rounded text-fg-subtle transition-colors hover:bg-surface-2 hover:text-fg"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
              @click="showPassword = !showPassword"
            >
              <UiIcon :name="showPassword ? 'visibility_off' : 'visibility'" :size="18" />
            </button>
          </div>

          <p
            v-if="error"
            class="flex items-start gap-2.5 rounded-md border border-danger/25 bg-danger-tint p-3 text-copy-sm text-on-danger-tint"
            role="alert"
          >
            <UiIcon name="error" :size="18" class="mt-0.5" />{{ error }}
          </p>

          <UiButton type="submit" size="lg" block :loading="loading">
            {{ loading ? t('signingIn') : t('signIn') }}
          </UiButton>

          <a href="#" class="self-center text-label text-fg-muted underline-offset-4 hover:text-accent hover:underline">
            {{ t('forgot') }}
          </a>
        </form>

        <!-- Demo access -->
        <div class="mt-10 border-t border-line pt-8">
          <p class="text-label font-medium text-fg">{{ t('demoTitle') }}</p>
          <p class="mt-1 text-label-sm text-fg-subtle">{{ t('demoNote') }}</p>

          <div class="mt-4 grid grid-cols-2 gap-2.5">
            <button
              v-for="d in demos" :key="d.role"
              type="button"
              class="flex items-center gap-2.5 rounded-md border border-line bg-surface px-3.5 py-3 text-label text-fg transition-colors hover:border-line-strong hover:bg-surface-2"
              @click="onDemo(d.role)"
            >
              <UiIcon :name="d.icon" :size="18" class="text-accent" />{{ d.label }}
            </button>
          </div>
        </div>
      </div>

      <NuxtLink
        to="/"
        class="mx-auto inline-flex items-center gap-1.5 text-label text-fg-muted transition-colors hover:text-fg"
      >
        <UiIcon name="arrow_back" :size="16" />{{ t('back') }}
      </NuxtLink>
    </main>
  </div>
</template>
