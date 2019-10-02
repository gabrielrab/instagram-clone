import React, { useState } from "react";

//Css
import "./New.css";

//Components
import Header from "../components/Header";
import api from "../services/api";

export default function New({ history, match }) {
  const { id } = match.params;
  const [values, setValues] = useState({});
  const [file, setFile] = useState({});
  const [progress, setProgress] = useState("Enviar");

  function handleChange(event) {
    const auxValues = { ...values };

    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("author", id);
    formData.append("place", values["place"]);
    formData.append("description", values["description"]);
    for (var i = 0; i < file.length; i++) {
      formData.append("img", file[i]);
    }

    try {
      const response = await api
        .post("/post", formData, {
          onUploadProgress: ProgressEvent => {
            setProgress("Carregando...");
          }
        })
        .then(res => {
          setProgress("Enviado com sucesso!");
          history.push("/feed");
        });
    } catch (error) {
      console.log(error);
      alert("Erro ao criar");
    }
  }

  function handleImageChange(event) {
    setFile(event.target.files);
  }
  return (
    <>
      <Header />
      <form id="new-post">
        <h1>Nova Postagem</h1>
        <input type="file" onChange={handleImageChange} />

        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          {progress}
        </button>
      </form>
    </>
  );
}
