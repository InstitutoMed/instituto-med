<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { obterSessao, encerrarSessao, removerUsuario } from '@/store/usuarios.js'
import { vacinas as vacinasData } from '@/data/vacinas'
import { aplicarRegistrosSalvos } from '@/store/RegistrosVacinas'
import { obterAgendamentos } from '@/store/agendamentos.js'

const router = useRouter()

const usuario = ref({
  nome: '',
  cpf: '',
  cep: '',
  telefone: '',
  tipoSanguineo: '',
  email: '',
  foto: ''
})

function formatarHorario(horario) {
  if (!horario) return 'Não informado'
  if (horario === 'option1') return 'Matutino'
  if (horario === 'option2') return 'Vespertino'
  if (horario === 'option3') return 'Noturno'
  return horario
}

const consulta = computed(() => {
  const agendamentos = obterAgendamentos()
  
  if (agendamentos && agendamentos.length > 0) {
    const ultimo = agendamentos[agendamentos.length - 1]
    
    let dataObj = new Date()
    if (ultimo.data) {
      const [ano, mes, dia] = ultimo.data.split('-')
      dataObj = new Date(ano, mes - 1, dia)
    }

    return {
      tipo: ultimo.consulta || 'Não especificado',
      hora: formatarHorario(ultimo.horario),
      medico: ultimo.medico || 'Não informado',
      local: ultimo.hospital || 'Não informado',
      dataConsulta: dataObj
    }
  }

  return {
    tipo: 'Exame de Sangue',
    hora: 'Matutino',
    medico: 'Dr. Fábio Longo de Moura',
    local: 'Hospital São Bernardino',
    dataConsulta: new Date(2026, 7, 29) 
  }
})

onMounted(() => {
  const dadosSessao = obterSessao()
  
  if (dadosSessao) {
    usuario.value = { ...usuario.value, ...dadosSessao }
  } else {
    router.push('/login')
  }

  aplicarRegistrosSalvos()
})

function sair() {
  encerrarSessao()
  router.push('/login')
}

function deletarPerfil() {
  const confirmacao = window.confirm(
    'Tem certeza que deseja excluir permanentemente seu perfil? Essa ação não poderá ser desfeita.'
  )

  if (confirmacao) {
    if (usuario.value && usuario.value.cpf) {
      removerUsuario(usuario.value.cpf)
    }
    encerrarSessao()
    router.push('/entrar')
  }
}

const cpfFormatado = computed(() => {
  const cpf = usuario.value.cpf || ''
  if (cpf.length !== 11) return cpf
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
})

const ultimasVacinas = computed(() => {
  return vacinasData
    .filter(v => v.dataVacinacao)
    .sort((a, b) => new Date(b.dataVacinacao) - new Date(a.dataVacinacao))
    .slice(0, 3)
})

function formatarDataCurta(dataIso) {
  if (!dataIso) return ''
  const [ano, mes, dia] = dataIso.split('-')
  const anoCurto = ano.slice(-2)
  return `${dia} / ${mes} / ${anoCurto}`
}

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

const linkGoogleAgenda = computed(() => {
  const d = consulta.value.dataConsulta
  const dia = String(d.getDate()).padStart(2, '0')
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const ano = d.getFullYear()

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
        <img v-if="usuario.foto" :src="usuario.foto" alt="Foto de Perfil" class="foto_perfil" />
        <div v-else class="foto_placeholder">
          {{ usuario.nome ? usuario.nome.charAt(0).toUpperCase() : 'U' }}
        </div>
      </div>

      <div class="usuarioInfo">
        <h2 class="titulo_card">{{ usuario.nome }}</h2>
        <ul class="infos_card">
          <li><strong>CPF:</strong> {{ cpfFormatado }}</li>
          <li><strong>CEP:</strong> {{ usuario.cep }}</li>
          <li><strong>Telefone:</strong> {{ usuario.telefone }}</li>
          <li><strong>Tipo Sanguíneo:</strong> {{ usuario.tipoSanguineo }}</li>
          <li><strong>Email:</strong> {{ usuario.email }}</li>
        </ul>

        <div class="acoes_usuario">
          <button type="button" class="botao_sessao botao_sair_del" @click="sair">
            Sair
          </button>
          <button type="button" class="botao_sessao botao_sair_del" @click="deletarPerfil">
            Deletar Perfil
          </button>
        </div>
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

          <RouterLink to="/minhasconsultas" class="saiba_mais">SAIBA MAIS</RouterLink>
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
            <img class="google_icon" src="../img/relogio-calendario.png">
            <span class="botao_texto_agenda">Adicionar consulta ao Google Agenda</span>
          </div>
        </a>

        <div v-else class="google_card desativado">
          <div class="calendar_google">
            <img class="google_icon" src="../img/check.png">
            <span class="botao_texto_agenda">Consulta Concluída</span>
          </div>
        </div>
      </section>
    </div>

    <section class="caderneta">
      <RouterLink to="/minhas-vacinas" class="link_vacinas">
        <h3 class="titulo_vacinas">Histórico de Vacinas</h3>
      </RouterLink>

      <div v-if="ultimasVacinas.length > 0" class="vacinas_lista">
        <div v-for="vacina in ultimasVacinas" :key="vacina.id" class="tipo_vacina">
          <h4>{{ vacina.nome }}</h4>
          <ul>
            <li><strong>Dia:</strong> {{ formatarDataCurta(vacina.dataVacinacao) }}</li>
            <li v-if="vacina.horario"><strong>Horário:</strong> {{ vacina.horario }}</li>
            <li v-if="vacina.local"><strong>Local:</strong> {{ vacina.local }}</li>
          </ul>
        </div>
      </div>

      <div v-else class="sem_vacinas_card">
        <p>Nenhuma vacina registrada até o momento.</p>
      </div>

      <div class="saiba_mais_cader">
        <RouterLink to="/minhasvacinas" class="saiba_mais">SAIBA MAIS</RouterLink>
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
  gap: 32px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.botao_editar {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto_perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.foto_placeholder {
  font-size: 3rem;
  font-weight: 700;
  color: #2b7b9b;
}

.usuarioInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  min-width: 0;
  padding-right: 24px;
}

.titulo_card {
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  color: #000;
  text-align: left;
  word-break: break-word;
}

.infos_card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;
  text-align: left;
  width: 100%;
}

.infos_card li {
  text-align: left;
  word-break: break-word;
}

.acoes_usuario {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.botao_sessao {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.botao_sair_del {
  background-color: #f3f4f6;
  color: #2b7b9b;
}

.botao_sair_del:hover {
  background-color: #e5e7eb;
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

.google_card {
  display: block;
  text-decoration: none;
  height: 100%;
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
  border-radius: 20px;
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
  margin: 15px;
  width: 56px;
  height: 56px;
}

.botao_texto_agenda {
  font-weight: bold;
  font-size: 0.95rem;
  color: #2b7b9b;
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

.vacinas_lista {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.tipo_vacina {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
}

.tipo_vacina h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.sem_vacinas_card {
  text-align: center;
  padding: 20px;
  background-color: #f9fafb;
  border: 1px dashed #d1d5db;
  border-radius: 12px;
  color: #6b7280;
  font-size: 0.95rem;
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

@media (max-width: 650px) {
  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 32px 20px 24px;
    gap: 20px;
  }

  .usuarioInfo {
    align-items: center;
    text-align: center;
    padding-right: 0;
    width: 100%;
  }

  .titulo_card, .infos_card, .infos_card li {
    text-align: center;
  }

  .acoes_usuario {
    justify-content: center;
  }

  .sec_consulta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .perfil_stats {
    grid-template-columns: 1fr;
  }
}
</style>