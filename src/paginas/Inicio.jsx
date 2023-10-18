import React from "react";
import Menu from "../componentes/Menu";
import Portada from '../componentes/portada';


function Inicio(){
  return (
    <div className="Inicio" style={{ backgroundColor: '#A8D5D8' }}>
      <Menu/>
      <Portada/>
    </div>
  );
}

export default Inicio;