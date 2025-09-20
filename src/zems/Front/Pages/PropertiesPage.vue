<script setup>
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';
import PropertyCard from '../Components/Widget/PropertyCard.vue';
import SectionTitle from '../Components/Widget/SectionTitle.vue';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop",
    title: "Luxury Villa",
    location: "Gulshan 2, Dhaka",
    price: "450,000"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=996&auto=format&fit=crop",
    title: "Modern Apartment",
    location: "Banani, Dhaka",
    price: "320,000"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=996&auto=format&fit=crop",
    title: "Cozy Bungalow",
    location: "Dhanmondi, Dhaka",
    price: "280,000"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=996&auto=format&fit=crop",
    title: "Elegant Townhouse",
    location: "Uttara, Dhaka",
    price: "350,000"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop",
    title: "Modern Penthouse",
    location: "Gulshan 1, Dhaka",
    price: "600,000"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=996&auto=format&fit=crop",
    title: "Beachfront Villa",
    location: "Cox's Bazar, Bangladesh",
    price: "750,000"
  }
];

</script>

<template>
  <BreadCrumb name="Properties"
    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80" />

  <div class="properties">
    <div class="container">
      <SectionTitle class="mb-2" title="What Our Clients Say" subTitle="All Properties" />
      <div class="medium-2 large-3 gap-2">
        <PropertyCard v-for="item in properties" :item="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.properties {
  padding: 3.75rem 0;
}
</style>
