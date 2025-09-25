export const card_slider = () => {
  // DOM Element Selectors
  const cardList = document.querySelectorAll(".testimonial-card");
  const cardContainer = document.querySelector(".card-slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // card width including margin
  let cardIndex = 0;
  const cardWidth = cardList[0].offsetWidth + 32;

  // Next Button Click Handler
  nextBtn.addEventListener("click", () => {
    // calculation for clone
    const cloneIndex = cardIndex % cardList.length;

    if (cardIndex <= cardList.length - 1) {
      // Clone the card and append
      const lastCard = cardList[cloneIndex].cloneNode(true);
      cardContainer.appendChild(lastCard);

      // Scroll to next position
      cardContainer.scrollTo({
        left: cardWidth * (cardIndex + 1),
        behavior: "smooth",
      });
    }
    // Increment position counter
    cardIndex++;
  });

  // Previous Button Click Handler
  prevBtn.addEventListener("click", () => {
    // Only go back if not at first card
    if (cardIndex > 0) {
      // Decrement position counter
      cardIndex--;
      // Scroll to previous position
      cardContainer.scrollTo({
        left: cardWidth * cardIndex,
        behavior: "smooth",
      });
    }
  });
};
