<template>
  <div class="add-property">

    <form class="property-form">
      <!-- Title -->
      <div class="medium-2 gap-1">
        <InputField placeholder="Enter property title" />
        <InputField placeholder="Enter property location" />
      </div>

      <div class="medium-2 gap-1">
        <InputField placeholder="Enter Price" type="number" />

        <SelectDropdown>
          <option disabled value="" selected>Select Status</option>
          <option>Completed</option>
          <option>Ongoing</option>
          <option>Upcoming</option>
        </SelectDropdown>
      </div>

      <!-- Image URL -->
      <div>
        <InputField placeholder="Enter image URL" id="image" />
      </div>

      <!-- Video URL -->
      <div class="medium-2 gap-2">
        <InputField type="file" />
        <InputField placeholder="Enter video URL (YouTube, etc.)" id="video" />
      </div>

      <!-- Description -->
      <div>
        <BaseTextArea placeholder="Write property description" id="description"></BaseTextArea>
      </div>

      <BaseButton type="submit" class="bg-primary text-white">Next</BaseButton>
    </form>
  </div>
</template>

<style scoped>
.add-property {
  padding: 2rem 0;
}

.add-property .btn {
  padding: 1rem 2rem;
}
</style>
