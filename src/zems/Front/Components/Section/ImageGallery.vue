<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

// import modules from correct paths
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import { ref } from "vue"

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
]

const thumbsSwiper = ref(null)
</script>

<template>
  <div class="gallery">
<Swiper
    :modules="[Navigation, Pagination, Thumbs]"
    :space-between="10"
    :navigation="true"
    :pagination="{ clickable: true }"
    :thumbs="{ swiper: thumbsSwiper }"
    class="main-swiper"
  >
    <SwiperSlide v-for="(img, i) in images" :key="i">
      <img :src="img" alt="Property image" />
    </SwiperSlide>
  </Swiper>

  <Swiper
    @swiper="(swiper) => (thumbsSwiper.value = swiper)"
    :modules="[Thumbs]"
    :space-between="10"
    :slides-per-view="4"
    watch-slides-progress
    class="thumbs-swiper"
  >
    <SwiperSlide v-for="(img, i) in images" :key="i">
      <img :src="img" alt="Thumb" />
    </SwiperSlide>
  </Swiper>
  </div>
</template>

