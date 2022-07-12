import React from 'react'


import Rutas from './Rutas/Rutas'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Aplicacion() {
  return (
    <div><Rutas/>
    <ToastContainer/>
    </div>
  )
}

export default Aplicacion