import React from "react";
import '../estilos/estilos.css'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header" style={{ backgroundColor: '#A8D5D8' }}>
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h1>ARD</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">Registro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cursos">Reseñas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/login">Iniciar Sesion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="p-3">
         <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="p-3">
        <div className="card" style={{ backgroundColor: '#A8D5D8' }}>
         
          <div className="card-body">
            <h1 className="encabezado">¡CALIFICA Y OPINA SOBRE LOS DOCENTES DE TU INSTITUCION!</h1>
          
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Menu;
