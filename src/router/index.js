import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterRestaurantView from '../views/RegisterRestaurantView.vue'
import UpdateRegisterView from '../views/UpdateRegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
