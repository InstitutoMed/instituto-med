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
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
