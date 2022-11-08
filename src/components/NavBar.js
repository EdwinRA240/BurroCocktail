import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
     <nav>
        <div className="logo-container">
          <img src="/burroCool.png" alt="no logo"></img> 
        </div>
        <ul className="nav-items">
            <Link className="nav-item nav-link" to="/">
                Inicio
            </Link>
            <Link className="nav-item nav-link" to="/">
              Nuevo entrenador
            </Link>
            <Link className="nav-item nav-link" to="/">
              Acerca de nosotros
            </Link>
        </ul>
     </nav>
    </>
  );
}

export default NavBar;