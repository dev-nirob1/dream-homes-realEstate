<script setup>
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';
import ContactForm from '../Components/Widget/ContactForm.vue';
import ContactInfo from '../Components/Widget/ContactInfo.vue';
import MapSection from '../Components/Widget/MapSection.vue';

</script>

<template>
  <BreadCrumb name="Contact us"
    image="https://images.unsplash.com/photo-1709715357564-ab64e091ead9?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    
  <div class="contact bg-light">
    <div class="container">
      <div class="medium-2 gap-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </div>

  <section class="container map-section">
    <MapSection />
  </section>

</template>

<style scoped>
.contact {
  padding: 3.75rem 0 8rem 0;
}

.map-section {
  position: relative;
  margin-top: -4rem;
  height: 400px;
  width: 100%;
  padding-bottom: 4rem;
}

.map-section .map {
  height: 100%;
}

@media (min-width: 768px) {
  .map-section {
    height: 600px;
  }
}
</style>
