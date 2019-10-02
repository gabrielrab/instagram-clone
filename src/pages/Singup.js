import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Sing.css";

//Images
import logo from "../assets/logo.svg";
import api from "../services/api";
export default function({ history }) {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("Criar");

  const handleChange = event => {
    const auxValues = { ...user };

    auxValues[event.target.name] = event.target.value;
    setUser(auxValues);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("user", user["user"]);
    formData.append("password", user["password"]);
    formData.append("bio", user["bio"]);

    try {
      const response = await api.post("/user", user, {
        onUploadProgress: ProgressEvent => {
          setLoading("Carregando...");
        }
      });
      const { _id } = response.data.users;
      if (response.status === 200) {
        setLoading("Enviado com sucesso!");
        history.push(`/feed/${_id}`);
      }
    } catch (error) {
      console.log(error);
      setMessage("Erro tente novamente");
      setLoading("Tente novamente");
    }
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
        {message}
        <button onClick={handleSubmit}>{loading}</button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </div>
  );
}
