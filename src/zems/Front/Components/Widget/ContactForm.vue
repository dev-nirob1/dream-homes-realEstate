<script setup>

</script>

<template>
  <section class="form">
    <div class="container">
      <form>
        <div class="medium-2 align-center gap-2">
          <div>
            <label for="name"></label>
            <InputField id="name" type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label for="email"></label>
            <InputField id="email" type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label for="phone"></label>
            <InputField type="tel" id="phone" placeholder="Enter Your Phone Number" />
          </div>
          <div>
            <label for="select-services"></label>
            <SelectDropdown id="select-services">
              <option value="Select Service Type" selected disabled>Select Service Type</option>
              <option value="Property Management">Property Management</option>
              <option value="Mortgage Service">Mortgage Service</option>
              <option value="Consulting Service">Consulting Service</option>
            </SelectDropdown>
          </div>
        </div>
        <div class="my-2">
          <label for="message"></label>
          <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
        </div>
        <BaseButton class="bg-primary">GET A FREE SERVICE</BaseButton>
      </form>
    </div>
  </section>
</template>

<style scoped>
input,
select,
textarea {
  padding: 1rem;
  margin: 0;
  border: none;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
}

input:focus,
textarea:focus {
  outline: none;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
  font-size: .9rem;
}

.form .btn {
  padding: 1.25rem 1.5rem;
  border-radius: .5rem;
  color: var(--white-color);
  margin: 0;
}

</style>
