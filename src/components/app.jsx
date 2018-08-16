import React, {Component} from 'react'
import '../index.css'
import ToDoList from './TodoList.jsx'
import {Link, Route, Switch} from 'react-router-dom'
import {addTodo, clearCompleted} from '../actions.js'

class App extends Component {
    constructor (props) {
      super(props)
      this.handleKeyPress = this.handleKeyPress.bind(this)
    }

  removeCompleted = () => {
    this.props.dispatch(clearCompleted())
  }

  handleKeyPress(event) {
    if(event.charCode===13) {
      let title = event.target.value
      this.props.dispatch(addTodo(title))
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
        <Switch>
            <Route exact path='/' render={ props => <ToDoList {...props} filter="all"/>}/>
            <Route path='/active' render={ props => <ToDoList {...props} filter="active"/>}/>
            <Route path='/completed' render={props => <ToDoList {...props} filter="completed"/>}/>
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