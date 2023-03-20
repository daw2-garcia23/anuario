import { createRouter, createWebHistory } from 'vue-router'
import Anuario from '../views/Anuario.vue'
import TheCard from '../components/InfoAlumnos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Anuario',
      component: Anuario
    },
    {
      path: '/card/:id',
      name: 'card',
      component: TheCard
    }
  ]
})

export default router
