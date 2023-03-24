import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import PasswordRecovery from "../views/PasswordRecovery.vue"
// import RecoverySent from "../views/RecoverySent.vue"
// import OrderTracking from "../views/OrderTracking.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/passwordrecovery',
    name: 'passwordrecovery',
    component: () => import('../views/PasswordRecovery.vue')
  },
  {
    path: '/recovery',
    name: 'recoverysent',
    component: () => import('../views/RecoverySent.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
