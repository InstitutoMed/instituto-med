<template>
  <div id="inicio" class="hero-wrap">
    <div class="hero-glow"></div>
    <div class="hero-glow2"></div>

    <div class="hero">
      <div class="hero-copy">
        <h1>Sua saúde conectada com praticidade, cuidado e inovação</h1>
        <p class="lead">
          O Instituto Med reúne pacientes e hospitais em uma plataforma moderna
          e segura, oferecendo agendamentos, acompanhamento médico e atendimento
          personalizado em um só lugar.
        </p>
        <div class="hero-actions">
          <router-link to="/cadastro" class="btn btn-white">
            Comece agora
          </router-link>
          <span class="hero-secure"><img :src="iconShield" alt="" class="shield-ic"> Seus dados protegidos com segurança.</span>
        </div>
      </div>

      <div class="hero-photo">
        <img :src="doctorsHero" alt="Médicos do Instituto Med" class="hero-doctors-img">
      </div>
    </div>

    <div class="floating-card">
      <div v-for="f in floatingItems" :key="f.text" class="floating-item">
        <div class="ic"><img :src="f.icon" alt=""></div>
        <span>{{ f.text }}</span>
      </div>
    </div>
  </div>

  <p class="bridge">Tudo o que você precisa,<br><span class="accent">em um só lugar</span></p>
</template>

<script setup>
import doctorsHero from '../../assets/img/doctors-hero.png'
import iconAgenda from '../../assets/img/icon-agenda.png'
import iconFarmacia from '../../assets/img/icon-farmacia.png'
import iconRelogio from '../../assets/img/icon-relogio.png'
import iconConta from '../../assets/img/icon-conta.png'
import iconShield from '../../assets/img/icon-shield.png'

const floatingItems = [
  { icon: iconAgenda, text: 'Agendamentos rápidos' },
  { icon: iconFarmacia, text: 'Médicos e Hospitais disponíveis' },
  { icon: iconRelogio, text: 'Horários adaptados para você' },
  { icon: iconConta, text: 'Atendimento personalizado' }
]
</script>

<style scoped>
.hero-wrap{
  position:relative;
  background:linear-gradient(120deg,var(--blue-500) 0%, var(--blue-400) 55%, var(--blue-300) 100%);
  overflow:hidden;padding-bottom:90px;
}
.hero-glow{position:absolute;top:-120px;right:-160px;width:640px;height:640px;border-radius:50%;background:rgba(255,255,255,.08);}
.hero-glow2{position:absolute;bottom:-40px;right:120px;width:420px;height:420px;border-radius:48% 52% 55% 45% / 45% 48% 52% 55%;background:rgba(255,255,255,.10);}

.hero{
  position:relative;z-index:2;
  display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:20px;
  padding:50px 32px 90px;max-width:var(--container-width);margin:0 auto;
}
.hero h1{font-size:clamp(30px,3.4vw,42px);font-weight:800;color:#fff;letter-spacing:-.01em;max-width:520px;}
.hero p.lead{max-width:460px;margin:20px 0 28px;color:rgba(255,255,255,.88);font-size:15.5px;line-height:1.75;}
.hero-actions{display:flex;flex-direction:column;align-items:flex-start;gap:16px;}
.hero-secure{display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,.9);font-size:13px;font-weight:500;}
.shield-ic{width:16px;height:16px;object-fit:contain;}

.hero-photo{position:relative;display:flex;justify-content:flex-end;align-items:flex-end;align-self:stretch;min-height:340px;}
.hero-doctors-img{
  position:relative;z-index:2;width:100%;max-width:600px;height:auto;
  display:block;margin:0;
}

.floating-card{
  position:relative;z-index:3;max-width:1080px;margin:-50px auto 0;
  background:#fff;border-radius:var(--radius-lg);box-shadow:var(--shadow-soft);
  padding:38px 24px;display:grid;grid-template-columns:repeat(4,1fr);gap:8px;
}
.floating-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;padding:8px 12px;position:relative;}
.floating-item + .floating-item::before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:1px;background:var(--blue-50);}
.floating-item .ic{width:52px;height:52px;border-radius:16px;background:var(--blue-50);display:flex;align-items:center;justify-content:center;}
.floating-item .ic img{width:24px;height:24px;object-fit:contain;}
.floating-item span{font-size:13.5px;font-weight:700;color:var(--ink);line-height:1.4;}

.bridge{
  text-align:center;padding:52px 24px 0;
  font-size:clamp(20px,2.6vw,28px);font-weight:700;color:var(--ink);line-height:1.5;
}
.bridge .accent{color:var(--blue-400);}

@media (max-width:980px){
  .hero{grid-template-columns:1fr;text-align:center;}
  .hero h1{max-width:100%;margin:0 auto;}
  .hero p.lead{margin:20px auto 28px;}
  .hero-actions{align-items:center;}
  .hero-photo{margin-top:30px;min-height:280px;justify-content:center;}
  .floating-card{grid-template-columns:repeat(2,1fr);}
  .floating-item + .floating-item::before{display:none;}
}
@media (max-width:720px){
  .floating-card{grid-template-columns:1fr;margin-top:-40px;padding:28px 22px;}
  .hero-wrap{padding-bottom:60px;}
  .bridge{padding-top:36px;}
}
</style>
