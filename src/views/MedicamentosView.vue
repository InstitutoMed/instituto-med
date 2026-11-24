
<script setup>
import { onMounted, ref } from 'vue';

const API_URL = 'http://localhost:3000';

const medicamentos = ref([]);
const pesquisaId = ref('');

const tipo = ref('');
const lote = ref('');
const quantidade = ref(0);
const disponibilidade = ref(true);
const hospital = ref(1);

const idEdicao = ref(null);


async function carregarMedicamentos() {
  const resposta = await fetch(`${API_URL}/Medicamento`);
  medicamentos.value = await resposta.json();
}


async function pesquisarMedicamento() {
  if (!pesquisaId.value) {
    carregarMedicamentos();
    return;
  }

  const resposta = await fetch(
    `${API_URL}/Medicamento/${pesquisaId.value}`,
  );

  if (resposta.ok) {
    const medicamento = await resposta.json();
    medicamentos.value = [medicamento];
  } else {
    medicamentos.value = [];
    alert('Medicamento não encontrado!');
  }
}


function limparFormulario() {
  tipo.value = '';
  lote.value = '';
  quantidade.value = 0;
  disponibilidade.value = true;
  hospital.value = 1;
  idEdicao.value = null;
}


async function salvarMedicamento() {
  if (!tipo.value || !lote.value) {
    alert('Preencha os campos obrigatórios!');
    return;
  }

  const medicamento = {
    tipo_medicamento: tipo.value,
    lote_medicamento: lote.value,
    quantidade_medicamento: Number(quantidade.value),
    disponibilidade_medicamento: disponibilidade.value,
    id_hospital: Number(hospital.value),
  };

  if (idEdicao.value) {
    await fetch(`${API_URL}/Medicamento/${idEdicao.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicamento),
    });

    alert('Medicamento atualizado com sucesso!');
  } else {
    const resposta = await fetch(`${API_URL}/Medicamento`);
    const lista = await resposta.json();

    const maiorId = lista.reduce(
      (maior, item) => Math.max(maior, Number(item.id_medicamento)),
      0,
    );

    medicamento.id_medicamento = maiorId + 1;

    await fetch(`${API_URL}/Medicamento`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicamento),
    });

    alert('Medicamento adicionado com sucesso!');
  }

  limparFormulario();
  pesquisaId.value = '';
  carregarMedicamentos();
}


function editarMedicamento(medicamento) {
  idEdicao.value = medicamento.id_medicamento;
  tipo.value = medicamento.tipo_medicamento;
  lote.value = medicamento.lote_medicamento;
  quantidade.value = medicamento.quantidade_medicamento;
  disponibilidade.value = medicamento.disponibilidade_medicamento;
  hospital.value = medicamento.id_hospital;
}


async function excluirMedicamento(id) {
  const confirmarExclusao = window.confirm(
    'Tem certeza que deseja excluir este medicamento?',
  );

  if (confirmarExclusao) {
    await fetch(`${API_URL}/Medicamento/${id}`, {
      method: 'DELETE',
    });

    carregarMedicamentos();
    alert('Medicamento excluído com sucesso!');
  }
}

onMounted(carregarMedicamentos);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Gerenciamento de Medicamentos</h1>
    </header>


    <div class="mb-4">
      <h2 class="h4">
        {{ idEdicao ? 'Editar medicamento' : 'Adicionar medicamento' }}
      </h2>

      <form @submit.prevent="salvarMedicamento">

        <div class="mb-3">
          <label class="form-label">Nome do medicamento</label>
          <input
            v-model="tipo"
            type="text"
            class="form-control"
            placeholder="Ex: Paracetamol"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Lote</label>
          <input
            v-model="lote"
            type="text"
            class="form-control"
            placeholder="Ex: LOT011"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Quantidade</label>
          <input
            v-model="quantidade"
            type="number"
            min="0"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Disponibilidade</label>
          <select
            v-model="disponibilidade"
            class="form-select"
          >
            <option :value="true">Disponível</option>
            <option :value="false">Indisponível</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">ID do hospital</label>
          <input
            v-model="hospital"
            type="number"
            min="1"
            class="form-control"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary me-2">
          {{ idEdicao ? 'Salvar alterações' : 'Adicionar medicamento' }}
        </button>

        <button
          v-if="idEdicao"
          type="button"
          class="btn btn-secondary"
          @click="limparFormulario"
        >
          Cancelar edição
        </button>

      </form>
    </div>

    <hr class="my-4" />


    <h2 class="h4 mb-3">Pesquisar medicamento</h2>

    <div class="input-group mb-3">
      <input
        v-model="pesquisaId"
        type="number"
        min="1"
        class="form-control"
        placeholder="Digite o ID do medicamento"
        @keyup.enter="pesquisarMedicamento"
      />

      <button
        class="btn btn-outline-primary"
        @click="pesquisarMedicamento"
      >
        Pesquisar
      </button>

      <button
        class="btn btn-outline-secondary"
        @click="pesquisaId = ''; carregarMedicamentos()"
      >
        Mostrar todos
      </button>
    </div>


    <h2 class="h4 mb-3">Medicamentos cadastrados</h2>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Medicamento</th>
          <th>Lote</th>
          <th>Quantidade</th>
          <th>Disponibilidade</th>
          <th>Hospital</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="medicamento in medicamentos"
          :key="medicamento.id_medicamento"
        >
          <td>{{ medicamento.id_medicamento }}</td>
          <td>{{ medicamento.tipo_medicamento }}</td>
          <td>{{ medicamento.lote_medicamento }}</td>
          <td>{{ medicamento.quantidade_medicamento }}</td>

          <td>
            {{
              medicamento.disponibilidade_medicamento
                ? 'Disponível'
                : 'Indisponível'
            }}
          </td>

          <td>{{ medicamento.id_hospital }}</td>

          <td>
            <button
              class="btn btn-sm btn-outline-primary me-2"
              @click="editarMedicamento(medicamento)"
            >
              Editar
            </button>

            <button
              class="btn btn-sm btn-danger"
              @click="excluirMedicamento(medicamento.id_medicamento)"
            >
              Excluir
            </button>
          </td>
        </tr>

        <tr v-if="medicamentos.length === 0">
          <td colspan="7" class="text-center">
            Nenhum medicamento encontrado.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
