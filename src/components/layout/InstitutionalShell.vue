<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import '../../assets/styles/variables.css'
import '../../assets/styles/base.css'
import '../../assets/styles/buttons.css'
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>
