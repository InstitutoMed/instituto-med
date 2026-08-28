<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { vacinas } from '@/data/vacinas'

const route = useRoute()
const router = useRouter()


const vacina = vacinas.find(v => v.id == route.params.id)

const mostrarModal = ref(false)
const dataSelecionada = ref('')
const erro = ref(false)

function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}

function fecharModal() {
  mostrarModal.value = false
  erro.value = false
  dataSelecionada.value = ''
}

function concluirRegistro() {
  if (!dataSelecionada.value) {
    erro.value = true
    return
  }
  vacina.dataVacinacao = dataSelecionada.value
  fecharModal()
  router.push('/caderneta')
}
</script>

<template>
  <div v-if="vacina">
    <h1>{{ vacina.nome }}</h1>

    <p>{{ vacina.doencas }}</p>
    <p>{{ vacina.doses }}</p>

    <h3>Descrição</h3>
    <p>{{ vacina.descricao }}</p>

    <h3>Indicação</h3>
    <p>{{ vacina.indicacao }}</p>

    <h3>Efeitos colaterais</h3>
    <p>{{ vacina.efeitos }}</p>

    <h3>Contraindicações</h3>
    <p>{{ vacina.contraindicacoes }}</p>

   <p v-if="vacina.dataVacinacao" class="ja-vacinado">
      Vacinado em {{ formatarData(vacina.dataVacinacao) }}
    </p>

    <RouterLink to="/agendar"><button>Agendar</button></RouterLink>
    <button @click="mostrarModal = true">
      {{ vacina.dataVacinacao ? 'Editar registro' : 'Registro' }}
    </button>
  </div>

  <div v-if="mostrarModal" class="overlay">
    <div class="modal">
      <h3>Vacinado</h3>
      <label for="data">Data da vacinação</label>
      <input id="data" type="date" v-model="dataSelecionada" />
      <p v-if="erro" class="erro">Selecione uma data.</p>

      <div class="botoes">
        <button @click="fecharModal">Cancelar</button>
        <button @click="concluirRegistro">Concluir</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
main, div:has(> h1) {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 32px 64px;
}

h1 {
  font-size: 1.9rem;
  font-weight: 700;
  color: #111827;
  margin: 8px 0 4px;
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #61A5C2;
  margin: 24px 0 6px;
}

p {
  font-size: 14px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0 0 4px;
}

.ja-vacinado {
  display: inline-block;
  margin-top: 16px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #e6f4ea;
  color: #1a7a3a;
  font-weight: 600;
  font-size: 13px;
}
a button,
button {
  padding: 10px 22px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: 24px;
  margin-right: 10px;
}
a button:hover,
button:hover {
  border-color: #61A5C2;
  color: #61A5C2;
}

button:last-of-type {
  background: #61A5C2;
  border-color: #61A5C2;
  color: #fff;
}
button:last-of-type:hover {
  background: #4d8ca6;
  border-color: #4d8ca6;
  color: #fff;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background: white;
  border-radius: 10px;
  padding: 24px;
  width: 280px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.modal h3 {
  margin-top: 0;
}

.modal label {
  display: block;
  font-size: 13px;
  color: #4b5563;
  margin-bottom: 6px;
}

.modal input[type="date"] {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
}
.modal input[type="date"]:focus {
  border-color: #61A5C2;
}

.botoes {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}
.botoes button {
  margin-top: 0;
  padding: 8px 16px;
}

.erro {
  color: #b91c1c;
  font-size: 13px;
  margin-top: 6px;
}

@media (max-width: 480px) {

  main,
  div:has(> h1) {
    padding: 18px 16px 40px;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    line-height: 1.55;
  }

  .ja-vacinado {
    font-size: 12px;
    padding: 6px 12px;
    margin-top: 14px;
  }

  a button,
  button {
    font-size: 13px;
    padding: 10px 16px;
    margin-top: 20px;
    margin-right: 6px;
  }

  /* MODAL */

  .overlay {
    padding: 16px;
  }

  .modal {
    width: 100%;
    max-width: 340px;
    padding: 20px;
    border-radius: 10px;
  }

  .modal h3 {
    font-size: 16px;
  }

  .modal label {
    font-size: 12px;
  }

  .modal input[type="date"] {
    font-size: 13px;
    padding: 9px 10px;
  }

  .botoes {
    gap: 6px;
  }

  .botoes button {
    font-size: 13px;
    padding: 8px 14px;
  }
}
</style>
