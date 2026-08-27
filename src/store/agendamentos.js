const CHAVE_AGENDAMENTOS = 'agendamentos'

function lerAgendamentos() {
  try {
    const dados = localStorage.getItem(CHAVE_AGENDAMENTOS)
    return dados ? JSON.parse(dados) : []
  } catch {
    return []
  }
}

function salvarAgendamentos(agendamentos) {
  localStorage.setItem(
    CHAVE_AGENDAMENTOS,
    JSON.stringify(agendamentos)
  )
}

export function cadastrarAgendamento(dados) {
  const agendamentos = lerAgendamentos()

  const novoAgendamento = {
    id: Date.now(),
    ...dados
  }

  agendamentos.push(novoAgendamento)
  salvarAgendamentos(agendamentos)

  return novoAgendamento
}

export function obterAgendamentos() {
  return lerAgendamentos()
}

export function cancelarAgendamento(id) {
  const agendamentos = lerAgendamentos()

  const atualizados = agendamentos.filter(
    (agendamento) => agendamento.id !== id
  )

  salvarAgendamentos(atualizados)
}
