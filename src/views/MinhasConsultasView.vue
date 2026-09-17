<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { obterAgendamentos, cancelarAgendamento } from '@/store/agendamentos.js'

const agendamentos = ref([])

function carregarAgendamentos() {
  agendamentos.value = obterAgendamentos()
}

onMounted(() => {
  carregarAgendamentos()
})

function formatarHorario(horario) {
  if (!horario) return 'Não informado'
  if (horario === 'option1') return 'Matutino'
  if (horario === 'option2') return 'Vespertino'
  if (horario === 'option3') return 'Noturno'
  return horario
}

function formatarData(dataIso) {
  if (!dataIso) return 'Data não informada'
  const [ano, mes, dia] = dataIso.split('-')
  return `${dia} / ${mes} / ${ano}`
}

function remover(id) {
  const confirmacao = window.confirm('Deseja realmente cancelar esta consulta?')
  if (confirmacao) {
    cancelarAgendamento(id)
    carregarAgendamentos()
  }
}

function gerarLinkGoogleAgenda(item) {
  let dataISO = ''
  if (item.data) {
    const [ano, mes, dia] = item.data.split('-')
    dataISO = `${ano}${mes}${dia}`
  } else {
    const hoje = new Date()
    dataISO = hoje.toISOString().split('T')[0].replace(/-/g, '')
  }

  const datas = `${dataISO}/${dataISO}`
  const titulo = encodeURIComponent(`${item.consulta || 'Consulta'} - ${item.medico || ''}`)
  const detalhes = encodeURIComponent(`Consulta marcada às ${formatarHorario(item.horario)} no local: ${item.hospital || ''}`)
  const localizacao = encodeURIComponent(item.hospital || '')

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${datas}&details=${detalhes}&location=${localizacao}`
}
</script>

<template>
  <main class="conteudo">
    <div class="header_pagina">
      <RouterLink to="/perfil" class="voltar">&larr; Voltar ao Perfil</RouterLink>
      <h2>Minhas Consultas Agendadas</h2>
    </div>

    <div v-if="agendamentos.length > 0" class="grid_consultas">
      <article 
        v-for="item in agendamentos" 
        :key="item.id" 
        class="card_consulta"
      >
        <div class="card_header">
          <h3>{{ item.consulta || 'Consulta Sem Título' }}</h3>
          <span class="badge_horario">{{ formatarHorario(item.horario) }}</span>
        </div>

        <ul class="detalhes_consulta">
          <li><strong>Paciente:</strong> {{ item.nome }}</li>
          <li><strong>CPF:</strong> {{ item.cpf }}</li>
          <li><strong>Data:</strong> {{ formatarData(item.data) }}</li>
          <li><strong>Hospital:</strong> {{ item.hospital || 'Não informado' }}</li>
          <li><strong>Médico:</strong> {{ item.medico || 'Não informado' }}</li>
          <li v-if="item.telefone"><strong>Telefone:</strong> {{ item.telefone }}</li>
          <li v-if="item.motivo" class="motivo"><strong>Motivo/Obs:</strong> {{ item.motivo }}</li>
        </ul>

        <div class="card_acoes">
          <a 
            :href="gerarLinkGoogleAgenda(item)" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn_agenda"
          >
            + Google Agenda
          </a>
          
          <button type="button" class="btn_cancelar" @click="remover(item.id)">
            Cancelar Agendamento
          </button>
        </div>
      </article>
    </div>

    <div v-else class="sem_agendamentos">
      <p>Você ainda não possui nenhuma consulta agendada.</p>
      <RouterLink to="/agendar" class="btn_novo_agendamento">Agendar uma Consulta</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.conteudo {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.header_pagina {
  margin-bottom: 30px;
}

.voltar {
  display: inline-block;
  margin-bottom: 12px;
  color: #014F86;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.95rem;
}

.voltar:hover {
  text-decoration: underline;
}

.header_pagina h2 {
  font-size: 1.8rem;
  color: #111;
  margin: 0;
  font-weight: 800;
}

.grid_consultas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card_consulta {
  background: #fff;
  border-radius: 18px;
  border: 1px solid #e2e2e2;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
}

.card_header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #014F86;
  font-weight: 700;
}

.badge_horario {
  background-color: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
}

.detalhes_consulta {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  color: #444;
}

.detalhes_consulta li strong {
  color: #222;
}

.motivo {
  background-color: #f9fafb;
  padding: 8px 10px;
  border-radius: 8px;
  border-left: 3px solid #014F86;
  margin-top: 4px;
  font-size: 0.85rem;
}

.card_acoes {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn_agenda {
  flex: 1;
  text-align: center;
  background-color: #2b7b9b;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 10px;
  border-radius: 20px;
  transition: 0.2s;
}

.btn_agenda:hover {
  background-color: #014F86;
}

.btn_cancelar {
  flex: 1;
  background-color: #fee2e2;
  color: #dc2626;
  border: none;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
}

.btn_cancelar:hover {
  background-color: #fca5a5;
}

.sem_agendamentos {
  background: #fff;
  border-radius: 20px;
  padding: 50px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px dashed #d1d5db;
}

.sem_agendamentos p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.btn_novo_agendamento {
  display: inline-block;
  background: #014F86;
  color: #fff;
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 24px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: 0.2s;
}

.btn_novo_agendamento:hover {
  background: #00365d;
}

@media (max-width: 600px) {
  .card_acoes {
    flex-direction: column;
  }
}
</style>