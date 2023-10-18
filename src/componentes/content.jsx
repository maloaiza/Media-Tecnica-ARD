import React from "react";
import { LuSchool } from "react-icons/lu";
import campoamor from "../imagenes/campoamor.jpg";
import benjamin from "../imagenes/benjamin.jpg";
import octavio from "../imagenes/octavio.jpg";
import angeles from "../imagenes/angeles.jpg";
import { Link } from "react-router-dom";

function CursosInit() {
  return (
    <div className="container" style={{ backgroundColor: '#A8D5D8' }}>
      <h1 className="text-center">RESEÑAS</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={octavio}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <p>
                <small>
                  <LuSchool/> OCTAVIO CALDERON MEJIA
                </small>
              </p>
              <h5 className="card-title">DOCENTES.</h5>
              <p className="card-text">
                <Link to="/reseñasXL"><button type="button" className="btn btn-primary">Entra aquí</button>
              </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={benjamin}
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body">
              <p>
                <small>
                  <LuSchool/> I.E BENJAMIN HERRERA 
                </small>
              </p>
              <h5 className="card-title">DOCENTES.</h5>
              <Link to="/reseñasXL"><button type="button" className="btn btn-primary">Entra aquí</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={campoamor}
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body">
              <p>
                <small>
                  <LuSchool/> I.E SALLE DE CAMPOAMOR
                </small>
              </p>
              <h5 className="card-title">DOCENTES.</h5>
              <Link to="/reseñasXL"><button type="button" className="btn btn-primary">Entra aquí</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={angeles}
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body">
              <p>
                <small>
                  <LuSchool/> SANTOS ANGELES CUSTODIOS
                </small>
              </p>
              <h5 className="card-title">DOCENTES.</h5>
              <Link to="/reseñasXL"><button type="button" className="btn btn-primary">Entra aquí</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosInit;
