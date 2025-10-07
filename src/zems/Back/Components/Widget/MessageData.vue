<script setup>
defineProps({
  msg: {
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
      {{ msg.name }}
    </div>
    <div>
      <div class="medium-none">Email</div>
      {{ msg.email }}
    </div>

    <div>
      <div class="medium-none">Phone</div>
      {{ msg.phone }}
    </div>

    <div>
      <div class="medium-none">Service</div>
      {{ msg.service }}
    </div>
    <div>
      <div class="medium-none">Date</div>
      {{ msg.date }}
    </div>
    <div>
      <div class="medium-none">Status</div>
      {{ msg.read ? 'read' : 'unread' }}
    </div>
    <div>
      <div class="medium-none">Actions</div>
      <div class="actions">
        <BaseButton class="bg-primary text-white">
          <i class="fa-solid fa-eye"></i>
        </BaseButton>
        <BaseButton class="bg-primary text-white">
          <i class="fa-solid fa-trash"></i>
        </BaseButton>
      </div>
    </div>
  </TableRow>
</template>
