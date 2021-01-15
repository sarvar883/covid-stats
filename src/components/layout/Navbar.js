import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary pt-0 pb-0" id="navbar">
      <div className="container pt-2 pb-2 pl-0 pr-0">
        <Link to='/' className="navbar-brand p-2">COVID Stat App</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse">
          <img src="../img/hamburger.svg" className="hamburger" alt="Hamburger" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto list-inline">

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;