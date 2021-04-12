import React from 'react';
import ReactDOM from 'react-dom';
import Quote from '../Quote';

import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

it('Renders without crashing', () => {
  const myDiv = document.createElement('div');

  ReactDOM.render(<Quote />, myDiv);
});

it('renders the quote correctly', () => {
  const {getByTestId} = render(<Quote myQuote="This is passed down"/>);
  expect(getByTestId('quote')).toHaveTextContent('This is passed down');
});

it('renders the quote correctly', () => {
  const {getByTestId} = render(<Quote />);
  expect(getByTestId('quote')).toHaveTextContent('Mathematics is not about numbers, equations, computations,or algorithms: it is about understanding. –William Paul Thurston');
});

it("matches snapshot", () => {
  const tree = renderer.create(<Quote myQuote="This will be passed to quote"/>);
  expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});