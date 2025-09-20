
<template>
  <section class="gallery">
    <div class="active-image">
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
    </div>
    <div class="thumbs mt-1">
      <BaseImage class="active-thumb"
        image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
    </div>
  </section>
</template>
<style scoped>
.gallery {
  margin-bottom: 3rem;
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
  border: 3px solid var(--secondary-color);
}

.gallery .thumbs img {
  max-width: 100px;
  height: 63px;
  object-fit: cover;
}

@media (min-width: 768px) {

  .gallery .active-image {
    height: 400px;
  }

  .gallery .thumbs img {
  height: 80px;
}

}
</style>
