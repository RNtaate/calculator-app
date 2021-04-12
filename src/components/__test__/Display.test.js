import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../Display';

import {render} from '@testing-library/react';

import renderer from 'react-test-renderer';

it( 'renders display compoonent without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<Display />, myDiv);
});

it('renders the display component correctly', () => {
  const{getByRole} = render(<Display />);
  expect(getByRole('textbox')).toHaveDisplayValue('0');
});

it('renders the display component correctly', () => {
  const{getByRole} = render(<Display />);
  expect(getByRole('textbox')).toHaveAttribute('value', '0');
});

it('renders the display component correctly when using props', () => {
  const{getByRole} = render(<Display result="10"/>);
  expect(getByRole('textbox')).toHaveDisplayValue('10');
});

it('matches the Display component snapshot', () => {
  const tree = renderer.create(<Display />);
  expect(tree).toMatchSnapshot();
});

it('matches the Display component snapshot', () => {
  const tree = renderer.create(<Display result="1994"/>);
  expect(tree).toMatchSnapshot();
});