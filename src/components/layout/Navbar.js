import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary pt-0 pb-0" id="navbar">
      <div className="container pt-2 pb-2 pl-0 pr-0">
        <Link to='/' className="navbar-brand p-2">COVID Stat App</Link>

      </div>
    </nav>
  )
}

export default Navbar;