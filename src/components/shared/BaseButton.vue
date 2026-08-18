<template>
  <button
    :class="['btn', variantClass]"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'solid', 
    validator: (v) => ['solid', 'white', 'outline'].includes(v)
  },
  type: {
    type: String,
    default: 'button'
  }
})

defineEmits(['click'])

const variantClass = computed(() => `btn-${props.variant}`)
</script>
