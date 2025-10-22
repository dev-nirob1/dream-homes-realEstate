import DashboardLayout from './Layout/DashboardLayout.vue'
import AddProperties from './Pages/AddProperties.vue'
import AllProperties from './Pages/AllProperties.vue'
import AllUsers from './Pages/AllUsers.vue'
import ContactMessages from './Pages/ContactMessages.vue'
import DashboardHome from './Pages/DashboardHome.vue'
import EditProperty from './Pages/EditProperty.vue'
import ProfileInfo from './Pages/ProfileInfo.vue'
import SettingsPage from './Pages/SettingsPage.vue'
import ViewProperties from './Pages/ViewProperties.vue'

export default [
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: DashboardHome,
      },
      {
        path: 'add-property',
        name: 'add-property',
        component: AddProperties,
      },
      {
        path: 'all-properties',
        name: 'all-properties',
        component: AllProperties,
      },
      {
        path: 'property-details/:slug',
        name: 'property-details',
        component: ViewProperties,
      },
      {
        path: 'edit-property/:slug',
        name: 'edit-property',
        component: EditProperty,
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: ContactMessages,
      },
      {
        path: 'users',
        name: 'users',
        component: AllUsers,
      },
      {
        path: 'profile',
        name: 'profile',
        component: ProfileInfo,
      },
      // {
      //   path: 'settings',
      //   name: 'settings',
      //   component: SettingsPage,
      // },
    ],
  },
]
