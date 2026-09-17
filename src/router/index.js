import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Instituto Med — Sua saúde conectada' }
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobrenosView.vue'),
    meta: { title: 'Sobre nós — Instituto Med' }
  },
  {
    path: '/atendimento',
    name: 'atendimento',
    component: () => import('../views/FormConsulta.vue'),
    meta: { title: 'Atendimento — Instituto Med' }
  },
  {
    path: '/hospitais',
    name: 'hospitais',
    component: () => import('../views/HospitaisView.vue'),
    meta: { title: 'Hospitais — Instituto Med' }
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: () => import('../views/HospitalView.vue'),
    meta: { title: 'Hospital — Instituto Med' }
  },
  {
    path: '/caderneta',
    name: 'caderneta',
    component: () => import('../views/cadernetaView.vue'),
    meta: { title: 'Caderneta — Instituto Med' }
  },
  {
    path: '/fluxograma',
    name: 'fluxograma',
    component: () => import('../views/FluxogramaView.vue'),
    meta: { title: 'Fluxograma — Instituto Med' }
  },
    {
    path: '/fluxogramahospitais',
    name: 'fluxogramahospitais',
    component: () => import('../views/FluxogramaHospitaisView.vue'),
    meta: { title: 'Fluxograma — Instituto Med' }
  },
  {
    path: '/perfil',
    alias: '/profile',
    name: 'perfil',
    component: () => import('../views/ProfileView.vue'),
    meta: { title: 'Perfil — Instituto Med' }
  },
  {
    path: '/entrar',
    alias: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { title: 'Entrar — Instituto Med' }
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/CadastroView.vue'),
    meta: { title: 'Cadastro — Instituto Med' }
  },
  {
    path: '/painel',
    name: 'painel',
    component: () => import('../views/PainelView.vue'),
    meta: { title: 'Painel — Instituto Med' }
  },
  {
    path: '/editprofile',
    name: 'editar-perfil',
    component: () => import('../views/EditProfileView.vue'),
    meta: { title: 'Editar perfil — Instituto Med' }
  },
  {
    path: '/minhasconsultas',
    name: 'minhas-consultas',
    component: () => import('../views/MinhasConsultasView.vue'),
    meta: { title: 'Minhas consultas — Instituto Med' }
  },
  {
    path: '/minhasvacinas',
    alias: '/minhas-vacinas',
    name: 'minhas-vacinas',
    component: () => import('../views/MinhasVacinasView.vue'),
    meta: { title: 'Minhas vacinas — Instituto Med' }
  },
  {
    path: '/detalhesvacina/:id',
    name: 'detalhe-vacina',
    component: () => import('../views/DetalheVacinaView.vue'),
    meta: { title: 'Detalhes da vacina — Instituto Med' }
  },
  {
    path: '/consultas',
    name: 'consultas',
    component: () => import('../views/FormConsulta.vue'),
    meta: { title: 'Agendar consulta — Instituto Med' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 90 }
    }
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Instituto Med'
  return true
})

export default router
