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
