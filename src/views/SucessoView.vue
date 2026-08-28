<template>
  <div class="tela">
    <div class="cartao">
      <div class="icone">✓</div>
      <h1>Cadastro realizado!</h1>
      <p>Seus dados foram enviados com sucesso.</p>
      <router-link to="/" class="botao">Voltar ao cadastro</router-link>
    </div>
  </div>
</template>

<style scoped>
.tela {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--azul-gelo);
  padding: 1.5rem;
}

.cartao {
  background: var(--branco);
  border-radius: 1.5rem;
  box-shadow: var(--sombra);
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 380px;
}

.icone {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--azul-medio);
  color: var(--branco);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1.25rem;
}

h1 {
  font-family: var(--fonte-titulo);
  color: var(--azul-profundo);
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
}

p {
  color: var(--cinza-texto);
  margin: 0 0 1.75rem;
}

.botao {
  display: inline-block;
  background: var(--azul-medio);
  color: var(--branco);
  text-decoration: none;
  padding: 0.65rem 2rem;
  border-radius: 999px;
  font-weight: 600;
}

.botao:hover {
  background: var(--azul-profundo);
}
</style>
