<template>
  <section class="breadcrumb-large">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><i class="fa-solid fa-angle-right"></i></li>
          <li><a href="/properties">Properties</a></li>
          <li><i class="fa-solid fa-angle-right"></i></li>
          <li class="active">Luxury Villa</li>
        </ol>
      </nav>
      <h1 class="page-title">Luxury Villa</h1>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb-large {
  background: #f8f9fa;
  padding: 4rem 0 3rem;
  border-bottom: 1px solid #eee;
}

.breadcrumb-large nav ol {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 0.95rem;
  color: #666;
}

.breadcrumb-large nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.breadcrumb-large nav a:hover {
  color: var(--primary-color);
}

.breadcrumb-large nav li.active {
  color: var(--primary-color);
  font-weight: 600;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  color: #111;
}
</style>
