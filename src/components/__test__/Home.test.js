import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';

import renderer from 'react-test-renderer';

it('renders Home component without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<Home />, myDiv);
});

it('It matches Home component snaphsot', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});