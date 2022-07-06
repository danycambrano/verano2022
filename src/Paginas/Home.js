import React,{useState,useEffect} from "react";

import Axios from "../services/ConexionAxios";



function Home() {

  const [personas,setPersonas]=useState([]);

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
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <button type="button" class="btn btn-danger" onClick={()=>Eliminar(persona._id)}>Eliminar</button>
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
      </tr>
      )
    })}
   
   
  </tbody>
</table>
</div>
  );
}

export default Home;
