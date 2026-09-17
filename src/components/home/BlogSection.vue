<template>
  <section id="noticias">
    <div class="container">
      <div class="blog-head-row">
        <div>
          <span class="eyebrow">Notícias da saúde</span>
          <h2>Fique por dentro do que importa para sua saúde</h2>
        </div>
      </div>

      <div class="blog-track">
        <BlogCard v-for="post in posts" :key="post.title" :post="post" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BlogCard from './BlogCard.vue'

import blogHantavirose from '../../assets/img/blog-hantavirose.png'
import blogYpe from '../../assets/img/blog-ype.png'
import blogVitamina from '../../assets/img/blog-vitamina.png'
import blogSono from '../../assets/img/blog-sono.png'

const posts = [
  {
    tag: 'Saúde Pública',
    title: 'Hantavirose: entenda o que é, como acontece...',
    excerpt: 'A hantavirose é uma zoonose viral aguda que pode ser bastante grave.',
    date: '13 de maio de 2026',
    img: blogHantavirose,
    url: 'https://drconsulta.com/conteudo/hantavirus-entenda-o-que-e-como-acontece-a-transmissao-e-quais-sao-os-sintomas/'
  },
  {
    tag: 'Saúde Pública',
    title: 'Recolhimento de produtos da marca Ypê é suspende...',
    excerpt: 'Agência identificou "risco à segurança dos produtos".',
    date: '11 de maio de 2026',
    img: blogYpe,
    url: 'https://crfms.org.br/alerta-anvisa-suspende-fabricacao-e-determina-recolhimento-de-produtos-da-marca-ype/'
  },
  {
    tag: 'Saúde Pública',
    title: 'Vitamina B12: uso exagerado levanta alerta sobre câncer',
    excerpt: 'A vitamina B12 é essencial, mas níveis elevados sem causa aparente podem indicar risco.',
    date: '15 de maio de 2026',
    img: blogVitamina,
    url: 'https://exame.com/ciencia/vitamina-b12-pode-estar-ligada-ao-cancer-novo-estudo-acende-alerta/'
  },
  {
    tag: 'Saúde Pública',
    title: 'Dormir pouco ou demais pode acelerar envelhecimento',
    excerpt: 'Estudo com quase 900 mil pessoas relacionou hábitos noturnos inadequados a maior mortalidade.',
    date: '13 de maio de 2026',
    img: blogSono,
    url: 'https://g1.globo.com/saude/noticia/2026/05/13/dormir-pouco-ou-demais-pode-acelerar-envelhecimento-do-corpo-e-aumentar-risco-de-doencas-diz-estudo.ghtml'
  }
]
</script>

<style scoped>
section{padding-top:0;padding-left:0;padding-right:0;}
.blog-head-row{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:36px;flex-wrap:wrap;}
.blog-head-row h2{font-size:clamp(24px,2.8vw,32px);color:var(--ink);margin-top:10px;font-weight:700;}
.blog-track{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}

@media (max-width:980px){
  .blog-track{grid-template-columns:1fr 1fr;}
}
@media (max-width:720px){
  .blog-track{grid-template-columns:1fr;}
}
</style>
