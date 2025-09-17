<template>
 <section class="bg-white statistics">
      <div class="container">
        <ul class="small-2 larger-3 justify-center align-center gap-2">
          <!-- Properties Listed -->
          <li>
            <i class="fa-solid fa-building fa-2x"></i>
            <div>
              <h3 class="title">850+</h3>
              <p>Properties Listed</p>
            </div>
          </li>
          <!-- Happy Clients -->
          <li>
            <i class="fa-solid fa-user-check fa-2x"></i>
            <div>
              <h3 class="title">600+</h3>
              <p>Happy Clients</p>
            </div>
          </li>
          <!-- Years of Experience -->
          <li>
            <i class="fa-solid fa-calendar-check fa-2x"></i>
            <div>
              <h3 class="title">12+</h3>
              <p>Years of Excellence</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<style scoped>
.statistics {
  padding: 3.75rem 0;
}

.statistics ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem .5rem;
  border: 1px solid var(--alternative-color);
  border-radius: 2rem 0;
}
.statistics ul i {
  height: 80px;
  width: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  border: 1px dashed var(--alternative-color);
  color: var(--alternative-color);
}
.statistics ul p {
  margin: 0;
}

</style>
