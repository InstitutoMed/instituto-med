import { vacinas } from '@/data/vacinas'

const STORAGE_KEY = 'registrosVacinas'

function carregarRegistros() {
  try {
    const dados = localStorage.getItem(STORAGE_KEY)
    return dados ? JSON.parse(dados) : {}
  } catch (e) {
    console.error('Erro ao ler localStorage:', e)
    return {}
  }
}

function salvarNoStorage(registros) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(registros))
  } catch (e) {
    console.error('Erro ao salvar no localStorage:', e)
  }
}

export function aplicarRegistrosSalvos() {
  const registros = carregarRegistros()
  vacinas.forEach((vacina) => {
    if (registros[vacina.id]) {
      vacina.dataVacinacao = registros[vacina.id]
    }
  })
}

export function salvarRegistro(id, data) {
  const registros = carregarRegistros()
  registros[id] = data
  salvarNoStorage(registros)

  const vacina = vacinas.find((v) => String(v.id) === String(id))
  if (vacina) {
    vacina.dataVacinacao = data
  }
}

export function removerRegistro(id) {
  const registros = carregarRegistros()
  delete registros[id]
  salvarNoStorage(registros)

  const vacina = vacinas.find((v) => String(v.id) === String(id))
  if (vacina) {
    delete vacina.dataVacinacao
  }
}

aplicarRegistrosSalvos()