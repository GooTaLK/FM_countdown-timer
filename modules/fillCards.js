export default function fillCards({ value, selector, digits = 2 }) {
  const cards = document.querySelectorAll(`${selector} .card`)

  cards.forEach((card, index) => {
    const order =
      Number(card.dataset.cardOrder) ||
      (() => {
        card.dataset.cardOrder = String(index + 1)
        return index + 1
      })()

    if (order === 1 || order === 4) {
      card.textContent = value
        .toString()
        .slice(digits * -1)
        .padStart(digits, '0')
    }

    card.dataset.cardOrder = order + 2 < 5 ? order + 2 : order - 2
  })
}
