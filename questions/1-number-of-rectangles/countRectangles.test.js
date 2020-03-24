const countRectangles = require('./countRectangles')

test('Example 1: should return 3', () => {
  const input = [
    [-3, 3],
    [3, 3],
    [-6, 0],
    [0, 0],
    [3, 0],
    [-3, -3],
    [0, -3],
    [3, -3]
  ]

  const output = countRectangles(input)

  expect(output).toBe(3)
})

test('4 points with only one valid rectangle, points in clockwise direction, should return 1', () => {
  const input = [
    [0, 0],
    [0, 3],
    [2, 3],
    [2, 0]
  ]

  const output = countRectangles(input)

  expect(output).toBe(1)
})

test('4 points with only one valid rectangle, points in zigzag direction, should return 1', () => {
  const input = [
    [0, 0],
    [2, 3],
    [0, 3],
    [2, 0]
  ]

  const output = countRectangles(input)

  expect(output).toBe(1)
})

test('5 points with only one valid rectangle, should return 1', () => {
  const input = [
    [0, 0],
    [2, 3],
    [0, 3],
    [2, 0],
    [3, 3]
  ]

  const output = countRectangles(input)

  expect(output).toBe(1)
})
