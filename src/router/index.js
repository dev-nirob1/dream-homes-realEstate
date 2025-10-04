import authRoutes from '@/zems/Auth/authRoutes'
import dashboard_routes from '@/zems/Back/dashboard_routes'
import front_routes from '@/zems/Front/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes, ...authRoutes, ...dashboard_routes],
})

export default router
