<script setup>
import { card_slider } from '@/plugins/Sliders';
import SectionTitle from '../Widget/SectionTitle.vue';
import TestimonialCard from '../Widget/TestimonialCard.vue';
import { onMounted } from 'vue';

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Homeowner",
    review: "Buying my dream villa here was a wonderful decision. The helpful team made the entire process smooth and easy.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "Jahid Hossain",
    role: "Investor",
    review: "Professional service and outstanding properties. I was truly impressed with their dedication, attention to detail, and clear communication.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Nabila Rahman",
    role: "Tenant",
    review: "I found the perfect apartment within a week. Their reliable team made renting easy, comfortable, and completely stress free.",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg"
  },
  {
    id: 4,
    name: "Imran Chowdhury",
    role: "First-time Buyer",
    review: "As a first-time buyer, I was nervous, but their team guided me with patience, care, and complete professionalism throughout.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 5,
    name: "Farzana Ahmed",
    role: "Landlord",
    review: "They found reliable tenants for my property quickly. The process was transparent, straightforward, and I felt fully supported the whole time.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 6,
    name: "Rafiq Karim",
    role: "Investor",
    review: "Their market knowledge is outstanding. I received excellent advice, profitable opportunities, and complete confidence with my property investment decisions.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 7,
    name: "Maya Sultana",
    role: "Tenant",
    review: "Securing my rental home was quick and stress free. The friendly staff explained everything clearly and made the process enjoyable.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 8,
    name: "Tanvir Alam",
    role: "Homeowner",
    review: "They listened to my needs carefully and matched me with the perfect home. The entire experience was smooth, professional, and reassuring.",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg"
  },
  {
    id: 9,
    name: "Samira Niaz",
    role: "Buyer",
    review: "I am thrilled with my new property purchase. The expert guidance and honest advice gave me peace of mind and confidence.",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg"
  }
];

onMounted(() => {
  card_slider()
})
</script>

<template>
  <section class="testimonials">
    <div class="container">
      <div class="flex flex-wrap justify-between align-center medium-gap-2 mb-2">
        <SectionTitle title="What Our Clients Say" subTitle="Testimonials" />
        <div class="flex gap-1">
          <BaseButton class="prev"><i class="fa-solid fa-arrow-left"></i></BaseButton>
          <BaseButton class="next"><i class="fa-solid fa-arrow-right"></i></BaseButton>
        </div>
      </div>

      <div class="card-slider">
        <TestimonialCard v-for="review in testimonials" :review="review" :key="review.id" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 3.75rem 0;
}

.card-slider {
  position: relative;
  display: flex;
  gap: 2rem;
  transition: transform .5s ease-in-out;
  overflow-x: hidden;
  padding: 2rem 0;
}

.next,
.prev {
  background: var(--white-color);
  border: 1px solid var(--border-color);
  color: var(--light-color);
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.next:hover,
.prev:hover {
  background: var(--primary-color);
  color: var(--white-color);
  border-color: var(--primary-color);
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
</style>
