
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


**nasce com os 3 sozinha**. Passos:

1. Crie o arquivo da página em `src/views/`, por exemplo `SobreView.vue`:
   ```vue
   <template>
     <div class="sobre">
       <section>
         <h1>Sobre o Instituto Med</h1>
       </section>
     </div>
   </template>
   ```
2. Registre a rota em `src/router/index.js`, dentro do array `routes`:
   ```js
   {
     path: '/sobre',
     name: 'sobre',
     component: () => import('../views/SobreView.vue'),
     meta: { title: 'Sobre nós — Instituto Med' }
   }
   ```
3. Pronto — `App.vue` já injeta `<AppHeader />` e `<AppFooter />` em volta
   dela automaticamente, e qualquer botão dentro da nova página pode abrir
   o mesmo modal de cadastro com `useBookingModal()`.

## Explicar umas coisinhas

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
