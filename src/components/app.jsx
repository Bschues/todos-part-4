import React, { Component } from "react";
import "../index.css";
import ToDoList from "./TodoList.jsx";
import Head from "./header.jsx";
import Foot from "./footer.jsx";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Head />
        <Switch>
          <Route
            exact
            path="/home"
            render={props => (
              <React.Fragment>
                <ToDoList {...props} filter="all" /> <Foot filter="all" />
              </React.Fragment>
            )}
          />

          <Route
            path="/active"
            render={props => (
              <React.Fragment>
                <ToDoList {...props} filter="active" /> <Foot filter="active" />
              </React.Fragment>
            )}
          />

          <Route
            path="/completed"
            render={props => (
              <React.Fragment>
                <ToDoList {...props} filter="completed" />{" "}
                <Foot filter="completed" />
              </React.Fragment>
            )}
          />
        </Switch>
      </section>
    );
  }
}

export default App;
