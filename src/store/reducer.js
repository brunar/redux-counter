import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState;
        //do not need break because return
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
                // concat returns a new array which is the older array plus the argument you add to concat - immutable way to update an array
                // and push manipulates the original value
            }
        case actionTypes.DELETE_RESULT:
            const updateArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updateArray
            }
    }
    return state;
}

export default reducer;