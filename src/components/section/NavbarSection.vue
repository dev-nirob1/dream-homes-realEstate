<script setup>
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false);
const handleHamburger = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  const container = document.querySelector('.container');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      container.classList.add('scrolling')
    } else {
      container.classList.remove('scrolling')
    }
  })
})
</script>

<template>
  <header class="navbar relative bg-dark">
    <div class="container">
      <nav class="flex justify-between align-center">
        <RouterLink to="/" class="logo">
          <BaseImage image="/logo-header.png" alt="logo" />
        </RouterLink>
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <ListItem class="mobile-logo">
            <RouterLink to="/" class="logo">
              <BaseImage image="/logo-header.png" alt="logo" />
            </RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/about">About</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/properties">Properties</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact">Contact</RouterLink>
          </ListItem>
        </ul>

        <div @click="handleHamburger" class="hamburger flex-center">
          <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
        </div>
      </nav>
    </div>
  </header>

</template>

<style scoped>
.navbar {
  padding: .75rem 0;
}

.container {
  transition: all .5s ease-in-out;
}

.container.scrolling {
  background: var(--dark-color);
  border-radius: 1rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 999;
  padding: 0.5rem 1rem;
}

.navbar .logo {
  width: auto;
  height: 60px;
}

.navbar .logo img {
  height: 100%;
}

.nav-links {
  color: var(--white-color);
  background: var(--dark-color);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -100%;
  top: 0;
  width: 0;
  height: 100vh;
  z-index: 1;
  transition: all .3s ease-in-out;
}

.nav-links.active {
  left: 0;
  width: 60vw;
}

.nav-links a {
  display: inline-block;
  padding: .5rem 1rem;
}

.hamburger {
  height: 2rem;
  width: 2rem;
  background: var(--secondary-color);
}

@media (min-width: 768px) {

  .hamburger,
  .mobile-logo {
    display: none;
  }

  .nav-links {
    position: static;
    height: fit-content;
    width: fit-content;
    background: transparent;
    flex-direction: row;
  }
  li a.router-link-exact-active{
    background: var(--primary-color);
    border-radius: .25rem;
  }
}
</style>
