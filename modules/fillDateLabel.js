const cardsHeader = document.querySelector(".cards-header")

export function fillDateLAbel(launchDate) {
  const date = launchDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric"
  })
  const time = launchDate.toLocaleTimeString("en-US")
  
  cardsHeader.innerHTML = 
    `Launching date scheduled for <strong>${date}</strong> at <strong>${time}</strong> hours.`
}
