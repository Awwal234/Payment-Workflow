import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '../views/successpage/SuccessView.vue'
import BankPage from '../views/pages/BankPage.vue'
import TransferPage from '../views/pages/TransferPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/bank',
      name: 'bank',
      component: BankPage
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferPage
    },
  ]
})

export default router
