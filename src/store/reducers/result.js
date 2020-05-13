import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.resultAct })
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