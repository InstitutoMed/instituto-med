<template>
  <InstitutionalShell v-if="usaLayoutInstitucional">
    <RouterView />
  </InstitutionalShell>
  <RouterView v-else />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
const usaLayoutInstitucional = computed(() => route.meta.layout === 'institucional')
const InstitutionalShell = defineAsyncComponent(
  () => import('./components/layout/InstitutionalShell.vue')
)
</script>
