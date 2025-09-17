<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer">
    <div class="container medium-2 large-4 gap-2 py-1 medium-py-3">
      <!-- Footer logo and social media links -->
      <div class="contact-info">
        <RouterLink to="" class="logo">
          <BaseImage image="https://www.webpoka.com/front/images/logo-2.png" alt="logo" />
        </RouterLink>

        <BaseParagraph>We are a Bangladeshi software development company delivering innovative web, mobile, and
          enterprise solutions to businesses worldwide.</BaseParagraph>

        <ul>
          <ListItem><span>Location: </span>Home 60, Road 27, Mirpur 12, Dhaka</ListItem>
          <ListItem><span>Email: </span>support@webpoka.com</ListItem>
          <ListItem><span>Phone: </span>
            01941-861014, 09611-648163</ListItem>
        </ul>
      </div>

      <!-- Quick navigation links -->
      <div>
        <SubTitle>Links</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="">Contact Us</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Submit a Ticket</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Visit Knowledge Base</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Support System</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Refund Policy</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Professional Services</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- Buying/Selling Information -->
      <div>
        <SubTitle>Support</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/about">About Us</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/properties">Properties</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/blogs">Blogs</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact-us">Contact</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- image gallery part -->
      <div class="gallery-img">
        <SubTitle>Gallery</SubTitle>
        <div class="all-3 gap-1">
          <div @click="handleOpenModal(i)" v-for="(img, i) in images" :key="img.id">
            <BaseImage :image="img.image" alt="gallery image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <div class="container flex">
        <BaseParagraph>{{ new Date().getFullYear() }} &copy; All rights reserved by Webpoka, Bangladesh</BaseParagraph>
        <div class="social-icon">
          <a href="https://www.facebook.com/webpoka.bd" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.youtube.com/@webpoka" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://wa.me/01941-861014" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>

  </footer>

</template>

<style scoped>
.footer {
  position: relative;
  color: var(--light-color);
  padding-top: 3rem;
}

.footer::after {
  content: '';
  background: url('https://www.webpoka.com/front/images/background/5.jpg') right no-repeat;
  position: absolute;
  top: -400px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

/* Logo Styles */
.footer .logo img {
  height: 70px;
  width: auto;
}

.footer .sub-title {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  color: var(--dark-color)
}

.footer .sub-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2rem;
  height: 1px;
  background-color: var(--dark-color);
}

.footer .contact-info {
  font-size: 1rem;
}

.footer .contact-info ul {
  gap: .5rem;
}

.footer .contact-info span {
  color: var(--highlight-color);
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer ul a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer ul a::before {
  content: ">";
  font-family: monospace;
  transition: all 0.3s ease;
}

.footer .gallery-img img {
  max-width: 120px;
  width: 100%;
}
.footer .gallery-img img:hover {
  cursor: pointer;
  opacity: .7;
}

/* Footer copyright bar*/
.footer .footer-bottom {
  padding: .5rem;
  font-weight: 600;
}

.footer .footer-bottom .flex {
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom .social-icon {
  display: flex;
  gap: .5rem;
}

.footer-bottom a {
  height: 2rem;
  width: 2rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
}

@media (min-width: 768px) {
  .footer .footer-bottom .flex {
    flex-direction: row;
  }
}
</style>
