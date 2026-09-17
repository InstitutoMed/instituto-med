<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { obterSessao, salvarSessao } from '@/store/usuarios.js'
const router = useRouter()

const form = ref({
  nome: '',
  cpf: '',
  cep: '',
  telefone: '',
  tipoSanguineo: '',
  email: '',
  foto: ''
})

onMounted(() => {
  const dadosSessao = obterSessao()
  if (dadosSessao) {
    form.value = { ...form.value, ...dadosSessao }
  } else {
    router.push('/login')
  }
})

function handleFotoUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.foto = e.target.result // Salva a imagem convertida para Base64
    }
    reader.readAsDataURL(file)
  }
}

function salvarPerfil() {
  salvarSessao(form.value)
  router.push('/profile')
}
</script>

<template>
  <main class="main">
    <section class="card">
      <h2 class="titulo_card">Editar Perfil</h2>

      <form @submit.prevent="salvarPerfil" class="form_editar">
        <div class="campo_foto">
          <div class="avatar">
            <img v-if="form.foto" :src="form.foto" alt="Foto de Perfil" class="foto_perfil" />
            <div v-else class="foto_placeholder">
              {{ form.nome ? form.nome.charAt(0).toUpperCase() : 'U' }}
            </div>
          </div>
          <label class="label_foto">
            Alterar Foto
            <input type="file" accept="image/*" @change="handleFotoUpload" class="input_file" />
          </label>
        </div>

        <div class="campo">
          <label>Nome Completo</label>
          <input type="text" v-model="form.nome" required />
        </div>

        <div class="campo">
          <label>CEP</label>
          <input type="text" v-model="form.cep" />
        </div>

        <div class="campo">
          <label>Telefone</label>
          <input type="text" v-model="form.telefone" />
        </div>

        <div class="campo">
          <label>Tipo Sanguíneo</label>
          <input type="text" v-model="form.tipoSanguineo" />
        </div>

        <div class="campo">
          <label>Email</label>
          <input type="email" v-model="form.email" required />
        </div>

        <div class="acoes_form">
          <button type="submit" class="botao_salvar">Salvar Alterações</button>
          <button type="button" class="botao_cancelar" @click="router.push('/profile')">Cancelar</button>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
.main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a1a1a;
}

.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.titulo_card {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 24px;
}

.form_editar {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.campo_foto {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto_perfil {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.foto_placeholder {
  font-size: 2rem;
  font-weight: 700;
  color: #2b7b9b;
}

.label_foto {
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.input_file {
  display: none;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
}

.campo label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #374151;
}

.campo input {
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
}

.acoes_form {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.botao_salvar {
  background-color: #2b7b9b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}

.botao_cancelar {
  background-color: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
</style>