<script setup>

</script>

<template>
  <section class="contact-info">
    <div class="container">
      <!-- <div class="map">
          <iframe class="width-full height-full" style="border:0;" allowFullScreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=ireland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> -->

      <div class="info">
        <BaseTitle>Get in Touch</BaseTitle>
        <BaseParagraph> Contact us for inquiries about our software solutions or partnership opportunities.
        </BaseParagraph>
        <ul>
          <ListItem>
            <i class="fa-solid fa-location"></i>
            <div>
              <SubTitle>Location</SubTitle>
              <p>Zems Ltd, Dublin D02 XY56, Ireland</p>
            </div>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-envelope"></i>
            <div>
              <SubTitle>Email</SubTitle>
              <p>support@zems.com</p>
            </div>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-phone"></i>
            <div>
              <SubTitle>Call Us</SubTitle>
              <p>+353050436340, Mon-Fri: 9AM-6PM GMT</p>
            </div>
          </ListItem>
        </ul>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* .contact-info {
  padding: 3.75rem 0;
} */

.contact-info ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info ul li {
  display: flex;
  align-items: start;
  gap: 1rem;
}

.contact-info ul li i {
  padding: 1rem;
  font-size: 1.5rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: .5rem;
}

.contact-info ul li p {
  margin: 0;
  padding-top: .5rem;
}
</style>
