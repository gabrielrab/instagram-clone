import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import New from "./pages/New";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      {/* <Route path="/feed/:id" component={Feed} /> */}
      <Route path="/feed" component={Feed} />
      <Route path="/new/:id" component={New} />
      <Route path="/profile/:id" component={Profile} />
    </BrowserRouter>
  );
}
