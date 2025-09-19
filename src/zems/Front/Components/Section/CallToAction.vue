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
  background: url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')center / cover fixed no-repeat;
}
.call-to-action .btn {
  padding: 1rem 1.5rem;
  border-radius: .5rem;
  background: var(--secondary-color);
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
