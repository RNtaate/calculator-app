import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    let tempData = { ...calcData };
    tempData = calculate(buttonName, tempData);
    setCalcData(tempData);
  };

  const updateDisplayResult = () => {
    let displayResult = '';
    let { total, next: myNext, operation } = calcData;
    if ((total === null) && (myNext === null)) {
      displayResult = '0';
    } else {
      total = total === null ? '' : total;
      myNext = myNext === null ? '' : myNext;
      operation = operation === null ? '' : operation;

      displayResult = `${total} ${operation} ${myNext}`;
    }

    return displayResult;
  };

  return (
    <>
      <Display result={updateDisplayResult()} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
