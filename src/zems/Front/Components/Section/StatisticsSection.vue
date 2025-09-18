<template>
  <section class="statistics bg-white container">
      <ul class="small-2 larger-4 justify-center align-center gap-2">
        <!-- Properties Listed -->
        <ListItem>
          <i class="fa-solid fa-building fa-2x"></i>
          <div>
            <BaseTitle>850+</BaseTitle>
            <BaseParagraph>Properties Listed</BaseParagraph>
          </div>
        </ListItem>
        <!-- Happy Clients -->
        <ListItem>
          <i class="fa-solid fa-user-check fa-2x"></i>
          <div>
            <BaseTitle>600+</BaseTitle>
            <BaseParagraph>Happy Clients</BaseParagraph>
          </div>
        </ListItem>
        <!-- Years of Excellence -->
        <ListItem>
          <i class="fa-solid fa-calendar-check fa-2x"></i>
          <div>
            <BaseTitle>12+</BaseTitle>
            <BaseParagraph>Years of Excellence</BaseParagraph>
          </div>
        </ListItem>
        <!-- Awards Won -->
        <ListItem>
          <i class="fa-solid fa-award fa-2x"></i>
          <div>
            <BaseTitle>15+</BaseTitle>
            <BaseParagraph>Awards Won</BaseParagraph>
          </div>
        </ListItem>
      </ul>
  </section>
</template>

<style scoped>
.statistics {
  position: relative;
  margin-top: -4rem;
}

.statistics ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem .5rem;
  box-shadow: var(--box-shadow);
}

.statistics ul i {
  height: 80px;
  width: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--white-color);
}

.statistics ul p {
  margin: 0;
}
</style>
