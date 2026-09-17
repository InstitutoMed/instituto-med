<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { vacinas } from '@/data/vacinas'
import { salvarRegistro, aplicarRegistrosSalvos } from '@/store/RegistrosVacinas'

aplicarRegistrosSalvos()

const route = useRoute()
const vacina = vacinas.find(v => String(v.id) === String(route.params.id))

const dataVacinacao = ref(vacina?.dataVacinacao || '')
const editando = ref(false)
const dataInput = ref(dataVacinacao.value)

function formatarData(data) {
  if (!data) return ''
  const partes = data.split('-')
  if (partes.length !== 3) return data
  return `${partes[2]}/${partes[1]}/${partes[0]}`
}

function salvar() {
  if (!dataInput.value) return
  dataVacinacao.value = dataInput.value
  salvarRegistro(vacina.id, dataInput.value)
  editando.value = false
}
</script>

<template>
  <main v-if="vacina">
    <h1>{{ vacina.nome }}</h1>

    <p><strong>Doenças evitadas:</strong> {{ vacina.doencas }}</p>
    <p><strong>Número de doses:</strong> {{ vacina.doses }}</p>

    <h3>Descrição</h3>
    <p>{{ vacina.descricao }}</p>

    <h3>Indicação</h3>
    <p>{{ vacina.indicacao }}</p>

    <h3>Efeitos colaterais</h3>
    <p>{{ vacina.efeitos }}</p>

    <h3>Contraindicações</h3>
    <p>{{ vacina.contraindicacoes }}</p>

    <p v-if="dataVacinacao && !editando" class="ja-vacinado">
      Vacinado em {{ formatarData(dataVacinacao) }}
    </p>

    <div v-if="editando" class="box-edicao">
      <label>Data da vacinação:</label>
      <input type="date" v-model="dataInput" />
      <div class="botoes-inline">
        <button type="button" @click="editando = false">Cancelar</button>
        <button type="button" class="btn-salvar" @click="salvar">Salvar</button>
      </div>
    </div>

    <div v-else class="botoes">
      <RouterLink to="/form"><button type="button">Agendar</button></RouterLink>
      <button type="button" class="btn-registro" @click="editando = true">
        {{ dataVacinacao ? 'Editar registro' : 'Registro' }}
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 32px 64px;
}

h1 { font-size: 1.9rem; font-weight: 700; color: #111827; margin: 8px 0 4px; }
h3 { font-size: 1rem; font-weight: 700; color: #61A5C2; margin: 24px 0 6px; }
p { font-size: 14px; line-height: 1.6; color: #4b5563; margin: 0 0 4px; }

.ja-vacinado {
  display: inline-block;
  margin-top: 16px;
  padding: 6px 14px;
  border-radius: 20px;
  background: #e6f4ea;
  color: #1a7a3a;
  font-weight: 600;
  font-size: 13px;
}

.botoes { display: flex; gap: 12px; margin-top: 24px; }

button {
  padding: 10px 22px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-registro, .btn-salvar {
  background: #61A5C2;
  border-color: #61A5C2;
  color: #fff;
}

.box-edicao {
  margin-top: 20px;
  padding: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  max-width: 300px;
}

.box-edicao label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.box-edicao input {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.botoes-inline {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>