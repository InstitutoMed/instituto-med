
<script setup>
import { ref, onMounted } from 'vue'

const API_URL = 'http://localhost:3000'

// Lista de hospitais
const hospitais = ref([])

// Campos do formulário
const cep = ref('')
const fila = ref('')
const consulta = ref('')
const local = ref('')
const registro = ref('')

// Pesquisa e edição
const pesquisaId = ref('')
const idEdicao = ref(null)

// Carregar hospitais
async function carregarHospitais() {
  const resposta = await fetch(`${API_URL}/Hospital`)
  hospitais.value = await resposta.json()
}

// Limpar formulário
function limparFormulario() {
  cep.value = ''
  fila.value = ''
  consulta.value = ''
  local.value = ''
  registro.value = ''
  idEdicao.value = null
}

// Cadastrar ou atualizar hospital
async function salvarHospital() {
  if (
    !cep.value ||
    !fila.value ||
    !consulta.value ||
    !local.value ||
    !registro.value
  ) {
    alert('Preencha todos os campos!')
    return
  }

  const hospital = {
    cep_hos: cep.value,
    fila_hos: fila.value,
    consulta_med: consulta.value,
    local_har: local.value,
    registro_med: registro.value
  }


  if (idEdicao.value !== null) {
    await fetch(`${API_URL}/Hospital/${idEdicao.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hospital)
    })

    alert('Hospital atualizado com sucesso!')
  } else {

    await fetch(`${API_URL}/Hospital`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hospital)
    })

    alert('Hospital cadastrado com sucesso!')
  }

  limparFormulario()
  carregarHospitais()
}


async function pesquisarHospital() {
  if (!pesquisaId.value) {
    carregarHospitais()
    return
  }

  const resposta = await fetch(
    `${API_URL}/Hospital/${pesquisaId.value}`
  )

  if (resposta.ok) {
    const hospital = await resposta.json()
    hospitais.value = [hospital]
  } else {
    hospitais.value = []
    alert('Hospital não encontrado!')
  }
}

function editarHospital(hospital) {
  cep.value = hospital.cep_hos
  fila.value = hospital.fila_hos
  consulta.value = hospital.consulta_med
  local.value = hospital.local_har
  registro.value = hospital.registro_med
  idEdicao.value = hospital.id
}


async function excluirHospital(id) {
  if (confirm('Deseja realmente excluir este hospital?')) {
    await fetch(`${API_URL}/Hospital/${id}`, {
      method: 'DELETE'
    })

    alert('Hospital excluído com sucesso!')
    carregarHospitais()
  }
}

onMounted(() => {
  carregarHospitais()
})
</script>

<template>
  <div class="container mt-4">
    <h2 class="mb-4">Cadastro de Hospitais</h2>


    <div class="card p-3 mb-4">
      <h5 class="mb-3">
        {{ idEdicao !== null ? 'Editar Hospital' : 'Cadastrar Hospital' }}
      </h5>

      <form @submit.prevent="salvarHospital">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label">CEP</label>
            <input
              v-model="cep"
              type="text"
              class="form-control"
              maxlength="8"
              placeholder="Digite o CEP"
            >
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Tamanho da fila</label>
            <select v-model="fila" class="form-select">
              <option value="">Selecione</option>
              <option value="Curta">Curta</option>
              <option value="Média">Média</option>
              <option value="Longa">Longa</option>
            </select>
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Consulta médica</label>
            <input
              v-model="consulta"
              type="text"
              class="form-control"
              placeholder="Digite a especialidade"
            >
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Local</label>
            <input
              v-model="local"
              type="text"
              class="form-control"
              placeholder="Ex: Bloco A"
            >
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label">Registro médico</label>
            <input
              v-model="registro"
              type="text"
              class="form-control"
              placeholder="Ex: REG001"
            >
          </div>
        </div>

        <button type="submit" class="btn btn-primary me-2">
          {{ idEdicao !== null ? 'Atualizar' : 'Cadastrar' }}
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          @click="limparFormulario"
        >
          Limpar
        </button>
      </form>
    </div>


    <div class="input-group mb-3">
      <input
        v-model="pesquisaId"
        type="number"
        class="form-control"
        placeholder="Pesquisar hospital pelo ID"
      >

      <button class="btn btn-outline-primary" @click="pesquisarHospital">
        Pesquisar
      </button>

      <button
        class="btn btn-outline-secondary"
        @click="pesquisaId = ''; carregarHospitais()"
      >
        Mostrar todos
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered">
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
                class="btn btn-warning btn-sm me-2"
                @click="editarHospital(hospital)"
              >
                Editar
              </button>

              <button
                class="btn btn-danger btn-sm"
                @click="excluirHospital(hospital.id)"
              >
                Excluir
              </button>
            </td>
          </tr>

          <tr v-if="hospitais.length === 0">
            <td colspan="7" class="text-center">
              Nenhum hospital encontrado.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
