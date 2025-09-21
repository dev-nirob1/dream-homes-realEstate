<script setup lang="ts">
import SectionTitle from '../Widget/SectionTitle.vue';

</script>

<template>
    <section class="signature-project bg-white">
     <div class="container">
       <div class="medium-2 align-center gap-2">
         <!-- ======== Porject information section ======== -->
         <div>
              <SectionTitle class="mb-2" title="Luxury Duplex in Dhanmondi" subTitle="Signature Project"/>
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
            <div class="image flex gap-1">
                <div class="images">
                    <BaseImage image="https://cdn.pixabay.com/photo/2023/12/11/06/21/kitchen-8442907_640.jpg"
                        alt="Kitchen" />
                    <BaseImage image="https://cdn.pixabay.com/photo/2023/12/30/07/31/living-room-8477525_1280.jpg"
                        alt="Living room" />
                </div>
                <div>
                    <BaseImage image="https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_1280.jpg"
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
    border-left: 2px solid var(--secondary-color);
    margin-bottom: 1rem;
    box-shadow: var(--box-shadow);
}

.signature-project ul li p {
    margin-top: .5rem;
    margin-bottom: 0;
}

.signature-project .image {
    width: 100%;
    height: 100%;
}

.image .images{
  display: flex;
  flex-direction: column;
  gap:1rem;
}

.signature-project .image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
</style>
