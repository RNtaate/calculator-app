import React from 'react';
import {Link} from 'react-router-dom';

let MyNavbar = () => {
  return (
    <div className="navbar-div">
      <h1>Math Magicians</h1>
      <div className="links-div">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </div>
  );
}

export default MyNavbar;