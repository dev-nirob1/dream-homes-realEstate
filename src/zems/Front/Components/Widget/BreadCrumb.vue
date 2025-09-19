<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <section class="breadcrumb bg-light">
    <ul class="container">
      <ListItem><a href="/">Home</a></ListItem>
      <ListItem>{{ route.name }}</ListItem>
      <ListItem v-if="route.params.slug">{{ route.params.slug }}</ListItem>
    </ul>
  </section>
</template>

<style scoped>
.breadcrumb {
  padding: 3.75rem 0;
}

.breadcrumb ul {
  font-size: 1rem;
  display: flex;
  /* align-items: center; */
  gap: 1rem;
  padding: 0;
}

.breadcrumb ul li a {
  position: relative;
  text-decoration: none;
  padding-bottom: .5rem;
  transition: all .3s ease-in-out;
}

.breadcrumb ul li a:hover {
  color: var(--secondary-color)
}

.breadcrumb ul li:not(:last-child)::after {
  content: ">";
  font-family: monospace;
  padding-left: 1rem;
  color: var(--secondary-color)
}

@media (min-width: 768px) {
  .breadcrumb ul {
    font-size: 1.25rem;
  }
}
</style>
