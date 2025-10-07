<script setup>
import { ref } from 'vue'
import UsersData from '../Components/Widget/UsersData.vue';

const users = ref([
  {
    id: 1,
    name: 'Mr. Jack',
    image: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    email: 'jack@gmail.com',
    role: 'Admin',
    joined: '24-05-2022',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    email: 'jane.doe@gmail.com',
    role: 'Editor',
    joined: '12-09-2022',
  },
  {
    id: 3,
    name: 'John Smith',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    email: 'john.smith@gmail.com',
    role: 'User',
    joined: '01-01-2023',
  },
  {
    id: 4,
    name: 'Alice Brown',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    email: 'alice.brown@gmail.com',
    role: 'User',
    joined: '15-03-2023',
  },
  {
    id: 5,
    name: 'Bob White',
    image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    email: 'bob.white@gmail.com',
    role: 'Editor',
    joined: '20-06-2023',
  },
])
</script>

<template>
  <div class="users-management">
    <div class="medium-2 align-center">
      <SubTitle>Total Users: {{ users.length }}</SubTitle>
      <InputField placeholder="Search User" />
    </div>

    <BaseTable>
      <TableHeader>
        <div class="sl">SL</div>
        <div>Name</div>
        <div>Image</div>
        <div>Email</div>
        <div>Role</div>
        <div>Member Since</div>
        <div>Actions</div>
      </TableHeader>

      <UsersData v-for="(user, i) in users" :i="i" :user="user" :key="user.id" />
    </BaseTable>
  </div>
</template>
