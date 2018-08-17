import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/app.jsx';
import registerServiceWorker from './registerServiceWorker';
import todoReducer from './reducer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(todoReducer)

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
