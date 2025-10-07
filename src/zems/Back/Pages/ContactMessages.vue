<template>
  <div class="contacts">
    <div class="medium-2 align-center">
      <SubTitle>Contact Messages: 34</SubTitle>
      <InputField type="text" placeholder="Search by name or service..." />
    </div>

    <BaseTable>
      <TableHeader>
        <div class="sl">SL</div>
        <div>Name</div>
        <div>Email</div>
        <div>Phone</div>
        <div>Service</div>
        <div>Date</div>
        <div>Status</div>
        <div>Actions</div>
      </TableHeader>
      <MessageData v-for="(msg, i) in messages" :i="i" :msg="msg" :key="msg.id" />
    </BaseTable>

    <!-- Modal -->
    <div v-if="selected" class="modal-backdrop" @click.self="selected = null">
      <div class="modal">
        <h3>{{ selected.name }}</h3>
        <p><strong>Email:</strong> {{ selected.email }}</p>
        <p><strong>Phone:</strong> {{ selected.phone }}</p>
        <p><strong>Service:</strong> {{ selected.service }}</p>
        <p><strong>Message:</strong> {{ selected.message }}</p>
        <button class="close" @click="selected = null">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageData from '../Components/Widget/MessageData.vue'

const messages = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    phone: '01700000000',
    service: 'Buy Property',
    message: 'I’m interested in your new listing in Dhanmondi.',
    date: '2025-10-06',
    read: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@email.com',
    phone: '01800000000',
    service: 'Sell Property',
    message: 'Can you help me sell my apartment?',
    date: '2025-10-05',
    read: true,
  },
])
</script>
