import React, { Component } from "react";
import { connect } from "react-redux";
import {markComplete, deleteTodo } from "../actions.js";

class TodoItem extends Component {

  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.completed}
            onChange={()=>{this.props.markComplete(this.props.id)}}
          />
          <label>{this.props.toDoItem}</label>
          <button
            className="destroy"
            onClick={()=>{this.props.deleteTodo(this.props.id)}}
          />
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    markComplete: (id) => {dispatch(markComplete(id))},
    deleteTodo: (id) => {dispatch(deleteTodo(id))} 
  }
}
export default connect(null, mapDispatchToProps)(TodoItem);
