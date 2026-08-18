<script setup>
import { computed } from "vue";
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
];

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
          <span class="icone">☎</span>
          <div>
            <strong>Telefone</strong>
            <p>{{ hospital.telefone }}</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icone">◷</span>
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
          <span class="icone-cruz">+</span>
          <h2>Sobre o Hospital</h2>
        </div>

        <p>{{ hospital.descricao }}</p>

        <div class="indicadores">
          <div class="indicador">
            <span class="indicador-icone">♟</span>
            <strong>{{ hospital.profissionais }}</strong>
            <small>Profissionais</small>
          </div>

          <div class="indicador">
            <span class="indicador-icone">▰</span>
            <strong>{{ hospital.leitos }}</strong>
            <small>Leitos</small>
          </div>

          <div class="indicador">
            <span class="indicador-icone">♡</span>
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
}

.info-item {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.icone {
  color: #0877b9;
  font-size: 20px;
}

.info-item strong {
  display: block;
  font-size: 13px;
}

.info-item p {
  margin: 2px 0;
  font-size: 11px;
  color: #777;
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
}

.icone-cruz {
  color: #0877b9;
  font-size: 30px;
}

.sobre-hospital p {
  color: #777;
  font-size: 11px;
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
  text-align: center;
}

.informacao {
  display: grid;
  grid-template-columns: 45% 55%;
  margin-bottom: 10px;
  font-size: 10px;
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
}
</style>
