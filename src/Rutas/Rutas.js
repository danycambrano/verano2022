import React from 'react';
//Son los elementos que se utilizan para definir rutas
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Se importa el archivo layouts para definir las divisiones de nuestra app
import Layout from '../Componentes/Layouts/Layout';

import Home from '../Paginas/Home';
import About from '../Paginas/About';
import Formularios from '../Componentes/Formularios';
import NotFound from '../Paginas/NotFound';

function Rutas(){
    return(
        <div>
           <Router>
               <Layout>
                   <Routes>
                       <Route exact path="/" element={<Home/>}/>
                       <Route exact path="/about" element={<About/>}/>
                       <Route exact path='/formularios' element={<Formularios/>}/>                       
                       <Route path='*' element={<NotFound/>}/>
                   </Routes>
               </Layout>
           </Router>
        </div>
    )
}

export default Rutas
