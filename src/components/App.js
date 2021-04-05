import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((prevState) => (
      {
        total: calculate(buttonName, prevState).total,
        next: calculate(buttonName, prevState).next,
        operation: calculate(buttonName, prevState).operation,
      }
    ));
  }

  render() {
    let displayResult = '';
    let { total, next: myNext, operation } = this.state;
    if ((total === null) && (myNext === null)) {
      displayResult = '0';
    } else {
      total = total === null ? '' : total;
      myNext = myNext === null ? '' : myNext;
      operation = operation === null ? '' : operation;

      displayResult = `${total} ${operation} ${myNext}`;
    }

    return (
      <>
        <Display result={displayResult} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
