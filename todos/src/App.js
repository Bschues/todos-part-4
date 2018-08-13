import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';



class App extends Component {
    constructor (props) {
      super(props)
      this.state = {todos: todoList}
      this.handleKeyPress = this.handleKeyPress.bind(this)
    }


  removeItem = (event) => {
    const newTodoList = this.state.todos.filter( todo => todo.id !== Number(event.target.name))
    this.setState({todos: newTodoList})
  }

  removeCompleted = (event) => {
    const removeList = this.state.todos
    const unfinishedTodos = removeList.filter(item => item.completed !== true)
    this.setState({todos: unfinishedTodos})
  }

  toggleChecked = (event) => {
    const newList = this.state.todos.slice();
    const itemIndex = newList.findIndex( todo => todo.id === Number(event.target.name))
    newList[itemIndex].completed = !newList[itemIndex].completed;
    this.setState({todos: newList})
    console.log("checked")
  }


  handleKeyPress(event) {
    if(event.charCode===13) { 
      const todoArray = todoList
        todoArray.push({
          userId: 1,
          id: (todoArray.length + 1),
          title: event.target.value,
          completed: false
        })
        this.setState({todos: todoArray})
        event.target.value = ""
      }
  }


  render() {
    return (
      <section className="todoapp">
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
        <ToDoList 
          todos={this.state.todos}
          toggleChecked={(event) => this.toggleChecked(event)}
          onClick={(event) => this.toggleChecked(event)} 
          removeItem={(event) => this.removeItem(event)}

        />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed" onClick={this.removeCompleted}>Clear completed</button>
        </footer>
      </section>
    );
  }
}



class TodoItem extends Component {
  render() {
    return(
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" name={this.props.id} type="checkbox" defaultChecked={this.props.completed} onChange={this.props.toggleChecked}/>
          <label>{this.props.toDoItem}</label>
          <button className="destroy" name={this.props.id} onClick={this.props.removeItem}></button>
        </div>
      </li>
    )
  }
}




class ToDoList extends Component {
  render() {
    return (
    <React.Fragment>
        <ul className="todo-list">
          {this.props.todos.map( todo => {
                return(
                  <TodoItem
                    onClick={(event) => this.props.onClick(event)}
                    removeItem={(event) => this.props.removeItem(event)}
                    toggleChecked={this.props.toggleChecked}
                    toDoItem={todo.title}
                    completed={todo.completed}
                    key={todo.id}
                    id={todo.id}
                  />
                )
              }
            )
          }
        </ul>
    </React.Fragment>
    )
  }
}
export default App;
