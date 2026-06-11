<script setup lang="ts">
definePageMeta({ layout: 'portal' })
useHead({ title: 'Portal Login' })

const route = useRoute()
const { login, demoLogin, isAuthenticated, user } = useAuth()

const { t, locale } = useI18n({
  en: {
    welcome: 'Welcome back',
    subtitle: 'Sign in to the Bright Future portal.',
    email: 'Email address',
    password: 'Password',
    signIn: 'Sign In',
    signingIn: 'Signing in…',
    forgot: 'Forgot password?',
    demoTitle: 'Or explore a demo portal',
    demoNote: 'No backend required — opens a sample dashboard.',
    student: 'Student', teacher: 'Teacher', parent: 'Parent', admin: 'Admin',
    errorCreds: 'Invalid email or password.',
    errorNet: 'Could not reach the server. Try a demo portal below.',
    back: 'Back to website',
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
  },
})

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const redirectTarget = computed(() => (route.query.redirect as string) || '')

function go(user: { role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN' }) {
  navigateTo(redirectTarget.value || dashboardFor(user.role))
}

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    const signedIn = await login(email.value, password.value)
    go(signedIn)
  } catch (e: any) {
    error.value = e?.response?.status === 401 || e?.status === 401 ? t('errorCreds') : t('errorNet')
  } finally {
    loading.value = false
  }
}

function onDemo(role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') {
  const u = demoLogin(role)
  go(u)
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
  <div class="min-h-screen bg-surface text-on-surface flex items-center justify-center p-margin-mobile font-body-md">
    <div class="w-full max-w-md">
      <div class="bg-surface-container-lowest rounded-[2rem] shadow-[0px_8px_40px_rgba(0,32,69,0.12)] border border-outline-variant/30 p-8 md:p-10">
        <NuxtLink to="/" class="font-display-lg text-headline-sm font-bold text-primary block mb-stack-lg">
          Bright Future High School
        </NuxtLink>
        <h1 class="font-display-lg text-headline-md text-primary">{{ t('welcome') }}</h1>
        <p class="text-on-surface-variant text-body-md mb-stack-lg">{{ t('subtitle') }}</p>

        <form class="space-y-stack-md" @submit.prevent="onSubmit">
          <div>
            <label class="block text-label-md text-on-surface-variant mb-1" for="email">{{ t('email') }}</label>
            <input
              id="email" v-model="email" type="email" required autocomplete="email"
              class="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
              placeholder="you@bfhs.edu"
            />
          </div>
          <div>
            <label class="block text-label-md text-on-surface-variant mb-1" for="password">{{ t('password') }}</label>
            <input
              id="password" v-model="password" type="password" required autocomplete="current-password"
              class="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <p v-if="error" class="text-error text-body-sm bg-error-container/40 rounded-lg px-3 py-2">{{ error }}</p>

          <button
            type="submit" :disabled="loading"
            class="w-full bg-primary text-white py-3 rounded-xl font-headline-sm hover:opacity-90 disabled:opacity-60 transition"
          >
            {{ loading ? t('signingIn') : t('signIn') }}
          </button>
          <div class="text-center">
            <a href="#" class="text-secondary text-body-sm hover:underline">{{ t('forgot') }}</a>
          </div>
        </form>

        <div class="mt-stack-lg pt-stack-lg border-t border-outline-variant/30">
          <p class="text-label-md text-on-surface-variant">{{ t('demoTitle') }}</p>
          <p class="text-body-sm text-on-surface-variant/70 mb-stack-md">{{ t('demoNote') }}</p>
          <div class="grid grid-cols-2 gap-stack-sm">
            <button
              v-for="d in demos" :key="d.role"
              class="flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-xl py-2.5 text-body-sm font-semibold text-primary transition"
              @click="onDemo(d.role)"
            >
              <span class="material-symbols-outlined text-[18px]">{{ d.icon }}</span>{{ d.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-stack-md">
        <NuxtLink to="/" class="text-on-surface-variant text-body-sm hover:text-primary inline-flex items-center gap-1">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>{{ t('back') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
