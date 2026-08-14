<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>

       <div class="logo">

      <img src="/src/img/logo 4.png" alt="logo">


       </div>
       <div class="navegacao">
        <RouterLink to="/atendimento">ATENDIMENTO</RouterLink>
        <RouterLink to="/hospitais">HOSPITAIS</RouterLink>
        <RouterLink to="/sobrenos">SOBRE NÓS</RouterLink>
        <RouterLink to="/duvidas">DÚVIDAS</RouterLink>
        <RouterLink to="/caderneta">CADERNETA</RouterLink>

        <RouterLink to="/perfil"><img src="/src/img/user.png" alt=""></RouterLink>



       </div>

    </nav>
  </header>
</template>

<style scoped>

nav {
  width: 100%;
  min-height: 100px;
  background-image: linear-gradient(to right,#a9d6e5,#468faf,#2a71a3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.logo {
  display: flex;
  align-items: center;
  height: 100px;
  gap: 12px;
  flex-shrink: 0;
}

.logo img {
  width: 120px;
  height: 70px;
  object-fit: contain;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: 1px;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.navegacao {
  display: flex;
  align-items: center;
  gap: 35px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: auto;
  white-space: nowrap;
}

.navegacao a {
  position: relative;
  color: white;
  text-decoration: none;
  padding: 10px 0;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.navegacao a:not(:has(img))::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.navegacao a:not(:has(img)):hover::after {
  width: 100%;
}

.navegacao a:hover {
  color: #e8f7fc;
  transform: translateY(-2px);
}

.navegacao a:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border-radius: 50%;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.navegacao a:last-child:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: scale(1.08);
}

.navegacao img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

@media (max-width: 600px) {

  nav {
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 15px;
    gap: 12px;
  }

  .logo {
    height: auto;
    justify-content: center;
    gap: 8px;
  }

  .logo img {
    width: 55px;
    height: 55px;
  }

  .logo h1 {
    font-size: 17px;
    line-height: 1.05;
  }

  .navegacao {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 18px;
    font-size: 0.75rem;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 4px 2px 8px;
    scrollbar-width: none;
  }

  .navegacao::-webkit-scrollbar {
    display: none;
  }

  .navegacao a {
    flex-shrink: 0;
  }

  .navegacao img {
    width: 25px;
    height: 25px;
  }
}

</style>
