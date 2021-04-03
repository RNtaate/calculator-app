import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  const first = new Big(numberOne);
  const second = new Big(numberTwo);
  switch (operation) {
    case '+':
      result = first.plus(second);
      break;
    case '-':
      result = first.minus(second);
      break;
    case 'X':
      result = first.times(second);
      break;
    case '÷':
      result = first.div(second);
      break;
    default:
  }

  return result.toNumber();
};

export default operate;
