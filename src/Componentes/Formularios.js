import React, { useState,useEffect } from "react";
import Axios from "../services/ConexionAxios";

import {useParams,useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';

function Formularios() {
  const variables = {
    _id:"",
    clave: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  };

  const [valores, setValores] = useState(variables);

  const params=useParams();
  const navigate=useNavigate();

  const cambioEstado = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };

//Crear método para guardar información
const Guardar=async()=>{
Axios.post('/persona/guardar',{
  clave:valores.clave,
  nombre:valores.nombre,
  apellidos:valores.apellidos,
telefono:valores.telefono,
email:valores.email
}).then(()=>{
 toast("Registro guardado con éxito",{
  position:"top-center",
  type:"success",
  autoClose: 5000
 })
})
setValores("");
}

const onePersona=async(id)=>{
  const buscarOne=await Axios.get('/persona/consultarOne/'+id);
  setValores(buscarOne.data);
}

const updatePersona=async()=>{
  await Axios.put(`/persona/actualizar/${params.id}`,{
    clave: valores.clave,
    nombre: valores.nombre,
    apellidos: valores.apellidos,
    email: valores.email,
    telefono:valores.telefono
  }).then(()=>{
    toast("Los datos se han actualizado correctamente",{
      position:"top-right",
      type:"info",
      autoClose:5000
    })
  })
  navigate('/');
}



  const Enviar = (e) => {
    e.preventDefault();

    if(valores._id===""){
      Guardar();
    }else{
      updatePersona();
    }
    
  };

  useEffect(() => {
   onePersona(params.id);
  }, [params.id])
  

   

  return (
    <div className="container-fluid p-4">
      <div class="card">
        <div class="card-header">Formulario de personas</div>
        <div class="card-body">
          <p class="card-text">
            <form onSubmit={Enviar}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Clave
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="clave"
                  value={valores.clave}
                  onChange={cambioEstado}
                  placeholder="clave de la persona"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nombre"
                  value={valores.nombre}
                  onChange={cambioEstado}
                  placeholder="nombre de la persona"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="apellidos"
                  value={valores.apellidos}
                  onChange={cambioEstado}
                  placeholder="Ingresa los apellidos"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="telefono"
                  value={valores.telefono}
                  onChange={cambioEstado}
                  placeholder="Ingresa el numero telefonico"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={valores.email}
                  onChange={cambioEstado}
                  placeholder="name@example.com"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {valores._id === "" ? "Enviar":"Actualizar"}
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formularios;
