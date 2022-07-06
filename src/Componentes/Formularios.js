import React, { useState } from "react";
import Axios from "../services/ConexionAxios";

function Formularios() {
  const variables = {
    clave: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  };

  const [valores, setValores] = useState(variables);

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
  console.log('Registro guardado con exito');
})
}


  const Enviar = (e) => {
    e.preventDefault();
    Guardar();
  };

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
                Enviar
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formularios;
