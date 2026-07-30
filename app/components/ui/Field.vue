<script setup lang="ts">
/**
 * Label + control + hint/error in one accessible unit.
 * `tone="inverse"` is for controls sitting on a brand fill or photograph.
 */
const props = withDefaults(defineProps<{
  modelValue?: string | number
  label?: string
  as?: 'input' | 'textarea' | 'select'
  type?: string
  placeholder?: string
  hint?: string
  error?: string
  required?: boolean
  rows?: number
  autocomplete?: string
  icon?: string
  tone?: 'default' | 'inverse'
}>(), { as: 'input', type: 'text', rows: 4, tone: 'default' })

const emit = defineEmits<{ 'update:modelValue': [string] }>()

const id = useId()
const describedBy = computed(() => (props.error ? `${id}-err` : props.hint ? `${id}-hint` : undefined))

const control = computed(() => [
  'w-full rounded-md border text-copy-sm transition-[border-color,background-color,box-shadow] duration-150',
  'placeholder:text-fg-subtle disabled:opacity-50',
  props.as === 'textarea' ? 'py-2.5 px-3' : 'h-11 px-3',
  props.icon && props.as !== 'textarea' ? 'pl-10' : '',
  props.tone === 'inverse'
    ? 'bg-on-dark/10 border-on-dark/20 text-on-dark placeholder:text-on-dark/50 focus:border-on-dark/50 focus:bg-on-dark/15'
    : 'bg-surface border-line-strong text-fg focus:border-accent',
  props.error && props.tone !== 'inverse' ? '!border-danger' : '',
])
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="props.label"
      :for="id"
      class="text-label font-medium"
      :class="props.tone === 'inverse' ? 'text-on-dark-muted' : 'text-fg-muted'"
    >
      {{ props.label }}<span v-if="props.required" class="text-accent" aria-hidden="true"> *</span>
    </label>

    <div class="relative">
      <UiIcon
        v-if="props.icon && props.as !== 'textarea'"
        :name="props.icon"
        :size="18"
        class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
        :class="props.tone === 'inverse' ? 'text-on-dark/60' : 'text-fg-subtle'"
      />

      <textarea
        v-if="props.as === 'textarea'"
        :id="id"
        :value="props.modelValue as string"
        :placeholder="props.placeholder"
        :required="props.required"
        :rows="props.rows"
        :aria-describedby="describedBy"
        :aria-invalid="!!props.error || undefined"
        :class="control"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      />

      <select
        v-else-if="props.as === 'select'"
        :id="id"
        :value="props.modelValue"
        :required="props.required"
        :aria-describedby="describedBy"
        :class="control"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <slot />
      </select>

      <input
        v-else
        :id="id"
        :value="props.modelValue"
        :type="props.type"
        :placeholder="props.placeholder"
        :required="props.required"
        :autocomplete="props.autocomplete"
        :aria-describedby="describedBy"
        :aria-invalid="!!props.error || undefined"
        :class="control"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
    </div>

    <p v-if="props.error" :id="`${id}-err`" class="text-label-sm text-danger">{{ props.error }}</p>
    <p
      v-else-if="props.hint"
      :id="`${id}-hint`"
      class="text-label-sm"
      :class="props.tone === 'inverse' ? 'text-on-dark/60' : 'text-fg-subtle'"
    >{{ props.hint }}</p>
  </div>
</template>
