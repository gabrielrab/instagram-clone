import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Feed from "./pages/Feed";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Feed} />
    </BrowserRouter>
  );
}
