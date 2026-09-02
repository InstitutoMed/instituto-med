<template>
  <div class="layout">
    <main class="conteudo">
      <form class="cartao" @submit.prevent="entrar" novalidate>
        <h1>Entrar</h1>
        <p class="subtitulo">Acesse com o CPF e a senha do seu cadastro.</p>

        <p class="aviso aviso--sucesso" v-if="veioDoCadastro">
          Cadastro realizado! Faça login para continuar.
        </p>

        <div class="campo">
          <label for="cpf">CPF</label>
          <input
            id="cpf"
            v-model="form.cpf"
            type="text"
            placeholder="000.000.000-00"
            maxlength="14"
            autocomplete="username"
            :class="{ invalido: erros.cpf }"
            @input="form.cpf = mascararCpf(form.cpf)"
            @blur="tocado.cpf = true"
          />
          <span class="erro" v-if="erros.cpf">{{ erros.cpf }}</span>
        </div>

        <div class="campo">
          <label for="senha">Senha</label>
          <input
            id="senha"
            v-model="form.senha"
            type="password"
            autocomplete="current-password"
            :class="{ invalido: erros.senha }"
            @blur="tocado.senha = true"
          />
          <span class="erro" v-if="erros.senha">{{ erros.senha }}</span>
        </div>

        <p class="aviso aviso--erro" v-if="erroLogin">{{ erroLogin }}</p>

        <div class="acoes">
          <button type="submit" class="botao botao--primario">Entrar</button>
        </div>

        <p class="rodape">
          Ainda não tem cadastro?
          <router-link to="/cadastro">Cadastre-se</router-link>
        </p>
      </form>
    </main>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { autenticar, salvarSessao } from '../store/usuarios.js'

const router = useRouter()
const route = useRoute()

const veioDoCadastro = computed(() => route.query.cadastrado === '1')

const form = reactive({
  cpf: '',
  senha: ''
})

const tocado = reactive({ cpf: false, senha: false })
const tentouEnviar = ref(false)
const erroLogin = ref('')

function mascararCpf(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

const erros = computed(() => {
  const e = {}
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(form.cpf)) e.cpf = 'CPF inválido.'
  if (!form.senha) e.senha = 'Informe a senha.'

  const visiveis = {}
  for (const campo in e) {
    if (tocado[campo] || tentouEnviar.value) visiveis[campo] = e[campo]
  }
  return visiveis
})

function entrar() {
  tentouEnviar.value = true
  tocado.cpf = true
  tocado.senha = true
  erroLogin.value = ''

  if (Object.keys(erros.value).length > 0) return

  const usuario = autenticar(form.cpf, form.senha)

  if (!usuario) {
    erroLogin.value = 'CPF ou senha incorretos.'
    return
  }

  salvarSessao(usuario)
  router.push({ name: 'painel' })
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.conteudo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.cartao {
  width: 100%;
  max-width: 400px;
  background: var(--branco);
  border-radius: 1.5rem;
  box-shadow: var(--sombra);
  padding: 2.5rem 2.5rem 2rem;
}

.cartao h1 {
  font-family: var(--fonte-titulo);
  font-size: 1.7rem;
  text-align: center;
  margin: 0 0 0.4rem;
  color: var(--azul-profundo);
}

.subtitulo {
  text-align: center;
  color: var(--cinza-texto);
  font-size: 0.88rem;
  margin: 0 0 1.5rem;
}

.aviso {
  font-size: 0.82rem;
  border-radius: 0.6rem;
  padding: 0.6rem 0.8rem;
  margin: 0 0 1.25rem;
  text-align: center;
}

.aviso--sucesso {
  background: var(--azul-gelo);
  color: var(--azul-medio);
}

.aviso--erro {
  background: #fdecec;
  color: var(--vermelho-erro);
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1.1rem;
}

label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--cinza-texto);
}

input {
  border: 1px solid var(--cinza-borda);
  border-radius: 0.6rem;
  padding: 0.65rem 0.75rem;
  font-size: 0.9rem;
  color: var(--azul-profundo);
  outline: none;
  transition: border-color 0.15s ease;
  width: 100%;
}

input:focus {
  border-color: var(--azul-claro);
}

input.invalido {
  border-color: var(--vermelho-erro);
}

.erro {
  font-size: 0.75rem;
  color: var(--vermelho-erro);
}

.acoes {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.botao {
  border-radius: 999px;
  padding: 0.65rem 2.2rem;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid transparent;
  width: 100%;
}

.botao--primario {
  background: var(--azul-medio);
  color: var(--branco);
}

.botao--primario:hover {
  background: var(--azul-profundo);
}

.rodape {
  text-align: center;
  font-size: 0.85rem;
  color: var(--cinza-texto);
  margin: 1.5rem 0 0;
}

.rodape a {
  color: var(--azul-medio);
  font-weight: 600;
  text-decoration: none;
}

.rodape a:hover {
  text-decoration: underline;
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .cartao {
    padding: 1.75rem;
  }
}
</style>
