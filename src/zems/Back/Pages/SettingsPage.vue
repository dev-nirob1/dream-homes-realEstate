<template>
  <div class="settings-container">
    <h2 class="page-title">Website Settings</h2>

    <!-- Tabs -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="['tab-btn', { active: activeTab === tab }]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Hero Section -->
      <div v-if="activeTab === 'Hero Section'">
        <h3>Hero Section Settings</h3>
        <div class="form-grid">
          <div class="form-group">
            <label>Heading</label>
            <input v-model="hero.heading" placeholder="Enter heading" />
          </div>
          <div class="form-group">
            <label>Subheading</label>
            <input v-model="hero.subheading" placeholder="Enter subheading" />
          </div>
          <div class="form-group full">
            <label>Hero Image URL</label>
            <input v-model="hero.image" placeholder="Enter image URL" />
          </div>
        </div>
        <button class="btn">Save Changes</button>
      </div>

      <!-- About Section -->
      <div v-else-if="activeTab === 'About Section'">
        <h3>About Section Settings</h3>
        <div class="form-group full">
          <label>About Text</label>
          <textarea v-model="about.text" rows="5" placeholder="Enter about content"></textarea>
        </div>
        <button class="btn">Save Changes</button>
      </div>

      <!-- Services Section -->
      <div v-else-if="activeTab === 'Services Section'">
        <h3>Services Section Settings</h3>
        <div class="service-grid">
          <div class="service-card" v-for="(service, i) in services" :key="i">
            <label>Service Title</label>
            <input v-model="service.title" placeholder="Enter title" />
            <label>Description</label>
            <textarea v-model="service.desc" rows="3" placeholder="Enter description"></textarea>
          </div>
        </div>
        <button class="btn">Save All</button>
      </div>

      <div v-else>
        <p class="placeholder">Select a tab to edit content.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const tabs = [
  "Hero Section",
  "About Section",
  "Services Section",
  "Featured Section",
  "Testimonials",
  "Partners",
  "CTA Section"
]

const activeTab = ref("Hero Section")

const hero = ref({
  heading: "",
  subheading: "",
  image: ""
})

const about = ref({
  text: ""
})

const services = ref([
  { title: "", desc: "" },
  { title: "", desc: "" },
  { title: "", desc: "" }
])
</script>

<style scoped>
.settings-container {
  padding: 20px;
  background: #f9f9f9;
}

.page-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 10px;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
}
.tab-btn {
  padding: 10px 16px;
  border: none;
  background: #eee;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px 5px 0 0;
  transition: background 0.3s;
}
.tab-btn:hover {
  background: #ddd;
}
.tab-btn.active {
  background: #007bff;
  color: white;
}

/* Content */
.tab-content {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Forms */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group.full {
  grid-column: span 2;
}
.form-group label {
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
}
input,
textarea {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.95rem;
  outline: none;
}
input:focus,
textarea:focus {
  border-color: #007bff;
}

/* Buttons */
.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s;
}
.btn:hover {
  background: #0062cc;
}

/* Services Grid */
.service-grid {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.service-card {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 15px;
}
.placeholder {
  color: #888;
  font-style: italic;
}
</style>
