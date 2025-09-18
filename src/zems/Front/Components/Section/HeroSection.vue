<script setup>
</script>

<template>
  <section class="hero">
    <!-- Background image -->
    <div class="image">
      <BaseImage
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop" />
    </div>

    <!-- Overlay content -->
    <div class="overlay">
      <div class="container content">
        <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>
        <BaseParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, laboriosam. Dolores, alias.
        </BaseParagraph>
        <button class="btn-primary">View Details</button>
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
}

/* Full-screen background image */
.hero .image img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: block;
}

/* Overlay for darkening the image */
.hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

/* Container for content */
.hero .content {
  color: white;
  width: 100%;
  padding: 0 1rem;
}

</style>
