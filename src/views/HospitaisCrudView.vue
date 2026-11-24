<script setup>
import { onMounted, ref } from 'vue'

const API_URL = 'http://localhost:3000'

const hospitais = ref([])
const pesquisaId = ref('')
const idEdicao = ref(null)
const salvando = ref(false)
const carregando = ref(false)
const erro = ref('')

const formulario = ref({
  cep_hos: '',
  fila_hos: '',
  consulta_med: '',
  local_har: '',
  registro_med: '',
})

async function carregarHospitais() {
  carregando.value = true
  erro.value = ''

  try {
    const resposta = await fetch(`${API_URL}/Hospital`)
    if (!resposta.ok) throw new Error()
    hospitais.value = await resposta.json()
  } catch {
    erro.value = 'Não foi possível carregar os hospitais.'
  } finally {
    carregando.value = false
  }
}

async function buscarCep() {
  const cep = String(formulario.value.cep_hos ?? '').replace(/\D/g, '')

  if (cep.length !== 8) {
    erro.value = 'Informe um CEP com 8 números.'
    return
  }

  erro.value = ''

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    if (!resposta.ok) throw new Error()

    const dados = await resposta.json()
    if (dados.erro) {
      erro.value = 'CEP não encontrado.'
      return
    }

    formulario.value.cep_hos = cep
  } catch {
    erro.value = 'Não foi possível consultar o CEP.'
  }
}

function limparFormulario() {
  formulario.value = {
    cep_hos: '',
    fila_hos: '',
    consulta_med: '',
    local_har: '',
    registro_med: '',
  }
  idEdicao.value = null
  erro.value = ''
}

async function salvarHospital() {
  salvando.value = true
  erro.value = ''

  try {
    let resposta

    if (idEdicao.value !== null) {
      resposta = await fetch(`${API_URL}/Hospital/${idEdicao.value}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formulario.value),
      })

      if (!resposta.ok) {
        throw new Error('Não foi possível atualizar o hospital.')
      }
    } else {
      const listaResposta = await fetch(`${API_URL}/Hospital`)
      if (!listaResposta.ok) throw new Error()

      const lista = await listaResposta.json()
      const maiorId = lista.reduce((maior, item) => Math.max(maior, Number(item.id) || 0), 0)

      const novoHospital = {
        id: maiorId + 1,
        ...formulario.value,
      }

      resposta = await fetch(`${API_URL}/Hospital`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoHospital),
      })

      if (!resposta.ok) {
        throw new Error('Não foi possível cadastrar o hospital.')
      }
    }

    limparFormulario()
    pesquisaId.value = ''
    await carregarHospitais()
  } catch {
    erro.value = 'Não foi possível salvar o hospital. Tente novamente.'
  } finally {
    salvando.value = false
  }
}

async function pesquisarHospital() {
  if (!pesquisaId.value) {
    await carregarHospitais()
    return
  }

  erro.value = ''

  try {
    const resposta = await fetch(`${API_URL}/Hospital/${pesquisaId.value}`)

    if (!resposta.ok) {
      hospitais.value = []
      erro.value = 'Hospital não encontrado.'
      return
    }

    hospitais.value = [await resposta.json()]
  } catch {
    erro.value = 'Não foi possível realizar a pesquisa.'
  }
}

async function mostrarTodos() {
  pesquisaId.value = ''
  await carregarHospitais()
}

function editarHospital(hospital) {
  idEdicao.value = hospital.id
  formulario.value = {
    cep_hos: hospital.cep_hos,
    fila_hos: hospital.fila_hos,
    consulta_med: hospital.consulta_med,
    local_har: hospital.local_har,
    registro_med: hospital.registro_med,
  }
  erro.value = ''
}

async function excluirHospital(id) {
  if (!window.confirm('Deseja realmente excluir este hospital?')) return

  erro.value = ''

  try {
    const resposta = await fetch(`${API_URL}/Hospital/${id}`, {
      method: 'DELETE',
    })

    if (!resposta.ok) throw new Error()
    await carregarHospitais()
  } catch {
    erro.value = 'Não foi possível excluir o hospital.'
  }
}

onMounted(carregarHospitais)
</script>

<template>
  <div class="container mt-4">
    <header class="mb-4">
      <h1 class="h3">Hospitais</h1>
      <p class="text-body-secondary mb-0">Cadastro e gerenciamento dos hospitais.</p>
    </header>

    <div v-if="erro" class="alert alert-danger" role="alert">
      {{ erro }}
    </div>

    <div class="card p-3 mb-4">
      <h2 class="h5 mb-3">
        {{ idEdicao !== null ? 'Editar hospital' : 'Novo hospital' }}
      </h2>

      <form @submit.prevent="salvarHospital">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="cepHospital" class="form-label">CEP</label>
            <input
              id="cepHospital"
              v-model="formulario.cep_hos"
              type="text"
              class="form-control"
              maxlength="8"
              required
              @blur="buscarCep"
            />
          </div>

          <div class="col-md-6">
            <label for="filaHospital" class="form-label">Tamanho da fila</label>
            <select id="filaHospital" v-model="formulario.fila_hos" class="form-select" required>
              <option value="">Selecione</option>
              <option value="Curta">Curta</option>
              <option value="Média">Média</option>
              <option value="Longa">Longa</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="consultaHospital" class="form-label">Consulta médica</label>
            <input
              id="consultaHospital"
              v-model="formulario.consulta_med"
              type="text"
              class="form-control"
              placeholder="Especialidade"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="localHospital" class="form-label">Local</label>
            <input
              id="localHospital"
              v-model="formulario.local_har"
              type="text"
              class="form-control"
              placeholder="Ex: Bloco A"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="registroHospital" class="form-label">Registro médico</label>
            <input
              id="registroHospital"
              v-model="formulario.registro_med"
              type="text"
              class="form-control"
              placeholder="Ex: REG001"
              required
            />
          </div>
        </div>

        <div class="mt-3">
          <button type="submit" class="btn btn-primary me-2" :disabled="salvando">
            {{ salvando ? 'Salvando...' : idEdicao !== null ? 'Atualizar' : 'Cadastrar' }}
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            :disabled="salvando"
            @click="limparFormulario"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>

    <div class="input-group mb-3">
      <input
        v-model="pesquisaId"
        type="number"
        class="form-control"
        placeholder="Pesquisar hospital pelo ID"
      />

      <button type="button" class="btn btn-outline-primary" @click="pesquisarHospital">
        Pesquisar
      </button>

      <button type="button" class="btn btn-outline-secondary" @click="mostrarTodos">
        Mostrar todos
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered align-middle">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>CEP</th>
            <th>Fila</th>
            <th>Consulta</th>
            <th>Local</th>
            <th>Registro médico</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="hospital in hospitais" :key="hospital.id">
            <td>{{ hospital.id }}</td>
            <td>{{ hospital.cep_hos }}</td>
            <td>{{ hospital.fila_hos }}</td>
            <td>{{ hospital.consulta_med }}</td>
            <td>{{ hospital.local_har }}</td>
            <td>{{ hospital.registro_med }}</td>

            <td>
              <button
                type="button"
                class="btn btn-warning btn-sm me-2"
                :disabled="salvando"
                @click="editarHospital(hospital)"
              >
                Editar
              </button>

              <button
                type="button"
                class="btn btn-danger btn-sm"
                :disabled="salvando"
                @click="excluirHospital(hospital.id)"
              >
                Excluir
              </button>
            </td>
          </tr>

          <tr v-if="!carregando && hospitais.length === 0">
            <td colspan="7" class="text-center">Nenhum hospital encontrado.</td>
          </tr>

          <tr v-if="carregando">
            <td colspan="7" class="text-center">Carregando hospitais...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
