import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions.js";

class Head extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.charCode === 13) {
      console.log(this.props);
      let title = event.target.value;
      this.props.addTodo(title)
      event.target.value = "";
    }
  }

  render() {
    return (
      <header className="header">
        <h1>To-Dos</h1>
        <input
          className="new-todo"
          placeholder="Have something to do?"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          autoFocus
        />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDistpatchToProps = dispatch => {
  return {
    addTodo: (title) => {dispatch(addTodo(title))}
  }
}
export default connect(mapStateToProps,mapDistpatchToProps)(Head);
