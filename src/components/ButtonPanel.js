import React from 'react';
import Button from './Button';

let ButtonPanel = () => { 

  let displayButton = (myName) => {
    return(
      <Button name={myName}/>
    )
  }

  return(
    <div className='calculator-panel'>

      <div className='group1'>
        {displayButton('AC')}
        {displayButton('+/-')}
        {displayButton('%')}
        {displayButton('÷')}
      </div>
      <div className='group2'>
        {displayButton('7')}
        {displayButton('8')}
        {displayButton('9')}
        {displayButton('X')}
      </div>   
      <div className='group3'>
        {displayButton('4')}
        {displayButton('5')}
        {displayButton('6')}
        {displayButton('-')}
      </div>   
      <div className='group4'>
        {displayButton('1')}
        {displayButton('2')}
        {displayButton('3')}
        {displayButton('+')}
      </div>  
      <div className='group5'>
        {displayButton('0')}
        {displayButton('.')}
        {displayButton('=')}
      </div>      

    </div>
  )
}

export default ButtonPanel;