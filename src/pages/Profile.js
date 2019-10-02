import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Profile.css";

//Components
import Header from "../components/Header";

import api from "../services/api";

export default function Profile({ match }) {
  const { id } = match.params;
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const { data } = await api.get(`/user/${id}`);
      setUser(data.user);
    }
    loadUser();
  }, [id]);

  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get(`/post-list/${id}`);
      setPost(data.post);
      debugger;
    }
    loadPost();
  }, [id]);
  return (
    <>
      <Header id={id} />
      <main>
        <section className="header-profile">
          <article className="content-profile">
            {/* {Colocar imagem de perfil} */}
            <img
              src="https://cdn.shopify.com/s/files/1/0088/3579/3001/files/biro-square_360x.png?v=1558875856"
              alt="Nome do Usuário"
            />
          </article>
          <article className="profile-infos">
            <h2>{user.user}</h2>
            <ul>
              <li>
                <b>0</b> publicações
              </li>
              <li>
                <b>10000</b> seguidores
              </li>
              <li>
                <b>10</b> seguindo
              </li>
            </ul>
            <p>{user.description}</p>
          </article>
        </section>
        <section className="posts">
          <div>Publicações</div>
          <ul>
            {post.map((image, index) => (
              <li key={index}>
                <Link to="">
                  <img src={image.image} alt="Profile infos" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
