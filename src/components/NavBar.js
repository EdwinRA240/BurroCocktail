import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../burroCool.png'

function NavBar() {

  return (
    <>
      <header>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <h1>BurroCocktail</h1>
        <ul>
            <li><Link to="/">RandomCocktail</Link></li>
        </ul>
    </header>
    </>
  );
}

export default NavBar;