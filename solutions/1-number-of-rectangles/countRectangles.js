const transform = require('./transform')
const isRectangle = require('./isRectangle')

const process = (array) => {
  const result = []

  const processPoint = (points, others) => {
    if (points.length !== 4) {
      const nextOthers = [...others]

      while (nextOthers.length > 0) {
        const cur = nextOthers.shift()
        const nextPoints = [...points, cur]

        processPoint(nextPoints, nextOthers)
      }

      return
    }

    const [A, B, C, D] = points
    const key = `${A.key}-${B.key}-${C.key}-${D.key}`
    const isRect = isRectangle(points)
    result.push({
      key: key,
      isRectangle: isRect
    })
  }

  processPoint([], array)

  return result
}

const countRectangles = (array) => {
  const points = transform(array)
  const result = process(points)
  const validRectangles = result.filter(el => el.isRectangle)
  return validRectangles.length
}

module.exports = countRectangles
