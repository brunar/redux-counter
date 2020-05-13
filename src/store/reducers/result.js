import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updateArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, { results: updateArray })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // concat returns a new array which is the older array plus the argument you add to concat - immutable way to update an array
        //and push manipulates the original value
        case actionTypes.STORE_RESULT: return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.resultAct }) })
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    }
    return state;
}

export default reducer;