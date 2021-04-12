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

test('returns an object with calculated property values basing on the first argument.', () => {
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

test('Should make simple mathematics calculations with +, -, X, ÷ operators', () => {
  let newData;
  myData.total = '10';
  myData.next = '5';

  myData.operation = '+';
  newData = calculate('=', myData);
  expect(newData.total).toBe('15');

  myData.operation = '-';
  newData = calculate('=', myData);
  expect(newData.total).toBe('5');

  myData.operation = 'X';
  newData = calculate('=', myData);
  expect(newData.total).toBe('50');

  myData.operation = '÷';
  newData = calculate('=', myData);
  expect(newData.total).toBe('2');
});

test('Should set all the values of the returned object to null if provied AC as first argument', () => {
  myData.total = '10';
  myData.next = '5';
  myData.operation = '+';

  const newData = calculate('AC', myData);
  expect(newData.total).toBeNull();
  expect(newData.next).toBeNull();
  expect(newData.operation).toBeNull();
});

test("Should turn the returned object's total or next property value to positive or negative if given '+/-' symbol as first argument", () => {
  let newData;
  myData.total = '10';
  myData.next = null;
  myData.operation = null;

  newData = calculate('+/-', myData);
  expect(newData.total).toBe('-10');

  myData.next = '5';
  myData.operation = '+';
  newData = calculate('+/-', myData);
  expect(newData.next).toBe('-5');

  myData.next = null;
  myData.operation = '+';
  myData.total = '30';
  newData = calculate('+/-', myData);
  expect(newData.total).toBe('30');
  expect(newData.total).not.toBe('-30');
});

test("Should turn the returned object's total or next property value to percentage if given '%' operator as first argument", () => {
  let newData;
  myData.total = '200';
  myData.next = null;
  myData.operation = null;

  newData = calculate('%', myData);
  expect(newData.total).toBe('2');

  myData.next = '500';
  myData.operation = '+';
  newData = calculate('%', myData);
  expect(newData.next).toBe('5');

  myData.next = null;
  myData.operation = '+';
  myData.total = '300';
  newData = calculate('%', myData);
  expect(newData.total).toBe('300');
  expect(newData.total).not.toBe('3');
});

test('Should turn the value of the next property in the returned object into a decimal number if given "." symbol as first argument', () => {
  myData.total = null;
  myData.next = '34';
  myData.operation = null;

  let newData;
  newData = calculate('.', myData);
  expect(newData.next).toBe('34.');

  myData.total = '60';
  myData.next = null;
  myData.operation = '+';
  newData = calculate('.', myData);
  expect(newData.total).not.toBe('60.');

  myData.total = '700';
  myData.next = null;
  myData.operation = null;
  newData = calculate('.', myData);
  expect(newData.total).not.toBe('700.');
  expect(newData.total).toBeNull();
  expect(newData.next).toBe('0.');

  myData.next = '600.7';
  myData.operation = '+';
  newData = calculate('.', myData);
  expect(newData.next).not.toBe('600.7.');
  expect(newData.next).toBe('600.7');
});
