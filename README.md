# Redux - Counter

#### Redux and React Redux
```bash
yarn add redux react-redux
```
### Redux Settings and Steps
1. Create folder store
2. create reducer.js
3. createStore()
4. setup store by adding Provider
5. create mapDispatchToProps and
6. mapStateToProps

### Import and connect Actions
```jsx
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        ctr: state.ctrPr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onDeleteResult: (idArg) => dispatch(actionCreators.deleteResult(idArg))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

```
### And Passing the state by props
Then change the {this.state.something} to {this.props.ctr} - name props from mapStateToProps for state or mapDispatchToProps for actions

# Redux Advanced
## Middleware
```jsx
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
```
[Middleware](https://redux.js.org/advanced/middleware/)

## Redux DevTools 
### 1.2 Advanced store setup - to see the actions on redux dev tools
```jsx
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
```

### Adding ApplyMiddleware and as 2nd Argument the enhancer, composeEnhancers
```jsx
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
```
[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)


## Redux Thunk
#### Handling Asynchronous Code 
```bash
yarn add redux-thunk 
```
[Redux Thunk](https://github.com/reduxjs/redux-thunk)

### Import and add Thunk as 2nd Argument to the Middleware
```jsx
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
```

## Async Actions
[Async Actions](https://redux.js.org/advanced/async-actions)