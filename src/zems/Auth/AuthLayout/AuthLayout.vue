<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="auth-layout flex-center">
    <RouterView/>
  </div>
</template>
<style scoped>
.auth-layout{
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem ;
  box-shadow: var(--box-shadow);
}

</style>
