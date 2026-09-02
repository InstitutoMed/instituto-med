<script setup>
const props = defineProps(['nome', 'doses', 'doencas', 'categoria', 'id', 'dataVacinacao'])
import { RouterLink } from 'vue-router';

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}

</script>

<template>
  <RouterLink :to="'/vacina/' + props.id" class="vacinascard">
    <div class="cardtopo" >
      <h3>{{ props.nome }}</h3>
    </div>
    <div class="conteudocard">
      <p>{{ props.doses }}</p>
      <p>{{ props.doencas }}</p>
      <p v-if="props.dataVacinacao" class="ja-vacinado">
        Aplicada em {{ formatarData(props.dataVacinacao) }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.vacinascard {
  display: block;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: #fff;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.vacinascard:hover {
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.cardtopo {
  padding: 14px 16px;
  background: #61A5C2; /* cor única fixa — troque ou apague pra remover de vez */
}
.cardtopo h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 0;
}
.conteudocard {
  padding: 14px 16px;
}
.conteudocard p {
  text-align: left;
  font-size: 12.5px;
  color: #4b5563;
  margin: 4px 0;
}
.ja-vacinado {
  color: #1a7a3a !important;
  font-weight: 600;
}

@media (max-width: 480px) {

  .vacinascard {
    border-radius: 9px;
  }

  .cardtopo {
    padding: 12px 14px;
  }

  .cardtopo h3 {
    font-size: 14px;
    line-height: 1.3;
  }

  .conteudocard {
    padding: 12px 14px;
  }

  .conteudocard p {
    font-size: 12px;
    line-height: 1.45;
    margin: 4px 0;
  }

  .ja-vacinado {
    font-size: 12px !important;
  }
}
</style>
