import React from "react";
//Css
import "./Feed.css";

//Components
import Header from "../components/Header";
import Comment from "../components/Comment";

//Images
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

export default function Feed() {
  return (
    <>
      <Header />
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <div className="profile-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0088/3579/3001/files/biro-square_360x.png?v=1558875856"
                  alt="Foto de Perfil"
                />
              </div>
              <div>
                <span>
                  <b>gabrielrab</b>
                </span>
                <br />
                <span className="place">Codeby</span>
              </div>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img
            src="https://cdn.shopify.com/s/files/1/0088/3579/3001/files/biro-square_360x.png?v=1558875856"
            alt="Imagem Postada"
          />

          <footer>
            <div className="actions">
              <button type="button">
                <img src={like} alt="" />
              </button>
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>2 curtidas</strong>

            <p>
              <strong>username</strong> Olá mundo Codeby
            </p>
            <Comment post="2" user="3" />
          </footer>
        </article>
      </section>
    </>
  );
}
