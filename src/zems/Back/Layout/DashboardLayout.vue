<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside :class="['sidebar', { open: sidebarOpen }]">
      <div class="logo">
        <RouterLink to="/">
          <BaseImage image="/logo-header.png" />
        </RouterLink>
        <!-- Mobile close button -->
        <button class="close-btn" @click="toggleSidebar">✕</button>
      </div>
      <nav>
        <router-link to="/dashboard" exact>Dashboard</router-link>
        <router-link to="/dashboard/add-property">Add Property</router-link>
        <router-link to="/dashboard/all-properties">All Properties</router-link>
        <router-link to="/dashboard/contacts">Contacts</router-link>
        <router-link to="/dashboard/users">Users</router-link>
        <router-link to="/dashboard/profile">Profile</router-link>
        <router-link to="/dashboard/settings">Settings</router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main">
      <!-- Top Navbar -->
      <header class="topbar">
        <button class="hamburger" @click="toggleSidebar">☰</button>
        <div class="page-title">
          <h1>{{ pageTitle }}</h1>
        </div>
        <div class="user-menu">
          <span><i class="fa-solid fa-user"></i> Admin</span>
        </div>
      </header>

      <!-- Router View -->
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const sidebarOpen = ref(false);
const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value);

const route = useRoute();
const pageTitle = computed(() => {
  const map = {
    'dashboard-home': 'Dashboard Home',
    'add-property': 'Add Property',
    'all-properties': 'All Properties',
    'property-details': 'Property Details',
    'edit-property': 'Edit Property',
    'users': 'users',
    'contacts': 'Contact Messages',
    'profile': 'Profile',
    'settings': 'Settings',
  };
  return map[route.name] || 'Dashboard';
});
</script>

<style scoped>
/* Layout Grid */
.dashboard {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Sidebar */
.sidebar {
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: scroll;
  width: 240px;
  background: var(--dark-color);
  color: var(--white-color);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: transform 0.3s ease;
}

.sidebar .logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.sidebar .close-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--white-color);
  font-size: 1.2rem;
  cursor: pointer;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar nav a {
  padding: .5rem;
  border-radius: .5rem;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

.sidebar nav a.router-link-exact-active {
  background: var(--primary-color);
}

/* Main Area */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Topbar */
.topbar {
  height: 60px;
  background: var(--white-color);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.topbar .hamburger {
  display: none;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

.topbar .page-title h1 {
  font-size: 1.2rem;
  font-weight: 600;
}


/* Content */
.content {
  flex: 1;
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 1000;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar .close-btn {
    display: block;
  }

  .topbar .hamburger {
    display: block;
  }
}
</style>
