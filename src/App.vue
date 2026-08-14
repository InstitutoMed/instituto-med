<script setup>
  import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <appHeader />
  <main>
    <RouterView />
  </main>
</template>
