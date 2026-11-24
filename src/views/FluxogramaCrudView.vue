
<script setup>
import { onMounted, ref } from 'vue';

const API_URL = 'http://localhost:3000';

const fluxogramas = ref([]);
const pesquisaId = ref('');

const entrada = ref('');
const saida = ref('');
const horario = ref('');

const idEdicao = ref(null);


async function carregarFluxogramas() {
  const resposta = await fetch(`${API_URL}/Fluxograma`);
  fluxogramas.value = await resposta.json();
}


async function pesquisarFluxograma() {
  if (!pesquisaId.value) {
    carregarFluxogramas();
    return;
  }

  const resposta = await fetch(
    `${API_URL}/Fluxograma/${pesquisaId.value}`,
  );

  if (resposta.ok) {
    const fluxograma = await resposta.json();
    fluxogramas.value = [fluxograma];
  } else {
    fluxogramas.value = [];
    alert('Fluxograma não encontrado!');
  }
}


function limparFormulario() {
  entrada.value = '';
  saida.value = '';
  horario.value = '';
  idEdicao.value = null;
}


async function salvarFluxograma() {
  if (!entrada.value || !saida.value || !horario.value) {
    alert('Preencha todos os campos!');
    return;
  }

  const fluxograma = {
    entrada_paciente: entrada.value,
    saida_paciente: saida.value,
    horario_pico: horario.value,
  };

  if (idEdicao.value) {
    await fetch(`${API_URL}/Fluxograma/${idEdicao.value}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fluxograma),
    });

    alert('Fluxograma atualizado!');
  } else {
    const resposta = await fetch(`${API_URL}/Fluxograma`);
    const lista = await resposta.json();

    const maiorId = lista.reduce(
      (maior, item) => Math.max(maior, item.id_fluxo),
      0,
    );

    fluxograma.id_fluxo = maiorId + 1;

    await fetch(`${API_URL}/Fluxograma`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fluxograma),
    });

    alert('Fluxograma cadastrado!');
  }

  limparFormulario();
  carregarFluxogramas();
}

function editarFluxograma(fluxograma) {
  idEdicao.value = fluxograma.id_fluxo;
  entrada.value = fluxograma.entrada_paciente;
  saida.value = fluxograma.saida_paciente;
  horario.value = fluxograma.horario_pico;
}

async function excluirFluxograma(id) {
  const confirmar = window.confirm(
    'Tem certeza que deseja excluir este fluxograma?',
  );

  if (confirmar) {
    await fetch(`${API_URL}/Fluxograma/${id}`, {
      method: 'DELETE',
    });

    carregarFluxogramas();
    alert('Fluxograma excluído!');
  }
}

onMounted(carregarFluxogramas);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Gerenciamento de Fluxogramas</h1>
      <p class="text-body-secondary mb-0">
        Cadastro e gerenciamento dos fluxogramas de pacientes.
      </p>
    </header>

    <div class="mb-4">
      <h2 class="text-xl font-bold mb-3">
        {{ idEdicao ? 'Editar Fluxograma' : 'Novo Fluxograma' }}
      </h2>

      <div class="mb-3">
        <label class="form-label">Entrada do paciente</label>
        <select v-model="entrada" class="form-select">
          <option value="">Selecione</option>
          <option value="Recepção">Recepção</option>
          <option value="Emergência">Emergência</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Saída do paciente</label>
        <select v-model="saida" class="form-select">
          <option value="">Selecione</option>
          <option value="Alta">Alta</option>
          <option value="Internação">Internação</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Horário de pico</label>
        <input
          v-model="horario"
          type="time"
          class="form-control"
        />
      </div>

      <button
        class="btn btn-primary me-2"
        @click="salvarFluxograma"
      >
        {{ idEdicao ? 'Salvar alterações' : 'Cadastrar' }}
      </button>

      <button
        class="btn btn-outline-secondary"
        @click="limparFormulario"
      >
        Limpar
      </button>
    </div>

    <hr class="my-4" />

    <div class="mb-3">
      <h2 class="text-xl font-bold mb-2">Pesquisar Fluxograma</h2>

      <div class="d-flex gap-2">
        <input
          v-model="pesquisaId"
          type="number"
          class="form-control"
          placeholder="Digite o ID"
        />

        <button
          class="btn btn-outline-primary"
          @click="pesquisarFluxograma"
        >
          Pesquisar
        </button>

        <button
          class="btn btn-outline-secondary"
          @click="pesquisaId = ''; carregarFluxogramas()"
        >
          Listar todos
        </button>
      </div>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Entrada</th>
          <th>Saída</th>
          <th>Horário</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="fluxograma in fluxogramas"
          :key="fluxograma.id_fluxo"
        >
          <td>{{ fluxograma.id_fluxo }}</td>
          <td>{{ fluxograma.entrada_paciente }}</td>
          <td>{{ fluxograma.saida_paciente }}</td>
          <td>{{ fluxograma.horario_pico }}</td>
          <td>
            <button
              class="btn btn-sm btn-outline-primary me-2"
              @click="editarFluxograma(fluxograma)"
            >
              Editar
            </button>

            <button
              class="btn btn-sm btn-danger"
              @click="excluirFluxograma(fluxograma.id_fluxo)"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
