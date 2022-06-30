import React,{useEffect} from "react";

import {Link} from 'react-router-dom';

import M from 'materialize-css';

function Menu() {

  const colapsado=()=>{
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }


  useEffect(() => {
   colapsado();
  }, [])
  
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" class="brand-logo">
            Logo
          </Link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/formularios">Formularios</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/formulario">Formulario</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Menu;
