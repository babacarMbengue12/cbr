import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <React.Fragment>
      <div className="container pt-5 pb-5">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/not-found">{() => <h1>Not found</h1>}</Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
