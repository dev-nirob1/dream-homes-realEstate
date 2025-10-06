<template>
  <div class="contacts">
    <div class="top-bar">
      <h2>Contact Messages</h2>
      <input
        v-model="search"
        type="text"
        placeholder="Search by name or service..."
        class="search"
      />
    </div>

    <div class="table-container">
      <table class="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="msg in filteredMessages"
            :key="msg.id"
            :class="{ unread: !msg.read }"
          >
            <td>{{ msg.name }}</td>
            <td>{{ msg.email }}</td>
            <td>{{ msg.phone }}</td>
            <td>{{ msg.service }}</td>
            <td>{{ formatDate(msg.date) }}</td>
            <td>
              <span :class="['badge', msg.read ? 'read' : 'unread-badge']">
                {{ msg.read ? 'Read' : 'Unread' }}
              </span>
            </td>
            <td class="actions">
              <button @click="openMessage(msg)">👁️ View</button>
              <button @click="toggleReadStatus(msg.id)">
                {{ msg.read ? 'Mark Unread' : 'Mark Read' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
import { ref, computed } from 'vue'

const search = ref('')
const selected = ref(null)

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

const filteredMessages = computed(() =>
  messages.value.filter(
    (m) =>
      m.name.toLowerCase().includes(search.value.toLowerCase()) ||
      m.service.toLowerCase().includes(search.value.toLowerCase())
  )
)

const openMessage = (msg) => {
  msg.read = true
  selected.value = msg
}

const toggleReadStatus = (id) => {
  const msg = messages.value.find((m) => m.id === id)
  if (msg) msg.read = !msg.read
}

const formatDate = (d) => new Date(d).toLocaleDateString()
</script>

<style scoped>
.contacts {
  padding: 1.5rem;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.search {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  width: 240px;
}
.table-container {
  overflow-x: auto;
}
.contact-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.contact-table th {
  background: #f3f4f6;
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
}
.contact-table td {
  padding: 0.75rem 1rem;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
}
.contact-table tr:hover {
  background: #f9fafb;
}
.unread {
  background: #f5f9ff;
}
.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.4rem;
  font-size: 0.75rem;
}
.read {
  background: #e7f8e7;
  color: #2b8a3e;
}
.unread-badge {
  background: #ffeaea;
  color: #c92a2a;
}
.actions button {
  border: none;
  background: #007bff;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  margin-right: 0.3rem;
  cursor: pointer;
  font-size: 0.8rem;
}
.actions button:hover {
  background: #0056b3;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.modal {
  background: white;
  border-radius: 0.8rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
}
.close {
  margin-top: 1rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}
.close:hover {
  background: #c82333;
}
</style>
