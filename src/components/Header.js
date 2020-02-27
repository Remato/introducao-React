import React from 'react';
import '../styles/header.css';
import logo from '../assets/logo.svg';
import user from '../assets/user.svg';


function Header(){
  return(
    <div className="Header">
      <img src={logo} /> 
        <nav className="Profile">
          <p>My Profile</p>
          <img src={user}/> 
        </nav>         
    </div>
  )
}

export default Header;