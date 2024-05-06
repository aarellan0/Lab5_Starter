// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber tests
test('checks if isPhoneNumber returns false for invalid input', () => {
  expect(isPhoneNumber("hello")).toBe(false);
})
test('checks if isPhoneNumber returns false for invalid input', () => {
  expect(isPhoneNumber("619/230/6734")).toBe(false);
})
test('checks if isPhoneNumber returns true for valid input', () => {
  expect(isPhoneNumber("(619)-230-6734")).toBe(true);
})
test('checks if isPhoneNumber returns true for valid input', () => {
  expect(isPhoneNumber("(619)-123-4567")).toBe(true);
})

//isEmail tests
test('checks if isEmail returns false for invalid input', () => {
  expect(isEmail("myEmailatsomething.com")).toBe(false);
})
test('checks if isEmail returns false for invalid input', () => {
  expect(isEmail("username@website")).toBe(false);
})
test('checks if isEmail returns true for valid input', () => {
  expect(isEmail("myEmail@something.com")).toBe(true);
})
test('checks if isEmail returns true for valid input', () => {
  expect(isEmail("a3arellano@ucsd.edu")).toBe(true);
})

//isStrongPassword tests
test('checks if isStrongPassword returns false for weak passwords', () => {
  expect(isStrongPassword("12345")).toBe(false);
})
test('checks if isStrongPassword returns false for short passwords', () => {
  expect(isStrongPassword("A_1")).toBe(false);
})
test('checks if isStrongPassword returns true for strong passwords', () => {
  expect(isStrongPassword("A_123BCDE")).toBe(true);
})
test('checks if isStrongPassword returns true for strong passwords', () => {
  expect(isStrongPassword("Triton4L1fe")).toBe(true);
})

//isDate tests
test('checks if isDate returns false for invalid date', () => {
  expect(isDate("01-27-04")).toBe(false);
})
test('checks if isDate returns false for invalid date', () => {
  expect(isDate("may 4th 2024")).toBe(false);
})
test('checks if isDate returns true for valid date', () => {
  expect(isDate("01/27/2004")).toBe(true);
})
test('checks if isDate returns true for valid date', () => {
  expect(isDate("01/01/2001")).toBe(true);
})

//isHexColor tests
test('check if isHexColor returns false for invalid color', () => {
  expect(isHexColor("#green")).toBe(false);
})
test('check if isHexColor returns false for invalid color', () => {
  expect(isHexColor("FFFFF")).toBe(false);
})
test('check if isHexColor returns true for valid color', () => {
  expect(isHexColor("#FFF")).toBe(true);
})
test('check if isHexColor returns true for valid color', () => {
  expect(isHexColor("#0FFF00")).toBe(true);
})
