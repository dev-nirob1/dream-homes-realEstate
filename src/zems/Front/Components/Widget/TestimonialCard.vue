<script setup>
defineProps({
  review: {
    type: Object
  }
})
</script>
<template>
  <div class="testimonial-card">
    <i class="fa-solid fa-quote-left fa-2x"></i>
    <div class="flex">
      <BaseParagraph>
        {{ review.review }}
      </BaseParagraph>
    </div>
    <div class="flex align-center gap-1">
      <BaseImage class="height-full width-full" :image="review.avatar" />
      <div>
        <SubTitle>{{ review.name }}</SubTitle>
        <span>{{ review.role }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.testimonial-card {
  border-radius: .75rem;
  padding: 2rem 1.5rem;
  background: var(--white-color);
  border: 1px solid var(--border-color);
  flex: 0 0 100%;
}

.testimonial-card i {
  color: var(--primary-color);
}

.testimonial-card p {
  font-style: italic;
  margin-top: .5rem;
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .testimonial-card {
    flex: 0 0 calc(50% - 1rem);
  }
}

@media (min-width: 992px) {
  .testimonial-card {
    flex: 0 0 calc(33.3% - 1.3rem);
  }
}
</style>
