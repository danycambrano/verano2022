import React, { useState, useEffect } from "react";

function Home() {
  const variablesInicio = {
    nombre: "",
    apellidos: "",
    telefono: "",
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div class="row">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Formulario de altas de usuarios</span>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s6">
                      <input
                        placeholder="Placeholder"
                        id="first_name"
                        type="text"
                        class="validate"
                      />
                      <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate" />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s12">
                      This is an inline input field:
                      <div class="input-field inline">
                        <input
                          id="email_inline"
                          type="email"
                          class="validate"
                        />
                        <label for="email_inline">Email</label>
                        <span
                          class="helper-text"
                          data-error="wrong"
                          data-success="right"
                        >
                          Helper text
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn">
                <i class="material-icons left">cloud</i>button
              </a>
              <a class="waves-effect waves-light btn">
                <i class="material-icons right">cloud</i>button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
