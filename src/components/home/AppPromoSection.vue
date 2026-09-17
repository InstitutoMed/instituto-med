<template>
  <div id="servicos" class="app-section">
    <div class="app-inner">
      <div class="app-text">
        <span class="eyebrow">Aplicativo Instituto Med</span>
        <h2>Obtenha um perfil adaptado para a sua rotina</h2>
        <p>Acesse seus exames, vacinas, histórico médico e acompanhe sua saúde de maneira prática e segura.</p>
      </div>

    </div>

    <div class="callout-bar">
      <div class="bell"><img :src="iconNotificacao" alt=""></div>
      <p>Receba alertas nas datas de consultas, exames e atendimentos para não perder nenhum compromisso importante.</p>
    </div>
  </div>
</template>

<script setup>
import iconNotificacao from '../../assets/img/icon-notificacao.png'
</script>

<style scoped>
.app-section{
  background:linear-gradient(135deg,#fff 0%, var(--blue-100) 100%);
  position:relative;overflow:hidden;padding-bottom:0;
}
.app-inner{
  max-width:760px;margin:0 auto;padding:70px 32px 40px;text-align:center;
  position:relative;z-index:2;
}
.app-text h2{font-size:clamp(24px,2.8vw,32px);font-weight:700;color:var(--ink);margin-top:10px;}
.app-text p{margin:16px auto 0;color:var(--muted);line-height:1.75;max-width:620px;font-size:15px;}
.app-text .btn{margin-top:26px;}

.callout-bar{
  position:relative;z-index:3;max-width:900px;margin:0 auto;
  background:#fff;border-radius:999px;box-shadow:var(--shadow-soft);
  padding:16px 26px;display:flex;align-items:center;gap:16px;
}
.callout-bar .bell{
  width:46px;height:46px;border-radius:50%;flex-shrink:0;
  background:var(--blue-500);
  display:flex;align-items:center;justify-content:center;
}
.callout-bar .bell img{
  width:22px;height:22px;object-fit:contain;
  filter:brightness(0) invert(1);
}
.callout-bar p{font-size:13.5px;color:var(--muted);line-height:1.6;}

@media (max-width:980px){
  .app-text p{margin:16px auto;}
}
@media (max-width:720px){
  .callout-bar{flex-direction:column;text-align:center;border-radius:24px;}
}
</style>
