<template>
  <section class="gallery">
    <div class="active-image">
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
    </div>
    <div class="thumbs mt-1">
      <BaseImage class="active-thumb"
        image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/service/31.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/31.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/33.jpg" />
      <BaseImage image="https://tunatheme.com/tf/html/quarter-preview/quarter/img/img-slide/34.jpg" />
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
  border: 3px solid var(--secondary-color);
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
