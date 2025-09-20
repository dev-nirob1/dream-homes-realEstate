<script setup>
import GallerySection from '../Components/Section/GallerySection.vue';
import PropertyDesctription from '../Components/Section/PropertyDesctription.vue';
import MapSection from '../Components/Widget/MapSection.vue';
</script>

<template>
  <div class="property-details">
    <div class="container">
      <div class="medium-2 large-5 gap-2">
        <div class="large-span-3">
          <!-- gallery section // todo: slider -->
          <GallerySection />

          <!-- description  -->
<PropertyDesctription/>

          <div>
            <SubTitle class="mb-1">Location</SubTitle>
            <!-- pass dynamic location from here  -->
            <MapSection />
          </div>

        </div>
        <div class="border large-span-2">
          right/bottom
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.property-details {
  padding: 3.75rem 0;
}

.border {
  border: 2px solid red;
}

.map {
  height: 300px;
  width: 100%;
}
</style>
