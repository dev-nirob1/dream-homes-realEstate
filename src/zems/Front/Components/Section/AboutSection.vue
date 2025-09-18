<script setup></script>

<template>
  <section class="about">
    <div class="container">
      <div class="medium-2 gap-2">
        <!-- img container  -->
        <div class="image">
          <BaseImage
            image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image" />
        </div>
        <div class="content">
          <SubTitle>About Us</SubTitle>
          <HeroTitle>We Create Dream Homes For Everyone</HeroTitle>
          <BaseParagraph>
            At DreamSpace, we believe a home is more than just walls and a roof — it’s where stories begin.
            With years of expertise in modern architecture and design, we craft living spaces that
            balance comfort, innovation, and elegance.
          </BaseParagraph>
          <BaseButton>Our Services</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  padding: 3.75rem 0;
}

.about .image {
  width: 100%;
  height: 100%;
}

.about .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about .btn {
  background: var(--secondary-color);
  color: var(--white-color);
  border-radius: .5rem;
  padding: 1rem 1.5rem;
}
</style>
