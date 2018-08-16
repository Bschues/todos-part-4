import React, {Component} from 'react'
import '../index.css'
import {ToDoList} from './TodoList.jsx'
import todoList from '../todos.json'
import {Link, Route, Switch} from 'react-router-dom'

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {todos: todoList}
      this.handleKeyPress = this.handleKeyPress.bind(this)
    }


  removeItem = (event) => {
    let stateCopy = this.state.todos.slice()
    const newTodoList = stateCopy.filter( todo => todo.id !== Number(event.target.name))
    this.setState({todos: newTodoList})
  }

  removeCompleted = (event) => {
    let stateCopy2 = this.state.todos.slice()
    const unfinishedTodos = stateCopy2.filter(item => item.completed !== true)
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
      const todoArray = this.state.todos.slice()
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

  todosCollection = () => {
      return (
            <ToDoList 
            todos={this.state.todos}
            toggleChecked={(event) => this.toggleChecked(event)} 
            removeItem={(event) => this.removeItem(event)}
            />
      )
  }
  todosActive = () => {
      let active = this.state.todos.filter( todo => todo.completed===false)
      return (
            <ToDoList
            todos={active}
            toggleChecked={this.toggleChecked}
            removeItem={this.removeItem}
            />
      )
  }
  todosCompleted = () => {
      let completed = this.state.todos.filter( todo => todo.completed === true)
      return (
          <ToDoList
          todos={completed}
          toggleChecked={this.toggleChecked}
          removeItem={this.removeItem}
          />
      )
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
        <Switch>
            <Route exact path='/' component={this.todosCollection}/>
            <Route path='/active' component={this.todosActive}/>
            <Route path='/completed' component={this.todosCompleted}/>
        </Switch>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <Link to='/'>All</Link>
            </li>
            <li>
              <Link to='/active'>Active</Link>
            </li>
            <li>
              <Link to='/completed'>Completed</Link>
            </li>

          </ul>
          <button className="clear-completed" onClick={this.removeCompleted}>Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;