import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/buttons.css'

createApp(App).use(router).mount('#app')
