import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { obterSessao } from '../store/usuarios.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Instituto Med — Sua saúde conectada' }
  },
  {
    path: '/atendimento',
    name: 'atendimento',
    component: () => import('../views/AtendimentoView.vue'),
    meta: { title: 'Atendimento — Instituto Med' }
  },
  {
    path: '/hospitais',
    name: 'hospitais',
    component: () => import('../views/HospitaisView.vue'),
    meta: { title: 'Hospitais parceiros — Instituto Med' }
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: () => import('../views/HospitalView.vue'),
    meta: { title: 'Hospital — Instituto Med' }
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
    meta: { title: 'Fluxograma Hospitais — Instituto Med' }
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
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/CadastroView.vue'),
    meta: { title: 'Cadastro — Instituto Med' }
  },
  {
    path: '/entrar',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { title: 'Entrar — Instituto Med' }
  },
  {
    path: '/caderneta',
    name: 'caderneta',
    component: () => import('../views/PainelView.vue'),
    meta: { title: 'Caderneta — Instituto Med' }
  },
  {
    path: '/vacina/:id',
    name: 'vacina',
    component: () => import('../views/VacinaDetalheView.vue'),
    meta: { title: 'Vacina — Instituto Med' }
  },
  {
    path: '/agendar',
    name: 'agendar',
    component: () => import('../views/AgendarView.vue'),
    meta: { title: 'Agendar vacinação — Instituto Med' }
  },
  {
    path: '/painel',
    redirect: { name: 'caderneta' }
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

router.beforeEach((to) => {
  if (to.meta.requerLogin && !obterSessao()) {
    return { name: 'login' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
