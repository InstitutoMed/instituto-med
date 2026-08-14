import { createRouter, createWebHistory } from 'vue-router'
import cadernetaView from '@/views/cadernetaView.vue'
import homeView from '@/views/homeView.vue'
import AgendarView from '@/views/agendarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: homeView,
    },
    {
      path: '/caderneta',
      component: cadernetaView,
    },

    {
      path: '/vacina/:id',
      name: 'vacina',
      component: () => import('@/views/vacinaView.vue'),
    },
    {
      path: '/agendar',
      component: AgendarView,
    },
  ],
})

export default router
