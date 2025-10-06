<template>
  <div class="users-management">
    <div class="users-content">
      <div class="flex">
        <SubTitle>Total Users: 385</SubTitle>
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
        <TableRow v-for="(data, i) in 5" :key="i">
          <div class="sl">
            <div class="medium-none">Sl</div>
            1
            <!-- {{  }} -->
            <!-- {{ data.id }} -->
          </div>
          <div>
            <div class="medium-none">Name</div>
            Mr. Jack
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Image</div>
            <BaseImage image="https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png" alt="image" />
          </div>
          <div>
            <div class="medium-none">Email</div>
            jack@gmail.com
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Role</div>
            Admin
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Member since</div>
            24-05-2022
            <!-- {{  }} -->
          </div>

          <div>
            <div class="medium-none">Actions</div>
            <div class="actions">
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </div>
          </div>
        </TableRow>
      </BaseTable>
    </div>
  </div>
</template>
