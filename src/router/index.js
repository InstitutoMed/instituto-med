import { createRouter, createWebHistory } from 'vue-router'
import cadernetaView from '@/views/cadernetaView.vue'
import FormConsulta from '@/views/FormConsulta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

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
      path: '/Form',
      component: FormConsulta,
    },
  ],
})

export default router
