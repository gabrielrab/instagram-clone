import React, { useState } from "react";
import "./Comment.css";

export default function Comment(props) {
  const { post, user } = props;
  const [comment, setComment] = useState("");

  async function handlerComment(event) {
    event.preventDefault();
    const { value } = event.target;
    setComment(value);
  }

  async function sendComment(event) {
    event.preventDefault();

    setComment("");
  }
  return (
    <div className="comment-box">
      <input
        type="text"
        name="comment"
        value={comment}
        placeholder="Digite seu comentário"
        onChange={handlerComment}
      />
      <button onClick={sendComment}>Publicar</button>
    </div>
  );
}
