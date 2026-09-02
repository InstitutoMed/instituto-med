<template>
  <article class="blog-card">
    <div class="blog-thumb"><img :src="post.img" :alt="post.title"></div>
    <div class="blog-body">
      <span class="blog-tag">{{ post.tag }}</span>
      <h4>{{ post.title }}</h4>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="meta"><img :src="iconAgenda" alt="" class="meta-ic"> {{ post.date }}</div>
    </div>
  </article>
</template>

<script setup>
import iconAgenda from '../../assets/img/icon-agenda.png'

defineProps({
  post: { type: Object, required: true }
})
</script>

<style scoped>
.blog-card{
  border-radius:var(--radius-md);overflow:hidden;background:#fff;
  box-shadow:var(--shadow-soft);transition:transform .2s ease;
}
.blog-card:hover{transform:translateY(-6px);}
.blog-thumb{height:130px;overflow:hidden;}
.blog-thumb img{width:100%;height:100%;object-fit:cover;}
.blog-body{padding:16px 18px 20px;}
.blog-tag{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--blue-500);}
.blog-body h4{margin-top:8px;font-size:14px;color:var(--ink);line-height:1.4;}
.blog-body .excerpt{margin-top:8px;font-size:12px;color:var(--muted);line-height:1.6;}
.blog-body .meta{margin-top:12px;font-size:11px;color:var(--muted);display:flex;align-items:center;gap:5px;}
.meta-ic{width:12px;height:12px;object-fit:contain;}
</style>
