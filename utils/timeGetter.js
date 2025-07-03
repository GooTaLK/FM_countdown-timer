export const getDays = (miliseconds) =>
  Math.floor(miliseconds / (1000 * 60 * 60 * 24))

export const getHours = (miliseconds) =>
  Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

export const getMinutes = (miliseconds) =>
  Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60))

export const getSeconds = (miliseconds) =>
  Math.floor((miliseconds % (1000 * 60)) / 1000)
