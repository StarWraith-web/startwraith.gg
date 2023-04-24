import React from "react";
import { Route, Switch } from "react-router-dom";

import { Clips, Eventos, Home, LiderBoard, Tiers } from "../pages";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tiers">
        <Tiers />
      </Route>
      <Route path="/eventos">
        <Eventos />
      </Route>
      <Route path="/clips">
        <Clips />
      </Route>
      <Route path="/liderboard">
        <LiderBoard />
      </Route>
    </Switch>
  );
}
