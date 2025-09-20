<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  }
})
</script>

<template>
  <div class="section-title">
    <SubTitle>{{ subTitle }}</SubTitle>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>

<style>
.section-title .sub-title {
  display: inline-block;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--secondary-color);
  position: relative;
  padding: 0 1.75rem;
}

.section-title .sub-title::before,
.section-title .sub-title::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 20px;
  height: 2px;
  background: var(--secondary-color);
}

.section-title .sub-title::before {
  left: 0;
  transform: translateY(-50%);
}

.section-title .sub-title::after {
  right: 0;
  transform: translateY(-50%);
}
</style>
