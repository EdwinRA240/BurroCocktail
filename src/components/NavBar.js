import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../cocktails.png'

function NavBar() {

  return (
    <>
      <header>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <h1>Cocktails</h1>
        <ul>
            <li><Link to="/">Random</Link></li>
            <li><Link to="/Ind">ByLetter</Link></li>
            <li><Link to="/Name">ByName</Link></li>
        </ul>
    </header>
    </>
  );
}

export default NavBar;