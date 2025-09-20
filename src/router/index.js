import authRoutes from '@/zems/Auth/authRoutes'
import front_routes from '@/zems/Front/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes, ...authRoutes],
})

export default router
