import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('renders Home component without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<Home />, myDiv);
});

it('It matches Home component snaphsot', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});
