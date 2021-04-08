import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const myColor = {
    color: '#0275d8',
  };
  return (
    <div className="navbar-div">
      <h1>Math Magicians</h1>
      <div className="links-div">
        <Link to="/" style={{ color: myColor.color }}>Home</Link>
        <Link to="/calculator" style={{ color: myColor.color }}>Calculator</Link>
        <Link to="/quote" style={{ color: myColor.color }}>Quote</Link>
      </div>
    </div>
  );
};

export default MyNavbar;
