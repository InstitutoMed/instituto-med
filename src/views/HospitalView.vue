<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const hospitais = [
  {
    id: 1,
    nome: "Hospital Dona Helena",
    slogan: "Cuidando de vidas com excelência e humanização.",
    telefone: "+55 47 3451-3333",
    atendimento: "24 horas por dia, todos os dias",
    endereco: "Rua Blumenau, 123 - América, Joinville - SC 89204-250, Brazil",
    imagem: "/img/hospitais/dona-helena.png",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.2165601263066!2d-48.85133593042176!3d-26.298435898563643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb038311990b7%3A0x5a336ee36789406a!2sHospital%20Dona%20Helena!5e0!3m2!1spt-BR!2sbr!4v1786907717376!5m2!1spt-BR!2sbr",
    descricao: "O Hospital Dona Helena é referência em atendimento hospitalar em Joinville e região. Conta com uma equipe multidisciplinar especializada, tecnologia avançada e estrutura completa para oferecer o melhor cuidado aos seus pacientes.",
    profissionais: "230+",
    leitos: "150",
    especialidades: "25+",
    cnpj: "83.323.450/0001-10",
    tipo: "Geral",
    administracao: "Instituto Med",
    fundacao: "1951/01/05",
    diretor: "Dr. Carlos A. Ferreira",
    crm: "CRM/SC 12345",
  },
  {
    id: 2,
    nome: "Hospital Regional Hans Dieter Schmidt (HRHDS)",
    slogan: "Referência em saúde para Joinville e região.",
    telefone: "+55 47 3451-3100",
    atendimento: "24 horas por dia, todos os dias",
    endereco: "Rua Xavier Arp, 320 - Boa Vista, Joinville - SC 89220-680, Brazil",
    imagem: "/img/hospitais/hrhds.png",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.3877464686507!2d-48.81456217937622!3d-26.2815272474282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1eec715a15f%3A0xecf362d3e101432b!2sHospital%20Regional%20Hans%20Dieter%20Schmidt!5e0!3m2!1spt-BR!2sbr!4v1786907325174!5m2!1spt-BR!2sbr",
    descricao: "O Hospital Regional Hans Dieter Schmidt oferece atendimento especializado e serviços de saúde para a população de Joinville e região.",
    profissionais: "300+",
    leitos: "200",
    especialidades: "30+",
    cnpj: "83.000.000/0001-00",
    tipo: "Regional",
    administracao: "Instituto Med",
    fundacao: "1984/01/01",
    diretor: "Dr. Responsável",
    crm: "CRM/SC 00000",
  },
  {
    id: 3,
    nome: "Hospital Municipal São José",
    slogan: "Saúde e cuidado para toda a comunidade.",
    telefone: "+55 47 3441-6666",
    atendimento: "24 horas por dia, todos os dias",
    endereco: "Av. Getúlio Vargas, 238 - Anita Garibaldi, Joinville - SC 89202-030, Brazil",
    imagem: "/img/hospitais/sao-jose.png",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5261237516775!2d-48.84880742478548!3d-26.309457977011935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb04e1e616f3b%3A0x6d420ab79cf1dd24!2zSG9zcGl0YWwgU8OjbyBKb3PDqQ!5e0!3m2!1spt-BR!2sbr!4v1786907426291!5m2!1spt-BR!2sbr",
    descricao: "O Hospital Municipal São José oferece atendimento à população de Joinville e região, contando com profissionais especializados e serviços de saúde.",
    profissionais: "400+",
    leitos: "250",
    especialidades: "35+",
    cnpj: "83.000.000/0001-00",
    tipo: "Municipal",
    administracao: "Prefeitura de Joinville",
    fundacao: "1906/01/01",
    diretor: "Dr. Responsável",
    crm: "CRM/SC 00000",
  },
  {
    id: 4,
    nome: "Hospital Bethesda",
    slogan: "Saúde e cuidado para toda a comunidade.",
    telefone: "+55 47 3441-6666",
    atendimento: "24 horas por dia, todos os dias",
    endereco: "Rua do Príncipe, 280 - Centro, Joinville - SC, 89201-001",
    imagem: "/img/hospitais/bethesda.png",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.7748586266007!2d-48.90868272458477!3d-26.20400117707665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea6425e47a65b%3A0x1757ad0f0ffcf4e3!2sHospital%20Bethesda!5e0!3m2!1spt-BR!2sbr!4v1787322279768!5m2!1spt-BR!2sbr",
    descricao: "O Hospital Bethesda é uma instituição de saúde que oferece atendimento à comunidade de Joinville e região, contando com profissionais e serviços especializados.",
    profissionais: "400+",
    leitos: "250+",
    especialidades: "30+",
    cnpj: "00.000.000/0001-00",
    tipo: "Privado",
    administracao: "Hospital Bethesda",
    fundacao: "1906/01/01",
    diretor: "Dr. Responsável",
    crm: "CRM/SC 00000"
},
    {
    id: 5,
  nome: "Hospital Erasto Gaertner",
  slogan: "Cuidado e saúde para a comunidade.",
  telefone: "+55 47 0000-0000",
  atendimento: "Conforme horários da unidade",
  endereco: "Joinville - SC",
  imagem: "/img/hospitais/erasto.png",
  mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.9590537731165!2d-48.842445824581574!3d-26.295427377020506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb15d6ab37063%3A0xff2c6e5c3953cd6f!2sCentro%20de%20Sa%C3%BAde%20Erasto%20Gaertner%20-%20Joinville!5e0!3m2!1spt-BR!2sbr!4v1787322333781!5m2!1spt-BR!2sbr",
  descricao: "O Centro de Saúde Erasto Gaertner oferece serviços e atendimento em saúde à população de Joinville.",
  profissionais: "A definir",
  leitos: "A definir",
  especialidades: "Diversas",
  cnpj: "00.000.000/0001-00",
  tipo: "Centro de Saúde",
  administracao: "A definir",
  fundacao: "A definir",
  diretor: "Dr. Responsável",
  crm: "CRM/SC 00000"
  },
];

const medicos = [
  {
    id: 1,
    nome: "Dra. Juliana Andrade",
    hospital: "",
    avaliacao: "4.9",
    crm: "CRM 09609",
    imagem: "/img/medicos/juliana.png",
  },
  {
    id: 2,
    nome: "Dr. Anthony Augusto",
    hospital: "Hospital Dona Helena",
    avaliacao: "5.0",
    crm: "CRM 67676",
    imagem: "/img/medicos/anthony.png",
  },
  {
    id: 3,
    nome: "Dra. Paula Fernandez",
    hospital: "Hospital Dona Helena",
    avaliacao: "4.8",
    crm: "CRM 12345",
    imagem: "/img/medicos/paula.png",
  },
    {
    id: 4,
    nome: "Dr. Ana Julia",
    hospital: "Hospital Dona Helena",
    avaliacao: "4.8",
    crm: "CRM 12345",
    imagem: "/img/medicos/ana.png",
  },
    {
    id: 5,
    nome: "Dr. Tiago",
    hospital: "Hospital Dona Helena",
    avaliacao: "4.8",
    crm: "CRM 12345",
    imagem: "/img/medicos/tiago.png",
  },
];

const indiceMedico = ref(0);
let intervaloMedicos;

const medicosVisiveis = computed(() => {
  const quantidadeVisivel = 3;

  return Array.from({ length: quantidadeVisivel }, (_, index) => {
    return medicos[(indiceMedico.value + index) % medicos.length];
  });
});

function proximoMedico() {
  indiceMedico.value = (indiceMedico.value + 1) % medicos.length;
}

function medicoAnterior() {
  indiceMedico.value =
    (indiceMedico.value - 1 + medicos.length) % medicos.length;
}

onMounted(() => {
  intervaloMedicos = setInterval(() => {
    proximoMedico();
  }, 4000);
});

onBeforeUnmount(() => {
  clearInterval(intervaloMedicos);
});

const hospital = computed(() => {
  const id = Number(route.query.id);
  return hospitais.find((hospital) => hospital.id === id);
});

function voltar() {
  router.push("/hospitais");
}

function abrirMapa() {
  if (!hospital.value) return;
  const endereco = encodeURIComponent(hospital.value.endereco);
  window.open(`https://www.google.com/maps/search/?api=1&query=${endereco}`, "_blank");
}
</script>

<template>
  <main v-if="hospital" class="pagina-hospital">
    <div class="breadcrumb">
      <span @click="voltar">Hospitais</span>
      <span>›</span>
      <span>{{ hospital.nome }}</span>
    </div>

    <section class="card-principal">
      <div class="informacoes-principais">
        <div class="logo-hospital">
          <div class="logo-simbolo">+</div>
          <div>
            <span>HOSPITAL</span>
            <strong>{{ hospital.nome }}</strong>
          </div>
        </div>

        <p class="slogan">{{ hospital.slogan }}</p>

        <div class="info-item">
          <img
            src="/img/icones/telefone 3.png"
            :alt="`Telefone`"
          />
          <div>
            <strong>Telefone</strong>
            <p>{{ hospital.telefone }}</p>
          </div>
        </div>

        <div class="info-item">
          <img
            src="/img/icones/relogio.png"
            :alt="`Horário`"
            />
          <div>
            <strong>Atendimento</strong>
            <p>{{ hospital.atendimento }}</p>
          </div>
        </div>

        <button class="btn-fluxo">Ver fluxo</button>
      </div>

      <img :src="hospital.imagem" :alt="hospital.nome" class="imagem-hospital" />
    </section>

    <section class="card-localizacao">
      <div class="dados-localizacao">
        <h2>Localização:</h2>
        <p>{{ hospital.endereco }}</p>
        <button class="link-mapa" @click="abrirMapa">Abrir no Google Maps ↗</button>
      </div>

      <iframe
        v-if="hospital.mapa"
        :src="hospital.mapa"
        :title="`Mapa de localização do ${hospital.nome}`"
        class="mapa-google"
        loading="lazy"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>

      <div v-else class="mapa-sem-link">
        <span>Mapa indisponível</span>
      </div>
    </section>

    <section class="cards-inferiores">
      <div class="card sobre-hospital">
        <div class="titulo-card">
          <span class="icone-cruz">
              <img
                src="/img/icones/farmacia.png"
                :alt="`Cruz`"
              />
              <h2>Sobre o Hospital</h2>
            </span>
          </div>

        <p>{{ hospital.descricao }}</p>

        <div class="indicadores">
          <div class="indicador">
            <img
              src="/img/icones/grupo.png"
              :alt="`Profissionais`"
                />
            <strong>{{ hospital.profissionais }}</strong>
            <small>Profissionais</small>
          </div>

          <div class="indicador">
            <img
              src="/img/icones/cama.png"
              :alt="`Leitos`"
            />
            <strong>{{ hospital.leitos }}</strong>
            <small>Leitos</small>
          </div>

          <div class="indicador">
            <img
              src="/img/icones/coracao.png"
              :alt="`Especialidades`"
            />
            <strong>{{ hospital.especialidades }}</strong>
            <small>Especialidades</small>
          </div>
        </div>
      </div>

      <div class="card informacoes-gerais">
        <h2>Informações Gerais</h2>

        <div class="informacao">
          <strong>CNPJ</strong>
          <span>{{ hospital.cnpj }}</span>
        </div>

        <div class="informacao">
          <strong>Tipo de Hospital</strong>
          <span>{{ hospital.tipo }}</span>
        </div>

        <div class="informacao">
          <strong>Administração</strong>
          <span>{{ hospital.administracao }}</span>
        </div>

        <div class="informacao">
          <strong>Fundação</strong>
          <span>{{ hospital.fundacao }}</span>
        </div>

        <div class="informacao">
          <strong>Diretor Técnico</strong>
          <span>{{ hospital.diretor }}<br />{{ hospital.crm }}</span>
        </div>
      </div>
    </section>

    <section class="secao-medicos">
  <h2>Médicos disponíveis</h2>

  <div class="carrossel-medicos">
    <button
      class="seta-carrossel seta-esquerda"
      @click="medicoAnterior"
      aria-label="Médico anterior"
    >
      ❮
    </button>

    <div class="medicos-container">
      <TransitionGroup name="slide" tag="div" class="medicos-lista">
        <div
          v-for="medico in medicosVisiveis"
          :key="medico.id"
          class="card-medico"
        >
          <img
            :src="medico.imagem"
            :alt="medico.nome"
            class="imagem-medico"
          />

          <div class="dados-medico">
            <h3>{{ medico.nome }}</h3>
            <p>{{ hospital.nome }}</p>

            <div class="avaliacao-medico">
              <span>★ {{ medico.avaliacao }}</span>
              <span class="separador">•</span>
              <span>{{ medico.crm }}</span>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>

    <button
      class="seta-carrossel seta-direita"
      @click="proximoMedico"
      aria-label="Próximo médico"
    >
      ❯
    </button>
  </div>
</section>
  </main>

  <main v-else class="hospital-nao-encontrado">
    <h1>Hospital não encontrado</h1>
    <p>ID recebido: {{ route.query.id }}</p>
    <button @click="voltar">Voltar para hospitais</button>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.pagina-hospital {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.breadcrumb {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 12px;
  color: #777;
}

.breadcrumb span:first-child {
  color: #0072b8;
  cursor: pointer;
}

.card-principal,
.card-localizacao,
.card {
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}

.card-principal {
  min-height: 285px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.informacoes-principais {
  flex: 1;
}

.logo-hospital {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-simbolo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #0877b9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
}

.logo-hospital span {
  display: block;
  font-size: 9px;
  letter-spacing: 2px;
  color: #777;
}

.logo-hospital strong {
  display: block;
  color: #0877b9;
  font-size: 24px;
}

.slogan {
  font-size: 12px;
  color: #777;
  margin: 0.5vw 0;
}

.info-item {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.icone {
  color: #0877b9;
  font-size: 10px;
}

.info-item strong {
  display: block;
  font-size: 1rem;
}

.info-item p {
  margin: 2px 0;
  font-size: 0.8rem;
  color: #777;
}
.info-item img {
  width: 4%;
  height: 20px;
}
.btn-fluxo {
  margin-top: 10px;
  padding: 9px 35px;
  border: none;
  border-radius: 20px;
  background: #006da8;
  color: white;
  cursor: pointer;
}

.imagem-hospital {
  width: 48%;
  max-width: 480px;
  object-fit: cover;
  border-radius: 8px;
}

.card-localizacao {
  margin-top: 28px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.dados-localizacao {
  width: 28%;
}

.dados-localizacao h2 {
  font-size: 15px;
}

.dados-localizacao p {
  font-size: 11px;
  color: #777;
  line-height: 1.5;
}

.link-mapa {
  border: none;
  background: none;
  color: #0877b9;
  font-size: 11px;
  cursor: pointer;
  padding: 0;
}

.mapa-google {
  width: 70%;
  height: 180px;
  border: 0;
  border-radius: 8px;
  display: block;
}

.mapa-sem-link {
  width: 70%;
  height: 180px;
  border-radius: 8px;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 12px;
}

.cards-inferiores {
  margin-top: 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.card {
  padding: 20px;
}

.titulo-card {
  display: flex;
  align-items: center;
  gap: 10px;
}

.titulo-card h2,
.informacoes-gerais h2 {
  font-size: 14px;
  font-weight: bold;
}

.icone-cruz {
  display: flex;
  align-items: center;
}

.icone-cruz img {
  width: 20%;
  height: 20%;
  margin: 0 1vw 0 0;
}
.icone-cruz h2 {
  font-size: 20px;
  font-weight: bold;
}

.sobre-hospital p {
  font-size: 12px;
  color: #777;
  margin: 0.5vw 0;
  line-height: 1.5;
}

.indicadores {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.indicador {
  flex: 1;
  min-height: 55px;
  border: 1px solid #ddd;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.indicador-icone {
  color: #0877b9;
}

.indicador strong {
  color: #0877b9;
}

.indicador small {
  color: #777;
  font-size: 8px;
}

.informacoes-gerais h2 {
  font-weight: bold;
  text-align: center;
}

.informacao {
  display: grid;
  grid-template-columns: 45% 55%;
  margin-bottom: 10px;
  font-size: 12px;
}

.informacao span {
  color: #666;
}

.hospital-nao-encontrado {
  text-align: center;
  padding: 50px;
}

.hospital-nao-encontrado button {
  background: #0877b9;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
  cursor: pointer;
}

.secao-medicos {
  margin-top: 45px;
  padding-bottom: 30px;
}

.secao-medicos  h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 28px;
  color: #222;
  font-weight: bold;
}

.carrossel-medicos {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.medicos-container {
  width: 85%;
  overflow: hidden;
  padding: 8px;
}

.medicos-lista {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.card-medico {
  width: 240px;
  min-width: 240px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16);
}

.imagem-medico {
  width: 100%;
  height: 230px;
  display: block;
  object-fit: cover;
  object-position: top;
  background: #f2f2f2;
}

.dados-medico {
  padding: 12px 14px 14px;
}

.dados-medico h3 {
  margin: 0;
  color: #3d6d86;
  font-size: 16px;
}

.dados-medico p {
  margin: 5px 0 10px;
  color: #777;
  font-size: 12px;
}

.avaliacao-medico {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #777;
  font-size: 11px;
}

.avaliacao-medico span:first-child {
  color: #3d6d86;
  font-weight: bold;
}

.separador {
  font-size: 14px;
}

.seta-carrossel {
  position: absolute;
  z-index: 2;
  width: 58px;
  height: 58px;
  border: none;
  border-radius: 50%;
  background: rgba(191, 221, 234, 0.8);
  color: #111;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.seta-carrossel:hover {
  transform: scale(1.08);
}

.seta-esquerda {
  left: 0;
}

.seta-direita {
  right: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.35s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-move {
  transition: transform 0.35s ease;
}

@media (max-width: 700px) {
  .card-principal,
  .card-localizacao {
    flex-direction: column;
  }
  .imagem-hospital,
  .mapa-google,
  .mapa-sem-link,
  .dados-localizacao {
    width: 100%;
    max-width: none;
  }

  .cards-inferiores {
    grid-template-columns: 1fr;
  }

  .secao-medicos {
  margin-top: 35px;
}

.medicos-container {
  width: 100%;
}

.medicos-lista {
  gap: 15px;
  justify-content: flex-start;
}

.card-medico {
  width: 190px;
  min-width: 190px;
}

.imagem-medico {
  height: 190px;
}

.dados-medico h3 {
  font-size: 13px;
}

.dados-medico p {
  font-size: 10px;
}

.seta-carrossel {
  width: 42px;
  height: 42px;
  font-size: 22px;
}

.seta-esquerda {
  left: -8px;
}

.seta-direita {
  right: -8px;
}
}

</style>
