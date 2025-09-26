<script setup>
import SectionTitle from '../Widget/SectionTitle.vue';
const services = [
  {
    id: 1,
    title: "Property Sales",
    icon: "fas fa-home",
    details: "We help clients buy and sell properties efficiently, providing expert guidance throughout the process to ensure smooth transactions and satisfaction."
  },
  {
    id: 2,
    title: "Property Rentals",
    icon: "fas fa-key",
    details: "Our team offers curated rental listings and management services, making it easy for tenants and landlords to connect seamlessly and securely."
  },
  {
    id: 3,
    title: "Property Management",
    icon: "fas fa-building",
    details: "We provide comprehensive management solutions including maintenance, tenant support, and administrative services to keep properties running efficiently."
  },
  {
    id: 4,
    title: "Investment Consulting",
    icon: "fas fa-chart-line",
    details: "Our experts guide investors to make smart real estate decisions, offering insights on market trends, potential returns, and strategic property investments."
  },
  {
    id: 5,
    title: "Interior Design",
    icon: "fas fa-paint-roller",
    details: "We create beautiful, functional living spaces with modern interior design solutions that reflect clients’ tastes and enhance property value."
  },
  {
    id: 6,
    title: "Legal Assistance",
    icon: "fas fa-gavel",
    details: "Our legal team ensures all property transactions comply with regulations, providing contracts, documentation, and advice to protect clients’ interests."
  }
];

</script>

<template>
  <section class="services bg-light">
    <div class="container">
      <!-- Section Title -->
      <SectionTitle title="Our Services" subTitle="What We Offer" class="mb-2" />

      <div class="medium-2 large-3 gap-2">
        <div v-for="item in services" :key="item.id" class="service-card">
          <div class="icon flex-center">
            <i class="fa-2x" :class="item.icon"></i>
          </div>
          <SubTitle>{{ item.title }}</SubTitle>
          <BaseParagraph>{{ item.details }}</BaseParagraph>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 4rem 0;
}

.service-card {
  position: relative;
  cursor: pointer;
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  margin-top: 2rem;
  padding: 4rem 1.5rem 1.5rem;
  border-radius: .75rem;
  text-align: center;
  transition: all 0.5s ease-in-out;
  overflow: visible;
}
.service-card:hover {
 transform: translateY(-.5rem);
}
.service-card .icon {
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  color: var(--white-color);
  background: var(--primary-color);
  z-index: 3;
}
</style>
