<template>
  <div class="container">
    <div class="card">
      <div class="avatar_container" v-if="usuario.foto">
        <img :src="usuario.foto" alt="Foto de perfil" class="avatar_img" />
      </div>

      <h2>Bem-vindo, {{ usuario.nome }}!</h2>
      <p class="subtitulo">Login realizado com sucesso.</p>

      <ul class="dados_lista">
        <li><span>CPF</span> <strong>{{ cpfFormatado }}</strong></li>
        <li><span>Email</span> <strong>{{ usuario.email }}</strong></li>
        <li v-if="usuario.cidade">
          <span>Cidade</span> 
          <strong>{{ usuario.cidade }}<span v-if="usuario.estado"> - {{ usuario.estado }}</span></strong>
        </li>
        <li v-if="usuario.telefone"><span>Telefone</span> <strong>{{ usuario.telefone }}</strong></li>
      </ul>

      <div class="acoes">
        <RouterLink to="/editprofile" class="btn_link">Editar Perfil</RouterLink>
        <RouterLink to="/profile" class="btn_link btn_retomar">Retomar</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { obterSessao } from '@/store/usuarios.js'

const router = useRouter()
const usuario = ref({
  nome: '',
  cpf: '',
  email: '',
  cidade: '',
  estado: '',
  telefone: '',
  foto: ''
})

onMounted(() => {
  const dados = obterSessao()
  if (dados) {
    usuario.value = { ...usuario.value, ...dados }
  } else {
    router.push('/entrar')
  }
})

const cpfFormatado = computed(() => {
  const cpf = usuario.value.cpf || ''
  if (cpf.length !== 11) return cpf
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
})
</script>

<style scoped>
.container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.avatar_container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.avatar_img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}

h2 {
  margin: 0 0 4px 0;
  font-size: 1.5rem;
}

.subtitulo {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

.dados_lista {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  text-align: left;
}

.dados_lista li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 0.9rem;
}

.acoes {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.btn_link {
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
}

.btn_retomar {
  color: #000;
}

.btn_link:hover {
  text-decoration: underline;
}
</style>