import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {
  
  render() {
    return(
      <li className={this.props.value}>
        <div className="view">
          <input className="toggle" type="checkbox" check={this.props.completed}/>
          <label>{this.props.TodoItem}</label>
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
        <ul className="renderedToDoList">
          {this.state.todos.map( todo => {
            if (todo.completed){
              return(
              <TodoItem toDoItem={todo.Title} key={todo.id} completed={todo.completed}/>)
            }else{
              return(
                <TodoItem value="" toDoItem={todo.title} key={todo.id} completed={todo.completed}/>
              )
            }
          })}
        </ul>
    </React.Fragment>
    )
  }
}
class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="todoH1">To-Dos</h1>
          <input classeName="addTodo" placeholder="Have something to do?" autoFocus/>
        </header>
        <ToDoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}

export default App;
