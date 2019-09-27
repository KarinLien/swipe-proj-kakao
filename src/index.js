import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*------------- */

import { Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registered from "./pages/Registered";

ReactDOM.render(
  <HashRouter basename="/">
    <div>
      <App />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registered" component={Registered} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
