import AuthLayout from "./AuthLayout/AuthLayout.vue";
import LoginPage from "./Pages/LoginPage.vue";
import RegisterPage from "./Pages/RegisterPage.vue";

export default [
  {
    path:'/login',
    component: AuthLayout,
    children:[
      {
        path: '',
        name:'login',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterPage
      }
    ]
  }
]
