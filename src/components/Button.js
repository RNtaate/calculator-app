import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide } = props;

  const handleClick = (e) => {
    props.clickHandler(e.target.value);
  };

  return (
    <button type="button" onClick={handleClick} value={name} style={{ backgroundColor: color || '', width: wide ? '50%' : '25%' }}>{name}</button>
  );
};

Button.defaultProps = {
  name: '',
  color: '',
  clickHandler: () => {},
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
