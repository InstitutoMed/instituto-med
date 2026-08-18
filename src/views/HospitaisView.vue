<template>
  <div class="hospitais">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Hospitais parceiros</span>
        <h1>Encontre um hospital perto de você</h1>
        <p>
          Todos os hospitais e clínicas abaixo fazem parte da rede credenciada
          do Instituto Med — agende sua consulta em qualquer um deles direto
          pela plataforma.
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="hospital-grid">
          <article v-for="h in hospitais" :key="h.name" class="hospital-card">
            <div class="hospital-logo">
              <img :src="h.logo" :alt="h.name">
            </div>
            <div class="hospital-info">
              <h3>{{ h.name }}</h3>
              <p>{{ h.description }}</p>
              <span class="hospital-city"> {{ h.city }}</span>
              <BaseButton variant="solid" style="margin-top:16px;" @click="openModal('Agendar em ' + h.name)">
                Agendar consulta
              </BaseButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseButton from '../components/shared/BaseButton.vue'
import { useBookingModal } from '../composables/useBookingModal'

import logoDonaHelena from '../assets/img/logo-dona-helena.png'
import logoJoinvilleSaoJose from '../assets/img/logo-joinville-sao-jose.png'
import logoHapvida from '../assets/img/logo-hapvida.png'
import logoSaoMarcos from '../assets/img/logo-sao-marcos.png'

const { openModal } = useBookingModal()

const hospitais = [
  {
    logo: logoDonaHelena,
    name: 'Hospital Dona Helena',
    description: 'Referência em atendimento de alta complexidade, com pronto-socorro 24h e diversas especialidades.',
    city: 'Joinville, SC'
  },
  {
    logo: logoJoinvilleSaoJose,
    name: 'Hospital São José',
    description: 'Hospital público municipal, com atendimento pelo SUS e convênios credenciados.',
    city: 'Joinville, SC'
  },
  {
    logo: logoHapvida,
    name: 'hapvida',
    description: 'Rede própria de atendimento, com clínicas e centros de diagnóstico credenciados ao plano.',
    city: 'Diversas unidades'
  },
  {
    logo: logoSaoMarcos,
    name: 'São Marcos',
    description: 'Clínica multidisciplinar com foco em exames laboratoriais e consultas ambulatoriais.',
    city: 'Joinville, SC'
  }
]
</script>

<style scoped>
.page-hero{
  background:linear-gradient(120deg,var(--blue-500) 0%, var(--blue-400) 55%, var(--blue-300) 100%);
  padding:70px 32px;
  color:#fff;
}
.page-hero .eyebrow{color:#cceefa;}
.page-hero h1{font-size:clamp(28px,3.4vw,38px);font-weight:800;margin-top:12px;max-width:640px;}
.page-hero p{margin-top:16px;max-width:560px;color:rgba(255,255,255,.88);line-height:1.75;font-size:15.5px;}

.hospital-grid{
  display:grid;grid-template-columns:1fr 1fr;gap:24px;
  padding:70px 0;
}
.hospital-card{
  display:flex;gap:20px;padding:24px;
  background:#fff;border:1px solid var(--blue-100);border-radius:var(--radius-md);
  box-shadow:var(--shadow-soft);
}
.hospital-logo{
  width:88px;height:88px;flex-shrink:0;border-radius:14px;
  background:var(--blue-50);display:flex;align-items:center;justify-content:center;padding:12px;
}
.hospital-logo img{max-width:100%;max-height:100%;object-fit:contain;}
.hospital-info h3{font-size:17px;color:var(--ink);}
.hospital-info p{margin-top:8px;font-size:13.5px;color:var(--muted);line-height:1.65;}
.hospital-city{display:inline-block;margin-top:10px;font-size:12.5px;color:var(--blue-600);font-weight:600;}

@media (max-width:720px){
  .hospital-grid{grid-template-columns:1fr;}
  .hospital-card{flex-direction:column;}
}
</style>
