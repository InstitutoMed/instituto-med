<script setup>
const indicadores = [
  { titulo: 'Total pacientes', valor: 55 },
  { titulo: 'Total médicos', valor: 24 },
  { titulo: 'Total atendimentos', valor: 16 }
]

const movimentoSemanal = [
  { dia: 'Seg', valor: 42 },
  { dia: 'Ter', valor: 68 },
  { dia: 'Qua', valor: 54 },
  { dia: 'Qui', valor: 82 },
  { dia: 'Sex', valor: 64 },
  { dia: 'Sáb', valor: 38 },
  { dia: 'Dom', valor: 28 }
]
</script>

<template>
  <main class="fluxograma">
    <h1 class="title_fluxo">Fluxograma</h1>

    <section class="indicadores" aria-label="Indicadores gerais">
      <article v-for="indicador in indicadores" :key="indicador.titulo" class="card_in">
        <p>{{ indicador.titulo }}</p>
        <strong>{{ indicador.valor }}</strong>
      </article>
    </section>

    <section class="grafico">
      <div class="grafico__cabecalho">
        <div>
          <p class="grafico__legenda">Movimento</p>
          <h2>Overview</h2>
        </div>
        <p class="periodo">Essa semana</p>
      </div>

      <div class="barras" aria-label="Movimento durante a semana">
        <div v-for="item in movimentoSemanal" :key="item.dia" class="barra__grupo">
          <span class="barra__valor">{{ item.valor }}</span>
          <div class="barra" :style="{ height: `${item.valor}%` }"></div>
          <span class="barra__dia">{{ item.dia }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.fluxograma {
  min-height: 100vh;
  padding: 2.5rem 4vw 4rem;
  background: #f7f9fb;
}

.title_fluxo {
  margin: 0 0 2rem;
  text-align: center;
  font-size: 1.7rem;
  color: #595959;
}

.indicadores {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto 1.5rem;
}

.card_in,
.grafico {
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.card_in {
  padding: 1.4rem;
}

.card_in p {
  margin: 0 0 0.5rem;
  color: #757575;
}

.card_in strong {
  font-size: 2rem;
  color: #174f70;
}

.grafico {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem;
}

.grafico__cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.grafico__cabecalho h2,
.grafico__legenda,
.periodo {
  margin: 0;
}

.grafico__legenda,
.periodo {
  color: #757575;
  font-size: 0.9rem;
}

.barras {
  height: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  gap: 1rem;
  padding-top: 1.5rem;
  border-bottom: 1px solid #dce3e8;
}

.barra__grupo {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
}

.barra {
  width: min(48px, 70%);
  min-height: 8px;
  border-radius: 0.4rem 0.4rem 0 0;
  background: linear-gradient(180deg, #31a6a1, #174f70);
}

.barra__valor,
.barra__dia {
  font-size: 0.78rem;
  color: #757575;
}

@media (max-width: 640px) {
  .indicadores {
    grid-template-columns: 1fr;
  }

  .barras {
    gap: 0.35rem;
  }
}
</style>
