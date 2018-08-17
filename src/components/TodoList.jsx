import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

class ToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="todo-list">
          {this.props.todos.map(todo => {
            return (
              <TodoItem
                toDoItem={todo.title}
                completed={todo.completed}
                key={todo.id}
                id={todo.id}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.filter === "all") {
    return { todos: state.todos };
  } else if (ownProps.filter === "active") {
    return { todos: state.todos.filter(todo => !todo.completed) };
  } else if (ownProps.filter === "completed") {
    return { todos: state.todos.filter(todo => todo.completed) };
  }
};
export default connect(mapStateToProps)(ToDoList);
