const isRectangle = require('./isRectangle')

const countRectangles = (array) => {
  let result = 0

  const processPoint = (points, others) => {
    if (points.length === 4) {
      const isRect = isRectangle(points)
      if (isRect) {
        result++
      }

      return
    }

    const nextOthers = [...others]
    while (nextOthers.length > 0) {
      const cur = nextOthers.shift()
      const nextPoints = [...points, cur]

      processPoint(nextPoints, nextOthers)
    }
  }

  processPoint([], array)

  return result
}

module.exports = countRectangles
