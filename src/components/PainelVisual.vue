<template>
  <aside class="painel">
    <div class="painel__fundo"></div>
    <div class="painel__texto">
      <h2>Sua saúde, <br />conectada.</h2>
      <p>Preencha seus dados uma vez e leve seu histórico com você.</p>
    </div>
  </aside>
</template>

<script setup>

</script>

<style scoped>
.painel {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, var(--azul-profundo) 0%, var(--azul-medio) 55%, var(--azul-claro) 100%);
  min-height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
}

.painel__fundo {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.12), transparent 55%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1), transparent 50%);
}

.painel__texto {
  position: relative;
  z-index: 1;
  color: var(--branco);
  max-width: 22rem;
}

.painel__texto h2 {
  font-family: var(--fonte-titulo);
  font-size: 2rem;
  line-height: 1.15;
  margin: 0 0 0.75rem;
}

.painel__texto p {
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
}

@media (max-width: 860px) {
  .painel {
    min-height: 220px;
    padding: 1.5rem;
  }
  .painel__texto h2 {
    font-size: 1.4rem;
  }
}
</style>
