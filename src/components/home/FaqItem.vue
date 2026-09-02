<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-q" :aria-expanded="isOpen" @click="$emit('toggle')">
      {{ question }}

    </button>
    <div class="faq-a" :style="{ maxHeight: isOpen ? '200px' : '0' }">
      <div class="faq-a-inner">{{ answer }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isOpen: { type: Boolean, default: false }
})
defineEmits(['toggle'])
</script>

<style scoped>
.faq-item{
  border:1px solid var(--blue-100);border-radius:999px;overflow:hidden;
  background:var(--blue-50);align-self:start;
}
.faq-item.open{border-radius:20px;}
.faq-q{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  width:100%;text-align:left;padding:16px 22px;font-weight:600;font-size:14px;color:var(--ink);
}

.faq-item.open .faq-q .plus{transform:rotate(45deg);background:var(--blue-500);color:#fff;}
.faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease;}
.faq-a-inner{padding:0 22px 16px;color:var(--muted);font-size:13.5px;line-height:1.7;}
</style>
