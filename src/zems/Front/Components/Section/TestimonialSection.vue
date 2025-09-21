<script setup>
import SectionTitle from '../Widget/SectionTitle.vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Homeowner",
    message: "Buying my dream villa here was the best decision. The team made everything smooth and easy!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "Jahid Hossain",
    role: "Investor",
    message: "Professional service and amazing properties. I’m very impressed with their attention to detail.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Nabila Rahman",
    role: "Tenant",
    message: "I found the perfect apartment in just a week! Highly recommend them for hassle-free renting.",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg"
  },
];
</script>

<template>
  <section class="testimonials bg-light">
    <div class="container">
      <SectionTitle class="mb-2" title="What Our Clients Say" subTitle="Testimonials" />

      <div class="medium-2 large-3 gap-2">
        <TestimonialCard v-for="review in testimonials" :review="review" :key="review.id" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 3.75rem 0;
}
</style>
