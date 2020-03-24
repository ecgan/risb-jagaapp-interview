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

module.exports = isRectangle
