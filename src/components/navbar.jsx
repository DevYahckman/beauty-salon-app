import React, { Component } from 'react';


// Stateless functional component 
const NavBar = ({totalCounter}) => {
    return ( 
        <nav className="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar
    <span className="badge badge-pill badge-secondary m-2">{totalCounter}</span>
    </a>
  </div>
</nav>
     );
}
 
export default NavBar;