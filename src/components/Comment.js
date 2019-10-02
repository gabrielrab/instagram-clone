import React, { useState } from "react";
import io from "socket.io-client";
import "./Comment.css";

import api from "../services/api";

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
    try {
      const response = await api.post(`/comment/${post}/${user}`, {
        comment: comment
      });
      if (response.status === 200) {
        const socket = io("http://localhost:3000");
        socket.emit("comentario", response.data);
      }
    } catch (error) {
      console.log(error);
    }

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
