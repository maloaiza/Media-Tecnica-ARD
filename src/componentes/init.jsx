import React from "react";
import { Link } from "react-router-dom";
import portada from "../imagenes/portada.png";

function Init() {
  return (
    <div className="container" style={{ backgroundColor: '#A8D5D8' }}>
      <div className="row">
        <img
          src={portada}
          alt="logo"
          className="mx-auto"
          style={{ maxWidth: "500px" }}
        />
        <div className="container">
          <div className="mx-auto">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <form action="/HomeL" method="get">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheck1"
                    >
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Init;
