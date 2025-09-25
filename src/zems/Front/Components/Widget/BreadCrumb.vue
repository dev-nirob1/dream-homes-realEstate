<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  name: {
    type: String
  },
  image: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section :style="{
    backgroundImage: image
      ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`
      : 'none'
  }" class="breadcrumb">
    <div class="container relative">

      <div class="section-name">{{ name }}</div>
      <ul>
        <ListItem>
          <RouterLink to="/">Home</RouterLink>
        </ListItem>
        <ListItem>{{ name }}</ListItem>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  padding: 5rem 0 3rem;
  background-size: cover;
  background-position: center;
  color: var(--white-color);
}

.section-name {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  z-index: 1;
}

.breadcrumb ul {
  font-size: 1rem;
  display: flex;
  gap: 1rem;
}

.breadcrumb ul li a {
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.breadcrumb ul li a:hover {
  color: var(--primary-color);
}

.breadcrumb ul li:not(:last-child)::after {
  content: ">";
  font-family: monospace;
  padding-left: 1rem;
  color: var(--primary-color);
}

@media (min-width: 768px) {
  .section-name {
    font-size: 3rem;
  }

  .breadcrumb ul {
    font-size: 1.25rem;
  }
}
</style>
