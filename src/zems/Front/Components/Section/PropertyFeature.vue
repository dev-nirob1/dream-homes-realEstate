

<template>
  <div class="small-2 large-3 gap-2 mb-2">
    <div class="property-feature">
      <i class="fas fa-ruler-combined"></i>
      <div>
        <SubTitle>Land Size</SubTitle>
        <p>3.5</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-vector-square"></i>
      <div>
        <SubTitle>Flat Size</SubTitle>
        <p>1628</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-building"></i>
      <div>
        <SubTitle>Building Height</SubTitle>
        <p>G + 7</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-compass"></i>
      <div>
        <SubTitle>Facing</SubTitle>
        <p>North</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-car"></i>
      <div>
        <SubTitle>Parking</SubTitle>
        <p>6 Cars</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-elevator"></i> <!-- Font Awesome 6 has this -->
      <div>
        <SubTitle>Elevator Lift</SubTitle>
        <p>Yes</p>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-bolt"></i>
      <div>
        <SubTitle>Generator</SubTitle>
        <BaseParagraph>Yes</BaseParagraph>
      </div>
    </div>
    <div class="property-feature">
      <i class="fas fa-bolt"></i>
      <div>
        <SubTitle>Generator</SubTitle>
        <BaseParagraph>Yes</BaseParagraph>
      </div>
    </div>

    <div class="property-feature">
      <i class="fas fa-video"></i>
      <div>
        <SubTitle>Security</SubTitle>
        <BaseParagraph>CCTV Camera</BaseParagraph>
      </div>
    </div>
  </div>
</template>

<style scoped>
.property-feature {
  display: flex;
  gap: .75rem;
  box-shadow: var(--box-shadow);
  padding: 1rem;
  border-radius: .5rem;
}
.property-feature .sub-title{
  font-size: 1rem;
}
.property-feature p{
  margin: .25rem 0 0 0;
}
.property-feature i{
    font-size: 1.25rem;
    background: var(--secondary-color);
    color: var(--white-color);
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .25rem;
}
</style>
