import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";

//CSS
import "./Sing.css";

//Images
import logo from "../assets/logo.svg";
export default function({ history }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState("Login");
  const [message, setMessage] = useState("");

  const handleChange = event => {
    const auxValues = { ...user };

    auxValues[event.target.name] = event.target.value;
    setUser(auxValues);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await api.post("/login", user, {
        onUploadProgress: ProgressEvent => {
          setLoading("Carregando...");
        }
      });
      const { _id } = response.data.user;
      if (response.status === 200) {
        history.push(`/feed/${_id}`);
      }
    } catch (error) {
      setMessage("Usuário ou senha incorretos");
      setLoading("Tente novamente");
    }
  };

  return (
    <div className="content-login">
      <form>
        <img src={logo} alt="Instagram" />
        <h2>Faça seu Login</h2>
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
          required
          placeholder="Senha"
          onChange={handleChange}
        />
        {message}
        <button onClick={handleSubmit}>{loading}</button>
        <Link to="/signup">Criar Usuário</Link>
      </form>
    </div>
  );
}
