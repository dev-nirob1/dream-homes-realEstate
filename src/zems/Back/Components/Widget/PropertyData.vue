<script setup>
defineProps({
  property: {
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
      <div class="medium-none">Title</div>
      {{ property.title }}
    </div>

    <div>
      <div class="medium-none">Image</div>
      <BaseImage :image="property.image" alt="Property Image" />
    </div>

    <div>
      <div class="medium-none">Location</div>
      {{ property.location }}
    </div>

    <div>
      <div class="medium-none">Price</div>
      {{ property.price }}
    </div>

    <div>
      <div class="medium-none">Status</div>
      <span :class="property.status">
        {{ property.status }}
      </span>
    </div>

    <div>
      <div class="medium-none">Actions</div>
      <div class="actions">
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
