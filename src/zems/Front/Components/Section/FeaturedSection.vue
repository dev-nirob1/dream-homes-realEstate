<script setup>
const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=996&auto=format&fit=crop",
    title: "Luxury Villa",
    location: "Gulshan 2, Dhaka",
    price: "$450,000"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=996&auto=format&fit=crop",
    title: "Modern Apartment",
    location: "Banani, Dhaka",
    price: "$320,000"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=996&auto=format&fit=crop",
    title: "Cozy Bungalow",
    location: "Dhanmondi, Dhaka",
    price: "$280,000"
  },
];
</script>

<template>
  <section class="featured-properties container">
    <SubTitle>Featured Properties</SubTitle>
    <HeroTitle class="mb-8">Find Your <span class="highlight">Dream Home</span></HeroTitle>

    <div class="properties-grid">
      <div v-for="property in properties" :key="property.id" class="property-card">
        <div class="image-wrapper">
          <BaseImage :image="property.image" :alt="property.title" class="property-image" />
          <div class="overlay">
            <h3>{{ property.title }}</h3>
            <p>{{ property.location }}</p>
            <span class="price">{{ property.price }}</span>
            <button class="btn-primary mt-2">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-properties {
  padding: 6rem 0;
}

.properties-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media(min-width:768px){
  .properties-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(min-width:1024px){
  .properties-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.property-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.property-card:hover {
  transform: translateY(-5px);
}

.image-wrapper {
  position: relative;
}
.property-image{
  height: 100%;
}
.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

.overlay h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
}

.overlay p {
  margin: 0;
  font-size: 0.9rem;
}

.overlay .price {
  font-weight: 600;
  font-size: 1rem;
}

.overlay button {
  align-self: start;
  margin-top: 0.5rem;
}

/* Optional hover effect: increase overlay visibility */
.property-card:hover .overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
}
</style>
