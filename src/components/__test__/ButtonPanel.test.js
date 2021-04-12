import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPanel from '../ButtonPanel';

import renderer from 'react-test-renderer';

const handle = () => {}; 

it('renders Navbar component without crashing', () => {
  const myDiv = document.createElement('div');
  ReactDOM.render(<ButtonPanel clickHandler={handle}/>, myDiv);
});

it('matches the Button panel component snapshot', () => {
  const tree = renderer.create(<ButtonPanel clickHandler={handle}/>);
  expect(tree).toMatchSnapshot();
});