import React from 'react';

let Display = (props) => {
  const {result} = props;
  return(
    <input type="text" value={result}/>
  );
}

Display.defaultProps = {
  result: '0'
}

export default Display;