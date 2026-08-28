import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile', 
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
        meta: { title: 'Minha conta — Instituto Med' }
    },
    {
      path: '/fluxograma',
      name: 'fluxograma',
      component: () => import('../views/FluxogramaView.vue'),
         meta: { title: 'Fluxograma Hospitais — Instituto Med' }
     
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: () => import('../views/EditProfileView.vue'),
         meta: { title: 'Editar conta — Instituto Med' }
    }
  ],
})

export default router