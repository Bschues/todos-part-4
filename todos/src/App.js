import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';
// class TodoItem extends Component {
//   state = {}
//   singleTodo = () => {
//     for (todo in todoList){
//       return todo
//     }
//   }
//   render() {
//     return( 
//       this.singleTodo()
//     )
//   }
// }
class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="todoH1">Todos</h1>
        </header>
        {/* <TodoItem>
        </TodoItem> */}
      </div>
    );
  }
}

export default App;
