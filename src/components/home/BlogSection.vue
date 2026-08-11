<template>
  <section>
    <div class="blog-head-row">
      <div>
        <span class="eyebrow">Notícias da saúde</span>
        <h2>Fique por dentro do que importa para sua saúde</h2>
      </div>
      <div class="blog-arrows">
        <button aria-label="Anterior" @click="scroll(-1)">←</button>
        <button aria-label="Próximo" @click="scroll(1)">→</button>
      </div>
    </div>

    <div ref="track" class="blog-track">
      <BlogCard v-for="post in posts" :key="post.title" :post="post" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BlogCard from './BlogCard.vue'

import blogHantavirose from '../../assets/img/blog-hantavirose.png'
import blogYpe from '../../assets/img/blog-ype.png'
import blogVitamina from '../../assets/img/blog-vitamina.png'
import blogSono from '../../assets/img/blog-sono.png'

const track = ref(null)
function scroll(dir) {
  track.value?.scrollBy({ left: dir * 280, behavior: 'smooth' })
}

const posts = [
  {
    tag: 'Saúde Pública',
    title: 'Hantavirose: entenda o que é, como acontece...',
    excerpt: 'A hantavirose é uma zoonose viral aguda que pode ser bastante grave.',
    date: '13 de maio de 2026',
    img: blogHantavirose
  },
  {
    tag: 'Saúde Pública',
    title: 'Recolhimento de produtos da marca Ypê é suspende...',
    excerpt: 'Agência identificou "risco à segurança dos produtos".',
    date: '11 de maio de 2026',
    img: blogYpe
  },
  {
    tag: 'Saúde Pública',
    title: 'Vitamina B12: uso exagerado levanta alerta sobre câncer',
    excerpt: 'A vitamina B12 é essencial, mas níveis elevados sem causa aparente podem indicar risco.',
    date: '15 de maio de 2026',
    img: blogVitamina
  },
  {
    tag: 'Saúde Pública',
    title: 'Dormir pouco ou demais pode acelerar envelhecimento',
    excerpt: 'Estudo com quase 900 mil pessoas relacionou hábitos noturnos inadequados a maior mortalidade.',
    date: '13 de maio de 2026',
    img: blogSono
  }
]
</script>

<style scoped>
section{padding-top:0;}
.blog-head-row{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:36px;flex-wrap:wrap;}
.blog-head-row h2{font-size:clamp(24px,2.8vw,32px);color:var(--ink);margin-top:10px;font-weight:700;}
.blog-arrows{display:flex;gap:10px;}
.blog-arrows button{
  width:38px;height:38px;border-radius:50%;background:var(--blue-50);color:var(--blue-700);
  display:flex;align-items:center;justify-content:center;font-size:15px;transition:background .2s ease;
}
.blog-arrows button:hover{background:var(--blue-100);}

.blog-track{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}

@media (max-width:980px){
  .blog-track{grid-template-columns:1fr 1fr;}
}
@media (max-width:720px){
  .blog-track{grid-template-columns:1fr;}
}
</style>
