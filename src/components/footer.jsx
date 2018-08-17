import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCompleted } from "../actions.js";
import { Link } from "react-router-dom";

class Foot extends Component {

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.activeCount}</strong> item(s) left
        </span>
        <ul className="filters">
          <li>
            <Link to="/" className={this.props.filter === 'all' ? 'selected' : ''}>All</Link>
          </li>
          <li>
            <Link to="/active" className={this.props.filter === 'active' ? 'selected' : ''}>Active</Link>
          </li>
          <li>
            <Link to="/completed" className={this.props.filter === 'completed' ? 'selected' : ''}>Completed</Link>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
const mapStateTpProps = state => {
  return {
    activeCount: state.todos.filter(todo => !todo.completed).length
  };
};

const mapDispatchToProps = dispatch => {
    return {
      clearCompleted: () => {dispatch(clearCompleted())}
    }
}
export default connect(mapStateTpProps, mapDispatchToProps)(Foot);
