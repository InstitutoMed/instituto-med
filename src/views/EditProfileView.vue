<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const usuarioAtual = {
  nome: 'Kennedy Araujo',
  nascimento: '1998-05-14',
  cpf: '011.201.321-45',
  cep: '67.800.912',
  cidade: 'joinville',
  estado: 'SC',
  pais: 'brasil',
  telefone: '+55 47 9 5467-9814',
  tipoSanguineo: 'A+',
  email: 'kennedyA@gmail.com',
  fotoUrl: '../../public/pictures/kennedyrs.jpg'
}

const formulario = ref({
  nascimento: usuarioAtual.nascimento,
  cpf: usuarioAtual.cpf,
  cep: usuarioAtual.cep,
  cidade: usuarioAtual.cidade,
  estado: usuarioAtual.estado,
  pais: usuarioAtual.pais,
  telefone: usuarioAtual.telefone,
  tipoSanguineo: usuarioAtual.tipoSanguineo,
  email: usuarioAtual.email,
  senha: '',
  confirmarSenha: ''
})

const fotoPreview = ref(usuarioAtual.fotoUrl)

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fotoPreview.value = URL.createObjectURL(file)
  }
}

const atualizarPerfil = () => {
  if (formulario.value.senha && formulario.value.senha !== formulario.value.confirmarSenha) {
    alert('As senhas não coincidem!')
    return
  }

  alert('Perfil atualizado com sucesso!')
  router.push('/')
}

const cancelar = () => {
  router.back()
}
</script>

<template>
  <main class="container-pagina">
    <div class="card-editar">
      <div class="avatar-upload">
        <label for="input-foto" class="avatar-label" title="Clique para alterar a foto">
          <img v-if="fotoPreview" :src="fotoPreview" alt="Foto de Perfil" class="avatar-img" />
          <div v-else class="avatar-placeholder">
            <svg class="icon-camera" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm7-1h-2V6h-1V5h1V4h1v1h1v1z"/>
            </svg>
          </div>
        </label>
        <input id="input-foto" type="file" accept="image/*" @change="handleFileUpload" class="input-file-hidden" />
      </div>

      <h2 class="nome-usuario">{{ usuarioAtual.nome }}</h2>

      <form @submit.prevent="atualizarPerfil" class="form-container">
        <div class="campo-grupo">
          <label for="nascimento">Nascimento:</label>
          <input type="date" id="nascimento" v-model="formulario.nascimento" class="input-custom" />
        </div>

        <div class="campo-grupo">
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" v-model="formulario.cpf" class="input-custom" />
        </div>

        <div class="campo-grupo">
          <label for="cep">CEP:</label>
          <input type="text" id="cep" v-model="formulario.cep" class="input-custom input-cep" />
          
          <div class="grid-selects">
            <select v-model="formulario.cidade" class="select-custom">
              <option value="joinville">Joinville</option>
              <option value="sao-paulo">São Paulo</option>
              <option value="rio-de-janeiro">Rio de Janeiro</option>
            </select>

            <select v-model="formulario.estado" class="select-custom">
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
            </select>

            <select v-model="formulario.pais" class="select-custom">
              <option value="brasil">Brasil</option>
            </select>
          </div>
        </div>

        <div class="campo-grupo">
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" v-model="formulario.telefone" class="input-custom" />
        </div>

        <div class="campo-grupo">
          <label for="tipoSanguineo">Tipo Sanguineo:</label>
          <input type="text" id="tipoSanguineo" v-model="formulario.tipoSanguineo" class="input-custom" />
        </div>

        <div class="campo-grupo">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formulario.email" class="input-custom" />
        </div>

        <div class="campo-grupo grupo-senha">
          <label for="senha">Nova Senha:</label>
          <input type="password" id="senha" v-model="formulario.senha" class="input-custom" placeholder="Preencha apenas se quiser alterar" />
        </div>

        <div class="campo-grupo grupo-senha">
          <label for="confirmarSenha">Confirmar nova senha:</label>
          <input type="password" id="confirmarSenha" v-model="formulario.confirmarSenha" class="input-custom" placeholder="Repita a nova senha" />
        </div>

        <div class="botoes-container">
          <button type="submit" class="btn-acao btn-atualizar">Atualizar</button>
          <button type="button" @click="cancelar" class="btn-acao btn-cancelar">Cancelar</button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.container-pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9fafb;
  min-height: 100vh;
}

.card-editar {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 36px;
  width: 100%;
  max-width: 480px;
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-upload {
  margin-bottom: 16px;
}

.avatar-label {
  cursor: pointer;
  display: block;
}

.avatar-placeholder, .avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-placeholder {
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-camera {
  width: 42px;
  height: 42px;
  fill: #1a1a1a;
}

.input-file-hidden {
  display: none;
}

.nome-usuario {
  font-size: 1.75rem;
  font-weight: 800;
  color: #000;
  margin: 0 0 28px 0;
  text-align: center;
}

.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.campo-grupo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.campo-grupo label {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-left: 4px;
}

.input-custom, .select-custom {
  width: 100%;
  height: 40px;
  background-color: #f0f0f0;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 0.95rem;
  color: #333;
  outline: none;
  box-sizing: border-box;
}

.input-custom:focus, .select-custom:focus {
  border-color: #2b7b9b;
}

.input-cep {
  margin-bottom: 10px;
}

.grid-selects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

.select-custom {
  color: #333;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%3C6b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 14px;
  padding-right: 28px;
}

.grupo-senha {
  margin-top: 4px;
}

.botoes-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.btn-acao {
  width: 130px;
  height: 38px;
  border-radius: 20px;
  border: none;
  background-color: #005691;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.btn-acao:hover {
  opacity: 0.9;
}
</style>