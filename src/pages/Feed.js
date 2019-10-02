import React, { useState, useEffect } from "react";

import io from "socket.io-client";

//Css
import "./Feed.css";

//Components
import Header from "../components/Header";
import Comment from "../components/Comment";
import ListComments from "../components/ListComments";

//Images
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

import api from "../services/api";

//Context
import { AuthContext } from "../services/contex";

export default function Feed({ match }) {
  const { id } = match.params;

  const [post, setPost] = useState([]);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(`/post`);

      setPost(response.data.post);
    }
    loadPost();
  }, []);

  useEffect(() => {
    const socket = io("https://codeby-backend.herokuapp.com");
    socket.on("post", newPost => {
      setAcc(newPost);
      debugger;
    });
  }, [acc]);
  return (
    <>
      <AuthContext.Provider value={{ id }}>
        <Header />
      </AuthContext.Provider>
      <section id="post-list">
        {acc && (
          <article key={acc.post._id}>
            <header>
              <div className="user-info">
                <div className="profile-image">
                  <img src={acc.user.avatar} alt="Foto de Perfil" />
                </div>
                <div>
                  <span>
                    <b>{acc.user.user}</b>
                  </span>
                  <br />
                  <span className="place">{acc.post.place}</span>
                </div>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img src={acc.post.image} alt="Imagem Postada" />

            <footer>
              <div className="actions">
                <button type="button">
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{acc.post.likes} curtidas</strong>

              <p>
                <strong>{acc.user.user}</strong> {acc.post.description}
              </p>
              <ListComments post={acc.post._id} />
              <Comment post={acc.post._id} user={id} />
            </footer>
          </article>
        )}
        {post.map((posts, index) => (
          <article key={posts._id}>
            <header>
              <div className="user-info">
                <div className="profile-image">
                  <img src={posts.author.avatar} alt="Foto de Perfil" />
                </div>
                <div>
                  <span>
                    <b>{posts.author.user}</b>
                  </span>
                  <br />
                  <span className="place">{posts.place}</span>
                </div>
              </div>

              <img src={more} alt="Mais" />
            </header>

            <img src={posts.image} alt="Imagem Postada" />

            <footer>
              <div className="actions">
                <button type="button">
                  <img src={like} alt="" />
                </button>
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>{posts.likes} curtidas</strong>

              <p>
                <strong>{posts.author.user}</strong> {posts.description}
              </p>
              <ListComments post={posts._id} />
              <Comment post={posts._id} user={id} />
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
