<script setup>
import { useRoute } from 'vue-router';
import SectionTitle from '../Widget/SectionTitle.vue';
const route = useRoute()
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="medium-2 gap-2">
        <!-- img container  -->
        <div class="image">
          <BaseImage class="img-1"
            image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image" />
          <BaseImage class="img-2"
            image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
            alt="image" />

          <div class="badge">
            <SubTitle>12+ Years of Excellence</SubTitle>
            <BaseParagraph>Delivering quality home with trust and innovation</BaseParagraph>
          </div>
        </div>

        <div class="content">
          <SectionTitle class="mb-1" title="We Create Dream Homes For Everyone" subTitle="About Us" />
          <BaseParagraph>
            At DreamSpace, we believe a home is more than just walls and a roof — it’s where stories begin.
            With years of expertise in modern architecture and design, we craft living spaces that
            balance comfort, innovation, and elegance.
          </BaseParagraph>

          <ul class="all-2 gap-1 mt-2 mb-1">
            <ListItem>
              <i class="fas fa-home"></i>
              Spacious Living Rooms
            </ListItem>
            <ListItem>
              <i class="fas fa-bed"></i>
              Comfortable Bedrooms
            </ListItem>
            <ListItem>
              <i class="fas fa-bath"></i>
              Modern Bathrooms
            </ListItem>
            <ListItem>
              <i class="fas fa-garage"></i>
              Parking Space
            </ListItem>
          </ul>

          <BaseButton v-if="route.name !== 'about'">Our Services</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about {
  padding: 3.75rem 0 5rem 0;
}

.about .image {
  width: 100%;
  height: 100%;
  position: relative;
}

.about .image img {
  object-fit: cover;
}

.about .image .img-1 {
  width: 100%;
  height: 100%;
}

.about .image .img-2 {
  height: 100%;
  width: 100%;
}

.about .badge .sub-title {
  color: var(--primary-color);
}

.about .badge p {
  margin: .25rem 0;
  font-size: 14px;
}

.about ul li {
  background: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: .75rem;
  border-radius: .5rem;
}

.about ul li i {
  color: var(--primary-color);
  font-size: 1.25rem;
}

.about .btn {
  background: var(--secondary-color);
  color: var(--white-color);
  border-radius: .5rem;
  padding: 1rem 1.5rem;
}

@media (min-width: 768px) {
  .about .image .img-1 {
    width: 70%;
    height: 100%;
  }

  .about .image .img-2 {
    position: absolute;
    bottom: -1rem;
    right: 0;
    height: 300px;
    width: 300px;
    border: 2px solid var(--primary-color);
  }

  .about .badge {
    position: absolute;
    right: 1rem;
    top: 2rem;
    width: 220px;
    padding: 1rem;
    border-radius: .5rem;
    background: var(--white-color);
    box-shadow: var(--box-shadow);
  }
}
</style>
