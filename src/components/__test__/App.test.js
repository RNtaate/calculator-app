import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

test('renders App component correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test('matches App component snapshot', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
