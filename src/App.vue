<template>
  <AppHeader />

  <router-view />

  <AppFooter />

  <BookingModal />
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import BookingModal from './components/shared/BookingModal.vue'
</script>
