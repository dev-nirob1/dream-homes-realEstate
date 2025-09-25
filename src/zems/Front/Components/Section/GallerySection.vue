<script setup>
import { ref } from 'vue';

const images = [
  'https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg',
  'https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/31.jpg',
  'https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/33.jpg',
  'https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/34.jpg'
]

const activeImage = ref(0)

const handleChangeImage = (i) => {
  activeImage.value = i
}

</script>


<template>
  <section class="gallery">
    <div class="active-image">
      <BaseImage :image="images[activeImage]" />
    </div>
    <div class="thumbs mt-1">
      <BaseImage v-for="(img, i) in images" :key="i" :class="{ 'active-thumb': i == activeImage }" :image="img"
        @click="handleChangeImage(i)" />
    </div>
  </section>
</template>

<style scoped>
.gallery {
  margin-bottom: 2rem;
}

.gallery .active-image {
  width: 100%;
  height: 280px;
}

.gallery .active-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery .thumbs {
  display: flex;
  gap: .75rem;
}

.gallery .thumbs .active-thumb {
  border: 3px solid var(--primary-color);
}

.gallery .thumbs img {
  width: 63px;
  height: 63px;
  object-fit: cover;
  cursor: pointer;
}

@media (min-width: 768px) {

  .gallery .active-image {
    height: 400px;
  }

  .gallery .thumbs img {
    width: 80px;
    height: 80px;
  }

}
</style>
