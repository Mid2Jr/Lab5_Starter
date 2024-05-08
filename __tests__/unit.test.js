// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid and contains paranthese', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid because contains letters', () => {
  expect(isPhoneNumber('123-EFG-4567')).toBe(false);
});

test('invalid because not enough digit', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('dluo@gmail.com')).toBe(true);
});

test('valid email with underscore', () => {
  expect(isEmail('d_luo@gmail.com')).toBe(true);
});

test('invalid email without @', () => {
  expect(isEmail('dluo.gmail.com')).toBe(false);
});

test('invalid email with many @', () => {
  expect(isEmail('dluo@@@@gmail.com')).toBe(false);
});

test('valid password with min len', () => {
  expect(isStrongPassword('Pasw_d')).toBe(true);
});

test('valid password with max len', () => {
  expect(isStrongPassword('Pass_word12')).toBe(true);
});

test('invalid password because too short', () => {
  expect(isStrongPassword('Pas')).toBe(false);
});

test('invalid password because spaecial char', () => {
  expect(isStrongPassword('Pas#word')).toBe(false);
});

test('valid date', () => {
  expect(isDate('2/2/2002')).toBe(true);
});

test('valid date with double digits', () => {
  expect(isDate('02/02/2002')).toBe(true);
});

test('invalid date format', () => {
  expect(isDate('Feb 02 2002')).toBe(false);
});

test('invalid date because month is 3 digits', () => {
  expect(isDate('002/02/2002')).toBe(false);
});

test('valid hex color with 3 char', () => {
  expect(isHexColor('#aaa')).toBe(true);
});

test('valid hex color with 6 char', () => {
  expect(isHexColor('#1aa2bb')).toBe(true);
});

test('invalid hex color with 4 char', () => {
  expect(isHexColor('#11aa')).toBe(false);
});

test('invalid hex color with non-hex', () => {
  expect(isHexColor('#zzzzzz')).toBe(false);
});