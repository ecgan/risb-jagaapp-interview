const getLength = (A, B) => {
  const diffX = A.x - B.x
  const diffY = A.y - B.y

  return Math.hypot(diffX, diffY)
}

module.exports = getLength
