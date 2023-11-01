import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';
import docente from '../imagenes/docente.png';
import { BiTime } from 'react-icons/bi';

function CursoCard() {
  return (
    <div className="card" style={{ backgroundColor: '#E4E8E5' }}>
      <img src={docente} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Profesor:</h5>
        <p className="card-text">
          Descripcion de tu reseña.
        </p>
        <div className="row pb-3">
          <div className="col">
            <p>
              <small>
                <BiTime /> 120 Reseñas
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                <BiTime /> 5 Puntuación
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                <BiTime /> 100% Porcentaje
              </small>
            </p>
          </div>
        </div>
        <Link to="#" className="btn btn-primary">
          Enviar reseña
        </Link>
      </div>
    </div>
  );
}

function InicioL() {
  return (
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-lg-6">
          <div className="container mx-auto text-center">
            <h2 className="pt-3">Tus reseñas</h2>
          </div>
          <div className="container px-5">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CursoCard />
                </div>
                <div className="carousel-item">
                  <CursoCard />
                </div>
                <div className="carousel-item">
                  <CursoCard />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-lg-6">
          <div className="container mx-auto text-center">
            <h2 className="pt-3">Más reseñas</h2>
          </div>
          <div className="container px-5">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CursoCard />
                </div>
                <div className="carousel-item">
                  <CursoCard />
                </div>
                <div className="carousel-item">
                  <CursoCard />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default InicioL;
