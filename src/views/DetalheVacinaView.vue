<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { vacinas } from '@/data/vacinas'
import { salvarRegistro, removerRegistro, aplicarRegistrosSalvos } from '@/store/RegistrosVacinas'

const route = useRoute()
const router = useRouter()

const vacinaId = computed(() => route.params.id)

const vacina = computed(() => {
  if (!vacinaId.value) return null
  return vacinas.find((v) => String(v.id) === String(vacinaId.value))
})

const dataDigitada = ref('')

onMounted(() => {
  aplicarRegistrosSalvos()
  if (vacina.value && vacina.value.dataVacinacao) {
    dataDigitada.value = vacina.value.dataVacinacao
  }
})

function salvar() {
  if (!dataDigitada.value) {
    alert('Por favor, selecione uma data válida.')
    return
  }

  salvarRegistro(vacinaId.value, dataDigitada.value)
  if (vacina.value) {
    vacina.value.dataVacinacao = dataDigitada.value
  }
  alert('Vacina registrada com sucesso!')
}

function remover() {
  removerRegistro(vacinaId.value)
  if (vacina.value) {
    vacina.value.dataVacinacao = null
  }
  dataDigitada.value = ''
  alert('Registro de vacinação removido!')
}

function formatarData(dataIso) {
  if (!dataIso) return ''
  const [ano, mes, dia] = dataIso.split('-')
  return `${dia} / ${mes} / ${ano}`
}
</script>

<template>
  <div class="breadcrumb">
    <RouterLink to="/home">Home</RouterLink>
    <span>›</span>
    <RouterLink to="/caderneta">Caderneta</RouterLink>
    <span>›</span>
    <span class="atual">{{ vacina ? vacina.nome : 'Detalhes' }}</span>
  </div>

  <main v-if="vacina" class="main">
    <h1 class="titulo_pagina">{{ vacina.nome }}</h1>

    <div class="card_detalhes">
      <!-- Tag de Categoria e Doses -->
      <div class="tags_container">
        <span class="tag categoria">{{ vacina.categoria }}</span>
        <span class="tag doses">{{ vacina.doses }}</span>
      </div>

      <p class="doencas"><strong>Prevenção:</strong> {{ vacina.doencas }}</p>

      <section class="secao_registro">
        <h2>Registro da Vacina</h2>

        <div v-if="vacina.dataVacinacao" class="status_registrado">
          <p class="sucesso_msg">
            Vacina aplicada em: <strong>{{ formatarData(vacina.dataVacinacao) }}</strong>
          </p>
          <button type="button" class="botao_remover" @click="remover">
            Remover Registro
          </button>
        </div>

        <div v-else class="formulario_registro">
          <label for="dataVacina">Informe a data em que tomou esta vacina:</label>
          <div class="input_grupo">
            <input
              id="dataVacina"
              type="date"
              v-model="dataDigitada"
            />
            <button type="button" class="botao_salvar" @click="salvar">
              Salvar Vacina
            </button>
          </div>
        </div>
      </section>

      <section class="info_bloco" v-if="vacina.descricao">
        <h3>Descrição</h3>
        <p>{{ vacina.descricao }}</p>
      </section>

      <section class="info_bloco" v-if="vacina.indicacao">
        <h3>Indicação</h3>
        <p>{{ vacina.indicacao }}</p>
      </section>

      <section class="info_bloco" v-if="vacina.efeitos">
        <h3>Efeitos Colaterais Comuns</h3>
        <p>{{ vacina.efeitos }}</p>
      </section>

      <section class="info_bloco" v-if="vacina.contraindicacoes">
        <h3>Contraindicações</h3>
        <p>{{ vacina.contraindicacoes }}</p>
      </section>

      <div class="acoes_rodape">
        <button type="button" class="botao_voltar" @click="router.push('/caderneta')">
          Voltar para a Caderneta
        </button>
      </div>
    </div>
  </main>

  <main v-else class="main">
    <div class="nao_encontrada">
      <h2>Vacina não encontrada</h2>
      <button type="button" class="botao_voltar" @click="router.push('/caderneta')">
        Voltar para a Caderneta
      </button>
    </div>
  </main>
</template>

<style scoped>
.breadcrumb {
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 20px;
  font-size: 0.9rem;
}

.breadcrumb a {
  margin: 0 5px;
  color: #6b7280;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #2b7b9b;
}

.breadcrumb .atual {
  margin-left: 5px;
  color: #2b7b9b;
  font-weight: 600;
}

.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px 40px;
  color: #1a1a1a;
}

.titulo_pagina {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 8px 0 24px;
  color: #000000;
}

.card_detalhes {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tags_container {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}

.tag.categoria {
  background-color: #e0f2fe;
  color: #2b7b9b;
}

.tag.doses {
  background-color: #f3f4f6;
  color: #374151;
}

.doencas {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 24px;
}

.secao_registro {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 28px;
}

.secao_registro h2 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 12px;
  color: #1f2937;
}

.status_registrado {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.sucesso_msg {
  margin: 0;
  color: #065f46;
  font-size: 0.95rem;
}

.formulario_registro label {
  display: block;
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 8px;
}

.input_grupo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.input_grupo input[type='date'] {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  background: #ffffff;
}

.input_grupo input[type='date']:focus {
  border-color: #2b7b9b;
}

.botao_salvar {
  background-color: #2b7b9b;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.botao_salvar:hover {
  background-color: #22627c;
}

.botao_remover {
  background-color: #ef4444;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}

.botao_remover:hover {
  background-color: #dc2626;
}

.botao_voltar {
  background: transparent;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.botao_voltar:hover {
  border-color: #2b7b9b;
  color: #2b7b9b;
}

.info_bloco {
  margin-bottom: 20px;
}

.info_bloco h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 6px;
}

.info_bloco p {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

.acoes_rodape {
  margin-top: 32px;
  display: flex;
  justify-content: flex-start;
}

.nao_encontrada {
  text-align: center;
  padding: 40px 0;
}

@media (max-width: 480px) {
  .main {
    padding: 0 15px 40px;
  }

  .titulo_pagina {
    font-size: 1.5rem;
  }

  .card_detalhes {
    padding: 20px;
  }

  .input_grupo {
    flex-direction: column;
  }

  .input_grupo input[type='date'],
  .botao_salvar {
    width: 100%;
  }

  .status_registrado {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>