import React,{useState,useEffect} from "react";

import Axios from "../services/ConexionAxios";

import {useNavigate}from 'react-router-dom';


function Home() {

  const [personas,setPersonas]=useState([]);

  const navigate=useNavigate();

  const Consultar=async()=>{
    const consulta=await Axios.get('/persona/consultar');
    setPersonas(consulta.data);
   // console.log(consulta.data);
  }

  const Eliminar=async(id)=>{

    if(window.confirm("¿Esta segure de eliminar el date?")){
      await Axios.delete(`/persona/eliminar/${id}`);
      console.log('Datos eliminados correctamente');
    }
   
    Consultar();
  }

  useEffect(() => {
   Consultar();
   
  }, [])
  
  return (
   
<div className="container-fluid p-2">
<div class="row">
  {personas.map((persona,index)=>{
    return(
<div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{persona.nombre}</h5>
        <p class="card-text">{persona.email},{persona.telefono}</p>
        <button type="button" class="btn btn-primary" onClick={()=>navigate(`/formularios/${persona._id}`)}>
        <i class="material-icons">colorize</i></button>
        <button type="button" class="btn btn-danger" onClick={()=>Eliminar(persona._id)}>
  <i class="material-icons">delete</i></button>
      </div>
    </div>
  </div>
    )
  })} 
 
</div>

<hr/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Clave</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {personas.map((persona,index)=>{
      return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{persona.clave}</td>
        <td>{persona.nombre}</td>
        <td>{persona.apellidos}</td>
        <td>
        <button type="button" class="btn btn-primary" onClick={()=>navigate(`/formularios/${persona._id}`)}>
        <i class="material-icons">colorize</i></button>
          </td>
        <td><button type="button" class="btn btn-danger" onClick={()=>Eliminar(persona._id)}>
  <i class="material-icons">delete</i></button></td>
      </tr>
      )
    })}
   
   
  </tbody>
</table>
</div>
  );
}

export default Home;
