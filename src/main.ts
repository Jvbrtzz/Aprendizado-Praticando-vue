//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador/indesx'
import { store } from "./store";

createApp(App).use(roteador).use(store).mount('#app')
