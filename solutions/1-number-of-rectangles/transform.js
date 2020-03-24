const transform = (array) => {
  const result = array.map((el, idx) => {
    const [x, y] = el

    return {
      key: idx + 1,
      x,
      y
    }
  })

  return result
}

module.exports = transform
