import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const styles = {
    color: '#0275d8',
  };
  return (
    <div className="navbar-div">
      <h1>Math Magicians</h1>
      <div className="links-div">
        <Link to="/" style={styles}>Home</Link>
        <Link to="/calculator" style={styles}>Calculator</Link>
        <Link to="/quote" style={styles}>Quote</Link>
      </div>
    </div>
  );
};

export default MyNavbar;
