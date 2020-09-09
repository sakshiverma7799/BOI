import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/GithubState";
import NavBar from "./components/layouts/NavBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "../src/components/users/Search";
import Alert from "../src/components/layouts/Alerts";
import "./App.css";

const App = () => {

  return (
    <GithubState>
        <Router>
          <div className="App">
            <NavBar title="GitHub React App" />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />

                <Route
                  exact
                  path="/user/:login"
                  render={(props) => (
                    <User
                      {...props}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
  );
};

export default App;
