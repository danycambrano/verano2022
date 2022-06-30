import React from 'react';

import Menu from '../Menu/Menu';
import Footer from '../Menu/Footer';

import './Layout.css';


function Layout({children}) {
  return (
    <div>
      <Menu/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout