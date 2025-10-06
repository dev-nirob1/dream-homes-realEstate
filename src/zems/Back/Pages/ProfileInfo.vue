<template>
  <div class="profile-page">
    <SubTitle>My Profile</SubTitle>

    <div class="profile-card">
      <!-- Profile Image -->
      <div class="profile-image">
        <BaseImage :image="profile.image" alt="Profile Picture" />
      </div>

      <!-- Profile Info -->
      <div class="profile-info">
        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">{{ profile.name }}</span>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">{{ profile.email }}</span>
        </div>
        <div class="info-row">
          <span class="label">Phone:</span>
          <span class="value">{{ profile.phone }}</span>
        </div>
        <div class="info-row">
          <span class="label">Role:</span>
          <span class="value">{{ profile.role }}</span>
        </div>
        <div class="info-row">
          <span class="label">Member Since:</span>
          <span class="value">{{ profile.joined }}</span>
        </div>

        <BaseButton @click="goToUpdateProfile" class="bg-primary text-white mt-4">
          Update Profile
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const profile = reactive({
  name: 'Admin User',
  email: 'admin@example.com',
  phone: '017XXXXXXXX',
  role: 'Admin',
  joined: '01-01-2022',
  image: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
})

const goToUpdateProfile = () => {
  router.push('/dashboard/profile/edit') // Or open modal
}
</script>

<style scoped>
.profile-page {
  padding: 2rem;
}

.profile-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

@media (min-width: 768px) {
  .profile-card {
    flex-direction: row;
    align-items: center;
  }
}

/* Profile Image */
.profile-image {
  flex: 0 0 180px;
  display: flex;
  justify-content: center;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #4f46e5;
}

/* Profile Info */
.profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.info-row .label {
  font-weight: 600;
  color: #555;
}

.info-row .value {
  color: #333;
}

/* Button spacing */
.profile-info button {
  align-self: flex-start;
  padding: 0.5rem 1.25rem;
}
</style>
