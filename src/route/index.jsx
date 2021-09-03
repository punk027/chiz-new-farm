import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mine from "../pages/mine";
import Buy from "../pages/buy";
import Purchase from "../pages/purchase";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mine} />
          <Route exact path="/mine" component={Mine} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/purchase" component={Purchase} />
          
        </Switch>
      </Router>
    );
  }
}

export default Routes;
