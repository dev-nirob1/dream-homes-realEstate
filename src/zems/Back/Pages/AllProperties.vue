<script setup>
import { ref } from 'vue'
import PropertyData from '../Components/Widget/PropertyData.vue';

const properties = ref([
  {
    id: 1,
    title: 'Luxury Apartment in Gulshan',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Gulshan, Dhaka',
    price: 25000000,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Modern Villa in Uttara',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Uttara, Dhaka',
    price: 35000000,
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Office Space at Banani',
    image:
      'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
    location: 'Banani, Dhaka',
    price: 18000000,
    status: 'Upcoming',
  },
])
</script>

<template>
  <div class="properties-management">
    <div class="properties-content">
      <div class="medium-2 align-center">
        <SubTitle>Total Properties: {{ properties.length }}</SubTitle>
        <InputField placeholder="Search Property" />
      </div>

      <BaseTable>
        <TableHeader>
          <div class="sl">SL</div>
          <div>Title</div>
          <div>Image</div>
          <div>Location</div>
          <div>Price</div>
          <div>Status</div>
          <div>Actions</div>
        </TableHeader>

        <PropertyData v-for="(property, i) in properties" :i="i" :property="property" :key="property.id" />
        
      </BaseTable>
    </div>
  </div>
</template>
