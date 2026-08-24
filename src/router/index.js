import { createRouter, createWebHistory } from 'vue-router'
import PerfilView from '@/views/PerfilView.vue'
import FluxogramaView from '@/views/FluxogramaView.vue'
import EditarPerfilView from '@/views/EditarPerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'perfil',
      component: PerfilView,
    },
    {
      path: '/fluxograma',
      name: 'fluxograma',
      component: FluxogramaView,
    },
    {
      path: '/editarperfil',
      name: 'editarperfil',
      component: EditarPerfilView,
    }
  ],
})

export default router