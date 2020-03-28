const getLength = (a, b) => {
  const [x1, y1] = a
  const [x2, y2] = b

  const diffX = x1 - x2
  const diffY = y1 - y2

  return Math.hypot(diffX, diffY)
}

module.exports = getLength
