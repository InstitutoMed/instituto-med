<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/buttons.css'
</script>
