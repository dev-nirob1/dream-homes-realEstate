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
            Your Name
            <InputField type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Your Email
            <InputField type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Your Password
            <InputField type="password" placeholder="Enter your password" required />
          </label>
          <label>
            Confirm Password
            <InputField type="password" placeholder="Re-enter Password" required />
          </label>
          <BaseButton class="width-full bg-secondary">Login</BaseButton>
        </form>
        <RouterLink class="text-right" to="">Forgotten Your Password</RouterLink>
        <div class="text-center">
          <SubTitle class="mt-3">Already Have An Account</SubTitle>
          <RouterLink to="/login">Login</RouterLink>

        </div>
      </div>
      <div class="image">
        <BaseImage image="/login.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
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

