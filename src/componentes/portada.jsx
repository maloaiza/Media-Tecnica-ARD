import React from "react";
import { Link } from "react-router-dom";
import portada from "../imagenes/portada.png";


function Portada() {
  return (
    <div className='container' style={{ backgroundColor: '#A8D5D8' }}>
      
      <div className="row">
        
        <img src={portada} alt="logo" className="mx-auto" style= {{maxWidth:"500px"}}/>
        
        <div className="mx-auto">
          <p className="text-center">Registrate para poder calificar a tus docentes</p>
        </div>
        
        <Link to="/login">
          <div className="d-grid gap-2 pb-1">
            <button className="btn btn-primary" type="button">Iniciar sesion</button>
          </div>
        </Link>

        <Link to="/registro">
          <div className="d-grid gap-2 pb-1">
            <button className="btn btn-primary" type="button">Registrarse</button>
          </div>
        </Link>
      
      </div>

      

    </div>
  );
}
      
export default Portada