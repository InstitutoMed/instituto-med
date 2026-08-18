<template>
  <section id="sobre" class="doctors-wrap">
    <div class="container doctors-row">
      <div class="doctors-text">
        <span class="eyebrow">Médicos em destaque</span>
        <h2>Profissionais que cuidam de você</h2>
        <p>Especialistas prontos para oferecer o melhor atendimento direcionado a você.</p>
        <BaseButton variant="solid" @click="openModal('Saiba mais')">Saiba mais</BaseButton>
      </div>

      <div class="doctors-cards">
        <div v-for="d in doctors" :key="d.name" class="doctor-card">
          <div class="doctor-photo">
            <img v-if="d.photo" :src="d.photo" :alt="d.name">
            <span v-else class="doctor-emoji">{{ d.emoji }}</span>
          </div>
          <div class="doctor-info">
            <h4>{{ d.name }}</h4>
            <span class="hosp">{{ d.hosp }}</span>
            <div class="meta"><span class="stars">★</span> {{ d.rating }} &nbsp;•&nbsp; CRM {{ d.crm }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../shared/BaseButton.vue'
import { useBookingModal } from '../../composables/useBookingModal'
import doctorJuliana from '../../assets/img/doctor-juliana.png'
import doctorRafael from '../../assets/img/doctor-rafael.png'

const { openModal } = useBookingModal()

const doctors = [
  {
    photo: doctorJuliana,
    name: 'Dra. Juliana Andrade',
    hosp: 'Hospital Dona Helena',
    rating: '4,9',
    crm: '12345'
  },
  {
    photo: doctorRafael,
    name: 'Dr. Rafael Menezes',
    hosp: 'Hospital São José',
    rating: '4,8',
    crm: '12345'
  }
]
</script>

<style scoped>
.doctors-wrap{background:var(--blue-50);padding-left:0;padding-right:0;}
.doctors-row{display:grid;grid-template-columns:.85fr 1.15fr;gap:56px;align-items:center;}
.doctors-text p{margin-top:14px;color:var(--muted);line-height:1.75;font-size:15px;}
.doctors-text .btn{margin-top:24px;}

.doctors-cards{display:grid;grid-template-columns:1fr 1fr;gap:22px;}
.doctor-card{
  background:#fff;border-radius:var(--radius-md);overflow:hidden;
  box-shadow:var(--shadow-soft);transition:transform .2s ease;
}
.doctor-card:hover{transform:translateY(-6px);}
.doctor-photo{
  aspect-ratio:5/4;overflow:hidden;
  background:linear-gradient(160deg,var(--blue-100),#e3f2fa);
  display:flex;align-items:center;justify-content:center;
}
.doctor-photo img{width:100%;height:100%;object-fit:cover;object-position:top center;}
.doctor-photo .doctor-emoji{font-size:72px;}
.doctor-info{padding:16px 18px 20px;}
.doctor-info h4{font-size:15.5px;color:var(--ink);}
.doctor-info .hosp{display:block;font-size:12.5px;color:var(--muted);margin:4px 0 8px;}
.doctor-info .meta{font-size:12.5px;color:var(--muted);display:flex;align-items:center;gap:6px;}
.doctor-info .meta .stars{color:#ffb020;}

@media (max-width:980px){
  .doctors-row{grid-template-columns:1fr;}
  .doctors-text{text-align:center;}
  .doctors-text .btn{margin-left:auto;margin-right:auto;}
  .doctors-cards{margin-top:20px;}
}
</style>
