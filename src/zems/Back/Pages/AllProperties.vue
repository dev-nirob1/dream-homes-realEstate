<template>
  <div class="properties-management">
    <div class="properties-content">
      <div class="flex">
        <SubTitle>Total Properties: {{ properties.length }}</SubTitle>
        <InputField placeholder="Search Property" v-model="search" />
      </div>

      <BaseTable>
        <TableHeader>
          <div class="sl">SL</div>
          <div>Title</div>
          <div>Image</div>
          <div>Location</div>
          <div>Price</div>
          <div>Category</div>
          <div>Status</div>
          <div>Actions</div>
        </TableHeader>

        <TableRow
          v-for="(property, i) in filteredProperties"
          :key="property.id"
        >
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
            {{ formatPrice(property.price) }}
          </div>

          <div>
            <div class="medium-none">Category</div>
            {{ property.category }}
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
      </BaseTable>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const properties = ref([
  {
    id: 1,
    title: 'Luxury Apartment in Gulshan',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Gulshan, Dhaka',
    price: 25000000,
    category: 'Apartment',
    status: 'available',
  },
  {
    id: 2,
    title: 'Modern Villa in Uttara',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Uttara, Dhaka',
    price: 35000000,
    category: 'Villa',
    status: 'sold',
  },
  {
    id: 3,
    title: 'Office Space at Banani',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Banani, Dhaka',
    price: 18000000,
    category: 'Commercial',
    status: 'available',
  },
])

const filteredProperties = computed(() => {
  if (!search.value) return properties.value
  return properties.value.filter((p) =>
    p.title.toLowerCase().includes(search.value.toLowerCase()) ||
    p.location.toLowerCase().includes(search.value.toLowerCase())
  )
})

const formatPrice = (price) => {
  return `৳${price.toLocaleString()}`
}
</script>
