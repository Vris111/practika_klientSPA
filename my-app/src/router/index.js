import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from "@/views/CartView.vue";
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import OrderHistoryView from "@/views/OrderHistoryView.vue";

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/cart', name: 'cart', component: CartView},
  {path: '/login', name: 'login', component: LoginView},
  {path: '/registration', name:'registration', component: RegistrationView},
  {path: '/order_history', name:'order_history', component: OrderHistoryView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
