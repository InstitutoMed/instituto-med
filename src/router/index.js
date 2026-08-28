import { createRouter, createWebHistory } from 'vue-router'
import { obterSessao } from '../store/usuarios.js'
import FluxogramaView from '@/views/FluxogramaView.vue'
import ProfileView from '@/views/ProfileView.vue'
import CadastroView from '../views/CadastroView.vue'
import LoginView from '@/views/LoginView.vue'
import PainelView from '@/views/PainelView.vue'
import EditProfileView from '@/views/EditProfileView.vue'
import vacinaView from '@/views/vacinaView.vue'

const routes = [
  {
    path: '/',
    redirect: '/entrar'
  },
  {
    path: '/entrar',
    name: 'login',
    component: LoginView,
    meta: { requerAnonimo: true }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/painel',
    name: 'painel',
    component: PainelView,
    meta: { requerAutenticacao: true }
  },
  {
    path: '/profile', 
    name: 'profile',
    component: ProfileView,
    meta: { 
      title: 'Minha conta — Instituto Med',
      requerAutenticacao: true 
    }
  },
  {
    path: '/fluxograma',
    name: 'fluxograma',
    component: FluxogramaView,
    meta: { title: 'Fluxograma Hospitais — Instituto Med' }
  },
    {
    path: '/editprofile',
    name: 'editprofile',
    component: EditProfileView,
    meta: { requerAutenticacao: true }
    },

    {
      path: '/caderneta',
      component: cadernetaView,
      meta: { requerAutenticacao: true }
    },

    {
      path: '/vacina/:id',
      name: 'vacina',
      component: vacinaView,
      meta: { requerAutenticacao: true }
    },

    {
      path: '/agendar',
      component: AgendarView,
      meta: { requerAutenticacao: true }
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const usuarioLogado = obterSessao()

  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta.requerAutenticacao && !usuarioLogado) {
    return { name: 'login' }
  }

  if (to.meta.requerAnonimo && usuarioLogado) {
    return { name: 'painel' }
  }

  return true
})

export default router