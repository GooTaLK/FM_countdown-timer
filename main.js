import setCounter from './modules/setCounter.js'
import { fillDateLAbel } from "./modules/fillDateLabel.js";

const launchDate = {
  month: 12,
  day: 25,
  hour: 0,
  minute: 0,
}

const launch = new Date(
  new Date().getFullYear(),
  launchDate.month - 1,
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

fillDateLAbel(launch)
setFlipCards()
