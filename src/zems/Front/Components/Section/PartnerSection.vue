<script setup>
const logos = [
  'https://scionassetbd.com/uploads/brands/logo.png',
  'https://scionassetbd.com/uploads/brands/logo.png',
  'https://scionassetbd.com/uploads/brands/logo.png',
  'https://scionassetbd.com/uploads/brands/logo.png',
  'https://scionassetbd.com/uploads/brands/logo.png'
];
</script>

<template>
  <section class="partner-section">
    <div class="marque">
      <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner company logo" class="logo-img" />
    </div>
    <div class="marque">
      <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner company logo" class="logo-img" />
    </div>
  </section>
</template>

<style scoped>
.partner-section {
  padding: 5rem 0;
  background: var(--white-color);
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 2rem;
}
.marque {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  min-width: 100%;
  flex-shrink: 0;
  animation: 30s marque infinite linear;
}
@keyframes marque {

  to {
    transform: translateX(calc(-100% - 2rem));
  }
}
</style>
