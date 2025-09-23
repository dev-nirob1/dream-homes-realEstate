<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <!-- ======== Footer section ======== -->
  <footer class="footer bg-dark text-white">
    <div class="container medium-2 large-4 gap-2 py-1 medium-py-4">
      <!-- Footer logo and contact info -->
      <div class="contact-info">
        <RouterLink to="/" class="logo">
          <BaseImage image="/logo-header.png" alt="Real Estate Logo" />
        </RouterLink>

        <BaseParagraph>
          We connect buyers and sellers with trusted real estate solutions.
          From dream homes to investment properties, we make every transaction simple and transparent.
        </BaseParagraph>

        <div class="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/8801234567890" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>

      </div>

      <!-- Quick navigation links -->
      <div>
        <SubTitle>Quick Links</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="/about">About Us</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/properties">All Properties</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/agents">Our Agents</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/blogs">Blog</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact-us">Contact Us</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- Support / Resources -->
      <div>
        <SubTitle>Resources</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="/buying-guide">Buyer’s Guide</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/selling-guide">Seller’s Guide</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/faq">FAQ</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/terms">Terms & Conditions</RouterLink>
          </ListItem>
        </ul>
      </div>

      <!-- Newsletter section -->
      <div class="newsletter">
        <SubTitle>Newsletter</SubTitle>
        <BaseParagraph>
          Subscribe to get the latest property updates, offers, and real estate insights.
        </BaseParagraph>
        <form class="newsletter-form">
          <InputField type="email" placeholder="Enter your email" required />
          <BaseButton type="submit"><i class="fa-solid fa-paper-plane"></i></BaseButton>
        </form>
      </div>
    </div>

    <!-- Footer bottom copyright -->
    <div class="footer-bottom">
      <BaseParagraph>{{ new Date().getFullYear() }} &copy; All rights reserved by RealEstate, Bangladesh
      </BaseParagraph>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: var(--white-color);
}

.footer .logo img {
  height: 70px;
  width: auto;
}

.footer .social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}
.footer .social-links a{
  border-radius: .25rem;
  background: var(--white-color);
  color: var(--secondary-color);
  padding: 0 .75rem;
}

.footer .sub-title {
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.footer .sub-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 50px;
  background: var(--secondary-color);
}

.footer ul li {
  margin: .75rem 0;
}

.footer ul li a {
  padding: .25rem 0;
  position: relative;
}

.footer ul li a::before {
  content: '➔';
  position: absolute;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  color: var(--white-color);
  transition: all .3s ease-in-out;
}

.footer ul li a:hover::before {
  left: 0;
  opacity: 1;
  color: var(--secondary-color);
  visibility: visible;
}

.footer ul li a:hover {
  color: var(--secondary-color);
  padding-left: 1.25rem;
}

.footer .newsletter-form {
  display: flex;
  align-items: center;
}

.footer .newsletter-form input {
  background: var(--white-color);
  border-radius: .5rem 0 0 .5rem;
  margin: 0;
}

.footer .newsletter-form .btn {
  padding: 1rem 2rem;
  background: var(--secondary-color);
  border-radius: 0 .5rem .5rem 0;
}

.footer-bottom {
  text-align: center;
  padding: 1rem;
  background: rgb(from var(--primary-color)r g b / 5%);
}
</style>

<!-- <style scoped>
.footer {
  color: var(--white-color);
  padding-top: 3rem;
}

.footer .logo img {
  height: 70px;
  width: auto;
}

.footer .sub-title {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer .sub-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2rem;
  height: 1px;
  background-color: var(--white-color);
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

.footer .newsletter input {
  background: var(--white-color);
  border: none;
  border-radius: .25rem 0 0 .25rem;
  margin: 0;
}

.footer .newsletter .btn {
  background: var(--primary-color);
  color: var(--white-color);
  border-radius: 0 .25rem .25rem 0;
  border: none;
  margin: 0;
  padding: 1rem 1.75rem;
}

.newsletter-form {
  display: flex;
  align-items: center;
}

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
  color: var(--dark-color);
}

.footer-bottom a {
  height: 2rem;
  width: 2rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
  border-radius: .25rem;
}

@media (min-width: 768px) {
  .footer .footer-bottom .flex {
    flex-direction: row;
  }
}
</style> -->
