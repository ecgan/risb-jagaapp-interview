const binaryGap = (number) => {
  const bin = number.toString(2)

  let max = 0
  let cur = 0
  for (let i = 1; i < bin.length; i++) {
    if (bin[i] === '0') {
      cur++
    } else {
      max = Math.max(max, cur)
      cur = 0
    }
  }

  return max
}

module.exports = binaryGap
