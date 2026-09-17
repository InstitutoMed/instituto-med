<template>
  <div class="profile-page">
    <AppHeader />

    <main>
      <h1>Perfil</h1>
      <p>Esta página está preparada para receber as informações do usuário.</p>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
</script>

<style scoped>
main {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  text-align: center;
}

h1 {
  margin-bottom: 12px;
  color: var(--ink);
}

p {
  color: var(--muted);
}
</style>
