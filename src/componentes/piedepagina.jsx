import React from "react";
import logos from "../imagenes/logos.png";
import { Link } from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi"

function Piedepagina () {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#A8D5D8' }}>
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <h2 className="encabezado" >Califica a tus docentes</h2>
          <img src={logos} alt="pdp" width="100"/>
          <p className="px-3"><small>¿Eres estudiante?, Ayuda a las Instituciones Educativas a darse cuenta de los malos profesores que hay dentro de ellas</small></p>
          <section>
            <button className="btn btn-success">Instalar ARD</button>
          </section>
          <div id="copyright">
            <hr/>
            <p><small>ARD<PiCopyrightBold/> Todos los derechos reservados.</small></p>
          </div >
        </div>
      </div>
    </div>
  );
}

export default Piedepagina;