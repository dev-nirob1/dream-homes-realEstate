export const card_slider = () => {
  const card_slider = document.querySelector('.card-slider')
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  let index = 0

  const totalCards = card_slider.children.length

  const getCardWidth = () => {
    const card = card_slider.children[0]
    const style = getComputedStyle(card)
    return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
  }

  const updateCarousel = () => {
    const cardWidth = getCardWidth()
    card_slider.style.transform = `translateX(${-index * cardWidth}px)`
  }

  next.addEventListener('click', () => {
    index = (index + 1) % totalCards
    updateCarousel()
  })

  prev.addEventListener('click', () => {
    index = (index - 1 + totalCards) % totalCards
    updateCarousel()
  })

  window.addEventListener('resize', updateCarousel)
  window.addEventListener('load', updateCarousel)
}
