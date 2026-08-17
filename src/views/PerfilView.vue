<script setup>
import { ref } from 'vue'

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
  local: 'Hospital São Bernardino'
})

const vacinas = ref([
  { id: 1, nome: 'Dengue', dia: '17 / 03 / 26', horario: '11:05', local: 'Hospital São Bernardino' },
  { id: 2, nome: 'Covid-19', dia: '03 / 02 / 26', horario: '08:45', local: 'Hospital São José' },
  { id: 3, nome: 'Gripe', dia: '24 / 02 / 26', horario: '09:05', local: 'Hospital Santa Helena' }
])
</script>

<template>
  <main class="container">
  
    <section class="card">
<button class="edit-btn" aria-label="Editar perfil">
  <img src="../../public/pictures/lapis.png" alt="Editar" class="icon-lapis" />
</button>

      <div class="avatar-container">
        <img src="../../public/pictures/kennedyrs.jpg" alt="Foto de Perfil" class="foto-perfil" />
      </div>

      <div class="user-info">
        <h2 class="title_card">{{ usuario.nome }}</h2>
        <ul class="infos_card">
          <li><strong>CPF:</strong> {{ usuario.cpf }}</li>
          <li><strong>CEP:</strong> {{ usuario.cep }}</li>
          <li><strong>Telefone:</strong> {{ usuario.telefone }}</li>
          <li><strong>Tipo Sanguíneo:</strong> {{ usuario.tipoSanguineo }}</li>
          <li><strong>Email:</strong> {{ usuario.email }}</li>
        </ul>
      </div>
    </section>

    <div class="sec1">
      <section class="consultas">
        <h3 class="title_c">Sua consulta é hoje!</h3>
        <div class="consultas-content">
          <p class="avi_c">Consulta marcada</p>
          <ul>
            <li><strong>Tipo:</strong> {{ consulta.tipo }}</li>
            <li><strong>Hora:</strong> {{ consulta.hora }}</li>
            <li><strong>Médico:</strong> {{ consulta.medico }}</li>
            <li><strong>Local:</strong> {{ consulta.local }}</li>
          </ul>
          <a href="#" class="sm">SAIBA MAIS</a>
        </div>
      </section>

      <section class="foto-container">
        <img src="../../public/pictures/calendar.jpg" alt="Calendário" class="calendario" />
      </section>
    </div>

    
    <section class="vac">
      <h3 class="titulo_vac">Histórico de Vacinas</h3>
      <div class="vacinas-lista">
        <div v-for="vacina in vacinas" :key="vacina.id" class="tipo_vac">
          <h4>{{ vacina.nome }}</h4>
          <ul>
            <li><strong>Dia:</strong> {{ vacina.dia }}</li>
            <li><strong>Horário:</strong> {{ vacina.horario }}</li>
            <li><strong>Local:</strong> {{ vacina.local }}</li>
          </ul>
        </div>
      </div>
      <div class="sm-container">
        <a href="#" class="sm">SAIBA MAIS</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
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
  display: flex ;
  flex-direction: row ;
  align-items: center ;
  justify-content: flex-start ;
  text-align: left ;
  gap: 40px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.edit-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.icon-lapis {
  width: 18px;
  height: 18px;
}

.avatar-container {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e5e7eb;
  flex-shrink: 0;
}

.foto-perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start ;
  text-align: left ;
}

.title_card {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  color: #000;
  text-align: left ;
}

.infos_card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;
  text-align: left ;
}

.infos_card li {
  text-align: left;
}


.sec1 {
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

.title_c {
  background-color: #2b7b9b;
  color: white;
  padding: 12px 16px;
  font-size: 1.1rem;
  margin: 0;
}

.consultas-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.avi_c {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 8px;
}

.foto-container {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.calendario {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Vacinas */
.vac {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.titulo_vac {
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

.tipo_vac {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}

.tipo_vac h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.sm-container {
  text-align: right;
  margin-top: 16px;
}

.sm {
  font-size: 0.8rem;
  color: #6b7280;
  text-decoration: underline;
  font-weight: bold;
}
</style>