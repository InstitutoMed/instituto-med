const CHAVE_USUARIOS = 'app_usuarios'
const CHAVE_SESSAO = 'app_sessao_usuario'

export function obterUsuarios() {
  const dados = localStorage.getItem(CHAVE_USUARIOS)
  return dados ? JSON.parse(dados) : []
}

export function cadastrarUsuario(dados) {
  const usuarios = obterUsuarios()
  const existe = usuarios.some(u => u.cpf === dados.cpf)
  if (existe) {
    throw new Error('CPF já cadastrado.')
  }
  usuarios.push(dados)
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
}

export function autenticar(cpf, senha) {
  const usuarios = obterUsuarios()
  return usuarios.find(u => u.cpf === cpf && u.senha === senha) || null
}

export function salvarSessao(usuario) {
  localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario))
}

export function obterSessao() {
  const dados = localStorage.getItem(CHAVE_SESSAO)
  return dados ? JSON.parse(dados) : null
}

export function encerrarSessao() {
  localStorage.removeItem(CHAVE_SESSAO)
}

export function atualizarPerfil(dadosAtualizados) {
  const usuarios = obterUsuarios()
  const index = usuarios.findIndex(u => u.cpf === dadosAtualizados.cpf)
  
  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...dadosAtualizados }
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
    salvarSessao(usuarios[index])
    return usuarios[index]
  }
  throw new Error('Usuário não encontrado.')
}

export function removerUsuario(cpf) {
  const usuarios = obterUsuarios()
  const usuariosFiltrados = usuarios.filter(u => u.cpf !== cpf)
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuariosFiltrados))
}