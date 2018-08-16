import React, {Component} from 'react'

export class TodoItem extends Component {
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