import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <section style = {{backgroundColor:"#eee"}}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center" style={{ backgroundColor: '#A8D5D8' }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width:"150px"}} />
                <h5 className="my-3">David Londoño</h5>
                <p className="text-muted mb-1">Estudiante</p>
                <p className="text-muted mb-4">Medellin-Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar Perfil</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill/>
                    <p className="mb-0" style={{ backgroundColor: '#DADDDC' }}>@dalongri</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub/>
                    <p className="mb-0" style={{ backgroundColor: '#DADDDC' }}>dalongri</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter/>
                    <p className="mb-0" style={{ backgroundColor: '#DADDDC' }}>Facebook</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram/>
                    <p className="mb-0" style={{ backgroundColor: '#DADDDC' }}>Instagram</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook/>
                    <p className="mb-0" style={{ backgroundColor: '#DADDDC' }}>Pagina Personal</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                
                <div className="row" style={{ backgroundColor: '#DADDDC' }}>
                  <div className="col-sm-3">
                    <p className= "mb-0" style={{ backgroundColor: '#A8D5D8' }}>Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">David Londoño Grisales.</p>
                  </div>
                </div>
                <hr/>

                <div className="row" style={{ backgroundColor: '#DADDDC' }}>
                  <div className="col-sm-3" style={{ backgroundColor: '#A8D5D8' }}>
                    <p className= "mb-0">Grado y grupo </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">11°A.</p>
                  </div>
                </div>
                <hr/>

                <div className="row" style={{ backgroundColor: '#DADDDC' }}>
                  <div className="col-sm-3" style={{ backgroundColor: '#A8D5D8' }}>
                    <p className= "mb-0">Institucion Educativa</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">I.E La salle de campoamor.</p>
                  </div>
                </div>
                <hr/>

                <div className="row" style={{ backgroundColor: '#DADDDC' }}>
                  <div className="col-sm-3" style={{ backgroundColor: '#A8D5D8' }}>
                    <p className= "mb-0">N° de reseñas</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">23 reseñas enviadas.</p>
                  </div>
                </div>
                <hr/>

                <div className="row" style={{ backgroundColor: '#DADDDC' }}>
                  <div className="col-sm-3" style={{ backgroundColor: '#A8D5D8' }}>
                    <p className= "mb-0">Fecha de creacion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">desde septiembre de 2023</p>
                  </div>
                </div>
                <hr/>   
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;