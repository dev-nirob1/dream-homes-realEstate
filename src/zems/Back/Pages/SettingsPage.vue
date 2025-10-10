<template>
  <div class="dashboard-pages-settings">
    <h2 class="page-title">Website Pages Settings</h2>

    <!-- Top-level Page Tabs -->
    <ul class="page-tabs">
      <li
        v-for="page in Object.keys(pagesSettings)"
        :key="page"
        :class="{ active: activePage === page }"
        @click="activePage = page"
      >
        {{ formatName(page) }}
      </li>
    </ul>

    <!-- Page Content -->
    <div class="page-content">

      <!-- Meta Section -->
      <div class="section-card">
        <div class="section-header" @click="toggleSection('meta')">
          <h3>Page Meta</h3>
          <span>{{ openSection === 'meta' ? '▼' : '▶' }}</span>
        </div>
        <div v-show="openSection === 'meta'" class="section-content">
          <div class="form-group">
            <label>Breadcrumb</label>
            <input  />
          </div>
          <div class="form-group">
            <label>Page Title</label>
            <input  />
          </div>
        </div>
      </div>

      <!-- Accordion Sections -->
      <div
        v-for="(sectionData, sectionName) in pagesSettings[activePage]"
        :key="sectionName"
        class="section-card"
      >
        <div class="section-header" @click="toggleSection(sectionName)">
          <h3>{{ sectionData.sectionTitle || formatName(sectionName) }}</h3>
          <span>{{ openSection === sectionName ? '▼' : '▶' }}</span>
        </div>

        <div v-show="openSection === sectionName" class="section-content">
          <!-- Editable Section Title -->
          <div class="form-group">
            <label>Section Title</label>
            <input v-model="pagesSettings[activePage][sectionName].sectionTitle" />
          </div>

          <!-- Object Section -->
          <template v-if="isObject(sectionData) && !Array.isArray(sectionData.items) && !Array.isArray(sectionData.members)">
            <div v-for="(value, key) in sectionData"  :key="key" class="form-group">
              <label>{{ formatName(key) }}</label>
              <input v-model="pagesSettings[activePage][sectionName][key]" />
            </div>
          </template>

          <!-- Array Section -->
          <template v-else-if="Array.isArray(sectionData.items) || Array.isArray(sectionData.members)">
            <div
              v-for="(item, index) in sectionData.items || sectionData.members"
              :key="index"
              class="array-item"
            >
              <h4>Item {{ index + 1 }}</h4>
              <div v-for="(value, key) in item" :key="key" class="form-group">
                <label>{{ formatName(key) }}</label>
                <input v-model="item[key]" />
              </div>
              <button
                class="btn-remove"
                @click="removeArrayItem(activePage, sectionName, index)"
              >Remove</button>
            </div>
            <button class="btn-add" @click="addArrayItem(activePage, sectionName)">+ Add Item</button>
          </template>
        </div>
      </div>
    </div>

    <button class="btn-save" @click="saveSettings">Save All Changes</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pagesSettings = ref({})
const activePage = ref('')
const openSection = ref('')

// Demo / fetch data
onMounted(() => {
  pagesSettings.value = {
    homePage: {
      meta: { breadcrumb: 'Home', title: 'Welcome to Our Agency' },
      hero: { sectionTitle: 'Hero Section', heading: 'Welcome!', subheading: 'Find your dream home', image: '/hero.jpg' },
      featuredProperties: { sectionTitle: 'Featured Properties', items: [{ title: 'Luxury Villa', desc: 'Best for you' }] },
      testimonials: { sectionTitle: 'Testimonials', members: [{ name: 'John', message: 'Great service!' }] }
    },
    aboutPage: {
      meta: { breadcrumb: 'About', title: 'About Us' },
      aboutText: { sectionTitle: 'About Section', text: 'We are a trusted real estate agency...' },
      team: { sectionTitle: 'Our Team', members: [{ name: 'Alice', role: 'Agent' }, { name: 'Bob', role: 'Manager' }] }
    },
    servicesPage: {
      meta: { breadcrumb: 'Services', title: 'Our Services' },
      servicesList: { sectionTitle: 'Services List', items: [{ title: 'Buy Property', desc: 'We help you buy' }, { title: 'Sell Property', desc: 'We help you sell' }] }
    },
    contactPage: {
      meta: { breadcrumb: 'Contact', title: 'Get in Touch' },
      contactInfo: { sectionTitle: 'Contact Info', email: 'info@example.com', phone: '+880123456' },
      formFields: { sectionTitle: 'Form Fields', members: [{ field: 'Name' }, { field: 'Email' }, { field: 'Message' }] }
    }
  }

  activePage.value = Object.keys(pagesSettings.value)[0]
  openSection.value = ''
})

// Helpers
const isObject = val => val && typeof val === 'object' && !Array.isArray(val)
const formatName = str => str.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

// Accordion toggle
const toggleSection = sectionName => {
  openSection.value = openSection.value === sectionName ? '' : sectionName
}

// Array management
const addArrayItem = (page, section) => {
  const arr = pagesSettings.value[page][section].items || pagesSettings.value[page][section].members
  if (!arr) return
  const keys = Object.keys(arr[0] || { title: '', desc: '' })
  const newItem = {}
  keys.forEach(k => newItem[k] = '')
  arr.push(newItem)
}

const removeArrayItem = (page, section, index) => {
  const arr = pagesSettings.value[page][section].items || pagesSettings.value[page][section].members
  if (!arr) return
  arr.splice(index, 1)
}

// Save
const saveSettings = () => {
  console.log('Saved Settings:', JSON.stringify(pagesSettings.value, null, 2))
  alert('Settings saved successfully!')
}
</script>

<style scoped>
.dashboard-pages-settings { padding: 20px; background: #f5f5f5; }
.page-title { font-size: 1.8rem; margin-bottom: 20px; color: #333; }

/* Page Tabs */
.page-tabs { display: flex; border-bottom: 2px solid #ddd; margin-bottom: 20px; overflow-x: auto; }
.page-tabs li { padding: 10px 20px; cursor: pointer; white-space: nowrap; }
.page-tabs li.active { border-bottom: 3px solid #4f46e5; font-weight: bold; color: #4f46e5; }

/* Accordion Sections */
.section-card { background: white; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); margin-bottom: 12px; }
.section-header { padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #f0f0f0; font-weight: bold; }
.section-content { padding: 15px 20px; }

.form-group { display: flex; flex-direction: column; margin-bottom: 12px; }
.form-group label { font-weight: 500; margin-bottom: 5px; }
input { padding: 8px 10px; border-radius: 4px; border: 1px solid #ccc; }

.array-item { border: 1px solid #eee; padding: 10px; border-radius: 6px; margin-bottom: 10px; background: #fafafa; }

.btn-add, .btn-remove, .btn-save { padding: 8px 12px; border: none; border-radius: 5px; cursor: pointer; margin-top: 8px; }
.btn-add { background: #28a745; color: white; }
.btn-remove { background: #dc3545; color: white; }
.btn-save { background: #4f46e5; color: white; font-weight: bold; margin-top: 20px; }
</style>
