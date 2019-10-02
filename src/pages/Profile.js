import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Profile.css";

//Components
import Header from "../components/Header";
import ListFollowers from "../components/ListFollowers";

import api from "../services/api";

export default function Profile({ match }) {
  const { id } = match.params;
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [follower, setFollower] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadFollower() {
      const { data } = await api.get("/followers");
      setFollower(data.quant);
    }
    loadFollower();
  }, [id]);

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
    }
    loadPost();
  }, [id]);

  function changeModal() {
    modal === false ? setModal(true) : setModal(false);
  }

  return (
    <>
      <Header id={id} />
      {modal === true ? (
        <div className="modal">
          <button onClick={changeModal}>X</button>
          <ListFollowers />
        </div>
      ) : (
        <></>
      )}

      <main>
        <section className="header-profile">
          <article className="content-profile">
            <img src={user.avatar} alt="avatar" />
          </article>
          <article className="profile-infos">
            <h2>{user.user}</h2>
            <ul>
              <li>
                <b>{post.length}</b> publicações
              </li>
              <li>
                <b>{user.following}</b> seguidores
              </li>
              <li>
                <button onClick={changeModal}>
                  <b>{follower}</b> seguindo
                </button>
              </li>
            </ul>
            <p>{user.bio}</p>
          </article>
        </section>
        <section className="posts">
          <div>Publicações</div>
          {post.length > 0 ? (
            <ul>
              {post.map((image, index) => (
                <li key={index}>
                  <Link to="">
                    <img src={image.image} alt="Profile infos" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty">
              :(
              <br />
              Não há nenhuma publicação
            </div>
          )}
        </section>
      </main>
    </>
  );
}
