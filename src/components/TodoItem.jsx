import React from 'react';
import {connect} from 'react-redux';
import {markComplete, deleteTodo} from '../actions.js';

  class TodoItem extends React.Component {

  toggleChecked = id => e => {
      this.props.dispatch(markComplete(id))
      console.log("checked")
    }

    
  removeItem = id => () => {
    this.props.dispatch(deleteTodo(id))
    }

    render() {
      return(
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input 
              className="toggle" 
              name={this.props.id} 
              type="checkbox" 
              defaultChecked={this.props.completed} 
              onChange={this.toggleChecked(this.props.id)}/>
            <label>{this.props.toDoItem}</label>
            <button className="destroy" name={this.props.id} onClick={this.removeItem(this.props.id)}></button>
          </div>
        </li>
      )
    }
  }

  export default connect()(TodoItem)