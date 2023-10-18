import React from "react";
import { Link } from "react-router-dom";

function Singin() {
  return (
    <div className="container" style={{ backgroundColor: '#A8D5D8' }}>
      <div className="row">
        <div className="text-center mx-auto">
          <h1>REGISTRATE</h1>
          <p>Graduate como bachiller teniendo una formación en mediatecnica</p>
        </div>

          <div className="container pb-3">
            <form className="row g-3" action="/HomeL" method="get">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Correo</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Complemento</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="inputCity"/>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Departamento</label>
                
                
                <select id="inputState" className="form-select" defaultValue="Antioquia">
                  <option value="Antioquia">Antioquia</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Atlantico">Atlantico</option>
                  <option value="Magdalena">Magdalena</option>
                  <option value="Santander">Santander</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="fechaNacimiento" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="fechaNacimiento" 
                  name="fechaNacimiento"/>
              </div>
              
              
              <div className="col-md-2">
                <label htmlFor="input" className="form-label">Ocupacion</label>
                <input type="text" className="form-control" id="input"/>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" htmlFor="gridCheck">
                    Aceptar terminos y condiciones
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Registrarme</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Singin;
