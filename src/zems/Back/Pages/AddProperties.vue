<template>
  <div class="add-property-page">
    <SubTitle>Add New Property</SubTitle>

    <form @submit.prevent="submitProperty" class="property-form">
      <!-- Title -->
      <div class="form-group">
        <label for="title">Title</label>
        <InputField v-model="property.title" placeholder="Enter property title" id="title" />
      </div>

      <!-- Location -->
      <div class="form-group">
        <label for="location">Location</label>
        <InputField v-model="property.location" placeholder="Enter property location" id="location" />
      </div>

      <!-- Price -->
      <div class="form-group">
        <label for="price">Price</label>
        <InputField v-model="property.price" type="number" placeholder="Enter property price" id="price" />
      </div>

      <!-- Category -->
      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="property.category" id="category">
          <option disabled value="">Select Category</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Commercial</option>
          <option>Land</option>
        </select>
      </div>

      <!-- Status -->
      <div class="form-group">
        <label for="status">Status</label>
        <select v-model="property.status" id="status">
          <option>Available</option>
          <option>Sold</option>
          <option>Pending</option>
        </select>
      </div>

      <!-- Image URL -->
      <div class="form-group">
        <label for="image">Image URL</label>
        <InputField v-model="property.image" placeholder="Enter image URL" id="image" />
      </div>

      <!-- Video URL -->
      <div class="form-group">
        <label for="video">Video URL</label>
        <InputField v-model="property.video" placeholder="Enter video URL (YouTube, etc.)" id="video" />
      </div>

      <!-- Description -->
      <div class="form-group">
        <label for="description">Description</label>
        <textarea v-model="property.description" placeholder="Write property description" id="description"></textarea>
      </div>

      <!-- Property Features -->
      <div class="form-group">
        <label>Property Features</label>
        <div class="features flex gap-2">
          <label><input type="checkbox" value="Parking" v-model="property.features" /> Parking</label>
          <label><input type="checkbox" value="Garden" v-model="property.features" /> Garden</label>
          <label><input type="checkbox" value="Balcony" v-model="property.features" /> Balcony</label>
          <label><input type="checkbox" value="Elevator" v-model="property.features" /> Elevator</label>
          <label><input type="checkbox" value="Gym" v-model="property.features" /> Gym</label>
          <label><input type="checkbox" value="Swimming Pool" v-model="property.features" /> Swimming Pool</label>
        </div>
      </div>

      <BaseButton type="submit" class="bg-primary text-white mt-4">Add Property</BaseButton>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const property = reactive({
  title: '',
  location: '',
  price: null,
  category: '',
  status: 'Available',
  image: '',
  video: '',
  description: '',
  features: [], // Array to hold selected features
})

const submitProperty = () => {
  if (
    !property.title ||
    !property.location ||
    !property.price ||
    !property.category ||
    !property.image
  ) {
    alert('Please fill all required fields.')
    return
  }

  // Here you can send the data to your API or store it
  console.log('New Property:', { ...property })

  // Reset the form after submission
  property.title = ''
  property.location = ''
  property.price = null
  property.category = ''
  property.status = 'Available'
  property.image = ''
  property.video = ''
  property.description = ''
  property.features = []

  alert('Property added successfully!')
}
</script>
