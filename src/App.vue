<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import PerfilView from './views/PerfilView.vue';
</script>

<template>
  <PerfilView />

  <RouterView />
</template>

<style scoped></style>
