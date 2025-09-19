<template>
  <div class="section-title">
    <SubTitle>Our Properties</SubTitle>
    <BaseTitle>Explore Your Dream Home With Us</BaseTitle>
  </div>
</template>

<style scoped>

/* Unique subtitle style only */
.sub-title {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2563eb;
  position: relative;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

/* Decorative lines on both sides */
.sub-title::before,
.sub-title::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #4f46e5);
}

.sub-title::before {
  left: 0;
  transform: translateY(-50%);
}

.sub-title::after {
  right: 0;
  transform: translateY(-50%);
}
</style>
