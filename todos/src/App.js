import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';


class TodoItem extends Component {
  
  render() {
    return(
      <li className={this.props.value}>
        <div className="view">
          <input className="toggle" type="checkbox" check={this.props.completed}/>
          <label>{this.props.toDoItem}</label>
          <button className="destroy"></button>
        </div>
      </li>
    )
  }
}
class ToDoList extends Component {
  constructor (props) {
    super(props);
    this.state= {
      todos: todoList
    }
  }
  render() {
    return (
    <React.Fragment>
        <ul className="todo-list">
          {this.state.todos.map( todo => {
              return(
              <TodoItem toDoItem={todo.title} key={todo.id} completed={todo.completed}/>)
          })}
        </ul>
    </React.Fragment>
    )
  }
}
class App extends Component {


  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>To-Dos</h1>
          <input className="new-todo" placeholder="Have something to do?" autoFocus/>
        </header>
        <ToDoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
