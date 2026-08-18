<template>
  <div class="tela">
    <div class="cartao">
      <div class="icone">✓</div>
      <h1>Bem-vindo{{ usuario?.nome ? ', ' + primeiroNome : '' }}!</h1>
      <p>Login realizado com sucesso.</p>

      <dl class="dados" v-if="usuario">
        <div class="linha">
          <dt>CPF</dt>
          <dd>{{ usuario.cpf }}</dd>
        </div>
        <div class="linha">
          <dt>Email</dt>
          <dd>{{ usuario.email }}</dd>
        </div>
        <div class="linha" v-if="usuario.cidade || usuario.estado">
          <dt>Cidade</dt>
          <dd>{{ usuario.cidade }}<span v-if="usuario.estado"> - {{ usuario.estado }}</span></dd>
        </div>
      </dl>

      <button type="button" class="botao" @click="sair">Sair</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { obterSessao, encerrarSessao } from '../store/usuarios.js'

const router = useRouter()
const usuario = obterSessao()

const primeiroNome = computed(() => usuario?.nome?.split(' ')[0] || '')

function sair() {
  encerrarSessao()
  router.push({ name: 'login' })
}
</script>

<style scoped>
.tela {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--azul-gelo);
  padding: 1.5rem;
}

.cartao {
  background: var(--branco);
  border-radius: 1.5rem;
  box-shadow: var(--sombra);
  padding: 2.75rem 2.5rem;
  text-align: center;
  max-width: 380px;
  width: 100%;
}

.icone {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--azul-medio);
  color: var(--branco);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1.25rem;
}

h1 {
  font-family: var(--fonte-titulo);
  color: var(--azul-profundo);
  margin: 0 0 0.4rem;
  font-size: 1.4rem;
}

p {
  color: var(--cinza-texto);
  margin: 0 0 1.5rem;
}

.dados {
  text-align: left;
  background: var(--azul-gelo);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin: 0 0 1.75rem;
}

.linha {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.35rem 0;
  font-size: 0.85rem;
}

.linha + .linha {
  border-top: 1px solid var(--cinza-borda);
}

dt {
  color: var(--cinza-texto);
  font-weight: 600;
}

dd {
  margin: 0;
  color: var(--azul-profundo);
  text-align: right;
}

.botao {
  background: var(--branco);
  color: var(--azul-medio);
  border: 1px solid var(--azul-medio);
  border-radius: 999px;
  padding: 0.6rem 2rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.botao:hover {
  background: var(--azul-gelo);
}
</style>
