import React from 'react';

const Quote = (props) => {
  return (
    <p
      className="quote-par"
      style={{
        fontSize: '25px',
        padding: '20px 100px',
      }} data-testid="quote"
    >
      {props.myQuote}
    </p>
  )
};

Quote.defaultProps = {
  myQuote: "Mathematics is not about numbers, equations, computations,or algorithms: it is about understanding. –William Paul Thurston"
}

export default Quote;
