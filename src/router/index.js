import { createRouter, createWebHistory } from 'vue-router'
import CadastroView from '../views/CadastroView.vue'
import LoginView from '../views/LoginView.vue'
import PainelView from '../views/PainelView.vue'
import { obterSessao } from '../store/usuarios.js'

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/entrar',
    name: 'login',
    component: LoginView
  },
  {
    path: '/painel',
    name: 'painel',
    component: PainelView,
    meta: { requerLogin: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requerLogin && !obterSessao()) {
    return { name: 'login' }
  }
})

export default router
