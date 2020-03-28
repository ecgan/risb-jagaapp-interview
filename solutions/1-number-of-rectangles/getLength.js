const getLength = (point1, point2) => {
  const [x1, y1] = point1
  const [x2, y2] = point2

  const diffX = x1 - x2
  const diffY = y1 - y2

  return Math.hypot(diffX, diffY)
}

module.exports = getLength
