import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { ConnectedRouter } from "connected-react-router";


const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(todoReducer),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history actions
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
