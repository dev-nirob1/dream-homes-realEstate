<script setup>
</script>

<template>
  <section class="hero">
    <!-- Background image -->
    <div class="bg-image">
      <BaseImage
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop" />
    </div>

    <!-- Overlay content -->
    <div class="overlay flex-center">
      <div class="content">
        <HeroTitle>Find Your Dream Home Today</HeroTitle>
        <BaseParagraph>
          Explore modern apartments, family houses, and luxury villas in the best
          locations. Let us help you discover a place you’ll love to call home.
        </BaseParagraph>
        <div class="flex-center gap-2">
          <BaseButton class="bg-secondary">Browse Properties</BaseButton>
          <BaseButton class="btn-circle"><i class="fa-solid fa-play fa-2x"></i></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  color: var(--white-color);
}

/* Full-screen background image */
.hero .bg-image img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

/* Overlay for darkening the image */
.hero .overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
}

/* Container for content */
.hero .content {
  width: 100%;
  padding: 0 1rem;

}

.hero .content .btn.bg-secondary {
  padding: 1.25rem 2rem;
  border-radius: .5rem;
  background: var(--secondary-color);
  color: var(--white-color);
  font-size: 1.1rem;
}

.hero .image {
  height: 60%;
  width: 80%;
  border: 2px solid var(--secondary-color);
}

.hero .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.hero .btn-circle {
  height: 4.5rem;
  width: 4.5rem;
}
@media (min-width: 768px) {
  .hero .overlay .content {
    max-width: 60%;
  }
}
</style>
