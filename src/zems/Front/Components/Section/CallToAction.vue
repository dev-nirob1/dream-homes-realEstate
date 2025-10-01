<template>
  <section class="call-to-action">
    <div class="overlay"></div>
    <div class="container">
      <div class="content">
        <BaseTitle>Find Your Dream Home Today</BaseTitle>
        <BaseParagraph>
          Explore our curated listings of premium properties. Whether buying, selling, or renting, we guide you every
          step of the way.
        </BaseParagraph>
        <BaseButton>Get Started</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action {
  color: var(--white-color);
  padding: 5rem 0;
  background:
    linear-gradient(to right, rgb(from var(--dark-color) r g b / 15%),
      rgb(from var(--primary-color) r g b / 10%)),
    url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center / cover no-repeat;
}

.call-to-action .btn {
  padding: 1rem 1.5rem;
  border-radius: .5rem;
  background: var(--primary-color);
  color: var(--white-color);
}

@media(min-width: 768px) {
  .call-to-action .content {
    max-width: 50%;
  }

  .call-to-action .content .title {
    font-size: 2.75rem;
  }
}
</style>
