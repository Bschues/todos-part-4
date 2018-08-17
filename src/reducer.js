import {MARK_COMPLETE, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED} from './actions.js'
import todoList from './todos.json';

const initialState = {
    todos: todoList
}

function randomId() { 
    return(
    ((Math.floor(Math.random() * 190000) + 1) ,console.log(initialState)) )}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case MARK_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id 
                    ? {...todo, completed: !todo.completed}
                    : todo
                )
            }
        case ADD_TODO:
            return  {
                ...state,
                todos: [
                    ...state.todos,
                    {   
                        userId: 1,
                        id: randomId,
                        title: action.title,
                        completed: false
                    }
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state
    }
}