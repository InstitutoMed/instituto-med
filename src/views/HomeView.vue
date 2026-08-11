<template>
  <div class="home">
    <HeroSection />

    <main>
      <DoctorsSection />
      <PartnersSection />
      <AppPromoSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
    </main>
  </div>
</template>

<script setup>

import HeroSection from '../components/home/HeroSection.vue'
import DoctorsSection from '../components/home/DoctorsSection.vue'
import PartnersSection from '../components/home/PartnersSection.vue'
import AppPromoSection from '../components/home/AppPromoSection.vue'
import FaqSection from '../components/home/FaqSection.vue'
import BlogSection from '../components/home/BlogSection.vue'
import NewsletterSection from '../components/home/NewsletterSection.vue'
</script>
