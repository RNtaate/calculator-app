import React, {Component} from 'react';
import Button from './Button';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }


  displayButton (myName) {
    return(
      <Button name={myName} clickHandler={this.handleClick}/>
    )
  }

  render() {

    return (
      <div className="calculator-panel">

        <div className="group1">
          {this.displayButton('AC')}
          {this.displayButton('+/-')}
          {this.displayButton('%')}
          {this.displayButton('÷')}
        </div>
        <div className="group2">
          {this.displayButton('7')}
          {this.displayButton('8')}
          {this.displayButton('9')}
          {this.displayButton('X')}
        </div>
        <div className="group3">
          {this.displayButton('4')}
          {this.displayButton('5')}
          {this.displayButton('6')}
          {this.displayButton('-')}
        </div>
        <div className="group4">
          {this.displayButton('1')}
          {this.displayButton('2')}
          {this.displayButton('3')}
          {this.displayButton('+')}
        </div>
        <div className="group5">
          {this.displayButton('0')}
          {this.displayButton('.')}
          {this.displayButton('=')}
        </div>

      </div>
    );
  }
};

export default ButtonPanel;
