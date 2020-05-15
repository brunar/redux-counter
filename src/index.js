import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctrPr: counterReducer,
    res: resultReducer
});
//Adding Middleware
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}
//Import compose from redux at the top
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Passing ApplyMiddleware as function into the enhancer, composeEnhancers 
//And Adding Thunk as a 2nd argument to the applyMiddleware()
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/view/redux-counter">
      <App />
    </BrowserRouter>
  </Provider>  
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
