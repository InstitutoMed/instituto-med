const CHAVE_USUARIOS = 'usuarios'
const CHAVE_SESSAO = 'usuarioLogado'

function lerUsuarios() {
  try {
    const dados = localStorage.getItem(CHAVE_USUARIOS)
    return dados ? JSON.parse(dados) : []
  } catch {
    return []
  }
}

function salvarUsuarios(usuarios) {
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
}

function apenasNumeros(valor) {
  return (valor || '').replace(/\D/g, '')
}

/**
 * Cadastra um novo usuário. Lança erro se o CPF já existir.
 */
export function cadastrarUsuario(dados) {
  const usuarios = lerUsuarios()
  const cpf = apenasNumeros(dados.cpf)

  const jaExiste = usuarios.some((u) => apenasNumeros(u.cpf) === cpf)
  if (jaExiste) {
    throw new Error('Já existe um cadastro com este CPF.')
  }

  usuarios.push({ ...dados })
  salvarUsuarios(usuarios)
  return true
}

/**
 * Verifica CPF + senha. Retorna o usuário (sem senha) se válido, ou null.
 */
export function autenticar(cpf, senha) {
  const usuarios = lerUsuarios()
  const cpfBusca = apenasNumeros(cpf)

  const usuario = usuarios.find(
    (u) => apenasNumeros(u.cpf) === cpfBusca && u.senha === senha
  )

  if (!usuario) return null

  const { senha: _senha, confirmarSenha: _confirmar, ...usuarioSemSenha } = usuario
  return usuarioSemSenha
}

export function salvarSessao(usuario) {
  sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario))
}

export function obterSessao() {
  try {
    const dados = sessionStorage.getItem(CHAVE_SESSAO)
    return dados ? JSON.parse(dados) : null
  } catch {
    return null
  }
}

export function encerrarSessao() {
  sessionStorage.removeItem(CHAVE_SESSAO)
}
