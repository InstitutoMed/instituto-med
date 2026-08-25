<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <img :src="logo" alt="Instituto Med" class="logo-img">
          <p>
            O Instituto Med é um site criado para facilitar o acesso à saúde
            pública e privada. Aqui você tem acesso a informação e agendamento
            de atendimentos sem sair de casa!
          </p>
          <h5>Redes sociais</h5>
          <div class="social">
            <a href="#" aria-label="Instagram" @click.prevent><img :src="iconInstagram" alt=""></a>
            <a href="#" aria-label="Facebook" @click.prevent><img :src="iconFacebook" alt=""></a>
            <a href="#" aria-label="Twitter" @click.prevent><img :src="iconTwitter" alt=""></a>
            <a href="#" aria-label="GitHub" @click.prevent><img :src="iconGithub" alt=""></a>
          </div>
        </div>

        <div>
          <h5>Navegação</h5>
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#sobre">Especialistas</a></li>
            <li><a href="#hospitais">Hospitais Parceiros</a></li>
            <li><router-link to="/cadastro">Cadastro</router-link></li>
            <li><a href="#duvidas">FAQ</a></li>
            <li><a href="#" @click.prevent>Notícias &amp; Saúde</a></li>
            <li class="disabled"><a href="#" @click.prevent>Contato</a></li>
          </ul>
        </div>

        <div>
          <h5>Nossos Serviços</h5>
          <ul>
            <li><a href="#" @click.prevent>Gestão de Hospitais Parceiros</a></li>
            <li><a href="#" @click.prevent>Fluxograma Inteligente de Atendimentos</a></li>
            <li><a href="#" @click.prevent>Agendamento de Consultas e Exames</a></li>
            <li><a href="#" @click.prevent>Caderneta Médica Digital</a></li>
            <li><a href="#" @click.prevent>Notificações e Lembretes Automáticos</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-strip">
        <div class="item">Precisa de Ajuda? <a href="#" class="link" @click.prevent>Contate-nos</a></div>
        <div class="item">+55 (47) 9999-9999</div>
        <BaseButton variant="solid" style="padding:10px 20px;">
          Faça uma doação
        </BaseButton>
        <div class="item"><img :src="iconEmail" alt="" class="strip-ic"> institutoMed@gmail.com</div>
        <div class="item"><img :src="iconMap" alt="" class="strip-ic"> Colégio Agrícola, Araquari, SC, Brasil</div>
      </div>

      <div class="footer-bottom">
        <span>Formas de Pagamento</span>
        <div class="links">
          <a href="#" @click.prevent>Política de Privacidade</a>
          <a href="#" @click.prevent>Termos &amp; Condições</a>
        </div>
        <span>© 2026, Instituto Med, Todos os Direitos Reservados.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseButton from '../shared/BaseButton.vue'
import logo from '../../assets/img/logo.png'
import iconInstagram from '../../assets/img/icon-instagram.png'
import iconFacebook from '../../assets/img/icon-facebook.png'
import iconTwitter from '../../assets/img/icon-twitter.png'
import iconGithub from '../../assets/img/icon-github.png'
import iconMap from '../../assets/img/icon-map.png'
import iconEmail from '../../assets/img/icon-email.png'

</script>

<style scoped>
footer{
  background:linear-gradient(180deg,var(--blue-900),#0a3f65);
  color:rgba(255,255,255,.72);padding:64px 32px 0;margin-top:0;
}
.footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1.2fr;gap:40px;padding-bottom:36px;}
.footer-about .logo-img{height:60px;width:auto;}
.footer-about p{margin-top:14px;font-size:13px;line-height:1.7;max-width:280px;color:rgba(255,255,255,.6);}
.footer-about h5{margin-top:22px;color:#fff;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px;}
.social{display:flex;gap:10px;}
.social a{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;}
.social a img{width:16px;height:16px;object-fit:contain;}
.social a:hover{background:var(--blue-400);}

.footer-grid h5{color:#fff;font-size:13.5px;margin-bottom:16px;font-weight:600;}
.footer-grid ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;font-size:13.5px;}
.footer-grid ul a:hover{color:#fff;}
.footer-grid ul li.disabled{opacity:.4;}

.footer-strip{
  border-top:1px solid rgba(255,255,255,.12);padding:22px 0;
  display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12.5px;
}
.footer-strip .item{display:flex;align-items:center;gap:8px;}
.strip-ic{width:16px;height:16px;object-fit:contain;}
.footer-strip .link{color:#fff;font-weight:600;}

.footer-bottom{
  border-top:1px solid rgba(255,255,255,.12);padding:18px 0 24px;
  display:flex;justify-content:space-between;align-items:center;font-size:12px;flex-wrap:wrap;gap:10px;
  color:rgba(255,255,255,.55);
}
.footer-bottom .links{display:flex;gap:18px;}

@media (max-width:980px){
  .footer-grid{grid-template-columns:1fr 1fr;}
  .footer-about{grid-column:1/-1;}
}
@media (max-width:720px){
  .footer-grid{grid-template-columns:1fr;}
  .footer-strip{flex-direction:column;align-items:flex-start;}
}
</style>
