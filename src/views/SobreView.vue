<script setup>
import fotoEquipe from '../assets/fotos/medicos.jpg'
import fotoAna from '../assets/fotos/Anajulia.jpg'
import fotoGiovana from '../assets/fotos/giovana.jpg'
import fotoLucas from '../assets/fotos/img - lucas.jpg'
import fotoNicholas from '../assets/fotos/img nicholas.jpg'
import fotoTiago from '../assets/fotos/tiago.jpg'
import iconeContato from '../assets/fotos/contato.jpg'
import iconeEmail from '../assets/fotos/email.jpg'
import iconeTelefone from '../assets/fotos/icontelefone.jpg'
import fotoHanna from '../assets/fotos/fotoHanna.jpg'
</script>

<template>
  <main class="sobrenos">
    <section class="sobreProj">
      <header>
        <h1>Sobre Nós</h1>
      </header>

      <h2 class="sectionTitle">Sobre o Projeto</h2>
      <div class="infoBox">
        <p>
          O Instituto Med é um site criado para facilitar o acesso a saúde publica e privada. Aqui
          você tem acesso a informação e agendamento de atendimentos sem sair de casa!
        </p>
      </div>
    </section>

    <section class="equipe">
      <h2 class="sectionTitle">Sobre a Equipe</h2>

      <div class="equipeContent">
        <img class="equipeFoto" :src="fotoEquipe" alt="Foto da equipe do Instituto Med" />

        <div class="infoBox">
          <p>
            Somos um grupo de estudantes do segundo ano do ensino médio formado para a criação e
            desenvolvimento de um projeto escolar do Instituto Federal Catarinense (IFC).
          </p>
        </div>
      </div>
    </section>

    <section class="dev">
      <h2 class="sectionTitle centered">Desenvolvedores</h2>

      <ul class="devList">
        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoAna" alt="Foto de Ana Júlia Bonfim Moraes" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Ana Júlia Bonfim Moraes</h3>
                <span class="badge">Designer</span>
              </div>
              <p>
                Responsável na criação do design gráfico do site e de sua identidade visual, aliar
                criatividade, funcionalidade e estética.
              </p>
            </div>
          </article>
        </li>

        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoGiovana" alt="Foto de Giovana Letícia Bandoch" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Giovana Letícia Bandoch</h3>
                <span class="badge">Designer</span>
              </div>
              <p>
                Responsável na criação do design gráfico do site e de sua identidade visual, em
                aliar criatividade, funcionalidade e estética.
              </p>
            </div>
          </article>
        </li>

        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoHanna" alt="Foto de Hanna Julia Schroeder" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Hanna Julia Schroeder</h3>
                <span class="badge">Administrador</span>
              </div>
              <p>
                Responsável na criação do modelo lógico do banco de dados, por instalar,
                configurar, gerenciar e otimizar banco de dados.
              </p>
            </div>
          </article>
        </li>

        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoLucas" alt="Foto de Lucas Pereira de Oliveira" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Lucas Pereira de Oliveira</h3>
                <span class="badge">Análista</span>
              </div>
              <p>
                Responsável na criação dos requisitos, em traduzir as necessidades dos usuários de
                software e do sistema.
              </p>
            </div>
          </article>
        </li>

        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoNicholas" alt="Foto de Nicholas Oyafuso" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Nicholas Oyafuso</h3>
                <span class="badge">Pesquisador</span>
              </div>
              <p>
                Responsável na pesquisa e segurança da informação, garantindo a veracidade das
                notícias.
              </p>
            </div>
          </article>
        </li>

        <li class="devCard">
          <article>
            <img class="devAvatar" :src="fotoTiago" alt="Foto de Tiago Cardoso" />
            <div class="devInfo">
              <div class="devHeader">
                <h3>Tiago Cardoso</h3>
                <span class="badge">Projetista</span>
              </div>
              <p>Responsável na criação do modelo conceitual do banco de dados no brModelo.</p>
            </div>
          </article>
        </li>
      </ul>
    </section>

    <footer class="contato">
      <div class="contatoIconWrapper">
        <img class="contatoIcon" :src="iconeContato" alt="Ícone de contato" />
      </div>

      <h2>Contato</h2>

      <address>
        <div class="linha">
          <a href="mailto:institutoMed@gmail.com">Email: institutoMed@gmail.com</a>
        </div>
        <div class="linha">
          <p>Tel: +55 (47) 9 9384-0212</p>
        </div>
      </address>
    </footer>
  </main>
</template>

<style scoped>
.sobrenos {
  --im-blue: #2f6690;
  --im-blue-dark: #1f4864;
  --im-blue-light: #eaf2f8;
  --im-badge-bg: #d9e9f2;
  --im-badge-text: #2f6690;
  --im-text-muted: #4a4a4a;

  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
  color: var(--im-text-dark, #222);
}

.sobrenos h1 {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 2rem;
}

.sectionTitle {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.sectionTitle.centered {
  text-align: center;
  margin-bottom: 2rem;
}

.infoBox {
  border: 1px solid var(--im-blue);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  background: #fff;
  flex: 1;
  box-shadow: 0 6px 16px rgba(47, 102, 144, 0.18);
  transition: box-shadow 0.3s ease;
}

.infoBox:hover {
  box-shadow: 0 8px 22px rgba(47, 102, 144, 0.26);
}

.infoBox p {
  line-height: 1.6;
  color: var(--im-text-muted);
}

.sobreProj {
  margin-bottom: 3rem;
}

.equipe {
  margin-bottom: 3.5rem;
}

.equipeContent {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.equipeFoto {
  width: 220px;
  height: 170px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}

.dev {
  margin-bottom: 3.5rem;
}

.devList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.devCard {
  border: 1px solid #e2e2e2;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

.devCard article {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.devAvatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.devInfo {
  flex: 1;
}

.devHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.4rem;
}

.devHeader h3 {
  font-size: 1.15rem;
  font-weight: 700;
}

.badge {
  background: var(--im-badge-bg);
  color: var(--im-badge-text);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
}

.devInfo p {
  color: var(--im-text-muted);
  line-height: 1.5;
  font-size: 0.95rem;
}

.contato {
  position: relative;
  background: var(--im-blue);
  color: #fff;
  border-radius: 20px;
  padding: 4.5rem 1.5rem 2.5rem;
  text-align: center;
}

.contatoIconWrapper {
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -6.5rem auto 1.25rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.contatoIcon {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
}

.contato h2 {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.contato address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.linha {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.iconInline {
  width: 18px;
  height: 18px;
}

.contato a,
.contato p {
  color: #fff;
  text-decoration: underline;
}

.contato p {
  text-decoration: none;
  margin: 0;
}

@media (max-width: 600px) {
  .sobrenos {
    padding-inline: 1rem;
  }

  .equipeFoto {
    width: 100%;
    height: auto;
  }

  .devCard article {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .devHeader {
    flex-direction: column;
  }

  .contatoIconWrapper {
    width: 120px;
    height: 120px;
  }

  .contatoIcon {
    width: 88px;
    height: 88px;
  }
}
</style>
