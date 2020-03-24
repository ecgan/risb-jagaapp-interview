const uniqueValues = (array) => {
  const set = new Set(array)

  return [...set]
}

module.exports = uniqueValues
