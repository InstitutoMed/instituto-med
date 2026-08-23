import { reactive, toRefs } from 'vue'

const state = reactive({
  visible: false,
  step: 'form',
  title: 'Criar conta',
  form: { nome: '', email: '', telefone: '' },
  errors: {}
})

function openModal(title = 'Criar conta') {
  state.title = title
  state.step = 'form'
  state.form = { nome: '', email: '', telefone: '' }
  state.errors = {}
  state.visible = true
}

function closeModal() {
  state.visible = false
}

function validate() {
  const errors = {}
  if (!state.form.nome.trim()) errors.nome = 'Informe seu nome.'
  if (!state.form.email.trim() || !/^\S+@\S+\.\S+$/.test(state.form.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (!state.form.telefone.trim()) errors.telefone = 'Informe um telefone.'
  state.errors = errors
  return Object.keys(errors).length === 0
}

function submitModal() {
  if (validate()) state.step = 'success'
}

export function useBookingModal() {
  return {
    ...toRefs(state),
    openModal,
    closeModal,
    submitModal
  }
}
