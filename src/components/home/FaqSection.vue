<template>
  <section id="duvidas" class="faq-section">
    <div class="container">
      <div class="section-head">
        <h2>Tire suas dúvidas</h2>
      </div>

      <div class="faq-grid">
        <FaqItem
          v-for="(f, i) in faqs"
          :key="f.q"
          :question="f.q"
          :answer="f.a"
          :is-open="openIndex === i"
          @toggle="toggle(i)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FaqItem from './FaqItem.vue'

const openIndex = ref(null)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    q: 'Como agendar uma consulta?',
    a: 'Escolha o hospital ou especialista, selecione o horário disponível e confirme — a marcação é validada na hora.'
  },
  {
    q: 'Como reagendar ou cancelar uma consulta?',
    a: 'Acesse "Minhas consultas" no seu perfil e altere a data ou cancele com até 4 horas de antecedência, sem custo.'
  },
  {
    q: 'Como acesso meus exames?',
    a: 'Todos os exames feitos pela rede parceira ficam disponíveis na sua caderneta digital, dentro do perfil.'
  },
  {
    q: 'A plataforma é gratuita?',
    a: 'Sim, o cadastro e o uso da plataforma são gratuitos. Você paga apenas pelos atendimentos realizados.'
  },
  {
    q: 'É seguro cadastrar meus dados?',
    a: 'Sim. Seguimos a LGPD e usamos criptografia de ponta a ponta para proteger todas as suas informações.'
  },
  {
    q: 'Como funciona a caderneta de saúde?',
    a: 'Ela reúne seu histórico médico, vacinas e exames automaticamente, sempre que atendido pela rede parceira.'
  }
]
</script>

<style scoped>
.faq-section{padding:70px 0 76px;}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}

@media (max-width:980px){
  .faq-grid{grid-template-columns:1fr;}
}
</style>
