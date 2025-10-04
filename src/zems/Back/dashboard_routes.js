import DashboardHome from "./Pages/DashboardHome.vue";

export default [
  {
    path: '/dashboard',
    component: DashboardHome,
    children: [
      {
        path: '/'
      }
    ]
  }
]
