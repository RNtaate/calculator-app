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

    if (myData.next === null) {
      myData.next = buttonName;
    } else if ((myData.next.length === 1) && myData.next[0] === '0') {
      myData.next = buttonName;
    } else {
      myData.next += buttonName;
    }
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
      case '.':
        if (myData.next.indexOf('.') < 0) {
          myData.next += buttonName;
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
        case '.':
          myData.total = null;
          myData.next = '0.';
          break;
        default:
          myData.operation = buttonName;
      }
    }
  }

  return myData;
};

export default calculate;
