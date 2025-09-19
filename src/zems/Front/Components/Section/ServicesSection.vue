<script setup>
import SectionTitle from '../Widget/SectionTitle.vue';

</script>

<template>
  <section class="services">
    <div class="container">
      <!-- Section Title -->
      <SectionTitle title="Our Services" subTitle="What We Offer" class="mb-2" />

      <!-- Services Grid -->
      <div class="services-grid">
        <div class="service-card">
          <i class="fas fa-home"></i>
          <h4>Property Sales</h4>
          <p>Helping you find and sell properties quickly with expert guidance.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-key"></i>
          <h4>Property Rentals</h4>
          <p>Find your perfect rental property with our curated listings.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-building"></i>
          <h4>Property Management</h4>
          <p>Complete management services for residential and commercial properties.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-chart-line"></i>
          <h4>Investment Consulting</h4>
          <p>Expert advice to help you make smart property investments.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 4rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: var(--white-color);
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-card p {
  font-size: 0.95rem;
  color: var(--text-color);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
</style>
