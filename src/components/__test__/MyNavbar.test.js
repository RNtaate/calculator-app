import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MyNavbar from '../MyNavbar';

it('renders Navbar component without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MyNavbar /></BrowserRouter>, myDiv);
});

it('render Navbar correctly', () => {
  render(<BrowserRouter><MyNavbar /></BrowserRouter>);
  const myHeading = screen.getByText(/Math Magicians/i);
  expect(myHeading).toBeInTheDocument();
});
