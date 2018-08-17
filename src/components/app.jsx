import React, {Component} from 'react'
import '../index.css'
import ToDoList from './TodoList.jsx'
import Head from './header.jsx'
import Foot from './footer.jsx'
import {Route, Switch} from 'react-router-dom'



class App extends Component {
    
  render() {
    return (
      <section className="todoapp">
        <Head/>
        <Switch>
            <Route exact path='/' render={ props => <ToDoList {...props} filter="all"/>}/>
            <Route path='/active' render={ props => <ToDoList {...props} filter="active"/>}/>
            <Route path='/completed' render={props => <ToDoList {...props} filter="completed"/>}/>
        </Switch>
        <Foot/>
      </section>
    );
  }
}

export default App;