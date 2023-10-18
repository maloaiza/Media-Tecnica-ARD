import React from "react";
import '../estilos/estilos.css'
import { Link } from "react-router-dom";

function MenuL() {
  return (
    <div className="header" style={{ backgroundColor: '#A8D5D8' }}>
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/HomeL"><h1>ARD</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/HomeL">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/perfil">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/reseñasL">Reseñas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/">Cerrar Sesion</Link>
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
    </div>
  );
  
}

export default MenuL;