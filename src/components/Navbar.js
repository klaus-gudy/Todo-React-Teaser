import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
        <Link to='/'>
          <p className="btn btn-ghost normal-case text-xl">TODO APP</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <Link to="/">
            <li> Add  </li>
          </Link>

          <Link to="/list">
            <li> List </li>
          </Link>

        </ul>
      </div>

      <div className="navbar-end">

      </div>
      
    </div>
  )
}

export default Navbar