import React, { useState, useEffect } from "react";
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

export default function Feed({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const response = await api.get(`/post`);

      setPost(response.data.post);
      debugger;
    }
    loadPost();
  }, []);

  return (
    <>
      {/* Colocar match.id */}
      <Header id="5d94ae40190a2a0649d07ed9" />
      <section id="post-list">
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
              <Comment post={posts._id} user="5d94ae40190a2a0649d07ed9" />
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
