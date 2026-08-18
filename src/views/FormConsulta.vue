<script setup>
import { reactive, computed, ref } from 'vue'

const form = reactive({
  cpf: '',
  senha: '',
  email: '',
  receberEmail: false
})

const tocado = reactive({ cpf: false, senha: false })
const tentouEnviar = ref(false)

function mascararCpf(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}


function mascararTelefone(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
}

const erros = computed(() => {
  const e = {}
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(form.cpf)) e.cpf = 'CPF inválido.'
  if (!form.senha) e.senha = 'Informe a senha.'
  if (form.receberEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
  e.email = 'Informe um e-mail válido.'
}

  const visiveis = {}
  for (const campo in e) {
    if (tocado[campo] || tentouEnviar.value) visiveis[campo] = e[campo]
  }
  return visiveis
})

function ativarEmail() {
  if (form.receberEmail) {
    setTimeout(() => {
      document.getElementById('inputEmail')?.focus()
    }, 100)
  }
}

function confirmarAgendamento(event) {
  tentouEnviar.value = true

  if (form.receberEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    event.preventDefault()

    setTimeout(() => {
      document.getElementById('inputEmail')?.focus()
    }, 100)

    return
  }
}

</script>
<template>
<main class="conteudo">
  <form action="">

<form>

         <div class="nome">
            <label for="nome">Nome Completo</label>
            <input
              id="nome"
              v-model.trim="form.nome"
              type="text"
              placeholder="Informe seu nome completo"
              :class="{ invalido: erros.nome }"
              @blur="tocado.nome = true"
            />
            <span class="erro" v-if="erros.nome">{{ erros.nome }}</span>
          </div>

            <div class="telefone">
              <label for="telefone">Telefone</label>
              <input
                id="telefone"
                v-model="form.telefone"
                type="text"
                placeholder="(00) 00000-0000"
                maxlength="15"
                :class="{ invalido: erros.telefone }"
                @input="form.telefone = mascararTelefone(form.telefone)"
                @blur="tocado.telefone = true"
              />
              <span class="erro" v-if="erros.telefone">{{ erros.telefone }}</span>
            </div>

   <div class="cpf">
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

          <div class="consulta">
    <label for="inputconsulta" class="form-label">Tipo de Consulta</label>
    <select id="inputconsulta" class="form-select">
      <option>Exame de Sangue</option>
      <option>Vacinação</option>
      <option>Dentista</option>
      <option>Ginecologista</option>
      <option>Raio-X</option>
      <option>Pediatria</option>
      <option>Psicologia</option>
    </select>
          </div>

           <div class="data">
              <label for="data">Data</label>
              <input
                id="data"
                v-model="form.data"
                type="date"
                :class="{ invalido: erros.data }"
                @blur="tocado.data = true"
              />
              <span class="erro" v-if="erros.data">{{ erros.data }}</span>
            </div>

            <fieldset class="horario">
    <legend class="col-form-label col-sm-2 pt-0">Horario</legend>
    <div class="col-sm-10">
      <div class="opM">
        <input class="form-check-input" type="radio" name="gridHorario" id="gridHorario1" value="option1">
        <label class="form-check-label" for="gridHorario1">
          Matutino
        </label>
      </div>

      <div class="opV">
        <input class="form-check-input" type="radio" name="gridHorario" id="gridHorario2" value="option2">
        <label class="form-check-label" for="gridHorario2">
          Vespertino
        </label>
      </div>

      <div class="opN">
        <input class="form-check-input" type="radio" name="gridHorario" id="gridHorario3" value="option3">
        <label class="form-check-label" for="gridHorario3">
          Noturno
        </label>
      </div>
    </div>
  </fieldset>



            <div class="Hospital">
    <label for="inputhospital" class="form-label">Hospital</label>
    <select id="inputhospital" class="form-select">
      <option>Hospital  Regional Hans Dieter Schmidt (HRHDS)</option>
      <option>Hospital Municipal São José</option>
      <option>Hospital Dona Helena </option>
      <option>-</option>
      <option>-</option>
      <option>-</option>
    </select>
          </div>

                      <div class="medico">
    <label for="inputmed" class="form-label">Médico de preferência</label>
    <select id="inputmed" class="form-select">
      <option>Hanna Schroeder</option>
      <option>Lucas Pereira</option>
      <option>Giovana Bandoch</option>
      <option>Tiago Cardoso</option>
      <option>Ana Julia Bonfim</option>
      <option>Nicholas Oyafuso</option>


    </select>
          </div>

          <div class="campo">
              <label for="motivo">Motivo</label>
              <textarea
                id="motivo"
                v-model="form.motivo"
                rows="1"
                placeholder="Informe observações importantes, restrições ou cuidados especiais"
              ></textarea>
            </div>


 <div class="email">
  <label for="inputEmail">Email</label>

  <div class="col-sm-10">
    <input
      type="email"
      class="form-control"
      id="inputEmail"
      v-model.trim="form.email"
      placeholder="Informe seu e-mail"
      :class="{ invalido: erros.email }"
      @blur="tocado.email = true"
    />

    <span class="erro" v-if="erros.email">
      {{ erros.email }}
    </span>
  </div>
</div>

  <div class="senha">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Senha</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputSenha">
    </div>
  </div>



<div class="emailatt">
  <div class="col-sm-10 offset-sm-2">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="gridCheck1"
        v-model="form.receberEmail"
        @change="ativarEmail"
      >

      <label class="form-check-label" for="gridCheck1">
        Receber atualizações por e-mail
      </label>
    </div>
  </div>
</div>

<button type="submit" class="confirmar" @click="confirmarAgendamento">Confirmar agendamento</button>
      <button type="submit" class="cancelar">Cancelar</button>

</form>

  </form>

</main>
</template>

<style scoped>

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
}

.conteudo {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 40px 20px;
  margin: 0;
  overflow-x: hidden;
  flex-direction: column;
}

.conteudo > form {
  width: 100%;
  max-width: 600px;
  padding: 45px 50px;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  min-width: 0;
}

.conteudo > form > form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
}

.conteudo > form::before {
  content: "Agende sua consulta";
  display: block;
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: #111;
  margin-bottom: 35px;
}

.nome,
.cpf,
.telefone,
.consulta,
.data,
.horario,
.Hospital,
.medico,
.campo,
.senha,
.emailatt,
.email {
  margin-bottom: 20px;
}

label,
legend {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #222;
  margin-bottom: 7px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
select,
textarea {
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #e2e2e2;
  border-radius: 7px;
  background: #eeeeee;
  font-size: 13px;
  color: #444;
  outline: none;
  transition: 0.2s;
}

input::placeholder,
textarea::placeholder {
  color: #9a9a9a;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #014F86;
  background: #fff;
}

textarea {
  height: 90px;
  resize: none;
  padding-top: 10px;
}

.nome {
  order: 1;
  width: 100%;
}

.cpf {
  order: 2;
  width: 48%;
}

.telefone {
  order: 3;
  width: 48%;
}

.consulta {
  order: 4;
  width: 100%;
}

.consulta select {
  max-width: 48%;
}

.data {
  order: 5;
  width: 48%;
}

.horario {
  order: 6;
  width: 48%;
  border: none;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.data,
.horario {
  align-self: flex-start;
}

input[type="date"] {
  text-align: left;
  line-height: 1.2;
}

.horario legend {
  margin-bottom: 10px;
  padding: 0;
  width: auto;
}

.horario .col-sm-10 {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.opM,
.opV,
.opN {
  display: flex;
  align-items: center;
  gap: 5px;
}

.horario input[type="checkbox"],
.horario input[type="radio"] {
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: #014F86;
}

.horario label {
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
}

.medico {
  order: 7;
  width: 48%;
}

.Hospital {
  order: 8;
  width: 48%;
}

.medico select,
.Hospital select {
  height: 40px;
}

.campo {
  order: 9;
  width: 100%;
}

.campo textarea {
  height: 90px;
}

.senha {
  order: 10;
  width: 100%;
  margin-bottom: 35px;
}

.senha .col-sm-10 {
  width: 100%;
}

.emailatt {
  order: 11;
  width: 100%;
  margin-bottom: 10px;
}

.emailatt .col-sm-10 {
  width: 100%;
}

.emailatt .form-check {
  display: flex;
  align-items: center;
  gap: 8px;
}

.emailatt input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: #014F86;
}

.emailatt label {
  font-size: 13px;
  font-weight: 400;
  margin: 0;
}

.email {
  order: 12;
  width: 100%;
}

.email label {
  display: none;
}

.conteudo > form > form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 4%;
  justify-content: center;
}

.confirmar,
.cancelar {
  order: 13;
  width: auto;
  border: none;
  border-radius: 24px;
  background: #014F86;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 12px 38px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 25px;
}

.confirmar:hover,
.cancelar:hover {
  background: #014F86;
}

.cancelar {
  order: 14;
}

.botoes button:hover {
  background: #014F86;
}

.erro {
  display: block;
  color: #d93025;
  font-size: 11px;
  margin-top: 4px;
}

.invalido {
  border-color: #d93025 !important;
}

@media (max-width: 600px) {

  .conteudo {
    padding: 15px;
    align-items: flex-start;
  }

  .conteudo > form {
    width: 100%;
    padding: 30px 22px;
    border-radius: 20px;
  }

  .conteudo > form::before {
    font-size: 21px;
    margin-bottom: 25px;
  }

  .cpf,
  .telefone,
  .data,
  .horario,
  .medico,
  .Hospital {
    width: 100%;
  }

  .consulta select {
    max-width: 100%;
  }

  .horario .col-sm-10 {
    gap: 16px;
  }

  .confirmar,
  .cancelar {
    width: 100%;
    margin-top: 12px;
  }
}

</style>
