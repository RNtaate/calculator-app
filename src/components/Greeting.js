import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  const { name } = props;
  return (
    <h1>
      Hello
      {name}
      , I am happy to be here
    </h1>
  );
};

Greeting.defaultProps = {
  name: 'Gift',
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
