<script setup>
import GallerySection from '../Components/Section/GallerySection.vue';
import PropertyDesctription from '../Components/Section/PropertyDesctription.vue';
import PropertyFeature from '../Components/Section/PropertyFeature.vue';
import VideoSection from '../Components/Section/VideoSection.vue';
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';
import MapSection from '../Components/Widget/MapSection.vue';
</script>

<template>
  <BreadCrumb name="Property Details"
    image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
  <div class="property-details">

    <div class="container">
      <div class="medium-2 large-5 gap-2">
        <div class="large-span-3">
          <!-- gallery section // todo: slider -->
          <GallerySection />
          <!-- description  -->
          <PropertyDesctription />
          <div>
            <SubTitle class="mb-1">Property Features</SubTitle>
            <PropertyFeature />
          </div>
          <div>
            <SubTitle class="mb-1">Property Video</SubTitle>
            <VideoSection />
          </div>

          <div>
            <SubTitle class="mb-1">Location</SubTitle>
            <!-- pass dynamic location from here  -->
            <MapSection />
          </div>

        </div>
        <div class="px-2 right-side large-span-2">
          <form>
            <SubTitle class="mb-1">Message For Booking</SubTitle>
            <InputField class="mb-1" type="text" placeholder="Your Name" required />
            <InputField class="mb-1" type="email" placeholder="Your Email" required />
            <BaseTextArea placeholder="Your Message" required />
            <BaseButton class="bg-secondary">Send Message</BaseButton>
            <div class="my-2">
              <SubTitle class="mb-1">Follow us</SubTitle>
              <div class="flex gap-1 items-center social-link">
                <a href="#">
                  <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#">
                  <span class="fab fa-instagram fa-2x"></span>
                </a>
                <a href="#">
                  <span class="fab fa-twitter fa-2x"></span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.property-details {
  padding: 3.75rem 0;
}

form {
  height: fit-content;
}

.right-side {
  position: sticky;
  top: 7rem;
  height: fit-content;
}

.map {
  height: 300px;
  width: 100%;
}
</style>
