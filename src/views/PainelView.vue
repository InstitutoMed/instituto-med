<script setup>
import { ref, computed } from 'vue'
import VacinaCard from '../components/VacinaCard.vue'
import { vacinas } from '../data/vacinas.js'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const pesquisa = ref('')
const categoriaSelecionada = ref('todos')

function pesquisar() {
  router.push({
    path: '/caderneta',
    query: pesquisa.value
      ? { q: pesquisa.value }
      : {}
  })
}

function selecionarCategoria(categoria) {
  categoriaSelecionada.value = categoria
  pesquisa.value = ''

  router.push({
    path: '/caderneta',
    query: {}
  })
}

const vacinasFiltradas = computed(() => {
  const termo = String(route.query.q || '').toLowerCase()

  return vacinas.filter((vacina) => {
    const bateCategoria =
      categoriaSelecionada.value === 'todos' ||
      vacina.categoria === categoriaSelecionada.value

    const bateBusca =
      !termo ||
      vacina.nome.toLowerCase().includes(termo)

    return bateCategoria && bateBusca
  })
})
</script>

<template>

  <main>
    <h1>Caderneta</h1>
    <div class="barrapesquisa">
      <input type="text" v-model="pesquisa" placeholder="Pesquisar" @keyup.enter="pesquisar" />
    </div>


     <div class="categoria-butoes">
  <ul>
    <li>
      <button
        @click="selecionarCategoria('todos')"
        :class="{ selecionado: categoriaSelecionada === 'todos' }"
      >
        Todos
      </button>
    </li>

    <li>
      <button
        @click="selecionarCategoria('gestantes')"
        :class="{ selecionado: categoriaSelecionada === 'gestantes' }"
      >
        Gestante
      </button>
    </li>

    <li>
      <button
        @click="selecionarCategoria('infantil')"
        :class="{ selecionado: categoriaSelecionada === 'infantil' }"
      >
        Infantil
      </button>
    </li>

    <li>
      <button
        @click="selecionarCategoria('adolescentes')"
        :class="{ selecionado: categoriaSelecionada === 'adolescentes' }"
      >
        Adolescente e Jovem
      </button>
    </li>

    <li>
      <button
        @click="selecionarCategoria('adultos')"
        :class="{ selecionado: categoriaSelecionada === 'adultos' }"
      >
        Adulto
      </button>
    </li>

    <li>
      <button
        @click="selecionarCategoria('idosos')"
        :class="{ selecionado: categoriaSelecionada === 'idosos' }"
      >
        Idoso
      </button>
    </li>
  </ul>
</div>
<p>Total de vacinas: {{ vacinasFiltradas.length }}</p>
    <div class="vacinacontainer">

        <VacinaCard
          v-for="vacina in vacinasFiltradas"
          :key="vacina.id"
          :id="vacina.id"
          :nome="vacina.nome"
          :doencas="vacina.doencas"
          :doses="vacina.doses"
          :categoria="vacina.categoria"
          :dataVacinacao="vacina.dataVacinacao"

        />

    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 32px 64px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 8px 0 28px;
  color: #111827;
}

/* barra de busca */
.barrapesquisa {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.barrapesquisa input {
  width: 100%;
  max-width: 640px;
  padding: 12px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  font-size: 14px;
  background: #f9fafb;
  outline: none;
  transition: border-color 0.15s ease;
}
.barrapesquisa input:focus {
  border-color: #949494;
  background: #fff;
}

.categoria-butoes ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0 0 28px;
}
.categoria-butoes button {
  border: 1px solid #d1d5db;
  background: #fff;
  color: #374151;
  padding: 7px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}
.categoria-butoes button:hover {
  border-color: #969494;
  color: #61A5C2;
}
.categoria-butoes button.selecionado {
  background: #61A5C2;
  border-color: #949494;
  color: #fff;
}

p {
  text-align: center;
  color: #979797;
  font-size: 13px;
  margin-bottom: 20px;
}
.vacinacontainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

@media (max-width: 480px) {

  main {
    padding: 8px 15px 40px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 5px 0 20px;
  }

  /* BUSCA */
  .barrapesquisa {
    margin-bottom: 18px;
  }

  .barrapesquisa input {
    width: 100%;
    padding: 11px 16px;
    font-size: 13px;
  }

  /* CATEGORIAS */
  .categoria-butoes ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 22px;
  }

  .categoria-butoes li {
    width: 100%;
  }

  .categoria-butoes button {
    width: 100%;
    min-height: 36px;
    padding: 7px 8px;
    font-size: 11px;
  }

  /* CONTADOR */
  p {
    font-size: 12px;
    margin-bottom: 16px;
  }

  /* CARDS */
  .vacinacontainer {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
