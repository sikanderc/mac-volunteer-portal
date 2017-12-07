import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import dataReducer from './Reducers/dataReducer'
import { Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'rc-time-picker/assets/index.css';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(dataReducer, applyMiddleware(thunk, middleware ))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
