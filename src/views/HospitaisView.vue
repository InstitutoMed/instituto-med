<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchQuery = ref("");

const hospitais = ref([
  {
    id: 1,
    nome: "Hospital Dona Helena",
    endereco:
      "Rua Blumenau, 123 - América, Joinville - SC 89204-2500, Brazil",
    telefone: "+55 47 3451-3333",
    imagem: "img/maps/dona-helena.png",
  },
  {
    id: 2,
    nome: "Hospital Regional Hans Dieter Schmidt (HRHDS)",
    endereco:
      "Rua Xavier Arp, 320 - Boa Vista, Joinville - SC 89220-680, Brazil",
    telefone: "+55 47 3451-3100",
    imagem: "img/maps/hrhds.png",
  },
  {
    id: 3,
    nome: "Hospital Municipal São José",
    endereco:
      "Av. Getúlio Vargas, 238 - Anita Garibaldi, Joinville - SC 89202-030, Brazil",
    telefone: "+55 47 3441-6666",
    imagem: "img/maps/sao-jose.png",
  },
]);

const hospitaisFiltrados = computed(() => {
  const busca = searchQuery.value.toLowerCase().trim();

  if (!busca) {
    return hospitais.value;
  }

  return hospitais.value.filter(
    (hospital) =>
      hospital.nome.toLowerCase().includes(busca) ||
      hospital.endereco.toLowerCase().includes(busca)
  );
});

function selecionarHospital(hospital) {
  router.push({
    path: "/hospital",
    query: {
      id: hospital.id,
    },
  });
}
</script>
<template>
  <main class="pagina-hospitais">
    <h1>Hospital</h1>
    <div class="barra-pesquisa">
      <input
        type="text"
        placeholder="Buscar Hospital"
        v-model="searchQuery"
      />
      <span class="lupa">
        <img
          src="/img/icones/lupa.png"
          :alt="`Lupa`"
        />
      </span>
    </div>
    <div class="lista-hospitais">
      <div
        v-for="hospital in hospitaisFiltrados"
        :key="hospital.id"
        class="card-hospital"
      >
        <div class="informacoes-hospital">
          <h2>{{ hospital.nome }}</h2>
          <div class="informacao">
            <span class="titulo-info">Localização:</span>
            <span>{{ hospital.endereco }}</span>
          </div>
          <div class="informacao telefone">
            <img
              src="/img/icones/telefone.png"
              :alt="`Telefone`"
            />
            <span>{{ hospital.telefone }}</span>
          </div>
          <button
            class="btn-selecionar"
            @click="selecionarHospital(hospital)"
          >
            Selecionar
          </button>
        </div>
        <div class="mapa">
          <img
            :src="hospital.imagem"
            :alt="`Mapa do ${hospital.nome}`"
          />
        </div>
      </div>
      <p
        v-if="hospitaisFiltrados.length === 0"
        class="nenhum-hospital"
      >
        Nenhum hospital encontrado.
      </p>
    </div>
  </main>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.pagina-hospitais {
  width: 100%;
  min-height: 100vh;
  padding: 12px 24px 40px;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(30px,3.4vw,42px);
  font-weight: 700;
  color: #111111;
}

.barra-pesquisa {
  width: 100%;
  max-width: 302px;
  height: 17px;
  margin: 2vw auto 2vw;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: #f4f4f4;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
}
.barra-pesquisa input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 7px;
  color: #555;
}
.barra-pesquisa input::placeholder {
  color: #999;
}
.lupa img {
  width: 65%;
  height: 65%;
}

.lista-hospitais {
  width: 100%;
  max-width: 304px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.card-hospital {
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 8px 12px 15px;

  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 10px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
}

.informacoes-hospital {
  width: 58%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.informacoes-hospital h2 {
  margin: 0 0 4px;
  font-size:clamp(20px,2.6vw,28px);
  color: #111111;
}

.informacao {
  display: flex;
  flex-direction: column;

  font-size: 6.5px;
  line-height: 1.25;

  color: #333333;
}

.titulo-info {
  color: #0067a8;
  font-weight: 700;
}

.telefone img {
  width: 20px;
  height: 18px;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-top: 1px;
  color: #0067a8;
}

.icone {
  font-size: 7px;
}

.btn-selecionar {
  width: 50px;
  height: 15px;
  padding: 0.1vw 0;
  border: none;
  border-radius: 10px;

  background: #005b96;
  color: white;

  font-size: 6px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
}
.btn-selecionar {
  margin: 1vw 0 0 0;
}

.btn-selecionar:hover {
  background: #004875;
}

.btn-selecionar:active {
  transform: scale(0.97);
}

.mapa {
  width: 118px;
  height: 52px;

  overflow: hidden;
  border-radius: 3px;
  margin: 0 1vw 0 0;
  flex-shrink: 0;
}

.mapa img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}

.nenhum-hospital {
  text-align: center;

  margin-top: 30px;

  font-size: 12px;
  color: #777;
}

@media (min-width: 768px) {
  .barra-pesquisa {
  width: 100%;
  max-width: 702px;
  height: 34px;
  }
  .barra-pesquisa input {
    font-size: 14px;
  }
  .lista-hospitais {
  max-width: 709px;
  gap: 20px;
}
.card-hospital {
  height: 170px;
  padding: 24px 8px 24px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
}
 .informacoes-hospital h2 {
  font-size: 14px;
  font-weight: 700;
}
.informacao {
  font-size: 14px;

}

.titulo-info {
  color: #0067a8;
  font-weight: 700;
}

.telefone {
  flex-direction: row;
  align-items: center;
  gap: 2px;

  margin-top: 1px;

  color: #0067a8;
}

.icone {
  font-size: 14px;
}

.btn-selecionar {
  width: 120px;
  height: 100px;
  font-size: 14px;
}
.mapa {
  width: 200px;
  height: 100px;
}
}
</style>
