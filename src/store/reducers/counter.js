import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            //And a sortcode of the return same code as above and using a function that comes from utility.js
            return updateObject(state, { counter: state.counter + 1 })
        //Long aproach of update state
        // const newState = Object.assign({}, state);
        // newState.counter = state.counter + 1
        // return newState;
        //do not need break because return
        case actionTypes.DECREMENT:
            return updateObject(state, { counter: state.counter - 1 })
        //Other aproach of update state
        // return {
        //     ...state,
        //     counter: state.counter - 1
        // }
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val })
        case actionTypes.SUBSTRACT:
            return updateObject(state, { counter: state.counter - action.val })
    }
    return state;
}

export default reducer;