import { createRouter, createWebHistory } from 'vue-router'
import RegisterRestaurantView from '../views/RegisterRestaurantView.vue'
import UpdateRegisterView from '../views/UpdateRegisterView.vue'
import UnsubscribeRestaurantView from '../views/UnsubscribeRestaurantView.vue'
import RegisterLoginView from '../views/RegisterLoginView.vue'

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
  },
  {
    path: '/unsubscribe-restaurant',
    name: 'unsubscribe-restaurant',
    component: UnsubscribeRestaurantView
  },
  {
    path: '/register-login',
    name: 'register-login',
    component: RegisterLoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
