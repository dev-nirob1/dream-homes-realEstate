<script setup>
import AboutSection from '../Components/Section/AboutSection.vue';
import CallToAction from '../Components/Section/CallToAction.vue';
import ServicesSection from '../Components/Section/ServicesSection.vue';
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';

</script>

<template>
  <BreadCrumb name="About Us"
    image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80" />
  <AboutSection />
  <ServicesSection />
  <CallToAction />
</template>
