<template>
  <section id="hospitais">
    <div class="container">
      <div class="section-head center">
        <span class="eyebrow">Hospitais parceiros</span>
        <h2>Estrutura e confiança perto de você</h2>
        <p>Trabalhamos com os melhores hospitais e clínicas para garantir o melhor cuidado.</p>
      </div>

      <div class="partner-logos">
        <div v-for="p in partners" :key="p.name" class="partner-logo">
          <img v-if="p.logo" :src="p.logo" :alt="p.name" class="partner-logo-img">
          <template v-else>
            <div class="ic">{{ p.icon }}</div>
            <span>{{ p.name }}</span>
          </template>
        </div>
      </div>

      <div class="partner-cta">
        <p>Encontre o mais próximo de você</p>
        <router-link to="/hospitais" class="btn btn-solid">Clique aqui</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoDonaHelena from '../../assets/img/logo-dona-helena.png'
import logoJoinvilleSaoJose from '../../assets/img/logo-joinville-sao-jose.png'
import logoHapvida from '../../assets/img/logo-hapvida.png'
import logoSaoMarcos from '../../assets/img/logo-sao-marcos.png'

const partners = [
  { logo: logoDonaHelena, name: 'Hospital Dona Helena' },
  { logo: logoJoinvilleSaoJose, name: 'Prefeitura de Joinville — Hospital São José' },
  { logo: logoHapvida, name: 'hapvida' },
  { logo: logoSaoMarcos, name: 'São Marcos' }
]
</script>

<style scoped>
section{padding-top:0;padding-left:0;padding-right:0;}
.partner-logos{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.partner-logo{
  background:#fff;border:1px solid var(--blue-100);border-radius:var(--radius-md);
  height:108px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;
  box-shadow:0 12px 28px -14px rgba(13,76,120,.35);padding:10px;text-align:center;
}
.partner-logo .ic{font-size:24px;}
.partner-logo span{font-size:11px;font-weight:700;color:var(--blue-800);line-height:1.3;}
.partner-logo-img{max-width:85%;max-height:64px;object-fit:contain;}

.partner-cta{text-align:center;margin-top:36px;}
.partner-cta p{color:var(--muted);font-size:13.5px;margin-bottom:16px;}

@media (max-width:980px){
  .partner-logos{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:520px){
  .partner-logos{grid-template-columns:1fr;}
}
</style>
