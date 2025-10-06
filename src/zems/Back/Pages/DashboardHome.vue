<template>
  <div class="dashboard-home">
    <SubTitle>Dashboard Overview</SubTitle>

    <!-- Top Metrics -->
    <div class="metrics-grid">
      <div class="metric-card">
        <span class="metric-label">Total Users</span>
        <span class="metric-value">{{ totalUsers }}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Total Properties</span>
        <span class="metric-value">{{ totalProperties }}</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Total Messages</span>
        <span class="metric-value">{{ totalMessages }}</span>
      </div>
    </div>

    <!-- Latest Properties -->
    <div class="section">
      <h3>Latest Properties</h3>
      <BaseTable>
        <TableHeader>
          <div>Title</div>
          <div>Location</div>
          <div>Price</div>
          <div>Actions</div>
        </TableHeader>
        <TableRow v-for="(property, i) in latestProperties" :key="i">
          <div>{{ property.title }}</div>
          <div>{{ property.location }}</div>
          <div>{{ property.price }}</div>
          <div>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
          </div>
        </TableRow>
      </BaseTable>
    </div>

    <!-- Latest Messages -->
    <div class="section">
      <h3>Latest Messages</h3>
      <BaseTable>
        <TableHeader>
          <div>Name</div>
          <div>Email</div>
          <div>Message</div>
          <div>Actions</div>
        </TableHeader>
        <TableRow v-for="(msg, i) in latestMessages" :key="i">
          <div>{{ msg.name }}</div>
          <div>{{ msg.email }}</div>
          <div>{{ msg.message.slice(0, 50) }}...</div>
          <div>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
          </div>
        </TableRow>
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const totalUsers = 385
const totalProperties = 120
const totalMessages = 32

// Mock latest properties
const latestProperties = reactive([
  { title: 'Luxury Villa', location: 'Dhaka', price: '$120,000' },
  { title: 'Modern Apartment', location: 'Chittagong', price: '$80,000' },
  { title: 'Beach House', location: 'Cox\'s Bazar', price: '$150,000' },
])

// Mock latest messages
const latestMessages = reactive([
  { name: 'Jack Smith', email: 'jack@gmail.com', message: 'I am interested in the property.' },
  { name: 'Alice Brown', email: 'alice@gmail.com', message: 'Can I schedule a visit?' },
  { name: 'Robert Lee', email: 'robert@gmail.com', message: 'Please provide more details.' },
])
</script>

<style scoped>
.dashboard-home {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Top metrics grid */
.metrics-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.metric-card {
  flex: 1 1 200px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.metric-label {
  color: #555;
  font-weight: 600;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

/* Sections */
.section h3 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
}

/* Table spacing */
.BaseTable {
  width: 100%;
}

@media (max-width: 768px) {
  .metrics-grid {
    flex-direction: column;
  }
}
</style>
