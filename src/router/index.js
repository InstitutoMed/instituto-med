import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '@/views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'perfil',
      component: PerfilView,
    },
  ],
})

export default router
