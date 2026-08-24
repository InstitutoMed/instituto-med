<script setup>
const totalPacientes = 55
const totalMedicos = 24
const totalAtendimentos = 16
</script>

<template>
  <h1 class="title_fluxo">Fluxograma</h1>

  <div class="total">
    <section class="sec1">
      <div class="card_in">
        <p>Total pacientes</p>
        <strong>{{ totalPacientes }}</strong>
      </div>

      <div class="card_in">
        <p>Total Médicos</p>
        <strong>{{ totalMedicos }}</strong>
      </div>

      <div class="card_in">
        <p>Total atendimentos</p>
        <strong>{{ totalAtendimentos }}</strong>
      </div>
    </section>
  </div>

  <div class="graf1">
    <section>
      <div>
        <h3>Movimento</h3>
      </div>

      <div>
        <h3>Overview</h3>
        <p class="min">Essa semana</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.title_fluxo{
    margin: 4vw 4vw;
   display: flex;
    justify-content: center;
    font-size: 1.7rem;
    color: #959595
}

.sec1{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 4vw;
}

.card_in{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.card_in strong{
  display: block;
  font-size: 1.8rem;
  margin-top: 8px;
  color: #2b7b9b;
}

.graf1{
  padding: 4vw;
}
</style>
