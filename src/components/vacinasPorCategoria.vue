<script setup>
import { useRoute } from 'vue-router';
import { vacinas } from '@/data/vacinas';
import { computed } from 'vue';
import vacinaCard from '@/components/Produtos/produtoCard.vue';


const rota = useRoute();

let vacinasPorCategoria = computed(() => {
    return vacinas.filter(v => v.categoria === rota.params.categoria)
})

</script>

<template>
    <main>
    <section class="lancamentos">
  <h2>Vacinas
  </h2>
  <div class="categoria-butoes">
    <ul>
      <li><RouterLink to="/">Todos</RouterLink></li>
      <li><RouterLink to="/gestantes">Gestante</RouterLink></li>
      <li><RouterLink to="/infantil">Infantil</RouterLink></li>
      <li><RouterLink to="/adolescente">Adolescente e Jovem</RouterLink></li>
      <li><RouterLink to="/adulto">Adulto</RouterLink></li>
      <li><RouterLink to="/idoso">Idoso</RouterLink></li>
    </ul>
  </div>
  <div>
    <ul>
      <vacinaCard   v-for="vacina in vacinasPorCategoria"
  :key="vacina.id"
  :titulo="vacina.nome"
  :doencas="vacina.doencas"
  :doses="vacina.doses"
  :categoria="vacina.categoria"></vacinaCard>
</ul>
  </div>
    <div class="catalogo">
    <ProdutoCard v-for="vacina in vacinasFiltradas" :key="vacina.id" :vacina="vacina" />
  </div>
  </section>
  </main>
</template>
