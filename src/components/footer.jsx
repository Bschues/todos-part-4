import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCompleted } from "../actions.js";
import { Link } from "react-router-dom";

class Foot extends Component {
  removeCompleted = () => {
    console.log("removed");
    this.props.dispatch(clearCompleted());
  };
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>0</strong> item(s) left
        </span>
        <ul className="filters">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.removeCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
const mapStateTpProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateTpProps)(Foot);
