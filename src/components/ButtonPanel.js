import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    const { clickHandler: myHandler } = props;
    myHandler(buttonName);
  };

  const displayButton = (myName) => (
    <Button name={myName} clickHandler={handleClick} />
  );

  return (
    <div className="calculator-panel">

      <div className="group1">
        {displayButton('AC')}
        {displayButton('+/-')}
        {displayButton('%')}
        {displayButton('÷')}
      </div>
      <div className="group2">
        {displayButton('7')}
        {displayButton('8')}
        {displayButton('9')}
        {displayButton('X')}
      </div>
      <div className="group3">
        {displayButton('4')}
        {displayButton('5')}
        {displayButton('6')}
        {displayButton('-')}
      </div>
      <div className="group4">
        {displayButton('1')}
        {displayButton('2')}
        {displayButton('3')}
        {displayButton('+')}
      </div>
      <div className="group5">
        {displayButton('0')}
        {displayButton('.')}
        {displayButton('=')}
      </div>

    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
