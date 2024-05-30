const { somar, subtrair } = require('../src/calculadora');
const { test, expect } = require ("@jest/globals");

test('Somar dois números', () => {
  expect(somar(2, 3)).toBe(5);
  expect(somar(-1, -1)).toBe(-2);
  expect(somar(2.5, 2.25)).toBe(4.75);
  expect(somar(10, 0)).toBe(10);
});

test('Subtrair dois números', () => {
  expect(subtrair(2, 3)).toBe(-1);
  expect(subtrair(-1, -1)).toBe(0);
  expect(subtrair(2.5, 2.25)).toBe(0.25);
  expect(subtrair(10, 0)).toBe(10);
});