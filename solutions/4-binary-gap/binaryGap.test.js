const binaryGap = require('./binaryGap')

test('9 should return 2', () => {
  const input = 9

  const output = binaryGap(input)

  expect(output).toBe(2)
})

test('529 should return 4', () => {
  const input = 529

  const output = binaryGap(input)

  expect(output).toBe(4)
})

test('20 should return 1', () => {
  const input = 20

  const output = binaryGap(input)

  expect(output).toBe(1)
})

test('15 should return 0', () => {
  const input = 15

  const output = binaryGap(input)

  expect(output).toBe(0)
})

test('1041 should return 5', () => {
  const input = 1041

  const output = binaryGap(input)

  expect(output).toBe(5)
})

test('32 should return 0', () => {
  const input = 32

  const output = binaryGap(input)

  expect(output).toBe(0)
})

test('2147483647 should return 0', () => {
  const input = 2147483647

  const output = binaryGap(input)

  expect(output).toBe(0)
})

test('561892 should return 3', () => {
  const input = 561892

  const output = binaryGap(input)

  expect(output).toBe(3)
})
