<script setup>
defineProps({
  stat: {
    type: Object
  }
})
</script>

<template>
  <div :key="stat.id" class="stats-card" :style="{ borderTop: `4px solid ${stat.color}` }">

    <div :style="{ color: stat.color }" class="icon">
      <i :class="stat.icon"></i>
    </div>

    <div class="details">
      <SubTitle>{{ stat.title }}</SubTitle>
      <BaseTitle>{{ stat.value }}</BaseTitle>
      <BaseParagraph :style="{ color: stat.change.includes('-') ? '#ef4444' : '#10b981' }">
        {{ stat.change }} from last month
      </BaseParagraph>
    </div>

  </div>
</template>

<style scoped>
.stats-card {
  padding: 2rem;
  box-shadow: var(--box-shadow);
  border-radius: 1rem;
}

.stats-card .icon {
  text-align: center;
  font-size: 1.75rem;
}

.stats-card .details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .25rem;
}

.stats-card .details p {
  margin: 0;
}
</style>
