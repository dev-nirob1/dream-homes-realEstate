<script setup>
import BreadCrumb from '../Components/Widget/BreadCrumb.vue';
import PropertyCard from '../Components/Widget/PropertyCard.vue';
import SectionTitle from '../Components/Widget/SectionTitle.vue';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?q=80&w=502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Luxury Villa",
    location: "Gulshan 2, Dhaka",
    price: "450,000"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1758448500872-0d31e905a9e7?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Apartment",
    location: "Banani, Dhaka",
    price: "320,000"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1755604745856-580ace6388cd?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cozy Bungalow",
    location: "Dhanmondi, Dhaka",
    price: "280,000"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1666095375866-eb9e9bbf78ae?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Elegant Townhouse",
    location: "Uttara, Dhaka",
    price: "350,000"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1719415942501-3d54d5d5d1ba?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Penthouse",
    location: "Gulshan 1, Dhaka",
    price: "600,000"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1661569257577-f7451c4b9a5a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Beachfront Villa",
    location: "Cox's Bazar, Bangladesh",
    price: "750,000"
  }
];

</script>

<template>
  <BreadCrumb name="Properties"
    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80" />

  <div class="properties">
    <div class="container">
      <div class="flex flex-wrap align-center justify-between medium-gap-2 mb-2">
        <SectionTitle class="mb-1" title="What Our Clients Say" subTitle="All Properties" />
        <SelectDropdown>
          <option disabled>
            Select One
          </option>
          <option value="completed">
            Completed
          </option>
          <option value="ongoing">
            Ongoing
          </option>
          <option value="upcoming">
            upcoming
          </option>
        </SelectDropdown>
      </div>
      <div class="medium-2 large-3 gap-2">
        <PropertyCard v-for="item in properties" :item="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.properties {
  padding: 3.75rem 0;
}
.properties select {
  max-width: fit-content;
}

.properties .flex {
  flex-direction: column;
  justify-content: start;

}

@media (min-width: 768px) {
  .properties .flex {
    flex-direction: row;
    justify-content: space-between;

  }
}
</style>
