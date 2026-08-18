import { createRouter, createWebHistory } from 'vue-router'
import FormConsulta from '@/views/FormConsulta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FormConsulta',
      component: FormConsulta,
    },
  ],
})

export default router
