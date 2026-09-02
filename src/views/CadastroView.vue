<template>
  <div class="layout">
    <main class="conteudo">
      <form class="cartao" @submit.prevent="enviar" novalidate>
        <h1>Cadastro</h1>

        <section class="secao">
          <div class="secao__titulo">
            <h2>Cadastro Básico</h2>
            <span class="tag tag--obrigatorio">obrigatório</span>
          </div>

          <div class="campo">
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

          <div class="grade grade--2">
            <div class="campo">
              <label for="cpf">CPF</label>
              <input
                id="cpf"
                v-model="form.cpf"
                type="text"
                placeholder="000.000.000-00"
                maxlength="14"
                :class="{ invalido: erros.cpf }"
                @input="form.cpf = mascararCpf(form.cpf)"
                @blur="tocado.cpf = true"
              />
              <span class="erro" v-if="erros.cpf">{{ erros.cpf }}</span>
            </div>
            <div class="campo">
              <label for="nascimento">Nascimento</label>
              <input
                id="nascimento"
                v-model="form.nascimento"
                type="date"
                :class="{ invalido: erros.nascimento }"
                @blur="tocado.nascimento = true"
              />
              <span class="erro" v-if="erros.nascimento">{{ erros.nascimento }}</span>
            </div>
          </div>

          <div class="grade grade--2">
            <div class="campo">
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
            <div class="campo">
              <span class="label-generico">Gênero</span>
              <div class="radios" :class="{ invalido: erros.genero }">
                <label class="radio">
                  <input type="radio" value="masculino" v-model="form.genero" @change="tocado.genero = true" />
                  Masculino
                </label>
                <label class="radio">
                  <input type="radio" value="feminino" v-model="form.genero" @change="tocado.genero = true" />
                  Feminino
                </label>
              </div>
              <span class="erro" v-if="erros.genero">{{ erros.genero }}</span>
            </div>
          </div>

          <div class="campo">
            <label for="cep">CEP</label>
            <input
              id="cep"
              v-model="form.cep"
              type="text"
              placeholder="00000-000"
              maxlength="9"
              :class="{ invalido: erros.cep }"
              @input="form.cep = mascararCep(form.cep)"
              @blur="tocado.cep = true"
            />
            <span class="erro" v-if="erros.cep">{{ erros.cep }}</span>
          </div>

          <div class="grade grade--2">
            <div class="campo">
              <label for="cidade">Cidade</label>
              <select id="cidade" v-model="form.cidade" :class="{ invalido: erros.cidade }" @blur="tocado.cidade = true">
                <option value="" disabled>Cidade</option>
                <option v-for="c in cidades" :key="c" :value="c">{{ c }}</option>
              </select>
              <span class="erro" v-if="erros.cidade">{{ erros.cidade }}</span>
            </div>
            <div class="campo">
              <label for="estado">Estado</label>
              <select id="estado" v-model="form.estado" :class="{ invalido: erros.estado }" @blur="tocado.estado = true">
                <option value="" disabled>Estado</option>
                <option v-for="uf in estados" :key="uf" :value="uf">{{ uf }}</option>
              </select>
              <span class="erro" v-if="erros.estado">{{ erros.estado }}</span>
            </div>
          </div>

          <div class="campo">
            <label for="pais">País</label>
            <select id="pais" v-model="form.pais" :class="{ invalido: erros.pais }" @blur="tocado.pais = true">
              <option value="" disabled>País</option>
              <option>Brasil</option>
              <option>Portugal</option>
              <option>Outro</option>
            </select>
            <span class="erro" v-if="erros.pais">{{ erros.pais }}</span>
          </div>

          <div class="campo">
            <label for="email">Email</label>
            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              placeholder="Informe seu email"
              :class="{ invalido: erros.email }"
              @blur="tocado.email = true"
            />
            <span class="erro" v-if="erros.email">{{ erros.email }}</span>
          </div>

          <div class="grade grade--2">
            <div class="campo">
              <label for="altura">Altura</label>
              <input
                id="altura"
                v-model="form.altura"
                type="number"
                step="0.01"
                placeholder="CM"
                :class="{ invalido: erros.altura }"
                @blur="tocado.altura = true"
              />
              <span class="erro" v-if="erros.altura">{{ erros.altura }}</span>
            </div>
            <div class="campo">
              <label for="peso">Peso</label>
              <input
                id="peso"
                v-model="form.peso"
                type="number"
                step="0.01"
                placeholder="KG"
                :class="{ invalido: erros.peso }"
                @blur="tocado.peso = true"
              />
              <span class="erro" v-if="erros.peso">{{ erros.peso }}</span>
            </div>
          </div>
        </section>

        <section class="secao">
          <div class="secao__titulo">
            <h2>Cadastro Específico</h2>
            <span class="tag tag--opcional">opcional</span>
          </div>

          <div class="grade grade--2">
            <div class="campo">
              <label for="deficiencia">Deficiência</label>
              <select id="deficiencia" v-model="form.deficiencia">
                <option value="">Nenhuma</option>
                <option>Física</option>
                <option>Visual</option>
                <option>Auditiva</option>
                <option>Intelectual</option>
                <option>Outra</option>
              </select>
            </div>
            <div class="campo">
              <label for="observacoes">Observações</label>
              <textarea
                id="observacoes"
                v-model="form.observacoes"
                rows="1"
                placeholder="Informe observações importantes, restrições ou cuidados especiais"
              ></textarea>
            </div>
          </div>

          <div class="campo">
            <label for="alergias">Alergias</label>
            <select id="alergias" v-model="form.alergias">
              <option value="">Nenhuma</option>
              <option>Medicamentos</option>
              <option>Alimentos</option>
              <option>Látex</option>
              <option>Outras</option>
            </select>
          </div>

          <div class="grade grade--3">
            <div class="campo">
              <label for="tipoSanguineo">Tipo Sanguíneo</label>
              <select id="tipoSanguineo" v-model="form.tipoSanguineo">
                <option value="">Não informado</option>
                <option v-for="t in tiposSanguineos" :key="t">{{ t }}</option>
              </select>
            </div>
            <div class="campo">
              <label for="fatorRh">Fator RH</label>
              <select id="fatorRh" v-model="form.fatorRh">
                <option value="">Não informado</option>
                <option>Positivo</option>
                <option>Negativo</option>
              </select>
            </div>
            <div class="campo">
              <label for="preferencial">Preferencial</label>
              <select id="preferencial" v-model="form.preferencial">
                <option value="">Não informado</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>
          </div>
        </section>

        <section class="secao">
          <div class="secao__titulo">
            <h2>Criar Senha</h2>
            <span class="tag tag--obrigatorio">obrigatório</span>
          </div>

          <div class="grade grade--2">
            <div class="campo">
              <label for="senha">Senha</label>
              <input
                id="senha"
                v-model="form.senha"
                type="password"
                :class="{ invalido: erros.senha }"
                @blur="tocado.senha = true"
              />
              <span class="erro" v-if="erros.senha">{{ erros.senha }}</span>
            </div>
            <div class="campo">
              <label for="confirmarSenha">Confirmar senha</label>
              <input
                id="confirmarSenha"
                v-model="form.confirmarSenha"
                type="password"
                :class="{ invalido: erros.confirmarSenha }"
                @blur="tocado.confirmarSenha = true"
              />
              <span class="erro" v-if="erros.confirmarSenha">{{ erros.confirmarSenha }}</span>
            </div>
          </div>
        </section>

        <p class="mensagem-geral" v-if="tentouEnviar && !formValido">
          Preencha todos os campos obrigatórios do Cadastro Básico antes de continuar.
        </p>
        <p class="mensagem-geral" v-if="erroCadastro">{{ erroCadastro }}</p>

        <div class="acoes">
          <button type="button" class="botao botao--secundario" @click="cancelar">Cancelar</button>
          <button type="submit" class="botao botao--primario">Enviar</button>
        </div>

        <p class="rodape">
          Já tem cadastro?
          <router-link to="/entrar">Entrar</router-link>
        </p>
      </form>
    </main>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { cadastrarUsuario } from '../store/usuarios.js'

const router = useRouter()
const erroCadastro = ref('')

const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
const cidades = ['Joinville', 'Florianópolis', 'Blumenau', 'Curitiba', 'São Paulo', 'Outra']
const tiposSanguineos = ['A', 'B', 'AB', 'O']

const form = reactive({
  nome: '',
  cpf: '',
  nascimento: '',
  telefone: '',
  genero: '',
  cep: '',
  cidade: '',
  estado: '',
  pais: '',
  email: '',
  altura: '',
  peso: '',
  deficiencia: '',
  observacoes: '',
  alergias: '',
  tipoSanguineo: '',
  fatorRh: '',
  preferencial: '',
  senha: '',
  confirmarSenha: ''
})

const camposBasicosObrigatorios = [
  'nome', 'cpf', 'nascimento', 'telefone', 'genero',
  'cep', 'cidade', 'estado', 'pais', 'email', 'altura', 'peso',
  'senha', 'confirmarSenha'
]

const tocado = reactive(Object.fromEntries(camposBasicosObrigatorios.map((c) => [c, false])))
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

function mascararCep(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 8)
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2')
}

const erros = computed(() => {
  const e = {}

  if (!form.nome) e.nome = 'Informe o nome completo.'
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(form.cpf)) e.cpf = 'CPF inválido.'
  if (!form.nascimento) e.nascimento = 'Informe a data de nascimento.'
  if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(form.telefone)) e.telefone = 'Telefone inválido.'
  if (!form.genero) e.genero = 'Selecione o gênero.'
  if (!/^\d{5}-\d{3}$/.test(form.cep)) e.cep = 'CEP inválido.'
  if (!form.cidade) e.cidade = 'Selecione a cidade.'
  if (!form.estado) e.estado = 'Selecione o estado.'
  if (!form.pais) e.pais = 'Selecione o país.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido.'
  if (!form.altura) e.altura = 'Informe a altura.'
  if (!form.peso) e.peso = 'Informe o peso.'
  if (!form.senha || form.senha.length < 6) e.senha = 'Mínimo de 6 caracteres.'
  if (!form.confirmarSenha) e.confirmarSenha = 'Confirme a senha.'
  else if (form.confirmarSenha !== form.senha) e.confirmarSenha = 'As senhas não coincidem.'

  const visiveis = {}
  for (const campo in e) {
    if (tocado[campo] || tentouEnviar.value) visiveis[campo] = e[campo]
  }
  return visiveis
})

const formValido = computed(() => {
  return camposBasicosObrigatorios.every((campo) => {
    const valor = form[campo]
    return valor !== '' && valor !== null && valor !== undefined
  }) && form.senha === form.confirmarSenha
})

function enviar() {
  tentouEnviar.value = true
  camposBasicosObrigatorios.forEach((c) => (tocado[c] = true))
  erroCadastro.value = ''

  if (!formValido.value || Object.keys(erros.value).length > 0) {
    return
  }

  const payload = { ...form }

  try {
    cadastrarUsuario(payload)
  } catch (e) {
    erroCadastro.value = e.message
    return
  }

  router.push({ name: 'login', query: { cadastrado: '1' } })
}

function cancelar() {
  Object.keys(form).forEach((k) => (form[k] = ''))
  tentouEnviar.value = false
  camposBasicosObrigatorios.forEach((c) => (tocado[c] = false))
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
  max-width: 560px;
  background: var(--branco);
  border-radius: 1.5rem;
  box-shadow: var(--sombra);
  padding: 2.25rem 2.5rem 2rem;
}

.cartao h1 {
  font-family: var(--fonte-titulo);
  font-size: 1.7rem;
  text-align: center;
  margin: 0 0 1.75rem;
  color: var(--azul-profundo);
}

.secao {
  margin-bottom: 1.75rem;
}

.secao__titulo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.9rem;
  border-bottom: 1px solid var(--cinza-borda);
  padding-bottom: 0.5rem;
}

.secao__titulo h2 {
  font-family: var(--fonte-titulo);
  font-size: 1.05rem;
  margin: 0;
  color: var(--azul-profundo);
}

.tag {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}

.tag--obrigatorio {
  background: #fdecec;
  color: var(--vermelho-erro);
}

.tag--opcional {
  background: var(--azul-gelo);
  color: var(--azul-medio);
}

.grade {
  display: grid;
  gap: 1rem;
}

.grade--2 {
  grid-template-columns: 1fr 1fr;
}

.grade--3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

label,
.label-generico {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--cinza-texto);
}

input,
select,
textarea {
  border: 1px solid var(--cinza-borda);
  border-radius: 0.6rem;
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  color: var(--azul-profundo);
  background: var(--branco);
  outline: none;
  transition: border-color 0.15s ease;
  width: 100%;
}

textarea {
  resize: vertical;
  min-height: 2.6rem;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--azul-claro);
}

input.invalido,
select.invalido,
.radios.invalido {
  border-color: var(--vermelho-erro);
}

.erro {
  font-size: 0.75rem;
  color: var(--vermelho-erro);
}

.radios {
  display: flex;
  gap: 1.25rem;
  padding: 0.55rem 0.1rem;
}

.radio {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  font-size: 0.88rem;
  color: var(--azul-profundo);
}

.radio input {
  width: auto;
  accent-color: var(--azul-medio);
}

.mensagem-geral {
  color: var(--vermelho-erro);
  font-size: 0.85rem;
  text-align: center;
  margin: 0 0 1rem;
}

.acoes {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.botao {
  border-radius: 999px;
  padding: 0.65rem 2.2rem;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid transparent;
}

.botao--primario {
  background: var(--azul-medio);
  color: var(--branco);
}

.botao--primario:hover {
  background: var(--azul-profundo);
}

.botao--secundario {
  background: var(--branco);
  color: var(--azul-medio);
  border-color: var(--azul-medio);
}

.botao--secundario:hover {
  background: var(--azul-gelo);
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
  .grade--2,
  .grade--3 {
    grid-template-columns: 1fr;
  }
}
</style>
