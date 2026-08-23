
## Estrutura do projeto

```
src/
  assets/
    img/          → imagens reais (logo, médicos, hospitais, blog, etc.)
    styles/        → variáveis de cor, reset e botões globais
  components/
    layout/        → AppHeader e AppFooter (o "casco" do site, vive em App.vue)
    home/           → seções específicas da página inicial
    shared/         → componentes reutilizáveis (BaseButton, BookingModal)
  composables/
    useBookingModal.js → estado compartilhado do modal de cadastro/contato
    useScrollSpy.js     → detecta a seção ativa e o scroll do header
  constants/
    nav.js          → itens do menu de navegação
  router/
    index.js        → rotas + rolagem suave até âncoras (#hospitais, #duvidas, etc.)
  views/
    HomeView.vue    → conteúdo exclusivo da página inicial (sem header/footer)
  App.vue           → layout persistente: AppHeader + <router-view/> + AppFooter + BookingModal
  main.js
```

## Como adicionar uma página nova

Como o header, o footer e o modal já vivem em `App.vue`, uma página nova
**nasce com os três automaticamente**. O projeto já tem a estrutura pronta
como exemplo — a rota `/hospitais` (`src/views/HospitaisView.vue`) já existe
e o menu "Hospitais" já navega até ela — só que **de propósito o conteúdo
dela está vazio**, esperando você preencher. Os passos pra fazer isso (ou
criar qualquer outra página) são:

 Preencha (ou crie) o arquivo da página em `src/views/`, por exemplo
   `SobreView.vue`:
   ```vue
   <template>
     <div class="sobre">
       <section>
         <div class="container">
           <h1>Sobre o Instituto Med</h1>
         </div>
       </section>
     </div>
   </template>
   ```
   Use a classe `.container` (já definida em `assets/styles/base.css`) para
   alinhar o conteúdo com o resto do site — é a mesma classe usada em todas
   as seções da home.
 Registre a rota em `src/router/index.js`, dentro do array `routes`
   (sempre **antes** da rota coringa `/:pathMatch(.*)*`) — a de `/hospitais`
   já está registrada, é só seguir o mesmo padrão para outras páginas:
   ```js
   {
     path: '/sobre',
     name: 'sobre',
     component: () => import('../views/SobreView.vue'),
     meta: { title: 'Sobre nós — Instituto Med' }
   }
   ```
   O `component: () => import(...)` (em vez de um import normal no topo do
   arquivo) faz *lazy-loading*: o código dessa página só é baixado pelo
   navegador quando alguém realmente visita `/sobre`, não no carregamento
   inicial do site.
 Se a página precisa aparecer no menu, adicione em `src/constants/nav.js`
   com `to` (não `hash`) apontando pra rota — o item "Hospitais" já está
   assim:
   ```js
   { id: 'sobre-nos', label: 'Sobre nós', to: '/sobre' }
   ```
   Itens com `hash` (ex: `#duvidas`) rolam até uma seção dentro da própria
   home; itens com `to` (ex: `/hospitais`) navegam para uma página própria.
   O `AppHeader.vue` já sabe renderizar os dois tipos automaticamente.
Pronto — `App.vue` já injeta `<AppHeader />` e `<AppFooter />` em volta
   dela automaticamente, e qualquer botão dentro da nova página pode abrir
   o mesmo modal de cadastro/contato com `useBookingModal()` se precisar.

## ...

- **Vue Router** está configurado com a rota `/` (Home) e redireciona
  qualquer rota desconhecida de volta pra ela. Os itens do menu (Atendimento,
  Hospitais, Sobre nós, Dúvidas) são âncoras (`#hospitais`, `#duvidas`...)
  dentro da própria home; o `scrollBehavior` do router cuida da rolagem
  suave quando a navegação passa pelo router (ex: acessar a URL já com
  `#duvidas` no final).
- O modal de cadastro/contato (`BookingModal.vue`) é compartilhado por vários
  componentes (header, hero, médicos, parceiros, app, rodapé) através do
  composable `useBookingModal`, evitando duplicar estado — e agora existe
  uma única instância dele, declarada em `App.vue`, disponível em qualquer
  página.
- Todas as imagens reais enviadas (logo, foto dos médicos, mockup do app,
  logos dos hospitais parceiros, ícones e fotos das notícias) estão em
  `src/assets/img/` e são importadas normalmente nos componentes — o Vite
  cuida do empacotamento e da otimização no build.
