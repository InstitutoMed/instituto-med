<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const pacientes = ref([]);

const API_URL = 'http://localhost:3000';

async function carregarDados() {
  const respostaPacientes = await fetch(`${API_URL}/pacientes`);
  pacientes.value = await respostaPacientes.json();
}

function nomeDoPaciente(pacienteId) {
  for (const paciente of pacientes.value) {
    if (String(paciente.id) === String(pacienteId)) {
      return paciente.nome;
    }
  }
  return 'Oopps, Paciente não encontrado!';
}

async function excluirPaciente(id) {
  const confirmarExclusao = window.confirm(
    'Tem certeza que deseja excluir este Paciente?',
  );

  if (confirmarExclusao) {
    await fetch(`${API_URL}/pacientes/${id}`, {
      method: 'DELETE',
    });

    carregarDados();
  }
}

onMounted(carregarDados);
</script>

<template>
<div>
  <header class="mb-4">
      <h1 class="text-2xl font-bold">Listagem de Pacientes</h1>
      <p class="text-body-secondary mb-0">
        Listagem dos Pacientes cadastrados no sistema.
      </p>
    </header>


    <RouterLink
      class="btn btn-outline-primary"
      to="/addpacientes"
    >
      Novo Paciente
    </RouterLink>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>CEP</th>
          <th>Telefone</th>
          <th>Nascimento</th>
        </tr>
      </thead>
        <tbody>
        <tr
          v-for="paciente in pacientes"
          :key="paciente.id"
        >
          <td>{{ paciente.nome }}</td>
          <td>{{ paciente.cpf }}</td>
          <td>{{ paciente.cep }}</td>
          <td>{{ paciente.telefone }}</td>
          <td>{{ paciente.data}}</td>
          <td>
            <RouterLink
              class="btn btn-sm btn-outline-primary me-2"
              :to="`/pacientes/${paciente.id}`"
            >
              Editar
            </RouterLink>
            <button
              class="btn btn-sm btn-danger"
              @click="excluirPaciente(paciente.id)"
            >
              Excluir
            </button>
          </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>


</style>
