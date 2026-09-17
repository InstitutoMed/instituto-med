<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { vacinas } from '@/data/vacinas'
import { aplicarRegistrosSalvos } from '@/store/RegistrosVacinas'

onMounted(() => {
  aplicarRegistrosSalvos()
})

const vacinasRegistradas = computed(() => {
  return vacinas.filter(v => v.dataVacinacao)
})

function formatarData(dataIso) {
  if (!dataIso) return ''
  const [ano, mes, dia] = dataIso.split('-')
  return `${dia} / ${mes} / ${ano}`
}
</script>

<template>
  <main class="main">
    <h1 class="titulo_pagina">Minhas Vacinas Registradas</h1>
    <p class="subtitulo">Acompanhe seu histórico de vacinação registrado.</p>

    <div v-if="vacinasRegistradas.length > 0" class="lista_vacinas">
      <div 
        v-for="vacina in vacinasRegistradas" 
        :key="vacina.id" 
        class="card_vacina"
      >
        <div class="vacina_info">
          <h3>{{ vacina.nome }}</h3>
          <p class="data_vacinacao">
            Vacinado em: <strong>{{ formatarData(vacina.dataVacinacao) }}</strong>
          </p>
          <p class="doencas">Prevenção: {{ vacina.doencas }}</p>
        </div>

        <RouterLink :to="`/detalhesvacina/${vacina.id}`" class="botao_detalhes">
          Ver detalhes
        </RouterLink>
      </div>
    </div>

    <div v-else class="sem_vacinas">
      <p>Você ainda não registrou nenhuma vacina tomada.</p>
      <RouterLink to="/caderneta" class="botao_caderneta">
        Ir para a Caderneta
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 20px 64px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
}

.titulo_pagina {
  font-size: 1.8rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 4px;
}

.subtitulo {
  color: #6b7280;
  margin-bottom: 24px;
  font-size: 0.95rem;
}

.lista_vacinas {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card_vacina {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.vacina_info h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
}

.vacina_info .data_vacinacao {
  margin: 0 0 4px;
  color: #065f46;
  font-size: 0.9rem;
}

.vacina_info .doencas {
  margin: 0;
  color: #6b7280;
  font-size: 0.85rem;
}

.botao_detalhes {
  background-color: #2b7b9b;
  color: #ffffff;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.botao_detalhes:hover {
  background-color: #22627c;
}

.sem_vacinas {
  text-align: center;
  padding: 40px 20px;
  background: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 16px;
  color: #4b5563;
  font-size: 0.95rem;
}

.botao_caderneta {
  display: inline-block;
  margin-top: 12px;
  background-color: #2b7b9b;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.botao_caderneta:hover {
  background-color: #22627c;
}

@media (max-width: 480px) {
  .main {
    padding: 15px 15px 40px;
  }

  .card_vacina {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .botao_detalhes {
    width: 100%;
    text-align: center;
  }
}
</style>