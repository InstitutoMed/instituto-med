import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile', 
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/fluxograma',
      name: 'fluxograma',
      component: () => import('../views/FluxogramaView.vue'),
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: () => import('../views/EditProfileView.vue'),
    }
  ],
})

export default router