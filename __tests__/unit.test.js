// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';



// Part 2 DONE

//Function #1 (isPhoneNumber)
test('first true response for isPhoneNumber', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('second true response for isPhoneNumber', () => {
  expect(isPhoneNumber('(925) 848-5897')).toBe(true);
});


test('first false response for isPhoneNumber', () => {
  expect(isPhoneNumber('1')).toBe(false);
});
test('second false response for isPhoneNumber', () => {
  expect(isPhoneNumber('arc-6tf-g78j')).toBe(false);
});



//Function #2 (isEmail)
test('first true response for isEmail', () => {
  expect(isEmail('pjduggal@ucsd.edu')).toBe(true);
});
test('second true response for isEmail', () => {
  expect(isEmail('phiroze_khattra@gmail.com')).toBe(true);
});


test('first false response for isEmail', () => {
  expect(isEmail('phrzdgal@.com')).toBe(false);
});
test('second false response for isEmail', () => {
  expect(isEmail('phiroze@yahoo')).toBe(false);
});



//Function #3 (isStrongPassword)
test('first true response for isStrongPassword', () => {
  expect(isStrongPassword('Uption81')).toBe(true);
});
test('second true response for isStrongPassword', () => {
  expect(isStrongPassword('Excism42Ill')).toBe(true);
});


test('first false response for isStrongPassword', () => {
  expect(isStrongPassword('y')).toBe(false);
});
test('second false response for isStrongPassword', () => {
  expect(isStrongPassword('yy')).toBe(false);
});



// Function #4 (isDate)
test('True date 1', () => {
  expect(isDate('11/08/2001')).toBe(true);
});
test('True date 2', () => {
  expect(isDate('01/01/2000')).toBe(true);
});


test('False date 1', () => {
  expect(isDate('2000-01-01')).toBe(false);
});
test('False date 2', () => {
  expect(isDate('13/497/2020')).toBe(false);
});



// Function #5 (isHexColor)
test('True Hex 1', () => {
  expect(isHexColor('#aaa')).toBe(true);
});
test('True Hex 2', () => {
  expect(isHexColor('#123abc')).toBe(true);
});


test('False Hex 1', () => {
  expect(isHexColor('1')).toBe(false);
});
test('False Hex 2', () => {
  expect(isHexColor('#gg^*')).toBe(false);
});


