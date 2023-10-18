import React from "react"; 
import Menu from "../componentes/Menu";
import CursosInit from "../componentes/content";

function Cursos(){
  return (
    <div className="Cursos" style={{ backgroundColor: '#A8D5D8' }}>
      <Menu/>
      <CursosInit/>
    </div>
  );
}

export default Cursos;
