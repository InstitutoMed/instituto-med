
<script setup>
import { onMounted, ref } from 'vue';

const API_URL = 'http://localhost:3000';

const pacientes = ref([]);
const pesquisaId = ref('');

const cpf = ref('');
const telefone = ref('');
const nome = ref('');
const nascimento = ref('');
const cep = ref('');

const idEdicao = ref(null);

async function carregarPacientes() {
  const resposta = await fetch(`${API_URL}/Paciente`);
  pacientes.value = await resposta.json();
}

async function pesquisarPaciente() {
  if (!pesquisaId.value) {
    carregarPacientes();
    return;
  }

  const resposta = await fetch(
    `${API_URL}/Paciente/${pesquisaId.value}`,
  );

  if (resposta.ok) {
    const paciente = await resposta.json();
    pacientes.value = [paciente];
  } else {
    pacientes.value = [];
    alert('Paciente não encontrado!');
  }
}

function limparFormulario() {
  cpf.value = '';
  telefone.value = '';
  nome.value = '';
  nascimento.value = '';
  cep.value = '';
  idEdicao.value = null;
}

async function salvarPaciente() {
  if (
    !cpf.value ||
    !nome.value ||
    !nascimento.value
  ) {
    alert('Preencha os campos obrigatórios!');
    return;
  }

  const paciente = {
    cpf: cpf.value,
    telefone: telefone.value,
    nome: nome.value,
    dt_nascimento: nascimento.value,
    cep: cep.value,
  };

  if (idEdicao.value) {
    await fetch(`${API_URL}/Paciente/${idEdicao.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    });

    alert('Paciente atualizado!');
  } else {
    const resposta = await fetch(`${API_URL}/Paciente`);
    const lista = await resposta.json();

    const maiorId = lista.reduce(
      (maior, item) => Math.max(maior, item.cod_usuario),
      0,
    );

    paciente.cod_usuario = maiorId + 1;

    await fetch(`${API_URL}/Paciente`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    });

    alert('Paciente cadastrado!');
  }

  limparFormulario();
  carregarPacientes();
}

function editarPaciente(paciente) {
  idEdicao.value = paciente.cod_usuario;
  cpf.value = paciente.cpf;
  telefone.value = paciente.telefone;
  nome.value = paciente.nome;
  nascimento.value = paciente.dt_nascimento;
  cep.value = paciente.cep;
}

async function excluirPaciente(id) {
  const confirmar = window.confirm(
    'Tem certeza que deseja excluir este paciente?',
  );

  if (confirmar) {
    await fetch(`${API_URL}/Paciente/${id}`, {
      method: 'DELETE',
    });

    carregarPacientes();
    alert('Paciente excluído!');
  }
}

onMounted(carregarPacientes);
</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Gerenciamento de Pacientes</h1>
      <p class="text-body-secondary mb-0">
        Cadastro e gerenciamento dos pacientes.
      </p>
    </header>

    <div class="mb-4">
      <h2 class="text-xl font-bold mb-3">
        {{ idEdicao ? 'Editar Paciente' : 'Novo Paciente' }}
      </h2>

      <div class="mb-3">
        <label class="form-label">CPF</label>
        <input
          v-model="cpf"
          type="text"
          maxlength="11"
          class="form-control"
          placeholder="Digite o CPF"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Nome</label>
        <input
          v-model="nome"
          type="text"
          class="form-control"
          placeholder="Digite o nome"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Telefone</label>
        <input
          v-model="telefone"
          type="text"
          maxlength="15"
          class="form-control"
          placeholder="Digite o telefone"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Data de nascimento</label>
        <input
          v-model="nascimento"
          type="date"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">CEP</label>
        <input
          v-model="cep"
          type="text"
          maxlength="8"
          class="form-control"
          placeholder="Digite o CEP"
        />
      </div>

      <button
        class="btn btn-primary me-2"
        @click="salvarPaciente"
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
      <h2 class="text-xl font-bold mb-2">Pesquisar Paciente</h2>

      <div class="d-flex gap-2">
        <input
          v-model="pesquisaId"
          type="number"
          class="form-control"
          placeholder="Digite o código do usuário"
        />

        <button
          class="btn btn-outline-primary"
          @click="pesquisarPaciente"
        >
          Pesquisar
        </button>

        <button
          class="btn btn-outline-secondary"
          @click="pesquisaId = ''; carregarPacientes()"
        >
          Listar todos
        </button>
      </div>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Código</th>
          <th>CPF</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Nascimento</th>
          <th>CEP</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="paciente in pacientes"
          :key="paciente.cod_usuario"
        >
          <td>{{ paciente.cod_usuario }}</td>
          <td>{{ paciente.cpf }}</td>
          <td>{{ paciente.nome }}</td>
          <td>{{ paciente.telefone }}</td>
          <td>{{ paciente.dt_nascimento }}</td>
          <td>{{ paciente.cep }}</td>
          <td>
            <button
              class="btn btn-sm btn-outline-primary me-2"
              @click="editarPaciente(paciente)"
            >
              Editar
            </button>

            <button
              class="btn btn-sm btn-danger"
              @click="excluirPaciente(paciente.cod_usuario)"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
