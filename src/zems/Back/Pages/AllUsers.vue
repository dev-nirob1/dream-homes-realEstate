<template>
  <div class="users-management">
    <div class="users-content">
      <div class="flex justify-between items-center mb-4">
        <SubTitle>Total Users: {{ users.length }}</SubTitle>
        <InputField placeholder="Search User" v-model="search" />
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

        <TableRow v-for="(user, i) in filteredUsers" :key="user.id">
          <div class="sl">
            <div class="medium-none">SL</div>
            {{ i + 1 }}
          </div>

          <div>
            <div class="medium-none">Name</div>
            {{ user.name }}
          </div>

          <div>
            <div class="medium-none">Image</div>
            <BaseImage :image="user.image" alt="user image" />
          </div>

          <div>
            <div class="medium-none">Email</div>
            {{ user.email }}
          </div>

          <div>
            <div class="medium-none">Role</div>
            {{ user.role }}
          </div>

          <div>
            <div class="medium-none">Member since</div>
            {{ user.joined }}
          </div>

          <div>
            <div class="medium-none">Actions</div>
            <div class="actions flex gap-2">
              <BaseButton class="bg-primary text-white">
                <i class="fa-solid fa-eye"></i>
              </BaseButton>
              <BaseButton class="bg-primary text-white">
                <i class="fa-solid fa-pen"></i>
              </BaseButton>
              <BaseButton class="bg-primary text-white">
                <i class="fa-solid fa-trash"></i>
              </BaseButton>
            </div>
          </div>
        </TableRow>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

// Example dynamic users array
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

// Filtered users for search functionality
const filteredUsers = computed(() => {
  if (!search.value) return users.value
  return users.value.filter(
    (u) =>
      u.name.toLowerCase().includes(search.value.toLowerCase()) ||
      u.email.toLowerCase().includes(search.value.toLowerCase()) ||
      u.role.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
