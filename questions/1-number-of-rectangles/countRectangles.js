const transform = require('./transform')
const getLength = require('./getLength')

const isRectangle = (points) => {
  const [A, B, C, D] = points

  const AB = getLength(A, B)
  const CD = getLength(C, D)
  const AD = getLength(A, D)
  const BC = getLength(B, C)
  const AC = getLength(A, C)
  const BD = getLength(B, D)

  if (
    AB === CD &&
    BC === AD &&
    AC === BD
  ) {
    return true
  }

  return false
}

const getProcessPointFn = (result) => {
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
    const validRect = isRectangle(points)
    result.push({
      key: key,
      value: validRect
    })
  }

  return processPoint
}

const countRectangles = (array) => {
  const points = transform(array)
  const result = []
  const processPoint = getProcessPointFn(result)

  processPoint([], points)

  const validRectangles = result.filter(el => el.value)

  return validRectangles.length
}

module.exports = countRectangles
