const uniqueNumber = (array) => {
  const set = new Set()

  array.forEach((el) => {
    if (set.has(el)) {
      set.delete(el)
    } else {
      set.add(el)
    }
  })

  return [...set][0]
}

module.exports = uniqueNumber
