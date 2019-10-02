import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import profile from "../assets/user.svg";

export default function Header(props) {
  const { id } = props;
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/feed">
          <img src={logo} alt="Instagram" />
        </Link>
        <div>
          <Link to={`/new/${id}`}>
            <img src={camera} alt="Enviar Publicação" />
          </Link>
          <>
            <Link to={`/profile/${id}`}>
              <img src={profile} alt="Enviar Publicação" className="icon" />
            </Link>
          </>
        </div>
      </div>
    </header>
  );
}
