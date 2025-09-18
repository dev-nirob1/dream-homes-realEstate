<script setup></script>

<template>
  <section class="about-us-grid container">
    <div class="grid-container">
      <!-- Text Section -->
      <div class="about-text">
        <SubTitle>About Us</SubTitle>
        <HeroTitle>
          We Create <span class="highlight">Dream Homes</span> For Everyone
        </HeroTitle>
        <BaseParagraph>
          Our real estate company focuses on innovative designs, modern living solutions, and trusted service.
          We aim to bring comfort, style, and happiness to every client.
        </BaseParagraph>
        <ul class="about-features">
          <li><i class="fa-solid fa-house"></i> Modern Architecture</li>
          <li><i class="fa-solid fa-handshake-angle"></i> Trusted Service</li>
          <li><i class="fa-solid fa-lightbulb"></i> Smart Living Solutions</li>
        </ul>
        <button class="btn-primary mt-4">Learn More</button>
      </div>

      <!-- Image Section -->
      <div class="about-image-wrapper">
        <BaseImage
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
          alt="About Us"
          class="about-image"
        />
        <!-- Highlight Text Over Image -->
        <div class="image-highlight">
          <h3>12+ Years of Excellence</h3>
          <p>Delivering quality homes with trust and innovation.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-grid {
  padding: 6rem 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media(min-width:1024px){
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}

.about-text SubTitle {
  color: var(--primary-color);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-text HeroTitle {
  font-size: 2rem;
  font-weight: 700;
}

.about-text .hero-title .highlight {
  color: var(--secondary-color);
  position: relative;
}

.about-features li {
  margin-top: .5rem;
}

.about-image-wrapper {
  position: relative;
}

.about-image {
  width: 100%;
  border-radius: 1rem;
  z-index: 1;
}

/* Highlight Box over Image */
.image-highlight {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(255,255,255,0.9);
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  max-width: 250px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  text-align: left;
  z-index: 2;
}

.image-highlight h3 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--primary-color);
}

</style>
