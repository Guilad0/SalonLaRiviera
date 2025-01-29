import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaquetesView from '../views/PaquetesView.vue' 
import BodaEstandarView from '@/views/BodaEstandarView.vue'
import BodaGoldView from '@/views/BodaGoldView.vue'
import BodaPlatinumView from '@/views/BodaPlatinumView.vue'
import QuinceEstandarView from '@/views/QuinceEstandarView.vue'
import QuinceGoldView from '@/views/QuinceGoldView.vue'
import QuincePlatinumView from '@/views/QuincePlatinumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/paquetes', 
      name: 'paquetes',
      component: PaquetesView 
    },
    {
      path: '/boda-estandar/:id',
      name: 'bodaEstandar',
      component: BodaEstandarView,       
    },
    
    {
      path: '/bodagold/:id', 
      name: 'bodaGold',
      component: BodaGoldView       
    },
    {
      path: '/bodaplatinum/:id', 
      name: 'bodaPlatinum',
      component: BodaPlatinumView
    },
    {
      path: '/quince-estandar/:id',
      name: 'quinceEstandar',
      component: QuinceEstandarView,       
    },
    
    {
      path: '/quinceGold/:id', 
      name: 'quinceGold',
      component: QuinceGoldView       
    },
    {
      path: '/quincePlatinum/:id', 
      name: 'quincePlatinum',
      component: QuincePlatinumView
    },       
  ]
})

export default router
