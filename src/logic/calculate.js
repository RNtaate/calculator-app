import Big from 'big.js';
import operate from './operate';

const calculate = (buttonName, calcData = { total: null, next: null, operation: null }) => {
  const myData = { ...calcData };
  if (buttonName === 'AC') {
    myData.total = null;
    myData.next = null;
    myData.operation = null;
  } else if (buttonName.match(/\d/)) {
    if (myData.operation === null) {
      if (myData.total !== null) {
        myData.total = null;
      }
    }
    myData.next = myData.next === null ? buttonName : myData.next + buttonName;
    myData.next = new Big(myData.next).toNumber().toString();
  } else if (myData.next !== null) {
    switch (buttonName) {
      case '%':
        myData.next = operate(myData.next, '100', '÷').toString();
        break;
      case '+/-':
        myData.next = operate(myData.next, '-1', 'X').toString();
        break;
      case '=':
        if (myData.total !== null) {
          myData.total = operate(myData.total, myData.next, myData.operation).toString();
          myData.next = null;
          myData.operation = null;
        }
        break;

      default:
        if (myData.total === null) {
          myData.total = myData.next;
          myData.next = null;
          myData.operation = buttonName;
        } else {
          myData.total = operate(myData.total, myData.next, myData.operation).toString();
          myData.next = null;
          myData.operation = buttonName;
        }
    }
  } else if (myData.total !== null) {
    if (myData.operation === null) {
      switch (buttonName) {
        case '%':
          myData.total = operate(myData.total, '100', '÷').toString();
          break;
        case '+/-':
          myData.total = operate(myData.total, '-1', 'X').toString();
          break;
        case '=':
          myData.total = myData.total.toString();
          break;
        default:
          myData.operation = buttonName;
      }
    }
  }

  return myData;
};

export default calculate;
