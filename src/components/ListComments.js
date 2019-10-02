import React, { useState, useEffect } from "react";
import io from "socket.io-client";

import api from "../services/api";

//Css
import "./ListComments.css";

export default function ListComment(props) {
  const { post } = props;
  const [comment, setComment] = useState([]);
  const [add, setAdd] = useState(null);

  useEffect(() => {
    async function loadComments() {
      const response = await api.get(`/post/${post}`);

      setComment(response.data.post.comments);
    }
    loadComments();
  }, []);

  useEffect(() => {
    const socket = io("https://codeby-backend.herokuapp.com");
    socket.on("comentario", newPost => {
      setAdd(newPost);
    });
  }, [add]);

  return (
    <div className="content-comments">
      <ul>
        {comment.map(comments => (
          <li key={comments._id}>
            <strong>{comments.author.user}</strong> {comments.comentario}
          </li>
        ))}
        {add && (
          <li key={add._id}>
            <strong>{add.author}</strong> {add.comment}
          </li>
        )}
      </ul>
    </div>
  );
}
