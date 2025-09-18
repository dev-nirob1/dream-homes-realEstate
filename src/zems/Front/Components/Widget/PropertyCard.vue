<script setup>
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
      <BaseButton>View Details</BaseButton>
    </div>
  </div>
</template>
<style>
.properties-card {
  border-radius: 1rem;
  overflow: hidden;
  height: 450px;
  width: auto;
}

.properties-card .image {
  height: 100%;
  width: 100%;
}

.properties-card .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
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
  color: var(--white-color);
  background: var(--secondary-color);
  border-radius: .5rem;
}
</style>
