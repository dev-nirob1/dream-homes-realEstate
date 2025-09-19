<script setup>
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';
import ContactForm from '../Components/Widget/ContactForm.vue';
import ContactInfo from '../Components/Widget/ContactInfo.vue';
import MapSection from '../Components/Widget/MapSection.vue';

</script>

<template>
  <BreadCrumb />
  <div class="contact bg-light">
    <div class="container">
      <div class="medium-2 gap-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </div>
  <MapSection/>
</template>

<style scoped>
.contact {
  padding: 3.75rem 0 8rem 0;
}
</style>
