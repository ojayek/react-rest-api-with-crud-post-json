import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";

const Container = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </div>
    </div>
  </div>
);

export default Container;
