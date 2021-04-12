import { render, screen } from '@testing-library/react';
import App from '../App';

import renderer from 'react-test-renderer';

test('renders App component correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test('matches App component snapshot', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});