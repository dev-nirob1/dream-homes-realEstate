<script setup>
defineProps({
  user: {
    type: Object
  },
  i: {
    type: Number
  }
})
</script>
<template>
  <TableRow>
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
</template>
