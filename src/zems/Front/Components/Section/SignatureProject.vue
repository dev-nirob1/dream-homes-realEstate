<script setup>
import SectionTitle from '../Widget/SectionTitle.vue';

</script>

<template>
  <section class="signature-project bg-white">
    <div class="container">
      <div class="medium-2 align-center gap-2">
        <!-- ======== Porject information section ======== -->
        <div>
          <SectionTitle class="mb-2" title="Luxury Duplex in Dhanmondi" subTitle="Signature Project" />
          <BaseParagraph>
            Discover this modern duplex in Dhanmondi, designed for elegant living with comfort, space, and
            privacy in mind.
          </BaseParagraph>
          <ul>
            <ListItem>
              <SubTitle>Lower Floor</SubTitle>
              <BaseParagraph>1 Bed, 2 Baths, Living, Dining, Kitchen & Open Terrace</BaseParagraph>
            </ListItem>
            <ListItem>
              <SubTitle>Upper Floor</SubTitle>
              <BaseParagraph>3 Beds, 3 Baths, Family Lounge & 2 Balconies</BaseParagraph>
            </ListItem>
            <ListItem>
              <SubTitle>Highlights</SubTitle>
              <BaseParagraph>4 Beds, 5 Baths, Private Parking & 24/7 Security</BaseParagraph>
            </ListItem>
          </ul>
        </div>

        <!-- ======== Porject images section ======== -->
        <div class="image all-2 gap-1">
          <div class="images">
            <BaseImage image="https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kitchen" />
                <BaseImage image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Front view" />
          </div>
          <div>
            <BaseImage image="https://images.unsplash.com/photo-1722421492323-eaf9c401befe?q=80&w=502&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Front view" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.signature-project {
  padding: 3.75rem 0;
}

.signature-project ul {
  margin: 2rem 0;
}

.signature-project ul li {
  background-color: var(--white-color);
  border-radius: .75rem;
  padding: .75rem 0 .75rem 1rem;
  border-left: 2px solid var(--primary-color);
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
}

.signature-project ul li p {
  margin-top: .5rem;
  margin-bottom: 0;
}

.image .images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
