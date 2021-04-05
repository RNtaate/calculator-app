import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;

  const handleClick = (e) => {
    props.clickHandler(e.target.value);
  };

  return (
    <button type="button" onClick={handleClick} value={name}>{name}</button>
  );
};

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
