<script setup>
import { ref } from 'vue';

const totalPacientes = 55

//total pacientes a ser definido no projeto

const totalMedicos= 24

//total medicos a ser definido no projeto

const totalAtendimentos= 16



//GRAFICO

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Floating Bar Chart'
      }
    }
  }
};

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.blue,
    },
  ]
};

const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = chart.data.labels.map(() => {
          return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
        });
      });
      chart.update();
    }
  },
];
</script>

<template>
<h1 class="title_fluxo">Fluxograma</h1>

<div class="total">
<section class="sec1">
    <div class="card_in">
        <p>Total pacientes</p>
        <img src="#" alt="icon">
    </div>

    <div class="card_in">
        <p>
Total Médicos
        </p>
        <img src="" alt="">
    </div>
    
    <div class="card_in">
        <p>
            Total atendimentos
        </p>
        <img src="" alt="">
    </div>

</section>
</div>

<div class="graf1">
    <section>
        <div>
            <h3>
                Movimento
            </h3>
        </div>

        <div>
            <h3>
                Overview
            </h3>
            <p class="min">
                Essa semana
            </p>
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

.card_in{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}


</style>