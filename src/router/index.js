import { createRouter, createWebHistory } from 'vue-router'
import { obterSessao } from '../store/usuarios.js'

const routes = [
  { path: '/', redirect: '/entrar' },
  { path: '/home', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: 'Instituto Med — Sua saúde conectada', layout: 'institucional' } },
  { path: '/atendimento', name: 'atendimento', component: () => import('../views/AtendimentoView.vue'), meta: { title: 'Atendimento — Instituto Med', layout: 'institucional' } },
  { path: '/hospitais', name: 'hospitais', component: () => import('../views/HospitaisView.vue'), meta: { title: 'Hospitais parceiros — Instituto Med', layout: 'institucional' } },
  { path: '/hospital', name: 'hospital', component: () => import('../views/HospitalView.vue'), meta: { title: 'Hospital — Instituto Med', layout: 'institucional' } },
  { path: '/sobre', name: 'sobre', component: () => import('../views/SobreView.vue'), meta: { title: 'Sobre nós — Instituto Med', layout: 'institucional' } },
  { path: '/consultas', name: 'consultas', component: () => import('../views/ConsultasView.vue'), meta: { title: 'Consultas — Instituto Med', layout: 'institucional' } },
  { path: '/vacinas', name: 'vacinas', component: () => import('../views/VacinasView.vue'), meta: { title: 'Vacinas — Instituto Med', layout: 'institucional' } },
  { path: '/entrar', name: 'login', component: () => import('../views/LoginView.vue'), meta: { title: 'Entrar — Instituto Med', requerAnonimo: true, layout: 'institucional' } },
  { path: '/cadastro', name: 'cadastro', component: () => import('../views/CadastroView.vue'), meta: { title: 'Cadastro — Instituto Med', requerAnonimo: true, layout: 'institucional' } },
  { path: '/painel', name: 'painel', component: () => import('../views/PainelView.vue'), meta: { title: 'Painel — Instituto Med', requerAutenticacao: true } },
  { path: '/profile', alias: '/conta', name: 'profile', component: () => import('../views/ProfileView.vue'), meta: { title: 'Minha conta — Instituto Med', requerAutenticacao: true } },
  { path: '/editprofile', name: 'editprofile', component: () => import('../views/EditProfileView.vue'), meta: { title: 'Editar perfil — Instituto Med', requerAutenticacao: true } },
  { path: '/fluxograma', name: 'fluxograma', component: () => import('../views/FluxogramaView.vue'), meta: { title: 'Fluxograma Hospitais — Instituto Med' } },
  { path: '/caderneta', name: 'caderneta', component: () => import('../views/cadernetaView.vue'), meta: { title: 'Caderneta — Instituto Med', requerAutenticacao: true } },
  { path: '/vacina/:id', name: 'vacina', component: () => import('../views/vacinaView.vue'), meta: { title: 'Vacina — Instituto Med', requerAutenticacao: true } },
  { path: '/agendar', name: 'agendar', component: () => import('../views/AgendarView.vue'), meta: { title: 'Agendar vacinação — Instituto Med', requerAutenticacao: true } },
  { path: '/:pathMatch(.*)*', redirect: '/entrar' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach((to) => {
  const usuarioLogado = obterSessao()
  document.title = to.meta.title || 'Instituto Med'

  if (to.meta.requerAutenticacao && !usuarioLogado) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.meta.requerAnonimo && usuarioLogado) {
    return { name: 'painel' }
  }
  return true
})

export default router
