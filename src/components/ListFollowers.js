import React, { useEffect, useState } from "react";

//CSS
import "./ListFollowers.css";

import api from "../services/api";

export default function() {
  const [lister, setList] = useState([]);

  useEffect(() => {
    async function loadList() {
      const { data } = await api.get("/user");
      setList(data);
    }
    loadList();
  }, []);
  return (
    <section className="content-modal">
      <h1>Seguindo</h1>
      <ul>
        {lister.map((list, index) => (
          <li key={index}>
            <label>
              <img src={list.avatar} alt="profile avatar" />
              <strong>{list.user}</strong>
            </label>
            <button className="btn-follow">Seguindo</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
