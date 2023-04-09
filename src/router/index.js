import { createRouter, createWebHistory } from 'vue-router'
import RegisterRestaurantView from '../views/RegisterRestaurantView.vue'
import UpdateRegisterView from '../views/UpdateRegisterView.vue'
import UnsubscribeRestaurantView from '../views/UnsubscribeRestaurantView.vue'
import RegisterLoginView from '../views/RegisterLoginView.vue'
import ClientHome from '../views/ClientHome.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import HomeRestaurant from '../views/HomeRestaurant.vue'
import RestaurantsList from '../views/RestaurantsList.vue'
const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import('../views/HomeScreen.vue')
  },
  {
    path: '/passwordrecovery',
    name: 'passwordrecovery',
    component: () => import('../views/PasswordRecovery.vue')
  },
  {
    path: '/recovery/:password_param',
    name: 'recovery',
    component: () => import('../views/RecoverySent.vue')
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
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/clienthome',
    name: 'clienthome',
    component: ClientHome
  },
  {
    path: '/order-history',
    name: 'order-history',
    component: () => import('../views/HistoryView.vue')
  },
  {
    path:'/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/history-details/:id/:imgSrc/:name/:date/:total_price/:form_pay/:items+/:status/:prices+/:dishes+/:hour/:estimated_time/:info_dishes/:client_name',
    name: 'history-details',
    component: () => import('../views/HistoryDetailsView.vue')
  },
  {
    path:'/order-tracking',
    name: 'order-tracking',
    component: () => import('../views/OrderTracking.vue')
  },
  {
    path: '/home-restaurant',
    name: 'home-restaurant',
    component: HomeRestaurant
  },
  {
    path: '/checkout/:pratos:subtotal:desconto:restaurante',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/notification-details/:orderId/:clientName/:status',
    name: 'notification-details',
    component: () => import('../views/NotificationDetails.vue')
  },
  
  {
    path: '/restaurants-list',
    name: 'restaurants-list',
    component: RestaurantsList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router