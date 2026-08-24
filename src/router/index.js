import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Instituto Med — Sua saúde conectada' }
  },
  {
    path: '/hospitais',
    name: 'hospitais',
    component: () => import('../views/HospitaisView.vue'),
    meta: { title: 'Hospitais parceiros — Instituto Med' }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue'),
    meta: { title: 'Sobre nós — Instituto Med' }
  },
  {
    path: '/conta',
    name: 'conta',
    component: () => import('../views/ContaView.vue'),
    meta: { title: 'Minha conta — Instituto Med' }
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: () => import('../views/EditProfileView.vue'),
    meta: { title: 'Editar perfil — Instituto Med' }
  },
  {
    path: '/fluxograma',
    name: 'fluxograma',
    component: () => import('../views/FluxogramaView.vue'),
    meta: { title: 'Fluxograma — Instituto Med' }
  },
  {
    path: '/consultas',
    name: 'consultas',
    component: () => import('../views/ConsultasView.vue'),
    meta: { title: 'Consultas — Instituto Med' }
  },
  {
    path: '/vacinas',
    name: 'vacinas',
    component: () => import('../views/VacinasView.vue'),
    meta: { title: 'Vacinas — Instituto Med' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 90 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
