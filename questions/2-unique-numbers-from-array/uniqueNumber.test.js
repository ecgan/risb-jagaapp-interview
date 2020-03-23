const uniqueNumber = require('./uniqueNumber')

test('[4, 5, 6, 5, 6] should return 4', () => {
  const input = [4, 5, 6, 5, 6]

  const output = uniqueNumber(input)

  expect(output).toBe(4)
})
