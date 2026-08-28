<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const usuario = ref({
  nome: 'Kennedy Araújo',
  cpf: '011.201.321-45',
  cep: '67.800.912',
  telefone: '+55 47 9 5467-9814',
  tipoSanguineo: 'A+',
  email: 'kennedyA@gmail.com'
})

const consulta = ref({
  tipo: 'Exame de Sangue',
  hora: '10:30h',
  medico: 'Dr. Fábio Longo de Moura',
  local: 'Hospital São Bernardino',
  dataConsulta: new Date(2026, 7, 23) 
})

const vacinas = ref([
  { id: 1, nome: 'Dengue', dia: '17 / 03 / 26', horario: '11:05', local: 'Hospital São Bernardino' },
  { id: 2, nome: 'Covid-19', dia: '03 / 02 / 26', horario: '08:45', local: 'Hospital São José' },
  { id: 3, nome: 'Gripe', dia: '24 / 02 / 26', horario: '09:05', local: 'Hospital Santa Helena' }
])

// Formatação da data
const diaFormatado = computed(() => {
  const d = consulta.value.dataConsulta
  const dia = String(d.getDate()).padStart(2, '0')
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const ano = d.getFullYear()
  return `${dia} / ${mes} / ${ano}`
})


const estadoConsulta = computed(() => {
  const hoje = new Date()
  const dataC = consulta.value.dataConsulta

  const dataZerar = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  const dataConsu = new Date(dataC.getFullYear(), dataC.getMonth(), dataC.getDate())

  if (dataZerar.getTime() === dataConsu.getTime()) {
    return 'hoje'
  } else if (dataConsu.getTime() < dataZerar.getTime()) {
    return 'passou'
  } else {
    return 'futuro'
  }
})

const tituloConsulta = computed(() => {
  switch (estadoConsulta.value) {
    case 'hoje': return 'Sua consulta é hoje!'
    case 'passou': return 'Consulta realizada'
    default: return 'Sua consulta está agendada'
  }
})

const avisoConsulta = computed(() => {
  switch (estadoConsulta.value) {
    case 'hoje': return 'Consulta hoje!'
    case 'passou': return 'Consulta já realizada'
    default: return 'Consulta marcada'
  }
})

// URL GoogleAgenda
const linkGoogleAgenda = computed(() => {
  const d = consulta.value.dataConsulta
  const dia = String(d.getDate()).padStart(2, '0')
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const ano = d.getFullYear()

  // Formato para evento de dia inteiro
  const dataISO = `${ano}${mes}${dia}`
  const datas = `${dataISO}/${dataISO}`

  const titulo = encodeURIComponent(`${consulta.value.tipo} - ${consulta.value.medico}`)
  const detalhes = encodeURIComponent(`Consulta marcada às ${consulta.value.hora} no local: ${consulta.value.local}`)
  const localizacao = encodeURIComponent(consulta.value.local)

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titulo}&dates=${datas}&details=${detalhes}&location=${localizacao}`
})
</script>

<template>
  <main class="main">
  
    <section class="card">
      <RouterLink to="/editprofile" class="botao_editar" aria-label="Editar perfil">
        <img src="../img/lapis.png" alt="Editar" class="icon_lapis" />
      </RouterLink>

      <div class="avatar">
        <img src="../../public/pictures/" alt="Foto de Perfil" class="foto_perfil" />
      </div>

      <div class="usuarioInfo">
        <h2 class="titulo_card">{{ usuario.nome }}</h2>
        <ul class="infos_card">
          <li><strong>CPF:</strong> {{ usuario.cpf }}</li>
          <li><strong>CEP:</strong> {{ usuario.cep }}</li>
          <li><strong>Telefone:</strong> {{ usuario.telefone }}</li>
          <li><strong>Tipo Sanguíneo:</strong> {{ usuario.tipoSanguineo }}</li>
          <li><strong>Email:</strong> {{ usuario.email }}</li>
        </ul>
      </div>
    </section>

    <div class="sec_consulta">
      <section class="consultas">
        <h3 class="tituloConsultas">
          {{ tituloConsulta }}
        </h3>

        <div class="consultas_card">
          <p class="aviso_consulta">
            {{ avisoConsulta }}
          </p>

          <ul>
            <li><strong>Tipo:</strong> {{ consulta.tipo }}</li>
            <li><strong>Dia:</strong> {{ diaFormatado }}</li>
            <li><strong>Hora:</strong> {{ consulta.hora }}</li>
            <li><strong>Médico:</strong> {{ consulta.medico }}</li>
            <li><strong>Local:</strong> {{ consulta.local }}</li>
          </ul>

          <RouterLink to="/consultas" class="saiba_mais">SAIBA MAIS</RouterLink>
        </div>
      </section>

      <section class="foto_agenda">
        <a 
          v-if="estadoConsulta !== 'passou'"
          :href="linkGoogleAgenda" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="google_card"
          title="Clique para adicionar este agendamento no seu Google Agenda"
        >
          <div class="calendar_google">
            <img class="google_icon" src="../img/check.png">
            <span class="botao_texto_agenda">Adicionar consulta ao Google Agenda</span>
          </div>
        </a>

        <div v-else class="google_card desativado">
          <div class="calendar_google">
            <svg class="google_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span class="botao_texto_agenda">Consulta Concluída</span>
          </div>
        </div>
      </section>
    </div>

    <section class="caderneta">
      <RouterLink to="/vacinas" class="link_vacinas">
        <h3 class="titulo_vacinas">Histórico de Vacinas</h3>
      </RouterLink>

      <div class="vacinas_lista">
        <div v-for="vacina in vacinas" :key="vacina.id" class="tipo_vacina">
          <h4>{{ vacina.nome }}</h4>
          <ul>
            <li><strong>Dia:</strong> {{ vacina.dia }}</li>
            <li><strong>Horário:</strong> {{ vacina.horario }}</li>
            <li><strong>Local:</strong> {{ vacina.local }}</li>
          </ul>
        </div>
      </div>

      <div class="saiba_mais_cader">
        <RouterLink to="/vacinas" class="saiba_mais">SAIBA MAIS</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  gap: 40px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.botao_editar {
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icon_lapis {
  width: 18px;
  height: 18px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e5e7eb;
  flex-shrink: 0;
}

.foto_perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.usuarioInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.titulo_card {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  color: #000;
  text-align: left;
}

.infos_card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;
  text-align: left;
}

.infos_card li {
  text-align: left;
}

.sec_consulta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.consultas {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tituloConsultas {
  background-color: #2b7b9b;
  color: white;
  padding: 12px 16px;
  font-size: 1.1rem;
  margin: 0;
}

.consultas_card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.aviso_consulta {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 8px;
}

.foto_agendas {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  border: 1px solid #e5e7eb;
}

.calendar_google {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 180px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #f8fafc;
  transition: all 0.2s ease;
}

.google_card:hover:not(.desativado) {
  background-color: #f1f5f9;
  transform: scale(1.01);
}

.google_card.desativado {
  opacity: 0.7;
  cursor: default;
}

.google_icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #2b7b9b;
}

.google_icon {
  width: 56px;
  height: 56px;
  fill: #2b7b9b;
}

.botao_texto_agenda {
  font-weight: bold;
  font-size: 0.95rem;
  color: #1a1a1a;
}

.caderneta {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.link_vacinas {
  text-decoration: none;
  color: inherit;
}

.titulo_vacinas {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.vacinas-lista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.tipo_vacina {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}

.tipo_vacina h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.saiba_mais_cader {
  text-align: right;
  margin-top: 16px;
}

.saiba_mais {
  font-size: 0.8rem;
  color: #6b7280;
  text-decoration: underline;
  font-weight: bold;
}
</style>