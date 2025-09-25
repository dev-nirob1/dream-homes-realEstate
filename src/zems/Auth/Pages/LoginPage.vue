<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="login flex-center">
    <div class="medium-2 align-center gap-2">
      <div class="p-1">
        <BaseTitle class="text-center mb-2">Login To Your Account</BaseTitle>
        <form>
          <label>
            Your Email
            <InputField type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Your Password
            <InputField type="password" placeholder="Enter your password" required />
          </label>
          <BaseButton class="width-full bg-primary">Login</BaseButton>
        </form>
        <RouterLink class="text-right" to="">Forgotten Your Password</RouterLink>
        <div class="text-center">
          <SubTitle class="mt-3">Don't Have An Account?</SubTitle>
          <RouterLink to="/register">Register Here</RouterLink>

        </div>
      </div>
      <div class="image">
        <BaseImage image="/login.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login a:hover {
  color: var(--primary-color);
}
.login .image {
  width: 100%;
  height: 100%;
}

.login .image img {
  width: 100%;
  height: 100%;
}
</style>
