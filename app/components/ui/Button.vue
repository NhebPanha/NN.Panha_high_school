<script setup lang="ts">
type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'subtle' | 'inverse' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
  icon?: string
  iconTrailing?: string
}>(), { variant: 'primary', size: 'md', type: 'button' })

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand/90 active:bg-brand shadow-hair',
  accent: 'bg-accent text-on-accent hover:bg-accent/90 active:bg-accent shadow-hair',
  outline: 'border border-line-strong text-fg hover:bg-surface-2 hover:border-fg-subtle',
  ghost: 'text-fg-muted hover:text-fg hover:bg-surface-2',
  subtle: 'bg-surface-2 text-fg hover:bg-surface-3 border border-line',
  // For placement on brand fills / photography.
  inverse: 'bg-on-dark text-brand hover:bg-on-dark/90 shadow-hair',
  danger: 'bg-danger text-white hover:bg-danger/90',
}

const SIZES: Record<Size, string> = {
  sm: 'h-8 px-3 text-label-sm gap-1.5 rounded',
  md: 'h-10 px-4 text-label gap-2 rounded-md',
  lg: 'h-12 px-6 text-copy-sm font-semibold gap-2 rounded-md',
}

const ICON_SIZE: Record<Size, number> = { sm: 16, md: 18, lg: 20 }

const classes = computed(() => [
  'inline-flex items-center justify-center whitespace-nowrap font-medium',
  'transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out',
  'disabled:opacity-45 disabled:pointer-events-none active:translate-y-px',
  VARIANTS[props.variant],
  SIZES[props.size],
  props.block && 'w-full',
])

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    :href="props.href"
    :type="props.to || props.href ? undefined : props.type"
    :disabled="props.to || props.href ? undefined : (props.disabled || props.loading)"
    :aria-busy="props.loading || undefined"
    :class="classes"
  >
    <UiIcon
      v-if="props.loading"
      name="progress_activity"
      :size="ICON_SIZE[props.size]"
      class="animate-spin"
    />
    <UiIcon v-else-if="props.icon" :name="props.icon" :size="ICON_SIZE[props.size]" />
    <slot />
    <UiIcon v-if="props.iconTrailing" :name="props.iconTrailing" :size="ICON_SIZE[props.size]" />
  </component>
</template>
