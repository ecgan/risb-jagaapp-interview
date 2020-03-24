const binaryGap = (number) => {
  const bin = number.toString(2)

  let max = 0
  let cur = 0
  for (let i = 1; i < bin.length; i++) {
    if (bin[i] === '0') {
      cur++
      continue
    }

    if (bin[i - 1] === '0') {
      if (cur > max) {
        max = cur
        cur = 0
      }
    }
  }

  return max
}

module.exports = binaryGap
