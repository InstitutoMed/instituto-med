<template>
  <AppHeader />

  <router-view />

  <AppFooter />

</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>
