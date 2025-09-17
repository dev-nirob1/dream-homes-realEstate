import MainLayout from './Layout/MainLayout.vue'
import AboutPage from './Pages/AboutPage.vue'
import ContactPage from './Pages/ContactPage.vue'
import HomePage from './Pages/HomePage.vue'
import PropertiesPage from './Pages/PropertiesPage.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutPage,
      },
      {
        path: '/properties',
        name: 'properties',
        component: PropertiesPage,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactPage,
      },
    ],
  },]
