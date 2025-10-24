import fillCards from './fillCards.js'
import Counter from '../hooks/useCounter.js'
import {
  getDays,
  getHours,
  getMinutes,
  getSeconds,
} from '../utils/timeGetter.js'

export default function setCounter(timeInMilliseconds) {
  const CounterToLaunch = new Counter({ initial: timeInMilliseconds, limit: 0 })
  const restTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  function updateTime() {
    const days = getDays(CounterToLaunch.count)
    const hours = getHours(CounterToLaunch.count)
    const minutes = getMinutes(CounterToLaunch.count)
    const seconds = getSeconds(CounterToLaunch.count)

    if (days !== restTime.days) {
      fillCards({ value: days, selector: '.counter--days' })
      restTime.days = days
    }
    if (hours !== restTime.hours) {
      fillCards({ value: hours, selector: '.counter--hours' })
      restTime.hours = hours
    }
    if (minutes !== restTime.minutes) {
      fillCards({ value: minutes, selector: '.counter--minutes' })
      restTime.minutes = minutes
    }
    if (seconds !== restTime.seconds) {
      fillCards({ value: seconds, selector: '.counter--seconds' })
      restTime.seconds = seconds
    }
  }

  updateTime()

  CounterToLaunch.init(() => {
    if (CounterToLaunch.count <= 0) {
      CounterToLaunch.end()
      alert('The launch time has been reached!')
    } else {
      updateTime()
      CounterToLaunch.subtract(1000)
    }
  })
}
