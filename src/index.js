import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/app.jsx';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
