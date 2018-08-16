import React, {Component} from 'react'
import {TodoItem} from './TodoItem'

export class ToDoList extends Component {
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