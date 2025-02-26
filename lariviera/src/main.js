import './assets/styles/main.css'; // Este archivo importa base.css internamente
import "@/assets/styles/fonts.css"; // Si tienes un archivo específico de fuentes, mantén esta línea.

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
