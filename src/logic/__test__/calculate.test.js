import calculate from '../calculate';

const myData = {
  total: null,
  next: null,
  operation: null,
};

test('It should not mutate the object provided as argument', () => {
  const newData = calculate('', myData);
  expect(newData === myData).toBeFalsy();
  expect(newData !== myData).toBeTruthy();
});

test('It should always return a value', () => {
  const newData = calculate('', myData);
  expect(newData).not.toBeUndefined();
  expect(newData === null).toBeFalsy();
});

test('it should return a value of type object', () => {
  const newData = calculate('', myData);
  expect(typeof newData).toBe('object');
});

test('returns an object with calculated property values basing on buttonName provided as argument', () => {
  let newData = calculate('3', myData);
  expect(newData.next).toBe('3');
  expect(newData.next).not.toBeNull();

  myData.next = '3';
  newData = calculate('+', myData);
  expect(newData.total).toBe('3');
  expect(newData.total).not.toBeNull();
  expect(newData.next).toBeNull();
  expect(newData.operation).toBe('+');

  myData.total = '3';
  myData.operation = '+';
  myData.next = '2';
  newData = calculate('=', myData);
  expect(newData.total).toBe('5');
  expect(newData.next).toBeNull();
  expect(newData.operation).toBeNull();
});
