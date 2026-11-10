import { reactive } from 'vue'

const CHAVE_HOSPITAIS = 'instituto_med_hospitais'

const hospitaisBase = [
  {
    id: 1,
    nome: 'Hospital Dona Helena',
    slogan: 'Cuidando de vidas com excelência e humanização.',
    telefone: '+55 47 3451-3333',
    atendimento: '24 horas por dia, todos os dias',
    endereco: 'Rua Blumenau, 123 - América, Joinville - SC 89204-250, Brazil',
    imagem: '/img/hospitais/dona-helena.png',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.2165601263066!2d-48.85133593042176!3d-26.298435898563643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb038311990b7%3A0x5a336ee36789406a!2sHospital%20Dona%20Helena!5e0!3m2!1spt-BR!2sbr!4v1786907717376!5m2!1spt-BR!2sbr',
    descricao:
      'O Hospital Dona Helena é referência em atendimento hospitalar em Joinville e região. Conta com uma equipe multidisciplinar especializada, tecnologia avançada e estrutura completa para oferecer o melhor cuidado aos seus pacientes.',
    profissionais: '230+',
    leitos: '150',
    especialidades: '25+',
    cnpj: '83.323.450/0001-10',
    tipo: 'Geral',
    administracao: 'Instituto Med',
    fundacao: '1951/01/05',
    diretor: 'Dr. Carlos A. Ferreira',
    crm: 'CRM/SC 12345',
  },
  {
    id: 2,
    nome: 'Hospital Regional Hans Dieter Schmidt (HRHDS)',
    slogan: 'Referência em saúde para Joinville e região.',
    telefone: '+55 47 3451-3100',
    atendimento: '24 horas por dia, todos os dias',
    endereco: 'Rua Xavier Arp, 320 - Boa Vista, Joinville - SC 89220-680, Brazil',
    imagem: '/img/hospitais/hrhds.png',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.3877464686507!2d-48.81456217937622!3d-26.2815272474282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1eec715a15f%3A0xecf362d3e101432b!2sHospital%20Regional%20Hans%20Dieter%20Schmidt!5e0!3m2!1spt-BR!2sbr!4v1786907325174!5m2!1spt-BR!2sbr',
    descricao:
      'O Hospital Regional Hans Dieter Schmidt oferece atendimento especializado e serviços de saúde para a população de Joinville e região.',
    profissionais: '300+',
    leitos: '200',
    especialidades: '30+',
    cnpj: '83.000.000/0001-00',
    tipo: 'Regional',
    administracao: 'Instituto Med',
    fundacao: '1984/01/01',
    diretor: 'Dr. Responsável',
    crm: 'CRM/SC 00000',
  },
  {
    id: 3,
    nome: 'Hospital Municipal São José',
    slogan: 'Saúde e cuidado para toda a comunidade.',
    telefone: '+55 47 3441-6666',
    atendimento: '24 horas por dia, todos os dias',
    endereco: 'Av. Getúlio Vargas, 238 - Anita Garibaldi, Joinville - SC 89202-030, Brazil',
    imagem: '/img/hospitais/sao-jose.png',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5261237516775!2d-48.84880742478548!3d-26.309457977011935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb04e1e616f3b%3A0x6d420ab79cf1dd24!2zSG9zcGl0YWwgU8OjbyBKb3PDqQ!5e0!3m2!1spt-BR!2sbr!4v1786907426291!5m2!1spt-BR!2sbr',
    descricao:
      'O Hospital Municipal São José oferece atendimento à população de Joinville e região, contando com profissionais especializados e serviços de saúde.',
    profissionais: '400+',
    leitos: '250',
    especialidades: '35+',
    cnpj: '83.000.000/0001-00',
    tipo: 'Municipal',
    administracao: 'Prefeitura de Joinville',
    fundacao: '1906/01/01',
    diretor: 'Dr. Responsável',
    crm: 'CRM/SC 00000',
  },
  {
    id: 4,
    nome: 'Hospital Bethesda',
    slogan: 'Saúde e cuidado para toda a comunidade.',
    telefone: '+55 47 3441-6666',
    atendimento: '24 horas por dia, todos os dias',
    endereco: 'Rua do Príncipe, 280 - Centro, Joinville - SC, 89201-001',
    imagem: '/img/hospitais/bethesda.png',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7748586266007!2d-48.90868272458477!3d-26.20400117707665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea6425e47a65b%3A0x1757ad0f0ffcf4e3!2sHospital%20Bethesda!5e0!3m2!1spt-BR!2sbr!4v1787322279768!5m2!1spt-BR!2sbr',
    descricao:
      'O Hospital Bethesda é uma instituição de saúde que oferece atendimento à comunidade de Joinville e região, contando com profissionais e serviços especializados.',
    profissionais: '400+',
    leitos: '250+',
    especialidades: '30+',
    cnpj: '00.000.000/0001-00',
    tipo: 'Privado',
    administracao: 'Hospital Bethesda',
    fundacao: '1906/01/01',
    diretor: 'Dr. Responsável',
    crm: 'CRM/SC 00000',
  },
  {
    id: 5,
    nome: 'Hospital Erasto Gaertner',
    slogan: 'Cuidado e saúde para a comunidade.',
    telefone: '+55 47 0000-0000',
    atendimento: 'Conforme horários da unidade',
    endereco: 'Joinville - SC',
    imagem: '/img/hospitais/erasto.png',
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.9590537731165!2d-48.842445824581574!3d-26.295427377020506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb15d6ab37063%3A0xff2c6e5c3953cd6f!2sCentro%20de%20Sa%C3%BAde%20Erasto%20Gaertner%20-%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1787322333781!5m2!1spt-BR!2sbr',
    descricao:
      'O Centro de Saúde Erasto Gaertner oferece serviços e atendimento em saúde à população de Joinville.',
    profissionais: 'A definir',
    leitos: 'A definir',
    especialidades: 'Diversas',
    cnpj: '00.000.000/0001-00',
    tipo: 'Centro de Saúde',
    administracao: 'A definir',
    fundacao: 'A definir',
    diretor: 'Dr. Responsável',
    crm: 'CRM/SC 00000',
  },
]

function carregarHospitais() {
  const dados = localStorage.getItem(CHAVE_HOSPITAIS)

  if (!dados) {
    return [...hospitaisBase]
  }

  try {
    const lista = JSON.parse(dados)
    return Array.isArray(lista) && lista.length ? lista : [...hospitaisBase]
  } catch {
    return [...hospitaisBase]
  }
}

const state = reactive({
  hospitais: carregarHospitais(),
})

function salvarHospitais() {
  localStorage.setItem(CHAVE_HOSPITAIS, JSON.stringify(state.hospitais))
}

export function useHospitaisStore() {
  function listar() {
    return state.hospitais
  }

  function obterPorId(id) {
    return state.hospitais.find((hospital) => Number(hospital.id) === Number(id)) || null
  }

  function criar(dados) {
    const hospital = {
      id: Date.now(),
      nome: dados.nome || 'Novo hospital',
      slogan: dados.slogan || 'Saúde e cuidado para a comunidade.',
      telefone: dados.telefone || '+55 47 0000-0000',
      atendimento: dados.atendimento || 'Atendimento conforme unidade',
      endereco: dados.endereco || 'Endereço não informado',
      imagem: dados.imagem || '/img/hospitais/placeholder.png',
      mapa: dados.mapa || '',
      descricao: dados.descricao || 'Descrição em atualização.',
      profissionais: dados.profissionais || 'A definir',
      leitos: dados.leitos || 'A definir',
      especialidades: dados.especialidades || 'Diversas',
      cnpj: dados.cnpj || '00.000.000/0001-00',
      tipo: dados.tipo || 'Geral',
      administracao: dados.administracao || 'A definir',
      fundacao: dados.fundacao || 'A definir',
      diretor: dados.diretor || 'Dr. Responsável',
      crm: dados.crm || 'CRM/SC 00000',
    }

    state.hospitais.push(hospital)
    salvarHospitais()
    return hospital
  }

  function atualizar(id, dados) {
    const index = state.hospitais.findIndex((hospital) => Number(hospital.id) === Number(id))

    if (index === -1) {
      return null
    }

    state.hospitais[index] = {
      ...state.hospitais[index],
      ...dados,
      id: Number(id),
    }

    salvarHospitais()
    return state.hospitais[index]
  }

  function remover(id) {
    state.hospitais = state.hospitais.filter((hospital) => Number(hospital.id) !== Number(id))
    salvarHospitais()
  }

  return {
    listar,
    obterPorId,
    criar,
    atualizar,
    remover,
  }
}
