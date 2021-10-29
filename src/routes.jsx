import { Component } from "react";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/perfil" component={Perfil} />

        <Route path="/register" children={(props) => <Register {...props} />} />

        <Route exact path="/" render={(props) => <Home {...props} />} />

        <Route path="/path">
          <input placeholder="Say Hello!"></input>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
