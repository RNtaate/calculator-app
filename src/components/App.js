import React, {Component} from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(){
    super()

    this.state = {
      total: null,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(buttonName) {
    let calcData = Object.assign({}, this.state);
    calcData = calculate(buttonName, calcData);
    this.setState({
      total: calcData.total,
      next: calcData.next,
      operation: calcData.operation
    })
  }

  render() {
    let displayResult = '';
    if((this.state.total === null) && (this.state.next === null)){
        displayResult = '0'
    }else{
      let total = this.state.total === null ? '' : this.state.total;
      let myNext = this.state.next === null ? '' : this.state.next;
      let operation = this.state.operation === null ? '' : this.state.operation;

      displayResult = `${total} ${operation} ${myNext}`;
    }

    return (
      <>
        <Display result={displayResult}/>
        <ButtonPanel clickHandler={this.handleClick}/>
      </>
    );
  }
}

export default App;
