import { Component } from "react";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/perfil" component={Perfil} />

          <Route
            path="/register"
            children={(props) => <Register {...props} />}
          />

          <Route exact path="/" render={(props) => <Home {...props} />} />

          <Route path="/path">
            <input placeholder="Say Hello!"></input>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
