const uniqueValues = require('./uniqueValues')

test('[4, 5, 6, 5, 6] should return 4', () => {
  const input = [3, 2, 2, 3, 3, 4, 3]

  const output = uniqueValues(input)

  expect(output).toStrictEqual([3, 2, 4])
})
