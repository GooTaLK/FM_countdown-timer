const CounterParams = {
  initial: 0,
  limit: 100,
  interval: 1000,
}

export default class Counter {
  #interval
  #finishCounterId = null

  constructor({
    initial = CounterParams.initial,
    limit = CounterParams.limit,
    interval = CounterParams.interval,
  } = CounterParams) {
    this.count = initial
    this.limit = limit
    this.#interval = interval
  }

  add(n = 1) {
    this.count + n === this.limit
      ? (this.count = this.count + n - this.limit)
      : (this.count = this.count + n)
  }
  subtract(n = 1) {
    this.count - n < 0
      ? (this.count = this.count - n + this.limit)
      : (this.count = this.count - n)
  }
  init(callback = () => null) {
    if (this.#finishCounterId !== null) clearInterval(this.#finishCounterId)
    this.#finishCounterId = setInterval(() => {
      callback()
    }, this.#interval)
  }
  log() {
    console.log(this)
  }
  end() {
    clearInterval(this.#finishCounterId)
  }

  get interval() {
    return this.#interval
  }
}
