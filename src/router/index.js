import { createRouter, createWebHistory } from 'vue-router'
import RegisterRestaurantView from '../views/RegisterRestaurantView.vue'
import UpdateRegisterView from '../views/UpdateRegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import('../views/HomeScreen.vue')
  },
  {
    path: '/register-restaurant',
    name: 'register-restaurant',
    component: RegisterRestaurantView
  },
  {
    path: '/update-register',
    name: 'update-register',
    component: UpdateRegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
