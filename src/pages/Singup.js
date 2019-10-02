import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Sing.css";

//Images
import logo from "../assets/logo.svg";
export default function() {
  const [user, setUser] = useState([]);

  const handleChange = event => {
    const auxValues = { ...user };

    auxValues[event.target.name] = event.target.value;
    setUser(auxValues);
  };
  return (
    <div className="content-login">
      <form>
        <img src={logo} alt="Instagram" />
        <h2>Criar usuário</h2>
        <input
          type="text"
          name="user"
          required
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          required
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Digite sua biografia"
          required
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Criar</button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </div>
  );
}
