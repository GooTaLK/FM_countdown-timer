import setCounter from './modules/setCounter.js'

const launchDate = {
  month: 7,
  day: 17,
  hour: 0,
  minute: 0,
}

const launch = new Date(
  new Date().getFullYear(),
  launchDate.month - 1, // Months are 0-indexed in JavaScript
  launchDate.day,
  launchDate.hour,
  launchDate.minute
)

function alertTimeReached() {
  alert('The launch time has been reached!')
}

function getTimeUntilLaunch() {
  const now = new Date()
  const timeUntilLaunch = launch - now
  return timeUntilLaunch > 0 ? timeUntilLaunch : 0
}

function setFlipCards() {
  const timeUntilLaunch = getTimeUntilLaunch()

  if (timeUntilLaunch === 0) {
    alertTimeReached()
    return
  }

  setCounter(timeUntilLaunch)
}

setFlipCards()
