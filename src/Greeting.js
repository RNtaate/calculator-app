import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    return (
      <h1>Hello {this.props.name}, I am happy to be here</h1>
    );
  }
}

Greeting.defaultProps = {
  name: 'Gift'
}

Greeting.propTypes = {
  name: PropTypes.string
}


export default Greeting;