<template>
  <section class="newsletter-wrap">
    <div class="newsletter">
      <div>
        <h3>Para Últimas Atualizações<br>Inscreva-se na nossa Newsletter.</h3>
        <p v-if="sent" class="ok-msg"> Inscrição confirmada, obrigado!</p>
      </div>
      <form @submit.prevent="submit">
        <input v-model="email" type="email" placeholder="Informe o seu email" required>
        <BaseButton variant="white" type="submit">Inscreva-se</BaseButton>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../shared/BaseButton.vue'

const email = ref('')
const sent = ref(false)

function submit() {
  if (email.value && /^\S+@\S+\.\S+$/.test(email.value)) {
    sent.value = true
    email.value = ''
    setTimeout(() => (sent.value = false), 4000)
  }
}
</script>

<style scoped>
.newsletter-wrap{background:var(--blue-50);padding-top:0;}
.newsletter{
  background:linear-gradient(120deg,var(--blue-500),var(--blue-400));
  border-radius:26px;padding:34px 40px;
  display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;
  color:#fff;max-width:1176px;margin:0 auto;
}
.newsletter h3{font-size:18px;line-height:1.4;}
.newsletter form{display:flex;gap:0;background:#fff;border-radius:999px;padding:5px;}
.newsletter input{
  padding:11px 18px;border-radius:999px;border:none;background:transparent;
  color:var(--ink);min-width:220px;font-size:13.5px;
}
.newsletter input:focus{outline:none;}
.newsletter input::placeholder{color:var(--muted);}
.ok-msg{font-size:12.5px;color:#eafff9;margin-top:8px;font-weight:600;}

@media (max-width:720px){
  .newsletter{flex-direction:column;align-items:stretch;padding:28px 26px;}
  .newsletter form{width:100%;}
  .newsletter input{width:100%;}
}
</style>
