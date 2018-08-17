import React, { Component } from "react";
import { connect } from "react-redux";
import { markComplete, deleteTodo } from "../actions.js";

class TodoItem extends Component {
  toggleChecked = id => e => {
    this.props.dispatch(markComplete(id));
    console.log("checked");
  };

  removeItem = id => () => {
    console.log(id);
    this.props.dispatch(deleteTodo(id));
  };

  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.completed}
            onChange={this.toggleChecked(this.props.id)}
          />
          <label>{this.props.toDoItem}</label>
          <button
            className="destroy"
            onClick={this.removeItem(this.props.id)}
          />
        </div>
      </li>
    );
  }
}

export default connect()(TodoItem);
