import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import api from "../services/api";

//Css
import "./ListComments.css";

export default function ListComment(props) {
  const { post } = props;
  const [comment, setComment] = useState([]);

  registerSocket();

  useEffect(() => {
    async function loadComments() {
      const response = await api.get(`/post/${post}`);
      setComment(response.data.post.comments);
    }
    loadComments();
  }, []);

  function registerSocket() {
    //mudar para heroku
    const socket = io("http://localhost:3000");

    //socket.on("comentario", alert("novo comentario"));
  }
  return (
    <div className="content-comments">
      <ul>
        {comment.map(comments => (
          <li key={comments._id}>
            <strong>{comments.author.user}</strong> {comments.comentario}
          </li>
        ))}
      </ul>
    </div>
  );
}
