const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 2 to equal 7', () => {
  expect(sum(5, 2)).toBe(7);
});


test('adds 6 + 2 to equal 8', () => {
  expect(sum(6, 2)).toBe(8);
});


test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toBe(5);
});