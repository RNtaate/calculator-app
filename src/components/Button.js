import React from 'react';

let Button = (props) => {
  const {name} = props;
  return (
    <button>{name}</button>
  );
}

export default Button;