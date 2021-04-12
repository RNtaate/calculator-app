import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) => {
  const { myQuote } = props;
  return (
    <p
      className="quote-par"
      style={{
        fontSize: '25px',
        padding: '20px 100px',
      }}
      data-testid="quote"
    >
      {myQuote}
    </p>
  );
};

Quote.defaultProps = {
  myQuote: 'Mathematics is not about numbers, equations, computations,or algorithms: it is about understanding. –William Paul Thurston',
};

Quote.propTypes = {
  myQuote: PropTypes.string,
};

export default Quote;
