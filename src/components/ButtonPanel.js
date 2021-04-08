import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    const { clickHandler: myHandler } = props;
    myHandler(buttonName);
  };

  const displayButton = (myName, myColor = null, myWide = false) => (
    <Button name={myName} clickHandler={handleClick} color={myColor} wide={myWide} />
  );

  return (
    <div className="calculator-panel">

      <div className="group1">
        {displayButton('AC', '#e0e0e0')}
        {displayButton('+/-', '#e0e0e0')}
        {displayButton('%', '#e0e0e0')}
        {displayButton('÷')}
      </div>
      <div className="group2">
        {displayButton('7', '#e0e0e0')}
        {displayButton('8', '#e0e0e0')}
        {displayButton('9', '#e0e0e0')}
        {displayButton('X')}
      </div>
      <div className="group3">
        {displayButton('4', '#e0e0e0')}
        {displayButton('5', '#e0e0e0')}
        {displayButton('6', '#e0e0e0')}
        {displayButton('-')}
      </div>
      <div className="group4">
        {displayButton('1', '#e0e0e0')}
        {displayButton('2', '#e0e0e0')}
        {displayButton('3', '#e0e0e0')}
        {displayButton('+')}
      </div>
      <div className="group5">
        {displayButton('0', '#e0e0e0', true)}
        {displayButton('.', '#e0e0e0')}
        {displayButton('=')}
      </div>

    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
