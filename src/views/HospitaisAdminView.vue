<script setup>
import { computed, ref } from 'vue'
import { useHospitaisStore } from '../store/hospitais'

const store = useHospitaisStore()

const form = ref({
  id: null,
  nome: '',
  endereco: '',
  telefone: '',
  imagem: '',
  slogan: '',
  atendimento: '',
  descricao: '',
})

const hospitais = computed(() => store.listar())

function limparForm() {
  form.value = {
    id: null,
    nome: '',
    endereco: '',
    telefone: '',
    imagem: '',
    slogan: '',
    atendimento: '',
    descricao: '',
  }
}

function salvar() {
  const dados = {
    nome: form.value.nome,
    endereco: form.value.endereco,
    telefone: form.value.telefone,
    imagem: form.value.imagem || '/img/hospitais/placeholder.png',
    slogan: form.value.slogan || 'Saúde e cuidado para a comunidade.',
    atendimento: form.value.atendimento || 'Atendimento conforme a unidade',
    descricao: form.value.descricao || 'Descrição em atualização.',
  }

  if (form.value.id) {
    store.atualizar(form.value.id, dados)
  } else {
    store.criar(dados)
  }

  limparForm()
}

function editar(hospital) {
  form.value = {
    id: hospital.id,
    nome: hospital.nome,
    endereco: hospital.endereco,
    telefone: hospital.telefone,
    imagem: hospital.imagem,
    slogan: hospital.slogan || '',
    atendimento: hospital.atendimento || '',
    descricao: hospital.descricao || '',
  }
}

function excluir(id) {
  store.remover(id)

  if (form.value.id === id) {
    limparForm()
  }
}
</script>

<template>
  <main class="admin-hospitais">
    <section class="card">
      <h1>CRUD de hospitais</h1>

      <form @submit.prevent="salvar" class="formulario">
        <div class="campo">
          <label for="nome">Nome</label>
          <input
            id="nome"
            v-model="form.nome"
            type="text"
            placeholder="Nome do hospital"
            required
          />
        </div>

        <div class="campo">
          <label for="endereco">Endereço</label>
          <input
            id="endereco"
            v-model="form.endereco"
            type="text"
            placeholder="Endereço"
            required
          />
        </div>

        <div class="campo">
          <label for="telefone">Telefone</label>
          <input
            id="telefone"
            v-model="form.telefone"
            type="text"
            placeholder="Telefone"
            required
          />
        </div>

        <div class="campo">
          <label for="imagem">Imagem</label>
          <input
            id="imagem"
            v-model="form.imagem"
            type="text"
            placeholder="/img/hospitais/nome.png"
          />
        </div>

        <div class="campo">
          <label for="slogan">Slogan</label>
          <input id="slogan" v-model="form.slogan" type="text" placeholder="Slogan" />
        </div>

        <div class="campo">
          <label for="atendimento">Atendimento</label>
          <input
            id="atendimento"
            v-model="form.atendimento"
            type="text"
            placeholder="Atendimento"
          />
        </div>

        <div class="campo campo-amplo">
          <label for="descricao">Descrição</label>
          <textarea
            id="descricao"
            v-model="form.descricao"
            rows="4"
            placeholder="Descrição do hospital"
          ></textarea>
        </div>

        <div class="acoes">
          <button type="submit" class="btn btn-primary">
            {{ form.id ? 'Salvar alterações' : 'Adicionar hospital' }}
          </button>
          <button type="button" class="btn btn-secondary" @click="limparForm">Limpar</button>
        </div>
      </form>
    </section>

    <section class="card lista">
      <h2>Hospitais cadastrados</h2>

      <ul v-if="hospitais.length" class="lista-hospitais">
        <li v-for="hospital in hospitais" :key="hospital.id" class="item-hospital">
          <div>
            <strong>{{ hospital.nome }}</strong>
            <p>{{ hospital.endereco }}</p>
          </div>

          <div class="botoes">
            <button type="button" class="btn btn-secondary" @click="editar(hospital)">
              Editar
            </button>
            <button type="button" class="btn btn-danger" @click="excluir(hospital.id)">
              Excluir
            </button>
          </div>
        </li>
      </ul>

      <p v-else>Nenhum hospital cadastrado.</p>
    </section>
  </main>
</template>

<style scoped>
.admin-hospitais {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 60px;
  display: grid;
  gap: 24px;
}

.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

h1,
h2 {
  margin: 0 0 20px;
  color: #111827;
}

.formulario {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 18px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.campo-amplo {
  grid-column: 1 / -1;
}

label {
  font-weight: 600;
  color: #374151;
}

input,
textarea {
  width: 100%;
  padding: 12px 14px;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font: inherit;
}

.acoes,
.botoes {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
}

.btn-primary {
  background: #0d9488;
  color: white;
}

.btn-secondary {
  background: #e5e7eb;
  color: #111827;
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.lista-hospitais {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.item-hospital {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fafafa;
}

.item-hospital p {
  margin: 6px 0 0;
  color: #6b7280;
}

@media (max-width: 720px) {
  .formulario {
    grid-template-columns: 1fr;
  }

  .item-hospital {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
