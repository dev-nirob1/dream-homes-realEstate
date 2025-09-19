<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  item: {
    type: Object
  }
})
</script>
<template>
  <div class="properties-card relative">
    <div class="image">
      <BaseImage :image="item.image" />
    </div>
    <div class="card-content">
      <SubTitle>{{ item.title }}</SubTitle>
      <BaseParagraph><i class="fa-solid fa-location-dot"></i> {{ item.location }}</BaseParagraph>
      <BaseParagraph>${{ item.price }}</BaseParagraph>
      <RouterLink class="btn" :to="`/properties/${id}`">View Details</RouterLink>
    </div>
  </div>
</template>
<style>
.properties-card {
  border-radius: 1rem;
  overflow: hidden;
  height: 450px;
  width: auto;
  cursor:pointer;
}

.properties-card .image {
  height: 100%;
  width: 100%;
}

.properties-card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: .5s ease-in-out;
}

.properties-card .card-content {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  position: absolute;
  inset: 0;
  color: var(--white-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: .5rem;
}

.card-content p {
  margin: 0;
}

.properties-card .btn {
  padding: .75rem 1rem;
  color: var(--white-color);
  background: var(--secondary-color);
  border-radius: .5rem;
}

.properties-card:hover img {
  transform: scale(1.1);

}
</style>
