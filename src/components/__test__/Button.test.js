import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';

it('renders Navbar component without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<Button />, myDiv);
});

it('renders the button component correctly using props', () => {
  const{getByRole} = render(<Button name="2"/>);
  expect(getByRole('button')).toHaveTextContent('2');
});

it('renders the button component correctly using default props values', () => {
  const{getByRole} = render(<Button />);
  expect(getByRole('button')).toHaveTextContent('');
});

it('matches the button component snapshot', () => {
  const tree = renderer.create(<Button name="3"/>);
  expect(tree).toMatchSnapshot();
});