import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Singup from "./pages/Singup";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Singup} />
      <Route path="/feed/:id" component={Feed} />
      <Route path="/new/:id" component={New} />
      <Route path="/profile/:id" component={Profile} />
    </BrowserRouter>
  );
}
