<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const API_URL = 'http://localhost:3000';

const novoPaciente = ref({
  nome: '',
  cpf: '',
  cep: '',
  telefone: '',
  nascimento: '',
});

async function salvarPaciente() {
  await fetch(`${API_URL}/pacientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoPaciente.value),
  });
  router.push('/pets');
}

</script>

<template>
  <div>
    <header class="mb-4">
      <h1 class="text-2xl font-bold">Cadastrar Paciente</h1>
      <p class="text-body-secondary mb-0">Cadastro de Paciente no sistema.</p>
    </header>
    <form
      class="row"
      @submit.prevent="salvarPaciente"
    >
    <div class="col-md-6">
        <label
          for="nome"
          class="form-label"
        >
          Nome do Paciente:
        </label>
        <input
          type="text"
          class="form-control"
          id="nome"
          v-model="novoPaciente.nome"
          required
        />
      </div>

      <div class="col-md-6">
        <label
          for="cpf"
          class="form-label"
        >
          CPF:
        </label>
        <input
          id="cpf"
          v-model="novoPaciente.cpf"
          type="number"
          class="form-control"
          placeholder="999.999.999-99"
          required
        />
      </div>

      <div class="col-md-6">
        <label
          for="cep"
          class="form-label"
        >
          CEP:
        </label>
        <input
          id="cep"
          v-model="novoPaciente.cep"
          type="number"
          class="form-control"
          placeholder="99999-999"
          required
        />
      </div>

        <div class="col-md-6">
        <label
          for="telefone"
          class="form-label"
        >
          Telefone:
        </label>
        <input
          id="telefone"
          v-model="novoPaciente.telefone"
          type="tel"
          class="form-control"
          placeholder="(99) 99999-9999"
          required
        />
      </div>

        <div class="col-md-6">
        <label
          for="cep"
          class="form-label"
        >
          Nascimento:
        </label>
        <input
          id="cep"
          v-model="novoPaciente.data"
          type="date"
          class="form-control"
          required
        />
      </div>

      <div class="col-12 d-flex gap-2">
        <button
          type="submit"
          class="btn btn-success"
        >
          Salvar Paciente
        </button>
      </div>
   </form>
  </div>
</template>
